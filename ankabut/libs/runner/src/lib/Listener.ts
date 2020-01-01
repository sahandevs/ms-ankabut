import * as Parser from '@ankabut/parser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

export class HashemiVisitor extends AbstractParseTreeVisitor<any>
  implements Parser.HashemiGrammerVisitor<any> {
  protected defaultResult() {
    return null;
  }

  constructor(
    private onSolve: (T: any) => void,
    private startingPoint: string,
    private builtInfunctions: (functionName: string, params: any[]) => any
  ) {
    super();
  }

  runFunction(functionName: string, params: any[]) {
    const fun = this.functions[functionName];
    if (fun) return this.visitBlock(fun);
    return this.builtInfunctions(functionName, params);
  }

  shouldVisitNextChild(_, __) {
    return true;
  }

  visitSourceFile(ctx: Parser.SourceFileContext) {
    super.visitChildren(ctx);
    return this.runFunction(this.startingPoint, []);
  }

  functions: { [name: string]: Parser.BlockContext } = {};

  visitFunction(ctx: Parser.FunctionContext) {
    let identifier = ctx.IDENTIFIER();
    identifier = Array.isArray(identifier) ? identifier : [identifier];
    this.functions[identifier[0].text] = ctx.block();
  }

  visitBlock(ctx: Parser.BlockContext) {
    let statements = ctx.statement();
    statements = Array.isArray(statements) ? statements : [statements];
    for (const statement of statements) {
      const result = this.visitStatement(statement);
      if (result['__TYPE__'] == 'return') return result.value;
    }
    return 0;
  }

  visitStatement(ctx: Parser.StatementContext) {
    if (ctx.if_statement()) return this.visitIf_statement(ctx.if_statement());
    if (ctx.return_statement())
      return this.visitReturn_statement(ctx.return_statement());
    if (ctx.expression()) return this.visitExpression(ctx.expression());
    return 0;
  }

  visitIf_statement(ctx: Parser.If_statementContext) {
    let branches = ctx.block();
    branches = Array.isArray(branches) ? branches : [branches];
    const trueBranch = branches[0];
    const falseBranch = branches[1];
    if (this.visitExpression(ctx._condition)) {
      return this.visitBlock(trueBranch);
    } else {
      if (falseBranch) return this.visitBlock(falseBranch);
      else return 0;
    }
  }

  visitReturn_statement(ctx: Parser.Return_statementContext) {
    const expr = ctx.expression();
    if (expr) {
      const _value = this.visitExpression(expr);
      return { __TYPE__: 'return', value: _value };
    }
    return { __TYPE__: 'return', value: null };
  }

  visitExpression(ctx: Parser.ExpressionContext) {
    const children = ctx.logic_term();
    if (children.length === 1) return this.visitLogic_term(children[0]);
    const left = this.visitLogic_term(children[0]);
    const right = this.visitLogic_term(children[1]);
    switch (ctx._op.text) {
      case '||':
        return left || right;
      default:
        throw new Error('Invalid ' + ctx._op.text);
    }
  }

  visitLogic_term(ctx: Parser.Logic_termContext) {
    const children = ctx.logic_factor();
    if (children.length === 1) return this.visitLogic_factor(children[0]);
    const left = this.visitLogic_factor(children[0]);
    const right = this.visitLogic_factor(children[1]);
    switch (ctx._op.text) {
      case '&&':
        return left && right;
      default:
        throw new Error('Invalid ' + ctx._op.text);
    }
  }

  visitLogic_factor(ctx: Parser.Logic_factorContext) {
    let arths = ctx.arithmetic();
    arths = Array.isArray(arths) ? arths : [arths];
    if (arths.length == 2) {
      const left = this.visitArithmetic(arths[0]);
      const right = this.visitArithmetic(arths[1]);
      switch (ctx._op.text) {
        case '<':
          return left > right;
        case '>':
          return left > right;
        case '<=':
          return left <= right;
        case '>=':
          return left >= right;
        case '!=':
          return left != right;
        case '==':
          return left == right;
        default:
          throw new Error('Invalid ' + ctx._op.text);
      }
    } else {
      return this.visitArithmetic(arths[0]);
    }
  }

  visitArithmetic(ctx: Parser.ArithmeticContext) {
    const terms = ctx.term();
    if (terms.length === 1) return this.visitTerm(terms[0]);
    const left = this.visitTerm(terms[0]);
    const right = this.visitTerm(terms[1]);
    switch (ctx._op.text) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      default:
        throw new Error('Invalid arthmetic + ' + ctx._op.text);
    }
  }

  visitTerm(ctx: Parser.TermContext) {
    const factors = ctx.factor();
    if (factors.length === 1) return this.visitFactor(factors[0]);
    const left = this.visitFactor(factors[0]);
    const right = this.visitFactor(factors[1]);
    switch (ctx._op.text) {
      case '*':
        return left * right;
      case '/':
        return left / right;
      case '%':
        return left % right;
      default:
        throw new Error('Invalid term + ' + ctx._op.text);
    }
  }

  visitFactor(ctx: Parser.FactorContext) {
    const stringLit = ctx.STRING_LITERAL();
    if (stringLit) return stringLit.text.substring(1, stringLit.text.length - 1);
    const numericLit = ctx.NUMERIC_LITERAL();
    if (numericLit) return Number(numericLit.toString());
    const expresssion = ctx.expression();
    if (expresssion) return this.visitExpression(expresssion);
    const memberExpression = ctx.member_expression();
    if (memberExpression)
      return this.runFunction(
        ctx.IDENTIFIER() + '',
        this.visitMember_expression(memberExpression)
      );
  }

  visitMember_expression(ctx: Parser.Member_expressionContext) {
    const parameters = ctx.expression().map(exp => this.visitExpression(exp));
    return parameters;
  }
}

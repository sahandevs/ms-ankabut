import * as Parser from '@ankabut/parser';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'

export class HashemiVisitor extends AbstractParseTreeVisitor<any> implements Parser.HashemiGrammerVisitor<any> {

  protected defaultResult() {
    return null;
  }

  constructor(private onSolve: (T: any) => void) {
    super();
  }

  visitSourceFile(ctx: Parser.SourceFileContext) {
    return 4;
  }

}
// Generated from ../HashemiGrammer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { SourceFileContext } from "./HashemiGrammerParser";
import { FunctionContext } from "./HashemiGrammerParser";
import { BlockContext } from "./HashemiGrammerParser";
import { StatementContext } from "./HashemiGrammerParser";
import { While_statementContext } from "./HashemiGrammerParser";
import { If_statementContext } from "./HashemiGrammerParser";
import { Return_statementContext } from "./HashemiGrammerParser";
import { ExpressionContext } from "./HashemiGrammerParser";
import { Logic_termContext } from "./HashemiGrammerParser";
import { Logic_factorContext } from "./HashemiGrammerParser";
import { ArithmeticContext } from "./HashemiGrammerParser";
import { TermContext } from "./HashemiGrammerParser";
import { FactorContext } from "./HashemiGrammerParser";
import { Member_expressionContext } from "./HashemiGrammerParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HashemiGrammerParser`.
 */
export interface HashemiGrammerListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	enterSourceFile?: (ctx: SourceFileContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.sourceFile`.
	 * @param ctx the parse tree
	 */
	exitSourceFile?: (ctx: SourceFileContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.while_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.while_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_statement?: (ctx: While_statementContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.logic_term`.
	 * @param ctx the parse tree
	 */
	enterLogic_term?: (ctx: Logic_termContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.logic_term`.
	 * @param ctx the parse tree
	 */
	exitLogic_term?: (ctx: Logic_termContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.logic_factor`.
	 * @param ctx the parse tree
	 */
	enterLogic_factor?: (ctx: Logic_factorContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.logic_factor`.
	 * @param ctx the parse tree
	 */
	exitLogic_factor?: (ctx: Logic_factorContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.arithmetic`.
	 * @param ctx the parse tree
	 */
	enterArithmetic?: (ctx: ArithmeticContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.arithmetic`.
	 * @param ctx the parse tree
	 */
	exitArithmetic?: (ctx: ArithmeticContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `HashemiGrammerParser.member_expression`.
	 * @param ctx the parse tree
	 */
	enterMember_expression?: (ctx: Member_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `HashemiGrammerParser.member_expression`.
	 * @param ctx the parse tree
	 */
	exitMember_expression?: (ctx: Member_expressionContext) => void;
}


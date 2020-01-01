// Generated from ../HashemiGrammer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HashemiGrammerParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HashemiGrammerVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.sourceFile`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSourceFile?: (ctx: SourceFileContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.while_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_statement?: (ctx: While_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.logic_term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogic_term?: (ctx: Logic_termContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.logic_factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogic_factor?: (ctx: Logic_factorContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.arithmetic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmetic?: (ctx: ArithmeticContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `HashemiGrammerParser.member_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMember_expression?: (ctx: Member_expressionContext) => Result;
}


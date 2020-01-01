// Generated from ../HashemiGrammer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { HashemiGrammerListener } from "./HashemiGrammerListener";
import { HashemiGrammerVisitor } from "./HashemiGrammerVisitor";


export class HashemiGrammerParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly WS = 33;
	public static readonly COMMENT = 34;
	public static readonly LINE_COMMENT = 35;
	public static readonly IDENTIFIER = 36;
	public static readonly STRING_LITERAL = 37;
	public static readonly NUMERIC_LITERAL = 38;
	public static readonly RULE_sourceFile = 0;
	public static readonly RULE_function = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_while_statement = 4;
	public static readonly RULE_if_statement = 5;
	public static readonly RULE_return_statement = 6;
	public static readonly RULE_expression = 7;
	public static readonly RULE_logic_term = 8;
	public static readonly RULE_logic_factor = 9;
	public static readonly RULE_arithmetic = 10;
	public static readonly RULE_term = 11;
	public static readonly RULE_factor = 12;
	public static readonly RULE_member_expression = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"sourceFile", "function", "block", "statement", "while_statement", "if_statement", 
		"return_statement", "expression", "logic_term", "logic_factor", "arithmetic", 
		"term", "factor", "member_expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'bebin'", "'('", "','", "')'", "'{'", "'}'", "'khob'", "';'", 
		"'badi'", "'debugger'", "'ta'", "') bood'", "'age'", "'na?'", "'bede'", 
		"'||'", "'&&'", "'<'", "'<='", "'>'", "'>='", "'=='", "'!='", "'+'", "'-'", 
		"'*'", "'/'", "'%'", "'='", "'.'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "WS", "COMMENT", 
		"LINE_COMMENT", "IDENTIFIER", "STRING_LITERAL", "NUMERIC_LITERAL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HashemiGrammerParser._LITERAL_NAMES, HashemiGrammerParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HashemiGrammerParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "HashemiGrammer.g4"; }

	// @Override
	public get ruleNames(): string[] { return HashemiGrammerParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return HashemiGrammerParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(HashemiGrammerParser._ATN, this);
	}
	// @RuleVersion(0)
	public sourceFile(): SourceFileContext {
		let _localctx: SourceFileContext = new SourceFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, HashemiGrammerParser.RULE_sourceFile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.function();
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HashemiGrammerParser.T__0) {
				{
				{
				this.state = 29;
				this.function();
				}
				}
				this.state = 34;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 35;
			this.match(HashemiGrammerParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function(): FunctionContext {
		let _localctx: FunctionContext = new FunctionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, HashemiGrammerParser.RULE_function);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 37;
			this.match(HashemiGrammerParser.T__0);
			this.state = 38;
			this.match(HashemiGrammerParser.IDENTIFIER);
			this.state = 39;
			_localctx._s = this.match(HashemiGrammerParser.T__1);
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HashemiGrammerParser.IDENTIFIER) {
				{
				this.state = 40;
				this.match(HashemiGrammerParser.IDENTIFIER);
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === HashemiGrammerParser.T__2) {
					{
					{
					this.state = 41;
					this.match(HashemiGrammerParser.T__2);
					this.state = 42;
					this.match(HashemiGrammerParser.IDENTIFIER);
					}
					}
					this.state = 47;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 50;
			this.match(HashemiGrammerParser.T__3);
			this.state = 51;
			_localctx._body = this.block(false);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(inLoop: boolean): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state, inLoop);
		this.enterRule(_localctx, 4, HashemiGrammerParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			_localctx._s = this.match(HashemiGrammerParser.T__4);
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HashemiGrammerParser.T__1) | (1 << HashemiGrammerParser.T__6) | (1 << HashemiGrammerParser.T__8) | (1 << HashemiGrammerParser.T__9) | (1 << HashemiGrammerParser.T__10) | (1 << HashemiGrammerParser.T__12) | (1 << HashemiGrammerParser.T__14))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (HashemiGrammerParser.IDENTIFIER - 36)) | (1 << (HashemiGrammerParser.STRING_LITERAL - 36)) | (1 << (HashemiGrammerParser.NUMERIC_LITERAL - 36)))) !== 0)) {
				{
				{
				this.state = 54;
				this.statement(inLoop);
				}
				}
				this.state = 59;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 60;
			_localctx._e = this.match(HashemiGrammerParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(inLoop: boolean): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state, inLoop);
		this.enterRule(_localctx, 6, HashemiGrammerParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HashemiGrammerParser.T__10:
				{
				this.state = 62;
				this.while_statement();
				}
				break;
			case HashemiGrammerParser.T__6:
				{
				this.state = 63;
				_localctx._b = this.match(HashemiGrammerParser.T__6);
				this.state = 64;
				this.match(HashemiGrammerParser.T__7);
				}
				break;
			case HashemiGrammerParser.T__8:
				{
				this.state = 65;
				_localctx._c = this.match(HashemiGrammerParser.T__8);
				this.state = 66;
				this.match(HashemiGrammerParser.T__7);
				}
				break;
			case HashemiGrammerParser.T__12:
				{
				this.state = 67;
				this.if_statement(inLoop);
				}
				break;
			case HashemiGrammerParser.T__14:
				{
				this.state = 68;
				this.return_statement();
				}
				break;
			case HashemiGrammerParser.T__1:
			case HashemiGrammerParser.IDENTIFIER:
			case HashemiGrammerParser.STRING_LITERAL:
			case HashemiGrammerParser.NUMERIC_LITERAL:
				{
				this.state = 69;
				this.expression();
				this.state = 70;
				this.match(HashemiGrammerParser.T__7);
				}
				break;
			case HashemiGrammerParser.T__9:
				{
				this.state = 72;
				_localctx._d = this.match(HashemiGrammerParser.T__9);
				this.state = 73;
				this.match(HashemiGrammerParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while_statement(): While_statementContext {
		let _localctx: While_statementContext = new While_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HashemiGrammerParser.RULE_while_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			_localctx._w = this.match(HashemiGrammerParser.T__10);
			this.state = 77;
			this.match(HashemiGrammerParser.T__1);
			this.state = 78;
			_localctx._condition = this.expression();
			this.state = 79;
			this.match(HashemiGrammerParser.T__11);
			this.state = 80;
			_localctx._body = this.block(true);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_statement(inLoop: boolean): If_statementContext {
		let _localctx: If_statementContext = new If_statementContext(this._ctx, this.state, inLoop);
		this.enterRule(_localctx, 10, HashemiGrammerParser.RULE_if_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			_localctx._i = this.match(HashemiGrammerParser.T__12);
			this.state = 83;
			this.match(HashemiGrammerParser.T__1);
			this.state = 84;
			_localctx._condition = this.expression();
			this.state = 85;
			this.match(HashemiGrammerParser.T__11);
			this.state = 86;
			_localctx._then = _localctx._block = this.block(inLoop);
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HashemiGrammerParser.T__13) {
				{
				this.state = 87;
				this.match(HashemiGrammerParser.T__13);
				this.state = 88;
				_localctx._block = this.block(inLoop);
				 elsePart = _localctx._block.result; 
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_statement(): Return_statementContext {
		let _localctx: Return_statementContext = new Return_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HashemiGrammerParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			_localctx._r = this.match(HashemiGrammerParser.T__14);
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HashemiGrammerParser.T__1 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (HashemiGrammerParser.IDENTIFIER - 36)) | (1 << (HashemiGrammerParser.STRING_LITERAL - 36)) | (1 << (HashemiGrammerParser.NUMERIC_LITERAL - 36)))) !== 0)) {
				{
				this.state = 94;
				this.expression();
				}
			}

			this.state = 97;
			this.match(HashemiGrammerParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, HashemiGrammerParser.RULE_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.logic_term();
			this.state = 104;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 100;
					_localctx._op = this.match(HashemiGrammerParser.T__15);
					this.state = 101;
					this.logic_term();
					}
					}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logic_term(): Logic_termContext {
		let _localctx: Logic_termContext = new Logic_termContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HashemiGrammerParser.RULE_logic_term);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.logic_factor();
			this.state = 112;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 108;
					_localctx._op = this.match(HashemiGrammerParser.T__16);
					this.state = 109;
					this.logic_factor();
					}
					}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logic_factor(): Logic_factorContext {
		let _localctx: Logic_factorContext = new Logic_factorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HashemiGrammerParser.RULE_logic_factor);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.arithmetic();
			this.state = 118;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 116;
				_localctx._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HashemiGrammerParser.T__17) | (1 << HashemiGrammerParser.T__18) | (1 << HashemiGrammerParser.T__19) | (1 << HashemiGrammerParser.T__20) | (1 << HashemiGrammerParser.T__21) | (1 << HashemiGrammerParser.T__22))) !== 0))) {
					_localctx._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 117;
				this.arithmetic();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arithmetic(): ArithmeticContext {
		let _localctx: ArithmeticContext = new ArithmeticContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, HashemiGrammerParser.RULE_arithmetic);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.term();
			this.state = 125;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 121;
					_localctx._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!(_la === HashemiGrammerParser.T__23 || _la === HashemiGrammerParser.T__24)) {
						_localctx._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 122;
					this.term();
					}
					}
				}
				this.state = 127;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, HashemiGrammerParser.RULE_term);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.factor();
			this.state = 133;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 129;
					_localctx._op = this._input.LT(1);
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HashemiGrammerParser.T__25) | (1 << HashemiGrammerParser.T__26) | (1 << HashemiGrammerParser.T__27))) !== 0))) {
						_localctx._op = this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 130;
					this.factor();
					}
					}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, HashemiGrammerParser.RULE_factor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HashemiGrammerParser.IDENTIFIER:
				{
				this.state = 136;
				this.match(HashemiGrammerParser.IDENTIFIER);
				this.state = 139;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 137;
					this.member_expression(null, null, assignmentName);
					}
					break;

				case 2:
					// tslint:disable-next-line:no-empty
					{
					}
					break;
				}
				}
				break;
			case HashemiGrammerParser.STRING_LITERAL:
				{
				this.state = 141;
				this.match(HashemiGrammerParser.STRING_LITERAL);
				}
				break;
			case HashemiGrammerParser.NUMERIC_LITERAL:
				{
				this.state = 142;
				this.match(HashemiGrammerParser.NUMERIC_LITERAL);
				}
				break;
			case HashemiGrammerParser.T__1:
				{
				this.state = 143;
				_localctx._s = this.match(HashemiGrammerParser.T__1);
				this.state = 144;
				_localctx._expr = this.expression();
				this.state = 145;
				_localctx._e = this.match(HashemiGrammerParser.T__3);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public member_expression(r: HashemExpressionNode,assignmentReceiver: HashemExpressionNode,assignmentName: HashemExpressionNode): Member_expressionContext {
		let _localctx: Member_expressionContext = new Member_expressionContext(this._ctx, this.state, r, assignmentReceiver, assignmentName);
		this.enterRule(_localctx, 26, HashemiGrammerParser.RULE_member_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 169;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HashemiGrammerParser.T__1:
				{
				this.state = 149;
				this.match(HashemiGrammerParser.T__1);
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === HashemiGrammerParser.T__1 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (HashemiGrammerParser.IDENTIFIER - 36)) | (1 << (HashemiGrammerParser.STRING_LITERAL - 36)) | (1 << (HashemiGrammerParser.NUMERIC_LITERAL - 36)))) !== 0)) {
					{
					this.state = 150;
					this.expression();
					this.state = 155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === HashemiGrammerParser.T__2) {
						{
						{
						this.state = 151;
						this.match(HashemiGrammerParser.T__2);
						this.state = 152;
						this.expression();
						}
						}
						this.state = 157;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 160;
				_localctx._e = this.match(HashemiGrammerParser.T__3);
				}
				break;
			case HashemiGrammerParser.T__28:
				{
				this.state = 161;
				this.match(HashemiGrammerParser.T__28);
				this.state = 162;
				this.expression();
				}
				break;
			case HashemiGrammerParser.T__29:
				{
				this.state = 163;
				this.match(HashemiGrammerParser.T__29);
				this.state = 164;
				this.match(HashemiGrammerParser.IDENTIFIER);
				}
				break;
			case HashemiGrammerParser.T__30:
				{
				this.state = 165;
				this.match(HashemiGrammerParser.T__30);
				this.state = 166;
				this.expression();
				this.state = 167;
				this.match(HashemiGrammerParser.T__31);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 172;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 171;
				this.member_expression(_localctx.result, receiver, nestedAssignmentName);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03(\xB1\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x07\x02!\n\x02\f\x02\x0E\x02" +
		"$\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03.\n\x03\f\x03\x0E\x031\v\x03\x05\x033\n\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x07\x04:\n\x04\f\x04\x0E\x04=\v\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x05\x05M\n\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07^\n\x07\x03\b\x03\b\x05\bb\n\b\x03\b\x03\b\x03" +
		"\t\x03\t\x03\t\x07\ti\n\t\f\t\x0E\tl\v\t\x03\n\x03\n\x03\n\x07\nq\n\n" +
		"\f\n\x0E\nt\v\n\x03\v\x03\v\x03\v\x05\vy\n\v\x03\f\x03\f\x03\f\x07\f~" +
		"\n\f\f\f\x0E\f\x81\v\f\x03\r\x03\r\x03\r\x07\r\x86\n\r\f\r\x0E\r\x89\v" +
		"\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x8E\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x05\x0E\x96\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x07\x0F\x9C\n\x0F\f\x0F\x0E\x0F\x9F\v\x0F\x05\x0F\xA1\n\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\xAC" +
		"\n\x0F\x03\x0F\x05\x0F\xAF\n\x0F\x03\x0F\x02\x02\x02\x10\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x02\x05\x03\x02\x14\x19\x03\x02\x1A\x1B\x03\x02\x1C" +
		"\x1E\x02\xBD\x02\x1E\x03\x02\x02\x02\x04\'\x03\x02\x02\x02\x067\x03\x02" +
		"\x02\x02\bL\x03\x02\x02\x02\nN\x03\x02\x02\x02\fT\x03\x02\x02\x02\x0E" +
		"_\x03\x02\x02\x02\x10e\x03\x02\x02\x02\x12m\x03\x02\x02\x02\x14u\x03\x02" +
		"\x02\x02\x16z\x03\x02\x02\x02\x18\x82\x03\x02\x02\x02\x1A\x95\x03\x02" +
		"\x02\x02\x1C\xAB\x03\x02\x02\x02\x1E\"\x05\x04\x03\x02\x1F!\x05\x04\x03" +
		"\x02 \x1F\x03\x02\x02\x02!$\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03" +
		"\x02\x02\x02#%\x03\x02\x02\x02$\"\x03\x02\x02\x02%&\x07\x02\x02\x03&\x03" +
		"\x03\x02\x02\x02\'(\x07\x03\x02\x02()\x07&\x02\x02)2\x07\x04\x02\x02*" +
		"/\x07&\x02\x02+,\x07\x05\x02\x02,.\x07&\x02\x02-+\x03\x02\x02\x02.1\x03" +
		"\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0203\x03\x02\x02\x021/\x03" +
		"\x02\x02\x022*\x03\x02\x02\x0223\x03\x02\x02\x0234\x03\x02\x02\x0245\x07" +
		"\x06\x02\x0256\x05\x06\x04\x026\x05\x03\x02\x02\x027;\x07\x07\x02\x02" +
		"8:\x05\b\x05\x0298\x03\x02\x02\x02:=\x03\x02\x02\x02;9\x03\x02\x02\x02" +
		";<\x03\x02\x02\x02<>\x03\x02\x02\x02=;\x03\x02\x02\x02>?\x07\b\x02\x02" +
		"?\x07\x03\x02\x02\x02@M\x05\n\x06\x02AB\x07\t\x02\x02BM\x07\n\x02\x02" +
		"CD\x07\v\x02\x02DM\x07\n\x02\x02EM\x05\f\x07\x02FM\x05\x0E\b\x02GH\x05" +
		"\x10\t\x02HI\x07\n\x02\x02IM\x03\x02\x02\x02JK\x07\f\x02\x02KM\x07\n\x02" +
		"\x02L@\x03\x02\x02\x02LA\x03\x02\x02\x02LC\x03\x02\x02\x02LE\x03\x02\x02" +
		"\x02LF\x03\x02\x02\x02LG\x03\x02\x02\x02LJ\x03\x02\x02\x02M\t\x03\x02" +
		"\x02\x02NO\x07\r\x02\x02OP\x07\x04\x02\x02PQ\x05\x10\t\x02QR\x07\x0E\x02" +
		"\x02RS\x05\x06\x04\x02S\v\x03\x02\x02\x02TU\x07\x0F\x02\x02UV\x07\x04" +
		"\x02\x02VW\x05\x10\t\x02WX\x07\x0E\x02\x02X]\x05\x06\x04\x02YZ\x07\x10" +
		"\x02\x02Z[\x05\x06\x04\x02[\\\b\x07\x01\x02\\^\x03\x02\x02\x02]Y\x03\x02" +
		"\x02\x02]^\x03\x02\x02\x02^\r\x03\x02\x02\x02_a\x07\x11\x02\x02`b\x05" +
		"\x10\t\x02a`\x03\x02\x02\x02ab\x03\x02\x02\x02bc\x03\x02\x02\x02cd\x07" +
		"\n\x02\x02d\x0F\x03\x02\x02\x02ej\x05\x12\n\x02fg\x07\x12\x02\x02gi\x05" +
		"\x12\n\x02hf\x03\x02\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03" +
		"\x02\x02\x02k\x11\x03\x02\x02\x02lj\x03\x02\x02\x02mr\x05\x14\v\x02no" +
		"\x07\x13\x02\x02oq\x05\x14\v\x02pn\x03\x02\x02\x02qt\x03\x02\x02\x02r" +
		"p\x03\x02\x02\x02rs\x03\x02\x02\x02s\x13\x03\x02\x02\x02tr\x03\x02\x02" +
		"\x02ux\x05\x16\f\x02vw\t\x02\x02\x02wy\x05\x16\f\x02xv\x03\x02\x02\x02" +
		"xy\x03\x02\x02\x02y\x15\x03\x02\x02\x02z\x7F\x05\x18\r\x02{|\t\x03\x02" +
		"\x02|~\x05\x18\r\x02}{\x03\x02\x02\x02~\x81\x03\x02\x02\x02\x7F}\x03\x02" +
		"\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x17\x03\x02\x02\x02\x81\x7F\x03\x02" +
		"\x02\x02\x82\x87\x05\x1A\x0E\x02\x83\x84\t\x04\x02\x02\x84\x86\x05\x1A" +
		"\x0E\x02\x85\x83\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87\x85\x03\x02" +
		"\x02\x02\x87\x88\x03\x02\x02\x02\x88\x19\x03\x02\x02\x02\x89\x87\x03\x02" +
		"\x02\x02\x8A\x8D\x07&\x02\x02\x8B\x8E\x05\x1C\x0F\x02\x8C\x8E\x03\x02" +
		"\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x96\x03\x02" +
		"\x02\x02\x8F\x96\x07\'\x02\x02\x90\x96\x07(\x02\x02\x91\x92\x07\x04\x02" +
		"\x02\x92\x93\x05\x10\t\x02\x93\x94\x07\x06\x02\x02\x94\x96\x03\x02\x02" +
		"\x02\x95\x8A\x03\x02\x02\x02\x95\x8F\x03\x02\x02\x02\x95\x90\x03\x02\x02" +
		"\x02\x95\x91\x03\x02\x02\x02\x96\x1B\x03\x02\x02\x02\x97\xA0\x07\x04\x02" +
		"\x02\x98\x9D\x05\x10\t\x02\x99\x9A\x07\x05\x02\x02\x9A\x9C\x05\x10\t\x02" +
		"\x9B\x99\x03\x02\x02\x02\x9C\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02" +
		"\x9D\x9E\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02" +
		"\xA0\x98\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02" +
		"\xA2\xAC\x07\x06\x02\x02\xA3\xA4\x07\x1F\x02\x02\xA4\xAC\x05\x10\t\x02" +
		"\xA5\xA6\x07 \x02\x02\xA6\xAC\x07&\x02\x02\xA7\xA8\x07!\x02\x02\xA8\xA9" +
		"\x05\x10\t\x02\xA9\xAA\x07\"\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\x97\x03" +
		"\x02\x02\x02\xAB\xA3\x03\x02\x02\x02\xAB\xA5\x03\x02\x02\x02\xAB\xA7\x03" +
		"\x02\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\xAF\x05\x1C\x0F\x02\xAE\xAD\x03" +
		"\x02\x02\x02\xAE\xAF\x03\x02\x02\x02\xAF\x1D\x03\x02\x02\x02\x14\"/2;" +
		"L]ajrx\x7F\x87\x8D\x95\x9D\xA0\xAB\xAE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HashemiGrammerParser.__ATN) {
			HashemiGrammerParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HashemiGrammerParser._serializedATN));
		}

		return HashemiGrammerParser.__ATN;
	}

}

export class SourceFileContext extends ParserRuleContext {
	public function(): FunctionContext[];
	public function(i: number): FunctionContext;
	public function(i?: number): FunctionContext | FunctionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunctionContext);
		} else {
			return this.getRuleContext(i, FunctionContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(HashemiGrammerParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_sourceFile; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterSourceFile) {
			listener.enterSourceFile(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitSourceFile) {
			listener.exitSourceFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitSourceFile) {
			return visitor.visitSourceFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionContext extends ParserRuleContext {
	public _s: Token;
	public _body: BlockContext;
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HashemiGrammerParser.IDENTIFIER);
		} else {
			return this.getToken(HashemiGrammerParser.IDENTIFIER, i);
		}
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_function; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterFunction) {
			listener.enterFunction(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitFunction) {
			listener.exitFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitFunction) {
			return visitor.visitFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public inLoop: boolean;
	public result: HashemStatementNode;
	public _s: Token;
	public _e: Token;
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, inLoop: boolean) {
		super(parent, invokingState);
		this.inLoop = inLoop;
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_block; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public inLoop: boolean;
	public result: HashemStatementNode;
	public _b: Token;
	public _c: Token;
	public _d: Token;
	public while_statement(): While_statementContext | undefined {
		return this.tryGetRuleContext(0, While_statementContext);
	}
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	public return_statement(): Return_statementContext | undefined {
		return this.tryGetRuleContext(0, Return_statementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, inLoop: boolean) {
		super(parent, invokingState);
		this.inLoop = inLoop;
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_statement; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_statementContext extends ParserRuleContext {
	public result: HashemStatementNode;
	public _w: Token;
	public _condition: ExpressionContext;
	public _body: BlockContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_while_statement; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterWhile_statement) {
			listener.enterWhile_statement(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitWhile_statement) {
			listener.exitWhile_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitWhile_statement) {
			return visitor.visitWhile_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public inLoop: boolean;
	public result: HashemStatementNode;
	public _i: Token;
	public _condition: ExpressionContext;
	public _then: BlockContext;
	public _block: BlockContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, inLoop: boolean) {
		super(parent, invokingState);
		this.inLoop = inLoop;
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_if_statement; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitIf_statement) {
			return visitor.visitIf_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	public result: HashemStatementNode;
	public _r: Token;
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_return_statement; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterReturn_statement) {
			listener.enterReturn_statement(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitReturn_statement) {
			listener.exitReturn_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitReturn_statement) {
			return visitor.visitReturn_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public result: HashemExpressionNode;
	public _op: Token;
	public logic_term(): Logic_termContext[];
	public logic_term(i: number): Logic_termContext;
	public logic_term(i?: number): Logic_termContext | Logic_termContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Logic_termContext);
		} else {
			return this.getRuleContext(i, Logic_termContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_expression; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logic_termContext extends ParserRuleContext {
	public result: HashemExpressionNode;
	public _op: Token;
	public logic_factor(): Logic_factorContext[];
	public logic_factor(i: number): Logic_factorContext;
	public logic_factor(i?: number): Logic_factorContext | Logic_factorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Logic_factorContext);
		} else {
			return this.getRuleContext(i, Logic_factorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_logic_term; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterLogic_term) {
			listener.enterLogic_term(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitLogic_term) {
			listener.exitLogic_term(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitLogic_term) {
			return visitor.visitLogic_term(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logic_factorContext extends ParserRuleContext {
	public result: HashemExpressionNode;
	public _op: Token;
	public arithmetic(): ArithmeticContext[];
	public arithmetic(i: number): ArithmeticContext;
	public arithmetic(i?: number): ArithmeticContext | ArithmeticContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArithmeticContext);
		} else {
			return this.getRuleContext(i, ArithmeticContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_logic_factor; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterLogic_factor) {
			listener.enterLogic_factor(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitLogic_factor) {
			listener.exitLogic_factor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitLogic_factor) {
			return visitor.visitLogic_factor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticContext extends ParserRuleContext {
	public result: HashemExpressionNode;
	public _op: Token;
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_arithmetic; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterArithmetic) {
			listener.enterArithmetic(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitArithmetic) {
			listener.exitArithmetic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitArithmetic) {
			return visitor.visitArithmetic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public result: HashemExpressionNode;
	public _op: Token;
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_term; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitTerm) {
			return visitor.visitTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FactorContext extends ParserRuleContext {
	public result: HashemExpressionNode;
	public _s: Token;
	public _expr: ExpressionContext;
	public _e: Token;
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(HashemiGrammerParser.IDENTIFIER, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(HashemiGrammerParser.STRING_LITERAL, 0); }
	public NUMERIC_LITERAL(): TerminalNode | undefined { return this.tryGetToken(HashemiGrammerParser.NUMERIC_LITERAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public member_expression(): Member_expressionContext | undefined {
		return this.tryGetRuleContext(0, Member_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_factor; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterFactor) {
			listener.enterFactor(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitFactor) {
			listener.exitFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitFactor) {
			return visitor.visitFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_expressionContext extends ParserRuleContext {
	public r: HashemExpressionNode;
	public assignmentReceiver: HashemExpressionNode;
	public assignmentName: HashemExpressionNode;
	public result: HashemExpressionNode;
	public _e: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(HashemiGrammerParser.IDENTIFIER, 0); }
	public member_expression(): Member_expressionContext | undefined {
		return this.tryGetRuleContext(0, Member_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number, r: HashemExpressionNode, assignmentReceiver: HashemExpressionNode, assignmentName: HashemExpressionNode) {
		super(parent, invokingState);
		this.r = r;
		this.assignmentReceiver = assignmentReceiver;
		this.assignmentName = assignmentName;
	}
	// @Override
	public get ruleIndex(): number { return HashemiGrammerParser.RULE_member_expression; }
	// @Override
	public enterRule(listener: HashemiGrammerListener): void {
		if (listener.enterMember_expression) {
			listener.enterMember_expression(this);
		}
	}
	// @Override
	public exitRule(listener: HashemiGrammerListener): void {
		if (listener.exitMember_expression) {
			listener.exitMember_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HashemiGrammerVisitor<Result>): Result {
		if (visitor.visitMember_expression) {
			return visitor.visitMember_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



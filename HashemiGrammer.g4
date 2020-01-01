/*
 * The parser and lexer need to be generated using "mx create-sl-parser".
 */

grammar HashemiGrammer;
// parser

sourceFile: function function* EOF;

function:
	'bebin' IDENTIFIER s = '(' (IDENTIFIER ( ',' IDENTIFIER)*)? ')' body = block[false];

block[boolean inLoop]
	returns[HashemStatementNode result]:
	s = '{' (statement[inLoop])* e = '}';

statement[boolean inLoop]
	returns[HashemStatementNode result]:
	(
		while_statement
		| b = 'khob' ';'
		| c = 'badi' ';'
		| if_statement[inLoop]
		| return_statement
		| expression ';'
		| d = 'debugger' ';'
	);

while_statement
	returns[HashemStatementNode result]:
	w = 'ta' '(' condition = expression ') bood' body = block[true];

if_statement[boolean inLoop]
	returns[HashemStatementNode result]:
	i = 'age' '(' condition = expression ') bood' then = block[inLoop] (
		'na?' block[inLoop] { elsePart = $block.result; }
	)?;

return_statement
	returns[HashemStatementNode result]:
	r = 'bede' (expression)? ';';

expression
	returns[HashemExpressionNode result]:
	logic_term (op = '||' logic_term)*;

logic_term
	returns[HashemExpressionNode result]:
	logic_factor (op = '&&' logic_factor)*;

logic_factor
	returns[HashemExpressionNode result]:
	arithmetic (
		op = ('<' | '<=' | '>' | '>=' | '==' | '!=') arithmetic
	)?;

arithmetic
	returns[HashemExpressionNode result]:
	term (op = ('+' | '-') term)*;

term
	returns[HashemExpressionNode result]:
	factor (op = ('*' | '/' | '%') factor)*;

factor
	returns[HashemExpressionNode result]:
	(
		IDENTIFIER (
			member_expression[null, null, assignmentName]
			|
		)
		| STRING_LITERAL
		| NUMERIC_LITERAL
		| s = '(' expr = expression e = ')'
	);

member_expression[HashemExpressionNode r, HashemExpressionNode assignmentReceiver, HashemExpressionNode assignmentName]
	returns[HashemExpressionNode result]:
	(
		'(' ( expression ( ',' expression)*)? e = ')'
		| '=' expression
		| '.' IDENTIFIER
		| '[' expression ']'
	) (
		member_expression[$result, receiver, nestedAssignmentName]
	)?;

// lexer

WS: [ \t\r\n\u000C]+ -> skip;
COMMENT: '/*' .*? '*/' -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;

fragment LETTER: [A-Z] | [a-z] | '_' | '$';
fragment NON_ZERO_DIGIT: [1-9];
fragment DIGIT: [0-9];
fragment HEX_DIGIT: [0-9] | [a-f] | [A-F];
fragment OCT_DIGIT: [0-7];
fragment BINARY_DIGIT: '0' | '1';
fragment TAB: '\t';
fragment STRING_CHAR: ~('"' | '\\' | '\r' | '\n');

IDENTIFIER: LETTER (LETTER | DIGIT)*;
STRING_LITERAL: '"' STRING_CHAR* '"';
NUMERIC_LITERAL: '0' | NON_ZERO_DIGIT DIGIT*;
/*
 * The parser and lexer need to be generated using "mx create-sl-parser".
 */

grammar HashemiGrammer;
// parser

sourceFile: function function* EOF;

function:
	'bebin' IDENTIFIER s = '(' (IDENTIFIER ( ',' IDENTIFIER)*)? ')' body = block;

block: s = '{' (statement)* e = '}';

statement:
	(
		while_statement
		| b = 'khob' ';'
		| c = 'badi' ';'
		| if_statement
		| return_statement
		| expression ';'
		| d = 'debugger' ';'
	);

while_statement:
	w = 'ta' '(' condition = expression ') bood' body = block;

if_statement:
	i = 'age' '(' condition = expression ') bood' then = block (
		'na?' block
	)?;

return_statement: r = 'bede' (expression)? ';';

expression: logic_term (op = '||' logic_term)*;

logic_term: logic_factor (op = '&&' logic_factor)*;

logic_factor:
	arithmetic (
		op = ('<' | '<=' | '>' | '>=' | '==' | '!=') arithmetic
	)?;

arithmetic: term (op = ('+' | '-') term)*;

term: factor (op = ('*' | '/' | '%') factor)*;

factor:
	(
		IDENTIFIER ( member_expression |)
		| STRING_LITERAL
		| NUMERIC_LITERAL
		| s = '(' expr = expression e = ')'
	);

member_expression:
	(
		'(' ( expression ( ',' expression)*)? e = ')'
		| '=' expression
		| '.' IDENTIFIER
		| '[' expression ']'
	) (member_expression)?;

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
import * as Parser from '@ankabut/parser';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { HashemiVisitor } from './Listener';

type Options = {
  onError: OnSyntaxError;
  onNoSyntaxError: OnNoSyntaxError;
  onSolve: OnSolve;
};

type OnSyntaxError = (message: string) => void;
type OnNoSyntaxError = () => void;
type OnSolve = (output: any) => void;

function parseAndRun(
  sourceFile: string,
  onSyntaxError: OnSyntaxError,
  onNoSyntaxError: OnNoSyntaxError,
  onSolve: OnSolve
) {
  let listener = new HashemiVisitor(onSolve, 'azinja');
  let inputStream = new ANTLRInputStream(sourceFile);
  let lexer = new Parser.HashemiGrammerLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new Parser.HashemiGrammerParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener({
    syntaxError: (recognizer, offendingSymbol, line, column, msg, e) => {
      onSyntaxError(
        `
error at ${line}-${column}
${msg}
Symbol: ${offendingSymbol}
${e}
            `
      );
    }
  });
  let tree = parser.sourceFile();

  if (parser.numberOfSyntaxErrors === 0) {
    onNoSyntaxError();
  }
 
  onSolve(listener.visit(tree));
  // ParseTreeWalker.DEFAULT.walk(listener, tree);
}

export function run<T = any>(sourceFile: string): Promise<T> {
  return new Promise((resolve, reject) => {
    parseAndRun(
      sourceFile,
      syntaxErrorMessage => {
        reject(syntaxErrorMessage);
      },
      () => {},
      output => {
        resolve(output);
      }
    );
  });
}

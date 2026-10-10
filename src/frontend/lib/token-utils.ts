import { DSLLexer } from '../../generated/DSLLexer';
import type { Theme } from './types';

export type TokenCategory =
  | 'declaration'
  | 'control'
  | 'connector'
  | 'operator'
  | 'type'
  | 'literal'
  | 'identifier'
  | 'punctuation'
  | 'tab';

export const TOKEN_CATEGORIES: Partial<Record<number, TokenCategory>> = {
  [DSLLexer.ELEMENT]: 'declaration',
  [DSLLexer.TEMPLATE_ELEMENT]: 'declaration',
  [DSLLexer.INTERACTION]: 'declaration',
  [DSLLexer.HAS]: 'declaration',
  [DSLLexer.FUNCTION]: 'declaration',
  [DSLLexer.LET]: 'declaration',

  [DSLLexer.IF]: 'control',
  [DSLLexer.ELSE]: 'control',
  [DSLLexer.FOR_EVERY]: 'control',
  [DSLLexer.IN]: 'control',
  [DSLLexer.GO_THROUGH]: 'control',
  [DSLLexer.TO]: 'control',
  [DSLLexer.SKIP_ITERATION]: 'control',
  [DSLLexer.STOP_LOOPING]: 'control',
  [DSLLexer.GIVE]: 'control',
  [DSLLexer.DO_NOTHING]: 'control',

  [DSLLexer.WITH]: 'connector',
  [DSLLexer.IS]: 'connector',
  [DSLLexer.LIKE]: 'connector',
  [DSLLexer.NEEDS]: 'connector',
  [DSLLexer.BE]: 'connector',

  [DSLLexer.NOT]: 'operator',
  [DSLLexer.AND]: 'operator',
  [DSLLexer.OR]: 'operator',
  [DSLLexer.EQUALS]: 'operator',
  [DSLLexer.LESS_THAN]: 'operator',
  [DSLLexer.GREATER_THAN]: 'operator',
  [DSLLexer.PLUS]: 'operator',
  [DSLLexer.MINUS]: 'operator',
  [DSLLexer.MULTIPLY]: 'operator',
  [DSLLexer.DIVIDE]: 'operator',

  [DSLLexer.NUMBER_TYPE]: 'type',
  [DSLLexer.BOOLEAN_TYPE]: 'type',
  [DSLLexer.COLOR_TYPE]: 'type',
  [DSLLexer.ELEMENT_TYPE]: 'type',
  [DSLLexer.ELEMENT_TYPE_TYPE]: 'type',
  [DSLLexer.NULL_TYPE]: 'type',
  [DSLLexer.TYPE_TYPE]: 'type',
  [DSLLexer.PASCAL_IDENTIFIER]: 'type',

  [DSLLexer.NUMBER]: 'literal',
  [DSLLexer.BOOLEAN]: 'literal',
  [DSLLexer.NULL]: 'literal',
  [DSLLexer.COLOR]: 'literal',

  [DSLLexer.IDENTIFIER]: 'identifier',

  [DSLLexer.DOT]: 'punctuation',
  [DSLLexer.COMMA]: 'punctuation',
  [DSLLexer.LPAREN]: 'punctuation',
  [DSLLexer.RPAREN]: 'punctuation',
  [DSLLexer.COLON]: 'punctuation',

  [DSLLexer.TAB]: 'tab',
};

export const TOKEN_COLORS: Record<TokenCategory, Record<Theme, string>> = {
  declaration: { dark: '#78dce8', light: '#1c8ca8' },
  control: { dark: '#ff6188', light: '#e14775' },
  connector: { dark: '#ff6188', light: '#e14775' },
  operator: { dark: '#ff6188', light: '#e14775' },
  type: { dark: '#a9dc76', light: '#269d69' },
  literal: { dark: '#ab9df2', light: '#7058be' },
  identifier: { dark: '#fcfcfa', light: '#29242a' },
  punctuation: { dark: '#939293', light: '#918c8e' },
  tab: { dark: '#5b595c', light: '#bfb9ba' },
};

export function getTokenColor(tokenType: number, theme: Theme): string | undefined {
  const category = TOKEN_CATEGORIES[tokenType];
  return category && TOKEN_COLORS[category][theme];
}

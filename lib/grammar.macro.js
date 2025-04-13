import { re } from '@bablr/boot';
import { eat } from '@bablr/helpers/grammar';
import { Node } from '@bablr/helpers/decorators';

export const type = Symbol.for('@bablr/language');

export const canonicalURL = 'https://bablr.org/languages/core/en/space-tab-newline';

export const grammar = class BlankSpaceGrammar {
  @Node
  *Space() {
    yield eat(re`/[ \t\r\n]+/`);
  }
};

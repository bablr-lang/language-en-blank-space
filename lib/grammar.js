import { i } from '@bablr/boot/shorthand.macro';
import { Node } from '@bablr/helpers/decorators';

export const name = 'Space';

export const canonicalURL = 'https://github.com/bablr-lang/language-blank-space';

export const grammar = class BlankSpaceGrammar {
  @Node
  *Space() {
    yield i`eat(/[ \t\r\n]/)`;
  }
};

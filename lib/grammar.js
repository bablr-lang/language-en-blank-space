import { i } from '@bablr/boot/shorthand.macro';
import { Node } from '@bablr/helpers/decorators';

export const canonicalURL = 'https://bablr.org/languages/core/space-tab-newline';

export const grammar = class BlankSpaceGrammar {
  @Node
  *Space() {
    yield i`eat(/[ \t\r\n]+/)`;
  }
};

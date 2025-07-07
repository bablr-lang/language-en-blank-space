import { re, spam as m } from '@bablr/boot';
import { o, eat, match, eatMatch } from '@bablr/helpers/grammar';
import { Node } from '@bablr/helpers/decorators';

export const canonicalURL = 'https://bablr.org/languages/core/en/space-tab-newline';

export const grammar = class BlankSpaceGrammar {
  *Blank() {
    while (yield match(re`/[ \t\r\n]/`)) {
      if (yield match(re`/^/m`)) {
        yield eatMatch(m`<LeftOffset />`);
        yield eatMatch(m`<*Space />`, o({ only: true }));
      } else if (yield match(re`/[\r\n]/`)) {
        yield eat(m`<*Newline />`);
      } else {
        yield eat(m`<*Space />`, o({ only: true }));
      }
    }
  }

  @Node
  *Space({ props: { only } }) {
    if (only) {
      yield eat(re`/[ \t]+/`);
    } else {
      yield eat(re`/[ \t\r\n]+/`);
    }
  }

  @Node
  *LeftOffset() {
    while (yield eatMatch(m`indents[]: <*Indent /\t|  / />`));
  }

  @Node
  *Newline() {
    yield eat(re`/\r?\n?/`);
  }

  @Node
  *Indent() {
    yield eat(re`/\t|  /`);
  }
};

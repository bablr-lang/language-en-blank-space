import { re, spam as m } from '@bablr/boot';
import { o, eat, match, eatMatch } from '@bablr/helpers/grammar';

export const canonicalURL = 'https://bablr.org/languages/core/en/space-tab-newline';

export const defaultMatcher = m`<__Blanks />`;

export const grammar = class BlankSpaceGrammar {
  *Blanks() {
    while (yield eatMatch(m`<Blank />`));
  }

  *Blank() {
    if (yield match(re`/^/m`)) {
      yield eatMatch(m`<LeftOffset />`);
      yield eatMatch(m`<*Space /[ \t\r\n]+/ />`, o({}), o({ literal: true }));
    } else if (yield match(re`/[\r\n]/`)) {
      yield eat(m`<*Newline /\r?\n?/ />`, o({}), o({ literal: true }));
    } else {
      yield eat(m`<*Space /[ \t]+/ />`, o({}), o({ literal: true }));
    }
  }

  *Space({ props: { onlySameLine } }) {
    if (onlySameLine) {
      yield eat(re`/[ \t]+/`);
    } else {
      yield eat(re`/[ \t\r\n]+/`);
    }
  }

  *LeftOffset() {
    while ((yield eatMatch(m`indents[]: <*Indent /\t|  / />`), o({}), o({ literal: true })));
  }

  *Newline() {
    yield eat(re`/\r?\n?/`);
  }

  *Indent() {
    yield eat(re`/\t|  /`);
  }
};

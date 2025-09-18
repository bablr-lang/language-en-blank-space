import { re, spam as m } from '@bablr/boot';
import { o, eat, match, eatMatch } from '@bablr/helpers/grammar';
import { CoveredBy, Node } from '@bablr/helpers/decorators';

export const canonicalURL = 'https://bablr.org/languages/core/en/space-tab-newline';

export const defaultMatcher = m`<__Blank />`;

export const grammar = class BlankSpaceGrammar {
  *Blank() {
    if (yield match(re`/^/m`)) {
      yield eatMatch(m`<LeftOffset />`);
      yield eatMatch(m`<*Space />`);
    } else if (yield match(re`/[\r\n]/`)) {
      yield eat(m`<*Newline />`);
    } else {
      yield eat(m`<*Space />`, o({ onlySameLine: true }));
    }
  }

  @CoveredBy('Blank')
  @Node
  *Space({ props: { onlySameLine } }) {
    if (onlySameLine) {
      yield eat(re`/[ \t]+/`);
    } else {
      yield eat(re`/[ \t\r\n]+/`);
    }
  }

  @CoveredBy('Blank')
  @Node
  *LeftOffset() {
    while (yield eatMatch(m`indents[]: <*Indent /\t|  / />`));
  }

  @CoveredBy('Blank')
  @Node
  *Newline() {
    yield eat(re`/\r?\n?/`);
  }

  @Node
  *Indent() {
    yield eat(re`/\t|  /`);
  }
};

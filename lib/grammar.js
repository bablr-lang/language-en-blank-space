import { re, spam as m } from '@bablr/boot';
import { o, eat, match, eatMatch } from '@bablr/helpers/grammar';
import * as BMap from '@bablr/agast-helpers/b-map';
import { buildAlternative, buildElements } from '@bablr/helpers/builders';

export const canonicalURL = 'https://bablr.org/languages/core/en/space-tab-newline';

export const defaultMatcher = m`<__Blanks />`;

export const grammar = class BlankSpaceGrammar {
  *Blank({ s }) {
    let span = BMap.get('Trivia', s().spans);

    if (span && span.props && (yield match(re`/^[ \t\r\n]/m`))) {
      if (yield eatMatch(m`<LeftOffset />`)) {
      } else if (yield eatMatch(m`<*Space /[ \t]+/ />`)) {
      } else {
        yield eat(m`<*Newline /\r?\n?/ />`, o({}), o({ literal: true }));
      }
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

  *LeftOffset({ s }) {
    let { span } = s();

    span = BMap.get('Trivia', s().spans);

    if (!span || !span.props) {
      while (yield eatMatch(m`indents[]: <*Indent /\t|  / />`, o({}), o({ literal: true }))) {}
    } else {
      let pattern = re`/${buildAlternative(
        buildElements(new Array(span.props.spaces).fill(re.Character` `)),
      )}/`.value;
      while (yield eatMatch(m`indents[]: <*Indent ${pattern} />`, o({}), o({ literal: true }))) {}
    }
  }

  *Newline() {
    yield eat(re`/\r?\n?/`);
  }

  *Indent() {
    yield eat(re`/\t|  /`);
  }
};

export default { canonicalURL, dependencies: {}, grammar, defaultMatcher };

import { m, re, o, eat, match, eatMatch } from '@bablr/helpers/grammar';
import * as BListKeyed from '@bablr/agast-helpers/b-list-keyed';
import { buildAlternative, buildElements } from '@bablr/helpers/builders';
let { freeze } = Object;

export default class BlankSpace {
  static canonicalURL = 'https://bablr.org/languages/core/en/space-tab-newline';
  static dependencies = freeze({});
  static defaultMatcher = m`<__Blanks />`;
  static fragmentProduction = null;
  static context = freeze({});

  *Blank({ s }) {
    let span = BListKeyed.get('Trivia', s().spans);

    if (span && span.props?.spaces > 0 && (yield match(m`/^[ \t\r\n]/m`))) {
      if (yield eatMatch(m`<LeftOffset />`)) {
      } else if (yield eatMatch(m`<*Space /[ \t]+/ />`)) {
      } else {
        yield eat(m`<*Newline /\r?\n?/ />`, o({}), o({ literal: true }));
      }
    } else if (yield match(m`/[\r\n]/`)) {
      yield eat(m`<*Newline /\r?\n?/ />`, o({}), o({ literal: true }));
    } else {
      yield eat(m`<*Space /[ \t]+/ />`, o({}), o({ literal: true }));
    }
  }

  *Space({ props: { onlySameLine } }) {
    if (onlySameLine) {
      yield eat(m`/[ \t]+/`);
    } else {
      yield eat(m`/[ \t\r\n]+/`);
    }
  }

  *LeftOffset({ s }) {
    let { span } = s();

    span = BListKeyed.get('Trivia', s().spans);

    if (!span || !span.props) {
      while (yield eatMatch(m`indents[]: <*Indent /\t|  / />`, o({}), o({ literal: true }))) {}
    } else {
      let pattern = m`/${buildAlternative(
        buildElements(new Array(span.props.spaces).fill(re.Character` `)),
      )}/`.value;
      while (yield eatMatch(m`indents[]: <*Indent ${pattern} />`, o({}), o({ literal: true }))) {}
    }
  }

  *Newline() {
    yield eat(m`/\r?\n?/`);
  }

  *Indent() {
    yield eat(m`/\t|  /`);
  }
}

freeze(BlankSpace);
freeze(BlankSpace.prototype);

import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import { interpolateString as _interpolateString } from "@bablr/agast-helpers/template";
import { interpolateArrayChildren as _interpolateArrayChildren } from "@bablr/agast-helpers/template";
import { interpolateArray as _interpolateArray } from "@bablr/agast-helpers/template";
import * as _l from "@bablr/agast-vm-helpers/languages";
import * as _t from "@bablr/agast-helpers/shorthand";
var _initProto;
import { Node } from '@bablr/helpers/decorators';
export const name = 'Space';
export const canonicalURL = 'https://github.com/bablr-lang/language-blank-space';
export const grammar = class BlankSpaceGrammar {
  static {
    [_initProto] = _applyDecs(this, [[Node, 2, "Space"]], []).e;
  }
  constructor(...args) {
    _initProto(this);
  }
  *Space() {
    yield _t.node(_l.Instruction, "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node(_l.Instruction, "Identifier", [_t.lit("eat")], {}, {}),
      arguments: _t.node(_l.Instruction, "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node(_l.Instruction, "Punctuator", "("),
        values: [_t.node(_l.Regex, "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
          open: _t.s_node(_l.Regex, "Punctuator", "/"),
          alternatives: [_t.node(_l.Regex, "Alternative", [_t.ref`elements[]`], {
            elements: [_t.node(_l.Regex, "CharacterClass", [_t.ref`open`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`close`], {
              open: _t.s_node(_l.Regex, "Punctuator", "["),
              elements: [_t.node(_l.Regex, "Character", [_t.lit(" ")], {}, {}), _t.node(_l.Regex, "Character", [_t.embedded(_t.s_e_node(_l.Escape, 'SymbolicEscape', [{
                type: "Literal",
                value: "\\t"
              }], {}, {
                cooked: "\t"
              }))], {}, {}), _t.node(_l.Regex, "Character", [_t.embedded(_t.s_e_node(_l.Escape, 'SymbolicEscape', [{
                type: "Literal",
                value: "\\r"
              }], {}, {
                cooked: "\r"
              }))], {}, {}), _t.node(_l.Regex, "Character", [_t.embedded(_t.s_e_node(_l.Escape, 'SymbolicEscape', [{
                type: "Literal",
                value: "\\n"
              }], {}, {
                cooked: "\n"
              }))], {}, {})],
              close: _t.s_node(_l.Regex, "Punctuator", "]")
            }, {})]
          }, {})],
          close: _t.s_node(_l.Regex, "Punctuator", "/")
        }, {})],
        close: _t.s_node(_l.Instruction, "Punctuator", ")")
      }, {})
    }, {});
  }
};

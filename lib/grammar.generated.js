import _applyDecs from "@babel/runtime/helpers/applyDecs2305";
import { interpolateString as _interpolateString } from "@bablr/agast-helpers/template";
import { interpolateArray as _interpolateArray } from "@bablr/agast-helpers/template";
import * as _t from "@bablr/agast-helpers/shorthand";
var _initProto;
import { Node } from '@bablr/helpers/decorators';
export const name = 'Space';
export const grammar = class BlankSpaceGrammar {
  static {
    [_initProto] = _applyDecs(this, [[Node, 2, "Space"]], []).e;
  }
  constructor(...args) {
    _initProto(this);
  }
  *Space() {
    yield _t.node("Instruction", "Call", [_t.ref`verb`, _t.ref`arguments`], {
      verb: _t.node("Instruction", "Identifier", [_t.lit("eat")], {}, {}),
      arguments: _t.node("Instruction", "Tuple", [_t.ref`open`, _t.ref`values[]`, _t.ref`close`], {
        open: _t.s_node("Instruction", "Punctuator", "("),
        values: [_t.node("Regex", "Pattern", [_t.ref`open`, _t.ref`alternatives[]`, _t.ref`close`], {
          open: _t.s_node("Regex", "Punctuator", "/"),
          alternatives: [_t.node("Regex", "Alternative", [_t.ref`elements[]`], {
            elements: [_t.node("Regex", "CharacterClass", [_t.ref`open`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`elements[]`, _t.ref`close`], {
              open: _t.s_node("Regex", "Punctuator", "["),
              elements: [_t.node("Regex", "Character", [_t.lit(" ")], {}, {}), _t.node("Regex", "Character", [_t.s_e_node('Escape', 'SymbolicEscape', {
                type: "Literal",
                value: "\\t"
              }, {}, [_t.node("CSTML", "Attribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
                key: _t.node("Instruction", "Identifier", [_t.lit("cooked")], {}, {}),
                mapOperator: _t.s_node("CSTML", "Punctuator", "="),
                value: _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
                  open: _t.s_node("String", "Punctuator", "'"),
                  content: _t.node("String", "Content", [_t.lit("\t")], {}, {}),
                  close: _t.s_node("String", "Punctuator", "'")
                }, {})
              }, {})])], {}, {}), _t.node("Regex", "Character", [_t.s_e_node('Escape', 'SymbolicEscape', {
                type: "Literal",
                value: "\\r"
              }, {}, [_t.node("CSTML", "Attribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
                key: _t.node("Instruction", "Identifier", [_t.lit("cooked")], {}, {}),
                mapOperator: _t.s_node("CSTML", "Punctuator", "="),
                value: _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
                  open: _t.s_node("String", "Punctuator", "'"),
                  content: _t.node("String", "Content", [_t.lit("\r")], {}, {}),
                  close: _t.s_node("String", "Punctuator", "'")
                }, {})
              }, {})])], {}, {}), _t.node("Regex", "Character", [_t.s_e_node('Escape', 'SymbolicEscape', {
                type: "Literal",
                value: "\\n"
              }, {}, [_t.node("CSTML", "Attribute", [_t.ref`key`, _t.ref`mapOperator`, _t.ref`value`], {
                key: _t.node("Instruction", "Identifier", [_t.lit("cooked")], {}, {}),
                mapOperator: _t.s_node("CSTML", "Punctuator", "="),
                value: _t.node("String", "String", [_t.ref`open`, _t.ref`content`, _t.ref`close`], {
                  open: _t.s_node("String", "Punctuator", "'"),
                  content: _t.node("String", "Content", [_t.lit("\n")], {}, {}),
                  close: _t.s_node("String", "Punctuator", "'")
                }, {})
              }, {})])], {}, {})],
              close: _t.s_node("Regex", "Punctuator", "]")
            }, {})]
          }, {})],
          close: _t.s_node("Regex", "Punctuator", "/")
        }, {})],
        close: _t.s_node("Instruction", "Punctuator", ")")
      }, {})
    }, {});
  }
};

/* LetsForm react-bootstrap v0.12.6 - ESM */
import React from 'react';
import Form from 'react-bootstrap/Form';
import { c as _isEmpty, a as _extends, m as makeClassName, I as I18N, l as lfLog } from './index-BXuCsvqI.js';
import 'react-hook-form';

/* eslint-disable no-loop-func */
var microdown = function () {
  var _this = this;
  /*
   * tag helper
   */
  var tag = function tag(_tag, text, values) {
      return "<".concat(_tag + (values ? ' ' + Object.keys(values).map(function (k) {
        return values[k] ? "".concat(k, "=\"").concat(encode(values[k]) || '', "\"") : '';
      }).join(' ') : ''), ">").concat(text, "</").concat(_tag, ">");
    },
    /**
     * outdent all rows by first as reference
     */
    outdent = function outdent(text) {
      return text.replace(new RegExp('^' + (text.match(/^\s+/) || '')[0], 'gm'), '');
    },
    /**
     * encode double quotes and HTML tags to entities
     */
    encode = function encode(text) {
      return text ? text.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
    },
    /**
     * recursive list parser
     */
    listR = /(?:(^|\n)([+-]|\d+\.) +(.*(\n[ \t]+.*)*))+/g,
    list = function list(text, temp) {
      temp = text.match(/^[+-]/m) ? 'ul' : 'ol';
      return text ? "<".concat(temp, ">").concat(text.replace(/(?:[+-]|\d+\.) +(.*)\n?(([ \t].*\n?)*)/g, function (match, a, b) {
        return "<li>".concat(inlineBlock("".concat(a, "\n").concat(outdent(b || '').replace(listR, list))), "</li>");
      }), "</").concat(temp, ">") : '';
    },
    /**
     * function chain of replacements
     */
    chain = function chain(t, regex, replacement, parser) {
      return function (match, a) {
        match = match.replace(regex, replacement);
        return tag(t, parser ? parser(match) : match);
      };
    },
    block = function block(text, options) {
      return p(text, [
      // BLOCK STUFF ===============================

      // comments
      /<!--((.|\n)*?)-->/g, '<!--$1-->',
      // pre format block
      /^("""|```)(.*)\n((.*\n)*?)\1/gm, function (match, wrapper, c, text) {
        return wrapper === '"""' ? tag('div', parse(text, options), {
          class: c
        }) : options && options.preCode ? tag('pre', tag('code', encode(text), {
          class: c
        })) : tag('pre', encode(text), {
          class: c
        });
      },
      // blockquotes
      /(^>.*\n?)+/gm, chain('blockquote', /^> ?(.*)$/gm, '$1', inline),
      // tables
      /((^|\n)\|.+)+/g, chain('table', /^.*(\n\|---.*?)?$/gm, function (match, subline) {
        return chain('tr', /\|(-?)([^|]*)\1(\|$)?/gm, function (match, type, text) {
          return tag(type || subline ? 'th' : 'td', inlineBlock(text));
        })(match.slice(0, match.length - (subline || '').length));
      }),
      // lists
      listR, list,
      //anchor
      /#\[([^\]]+?)]/g, '<a name="$1"></a>',
      // headlines
      /^(#+) +(.*)(?:$)/gm, function (match, h, text) {
        return tag('h' + h.length, inlineBlock(text));
      },
      // horizontal rule
      /^(===+|---+)(?=\s*$)/gm, '<hr>'], parse, options);
    },
    inlineBlock = function inlineBlock(text, dontInline) {
      var temp = [],
        injectInlineBlock = function injectInlineBlock(text) {
          return text.replace(/\\(\d+)/g, function (match, code) {
            return injectInlineBlock(temp[Number.parseInt(code) - 1]);
          });
        };
      text = (text || '').trim()
      // inline code block
      .replace(/`([^`]*)`/g, function (match, text) {
        return '\\' + temp.push(tag('code', encode(text)));
      })
      // inline media (a / img / iframe)
      .replace(/[!&]?\[([!&]?\[.*?\)|[^\]]*?)]\((.*?)( .*?)?\)|(\w+:\/\/[$\-.+!*'()/,\w]+)/g, function (match, text, href, title, link) {
        if (link) {
          return dontInline ? match : '\\' + temp.push(tag('a', link, {
            target: '_blank'
          }));
        }
        if (match[0] === '&') {
          text = text.match(/^(.+),(.+),([^ \]]+)( ?.+?)?$/);
          return '\\' + temp.push(tag('iframe', '', {
            width: text[1],
            height: text[2],
            frameborder: text[3],
            class: text[4],
            src: href,
            title: title
          }));
        }
        return '\\' + temp.push(match[0] === '!' ? tag('img', '', {
          src: href,
          alt: text,
          title: title
        }) : tag('a', inlineBlock(text, 1), {
          href: href,
          title: title,
          target: '_blank'
        }));
      });
      text = injectInlineBlock(dontInline ? text : inline(text));
      return text;
    },
    inline = function inline(text) {
      return p(text, [
      // bold, italic, bold & italic
      /([*_]{1,3})((.|\n)+?)\1/g, function (match, k, text) {
        k = k.length;
        text = inline(text);
        if (k > 1) text = tag('strong', text);
        if (k % 2) text = tag('em', text);
        return text;
      },
      // strike through
      /(~{1,3})((.|\n)+?)\1/g,
      // eslint-disable-next-line no-sparse-arrays
      function (match, k, text) {
        return tag([, 'u', 's', 'del'][k.length], inline(text));
      },
      // replace remaining newlines with a <br>
      // eslint-disable-next-line no-regex-spaces
      /  \n|\n  /g, '<br>'], inline);
    },
    p = function p(text, rules, parse, options) {
      var i = 0,
        f;
      while (i < rules.length) {
        // eslint-disable-next-line no-cond-assign
        if (f = rules[i++].exec(text)) {
          return parse(text.slice(0, f.index), options) + (typeof rules[i] === 'string' ? rules[i].replace(/\$(\d)/g, function (m, d) {
            return f[d];
          }) : rules[i].apply(_this, f)) + parse(text.slice(f.index + f[0].length), options);
        }
        i++;
      }
      return text;
    },
    parse = function parse(text, options) {
      // clean input
      text = text.replace(/[\r\v\b\f]/g, '').replace(/\\./g, function (match) {
        return "&#".concat(match.charCodeAt(1), ";");
      });
      var temp = block(text, options);
      if (temp === text && !temp.match(/^[\s\n]*$/i)) {
        temp = inlineBlock(temp)
        // handle paragraphs
        .replace(/((.|\n)+?)(\n\n+|$)/g, function (match, text) {
          return tag('p', text);
        });
      }
      return temp.replace(/&#(\d+);/g, function (match, code) {
        return String.fromCharCode(parseInt(code));
      });
    };
  return {
    parse: parse,
    block: block,
    inline: inline,
    inlineBlock: inlineBlock
  };
}();

var Placeholder = function Placeholder(_ref) {
  var text = _ref.text,
    name = _ref.name,
    className = _ref.className;
  if (!_isEmpty(text)) {
    return /*#__PURE__*/React.createElement("div", _extends({}, makeClassName('placeholder', name, className), {
      dangerouslySetInnerHTML: {
        __html: microdown.parse(text)
      }
    }));
  } else {
    return /*#__PURE__*/React.createElement("div", null);
  }
};

var PlaceholderBootstrap = I18N(function (_ref) {
  var label = _ref.label,
    hint = _ref.hint,
    text = _ref.text,
    name = _ref.name,
    className = _ref.className;
  return /*#__PURE__*/React.createElement(Form.Group, makeClassName('placeholder', name, className), label && /*#__PURE__*/React.createElement(Form.Label, null, label), /*#__PURE__*/React.createElement(Placeholder, {
    text: text
  }), hint && /*#__PURE__*/React.createElement(Form.Text, null, hint));
}, ['label', 'hint', 'text']);
lfLog('Loaded ReactBootrap.Placeholder');

export { PlaceholderBootstrap as default };

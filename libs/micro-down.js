/* eslint-disable no-loop-func */
const microdown = function () {
  /*
   * tag helper
   */
  var tag = (tag, text, values) => `<${tag + (values ? ' ' + Object.keys(values).map(k => values[k] ? `${k}="${encode(values[k]) || ''}"` : '').join(' ') : '')}>${text}</${tag}>`,
    /**
     * outdent all rows by first as reference
     */
    outdent = (text) => {
      return text.replace(new RegExp('^' + (text.match(/^\s+/) || '')[0], 'gm'), '');
    },
    /**
     * encode double quotes and HTML tags to entities
     */
    encode = (text) => {
      return text ? text.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
    },
    /**
     * recursive list parser
     */
    listR = /(?:(^|\n)([+-]|\d+\.) +(.*(\n[ \t]+.*)*))+/g,
    list = (text, temp) => {
      temp = text.match(/^[+-]/m) ? 'ul' : 'ol';
      return text ?
        `<${temp}>${text.replace(/(?:[+-]|\d+\.) +(.*)\n?(([ \t].*\n?)*)/g, (match, a, b) => `<li>${inlineBlock(`${a}\n${outdent(b || '').replace(listR, list)}`)}</li>`)}</${temp}>`
        : '';
    },

    /**
     * function chain of replacements
     */
    chain = (t, regex, replacement, parser) => (match, a) => {
      match = match.replace(regex, replacement);
      return tag(t, parser ? parser(match) : match);
    },
    block = (text, options) => p(text, [
      // BLOCK STUFF ===============================

      // comments
      /<!--((.|\n)*?)-->/g,
      '<!--$1-->',

      // pre format block
      /^("""|```)(.*)\n((.*\n)*?)\1/gm,
      (match, wrapper, c, text) =>
        wrapper === '"""' ?
          tag('div', parse(text, options), {class: c})
          : options && options.preCode 
          ? tag('pre', tag('code', encode(text), {class: c}))
          : tag('pre', encode(text), {class: c}),

      // blockquotes
      /(^>.*\n?)+/gm,
      chain('blockquote', /^> ?(.*)$/gm, '$1', inline),

      // tables
      /((^|\n)\|.+)+/g,
      chain('table', /^.*(\n\|---.*?)?$/gm,
        (match, subline) =>
          chain('tr', /\|(-?)([^|]*)\1(\|$)?/gm,
            (match, type, text) => tag(type || subline ? 'th' : 'td', inlineBlock(text)),
          )(match.slice(0, match.length - (subline || '').length)),
      ),

      // lists
      listR,
      list,
      //anchor
      /#\[([^\]]+?)]/g,
      '<a name="$1"></a>',

      // headlines
      /^(#+) +(.*)(?:$)/gm,
      (match, h, text) => tag('h' + h.length, inlineBlock(text)),

      // horizontal rule
      /^(===+|---+)(?=\s*$)/gm,
      '<hr>',
    ], parse, options),
    inlineBlock = (text, dontInline) => {
      var temp = [],
        injectInlineBlock = (text) => text.replace(
          /\\(\d+)/g,
          (match, code) => injectInlineBlock(temp[Number.parseInt(code) - 1]),
        );

      text = (text || '').trim()
      // inline code block
        .replace(
          /`([^`]*)`/g,
          (match, text) => '\\' + temp.push(tag('code', encode(text))),
        )
        // inline media (a / img / iframe)
        .replace(
          /[!&]?\[([!&]?\[.*?\)|[^\]]*?)]\((.*?)( .*?)?\)|(\w+:\/\/[$\-.+!*'()/,\w]+)/g,
          (match, text, href, title, link) => {
            if (link) {
              return  dontInline ? match : '\\' + temp.push(tag('a', link, {target: '_blank'}));
            }
            if (match[0] === '&') {
              text = text.match(/^(.+),(.+),([^ \]]+)( ?.+?)?$/);
              return '\\' + temp.push(
                tag('iframe', '', {
                  width: text[1],
                  height: text[2],
                  frameborder: text[3],
                  class: text[4],
                  src: href,
                  title,
                }));
            }
            return '\\' + temp.push(
              match[0] === '!'
                ? tag('img', '', {src: href, alt: text, title})
                : tag('a', inlineBlock(text, 1), {href, title, target: '_blank'}),
            );
          },
        );
      text = injectInlineBlock(dontInline ? text : inline(text));
      return text;
    },
    inline = (text) => p(text, [
      // bold, italic, bold & italic
      /([*_]{1,3})((.|\n)+?)\1/g,
      (match, k, text) => {
        k = k.length;
        text = inline(text);
        if (k > 1) text = tag('strong', text);
        if (k % 2) text = tag('em', text);
        return text;
      },

      // strike through
      /(~{1,3})((.|\n)+?)\1/g,
      // eslint-disable-next-line no-sparse-arrays
      (match, k, text) => tag([, 'u', 's', 'del'][k.length], inline(text)),

      // replace remaining newlines with a <br>
      // eslint-disable-next-line no-regex-spaces
      /  \n|\n  /g,
      '<br>',
    ], inline),
    p = (text, rules, parse, options) => {
      var i = 0, f;
      while (i < rules.length) {
        // eslint-disable-next-line no-cond-assign
        if (f = rules[i++].exec(text)) {
          return parse(text.slice(0, f.index), options)
            + (typeof rules[i] === 'string' ? rules[i].replace(/\$(\d)/g, (m, d) => f[d]) : rules[i].apply(this, f))
            + parse(text.slice(f.index + f[0].length), options);
        }
        i++;
      }
      return text;
    },
    parse = (text, options) => {
      // clean input
      text = text
        .replace(/[\r\v\b\f]/g, '')
        .replace(/\\./g, (match) => `&#${match.charCodeAt(1)};`);

      var temp = block(text, options);

      if (temp === text && !temp.match(/^[\s\n]*$/i)) {
        temp = inlineBlock(temp)
        // handle paragraphs
          .replace(/((.|\n)+?)(\n\n+|$)/g, (match, text) => tag('p', text));
      }

      return temp.replace(/&#(\d+);/g, (match, code) => String.fromCharCode(parseInt(code)));
    }
  ;

  return {parse, block, inline, inlineBlock};
}();

if (typeof module !== 'undefined') {
  module.exports = microdown;
}
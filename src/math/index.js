const parseGeneric = require('../templates/parsers/generic');
const parsePipe = require('../templates/misc')['cite gnis'];
const parseSentence = require('../04-sentence').oneSentence;
const MathFormula = require('./MathFormula');

//structured Cite templates - <math>{{Cite..</math>
const hasTemplate = function(str) {
  return /^ *?\{\{ *?(mathtpl)/i.test(str) && /\}\} *?$/.test(str) && /citation needed/i.test(str) === false;
};

//might as well parse it, since we're here.
const parseTemplate = function(tmpl) {
  let obj = parseGeneric(tmpl);
  if (obj) {
    return obj;
  }
  //support {{mathtpl myvec|x}} format
  return parsePipe(tmpl);
};

//handle unstructured ones - <math>some text</math>
const parseInline = function(str) {
  let obj = parseSentence(str) || {};
  return {
    template: 'no_tpl',
    type: 'inline',
    data: {},
    inline: obj
  };
};

const parseBlock = function(str) {
  let obj = parseSentence(str) || {};
  return {
    template: 'no_tpl',
    type: 'block',
    data: {},
    inline: obj
  };
};

// parse <math></math> xml tags
const parseMath = function(wiki, data) {
  let references = [];
  wiki = wiki.replace(/ ?<math>([\s\S]{0,1000}?)<\/math> ?/gi, function(a, tmpl) {
    if (hasTemplate(tmpl)) {
      let obj = parseCitation(tmpl);
      if (obj) {
        references.push(obj);
      }
      wiki = wiki.replace(tmpl, '');
    } else {
      references.push(parseInline(tmpl));
    }
    return ' ';
  });
  // <math name=""/>
  wiki = wiki.replace(/ ?<math [^>]{0,200}?\/> ?/gi, ' ');
  // <math name=""></math>
  wiki = wiki.replace(/ ?<math [^>]{0,200}?>([\s\S]{0,1000}?)<\/math> ?/gi, function(a, tmpl) {
    if (hasTemplate(tmpl)) {
      let obj = parseCitation(tmpl);
      if (obj) {
        references.push(obj);
      }
      wiki = wiki.replace(tmpl, '');
    } else {
      references.push(parseInline(tmpl));
    }
    return ' ';
  });
  //now that we're done with xml, do a generic + dangerous xml-tag removal
  wiki = wiki.replace(/ ?<[ \/]?[a-z0-9]{1,8}[a-z0-9=" ]{2,20}[ \/]?> ?/g, ' '); //<samp name="asd">
  data.references = references.map(r => new Reference(r));
  return wiki;
};
module.exports = parseMath;

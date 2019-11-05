/* Tokenizer replaces
  * Math Expression by Tokens of type
     ___MATH_INLINE_793249879_ID_5___
     ___MATH_BLOCK_793249879_ID_6___
    and pushes the mathe code in the JSON data
  * Citations
     replace <ref name="my citation" />
     by
     ___CITE_LABEL_my_citation___
*/
// console.log("Require: './lib/parseWiki'");
const parseWiki = require('./lib/parseWiki');
// console.log("Require: 'token4math.js'");
const mathTokenizer = require('./token4math');
// console.log("Require: 'token4citation.js'");
const citationTokenizer = require('./token4citation');
// console.log("Require: 'token4citation.js' loaded");
const sd = require('./lib/setDefaults');
const getParserOptions = sd.getParserOptions;
// console.log("Require: '_version.js'");
const version = require('./_version');
//const parseDocument = require('./01-document/index.js');

//the main 'factory' exported method
const tokenizer = function(wiki, data, options) {
  return parseDocument(wiki, data, options);
};


tokenizer.math = require("./token4math.js");
tokenizer.citation = require("./token4citation.js");

tokenizer.parse = function(wiki, data, options, cb) {
  var parsed_wiki = parseDocument(wiki, data, options);
  if (cb) {
    // execute callback function
    wiki = cb(wiki, data, options);
  }
  data.wiki = wiki;
  return parseWiki(wiki, data, options, cb);
};

  /*
  options = {
    "wiki": "Wiki Content",
    "title": "Wiki Title",
    "lang": "en",
    "domain": "wikipedia"
  }

  data = {
    "mathexp": [
      {
        "type":"block",
        "label": "___MATH_BLOCK_78294924792_ID_1___",
        "math": "\\sum_{k=1}^{n} k^2"
      },
      {
        "type":"inline",
        "label": "___MATH_BLOCK_78294924792_ID_2___",
        "math": "\\sin(x^2) + \\cos(y^2)"
      }

    ]
  }
}
  */
  //return the parsed Wiki with the tokens

tokenizer.text = function(text, data, options, cb) {
  if (options.parse.math && options.parse.math == false) {
    console.log("wtf_tokenize.math() was not called. options.parse.math=false");
  } else {
    text = mathTokenizer.text(text, data, options);
  }
  if (options.parse.citation && options.parse.citation == false) {
    console.log("wtf_tokenize.math() was not called. options.parse.math=false");
  } else {
    text = citationTokenizer.text(text, data, options);
  }
  if (cb) {
    text = cb(text, data, options);
  }
  return text;
};

tokenizer.html = function(text, data, options, cb) {
  domain = domain || "wikipedia";
  lang = lang || "en";
  return toHtml(lang,domain, options, cb);
};

tokenizer.latex = function(text, data, options, cb) {
  return toLatex(text, data, options, cb);
};

tokenizer.markdown = function(text, data, options, cb) {
  domain = domain || "wikipedia";
  lang = lang || "en"
  return toMarkdown(text, data, options, cb);
};

tokenizer.json = function(text, data, options, cb) {
  return toJSON(text, data, options, cb);
};

tokenizer.version = version;
console.log("wtf_tokenize - version " + version + "is loaded");

module.exports = tokenizer;

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
//const version = require('../package.json').version;
const version = require('./_version.js');
//const parseDocument = require('./01-document/index.js');

//the main 'factory' exported method is encode_wiki
const tokenizer = function(wiki, data, options) {
  return encode_wiki(wiki, data, options);
};


const tokenizer_math = require("./token4math.js");
const tokenizer_citation = require("./token4citation.js");

tokenizer.math = tokenizer_math.encode;
tokenizer.citation = tokenizer_citation.encode;
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

tokenizer.call_encode4id = function (ptokenizer, parseid, text, data, options) {
  if (options) {
    console.log("check_call() - options defined");
    if (options.tokenize.hasOwnProperty(parseid)) {
      console.log("check_call() - options.tokenize."+parseid+" defined");
    } else {
      options.tokenize[parseid] = true;
    }
  } else {
    console.warning("check_call() - options undefined");
    options = {
      "tokenize" : {
        "math": true,
        "citation": true
      }
    };
  }
  if (options.tokenize && options.tokenize[parseid] && options.tokenize[parseid] && options.tokenize[parseid] == false) {
    console.log("wtf_tokenize." + parseid + "() was not called. options.parse." + parseid + "=false");
  } else {
    text = this[parseid](text, data, options);
    console.log("wtf_tokenize." + parseid + "() was called.");
  }
  return text;
};

const encode = function(doc, options, cb) {
  var text = doc.wiki || " undefined wiki source ";
  /*
  options = {
    "tokenize": {
      "math": true,
      "citation": true
    }
  }
  */
  // tokenize math and citations if options.parse-booleans are not set to false
  text = this.call_encode4id("math",text, data, options);
  text = this.call_encode4id("citation",text, data, options);
  if (cb) {
    text = cb(text, data, options);
  }
  return text;
};

tokenizer.html = function(text, data, options, cb) {
  return toHtml(lang,domain, options, cb);
};

tokenizer.reveal = function(text, data, options, cb) {
  return toReveal(lang,domain, options, cb);
};

tokenizer.latex = function(text, data, options, cb) {
  return toLatex(text, data, options, cb);
};

tokenizer.markdown = function(text, data, options, cb) {
  return toMarkdown(text, data, options, cb);
};

tokenizer.json = function(text, data, options, cb) {
  return toJSON(text, data, options, cb);
};

tokenizer.version = version;
console.log("wtf_tokenizer - version " + version + " is loaded!");

module.exports = tokenizer;

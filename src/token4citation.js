/* Tokenizer replaces
  * Citation Expression by Tokens of type
     ___CITE_793249879_ID_5___
    and pushes the citation in the JSON data and
    leaves a citation marker.
  * Citations of the form
     replace <ref name="my citation" />
     by
     ___CITE_LABEL_my_citation___
*/


const tokenlib = require('./lib/tokenlib')
// console.log("Require 'src/lib/tokenlib.js' loaded in 'token4citation.js'!");
const helpers = require('./lib/helpers');
// console.log("Require 'src/lib/helpers.js' loaded in 'token4citation.js'!");

const setTimeID = tokenlib.setTimeID;
const replaceString = tokenlib.replaceString;
// console.log("try to load './parsers/generic'");
const parseGeneric = require('./parsers/generic');
// console.log("Require '/parsers/generic.js' loaded in 'token4citation.js'!");
const parsePipe = require('./misc')['cite gnis'];
// console.log("Require 'misc.js' loaded with 'cite gnis' module in 'token4citation.js'!");
const parseFmt = require('./04-sentence/formatting');
// console.log("Require '/04-sentence/formatting.js' loaded in 'token4citation.js'!");
const Reference = require('./reference/Reference');
// console.log("Require '/reference/Reference.js' loaded in 'token4citation.js'!");

//return only rendered text of wiki links
const resolve_links = function(line) {
  // categories, images, files
  //line = line.replace(cat_reg, '');
  // [[Common links]]
  line = line.replace(/\[\[:?([^|]{1,80}?)\]\](\w{0,5})/g, '$1$2');
  // [[File:with|Size]]
  line = line.replace(/\[\[File:(.{2,80}?)\|([^\]]+?)\]\](\w{0,5})/g, '');
  // [[Replaced|Links]]
  line = line.replace(/\[\[:?(.{2,80}?)\|([^\]]+?)\]\](\w{0,5})/g, '$2$3');
  // External links
  line = line.replace(
    /\[(https?|news|ftp|mailto|gopher|irc):\/\/[^\]\| ]{4,1500}([\| ].*?)?\]/g,
    '$2'
  );
  return line;
};
// console.log(resolve_links("[http://www.whistler.ca www.whistler.ca]"))


function postprocess(line) {
  //fix links
  // line = resolve_links(line);
  //remove empty parentheses (sometimes caused by removing templates)
  line = line.replace(/\([,;: ]*\)/g, '');
  //these semi-colons in parentheses are particularly troublesome
  line = line.replace(/\( *(; ?)+/g, '(');
  //dangling punctuation
  line = helpers.trim_whitespace(line);
  line = line.replace(/ +\.$/, '.');
  return line;
}

function parseSentence(str) {
  let obj = {
    text: postprocess(str)
  };
  //pull-out the [[links]]
  // parseLinks() - 04-sentence/links.js
  /*
  let links = parseLinks(str);
  if (links) {
    obj.links = links;
  }
  */
  //pull-out the bolds and ''italics''
  //obj = parseFmt(obj);
  //pull-out things like {{start date|...}}
  // obj = templates(obj);
  return new Sentence(obj);
}

//structured Cite templates - <ref>{{Cite..</ref>
const hasCitation = function(str) {
  return /^ *?\{\{ *?(cite|citation)/i.test(str) && /\}\} *?$/.test(str) && /citation needed/i.test(str) === false;
};

//might as well parse it, since we're here.
const parseCitation = function(tmpl) {
  let obj = parseGeneric(tmpl);
  if (obj) {
    return obj;
  }
  //support {{cite gnis|98734}} format
  return parsePipe(tmpl);
};

//handle unstructured ones - <ref>some text</ref>
const parseInline = function(str) {
  return {
    template: 'citation',
    type: 'inline',
    data: {},
    inline: str
  };
};

// parse <ref></ref> xml tags
const tokenizeCitation = function(wiki, data, options) {
  setTimeID(data);
  if (options && options.tokenize && options.tokenize.citations && options.tokenize.citations == false) {
    console.log("tokenize citations was not performed - options.tokenize.citation=false");
    //wiki = tokenizeRefs(wiki, data, options);
  } else {
    console.log("tokenize citations performed");
    wiki = tokenizeRefs(wiki, data, options);
  }
  return wiki;
};

const name2label = function (pname) {
  //replace blank and non characters or digits by underscore "_"
  var vLabel = pname.replace(/[^A-Za-z0-9]/g,"_");
  vLabel = vLabel.replace(/[_]+/g,"_");
  vLabel = vLabel.replace(/^_/g,"");
  vLabel = vLabel.replace(/_$/g,"");
  if (vLabel == "") {
    vLabel = null;
  }
  return vLabel;
};

const getCiteLabel = function (data,pid) {
  //replace blank and non characters or digits by underscore "_"
  return "___CITE_"+data.timeid+"_"+pid+"___";
}

const storeReference = function (wiki,data,references,tmpl,pLabel) {
  console.log("storeReference: '" + tmpl + "'");
  if (hasCitation(tmpl)) {
    let obj = parseCitation(tmpl);
    if (obj) {
      obj.label = pLabel;
      references.push(obj);
    };
    // Remove Citation from Wiki Source ???
    //wiki = wiki.replace(tmpl, '');
  } else {
    let obj = parseInline(tmpl);
    obj.label = pLabel;
    references.push(obj);
  };
  return wiki;
}

const tokenizeRefs = function(wiki, data, options) {
  let references = [];
  // (1) References without a citation label
  wiki = wiki.replace(/ ?<ref>([\s\S]{0,1000}?)<\/ref> ?/gi, function(a, tmpl){
    // getCiteLabel(data,pid) returns  ___CITE_8234987294_5___
    let vLabel = getCiteLabel(data,references.length);
    wiki = storeReference(wiki,data,references,tmpl,vLabel);
    return vLabel;
  });
  // (2) Cite a reference by a label WITHOUT reference
  // replace <ref name="my book label"/> by "___CITE_7238234792_my_book_label___"
  wiki = wiki.replace(/ ?<ref[\s]+name=["']([^"']+)["'][^>]{0,200}?\/> ?/gi,function(a, tmpl) {
    let vLabel = getCiteLabel(data,name2label(tmpl));
    return vLabel;
  });
  // (3) Reference with citation label that is used multiple time in a document by (2)
  wiki = wiki.replace(/ ?<ref[\s]+name=["']([^"']+)["'][^>]{0,200}?>([\s\S]{0,1000}?)<\/ref> ?/gi, function(a, name, tmpl) {
    /* difference between name, label and cite label
       (3a) name='my book name#2012'
       (3b) label='my_book_name_2012'
       (3c) cite_label='___CITE_7238234792_my_book_label_2012___' is the unique marker in the text
     the citation label is a marker in the text with a unique time stamp and defined syntax
     which is very unlikely to have a text element in an article.
    */
    // Convert e.g. name='my book name#2012' to 'my_book_name_2012'
    var vLabel = name2label(name);
    if (vLabel) {
      console.log("tokenizeRefs() created cite label='"+vLabel+"' from name='"+name+"'");
      vLabel = getCiteLabel(data,vLabel);
    } else {
      // convert a standard label with the reference length of the array as unique ID generator
      vLabel = getCiteLabel(data,references.length);
    };
    wiki = storeReference(wiki,data,references,tmpl,vLabel);
    return vLabel;
  });
  data.refs4token = references;
  //data.references = references.map(r => new Reference(r));
  //now that we're done with xml, do a generic
  return wiki;
}

const parseRefs = function(wiki, data, options) {
  let references = [];
  wiki = wiki.replace(/ ?<ref>([\s\S]{0,1000}?)<\/ref> ?/gi, function(a, tmpl) {
    if (hasCitation(tmpl)) {
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
  // <ref name=""/>
  wiki = wiki.replace(/ ?<ref[\s]+name=["']([^"'])["'][^>]{0,200}?\/> ?/gi, ' ');
  // <ref name=""></ref>
  wiki = wiki.replace(/ ?<ref [^>]{0,200}?>([\s\S]{0,1000}?)<\/ref> ?/gi, function(a, tmpl) {
    if (hasCitation(tmpl)) {
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


const toText = function(text, data, options) {
  console.log("Export Math to Text not implemented yet!");
  return text
}

const toHtml = function(text, data, options) {
  console.log("Export Math to HTML not implemented yet!");
  return text
}

const toLatex = function(text, data, options) {
  console.log("Export Math to LaTeX not implemented yet!");
  return text
}


const toMarkdown = function(text, data, options) {
  console.log("Export Math to MarkDown not implemented yet!");
  return text
}

const toJSON = function(pjson, data, options) {
  console.log("Export Math to JSON not implemented yet!");
  return pjson
}

let CitationTokenizer = {
  "encode": tokenizeCitation,
  "text": toText,
  "html": toHtml,
  "latex": toLatex,
  "markdown": toMarkdown,
  "json": toJSON
};
module.exports = CitationTokenizer;

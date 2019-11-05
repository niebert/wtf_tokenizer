/* Tokenizer replaces
  * Math Expression by Tokens of type
     ___MATH_INLINE_793249879_ID_5___
     ___MATH_BLOCK_793249879_ID_6___
    and pushes the mathe code in the JSON data
  * append found inline and block math records
*/

const tokenlib = require('./lib/tokenlib')

const setTimeID = tokenlib.setTimeID;
const replaceString = tokenlib.replaceString;


const tokenizeMathBlock = function(wikicode, data, options) {
  let timeid = data.timeid;
  console.log("tokenizeMathBlock() Time ID="+data.timeid);
  if (wikicode) {
    // create the mathexpr array if
    //var vSearch = /(<math[^>]*?>)(.*?)(<\/math>)/gi;
    var vSearch = /\n[:]+[\s]*?<math[^>]*?>(.*?)<\/math>/gi;
    //var vSearch = /\n[:]+[\s]*?(<math>)(.*?)(<\/math>)/gi;
    // \n            # newline
    // [:]+          # one or more colons
    // [\s]*?        # (optional) tabs and white space
    // <math[^>]*?>  # opening <math> tag
    // (.*?)         # enclosed math expression
    //(<\/math>)     # closing </math> tag
    //
    // gi            # g global, i ignore caps
    var vResult;
    var vCount =0;
    var vLabel = "";
    console.log("wikicode defined");
    while (vResult = vSearch.exec(wikicode)) {
      vCount++;
      console.log("Math Expression "+vCount+": '" + vResult[1] + "' found");
      vLabel = "___MATH_BLOCK_"+data.timeid+"_ID_"+vCount+"___";
      var vFound = vResult[1];
      data.mathexpr.push({
        "type":"block",
        "label":vLabel,
        "math":vFound
      });
      wikicode = replaceString(wikicode,vResult[0],vLabel);
      //wikicode = replaceString(wikicode,vFound,vLabel);
    };
  };
  return wikicode
}


const tokenizeMathInline = function(wikicode, data, options) {
  console.log("parseMathBlock() Time ID="+data.timeid);
  if (wikicode) {
    //var vSearch = /(<math[^>]*?>)(.*?)(<\/math>)/gi;
    var vSearch = /<math[^>]*?>(.*?)<\/math>/gi;
    //var vSearch = /\n[:]+[\s]*?(<math>)(.*?)(<\/math>)/gi;
    // <math[^>]*?>  # opening <math> tag
    // (.*?)         # enclosed math expression
    //(<\/math>)     # closing </math> tag
    //
    // gi            # g global, i ignore caps
    var vResult;
    var vCount =0;
    var vLabel = "";
    console.log("wikicode defined");
    while (vResult = vSearch.exec(wikicode)) {
      vCount++;
      console.log("Math Expression "+vCount+": '" + vResult[1] + "' found");
      vLabel = "___MATH_INLINE_"+data.timeid+"_ID_"+vCount+"___";
      var vFound = vResult[1];
      data.mathexpr.push({
        "type":"inline",
        "label":vLabel,
        "math":vFound
      });
      wikicode = replaceString(wikicode,vResult[0],vLabel);
      //wikicode = replaceString(wikicode,vFound,vLabel);
    };
  };
  return wikicode
}


const tokenizeMath = function(wiki, data, options) {
  setTimeID(data);
  if (data.hasOwnProperty("mathexpr")) {
    console.log("data.mathexpr array exists");
  } else {
    data.mathexpr = [];
  };
  wiki = tokenizeMathBlock(wiki, data, options);
  wiki = tokenizeMathInline(wiki, data, options);
  return wiki
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

let MathTokenizer = {
  "parse": tokenizeMath,
  "text": toText,
  "html": toHtml,
  "latex": toLatex,
  "markdown": toMarkdown,
  "json": toJSON
};
module.exports = MathTokenizer;

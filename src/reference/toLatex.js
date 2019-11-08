/*
options = {
  "parse": {
    "math": true,
    "citation": true
  },
  "output": {
    "math": "...",
    "citation": "cite"
  }
}
*/

const toLatex = function(c,options) {
  let out = "";
  switch (options.output.citation) {
    case "cite":
      out = "\\cite{" + c.label() + "}";
    break;
    case "text":
      out = "(" + c.first() + " " + c.last() + " " + c.year() + ")";
    break;
    default:
      out = "\\cite{" + c.label() + "}";
  }
  return out;
};

module.exports = toLatex;

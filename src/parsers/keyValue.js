// console.log("load oneSentence() parser in 'keyValue.js'");
const parseSentence = require('../04-sentence').oneSentence;
const strip = require('./_strip');

//turn '| key = value' into an object
const keyValue = function(tmpl, isInfobox) {
  tmpl = strip(tmpl);
  let arr = tmpl.split(/\n?\|/);
  //look for broken-up links and fix them :(
  arr.forEach((a, i) => {
    if (!arr[i + 1]) {
      return;
    }
    if (/\[\[[^\]]+$/.test(a) || /\{\{[^\}]+$/.test(a)) { // [[link|text]] or {{imdb|2386}}
      arr[i + 1] = arr[i] + '|' + arr[i + 1];
      arr[i] = null;
    }
  });
  arr = arr.filter((a) => a && a.indexOf('=') !== -1);
  let obj = arr.reduce((h, line) => {
    let parts = line.split(/=/);
    if (parts.length > 2) {
      parts[1] = parts.slice(1).join('=');
    }
    let key = parts[0].toLowerCase().trim();
    let val = parts[1].trim();
    if (key !== '' && val !== '') {
      val = parseSentence(val);
      if (isInfobox) {
        h[key] = val; //.json();
      } else {
        if (val.text) {
          console.log("Type of val.text='" +  typeof(val.text) + "'");
          //h[key] = val.text();
          h[key] = "undefined text() call for key='" + key + "' val="+JSON.stringify(val,null,4);
        } else {
          console.log("Type of val.text undefined");

        }
        if (val.links().length > 0) {
          h._links = h._links || [];
          h._links = h._links.concat(val.links());
        }
      }
    }
    return h;
  }, {});
  return obj;
};
// console.log("export keyValue()");
module.exports = keyValue;

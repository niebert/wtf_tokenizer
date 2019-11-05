//
const setDefaults = function(options, defaults) {
  let obj = {}
  defaults = defaults || {}
  Object.keys(defaults).forEach(k => {
    obj[k] = defaults[k]
  })
  options = options || {}
  Object.keys(options).forEach(k => {
    obj[k] = options[k]
  })
  return obj
}

const getParserOptions = function (options) {
   let defaults = {
     "wiki": "Undefined Wiki Content",
     "title": "Undefined Title)",
     "lang": "en",
     "domain": "wikipedia",
     "math": {
       "isparsed": true,
       "tokens": []
     }
  };
  return setDefaults(options,defaults);
}

module.exports = {
  "setDefaults": setDefaults,
  "getParserOptions": getParserOptions
};

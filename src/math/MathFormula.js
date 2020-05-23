const setDefaults = require('../lib/setDefaults');
const toLatex = require('./toLatex');
const toHtml = require('./toHtml');
const toReveal = require('./toReveal');
const toMarkdown = require('./toJson');
const toJson = require('./toJson');
const defaults = {};

// Javascript object called with key 'math'
// name is "MathFormula" due to conflict with "Math" object in Javascript
const MathFormula = function(data) {
  Object.defineProperty(this, 'data', {
    enumerable: false,
    value: data
  });
};

const methods = {
  title: function() {
    let data = this.data;
    return data.title || '';
  },
  type: function() {
    let data = this.data;
    return data.type || 'inline';
  },
  math: function() {
    let data = this.data;
    return data.math || '';
  },
  label: function(n) {
    let data = this.data;
    return data.label || 'LABEL_UNDEFINED_FOR_TOKEN';
  },
  text: function() {
    return ''; //no math in plain text, skip these for now.
  },
  markdown: function(options) {
    options = setDefaults(options, defaults);
    return toMarkdown(this, options);
  },
  html: function(options) {
    options = setDefaults(options, defaults);
    return toHtml(this, options);
  },
  reveal: function(options) {
    options = setDefaults(options, defaults);
    return toReveal(this, options);
  },
  latex: function(options) {
    options = setDefaults(options, defaults);
    return toLatex(this, options);
  },
  json: function(options) {
    options = setDefaults(options, defaults);
    return toJson(this, options);
  }
};
Object.keys(methods).forEach((k) => {
  MathFormula.prototype[k] = methods[k];
});
module.exports = MathFormula;

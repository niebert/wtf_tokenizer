'use strict';
var test = require('tape');
var wtf_fetch = require('wtf_fetch');
var tokenizer = require('./lib');

test('tokenize-as-promise', t => {
  t.plan(1);
  var p = wtf_fetch.getPage('Tony Hawk', 'en', 'wikipedia',  {
    'Api-User-Agent': 'wtf_tokenizer forked test script - <spencermountain@gmail.com>'
  });
  p.then(function(doc) {
    t.ok(doc.wiki.length > 0, 'promise returned document');
  });
  p.catch(function(e) {
    t.throw(e);
  });
});

test('tokenize-as-callback', t => {
  t.plan(1);
  wtf_fetch.getPage('Tony Danza', 'en', 'wikipedia',  {
    'Api-User-Agent': 'wtf_tokenizer forked test script - <spencermountain@gmail.com>'
  }, function(err, doc) {
    if (err) {
      t.throw(err);
    }
    t.ok(doc.wiki.length > 0, 'callback returned document');
  });
});

test('tokenize-invalid', t => {
  t.plan(1);
  var p = wtf_fetch.getPage('Taylor%20Swift', 'en', 'wikipedia',  {
    'Api-User-Agent': 'wtf_tokenizer forked test script - <spencermountain@gmail.com>'
  });
  p.then(function(doc) {
    t.ok(doc === null, 'invalid character query returns null');
  });
  p.catch(function(e) {
    t.throw(e);
  });
});

test('tokenize-missing', t => {
  t.plan(1);
  var p = wtf_fetch.getPage('NonExistentPage', 'en', 'wikipedia',  {
    'Api-User-Agent': 'wtf_tokenizer forked test script - <spencermountain@gmail.com>'
  });
  p.then(function(doc) {
    t.ok(doc === null, 'tokenizeing non-existent page returns null');
  });
  p.catch(function(e) {
    t.throw(e);
  });
});

test('tokenize-redirect', t => {
  t.plan(1);
  var p = wtf_fetch.getPage('USA', 'simple', {
    follow_redirects: false,
    'Api-User-Agent': 'wtf_tokenizer forked test script - <spencermountain@gmail.com>'
  });
  p.then(function(doc) {
    t.ok(doc.wiki.indexOf("REDIRECT")>0, 'got unfollowed redirect');
    //console.log("fetch-redirect: "+doc.wiki.substr(0,100));
  });
  p.catch(function(e) {
    t.throw(e);
  });
});

// test('tokenize-alternate-wiki', t => {
//   t.plan(1);
//   var p = wtf_fetch.getPage(336711, 'en', 'wikipedia',  {
//     'Api-User-Agent': 'wtf_fetch forked test script - <spencermountain@gmail.com>',
//     wikiUrl: 'https://www.mixesdb.com/db/api.php'
//   });
//   p.then(function(doc) {
//     t.ok(doc.sections().length > 0, 'alternate wiki returned document');
//   });
//   p.catch(function(e) {
//     t.throw(e);
//   });
// });

test('random', t => {
  t.plan(1);
  var p = wtf.random('simple', 'simple', {
    follow_redirects: false,
    'Api-User-Agent': 'wtf_tokenizer forked test script - <spencermountain@gmail.com>'
  });
  p.then(function(doc) {
    t.ok(doc.wiki.length>0, 'got random document');
    //console.log("fetch-random: "+doc.wiki.substr(0,100));

  });
  p.catch(function(e) {
    t.throw(e);
  });
});

test('category', t => {
  t.plan(1);
  var p = wtf.category('Category:Basketball teams in Toronto', {
    'Api-User-Agent': 'wtf_tokenizer forked test script - <spencermountain@gmail.com>'
  });
  p.then(function(res) {
    t.ok(res.pages.length > 2, 'got some pages');
    //t.ok(res.categories.length > 1, 'got a subcategory');
  });
  p.catch(function(e) {
    t.throw(e);
  });
});

//uncomment for testing on node>6
/*
test('ambiguous-pageids', async function(t) {
  var doc = await wtf_fetch.getPage(1984, 'en');
  t.equal(doc.title(), 'Arab world', 'input as pageid');

  doc = await wtf_fetch.getPage('1984', 'en');
  t.equal(doc.title(), '1984', 'input as text');

  var docs = await wtf_fetch.getPage([2983, 7493], 'en');
  t.equal(docs.length, 2, 'got two pageid results');
  t.equal(docs[0].title(), 'Austria-Hungary', 'first pageid');
  t.equal(docs[1].title(), 'Talk:P versus NP problem/Archive 1', 'second pageid');

  docs = await wtf_fetch.getPage(['June', 'July'], 'en');
  t.equal(docs.length, 2, 'got two results');
  t.equal(docs[0].title(), 'June', 'input as text');
  t.equal(docs[1].title(), 'July', 'input as text');
  t.end();
});
*/

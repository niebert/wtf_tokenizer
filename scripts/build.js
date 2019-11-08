var exec = require('shelljs').exec;
var echo = require('shelljs').echo;
var cp = require('shelljs').cp;
var fs = require('fs');
var browserify = './node_modules/.bin/browserify';
var derequire = './node_modules/.bin/derequire';
var terser = './node_modules/.bin/terser';
var package_name

// ok somehow,
// for deploys, we want the 'browser' field
// but that messes with browserify...
// so temporarily remove it during builds.
// ¯\_(ツ)_/¯
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
exec('mv ./package.json ./package.json.backup');
delete pkg.browser;
fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));

//make a small file for our version number
fs.writeFileSync('./src/_version.js', `module.exports = '${pkg.version}'`);

//final build locations
var banner = '/* ' + pkg.name + ' v' + pkg.version;
banner += '\n   github.com/niebert/' + pkg.name + '\n';
banner += '\n   '+pkg.description;
banner += '\n   based on work of Spencer Kelly github.com/spencermountain/wtf_wikipedia';
banner += '\n   designed as submodule of wtf_wikipedia - decomposition into subtasks';
banner += '\n   Licence: MIT\n*/\n';
var uncompressed = './builds/' + pkg.name + '.js';
var compressed = './builds/' + pkg.name + '.min.js';

//cleanup. remove old builds
exec('rm -rf ./builds && mkdir builds');

//add a header, before our sourcecode
echo(banner).to(uncompressed);
echo(banner).to(compressed);

//browserify + derequire
var cmd = browserify + ' ./src/index.js --standalone ' + pkg.name + '';
cmd += ' -t [ babelify --presets [ @babel/preset-env ] ]';
cmd += ' | ' + derequire;
cmd += ' >> ' + uncompressed;
exec(cmd);

//uglify
cmd = terser + ' ' + uncompressed + ' --mangle --compress ';
cmd += ' >> ' + compressed;
exec(cmd);

//log the size of our builds
require('./filesize');

//exec('mv  ./builds/wtf_fetch.js ./docs/js/' + pkg.name + '.js');
//exec('mv  ./builds/wtf_fetch.min.js ./docs/js/' + pkg.name + '.min.js');

//.. then we replace original package.json file
exec('mv ./package.json.backup ./package.json ');
echo("Copy wtf_tokenizer.js to docs/");
cp('./builds/wtf_tokenizer.js', './docs/js');

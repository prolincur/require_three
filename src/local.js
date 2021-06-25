'use strict';

var fs = require('fs');
var path = require('path');
var beautify = require('js-beautify').js_beautify;
var uglify = require("uglify-js");
var copydir = require('copy-dir');

var local3 = 'build/local/three'
copydir.sync('node_modules/three', local3, {
  utimes: true,  // keep add time and modify time
  mode: true,    // keep file mode
  cover: true    // cover file when exists, default is true
});

// IMPORTANT: ENSURE THE PROVIDE THREEJS VERSION OF YOUR CHOICE
// var revision = 'r129';
// PROVIDE THREEJS VERSION IN package.json

// IMPORTANT: ENSURE THE PROVIDE PATH OF YOUR CHOICE
// FOLLOWING PATH IS TO EXAMPLES/LOCAL
var cdnurl = '../../' + local3 + '/';

var modules = [
    'examples/js/loaders',
    'examples/js/exporters',
    'examples/js/controls',
    'examples/js/renderers',
    'examples/js/shaders'
];

var config = {};
config.paths = {};
config.shim = {};

modules.forEach(function(m) {
    var directoryPath = local3 + '/' + m;
    fs.readdirSync(directoryPath).forEach(function(name) {
        if (path.extname(name) === '.js') {
            name = name.replace(/\.js$/, '');
            var fpath = cdnurl + m + '/' + name;
            name = 'REQUIRE_THREE/' + name; 
            config.paths[name] = fpath;
            config.shim[name] =  { deps: ['REQUIRE_THREE'] };
        }
    })
})

var out = fs.readFileSync('src/template.js', 'utf-8');
out = out.replace('{cdnurl}', cdnurl);
out = out.replace('{config}', JSON.stringify(config));
var formatted = beautify(out);
var minified = uglify.minify(out, {fromString: true}).code;
fs.writeFileSync('build/local/require_three.js', formatted, 'utf-8');
fs.writeFileSync('build/local/require_three.min.js', minified, 'utf-8');

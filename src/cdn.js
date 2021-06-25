'use strict';

var fs = require('fs');
var path = require('path');
var request = require('sync-request');
var beautify = require('js-beautify').js_beautify;
var uglify = require("uglify-js");

// IMPORTANT: ENSURE THE PROVIDE THREEJS VERSION OF YOUR CHOICE
var revision = 'r129';

var cdnurl = 'https://cdn.rawgit.com/mrdoob/three.js/' + revision + '/';

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
    var res = request('GET', 'https://api.github.com/repos/mrdoob/three.js/contents/' + m + '?ref=' + revision, {
        'headers': {
            'user-agent': 'UA'
        }
    });
    var data = JSON.parse(res.body.toString('utf-8'));
    data.forEach(function(d) {
        if (path.extname(d.name) == '.js') {
            var name = d.name.replace(/\.js$/, '');
            var fpath = d.path.replace(/\.js$/, '');
            name = 'REQUIRE_THREE/' + name; 
            config.paths[name] = cdnurl + fpath;
            config.shim[name] =  { deps: ['REQUIRE_THREE'] };
        }
    });
});

var out = fs.readFileSync('src/template.js', 'utf-8');
out = out.replace('{cdnurl}', cdnurl);
out = out.replace('{config}', JSON.stringify(config));
var formatted = beautify(out);
var minified = uglify.minify(out, {fromString: true}).code;
fs.writeFileSync('build/cdn/require_three.js', formatted, 'utf-8');
fs.writeFileSync('build/cdn/require_three.min.js', minified, 'utf-8');

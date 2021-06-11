'use strict';

var fs = require('fs');
var path = require('path');
var beautify = require('js-beautify').js_beautify;

// IMPORTANT: ENSURE THE PROVIDE THREEJS VERSION OF YOUR CHOICE
// var revision = 'r124';
// PROVIDE THREEJS VERSION IN package.json

// PICKED UP FROM node_modules
var cdnurl = 'three/';

var modules = [
    'examples/js/loaders',
    'examples/js/exporters',
    'examples/js/controls',
    'examples/js/renderers',
    'examples/js/shaders'
];

var deps = [];
modules.forEach(function(m) {
    var directoryPath = 'node_modules/three/' + m;
    fs.readdirSync(directoryPath).forEach(function(name) {
        if (path.extname(name) === '.js') {
            name = name.replace(/\.js$/, '');
            var fpath = cdnurl + m + '/' + name;
            deps.push(fpath);
        }
    })
})

var out = fs.readFileSync('src/template2.js', 'utf-8');
out = out.replace('{cdnurl}', cdnurl);
out = out.replace('{deps}', JSON.stringify(deps));
var formatted = beautify(out);
fs.writeFileSync('src/bundlables.js', formatted, 'utf-8');


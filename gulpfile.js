var gulp = require('gulp');
var livereload = require('gulp-livereload');
var webpack = require('webpack-stream');

var vars = {
  path: {
    scripts: {
      src: './src',
      test: './test/specs/**/*Spec.js'
    },
    dist: './build/bundle',
    file: {}
  },
  filename: {
    packEntry: 'bundlables.js',
    packTarget: 'require_three.min.js'
  }
};

vars.path.file.packTarget = vars.path.dist + "/" + vars.filename.packTarget;

vars.path.file.packEntry = vars.path.scripts.src + "/" + vars.filename.packEntry;

gulp.task('build', function() {
  return gulp.src(vars.path.file.packEntry).pipe(webpack({
    output: {
      filename: vars.filename.packTarget
    }
  })).pipe(gulp.dest(vars.path.dist)).pipe(livereload());
});

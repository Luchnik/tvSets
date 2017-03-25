var gulp = require('gulp'),
    shell = require('gulp-shell'),
    gutil = require("gulp-util");

gulp.task('log', function() {
  gutil.log('Starting the server');
});

gulp.task('serve', shell.task('serve'))

gulp.task('default', ['log', 'serve']);
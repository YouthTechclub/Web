/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('default', function () {
    // place code for your default task here
});

// Compiles LESS > CSS 
gulp.task('build-less', function () {
    return gulp.src('./wwwroot/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./wwwroot/css'));
});
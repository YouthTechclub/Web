/// <binding ProjectOpened='watch-build-less' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('default', function () {
    // place code for your default task here
});

// Compiles LESS > CSS 
gulp.task('build-less', function () {
    return gulp.src('./wwwroot/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./wwwroot/css'));
});

// Compiles LESS > CSS 
gulp.task('build-less-font-awesome', function () {
    return gulp.src('./wwwroot/lib/components-font-awesome/less/*.less')
        .pipe(concat('font-awesome.css'))
        .pipe(less())
        .pipe(gulp.dest('./wwwroot/css/'));
});

gulp.task('watch-build-less', function() {
    return gulp.src('./wwwroot/less/styles.less')
        .pipe(watch('./wwwroot/less/styles.less'))
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('./wwwroot/css'));
});
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
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');

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

gulp.task('compress-js', function() {
    return gulp.src('./wwwroot/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('wwwroot/js/dist'));
});

gulp.task('clean-css', function() {
    return gulp.src('./wwwroot/css/*.css')
        .pipe(cleanCss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('wwwroot/css/dist'));
});
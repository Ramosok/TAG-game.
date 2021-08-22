const gulp = require('gulp');
const plumber = require('gulp-plumber');
const htmlmin = require('gulp-htmlmin');
const htmlValidator = require('gulp-w3c-html-validator');

module.exports = function copyHtml() {
  return gulp.src('src/html/*.html')
    .pipe(plumber())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(htmlValidator())
    .pipe(gulp.dest('build'))
};


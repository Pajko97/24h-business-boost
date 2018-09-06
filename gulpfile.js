const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const minify = require('gulp-minify-css');

var input = './sass/index.scss';
var output = './compiled';

gulp.task('sass', function () {
    return gulp
      .src(input)
      .pipe(sass())
      .pipe(autoprefixer('last 2 versions'))
      .pipe(minify())
      .pipe(rename('output.css'))
      .pipe(gulp.dest(output))
  });


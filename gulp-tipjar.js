var gulp = require('gulp');

// MODULES
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var jsMinify = require('gulp-uglify');
var cssMinify = require('gulp-cssmin');
var rename = require('gulp-rename');
var img = require('gulp-imagemin');
var jsonMinify = require('gulp-jsonminify');

// LOCATION VARIABLES
var tipjar = '';

//----------
// TASKS
//----------

// PARSE HTML, MINIFY, AND COPY TO NEW LOCATION
gulp.task('html', function() {
  return gulp.src(tipjar + '/index-staging.html')
    .pipe(useref())
    .pipe(gulpif(['js/*.js','js/**/*.js'], jsMinify()))
    .pipe(gulpif('css/*.css', cssMinify()))
    .pipe(gulpif('index-staging.html', rename('index.html')))
    .pipe(gulp.dest(tipjar));
});

// MINIFY JSON FILES
gulp.task('json', function() {
  return gulp.src([tipjar + 'data/*.json','!' + tipjar + 'data/*-min.json'])
    .pipe(jsonMinify())
    .pipe(rename({ extname: '-min.json' }))
    .pipe(gulp.dest(tipjar + 'data/'));
});

// COMPRESS IMAGES
gulp.task('images', function() {
  return gulp.src([tipjar + 'img/*.png',tipjar + 'img/*.jpg'])
    .pipe(img())
    .pipe(gulp.dest(tipjar + 'img/'));
});

// COPY CURRENCYDATA.JSON TO CURRENCY DIR
gulp.task('moveJson', function() {
  return gulp.src(tipjar + 'data/currencyData.json')
    .pipe(rename({ extname: '-archive.json'}))
    .pipe(gulp.dest('currency-conversion/'))
})

// RUN PARSE HTML TASK
gulp.task('default', ['html','images','json','moveJson'], function() {});

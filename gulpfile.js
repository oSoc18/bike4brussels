var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src([
      './js/bootstrap3-typeahead.min.js',
      './js/jquery.js',
      './js/constants.js',
      './js/map.js',
      './js/routeplanning.js',
      './js/uihelper.js',
      './js/strings.js',
      './js/export.js'
  ])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist/'));
});
var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  gulp.src('public/style.css')
      .pipe(watch('public/style.css'))
      .pipe(gulp.dest('./build/'));
});
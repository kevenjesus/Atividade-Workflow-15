var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');


gulp.task('minifica-css', function () {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility:'*'}))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('minifica-html', function() {
  return gulp.src('source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
    gulp.watch('source/index.html', ['minifica-html']);
    gulp.watch('source/scss/*.scss', ['minifica-css']);
});

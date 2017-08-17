'use strict'

// grab our gulp packages
const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload;

gulp.task('sass', () => {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css'))
    .pipe(reload({ stream: true }));
});

gulp.task('reload', function() {
  browserSync.reload();
});


// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass']);
  gulp.watch('css/*.css', ['reload']);
  gulp.watch('**/*.{php,inc,info}', ['reload']);
  gulp.watch('js/*.js', ['reload']);
  gulp.watch('templates/*.twig', ['reload']);
  gulp.watch('**/*.yml', ['reload']);
});

gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: 'http://get-started-gulp.dd:8083/'
  })
});

gulp.task('default', ['browser-sync', 'sass', 'watch'], () => {});

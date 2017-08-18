'use strict'

// grab our gulp packages
const
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  exec = require('gulp-exec'),
  reload = browserSync.reload;

//compile scss
gulp.task('sass', () => {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('css'))
    .pipe(reload({ stream: true }));
});

//clear cache in Drush
gulp.task('clearcache', () => {
  return gulp.src('')
    .pipe(exec('cd ../.. && drush cr'))
})

gulp.task('reload', () => {
  browserSync.reload();
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', () => {
  gulp.watch(['scss/*.scss', 'scss/**/*.scss'], ['sass']);
  gulp.watch('css/*.css', ['clearcache', 'reload']);
  gulp.watch('**/*.{php,inc,info}', ['reload']);
  gulp.watch('js/*.js', ['reload']);
  gulp.watch('templates/*.twig', ['reload']);
  gulp.watch('**/*.yml', ['reload']);
});

gulp.task('browser-sync', () => {
  browserSync.init({
    proxy: 'http://drupal-learning.dd:8083/'
  })
});

gulp.task('default', ['browser-sync', 'sass', 'watch'], () => {});
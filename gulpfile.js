const gulp = require('gulp');
const image = require('gulp-image');
const rollup = require('gulp-better-rollup');
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const browserSync = require('browser-sync').create();

// Minify and create dist img folder
gulp.task('processImage', function () {
  gulp.src('img/*')
    .pipe(image())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('processHTML', () => {
  gulp.src('*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('processJS', () => {
  return gulp.src('src/js/*.js')
    .pipe(rollup({ plugins: [ resolve(), commonjs()] }, 'umd'))
    .pipe(jshint({
      esversion: 8
  }))
  .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

// gulp.task('processJS', () => {
//   gulp.src('scripts.js')
//     .pipe(jshint({
//       esversion: 8
//     }))
//     .pipe(jshint.reporter('default'))
//     .pipe(babel({
//       presets: ['env'],
//     }))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist'));
// });

gulp.task('babelPolyfill', () => {
  gulp.src('node_modules/babel-polyfill/browser.js')
    .pipe(gulp.dest('dist/node_modules/babel-polyfill'));
});


// All tasks under the command gulp.

gulp.task('default', (callback) => {
  runSequence(['processImage', 'processHTML', 'processJS', 'babelPolyfill'], callback);
});

gulp.task('watch', ['browserSync'], () => {
  gulp.watch('*.js', ['processJS']);
  gulp.watch('*.html', ['processHTML']);
  gulp.watch('img/',  ['processImage']);
  gulp.watch('dist/*.js', browserSync.reload);
  gulp.watch('dist/*.html', browserSync.reload);
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: './dist',
    port: 8080,
    ui: {
      port: 8081
    }
  });
});
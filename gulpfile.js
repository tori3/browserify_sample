var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify');

gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['scripts']);
});

// Basic usage
gulp.task('scripts', function() {
    // Single entry point to browserify
    gulp.src('./js/main.js')
        .pipe(browserify({
          insertGlobals : false,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('default', ['scripts', 'webserver', 'watch']);

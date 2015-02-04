'use strict';

var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');


gulp.task('css', function () {
    gulp.src('./application/sass/**/*.scss')
        .pipe(sass())
        .on('error', function(e){
            console.log(e + ' turn down for what!');
        })
        .pipe(gulp.dest('./application/css'))
        .pipe(livereload());

});



gulp.task('html', function() {
  gulp.src('**/index.html')
      .pipe(livereload());
});

gulp.task('watch_templates', function() {

  gulp.watch('application/sass/**/*.scss', function (e) {
      gulp.start('css');
  });

  gulp.watch('**/index.html', function(e) {
    gulp.start('html');
  });
});


gulp.task('default', ['css', 'watch_templates']);
'use strict';

var gulp = require('gulp'), 
    sass = require('gulp-sass');

var config = {
     sassPath: './sass',
     bowerDir: './bower_components' 
};


gulp.task('icons', function() { 
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*') 
        .pipe(gulp.dest('./public/fonts')); 
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(
      sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


// Rerun the task when a file changes
 gulp.task('watch', function() {
  gulp.watch(config.sassPath + '/**/*.scss', ['css']); 
});

  gulp.task('default', ['icons', 'sass']);

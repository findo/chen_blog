var gulp = require('gulp');
var browserSync = require('browser-sync');
var path = require('path');
var less = require('gulp-less');

gulp.task('watch',['browserSync'], function(){
	gulp.watch('./views/**/*.jade', browserSync.reload);
	gulp.watch('./public/css/*.css', browserSync.reload);
	gulp.watch('./controllers/*.js', browserSync.reload);
});

gulp.task('browserSync',function(){
	browserSync.init({
		proxy: "127.0.0.1:3000"
	});
});


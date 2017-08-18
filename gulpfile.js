var gulp = require('gulp'),
	watch = require('gulp-watch'),
	connect = require('gulp-connect');

gulp.task('connect', function() {
	connect.server();
});

gulp.task('watch', function() {
	gulp.watch("**.**", ["connect"])
});

gulp.task('default', ["connect","watch"]);

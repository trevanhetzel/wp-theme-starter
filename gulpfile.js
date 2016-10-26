var gulp = require('gulp');
var webpack = require('webpack-stream');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Browserify
gulp.task('webpack', function () {
	return gulp.src('./js/app.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(uglify())
		.pipe(gulp.dest(''));
});

// Sass
gulp.task('styles', function () {
	return gulp.src('./css/style.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9'))
		.pipe(gulp.dest(''))
});

// Watch
gulp.task('watch', function () {
	gulp.watch(['./js/**/*.js'], ['webpack']);
	gulp.watch(['./css/**/*.scss'], ['styles']);
	return;
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', [
	'browserify',
	'styles',
	'watch'
]);

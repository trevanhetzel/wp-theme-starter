var gulp = require('gulp');
var webpack = require('webpack-stream');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');
var sasslint = require('gulp-sass-lint');

// Webpack
gulp.task('webpack', function () {
	return gulp.src('./assets/js/app.js')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(uglify())
		.pipe(gulp.dest(''));
});

// Sass
gulp.task('styles', function () {
	return gulp.src('./assets/css/style.scss')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(autoprefixer('last 2 version', 'ie 10'))
		.pipe(gulp.dest(''))
});

// Watch
gulp.task('watch', function () {
	gulp.watch(['./assets/js/**/*.js'], ['webpack', 'lintjs']);
	gulp.watch(['./assets/css/**/*.scss'], ['styles', 'lintsass']);
	return;
});

// Lint JS
gulp.task('lintjs', function () {
	return gulp.src([
		'./assets/js/module/**/*.js',
		'./assets/js/app.js'
		])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});

// Lint Sass
gulp.task('lintsass', function () {
	return gulp.src([
		'./assets/css/**/*.scss',
		'!./assets/css/vendor/**/*.scss',
		'!./assets/css/global/_normalize.scss'
		])
		.pipe(sasslint({
			configFile: '.sass-lint.yml'
		}))
		.pipe(sasslint.format())
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', [
	'webpack',
	'styles',
	'lintjs',
	'lintsass',
	'watch'
]);

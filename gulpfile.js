var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var minifyjs = require('gulp-uglify');
var uglifyjs = require('gulp-uglifyjs');

// Compile SCSS to CSS
gulp.task('styles', function() {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

// Minify CSS
gulp.task('minifyStyles', function() {
	return gulp.src('./css/*.css')
		.pipe(minifycss())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('./css/dist'));
});

// Minify JavaScript
gulp.task('minifyJs', function() {
	return gulp.src('./js/*.js')
		.pipe(uglifyjs())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('./js/dist'));
});

//Watch task
gulp.task('watch',function() {
	//console.log("It works");
    gulp.watch('sass/*.scss', gulp.series('styles', 'minifyStyles', 'minifyJs'));
});
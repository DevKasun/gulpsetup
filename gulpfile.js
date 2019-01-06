var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifyjs = require('gulp-uglify');
var uglifyjs = require('gulp-uglifyjs');

// Compile SCSS to CSS
gulp.task('styles', function() {
    return gulp.src('./styles/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/css/'));
});

// Minify CSS
gulp.task('minifyStyles', function() {
	return gulp.src('./styles/css/*.css')
		.pipe(minifycss())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('./styles/css/dist'));
});

// Minify JavaScript
gulp.task('minifyJs', function() {
	return gulp.src('./scripts/js/*.js')
		//.pipe(concat())
		.pipe(uglifyjs())
		.pipe(rename('main.min.js'))
		.pipe(gulp.dest('./scripts/dist'));
});

// Watch task for sass file compile to css and css minify
gulp.task('watch',function() {
    gulp.watch('styles/sass/*.scss', gulp.series('styles', 'minifyStyles'));
});


// Under constructions
// gulp.task('watch', gulp.series('styles', 'minifyStyles', 'minifyJs'), function() {
//     gulp.watch('styles/sass/*.scss', ['styles', 'minifyStyles']);
//     gulp.watch('scripts/js/*.js', ['minifyJs']);
// });
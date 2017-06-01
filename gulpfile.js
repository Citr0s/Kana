var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

gulp.task('build', ['ts', 'sass']);

gulp.task('ts', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            module: 'commonjs'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', ['build'], function () {
    gulp.watch(['./src/**/*.ts'], ['ts']);
    gulp.watch(['./src/**/*.scss'], ['sass']);
});

gulp.task('default', ['build']);
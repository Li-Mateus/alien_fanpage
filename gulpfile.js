const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');

// importação de funcionalidades ^

// funções:

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
} // minificador de js

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({style: 'compressed'}))
        .pipe(gulp.dest('./dist/css'));
} // compila SCSS e minifica o CSS

exports.default = gulp.parallel(styles, scripts); // definindo função padrão

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
} // configurando o watch
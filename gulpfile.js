const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles(){
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed'})) 
        //Função retornando o gulp.src, recuperando os arquivos com terminação .scss e comprimindo os arquivos na saída
        .pipe(gulp.dest('./dist/css'));
        // Enviando os arquivos CSS já comprimidos para uma pasta

}

function images(){
    return gulp.src('./src/images/**/*')
        .pipe(imagemin()) 
        .pipe(gulp.dest('./dist/images'));
        // Enviando as imagens já comprimidos para uma pasta

}

exports.default = gulp.parallel(styles, images);   

// Executando as funções styles e images em paralelo

exports.watch = function (){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    // Função que observa determinados arquivos para que as mudanças executadas sejam atualizadas automaticamente pela função.
}
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');


// instalar: npm install --save-dev gulp-ruby-sass
//task para o sass
gulp.task('sass', function(){
	return sass('sass/**/*.sass').pipe(gulp.dest('css'));
});

//instalar: npm install gulp-watch --save-dev
//task para o gulp-watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass',['sass']);	
});

//task defaut (padrão)
gulp.task('default', ['sass','watch']);
let gulp = require('gulp');
let less = require('gulp-less');
let concat = require('gulp-concat');
let cleanCss = require('gulp-clean-css');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');
let connect = require('gulp-connect');
//let minifyCss = require('gulp-minify-css');
gulp.task('css',function () {
  gulp.src('src/less/**/*.less')
    .pipe(less())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(cleanCss())
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('build/css'))
});

gulp.task('js',function () {
   gulp.src('src/js/**/*.js')
     .pipe(babel())
     .pipe(concat('all.js'))
     .pipe(gulp.dest('build/js'))
     .pipe(uglify())
     .pipe(rename('all.min.js'))
     .pipe(gulp.dest('build/js'))
});

gulp.task('serve',function () {
  connect.server({
    port:8080,
    root:'./build',
    livereload:true//浏览器自动刷新
  });
});
gulp.task('copy',function () {
  gulp.src('src/*.html').
    pipe(gulp.dest('./build'))
    .pipe(connect.reload())
});
//执行时会让依赖的任务先开始的再执行自己的任务
gulp.task('watch',['serve'],function () {
  gulp.watch('src/*.html',['copy'])
});

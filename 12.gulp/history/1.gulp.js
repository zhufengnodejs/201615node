let gulp = require('gulp');
//gulp task
gulp.task('hello',function () {
  console.log('hello');
});
//src 获取要处理的文件,得到的是一个可读流
//dest 获取一个可写流 指写是一个文件夹的名字
//目标路径的生成规则是只包含通配符的部分
// *表示 匹配任意字符，但不包括路径分隔符
// ** 表示任意字符，也包括路径分隔符
gulp.task('copy',function () {
  gulp.src(['src/*.html','src/**/*.js']).pipe(gulp.dest('build'));
});

gulp.task('watch',function () {
  gulp.watch('src/*.html',['copy']);
});

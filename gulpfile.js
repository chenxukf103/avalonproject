var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
             baseDir: ['dev']
        }
    });
    //gulp.watch("./*/**/*.js").on("change", browserSync.reload);
    //gulp.watch("./*/**/*.html").on("change", browserSync.reload);
    //gulp.watch("./*/**/*.css").on("change", browserSync.reload);
});

gulp.task('default',['browser-sync']);
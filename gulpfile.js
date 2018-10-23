var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    gulpSequence = require('gulp-sequence');


gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/css/**/*.scss',['sass']).on('change', browserSync.reload);
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('sass',function(){
    return gulp.src('src/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("default", gulpSequence('serve'));

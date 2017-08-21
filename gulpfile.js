var gulp = require('gulp');
var bs = require('browser-sync');
var wiredep = require('gulp-wiredep');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');

var cssFiles = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/font-awesome/css/font-awesome.min.css',
    'src/**/*.css'
];

gulp.task('inject', function () {
    return gulp.src('src/index.html')
        .pipe(wiredep())
        .pipe(inject(gulp.src(cssFiles)))
        .pipe(inject(gulp.src('src/**/*.js')))
        .pipe(gulp.dest('src'));
});

gulp.task('serve', function () {
    var browserSync = bs.create();
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    
    gulp.watch(['src/**/*'], browserSync.reload);
    gulp.watch(['src/**/*.js'], ['inject']);
});



gulp.task('tsc', function () {
    return gulp.src('src/**/*.ts')
        .pipe(tsc({
            target: 'es5'
        }))
        .pipe(gulp.dest('./src'));
})
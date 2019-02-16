const preprocessor        = 'scss', // Препроцессор для стилей (scss, less)
      gulpVersion         = '4'; // Версия галпа (3, 4)

const gulp                = require('gulp'),
      sass                = require('gulp-sass'),
      less                = require('gulp-less'),
      concatJS            = require('gulp-concat'),
      pug                 = require('gulp-pug'),
      autoprefixer        = require('gulp-autoprefixer'),
      cleanCSS            = require('gulp-clean-css'),
      rigger              = require('gulp-rigger'),
      browserSync         = require('browser-sync'),
      uglify              = require('gulp-uglify'),
      rename              = require("gulp-rename");



gulp.task('jade', function buildHTML() {
  return gulp.src('jade/*.jade')
    .pipe(pug({
      pretty: '\t'
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}));
});

if (preprocessor == 'scss') {
  gulp.task('style', function () {
    return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers:['ie >= 9', 'last 3 version'],
        cascade: false
    }))
    .pipe(cleanCSS({
        level : 2
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}));
  });
}

else if (preprocessor == 'less') {
  gulp.task('style', function () {
    return gulp.src('less/style.less')
    .pipe(less())
    .pipe(autoprefixer({
        browsers:['ie >= 9', 'last 3 version'],
        cascade: false
    }))
    .pipe(cleanCSS({
        level : 2
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}));
  });
}

gulp.task('js', function () {
    return gulp.src('js-app/*.js')
    .pipe(rigger())
    .pipe(uglify())
    .pipe(rename({
        basename: 'script',
        extname: '.js'
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: true
    });
});

if (gulpVersion == '3') {
  gulp.task('watch', function () {
    gulp.watch('jade/**/*.jade', ['jade']);
    gulp.watch('js-app/**/*.js', ['js']);
    gulp.watch('scss/**/*.scss', ['style']);
  });

  gulp.task('default', ['browser-sync', 'jade', 'js', 'style', 'watch']);
}
else if (gulpVersion == '4') {
  gulp.task('watch', function () {
    gulp.watch('jade/**/*.jade', gulp.parallel('jade'));
    gulp.watch('js-app/**/*.js', gulp.parallel('js'));
    gulp.watch('scss/**/*.scss', gulp.parallel('style'));
  });

  gulp.task('default', gulp.parallel('browser-sync', 'jade', 'js', 'style', 'watch'));
}
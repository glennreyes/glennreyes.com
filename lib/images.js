import gulp from 'gulp'
import browserSync from 'browser-sync'
import imagemin from 'gulp-imagemin'
import clean from './clean'


gulp.task('images', ['clean'], () => {
  return gulp.src('src/**/*.{png,jpg,gif,svg}')
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe(browserSync.reload({stream: true}))
})

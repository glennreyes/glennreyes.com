import gulp from 'gulp'
import browserSync from 'browser-sync'
import mainBowerFiles from 'main-bower-files'
import clean from './clean'


function fonts() {
  return gulp.src(mainBowerFiles({
      filter: '**/*.{eot,ttf,woff,woff2}'
    }).concat('src/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(browserSync.reload({stream: true}))
}

gulp.task('fonts', ['clean'], fonts)

export default fonts

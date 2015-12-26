import gulp from 'gulp'
import browserSync from 'browser-sync'
import mainBowerFiles from 'main-bower-files'
import clean from './clean'


gulp.task('fonts', ['clean'], () => {
  return gulp.src(mainBowerFiles({
      filter: '**/*.{eot,ttf,woff,woff2}'
    }).concat('src/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(browserSync.reload({stream: true}))
})

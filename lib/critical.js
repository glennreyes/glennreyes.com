import gulp from 'gulp'
import { stream as critical } from 'critical'
import clean from './clean'
import templates from './templates'


gulp.task('critical', ['clean', 'templates'], () => {
  return gulp.src('dist/*.html')
    .pipe(critical({
      inline: true,
      base: '.tmp',
      src: 'index.html',
      dest:'.tmp/index.html',
      minify: true
    }))
    .pipe(gulp.dest('dist'))
})

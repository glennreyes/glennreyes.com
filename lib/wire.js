import gulp from 'gulp'
import { stream as wiredep } from 'wiredep'
import clean from './clean'


gulp.task('wire', ['clean'], () => {

  // Styles
  gulp.src('src/styles/*.scss')
    .pipe(wiredep({ ignorePath: /^(\.\.\/)+/ }))
    .pipe(gulp.dest('src/styles'))

  // Templates
  gulp.src('src/templates/**/*.hbs')
    .pipe(wiredep({ ignorePath: /^(\.\.\/)*\.\./ }))
    .pipe(gulp.dest('src/templates'))
})

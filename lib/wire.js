import gulp from 'gulp'
import { stream as wiredep } from 'wiredep'


gulp.task('wire', () => {

  // Styles
  gulp.src('src/styles/*.scss')
    .pipe(wiredep({ ignorePath: /^(\.\.\/)+/ }))
    .pipe(gulp.dest('src/styles'))

  // Templates
  gulp.src('src/templates/**/*.hbs')
    .pipe(wiredep({ ignorePath: /^(\.\.\/)*\.\./ }))
    .pipe(gulp.dest('src/templates'))
})

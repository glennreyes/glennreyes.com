import gulp from 'gulp'
import browserSync from 'browser-sync'
import handlebars from 'gulp-compile-handlebars'
import rename from 'gulp-rename'
import clean from './clean'
import data from '../src/data.json'


gulp.task('templates', ['clean'], () => {
  return gulp.src('src/templates/*.hbs')
    .pipe(handlebars(data.profile, {
      ignorePartials: true,
      batch: ['src/templates']
    }))
    .pipe(rename((path) => { path.extname = '.html' }))
    .pipe(gulp.dest('.tmp'))
    .pipe(browserSync.reload({stream: true}))
})

import gulp from 'gulp'
import browserSync from 'browser-sync'
import fs from 'fs'
import handlebars from 'gulp-compile-handlebars'
import rename from 'gulp-rename'
import clean from './clean'


function templates() {

  const DATA = JSON.parse(fs.readFileSync('src/data.json'))

  return gulp.src('src/templates/*.hbs')
    .pipe(handlebars(DATA.profile, {
      ignorePartials: true,
      batch: ['src/templates']
    }))
    .pipe(rename((path) => { path.extname = '.html' }))
    .pipe(gulp.dest('.tmp'))
    .pipe(browserSync.reload({stream: true}))

}

gulp.task('templates', ['clean'], templates)


export default templates

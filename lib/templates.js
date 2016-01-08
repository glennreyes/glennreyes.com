import gulp from 'gulp'
import browserSync from 'browser-sync'
import fs from 'fs'
import handlebars from 'gulp-compile-handlebars'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'
import util from 'gulp-util'
import clean from './clean'


function templates() {

  let
    DATA_MAIN,
    DATA_EN,
    DATA_DE

  // Config for all languages
  let config = {
    src: 'src/templates/*.hbs',
    handlebars: {
      ignorePartials: true,
      batch: ['src/templates'],
      helpers: {
        deep: (text) => {
          return text
        }
      }
    },
    rename: (path) => { path.extname = '.html' }
  }

  // Parse Data
  try {
    DATA_MAIN = JSON.parse(fs.readFileSync('src/data/main.json'))
    DATA_EN = JSON.parse(fs.readFileSync('src/data/en.json'))
    DATA_DE = JSON.parse(fs.readFileSync('src/data/de.json'))
  } catch(error) {
    console.log(error)
  }

  // DE
  gulp.src(config.src)
    .pipe(plumber())
    .pipe(handlebars(Object.assign({}, DATA_MAIN, DATA_DE), config.handlebars))
    .pipe(rename(config.rename))
    .pipe(gulp.dest('.tmp/de'))
    .on('error', util.log)

  // EN
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(handlebars(Object.assign({}, DATA_MAIN, DATA_EN), config.handlebars))
    .pipe(rename(config.rename))
    .pipe(gulp.dest('.tmp'))
    .pipe(browserSync.reload({stream: true}))
    .on('error', util.log)

}

gulp.task('templates', ['clean'], templates)


export default templates

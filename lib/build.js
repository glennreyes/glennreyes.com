import gulp from 'gulp'
import uglify from 'gulp-uglify'
import cssmin from 'gulp-minify-css'
import uncss from 'gulp-uncss'
import htmlmin from 'gulp-htmlmin'
import gulpif from 'gulp-if'
import scripts from './scripts'
import styles from './styles'
import templates from './templates'
import images from './images'
import fonts from './fonts'
import critical from './critical'


function build() {
  return gulp.src([
      '.tmp/**/*',
      'src/*.*',
      '!src/data.json'
    ])
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', cssmin()))
    .pipe(gulpif('*.css', uncss({ html: ['.tmp/index.html'] })))
    .pipe(gulpif('*.html', htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      minifyURLs: true,
      removeAttributeQuites: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantQuotes: true
    })))
    .pipe(gulp.dest('dist'))
}

gulp.task('build', [
  'scripts',
  'styles',
  'templates',
  'images',
  'fonts',
  'critical'
], build)


export default build

import gulp from 'gulp'
import uglify from 'gulp-uglify'
import cssmin from 'gulp-minify-css'
import htmlmin from 'gulp-htmlmin'
import gulpif from 'gulp-if'
import scripts from './scripts'
import styles from './styles'
import templates from './templates'
import images from './images'
import fonts from './fonts'


function build() {

  return gulp.src([
      '.tmp/**/*',
      'src/CNAME',
      'src/*.*'
    ])
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', cssmin()))
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
  'fonts'
], build)


export default build

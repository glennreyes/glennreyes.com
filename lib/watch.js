import gulp from 'gulp'
import scripts from './scripts'
import styles from './styles'
import templates from './templates'
import images from './images'
import fonts from './fonts'


function watch() {

  // Scripts
  scripts(true)

  // Styles
  gulp.watch('src/**/*.scss', styles)

  // Templates
  gulp.watch([
    'src/**/*.hbs',
    'src/**/*.json'
  ], templates)

  // Images
  gulp.watch('src/**/*.{png,jpg,gif,svg}', images)

  // Fonts
  gulp.watch([
    'src/**/*.{eot,ttf,woff,woff2}',
    'bower.json'
  ], fonts)
}

gulp.task('watch', watch)


export default watch

import gulp from 'gulp'
import del from 'del'
import { stream as critical } from 'critical'
import clean from './clean'
import templates from './templates'
import styles from './styles'


gulp.task('critical', ['clean', 'templates', 'styles'], () => {

  const settings = {
    inline: true,
    src: 'index.html',
    ignore: [
      /animation*/
    ],
    ignoreOptions: { matchDeclarationProperties: true }
  }

  // EN
  return gulp.src('.tmp/*.html')
    .pipe(critical(Object.assign({}, settings, {
      base: '.tmp/',
      dest:'.tmp/index.html',
      pathPrefix: './'
    })))
    .pipe(gulp.dest('.tmp'))
})

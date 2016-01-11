import gulp from 'gulp'
import del from 'del'
import critical from 'critical'
import clean from './clean'
import templates from './templates'
import styles from './styles'


gulp.task('critical', ['clean', 'templates', 'styles'], () => {

  // DE
  critical.generate({
    inline: true,
    base: '.tmp/de/',
    src: 'index.html',
    dest: '.tmp/de/index.html'
  })

  // EN
  critical.generate({
    inline: true,
    base: '.tmp/',
    src: 'index.html',
    dest:'.tmp/index.html'
  })

  return gulp
})

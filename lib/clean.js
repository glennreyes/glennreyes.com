import gulp from 'gulp'
import del from 'del'


function clean() {
  return del(['.tmp', 'dist'])
}

gulp.task('clean', clean)


export default clean

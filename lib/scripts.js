import gulp from 'gulp'
import browserSync from 'browser-sync'
import browserify from 'browserify'
import babelify from 'babelify'
import watchify from 'watchify'
import source from 'vinyl-source-stream'
import clean from './clean'
import wire from './wire'


function scripts(watch) {

  const props = {
    entries: './src/scripts/main.js',
    debug: true
  }
  const bundler = watch ? watchify(browserify(props)) : browserify(props)

  function rebundle() {
    return bundler
      .transform(babelify)
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('.tmp/scripts'))
      .pipe(browserSync.reload({stream: true}))
  }

  bundler.on('update', rebundle)

  return rebundle()
}

gulp.task('scripts', ['clean', 'wire'], () => {
  return scripts(false)
})


export default scripts

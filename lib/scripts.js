import gulp from 'gulp'
import browserSync from 'browser-sync'
import browserify from 'browserify'
import babelify from 'babelify'
import watchify from 'watchify'
import source from 'vinyl-source-stream'
import notify from 'gulp-notify'
import clean from './clean'
import wire from './wire'



function handleErrors() {

  let args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  this.emit('end'); // Keep gulp from hanging on this task
}


function scripts(watch) {

  let props = {
    entries: './src/scripts/main.js',
    debug: true,
    transform: [babelify]
  }
  let bundler = watch ? watchify(browserify(props)) : browserify(props)


  function rebundle() {
    return bundler
      .bundle()
      .on('error', handleErrors)
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

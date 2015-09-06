// generated on 2015-08-31 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';
import mainBowerFiles from 'main-bower-files';
import fs from 'fs';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

function getMetaData() {
  var p = JSON.parse(fs.readFileSync('package.json'));
  return {
    author:         p.author,
    description:    p.description,
    homepage:       p.homepage,
    keywords:       p.keywords,
    profession:     p._profession,
    address:        p._address,
    zip:            p._zipcitycountry,
    mail:           p._mail,
    phone:          p._phone,
    'twitter-user': p['_twitter-user'],
    facebook:       p._facebook,
    github:         p._github,
    linkedin:       p._linkedin,
    twitter:        p._twitter
  };
}

gulp.task('styles', () => {
  return gulp.src('src/styles/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 1 version']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(reload({stream: true, once: true}))
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}

gulp.task('lint', lint('src/scripts/**/*.js'));
gulp.task('lint:test', lint('test/spec/**/*.js', {
  env: {
    mocha: true
  }
}));

gulp.task('html', ['styles'], () => {
  const assets = $.useref.assets({searchPath: ['.tmp', 'src', '.']});

  return gulp.src('.tmp/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('src/images/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(mainBowerFiles({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('src/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'src/*.*',
    '!src/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['styles', 'fonts'], () => {
  browserSync({
    notify: true,
    port: 2109,
    server: {
      baseDir: ['.tmp', 'src'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'src/scripts/**/*.js',
    'src/images/**/*',
    '.tmp/**/*',
  ]).on('change', reload);

  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch(['src/templates/**/*.hbs', 'package.json'], ['handlebars']);
  gulp.watch('src/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 2109,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', () => {
  browserSync({
    notify: false,
    port: 2109,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

gulp.task('wiredep', () => {
  gulp.src('src/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('src/styles'));

  gulp.src('src/templates/**/*.hbs')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('src/templates'));
});

gulp.task('handlebars', () => {
  return gulp.src('src/templates/index.hbs')
    .pipe($.compileHandlebars(getMetaData(), {
      ignorePartials: true,
      batch: ['src/templates']
    }))
    .pipe($.rename('index.html'))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('templates', () => {
  return gulp.src('.tmp/*.html')
    .pipe(gulp.dest('dist'));
});

function bump(options) {
  gulp.src([
      'bower.json',
      'package.json'
    ])
    .pipe($.bump(options))
    .pipe(gulp.dest('./'));
}

gulp.task('bump', () => {
  gulp.start('bump:patch')
});

gulp.task('bump:patch', () => {
  bump();
});

gulp.task('bump:minor', () => {
  bump({type: 'minor'});
});

gulp.task('bump:major', () => {
  bump({type: 'major'});
});

gulp.task('staging', () => {
  return gulp.src('dist/**')
    .pipe($.rsync({
      root: 'dist',
      hostname: 'ssh.glennreyes.com',
      username: 'glennreyes.com',
      destination: '/www/staging',
      incremental: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store']
    }));
});

gulp.task('production', () => {
  return gulp.src('dist/**')
    .pipe($.rsync({
      root: 'dist',
      hostname: 'ssh.glennreyes.com',
      username: 'glennreyes.com',
      destination: '/www',
      incremental: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store']
    }));
});

gulp.task('deploy', () => {
  gulp.start('production');
});

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras', 'handlebars'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

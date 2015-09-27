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
    author:         p.author.name,
    mail:           p.author.email,
    homepage:       p.author.url,
    description:    p.author._description,
    keywords:       p.author._keywords,
    profession:     p.author._profession,
    address:        p.author._address,
    zip:            p.author._zipcitycountry,
    phone:          p.author._phone,
    'twitter-user': p.author['_twitter-user'],
    facebook:       p.author._facebook,
    github:         p.author._github,
    linkedin:       p.author._linkedin,
    twitter:        p.author._twitter
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

gulp.task("webpack:build", function(callback) {
  // modify some webpack config options
  webpackConfig.plugins = [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ];

  // run webpack
  webpack(webpackConfig, function(err, stats) {
    if(err) throw new $.util.PluginError("webpack:build", err);
    $.util.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});


// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;


// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("webpack:build-dev", function(callback) {
  // run webpack
  devCompiler.run(function(err, stats) {
    if(err) throw new $.util.PluginError("webpack:build-dev", err);
    $.util.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});

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
    notify: false,
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

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras', 'handlebars'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

// generated on 2015-08-31 using generator-gulp-webapp 1.0.3
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';
import mainBowerFiles from 'main-bower-files';
import fs from 'fs';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';

const $ = gulpLoadPlugins();

var getMetaData = function getMetaData() {
  const PACKAGE = JSON.parse(fs.readFileSync('package.json'));
  return {
    author: PACKAGE.author.name,
    mail: PACKAGE.author.email,
    homepage: PACKAGE.author.url,
    description: PACKAGE.author._description,
    keywords: PACKAGE.author._keywords,
    profession: PACKAGE.author._profession,
    address: PACKAGE.author._address,
    zip: PACKAGE.author._zipcitycountry,
    phone: PACKAGE.author._phone,
    'twitter-user': PACKAGE.author['_twitter-user'],
    facebook: PACKAGE.author._facebook,
    github: PACKAGE.author._github,
    linkedin: PACKAGE.author._linkedin,
    twitter: PACKAGE.author._twitter
  };
};

var bump = function bump(options) {
  gulp.src([
      'bower.json',
      'package.json'
    ])
    .pipe($.bump(options))
    .pipe(gulp.dest('./'));
};




/**
 * STYLES
 */

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
    .pipe(browserSync.reload({stream: true}));
});




/**
 * SCRIPTS
 */

gulp.task('scripts', () => {
  gulp.start('webpack:build', () => {
    gulp.src('.tmp/scripts/**/*.js')
      .pipe($.uglify())
      .pipe(gulp.dest('dist/scripts'));
  });
});

gulp.task("webpack:build", (callback) => {
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
  webpack(webpackConfig, (err, stats) => {
    if(err) throw new $.util.PluginError("webpack:build", err);
    $.util.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("webpack:build-dev", function(callback) {
  // modify some webpack config options
  var myDevConfig = webpackConfig;
  myDevConfig.devtool = "sourcemap";
  myDevConfig.debug = true;

  // console.log(myDevConfig);
  // return;

  // create a single instance of the compiler to allow caching
  var devCompiler = webpack(myDevConfig);

  // run webpack
  devCompiler.run(function(err, stats) {
    if(err) throw new $.util.PluginError("webpack:build-dev", err);
    $.util.log("[webpack:build-dev]", stats.toString({
      colors: true
    }));
    callback();
  });
});



/**
 * TEMPLATES, IMAGES & EXTRAS
 */

gulp.task('templates', () => {
  return gulp.src('.tmp/*.html')
    .pipe(gulp.dest('dist'));
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
    filter: '**/*.{eot,ttf,woff,woff2}'
  }).concat('src/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'));
});

gulp.task('fonts:dist', ['fonts'], () => {
  return gulp.src('.tmp/fonts/**/*')
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



/**
 * BROWSERSYNC & WATCH
 */

gulp.task('serve', ['styles', 'fonts', 'webpack:build-dev'], () => {
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
    'src/images/**/*',
    '.tmp/fonts/**/*',
  ]).on('change', browserSync.reload);

  gulp.watch(['src/**/*.js', 'webpack.config.js'], () => {
    gulp.start('webpack:build-dev', browserSync.reload);
  });
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

  gulp.watch('test/spec/**/*.js').on('change', browserSync.reload);
});



/**
 * WIREDEP
 */

gulp.task('wiredep', () => {
  gulp.src('src/styles/*.scss')
    .pipe(wiredep({ ignorePath: /^(\.\.\/)+/ }))
    .pipe(gulp.dest('src/styles'));

  gulp.src('src/templates/**/*.hbs')
    .pipe(wiredep({ ignorePath: /^(\.\.\/)*\.\./ }))
    .pipe(gulp.dest('src/templates'));
});



/**
 * VERSION BUMPS
 */

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



/**
 * CLEAN & BUILD
 */

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('build', ['html', 'images', 'fonts:dist', 'extras', 'handlebars'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('wiredep');
  gulp.start('scripts');
  return gulp.start('build');
});

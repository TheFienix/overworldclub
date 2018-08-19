var
assign          = require('lodash.assign'),
browserSync     = require('browser-sync').create(),
concat          = require('gulp-concat'),
cleancss        = require('gulp-clean-css'),
presetEnv         = require('postcss-preset-env'),
del             = require('del'),
gulp            = require('gulp'),
gulpFrontMatter = require('gulp-front-matter'),
plumber         = require('gulp-plumber'),
postcss         = require('gulp-postcss'),
precss          = require('precss'),
rev             = require('gulp-rev'),
sourcemaps      = require('gulp-sourcemaps'),
autoprefixer    = require('gulp-autoprefixer')
;

var env = process.env.GULP_ENV,
cssPlugins = [
  presetEnv,
  precss
],
jsDeps = [
  './node_modules/greensock/dist/TweenMax.js',
  './node_modules/greensock/dist/easing/EasePack.js',
  './node_modules/greensock/dist/plugins/CSSPlugin.js',
  './node_modules/greensock/dist/plugins/ScrollToPlugin.js',
  './node_modules/waypoints/lib/noframework.waypoints.min.js',
  './scripts/scripts.js',
  './scripts/mail.js'
],
cleanCssOptions = { compatibility: '*' },
autoprefixerConf = {
  browsers: ['last 2 versions'],
  cascade: false
}
;

gulp.task('og:image',function(){
  return gulp.src('./img/OpenGraph-image.jpg')
  .pipe(gulp.dest('docs/img'));
});

gulp.task('favicon', function(){
  return gulp.src('./favicon/*')
  .pipe(gulp.dest('docs/favicon'));
});

gulp.task('clean:css',function(){
  return del([
    'docs/css/*'
  ]);
});

gulp.task('css:loader',function(){
  return gulp.src(['./styles/loader.css'])
  .pipe(postcss(cssPlugins))
  .pipe(autoprefixer(autoprefixerConf))
  .pipe(cleancss(cleanCssOptions))
  .pipe(gulp.dest('docs/css'));
});

gulp.task('css:build',['clean:css','css:loader'],function(){
  return gulp.src('./styles/*.css')
  .pipe(postcss(cssPlugins))
  .pipe(autoprefixer(autoprefixerConf))
  .pipe(cleancss(cleanCssOptions))
  .pipe(gulp.dest('docs/css'));
});

gulp.task('css:dev',['css:loader'],function () {
  return gulp.src('./styles/style.css')
  .pipe(sourcemaps.init())
  .pipe(postcss(cssPlugins))
  .pipe(autoprefixer(autoprefixerConf))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('docs/css'))
  .pipe(browserSync.stream());
});

gulp.task('js:loader', function(){
  return gulp.src(['./scripts/loader.js'])
  .pipe(gulp.dest("docs/js"));
});

gulp.task('js:dev',['js:loader'],function(){
  return gulp.src(jsDeps)
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('docs/js'));
});

gulp.task('js:build',['js:loader'],function(){
  return gulp.src(jsDeps)
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('docs/js'));
});

gulp.task('browser-reload',['js:dev'],function(done){
  browserSync.reload();
  done();
});

gulp.task('serve',function(){
  browserSync.init({
    server: "./docs",
    port: 8870,
    open: false,
    notify: false
  });

  gulp.watch('./styles/*.css',['css:dev']);
  gulp.watch('./scripts/*.js',['js:dev','browser-reload']);
  gulp.watch('./docs/**/*.html',['browser-reload']);
});


gulp.task('default',['serve']);
gulp.task('build',['css:build','js:build','favicon','og:image']);

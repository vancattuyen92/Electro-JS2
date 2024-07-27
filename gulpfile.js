// const gulp = require("gulp");
// const plumber = require("gulp-plumber");
// const rename = require("gulp-rename");
// const sass = require("gulp-sass");
// const autoPrefixer = require("gulp-autoprefixer");
// require("es6-promise").polyfill();
// const cssComb = require("gulp-csscomb");
// const cmq = require("gulp-merge-media-queries");
// const cleanCss = require("gulp-clean-css");
// (browserSync = require("browser-sync").create()), (reload = browserSync.reload);
// const uglify = require("gulp-uglify-es").default;

// const imagemin = require("gulp-imagemin");

// gulp.task("scss", function () {
//   return gulp
//     .src(["src/scss/**/*.scss"])
//     .pipe(sass())
//     .pipe(autoPrefixer())
//     .pipe(cssComb())
//     .pipe(cmq({ log: true }))
//     .pipe(gulp.dest("dist/css"))
//     .pipe(
//       rename({
//         suffix: ".min",
//       })
//     )
//     .pipe(cleanCss())
//     .pipe(gulp.dest("dist/css"));
// });

// gulp.task("image", function () {
//   return gulp.src("src/img/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
// });

// gulp.task("js", function () {
//   return gulp
//     .src(["src/js/**/*.js"])
//     .pipe(
//       plumber({
//         handleError: function (err) {
//           console.log(err);
//           this.emit("end");
//         },
//       })
//     )
//     .pipe(gulp.dest("dist/js"))
//     .pipe(
//       rename({
//         suffix: ".min",
//       })
//     )
//     .pipe(uglify())
//     .pipe(gulp.dest("dist/js"));
// });
// gulp.task("html", function () {
//   return gulp.src(["*.html"]).pipe(gulp.dest("dist/"));
// });
// gulp.task("serve", function () {
//   // Serve files from the root of this project
//   browserSync.init({
//     server: {
//       baseDir: ".",
//     },
//   });

//   gulp.watch("src/js/**/*.js", gulp.series("js")).on("change", reload);
//   gulp.watch("src/scss/**/*.scss", gulp.series("scss")).on("change", reload);
//   gulp.watch("src/img/*", gulp.series("image")).on("change", reload);
//   gulp.watch("*.html", gulp.series("html")).on("change", reload);
// });

const gulp = require('gulp');
const sass = require('gulp-dart-sass');

// Define the 'sass' task
gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Define the 'build' task which depends on 'sass'
gulp.task('build', gulp.series('sass'));

// Define the 'watch' task
gulp.task('watch', function() {
  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
});

// Define the default task
gulp.task('default', gulp.series('build', 'watch'));



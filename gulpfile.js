var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

const paths = {
    styles: {
	bootstrap: "./node_modules/bootstrap/scss/bootstrap.scss",
	personal: "./src/scss/*.scss",
	dest: "./src/css"
    }
};

function style()
{
    return gulp.src([paths.styles.bootstrap, paths.styles.personal])
	.pipe(sass().on("error", sass.logError))
	.pipe(gulp.dest(paths.styles.dest))
	.pipe(browserSync.stream());
}

function watch()
{
    browserSync.init({
	server: "./src"
    });

    gulp.watch(paths.styles.personal, style);
    gulp.watch("./src/*.html", browserSync.reload);
}

exports.default = watch;
exports.style = style;
exports.watch = watch;

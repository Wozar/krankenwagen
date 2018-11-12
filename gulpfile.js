var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();

const paths = {
    styles: {
	bootstrap: "./node_modules/bootstrap/scss/bootstrap.scss",
	personal: "./scss/*.scss",
	dest: "./css"
    }
};

function style()
{
    return gulp.src([paths.styles.bootstrap, paths.styles.personal])
	.pipe(sass().on("error", sass.logError))
	.pipe(gulp.dest(paths.styles.dest))
	.pipe(browserSync.stream());
}

function reload(done)
{
    browserSync.reload();
    done();
}

function watch()
{
    browserSync.init({
	server: "./"
    });

    gulp.watch(paths.styles.personal, style);
    gulp.watch("./*.html", reload);
}

exports.default = watch;
exports.style = style;
exports.watch = watch;

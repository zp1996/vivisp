const gulp = require("gulp"),
	less = require("gulp-less"),
	cleanCss = require("gulp-clean-css"),
	concat = require("gulp-concat"),
	filePath = [
		`${__dirname}/src/less/**/*.less`,
	];

gulp.task("less", () => {
	gulp.src(filePath[0])
      .pipe(less())
      .pipe(concat("main.min.css"))
      .pipe(cleanCss())
      .pipe(gulp.dest("./build/css"));
});

gulp.watch(filePath, ["less"]);
gulp.task("default", ["less"]);


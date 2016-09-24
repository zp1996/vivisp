const gulp = require("gulp"),
	less = require("gulp-less"),
	cleanCss = require("gulp-clean-css"),
	concat = require("gulp-concat"),
	imgaemin = require("gulp-imagemin"),
	filePath = [
		`${__dirname}/src/less/**/*.less`,
		`${__dirname}/src/images/**`
	];

gulp.task("less", () => {
	gulp.src(filePath[0])
      .pipe(less())
      .pipe(concat("main.min.css"))
      .pipe(cleanCss())
      .pipe(gulp.dest("./build/css"));
});

gulp.task("image", () => {
	gulp.src(filePath[1])
			.pipe(imgaemin())
			.pipe(gulp.dest("./build/images"));
});

gulp.watch(filePath, ["less", "image"]);
gulp.task("default", ["less", "image"]);


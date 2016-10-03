import $ from "./lsgo";
const ul = $("#nav-list");
if (ul.length) {
	const nav = $("#login-nav").get(0);
	nav.onmouseover = function () {
		ul.css({
			display: "inline-block"
		});
	};
	ul.get(0).onmouseout = nav.onmouseout = function () {
		ul.css({
			display: "none"
		});
	};
}
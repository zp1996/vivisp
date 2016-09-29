import $ from "./lsgo";

var mask = null;

if ($("#mask").length === 0) {
	var body = $("body").get(0);
	body.insertBefore($("<div id='mask'></div>").get(0), body.childNodes[0]);
}

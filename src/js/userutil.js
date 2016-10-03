import $ from "./lsgo";
const mask = {
	show: () => {
		$("#mask").css({ display: "block" });		
	},
	hide: () => {
		$("#mask").css({ display: "none" });		
	}
};
function submit (validate, url) {
	var flag = false;
	$("#sign-in").get(0).onclick = function () {
		if (flag) return void 0;
		var submit = validate.submit(url);
		if (submit) {
			mask.show();
			(() => {
				flag = true;
				submit.then((res) => {
										flag = false;
										res = JSON.parse(res);
										if (res.flag) {
											return window.location.href = "./";
										}
										mask.hide();
										if (res.error) {
											return $("#attention").text("服务器繁忙,请稍后再试!");
										}
										res.ele && validate.eles[res.ele].throwError(res.msg);
									}, () => {
										flag = false;
										mask.hide();
										$("#attention").text("服务器繁忙,请稍后再试!");
									});
			})();
		}
	};
}
export default submit;
import $ from "./lsgo";

function Img (ele) {
	this.ele = ele;
	this.url = ele.data("url");
	this.flag = +ele.data("loaded");
}
Img.prototype.load = function () {
	this.ele.attr("src", this.url);
};

const wrapper = $(".slider-box"),
	lis = wrapper.find("li"),
	imgs = wrapper.find("img"),
	dots = $(".dot-box").find("span"),
	collection = [],
	active = "slide-active",
	len = imgs.length;

var active_num = 0,
	index = 0,
	timer = null;

// 包装img
$.each(imgs, (ele, i) => {
	collection[i] = new Img($(ele));
});

function setTimer () {
	timer = setInterval(() => {
		slide(++index % len);
	}, 5000);
}

$.each(dots, (ele, i) => {
	ele.onmousemove = function () {
		clearInterval(timer);
		timer = null;
		if (i === active_num) {
			return void 0;
		}
		slide(i);
	};
	ele.onmouseout = function () {
		if (!timer) {
			setTimer();
		}
	}
});

function slide (i) {
	var hide = $(`#${active}`);
	if (!collection[i].flag) {
		collection[i].load();
	}
	active_num = index = i;
	animate(lis.eq(i), hide);
	$("#dot-active").removeAttr("id");
	$(dots[i]).attr("id", "dot-active");
}

function animate (show, hide) {
	var opacity = +hide.css("opacity"),
		start = 0;
	function setStyle (ele, opacity, index) {
		ele.css({
			"opacity": opacity,
			"z-index": index
		});
	}
	function sport () {
		opacity -= 0.08;
		start += 0.08;
		setStyle(hide, opacity, 9);
		setStyle(show, start, 9);
		if (opacity > 0) {
			requestAnimationFrame(sport);
		}	else {
			hide.removeAttr("id");
			show.attr("id", active);
			setStyle(hide, 0, 1);
			setStyle(show, 1, 9);
		}
	}
	requestAnimationFrame(sport);
}

// 加载页面成功后,主线程闲下来去加载轮播图片and开启自动轮播
window.addEventListener("load", () => {
	setTimer();
	collection.forEach((val, i) => {
		if (!val.flag) {
			val.load();
		}
	});
}, false);
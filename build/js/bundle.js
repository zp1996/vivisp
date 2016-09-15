/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _slide = __webpack_require__(2);

	var _slide2 = _interopRequireDefault(_slide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _lsgo = __webpack_require__(3);

	var _lsgo2 = _interopRequireDefault(_lsgo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Img(ele) {
		this.ele = ele;
		this.url = ele.data("url");
		this.flag = +ele.data("loaded");
	}
	Img.prototype.load = function () {
		this.ele.attr("src", this.url);
	};

	var wrapper = (0, _lsgo2.default)(".slider-box"),
	    lis = wrapper.find("li"),
	    imgs = wrapper.find("img"),
	    dots = (0, _lsgo2.default)(".dot-box").find("span"),
	    collection = [],
	    active = "slide-active",
	    len = imgs.length;

	var active_num = 0,
	    index = 0,
	    timer = null;

	// 包装img
	_lsgo2.default.each(imgs, function (ele, i) {
		collection[i] = new Img((0, _lsgo2.default)(ele));
	});

	function setTimer() {
		timer = setInterval(function () {
			slide(++index % len);
		}, 5000);
	}

	_lsgo2.default.each(dots, function (ele, i) {
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
		};
	});

	function slide(i) {
		var hide = (0, _lsgo2.default)("#" + active);
		if (!collection[i].flag) {
			collection[i].load();
		}
		active_num = index = i;
		animate(lis.eq(i), hide);
		(0, _lsgo2.default)("#dot-active").removeAttr("id");
		(0, _lsgo2.default)(dots[i]).attr("id", "dot-active");
	}

	function animate(show, hide) {
		var opacity = +hide.css("opacity"),
		    start = 0;
		function setStyle(ele, opacity, index) {
			ele.css({
				"opacity": opacity,
				"z-index": index
			});
		}
		function sport() {
			opacity -= 0.08;
			start += 0.08;
			setStyle(hide, opacity, 9);
			setStyle(show, start, 9);
			if (opacity > 0) {
				requestAnimationFrame(sport);
			} else {
				hide.removeAttr("id");
				show.attr("id", active);
				setStyle(hide, 0, 1);
				setStyle(show, 1, 9);
			}
		}
		requestAnimationFrame(sport);
	}

	// 加载页面成功后,主线程闲下来去加载轮播图片and开启自动轮播
	window.addEventListener("load", function () {
		setTimer();
		collection.forEach(function (val, i) {
			if (!val.flag) {
				val.load();
			}
		});
	}, false);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	!function (t, n) {
	   true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return n();
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t.L = n();
	}(undefined, function (t) {
	  function n(t, n) {
	    for (var e = t.length || 0, r = 0; r < e; r++) {
	      this[r] = t[r];
	    }this.length = e, this.selector = n || "";
	  }function e(t) {
	    return Object.getPrototypeOf(t) === n.prototype;
	  }function r(t, n) {
	    var e,
	        r = "#" === n.charAt(0),
	        i = "." === n.charAt(0),
	        o = r || i ? n.slice(1) : n,
	        u = S.test(o);return t.getElementById && u && r ? (e = t.getElementById(o)) ? [e] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : A.call(u && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(o) : t.querySelectorAll(n));
	  }function i(t, n) {
	    if (!n || !t || 1 !== t.nodeType) return !1;var e = "MatchesSelector",
	        i = t.matches || t["webkit" + e] || t["moz" + e] || t["o" + e] || t.matchesSelector;if (i) return i.call(t, n);var o,
	        u = t.parentNode,
	        c = !u;return c && (u = P).appendChild(t), o = ~r(u, n).indexOf(t), c && P.removeChild(t), Boolean(o);
	  }function o(t) {
	    var n = t && t.length;return "number" == typeof n && n >= 0 && n < y;
	  }function u(t) {
	    return x.filter.call(t, function (n, e) {
	      return t.indexOf(n) === e;
	    });
	  }function c(t, n) {
	    return n ? D(t).filter(n) : D(t);
	  }function s(t) {
	    return "children" in t ? A.call(t.children) : D.map(t.childNodes, function (t) {
	      if (1 === t.nodeType) return t;
	    });
	  }function a(t) {
	    return t.length > 0 ? D.fn.concat.apply([], t) : t;
	  }function l(t) {
	    return t.replace(/([a-z])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
	  }function f(t, n) {
	    return "number" != typeof n || R[l(t)] ? n : n + "px";
	  }function h(t, n, e, r) {
	    return D.isFunction(n) ? n.call(t, e, r) : n;
	  }function p(n, e, r) {
	    r === t || null === r ? n.removeAttribute(e) : n.setAttribute(e, r);
	  }function d(n, e) {
	    return e === t ? n.className : n.className = e;
	  }function m(t) {
	    return t in z ? z[t] : z[t] = new RegExp("(^|\\s)" + t + "(\\s|$)");
	  }function g(t) {
	    try {
	      return t ? "true" === t || "false" !== t && ("null" === t ? null : +t + "" === t ? +t : /^[\[\{]/.test(t) ? JSON.parse(t) : t) : t;
	    } catch (n) {
	      return t;
	    }
	  }var y = Math.pow(2, 53) - 1;var v,
	      b = Object.prototype,
	      x = Array.prototype,
	      C = b.toString,
	      E = b.hasOwnProperty,
	      A = x.slice,
	      O = /^\s*<(\w+|!)[^>]*>/,
	      w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	      N = /<(?!area|br|col|embed|hr|img|input|link|meta|param)((\w+)[^>]*)\/>/gi,
	      S = /^[\w-]*$/,
	      j = /([A-Z])/g,
	      T = /complete|interactive/,
	      L = /(?=(?!^)(\d{3})+$)/g,
	      M = /\d+/g,
	      k = document.createElement("table"),
	      B = document.createElement("tr"),
	      P = document.createElement("div"),
	      F = { tr: document.createElement("tbody"), tbody: k, thead: k, tfoot: k, td: B, th: B, "*": document.createElement("div") },
	      R = { columns: 1, "font-weight": 1, opacity: 1, "column-count": 1, "z-index": 1 },
	      H = { class: "className", maxlength: "maxLength", readonly: "readOnly" },
	      z = {},
	      D = function () {
	    function y(n) {
	      return n.filter(function (n) {
	        return n !== t && null !== n;
	      });
	    }function b(n, e, r) {
	      var i, o, u;return w.test(n) && (i = $(document.createElement(RegExp.$1))), i || (n = n.replace(N, "<$1></$2>"), e === t && (e = O.test(n) && RegExp.$1), e = e in F ? e : "*", u = F[e], u.innerHTML = "" + n, i = M.each(A.call(u.childNodes), function (t) {
	        u.removeChild(t);
	      }), S(r) && (o = M(i))), i;
	    }function C(t) {
	      return t && t === t.window;
	    }function S(t) {
	      return M.isObject(t) && !C(t) && Object.getPrototypeOf(t) === Object.prototype;
	    }function L(t) {
	      return t && e(t) ? t : M(t);
	    }var M = function M(t, n) {
	      return new M.fn.init(t, n);
	    };return M.fn = M.prototype = { constructor: M, init: function init(i, o) {
	        var u;if (i) {
	          if (M.isString(i)) {
	            if (i = i.trim(), "<" === i.charAt(0) && ">" === i.charAt(i.length - 1) && O.test(i)) u = b(i, RegExp.$1, o), i = null;else {
	              if (o !== t) return M(o).find(i);u = r(document, i);
	            }
	          } else {
	            if (M.isFunction(i)) return $(document).ready(i);if (e(i)) return i;M.isArray(i) ? u = y(i) : "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (u = [i], i = null);
	          }
	        } else u = [];return new n(u, i);
	      }, indexOf: x.indexOf, index: function index(t) {
	        return t = t.get ? t.get(0) : t, x.indexOf.call(this, t);
	      }, concat: function concat() {
	        for (var t, n = [], r = 0, i = arguments.length; r < i; r++) {
	          t = arguments[r], n[r] = e(t) ? t.toArray() : t;
	        }return x.concat.apply(e(this) ? this.toArray() : this, n);
	      }, slice: function slice() {
	        return M(A.apply(this, arguments));
	      }, get: function get(n) {
	        return n === t ? A.call(this) : this[n >= 0 ? n : n + this.length];
	      }, eq: function eq(t) {
	        return t === -1 ? this.slice(t) : this.slice(t, t + 1);
	      }, first: function first() {
	        return L(this[0]);
	      }, last: function last() {
	        return L(this[this.length - 1]);
	      }, toArray: function toArray() {
	        return this.get();
	      }, ready: function ready(t) {
	        return T.test(document.readyState) && document.body ? t() : document.addEventListener("DOMConentLoaded", function () {
	          t();
	        }, !1), this;
	      }, each: function each(t) {
	        return x.every.call(this, function (n, e) {
	          return t.call(n, n, e) !== !1;
	        }), this;
	      }, map: function map(t) {
	        return M(a(x.map.call(this, function (n, e) {
	          return t.call(n, n, e);
	        })));
	      }, add: function add(t, n) {
	        return M(u(this.concat(M(t, n))));
	      }, is: function is(t) {
	        return this.length > 0 && i(this[0], t);
	      }, not: function not(t) {
	        var n = [];if (M.isFunction(t)) this.each(function (e) {
	          t.call(this, e) || n.push(this);
	        });else {
	          var e = M.isString(t) ? this.filter(t) : o(t) ? A.call(t) : M(t);x.forEach.call(this, function (t) {
	            e.indexOf(t) === -1 && n.push(t);
	          });
	        }return M(n);
	      }, filter: function filter(t) {
	        return M.isFunction(t) ? this.not(this.not(t)) : M(x.filter.call(this, function (n) {
	          return i(n, t);
	        }));
	      }, find: function find(t) {
	        var n,
	            e = this;return n = t ? "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? M(t).filter(function () {
	          var t = this;return x.some.call(e, function (n) {
	            return M.contains(n, t);
	          });
	        }) : 1 === this.length ? M(r(this[0], t)) : this.map(function (n) {
	          return r(n, t);
	        }) : M();
	      }, has: function has(t) {
	        return this.filter(function () {
	          return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? $.contains(this, t) : Boolean($(this).find(t).length);
	        });
	      }, empty: function empty() {
	        return this.each(function () {
	          this.innerHTML = "";
	        });
	      }, children: function children(t) {
	        return c(this.map(function () {
	          return s(this);
	        }), t);
	      }, contents: function contents() {
	        return this.map(function () {
	          return A.call(this.childNodes);
	        });
	      }, pluck: function pluck(t) {
	        return M.map(this, function (n) {
	          return n[t];
	        });
	      }, siblings: function siblings(t) {
	        return c(this.map(function (t, n) {
	          return x.filter.call(s(t.parentNode), function (n) {
	            return n !== t;
	          });
	        }), t);
	      }, parent: function parent() {
	        return c(u(this.pluck("parentNode")));
	      }, clone: function clone() {
	        return this.map(function () {
	          return this.cloneNode(!0);
	        });
	      }, prev: function prev(t) {
	        return M(this.pluck("previousElementSibling")).filter(t || "*");
	      }, next: function next(t) {
	        return M(this.pluck("nextElementSibling")).filter(t || "*");
	      }, show: function show() {
	        return this.each(function () {
	          "none" === getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = "block");
	        });
	      }, hide: function hide() {
	        return this.css("display", "none");
	      }, css: function css(t, n) {
	        if (arguments.length < 2) {
	          var e = this[0];if ("string" == typeof t) {
	            if (!e) return;return e.style[M.camelCase(t)] || getComputedStyle(e, "").getPropertyValue(t);
	          }if (M.isArray(t)) {
	            if (!e) return;var r = {};return M.each(t, function (t) {
	              r[t] = e.style[M.camelCase(t)] || getComputedStyle(e, "").getPropertyValue(t);
	            }), r;
	          }
	        }var i = "";if (M.isString(t)) n || 0 === n ? i = l(t) + ":" + f(t, n) : this.each(function () {
	          this.style.removeProperty(l(t));
	        });else for (var o in t) {
	          t[o] || 0 === t[o] ? i += l(o) + ":" + f(o, t[o]) + ";" : this.each(function () {
	            this.style.removeProperty(l(o));
	          });
	        }return this.each(function () {
	          this.style.cssText += ";" + i;
	        });
	      }, html: function html(t) {
	        return arguments.length > 0 ? this.each(function (n) {
	          var e = this.innerHTML;M(this).empty().append(h(this, t, n, e));
	        }) : this.length > 0 ? this[0].innerHTML : null;
	      }, text: function text(t) {
	        return arguments.length > 0 ? this.each(function (n) {
	          var e = h(this, t, n, this.textContent);this.textContent = String(e) || "";
	        }) : this.length > 0 ? this.pluck("textContent").join("") : null;
	      }, attr: function attr(n, e) {
	        return M.isString(n) && 1 === arguments.length ? this[0] && 1 === this[0].nodeType ? this[0].getAttribute(n) : t : this.each(function (t, r) {
	          if (1 === t.nodeType) if (M.isObject(n)) for (var i in n) {
	            p(t, i, n[i]);
	          } else p(t, n, h(t, e, r, t.getAttribute(n)));
	        });
	      }, removeAttr: function removeAttr(t) {
	        return this.each(function (n, e) {
	          1 === n.nodeType && t.split(" ").forEach(function (t) {
	            p(n, t);
	          });
	        });
	      }, prop: function prop(t, n) {
	        return t = H[t] || t, arguments.length > 1 ? this.each(function (e, r) {
	          e[t] = h(e, n, r, e[t]);
	        }) : this[0] && this[0][t];
	      }, data: function data(t, n) {
	        t = "data-" + t.replace(j, "-$1").toLowerCase();var e = 1 === arguments.length ? this.attr(t) : this.attr(t, n);return null === e ? void 0 : g(e);
	      }, val: function val(t) {
	        return 1 === arguments.length ? this.each(function (n, e) {
	          n.value = h(n, t, e, n.value);
	        }) : this[0] && this[0].multiple ? M(this[0]).find("option").filter(function () {
	          return this.selected;
	        }).pluck("value") : this[0].value;
	      }, hasClass: function hasClass(t) {
	        return !!t && x.some.call(this, function (t) {
	          return this.test(d(t));
	        }, m(t));
	      }, addClass: function addClass(t) {
	        return t ? this.each(function (n, e) {
	          if ("className" in n) {
	            v = [];var r = d(n),
	                i = h(n, t, e, r);i.split(/\s+/g).forEach(function (t) {
	              M(n).hasClass(t) || v.push(t);
	            }), v.length && d(n, r + (r ? " " : "") + v.join(" "));
	          }
	        }) : this;
	      }, removeClass: function removeClass(n) {
	        return this.each(function (e, r) {
	          if ("className" in e) {
	            if (n === t) return d(e, "");v = d(e), h(e, n, r, v).split(/\s+/g).forEach(function (t) {
	              v = v.replace(m(t), "");
	            }), d(e, v.trim());
	          }
	        });
	      }, toggleClass: function toggleClass(t) {
	        return t ? this.each(function (n, e) {
	          var r = M(n),
	              i = h(n, t, e, d(n));i.split(/\s+/g).forEach(function (t) {
	            r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
	          });
	        }) : this;
	      } }, M.fn.init.prototype = n.prototype = M.fn, M.extend = M.fn.extend = function () {
	      var t,
	          n = arguments[0] || {},
	          e = 1,
	          r = arguments.length,
	          i = !1;for ("boolean" == typeof n && (i = n, n = arguments[e++] || {}), "object" != (typeof n === "undefined" ? "undefined" : _typeof(n)) && "function" != typeof n && (n = {}), e === r && (n = this, e--); e < r; e++) {
	        t = arguments[e] || {}, i && (t = JSON.parse(JSON.stringify(t)));for (var e in t) {
	          E.call(t, e) && (n[e] = t[e]);
	        }
	      }return n;
	    }, M.extend({ inArray: function inArray(t, n, e) {
	        return n.indexOf(t, e);
	      }, each: function each(t, n) {
	        var e,
	            r,
	            i = (t.length, o(t));if (i) x.every.call(t, function (e, i) {
	          return r = t, n.call(t, e, i) !== !1;
	        });else for (e in t) {
	          if (n.call(t, e, t[e]) === !1) return t;
	        }return t;
	      }, map: function map(t, n) {
	        var e,
	            r,
	            i = 0,
	            u = t.length,
	            c = o(t),
	            s = [];if (c) for (i = 0; i < u; i++) {
	          r = n(t[i], i), r && s.push(r);
	        } else for (e in t) {
	          r = n(t[i], i), r && s.push(r);
	        }return a(s);
	      }, merge: function merge(t, n) {
	        return n = M.isArray(n) ? n : [n], x.push.apply(t, n), t;
	      }, dedupe: function dedupe(t) {
	        for (var n, e = {}, r = [], i = 0; n = t[i++];) {
	          E.call(e, n) || (r.push(n), e[n] = 1);
	        }return r;
	      }, shuffle: function shuffle(t) {
	        for (var n, e, r = t.length; r;) {
	          e = Math.floor(Math.random() * r--), n = t[r], t[r] = t[e], t[e] = n;
	        }return t;
	      }, grep: function grep(t, n) {
	        return n = n || function () {
	          return !0;
	        }, x.filter.call(t, n);
	      }, BinarySearch: function BinarySearch(t, n) {
	        for (var e, r = 0, i = t.length - 1; r <= i;) {
	          if (e = r + i >> 1, t[e] === n) return e;t[e] < n ? r = e + 1 : i = e - 1;
	        }return -1;
	      }, range: function range(t, n, e) {
	        arguments.length <= 2 && (e = n, n = t || 0, t = 0), e = e || 1;for (var r = Math.max(Math.ceil(n - t) / e, 0), i = [], o = 0; o < r; o++, t += e) {
	          i[o] = t;
	        }return i;
	      } }), M;
	  }();return D.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t) {
	    D["is" + t] = function (n) {
	      return C.call(n) === "[object " + t + "]";
	    };
	  }), D.contains = document.documentElement.contains ? function (t, n) {
	    return t !== n && t.contains(n);
	  } : function (t, n) {
	    for (; n && (n = n.parentNode);) {
	      if (n === t) return !0;
	    }return !1;
	  }, D.isNumeric = function (t) {
	    return !D.isArray(t) && t - parseFloat(t) + 1 >= 0;
	  }, D.camelCase = function (t) {
	    return t.replace(/-+(.)?/g, function (t, n) {
	      return n ? n.toUpperCase() : "";
	    });
	  }, D.ReverseCamel = function (t) {
	    return t.replace(/(?!^)(?!$)[A-Z]{1}/g, function (t) {
	      return "-" + t.toLowerCase();
	    });
	  }, D.now = function () {
	    return +new Date();
	  }, D.error = function (t) {
	    throw new Error(t);
	  }, D.noop = function () {}, D.isEmptyObject = function (t) {
	    for (var n in t) {
	      return !1;
	    }return !0;
	  }, D.thousandFormat = function (t) {
	    return t && t.toString().replace(M, function (t) {
	      return t.replace(L, ",");
	    });
	  }, D;
	});

/***/ }
/******/ ]);
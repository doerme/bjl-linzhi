var App =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bjl/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function () {
  function a(a) {
    return a.replace(t, "").replace(u, ",").replace(v, "").replace(w, "").replace(x, "").split(y);
  }function b(a) {
    return "'" + a.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'";
  }function c(c, d) {
    function e(a) {
      return m += a.split(/\n/).length - 1, k && (a = a.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), a && (a = s[1] + b(a) + s[2] + "\n"), a;
    }function f(b) {
      var c = m;if (j ? b = j(b, d) : g && (b = b.replace(/\n/g, function () {
        return m++, "$line=" + m + ";";
      })), 0 === b.indexOf("=")) {
        var e = l && !/^=[=#]/.test(b);if (b = b.replace(/^=[=#]?|[\s;]*$/g, ""), e) {
          var f = b.replace(/\s*\([^\)]+\)/, "");n[f] || /^(include|print)$/.test(f) || (b = "$escape(" + b + ")");
        } else b = "$string(" + b + ")";b = s[1] + b + s[2];
      }return g && (b = "$line=" + c + ";" + b), r(a(b), function (a) {
        if (a && !p[a]) {
          var b;b = "print" === a ? u : "include" === a ? v : n[a] ? "$utils." + a : o[a] ? "$helpers." + a : "$data." + a, w += a + "=" + b + ",", p[a] = !0;
        }
      }), b + "\n";
    }var g = d.debug,
        h = d.openTag,
        i = d.closeTag,
        j = d.parser,
        k = d.compress,
        l = d.escape,
        m = 1,
        p = { $data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1 },
        q = "".trim,
        s = q ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
        t = q ? "$out+=text;return $out;" : "$out.push(text);",
        u = "function(){var text=''.concat.apply('',arguments);" + t + "}",
        v = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + t + "}",
        w = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (g ? "$line=0," : ""),
        x = s[0],
        y = "return new String(" + s[3] + ");";r(c.split(h), function (a) {
      a = a.split(i);var b = a[0],
          c = a[1];1 === a.length ? x += e(b) : (x += f(b), c && (x += e(c)));
    });var z = w + x + y;g && (z = "try{" + z + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + b(c) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try {
      var A = new Function("$data", "$filename", z);return A.prototype = n, A;
    } catch (a) {
      throw a.temp = "function anonymous($data,$filename) {" + z + "}", a;
    }
  }var d = function d(a, b) {
    return "string" == typeof b ? q(b, { filename: a }) : g(a, b);
  };d.version = "3.0.0", d.config = function (a, b) {
    e[a] = b;
  };var e = d.defaults = { openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null },
      f = d.cache = {};d.render = function (a, b) {
    return q(a)(b);
  };var g = d.renderFile = function (a, b) {
    var c = d.get(a) || p({ filename: a, name: "Render Error", message: "Template not found" });return b ? c(b) : c;
  };d.get = function (a) {
    var b;if (f[a]) b = f[a];else if ("object" == (typeof document === "undefined" ? "undefined" : _typeof(document))) {
      var c = document.getElementById(a);if (c) {
        var d = (c.value || c.innerHTML).replace(/^\s*|\s*$/g, "");b = q(d, { filename: a });
      }
    }return b;
  };var h = function h(a, b) {
    return "string" != typeof a && (b = typeof a === "undefined" ? "undefined" : _typeof(a), "number" === b ? a += "" : a = "function" === b ? h(a.call(a)) : ""), a;
  },
      i = { "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;" },
      j = function j(a) {
    return i[a];
  },
      k = function k(a) {
    return h(a).replace(/&(?![\w#]+;)|[<>"']/g, j);
  },
      l = Array.isArray || function (a) {
    return "[object Array]" === {}.toString.call(a);
  },
      m = function m(a, b) {
    var c, d;if (l(a)) for (c = 0, d = a.length; c < d; c++) {
      b.call(a, a[c], c, a);
    } else for (c in a) {
      b.call(a, a[c], c);
    }
  },
      n = d.utils = { $helpers: {}, $include: g, $string: h, $escape: k, $each: m };d.helper = function (a, b) {
    o[a] = b;
  };var o = d.helpers = n.$helpers;d.onerror = function (a) {
    var b = "Template Error\n\n";for (var c in a) {
      b += "<" + c + ">\n" + a[c] + "\n\n";
    }"object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.error(b);
  };var p = function p(a) {
    return d.onerror(a), function () {
      return "{Template Error}";
    };
  },
      q = d.compile = function (a, b) {
    function d(c) {
      try {
        return new i(c, h) + "";
      } catch (d) {
        return b.debug ? p(d)() : (b.debug = !0, q(a, b)(c));
      }
    }b = b || {};for (var g in e) {
      void 0 === b[g] && (b[g] = e[g]);
    }var h = b.filename;try {
      var i = c(a, b);
    } catch (a) {
      return a.filename = h || "anonymous", a.name = "Syntax Error", p(a);
    }return d.prototype = i.prototype, d.toString = function () {
      return i.toString();
    }, h && b.cache && (f[h] = d), d;
  },
      r = n.$each,
      s = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
      t = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
      u = /[^\w$]+/g,
      v = new RegExp(["\\b" + s.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
      w = /^\d[^,]*|,\d[^,]*/g,
      x = /^,+|,+$/g,
      y = /^$|,+/;e.openTag = "{{", e.closeTag = "}}";var z = function z(a, b) {
    var c = b.split(":"),
        d = c.shift(),
        e = c.join(":") || "";return e && (e = ", " + e), "$helpers." + d + "(" + a + e + ")";
  };e.parser = function (a, b) {
    a = a.replace(/^\s/, "");var c = a.split(" "),
        e = c.shift(),
        f = c.join(" ");switch (e) {case "if":
        a = "if(" + f + "){";break;case "else":
        c = "if" === c.shift() ? " if(" + c.join(" ") + ")" : "", a = "}else" + c + "{";break;case "/if":
        a = "}";break;case "each":
        var g = c[0] || "$data",
            h = c[1] || "as",
            i = c[2] || "$value",
            j = c[3] || "$index",
            k = i + "," + j;"as" !== h && (g = "[]"), a = "$each(" + g + ",function(" + k + "){";break;case "/each":
        a = "});";break;case "echo":
        a = "print(" + f + ");";break;case "print":case "include":
        a = e + "(" + c.join(",") + ");";break;default:
        if (/^\s*\|\s*[\w\$]/.test(f)) {
          var l = !0;0 === a.indexOf("#") && (a = a.substr(1), l = !1);for (var m = 0, n = a.split("|"), o = n.length, p = n[m++]; m < o; m++) {
            p = z(p, n[m]);
          }a = (l ? "=" : "=#") + p;
        } else a = d.helpers[e] ? "=#" + e + "(" + c.join(",") + ");" : "=" + a;}return a;
  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
    return d;
  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof exports ? module.exports = d : this.template = d;
}();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

var template = __webpack_require__(0)

module.exports = function($data,$filename
/**/) {
'use strict';var $utils=template.utils,$helpers=$utils.$helpers,$each=$utils.$each,otherList=$data.otherList,value=$data.value,index=$data.index,item=$data.item,$index=$data.$index,$escape=$utils.$escape,myList=$data.myList,$out='';$out+='<!-- 他人下注-->\n\n<div class="betting-wrapper">\n    ';
$each(otherList,function(value,index){
$out+='\n        ';
if(value[1].length){
$out+='\n        ';
$each(value,function(item,$index){
$out+='\n            ';
if(item > 0){
$out+='\n            <div class="jb-item " data-num="';
$out+=$escape(value[1]);
$out+='"></div>\n            ';
}
$out+='\n        ';
});
$out+='\n        ';
}
$out+='\n    ';
});
$out+='\n</div>\n\n<div class="betting-wrapper">\n    ';
$each(otherList,function(value,index){
$out+='\n        ';
if(value[2].length){
$out+='\n        ';
$each(value,function(item,$index){
$out+='\n            ';
if(item > 0){
$out+='\n            <div class="jb-item " data-num="';
$out+=$escape(value[2]);
$out+='"></div>\n            ';
}
$out+='\n        ';
});
$out+='\n        ';
}
$out+='\n    ';
});
$out+='\n</div>\n\n<div class="betting-wrapper">\n    ';
$each(otherList,function(value,index){
$out+='\n        ';
if(value[3].length){
$out+='\n        ';
$each(value,function(item,$index){
$out+='\n            ';
if(item > 0){
$out+='\n            <div class="jb-item " data-num="';
$out+=$escape(value[3]);
$out+='"></div>\n            ';
}
$out+='\n        ';
});
$out+='\n        ';
}
$out+='\n    ';
});
$out+='\n</div>\n\n<div class="betting-wrapper">\n    ';
$each(otherList,function(value,index){
$out+='\n        ';
if(value[4].length){
$out+='\n        ';
$each(value,function(item,$index){
$out+='\n            ';
if(item > 0){
$out+='\n            <div class="jb-item " data-num="';
$out+=$escape(value[4]);
$out+='"></div>\n            ';
}
$out+='\n        ';
});
$out+='\n        ';
}
$out+='\n    ';
});
$out+='\n</div>\n\n<div class="betting-wrapper">\n    ';
$each(otherList,function(value,index){
$out+='\n        ';
if(value[5].length){
$out+='\n        ';
$each(value,function(item,$index){
$out+='\n            ';
if(item > 0){
$out+='\n            <div class="jb-item " data-num="';
$out+=$escape(value[5]);
$out+='"></div>\n            ';
}
$out+='\n        ';
});
$out+='\n        ';
}
$out+='\n    ';
});
$out+='\n</div>\n<!--下注的情况-->\n<div class="betting-wrapper">\n    ';
if(myList[1].length){
$out+='\n    ';
$each(myList[1],function(value,$index){
$out+='\n        <div class="jb-item" data-num="';
$out+=$escape(value);
$out+='"></div>\n    ';
});
$out+='\n    ';
}
$out+='\n</div>\n<div class="betting-wrapper">\n    ';
if(myList[2].length){
$out+='\n    ';
$each(myList[2],function(value,$index){
$out+='\n        <div class="jb-item" data-num="';
$out+=$escape(value);
$out+='"></div>\n    ';
});
$out+='\n    ';
}
$out+='\n</div>\n<div class="betting-wrapper">\n    ';
if(myList[3].length){
$out+='\n    ';
$each(myList[3],function(value,$index){
$out+='\n        <div class="jb-item" data-num="';
$out+=$escape(value);
$out+='"></div>\n    ';
});
$out+='\n    ';
}
$out+='\n</div>\n<div class="betting-wrapper">\n    ';
if(myList[4].length){
$out+='\n    ';
$each(myList[4],function(value,$index){
$out+='\n        <div class="jb-item" data-num="';
$out+=$escape(value);
$out+='"></div>\n    ';
});
$out+='\n    ';
}
$out+='\n</div>\n<div class="betting-wrapper">\n    ';
if(myList[5].length){
$out+='\n    ';
$each(myList[5],function(value,$index){
$out+='\n        <div class="jb-item" data-num="';
$out+=$escape(value);
$out+='"></div>\n    ';
});
$out+='\n    ';
}
$out+='\n</div>';
return new String($out);
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

var template = __webpack_require__(0)

module.exports = function($data,$filename
/**/) {
'use strict';var $utils=template.utils,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,value=$data.value,$index=$data.$index,$escape=$utils.$escape,totalNum=$data.totalNum,$out='';$each(list,function(value,$index){
$out+='\n<p>\n    ';
if(value.type == 1){
$out+='\n    压庄：\n    ';
}else if(value.type == 2){
$out+='\n    压闲：\n    ';
}else if(value.type == 3){
$out+='\n    压庄对：\n    ';
}else if(value.type == 4){
$out+='\n    压和：\n    ';
}else if(value.type == 5){
$out+='\n    压闲对：\n    ';
}
$out+='\n    ';
$out+=$escape(value.value);
$out+='金币\n</p>\n';
});
$out+='\n<p class="tr">合计<span class="yellow">';
$out+=$escape(totalNum);
$out+='</span>金币</p>';
return new String($out);
}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var template = __webpack_require__(0)

module.exports = function($data,$filename
/**/) {
'use strict';var $utils=template.utils,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,value=$data.value,index=$data.index,$escape=$utils.$escape,$out='';$out+=' ';
$each(list,function(value,index){
$out+='\n ';
if(value.winGold > 0){
$out+='\n ';
if(index == 0){
$out+='\n <div class="coin-3">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n</div>\n ';
}else if(index <3){
$out+='\n <div class="coin-';
$out+=$escape(index);
$out+='">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n</div>\n';
}else{
$out+='\n<div class="coin-';
$out+=$escape(index +1);
$out+='">\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n    <span></span>\n</div>\n';
}
$out+='\n';
}
$out+='\n';
});
$out+='\n';
return new String($out);
}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var template = __webpack_require__(0)

module.exports = function($data,$filename
/**/) {
'use strict';var $utils=template.utils,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,value=$data.value,index=$data.index,$escape=$utils.$escape,$out='';$each(list,function(value,index){
$out+='\n<li>\n    <span class="fl">';
$out+=$escape(value.id);
$out+='期</span>\n    <span class="fl">庄 <i>';
$out+=$escape(value.zhuan);
$out+='</i> </span>\n    <span class="fl">闲 <i>';
$out+=$escape(value.xian);
$out+='</i></span>\n</li>\n';
});
return new String($out);
}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var template = __webpack_require__(0)

module.exports = function($data,$filename
/**/) {
'use strict';var $utils=template.utils,$helpers=$utils.$helpers,list=$data.list,$each=$utils.$each,value=$data.value,index=$data.index,$escape=$utils.$escape,item=$data.item,xindex=$data.xindex,$out='';if(list.length == 0){
$out+='\n<p class="no-record">没有任何下注记录哦！</p> \n';
}
$out+='\n';
$each(list,function(value,index){
$out+='\n<li>\n    <div>';
$out+=$escape(value.issue);
$out+='期 <span class="fr">';
$out+=$escape(value.time);
$out+='</span> </div>\n    <div>\n        ';
$each(value.payList,function(item,xindex){
$out+='\n        ';
if(item > 0){
$out+='\n            <p>\n                ';
if(xindex == 1){
$out+='\n                压庄：\n                ';
}else if(xindex == 2){
$out+='\n                压闲：\n                ';
}else if(xindex == 3){
$out+='\n                压庄对：\n                ';
}else if(xindex == 4){
$out+='\n                压和：\n                ';
}else if(xindex == 5){
$out+='\n                压闲对：                 \n                ';
}
$out+='\n                ';
$out+=$escape(item);
$out+='金币\n            </p>\n        ';
}
$out+='\n        ';
});
$out+='\n    </div>\n    <div>开奖 ：\n        庄：';
$out+=$escape(value.zhuan);
$out+=' &nbsp;&nbsp;\n        闲: ';
$out+=$escape(value.xian);
$out+='\n        ';
if(value.winGold >0 ){
$out+='\n        <span class="fr lotted">中';
$out+=$escape(value.winGold);
$out+='钻石</span>\n         ';
}else{
$out+=' \n        <span class="fr not">未中奖</span>         \n          ';
}
$out+='\n    </div>\n</li>\n';
});
return new String($out);
}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var template = __webpack_require__(0)

module.exports = function($data,$filename
/**/) {
'use strict';var $utils=template.utils,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,value=$data.value,$index=$data.$index,$escape=$utils.$escape,$out='';$each(list,function(value,$index){
$out+='\n<div class="js-pork-item pork-item">\n    <span class="face ';
$out+=$escape(value.type);
$out+='-';
$out+=$escape(value.value);
$out+=' flip out"></span>\n    <span class="back flip in"></span>\n</div>\n';
});
return new String($out);
}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var template = __webpack_require__(0)

module.exports = function($data,$filename
/**/) {
'use strict';var $utils=template.utils,$helpers=$utils.$helpers,$each=$utils.$each,list=$data.list,value=$data.value,index=$data.index,$escape=$utils.$escape,$out='';$each(list,function(value,index){
$out+='\n<div class="js-user-item">\n    <p><img src="';
$out+=$escape(value.avatar);
$out+='" /></p>\n    ';
if(index != 2){
$out+='\n    <p>';
$out+=$escape(value.nickname);
$out+='</p>\n    ';
}
$out+='\n    <span ></span>\n</div>\n';
});
return new String($out);
}

/***/ },
/* 8 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Coin(opts) {
    //默认参数
    this.defaults = {
        coinSrc: "/sb/images/zs.png", //金币图片地址
        // audioSrc: "http://download.taobaocdn.com/freedom/26370/media/shake.mp3", //金币音频地址
        coinWidth: 20, //金币宽度
        coinHeight: 20, //金币高度
        density: 30
    };
    this.settings = this._extendDeep(this.defaults, opts); //深拷贝
    this.density = this.settings.density; //密度，即金币个数
    this.timeLag = 1000; //金币散落的事件间隔，数字越大表示间隔越大
    this.coinWidth = this.settings.coinWidth; //金币宽度
    this.coinHeight = this.settings.coinHeight; //金币高度
    this.wrapWidth = 0;
    this.wrapHeight = 0;
    this._init();
}
Coin.prototype = {
    constructor: Coin,
    /**
     * 动画初始化方法
     * @method _init
     **/
    _init: function _init() {
        //初始化包括尺寸大小
        this.wrapWidth = document.documentElement.clientWidth;
        this.wrapHeight = document.documentElement.clientHeight;
        this._requestAnimationFrame();
        this._createCanvas();
        // this._createAudio();
    },
    /**
     * 对象深拷贝方法
     * @method _extendDeep
     * @param  {object} parent 父对象
    		   {object} child  子对象
       @return {object} child  父对象继承给子对象
    **/
    _extendDeep: function _extendDeep(child, parent) {
        var i,
            toStr = Object.prototype.toString,
            astr = "[object Array]";
        child = child || {};
        for (i in parent) {
            if (parent.hasOwnProperty(i)) {
                if (_typeof(parent[i]) === "object") {
                    child[i] = toStr.call(parent[i]) === astr ? [] : {};
                    extendDeep(parent[i], child[i]);
                } else {
                    child[i] = parent[i];
                }
            }
        }
        return child;
    },
    /**
     * requestAnimationFrame做兼容
     * @method _requestAnimationFrame
     **/
    _requestAnimationFrame: function _requestAnimationFrame() {
        var lastTime = 0;
        var vendors = ['webkit', 'moz'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // name has changed in Webkit
            window[vendors[x] + 'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                var id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function (id) {
                clearTimeout(id);
            };
        }
    },
    /**
     * 创建canvas画布
     * @method _createCanvas
     **/
    _createCanvas: function _createCanvas() {
        var _self = this;
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute("data-id", Date.now());
        if (!this.canvas.getContext) {
            alert("您的浏览器不支持canvas");
            return;
        }
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.wrapWidth;
        this.canvas.height = this.wrapHeight;
        this.canvas.className = 'coin-canvas';
        var oBody = document.getElementsByTagName('body')[0];
        oBody.appendChild(this.canvas);
        this._createCacheCanvas();
    },
    _createCacheCanvas: function _createCacheCanvas() {
        var _self = this;
        this.cacheCanvas = document.createElement('canvas');
        this.cacheContext = this.cacheCanvas.getContext('2d');
        this.cacheCanvas.width = this.wrapWidth;
        this.cacheCanvas.height = this.wrapHeight;
        this.coinImg = new Image();
        this.coinImg.src = this.settings.coinSrc;
        this.coinImg.onload = function () {
            _self._startCacheCanvasAnim();
        };
    },
    /**
     * 执行金币绘制动画
     * @method _startCanvasAnim
     **/
    _startCacheCanvasAnim: function _startCacheCanvasAnim() {
        var _self = this;
        var availWidth = this.cacheCanvas.width - this.coinWidth;
        var availHeight = this.cacheCanvas.height - this.coinHeight;
        //var disX=availWidth/this.density;  //每个硬币X轴的间距
        var coinRange = availWidth * this.density / (this.density + 15);
        var rangeStart = (availWidth - coinRange) / 2;
        var g = 9.8 * 280; //重力加速度
        var bPlayAudio = false;
        var coinAttrArr = []; //存储金币下落过程中的一些属性参数
        for (var i = 0; i < _self.density; i++) {
            coinAttrArr[i] = {
                rndX: Math.random(), //存储金币开始降落x轴随机值
                rndOrder: Math.round(Math.random() * _self.timeLag / 17), //存储金币撒落顺序的一个数组
                time: 0, //存储金币绘制的具体时间
                top: 0, //存储金币绘制距离顶部的距离
                left: 0, //存储金币弹起后距离左边的距离
                endSpeed: 0, //存储金币第一次接触地面的速度
                bEnd: false, //存储金币是否触碰到地面
                reDownSpeed: 0, //存储金币弹起后重新降落的速度
                reDownHDelta: Math.random() * 100 + 250, //存储金币弹起的高度参数，随机值250~350之间
                rndOffsetX: Math.random() * 0.06 + 0.97 //存储金币x轴的偏移量，随机值0.97~1.03之间
            };
        }
        var startTime = Date.now(); //开始绘制前的时间
        function draw() {
            var drawStart = Date.now(); //记录重绘的结束事件
            var diff = (drawStart - startTime) / 1000; //计算每次重绘所需要的事件，单位为秒
            startTime = drawStart; //结束事件传给开始事件
            _self.context.clearRect(0, 0, _self.canvas.width, _self.canvas.height); //清除画布，方便重绘
            _self.cacheContext.clearRect(0, 0, _self.cacheCanvas.width, _self.cacheCanvas.height); //清除画布，方便重绘
            _self.cacheContext.save();
            //根据金币个数循环绘制金币
            for (var i = 0; i < _self.density; i++) {
                if (coinAttrArr[i].rndOrder == 0 && coinAttrArr[i].time == 0) {
                    //如果顺序为0，表示开始下落，同时下落的初始时间为0时，赋值初始时间
                    coinAttrArr[i].time = diff;
                }
                if (coinAttrArr[i].time > 0) {
                    //如果初始事件大于0，表示已经在下落过程中,则每次的初始时间递增
                    coinAttrArr[i].time = coinAttrArr[i].time + diff;
                }
                if (coinAttrArr[i].rndOrder == 0) {
                    //如果顺序为0，开始下落，则开始绘制金币
                    if (!coinAttrArr[i].bEnd) {
                        //金币下落（过程一），自由落体运动
                        coinAttrArr[i].top = g * Math.pow(coinAttrArr[i].time, 2) / 2 - _self.coinHeight; //自由落体加速度运动，求下落的高度
                        //coinAttrArr[i].left=disX*coinAttrArr[i].rndX+i*disX;
                        coinAttrArr[i].left = coinRange * coinAttrArr[i].rndX + rangeStart;
                    } else if (coinAttrArr[i].endSpeed == 0) {
                        //金币弹起后在空中重新下落（过程三）
                        coinAttrArr[i].reDownSpeed = coinAttrArr[i].reDownSpeed * 1.1;
                        coinAttrArr[i].top = coinAttrArr[i].top + coinAttrArr[i].reDownSpeed;
                        coinAttrArr[i].left = coinAttrArr[i].left * coinAttrArr[i].rndOffsetX;
                    } else {
                        //金币弹起（过程二）
                        coinAttrArr[i].endSpeed = -Math.abs(coinAttrArr[i].endSpeed * 0.96);
                        if (Math.abs(coinAttrArr[i].endSpeed) < 1) coinAttrArr[i].endSpeed = 0;
                        coinAttrArr[i].top = coinAttrArr[i].top + coinAttrArr[i].endSpeed;
                        coinAttrArr[i].left = coinAttrArr[i].left * coinAttrArr[i].rndOffsetX;
                    }
                    //金币第一次降落超过地面时，将其高度设置和地面齐平
                    if (coinAttrArr[i].top > _self.cacheCanvas.height - _self.coinHeight && !coinAttrArr[i].bEnd) {
                        coinAttrArr[i].top = _self.cacheCanvas.height - _self.coinHeight;
                    }
                    //金币落地时，计算落地的速度
                    if (coinAttrArr[i].top == _self.cacheCanvas.height - _self.coinHeight) {
                        coinAttrArr[i].endSpeed = g * coinAttrArr[i].time / coinAttrArr[i].reDownHDelta;
                        coinAttrArr[i].reDownSpeed = coinAttrArr[i].endSpeed / 10;
                        coinAttrArr[i].bEnd = true;
                    }
                    //绘制金币
                    _self.cacheContext.drawImage(_self.coinImg, coinAttrArr[i].left, coinAttrArr[i].top, _self.coinWidth, _self.coinHeight);
                }
                coinAttrArr[i].rndOrder = coinAttrArr[i].rndOrder == 0 ? 0 : coinAttrArr[i].rndOrder - 1; //顺序每一次重绘则递减一次，直到为0时，代表开始下落
            }
            _self.cacheContext.restore();
            _self.context.drawImage(_self.cacheCanvas, 0, 0, _self.canvas.width, _self.canvas.height);
            var firstH = _self._maxNum(coinAttrArr, "top"); //求降落过程中高度最大的金币高度
            if (firstH >= _self.cacheCanvas.height - _self.coinHeight && !bPlayAudio) {
                _self._playAudio();
                bPlayAudio = true;
            }
            var lastH = _self._minNum(coinAttrArr, "top"); //求降落过程中高度最小的金币高度
            if (lastH <= _self.cacheCanvas.height + _self.coinHeight) {
                //最后一个金币高度超出canvas的高度停止重绘
                window.requestAnimationFrame(draw); //重绘，递回调用绘制方法
            } else {
                console.log("金币都撒完了");
                _self._destory();
            }
        }
        window.requestAnimationFrame(draw); //第一次绘制
    },
    /**
     * 求最小值
     * @method _minNum
     * @param   {arr}    arr  属性数组
    			{string} attr 数组下的属性名称
     * @return  {number}      返回数组下属性值最小的值
    **/
    _minNum: function _minNum(arr, attr) {
        var tempArr = [];
        for (var i = 0; i < arr.length; i++) {
            tempArr.push(arr[i][attr]);
        }
        return tempArr.sort(function (a, b) {
            return a - b;
        })[0];
    },
    /**
     * 求最大值
     * @method _minNum
     * @param   {arr}    arr  属性数组
    			{string} attr 数组下的属性名称
     * @return  {number}      返回数组下属性值最大的值
    **/
    _maxNum: function _maxNum(arr, attr) {
        var tempArr = [];
        for (var i = 0; i < arr.length; i++) {
            tempArr.push(arr[i][attr]);
        }
        return tempArr.sort(function (a, b) {
            return b - a;
        })[0];
    },
    /**
     * 创建音频对象
     * @method _createAudio
     **/
    _createAudio: function _createAudio() {
        this.audio = document.createElement('audio');
        this.audio.setAttribute("preload", "load");
        var oSource = document.createElement('source');
        oSource.setAttribute("src", this.settings.audioSrc);
        oSource.setAttribute("type", "audio/mp3");
        this.audio.appendChild(oSource);
        var oBody = document.getElementsByTagName('body')[0];
        oBody.appendChild(this.audio);
    },
    /**
     * 播放音频
     * @method _playAudio
     **/
    _playAudio: function _playAudio() {
        // this.audio.play();
    },
    /**
     * 销毁canvas和audio
     * @method _destory
     **/
    _destory: function _destory() {
        var oBody = document.getElementsByTagName('body')[0];
        oBody.removeChild(this.canvas);
        // oBody.removeChild(this.audio);
    }
};

exports.default = Coin;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(18);

var elemLoading = $('#js-loading-block');
var o = {
    show: function show(str) {
        elemLoading.find('p').html(str || '加载中...');
        elemLoading.show();
    },
    hide: function hide() {
        elemLoading.hide();
    }
};

exports.default = o;

/***/ },
/* 10 */
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var soundID = "bgMusic";
var soundID2 = "kaijianMusic";

function loadMisc() {
    createjs.Sound.registerSound("/bjl/misc/bgmusic1.mp3", soundID);
    createjs.Sound.registerSound("/bjl/misc/kaijiang.wav", soundID2);
    createjs.WebAudioPlugin.playEmptySound();
    window.musicReady = false;
    createjs.Sound.on("fileload", function () {
        // console.log();
        // window.musicReady = true;
        createjs.Sound.play(soundID, {
            loop: -1,
            volume: 0.5
        });

        // createjs.Sound.play(soundID2, {
        //     loop: -1
        //     // volume: 0
        // });
    }, this);
}
if (typeof wx != 'undefined') {
    wx.ready(function () {
        loadMisc();
    });
} else {
    loadMisc();
}

var o = {
    playBg: function playBg() {
        // console.log();
        createjs.Sound.play(soundID, {
            loop: -1,
            volume: 0.5
        });
        // bgMusic.on("complete", this.handleComplete, this);
    },
    stopBg: function stopBg() {
        createjs.Sound.stop();
    },
    playTou: function playTou() {
        createjs.Sound.play(soundID2, {
            // loop: -1
            volume: 1
        });
    }
};

exports.default = o;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Toast;

__webpack_require__(19);

var toastTimer = null;

function Toast(str, callback, time) {
    var elemToast = $('#js-page-toast');
    elemToast.html(str).addClass('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
        elemToast.html('').removeClass('show');
        callback && callback();
    }, time || 2000);
}

/***/ },
/* 12 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

__webpack_require__(12);

var _music = __webpack_require__(10);

var _music2 = _interopRequireDefault(_music);

var _loading = __webpack_require__(9);

var _loading2 = _interopRequireDefault(_loading);

var _toast = __webpack_require__(11);

var _toast2 = _interopRequireDefault(_toast);

var _coin = __webpack_require__(8);

var _coin2 = _interopRequireDefault(_coin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userTpl = __webpack_require__(7); // import {isArray} from 'lodash';

var bettingTpl = __webpack_require__(1);
var porkTpl = __webpack_require__(6);
var coinTpl = __webpack_require__(3);
var dialogTpl = __webpack_require__(2);
var historyTpl = __webpack_require__(4);
var myHistoryTpl = __webpack_require__(5);
// console.log(music);
FastClick.attach(document.body);
/**
 * 报错问题
 */
$.ajaxSettings = $.extend($.ajaxSettings, {
    error: function error() {
        (0, _toast2.default)('网络不给力~', function () {}, 5000);
        // loading.hide();

        setTimeout(function () {
            // location.reload();
        }, 2000);
    }
});

function App(opts) {
    var defaults = {};
    if (!(this instanceof App)) {
        return new App(opts);
    }
    this.config = $.extend(defaults, opts);
    this.myJb = 0; // 我的金币
    this.myJbOld = 0;
    this.myZs = 0; // 我的钻石
    this.issue = 0; //期号
    this.countTime = 0; // 倒计时
    this.countTimer = null; // 倒计时定时器
    this.isOpening = false; // 是否在开奖
    this.userList = []; //用户列表
    this.otherBetting = {}; //其他用户的下注
    this.myBetting = {}; // 用户自己的下注
    this.thisTimeBetting = 10; //下注金额 每次
    this.currentBetting = {};
    this.oldBettingHtml = '';
    this.currentIssueWinGold = []; // 当前赢钱数量
    this.robotsID = []; // 机器人id
    this.winner = null;
    this.init();
}

App.prototype.init = function () {
    var self = this;
    this.getCurrentInfo();
    this.loadImg();
    this.eventInit();

    setInterval(function () {
        self.diffGetInfo();
    }, 5000);
};

App.prototype.eventInit = function () {
    var self = this;
    // var elemBettingMain = $('#js-betting-main');
    // $(window).on('focus', function () {
    //     location.reload(true);
    // });
    $('.js-pork-item').on('click', function () {
        var elemThis = $(this);
        elemThis.find('.back').addClass("out").removeClass("in");
        setTimeout(function () {
            elemThis.find('.face').addClass("in").removeClass("out");
        }, 225);
    });
    // 关闭/开启 背景音乐
    $('.js-close-bg').on('click', function (e) {
        e.preventDefault();
        var elemThis = $(this);
        if (elemThis.hasClass('close')) {
            elemThis.removeClass('close');
            _music2.default.playBg();
        } else {
            elemThis.addClass('close');
            _music2.default.stopBg();
        }
    });
    // 下注
    $('#js-betting-main').on('click', 'div', function () {
        var index = $(this).index();
        if (self.myJb - self.thisTimeBetting < 0) {
            $('.js-dialog-charge').show();
            return;
        }
        if (self.isOpening) {
            return;
        }
        if (self.currentBetting[index + 1]) {
            self.currentBetting[index + 1] += self.thisTimeBetting;
        } else {
            self.currentBetting[index + 1] = self.thisTimeBetting;
        }
        self.myJb -= self.thisTimeBetting;
        $('.js-xyb').html(self.myJb);
        var elem = $('<div class="jb-item active" data-num="' + self.thisTimeBetting + '"></div>').appendTo($('.betting-all-wrapper').find('.betting-wrapper').eq(index + 5));
        setTimeout(function () {
            elem.removeClass('active');
        }, 100);
        $('.js-butn-betting').removeClass('gray');
    });
    //确定按钮
    $('.js-butn-betting').on('click', function () {
        var tmpArray = [];
        var totalNum = 0;
        if ($(this).hasClass('gray') || self.isOpening) {
            return;
        }
        $.each(self.currentBetting, function (key, v) {
            tmpArray.push({
                type: parseInt(key),
                value: v
            });
            totalNum += v;
        });
        $('.js-dialog-confirm').show().find('.js-betting-all').html(dialogTpl({
            list: tmpArray,
            totalNum: totalNum
        }));
    });
    //不下注
    $('.js-dialog-cancel').on('click', function (e) {
        e.preventDefault();
        $('.dialog-confirm').hide();
    });
    // 确定下注
    $('.js-dialog-ok').on('click', function (e) {
        e.preventDefault();

        self.ajaxBetting($(this));
    });
    //选择下注金额
    $('.js-butn-select').on('click', 'a', function () {
        self.thisTimeBetting = $(this).data('num');
        $(this).addClass('active').siblings().removeClass('active');
    });

    // 清除按钮
    $('.js-butn-cancel').on('click', function () {
        if ($('.js-butn-betting').hasClass('gray')) {
            return;
        }
        $('.js-xyb').html(self.myJbOld);
        $('.betting-all-wrapper').html(self.oldBettingHtml);
        // self.renderBetting(self.oldBetting);
    });
    // 往期开奖
    $('.js-butn-history').on('click', function () {
        self.getHistory();
    });
    // 关闭弹窗
    $('.js-butn-close').on('click', function () {
        $(this).parents('.dialog-default').hide();
    });
    // 我的历史
    $('.js-butn-my').on('click', function () {
        self.getMyHistory();
    });
};
/**
 * 图片资源加载
 */
App.prototype.loadImg = function () {
    var imgs = $('#js-img-all').find('img');
    var index = 0;
    // var self = this;
    // console.log();
    // loading.show('加载中...');
    imgs.each(function () {
        var img = new Image();
        img.src = $(this).attr('src');

        img.onload = function () {
            index += 1;
            // console.log(index);
            $('.js-process').css('width', index / imgs.length * 90 + '%');
            if (index >= imgs.length) {
                // self.imgLoadedAll = true;
                // if (self.isGettedUserInfo) {

                // }
                setTimeout(function () {
                    $('.js-process').css('width', '100%');
                    setTimeout(function () {
                        $('.game-loading').hide();
                        $('.game-main').show();
                    }, 400);
                }, 1600);
            }
        };
    });
};
/**
 * 获取本期 信息
 */
App.prototype.getCurrentInfo = function () {
    var self = this;
    _loading2.default.show('加载中...');
    $.ajax({
        type: 'get',
        url: '/api/bjl/getRunningIssue',
        dataType: 'json',
        data: {
            _token: window._token
        },
        success: function success(res) {
            _loading2.default.hide();

            // elem.removeClass('disabled');
            if (res.code == 0) {
                var userInfo = res.data.userPayInfo[0];
                self.myJbOld = self.myJb = Math.ceil(Number(userInfo.JB));
                self.myZs = Math.ceil(Number(userInfo.ZS));
                self.countTime = res.data.openAfter < 3 ? 3 : res.data.openAfter;
                self.issue = res.data.currentIssueId;

                $('.js-zs').html(self.myZs);
                $('.js-xyb').html(self.myJb);
                $('.js-nick').html(userInfo.nickname);
                $('.js-avatar').attr('src', userInfo.avatar);
                $('.js-issue').html(self.issue);
                self.countFn();
                self.renderUser(res.data.userPayInfo);
                self.renderBetting(res.data.userPayInfo);
                self.otherListOrders(res.data.userPayInfo);
            } else {
                _loading2.default.hide();
                (0, _toast2.default)(res.msg);
            }
        }
    });
};
/**
 * 每隔5s 请求一次 对比数据
 */
App.prototype.diffGetInfo = function () {
    var self = this;
    if (self.isOpening) {
        return;
    }
    $.ajax({
        type: 'get',
        url: '/api/bjl/getRunningIssue',
        dataType: 'json',
        data: {
            _token: window._token
        },
        success: function success(res) {

            if (res.code == 0) {
                self.diffOtherListOrders(res.data.userPayInfo);
                self.otherListOrders(res.data.userPayInfo);
            }
        }
    });
};
/**
 * 记录其他用户下注情况
 */
App.prototype.otherListOrders = function (list) {
    if (list.length > 0) {
        for (var i = 1; i < 5; i++) {
            this.otherBetting[list[i].userId] = list[i].paySumInfo;
        }
    }
};
/**
 * 对比两次数据的不同
 */
App.prototype.diffOtherListOrders = function (list) {
    var self = this;
    if (list.length > 0) {
        for (var i = 1; i < 5; i++) {
            // otherBetting[list[i].userId] = list[i].paySumInfo;
            if (this.otherBetting[list[i].userId]) {
                var tmp = this.otherBetting[list[i].userId];
                var index = 1;
                if (index < 3) {
                    index = i - 1;
                } else {
                    index = i;
                }
                $.each(list[i].paySumInfo, function (key, value) {
                    if (value > tmp[key]) {
                        var tmpArray = self.calculateNum(value);
                        var html = '';
                        tmpArray.forEach(function (v) {
                            html += '\n                                <div class="jb-item active-' + index + '" data-num="' + v + '"></div>\n                            ';
                        });
                        $(html).appendTo($('.betting-wrapper').eq(parseInt(key) - 1));
                        setTimeout(function () {
                            $('.betting-wrapper').eq(parseInt(key) - 1).find('.jb-item').removeClass('active-' + index);
                        }, 0);
                    }
                });
            }
        }
    }
};
/**
 * 渲染用户列表
 */
App.prototype.renderUser = function (list) {
    var self = this;
    self.userList[2] = list[0];
    for (var i = 1; i < 5; i++) {
        if (i < 3) {
            self.userList[i - 1] = list[i];
        } else {
            self.userList[i] = list[i];
        }
    }
    $('.js-user-list').html(userTpl({
        list: list
    }));
};
/**
 * 渲染用户下注情况
 */
App.prototype.renderBetting = function (list) {
    var self = this;
    var otherList = [];
    var myList = {};
    var key;

    if (list && list.length > 0) {
        for (var i = 1; i < 5; i++) {
            var tmp = {};
            for (key in list[i].paySumInfo) {
                tmp[key] = self.calculateNum(list[i].paySumInfo[key]);
            }
            self.robotsID.push(list[i].userId);
            otherList.push(tmp);
        }

        for (key in list[0].paySumInfo) {
            myList[key] = self.calculateNum(list[0].paySumInfo[key]);
        }
        self.oldBettingHtml = bettingTpl({
            otherList: otherList,
            myList: myList
        });
    } else {
        self.oldBettingHtml = '\n            <div class="betting-wrapper"></div>\n            <div class="betting-wrapper"></div>\n            <div class="betting-wrapper"></div>\n            <div class="betting-wrapper"></div>\n            <div class="betting-wrapper"></div>\n\n            <div class="betting-wrapper"></div>\n            <div class="betting-wrapper"></div>\n            <div class="betting-wrapper"></div>\n            <div class="betting-wrapper"></div>\n            <div class="betting-wrapper"></div>\n        ';
    }

    $('.betting-all-wrapper').html(self.oldBettingHtml);
};
/**
 * 计算 值
 */
App.prototype.calculateNum = function (num) {
    var nowNum = parseInt(num, 10);
    var tmp = [];
    while (nowNum >= 10) {
        if (nowNum - 1000 >= 0) {
            tmp.push(1000);
            nowNum -= 1000;
        } else if (nowNum - 100 >= 0) {
            tmp.push(100);
            nowNum -= 100;
        } else if (nowNum - 50 >= 0) {
            tmp.push(50);
            nowNum -= 50;
        } else if (nowNum - 10 >= 0) {
            tmp.push(10);
            nowNum -= 10;
        }
    }
    return tmp;
};
/**
 *  定时器
 */
App.prototype.countFn = function () {
    var self = this;
    console.log('重新开始计时');
    self.renderCount();
    this.countTimer = setInterval(function () {
        self.countTime -= 1;
        if (self.countTime < 0) {
            self.countTime = 0;
        }
        self.renderCount();
    }, 1000);
};
/**
 * 倒计时
 */
App.prototype.renderCount = function () {
    var self = this;

    $('.js-count-time').html(self.countTime);
    if (self.countTime <= 5 && !self.isOpening) {
        self.isOpening = true;
        $('.js-dialog-confirm').hide();
        $('.js-butn-betting').addClass('gray');
        _loading2.default.show('正在封盘...');
        // console.log('正在开票');
        // self.rendBetting(self.oldBetting);
        self.renderBetting(self.oldBetting);
        self.getOpenResult();
    }
    if (self.countTime <= 0) {
        clearInterval(self.countTimer);
        setTimeout(function () {
            // self.openTouzi();
        }, 300);
    }
};
/**
 * 下注
 */
App.prototype.ajaxBetting = function (elem) {
    var self = this;
    if (elem.hasClass('disabled') || self.isOpening) {
        return;
    }
    elem.addClass('disabled');
    _loading2.default.show();

    $.ajax({
        type: 'post',
        url: '/api/bjl/doPay',
        data: {
            payList: self.currentBetting,
            issue: self.issue,
            _token: window._token
        },
        dataType: 'json',
        success: function success(res) {
            elem.removeClass('disabled');
            _loading2.default.hide();
            $('.js-dialog-confirm').hide();
            $('.js-butn-betting').addClass('gray');
            // self.oldBetting = res.data.paySumInfo;
            if (res.code == 0) {
                // 下注成功
                self.currentBetting = {};
                self.oldBettingHtml = $('.betting-all-wrapper').html();
            } else {
                (0, _toast2.default)(res.msg);
                // self.rendBetting(self.oldBetting);
                $('.betting-all-wrapper').html(self.oldBettingHtml);
            }
            if (res.data.JB) {
                self.myJbOld = self.myJB = Math.ceil(Number(res.data.JB));
                self.myZs = Math.ceil(Number(res.data.ZS));
                $('.js-xyb').html(self.myJB);
                $('.js-zs').html(self.myZs);
            }
            // console.log(self.currentBetting);
        },
        error: function error() {
            _loading2.default.hide();
            elem.removeClass('disabled');
            (0, _toast2.default)('网络不给力~', function () {}, 3000);
        }
    });
};

/**
 * 开奖结果
 */
App.prototype.getOpenResult = function () {
    var self = this;
    $.ajax({
        type: 'post',
        url: '/api/bjl/getIssueOpenResult',
        dataType: 'json',
        data: {
            _token: window._token,
            issue: self.issue,
            robotsID: self.robotsID
        },
        success: function success(res) {
            // elem.removeClass('disabled');
            if (res.code == 0) {
                self.issue = res.data.currentIssueId;
                // self.currentIssueWinGold = res.data.winGold;
                self.countTime = res.data.openAfter;
                self.myJB = Math.ceil(res.data.JB);
                self.myZs = Math.ceil(res.data.ZS);
                self.currentIssueWinGold = res.data.winner;
                self.renderResult(res.data.winType);
                self.winner = res.data.winner;
                self.countFn();
                $('.js-issue').html(self.issue);
            } else {
                // loading.hide();
                // Toast(res.msg);
                setTimeout(function () {
                    self.getOpenResult();
                }, 1000);
            }
        }
    });
};
/**
 * 出牌结果
 */
App.prototype.renderResult = function (winType) {
    var self = this;
    var tmpWin1 = [];
    var tmpWin2 = [];
    var openIndex = 0;
    winType.split(',').forEach(function (v, index) {
        var tmp = {};
        tmp.value = Math.ceil(parseInt(v) / 4);
        switch (parseInt(v) % 4) {
            case 1:
                tmp.type = 'fang';
                break;
            case 2:
                tmp.type = 'mei';
                break;
            case 3:
                tmp.type = 'hong';
                break;
            default:
                tmp.type = 'hei';
        }
        if (index < 3) {
            tmpWin1.push(tmp);
        } else {
            tmpWin2.push(tmp);
        }
    });
    _loading2.default.hide();
    // console.log(tmpWin);
    $('.js-open-main').eq(0).html(porkTpl({
        list: tmpWin1
    }));
    $('.js-open-main').eq(1).html(porkTpl({
        list: tmpWin2
    }));
    $('.js-pork-item').each(function (index) {
        var elemThis = $(this);
        var time = [1, 3, 5, 2, 4, 6];
        setTimeout(function () {
            elemThis.find('.back').addClass("out").removeClass("in");
            setTimeout(function () {
                openIndex += 1;
                elemThis.find('.face').addClass("in").removeClass("out");
                if (openIndex > 5) {
                    self.allOpen();
                }
            }, 225);
        }, 1000 * time[index]);
    });
};

/**
 *  开牌完成后的 执行下一轮
 */
App.prototype.allOpen = function () {
    var self = this;
    // if (this.winner[0] && this.winner[0].winGold > 0){
    //     console.log('中奖了');
    // }

    this.winner.forEach(function (v, index) {
        // console.log(v, index);
        if (index == 0 && v.winGold > 0) {
            $('.js-dialog-lotteryed').show().find('p').html(v.winGold);
            setTimeout(function () {
                $('.js-dialog-lotteryed').hide().find('p').html('-');
            }, 3000);
            new _coin2.default({
                density: parseInt(v.winGold / 4)
            });
            setTimeout(function () {
                $('.js-user-item').eq(2).find('span').addClass('active').html(v.winGold);
            }, 800);
        } else if (index < 3 && v.winGold > 0) {
            setTimeout(function () {
                $('.js-user-item').eq(index - 1).find('span').addClass('active').html(v.winGold);
            }, 800);
        } else if (index >= 3 && v.winGold > 0) {
            setTimeout(function () {
                $('.js-user-item').eq(index).find('span').addClass('active').html(v.winGold);
            }, 800);
        }
    });
    $('.js-coin-wrapper').html(coinTpl({
        list: this.winner
    }));
    /**
     * 3s 后清除 发奖的数据
     */
    setTimeout(function () {
        self.reInitData();

        $('.js-user-item').find('span').removeClass('active').html('');
        $('.js-coin-wrapper').html('');
    }, 2000);
};
/**
 * 重新初始化数据
 */
App.prototype.reInitData = function () {
    this.isOpening = false; // 是否在开奖
    this.otherBetting = {}; //其他用户的下注
    this.myBetting = {}; // 用户自己的下注
    this.currentBetting = {};
    this.oldBettingHtml = '';
    this.currentIssueWinGold = []; // 当前赢钱数量
    this.winner = null;
};
/**
 * 往期开奖
 */
App.prototype.getHistory = function () {
    var self = this;
    var elem = $('.js-butn-history');
    if (elem.hasClass('disabled')) {
        return;
    }
    elem.addClass('disabled');
    _loading2.default.show();

    $.ajax({
        type: 'get',
        url: '/api/bjl/getLatestIssueInfo',
        dataType: 'json',
        data: {
            _token: window._token,
            size: 10
        },
        success: function success(res) {
            _loading2.default.hide();
            elem.removeClass('disabled');
            if (res.code == 0) {
                $('.js-dialog-history').show().find('.history-list').html(self.changePork(res.data));
            } else {
                (0, _toast2.default)(res.msg);
            }
        }
    });
};
/**
 * 计算值
 */
App.prototype.changePork = function (list, type) {
    var self = this;
    list.forEach(function (v) {
        var tmpArray = v.winType.split(',');
        v.zhuan = self.calculatePork(tmpArray[0], tmpArray[1], tmpArray[2]);
        v.xian = self.calculatePork(tmpArray[3], tmpArray[4], tmpArray[5]);
    });
    if (type) {
        return myHistoryTpl({
            list: list
        });
    }
    return historyTpl({
        list: list
    });
};
/**
 * 计算 牌面大小
 */
App.prototype.calculatePork = function (num1, num2, num3) {
    var html = '';
    var num = 0;
    num1 = Math.ceil(num1 / 4);
    num2 = Math.ceil(num2 / 4);
    num3 = Math.ceil(num3 / 4);
    if (num1 < 10) {
        num += num1;
    }
    if (num2 < 10) {
        num += num2;
    }
    if (num3 < 10) {
        num += num3;
    }
    html += num % 10 + '点';
    if (num1 == num2 || num1 == num3 || num3 == num2) {
        html += ', 对';
    }
    return html;
};
/**
 * 往期开奖
 */
App.prototype.getMyHistory = function () {
    var self = this;
    var elem = $('.js-butn-my');
    if (elem.hasClass('disabled')) {
        return;
    }
    elem.addClass('disabled');
    _loading2.default.show();

    $.ajax({
        type: 'get',
        url: '/api/bjl/getOrderList',
        dataType: 'json',
        data: {
            _token: window._token,
            size: 10
        },
        success: function success(res) {
            _loading2.default.hide();
            elem.removeClass('disabled');
            if (res.code == 0) {
                $('.js-dialog-my').show().find('.record-list').html(self.changePork(res.data, true));
            } else {
                (0, _toast2.default)(res.msg);
            }
        }
    });
};
App.prototype.changeMyBetting = function (list) {};
App();

/***/ }
/******/ ]);
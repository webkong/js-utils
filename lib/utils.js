!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Utils",[],t):"object"==typeof exports?exports.Utils=t():e.Utils=t()}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){["date"].forEach(function(e){Object.assign(t,n(1)("./"+e+"/"))})},function(e,t,n){var r={"./date/":2};function o(e){var t=u(e);return n(t)}function u(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=u,e.exports=o,o.id=1},function(e,t){function n(e){return e?("number"!=typeof e&&(e=Date.parse(new Date(e).toString())),10===(e=e.toString()).length?e*=1e3:e*=1,e):Date().getTime()}function r(e){return("00"+e).substr(e.length)}t.date={format:function(e,t){t=t||"yyyy-MM-dd",e=n(e);var o=new Date(e);/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(o.getFullYear()+"").substr(4-RegExp.$1.length)));var u={"M+":o.getMonth()+1,"d+":o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds()};for(var i in u){var f=u[i]+"";new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?f:r(f)))}return t},astro:function(e){e=n(e);var t=new Date(e),r=t.getMonth()+1,o=t.getDate();return"魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(2*r-(o<[20,19,21,21,21,22,23,23,23,23,22,22][r-1]?2:0),2)},timestamp:n}}])});
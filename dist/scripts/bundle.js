!function e(t,n,r){function o(u,a){if(!n[u]){if(!t[u]){var f="function"==typeof require&&require;if(!a&&f)return f(u,!0);if(i)return i(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[u]={exports:{}};t[u][0].call(c.exports,function(e){var n=t[u][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("./toggle"),i=r(o);new i["default"](".nav-toggle",{target:"body",modifier:"nav-open"})},{"./toggle":2}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var u=e("./util"),a=r(u),f="toggle",l={modifier:"active"},c={modifier:"string",target:"(string|undefined)"},s={CLICK:"click"},v=function(){function e(t){o(this,e),this._element=t;for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;n>i;i++)r[i-1]=arguments[i];for(var u in r){var a=this._getConfig(r[u]);this._addEventListener(a)}}return i(e,[{key:"toggle",value:function(e){document.querySelector(e.target||this._element).classList.toggle(e.modifier)}},{key:"_getConfig",value:function(e){return e=Object.assign({},l,e),a["default"].typeCheckConfig(f,e,c),e}},{key:"_addEventListener",value:function(e){var t=this;document.querySelector(this._element).addEventListener(s.CLICK,function(){t.toggle(e)})}}]),e}();n["default"]=v},{"./util":3}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(){r(this,e)}return o(e,null,[{key:"_toType",value:function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}},{key:"_isElement",value:function(e){return(e[0]||e).nodeType}},{key:"typeCheckConfig",value:function(e,t,n){for(var r in n)if(n.hasOwnProperty(r)){var o=n[r],i=t[r],u=void 0;if(u=i&&this._isElement(i)?"element":this._toType(i),!new RegExp(o).test(u))throw new Error(e.toUpperCase()+": "+('Option "'+r+'" provided type "'+u+'" ')+('but expected type "'+o+'".'))}}}]),e}();n["default"]=i},{}]},{},[1]);
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Autosuggest",[],e):"object"==typeof exports?exports.Autosuggest=e():t.Autosuggest=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=14)}([function(t,e,r){t.exports=r(7)},function(t,e,r){var n=r(12);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}t.exports=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},function(t,e,r){var n=r(8),o=r(9),i=r(10),a=r(11);t.exports=function(t){return n(t)||o(t)||i(t)||a()}},function(t,e){function r(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,c,"next",t)}function c(t){r(a,o,i,s,c,"throw",t)}s(void 0)}))}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=g(a,r);if(s){if(s===u)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var h=c(t,e,r);if("normal"===h.type){if(n=r.done?"completed":"suspendedYield",h.arg===u)continue;return{value:h.arg,done:r.done}}"throw"===h.type&&(n="completed",r.method="throw",r.arg=h.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function h(){}function l(){}function f(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,y=p&&p(p(E([])));y&&y!==e&&r.call(y,o)&&(d=y);var v=f.prototype=h.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,s){var u=c(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){h.value=t,a(h)}),(function(t){return n("throw",t,a,s)}))}s(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function g(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=c(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return l.prototype=v.constructor=f,f.constructor=l,f[a]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},m(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(v),v[a]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){var n=r(2);t.exports=function(t){if(Array.isArray(t))return n(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,r){var n=r(2);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),i=r(3),a=r.n(i),s=r(4),c=r.n(s),u=r(1),h=r.n(u),l=r(5),f=r.n(l),d=r(6),p=r.n(d),y=(r(13),"URLSearchParams"in self),v="Symbol"in self&&"iterator"in Symbol,m="FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(t){return!1}}(),b="FormData"in self,g="ArrayBuffer"in self;if(g)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],x=ArrayBuffer.isView||function(t){return t&&w.indexOf(Object.prototype.toString.call(t))>-1};function L(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function E(t){return"string"!=typeof t&&(t=String(t)),t}function O(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v&&(e[Symbol.iterator]=function(){return e}),e}function A(t){this.map={},t instanceof A?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function S(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function _(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function j(t){var e=new FileReader,r=_(e);return e.readAsArrayBuffer(t),r}function T(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function I(){return this.bodyUsed=!1,this._initBody=function(t){var e;this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:m&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:b&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:y&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():g&&m&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=T(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):g&&(ArrayBuffer.prototype.isPrototypeOf(t)||x(t))?this._bodyArrayBuffer=T(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):y&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m&&(this.blob=function(){var t=S(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?S(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(j)}),this.text=function(){var t,e,r,n=S(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=_(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},b&&(this.formData=function(){return this.text().then(P)}),this.json=function(){return this.text().then(JSON.parse)},this}A.prototype.append=function(t,e){t=L(t),e=E(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},A.prototype.delete=function(t){delete this.map[L(t)]},A.prototype.get=function(t){return t=L(t),this.has(t)?this.map[t]:null},A.prototype.has=function(t){return this.map.hasOwnProperty(L(t))},A.prototype.set=function(t,e){this.map[L(t)]=E(e)},A.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},A.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),O(t)},A.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),O(t)},A.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),O(t)},v&&(A.prototype[Symbol.iterator]=A.prototype.entries);var k=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function B(t,e){var r,n,o=(e=e||{}).body;if(t instanceof B){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new A(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new A(e.headers)),this.method=(r=e.method||this.method||"GET",n=r.toUpperCase(),k.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function P(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function U(t,e){e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new A(e.headers),this.url=e.url||"",this._initBody(t)}B.prototype.clone=function(){return new B(this,{body:this._bodyInit})},I.call(B.prototype),I.call(U.prototype),U.prototype.clone=function(){return new U(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new A(this.headers),url:this.url})},U.error=function(){var t=new U(null,{status:0,statusText:""});return t.type="error",t};var C=[301,302,303,307,308];U.redirect=function(t,e){if(-1===C.indexOf(e))throw new RangeError("Invalid status code");return new U(null,{status:e,headers:{location:t}})};var F=self.DOMException;try{new F}catch(t){(F=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),F.prototype.constructor=F}function D(t,e){return new Promise((function(r,n){var o=new B(t,e);if(o.signal&&o.signal.aborted)return n(new F("Aborted","AbortError"));var i=new XMLHttpRequest;function a(){i.abort()}i.onload=function(){var t,e,n={status:i.status,statusText:i.statusText,headers:(t=i.getAllResponseHeaders()||"",e=new A,t.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in i?i.responseURL:n.headers.get("X-Request-URL");var o="response"in i?i.response:i.responseText;r(new U(o,n))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.onabort=function(){n(new F("Aborted","AbortError"))},i.open(o.method,o.url,!0),"include"===o.credentials?i.withCredentials=!0:"omit"===o.credentials&&(i.withCredentials=!1),"responseType"in i&&m&&(i.responseType="blob"),o.headers.forEach((function(t,e){i.setRequestHeader(e,t)})),o.signal&&(o.signal.addEventListener("abort",a),i.onreadystatechange=function(){4===i.readyState&&o.signal.removeEventListener("abort",a)}),i.send(void 0===o._bodyInit?null:o._bodyInit)}))}D.polyfill=!0,self.fetch||(self.fetch=D,self.Headers=A,self.Request=B,self.Response=U);var R="classList"in document.createElement("_"),N=R?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},M=R?function(t,e){N(t,e)&&t.classList.remove(e)}:function(t,e){N(t,e)&&(t.className=t.className.replace(e,""))},q=R?function(t,e){N(t,e)||t.classList.add(e)}:function(t,e){N(t,e)||(t.className+=" ".concat(e))},H=function(t){var e=t.match,r=t.matches,n=t.searchBy,o=new RegExp(r[0],"i");return'\n    <li>\n      <a href="'.concat(e[n],'">\n        ').concat(e[n].replace(o,(function(t){return"<b>".concat(t,"</b>")})),"\n      </a>\n    </li>")},G=function(){function t(e){f()(this,t),this.options=e;var r=e.delay,n=e.search,o=e.searchOutputUl,i=e.searchBy,a=e.error,s=e.searchMethod,c=e.isLoading,u=e.isActive,h=e.activeList,l=e.placeholderError,d=e.howManyCharacters,p=e.clearButton;this.search=n,this.searchOutputUl=o||"output-list",this.placeholderError=l||"something went wrong...",this.errorClass=a||"error",this.isLoading=c||"loading",this.searchId=document.getElementById(this.search),this.delay=r||500,this.clearButton=p||!1,this.searchMethod=s||!1,this.isActive=u||"active",this.howManyCharacters=d||1,this.activeList=h||"active-list",this.keyCode={esc:27,enter:13,keyUp:40,keyDown:38},this.initialSearch(i)}var e;return p()(t,[{key:"initialSearch",value:function(t){var e=this,r=null;this.createOutputSearch(this.search),this.searchId.addEventListener("input",(function(n){e.valueFromSearch=n.target.value,e.classSearch=n.target.parentNode;var o=e.valueFromSearch.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/g,"");clearTimeout(r),r=setTimeout((function(){o.length>=e.howManyCharacters&&o.length>0?(q(e.searchId.parentNode,e.isLoading),e.searchItem(o.trim(),t)):M(e.matchList,e.isActive)}),e.delay),M(e.searchId,e.errorClass)}))}},{key:"createOutputSearch",value:function(){var t="".concat(this.search,"-auto"),e=document.createElement("div");e.id=t,e.className="output-search",this.searchId.parentNode.insertBefore(e,this.searchId.nextSibling),this.matchList=document.getElementById(t)}},{key:"closeOutputMatchesList",value:function(){var t=this;document.addEventListener("click",(function(e){e.stopPropagation();var r=document.querySelector(".".concat(t.isActive));e.target.id!==t.search&&r&&M(r,t.isActive)})),document.addEventListener("keyup",(function(e){if(e.keyCode===t.keyCode.esc){var r=document.querySelector(".".concat(t.isActive));r&&M(r,t.isActive)}}))}},{key:"outputHtml",value:function(t){if(t.length>1){var e=this.options,r=e.howManyRecordsShow,n=e.searchBy,o=e.specificOutput,i=r||10,a=t.filter((function(t,e){return e>0&&e<=i})).map((function(e){return o?o(h()(h()({},e),{},{matches:t})):H({match:e,matches:t,searchBy:n})})).join("");this.matchList.innerHTML='<ul id="'.concat(this.searchOutputUl,'">').concat(a,"</ul>"),q(this.matchList,this.isActive),this.addTextFromLiToSearchInput(),this.keyUpInsideUl(),this.mouseActiveListItem(),this.closeOutputMatchesList()}}},{key:"addTextFromLiToSearchInput",value:function(){var t=this;document.addEventListener("keyup",(function(e){if(e.preventDefault(),t.valueFromSearch.length){var r=document.querySelector("li.".concat(t.activeList," > a"));if(e.keyCode===t.keyCode.enter&&null!=r){var n=e.target;document.getElementById(n.id).value=r.innerText.trim(),document.getElementById(t.searchOutputUl).outerHTML="",M(n.nextSibling,t.isActive),M(r,t.activeList)}}}))}},{key:"mouseActiveListItem",value:function(){for(var t=this,e=document.querySelectorAll("#".concat(this.searchOutputUl," > li")),r=0;r<e.length;r++)e[r].addEventListener("mouseenter",(function(e){var r=document.querySelector("li.".concat(t.activeList));r&&M(r,t.activeList),q(e.target,t.activeList)}));this.mouseAddListItemToSearchInput()}},{key:"mouseAddListItemToSearchInput",value:function(){var t=this,e=document.getElementById(this.searchOutputUl);e.addEventListener("click",(function(r){r.preventDefault();var n=document.querySelector("li.".concat(t.activeList," > a")).innerText;document.getElementById(t.search).value=n.trim(),e.outerHTML=""}))}},{key:"keyUpInsideUl",value:function(){var t=this,e=0,r=document.querySelectorAll(".".concat(this.isActive," > #").concat(this.searchOutputUl," > li"));r.length>=1&&this.searchId.addEventListener("keydown",(function(n){var o=document.querySelector("li.".concat(t.activeList));switch(n.keyCode){case t.keyCode.keyUp:(e+=1)>r.length&&(e=1),o&&M(o,t.activeList),q(r[e-1],t.activeList);break;case t.keyCode.keyDown:(e-=1)<=0&&(e=r.length),o&&M(o,t.activeList),q(r[e-1],t.activeList)}}))}},{key:"clearSearchInpu",value:function(){var t=this,e=document.getElementById(this.search);e.nextElementSibling.matches(".clear")&&this.removeClearButton(e);var r=document.createElement("span");r.classList.add("clear"),r.setAttribute("title","clear"),this.searchId.parentNode.insertBefore(r,this.searchId.nextSibling),r.addEventListener("click",(function(){e.value="",e.focus(),t.removeClearButton(e)}))}},{key:"removeClearButton",value:function(t){t.nextElementSibling.remove()}},{key:"searchItem",value:(e=c()(o.a.mark((function t(e,r){var n,i,s,c,u,h,l,f;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=this.options.dataAPI,i=n.searchLike,s=n.path,c=!0===i?s+e:s,u=this.searchMethod?"^":"",t.next=6,fetch(c);case 6:return h=t.sent,t.next=9,h.json();case 9:l=t.sent,f=l.filter((function(t){var n=new RegExp("".concat(u).concat(e),"gi");return t[r].match(n)})),0===e.length&&(f=[],this.matchList.innerHTML=""),f=[e].concat(a()(f)),M(this.classSearch,this.isLoading),this.clearButton&&this.clearSearchInpu(),this.outputHtml(f),t.next=24;break;case 18:t.prev=18,t.t0=t.catch(0),M(this.classSearch,this.isLoading),this.searchId.value="",q(this.searchId,this.errorClass),this.searchId.placeholder=this.placeholderError;case 24:case"end":return t.stop()}}),t,this,[[0,18]])}))),function(t,r){return e.apply(this,arguments)})}]),t}();e.default=G}]).default}));
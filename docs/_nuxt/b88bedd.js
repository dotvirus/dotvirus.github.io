(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{201:function(e,t,n){"use strict";var r=n(9),o=n(4),c=n(80),l=n(13),f=n(11),d=n(35),N=n(155),I=n(57),v=n(5),h=n(59),E=n(58).f,_=n(23).f,m=n(12).f,w=n(202).trim,x="Number",A=o.Number,y=A.prototype,S=d(h(y))==x,C=function(e){var t,n,r,o,c,l,f,code,d=I(e,!1);if("string"==typeof d&&d.length>2)if(43===(t=(d=w(d)).charCodeAt(0))||45===t){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(d.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+d}for(l=(c=d.slice(2)).length,f=0;f<l;f++)if((code=c.charCodeAt(f))<48||code>o)return NaN;return parseInt(c,r)}return+d};if(c(x,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var F,T=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof T&&(S?v((function(){y.valueOf.call(n)})):d(n)!=x)?N(new A(C(t)),n,T):C(t)},k=r?E(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;k.length>M;M++)f(A,F=k[M])&&!f(T,F)&&m(T,F,_(A,F));T.prototype=y,y.constructor=T,l(o,x,T)}},202:function(e,t,n){var r=n(17),o="["+n(203)+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),f=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},203:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},207:function(e,t,n){"use strict";n.r(t);n(201);var r=n(1).a.extend({props:{value:{type:[String,Number]},title:{type:[String,Number]}}}),o=n(34),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"mb-1 text-sm font-semibold sec--text"},[e._v(e._s(e.title))]),e._v(" "),n("input",{staticClass:"\n      cursor-not-allowed\n      shadow\n      appearance-none\n      border\n      rounded\n      w-full\n      py-2\n      px-3\n      text-gray-700\n      leading-tight\n      focus:outline-none focus:shadow-outline\n    ",attrs:{readonly:"",type:"number"},domProps:{value:e.value}}),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports}}]);
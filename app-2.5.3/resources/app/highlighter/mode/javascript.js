self.webpackChunk(["mode/javascript"],{5:function(a,b,c){(function(a){a(c(0))})(function(a){"use strict";a.defineMode("javascript",function(b,d){function c(a){for(var b,c=!1,d=!1;null!=(b=a.next());){if(!c){if("/"==b&&!d)return;"["==b?d=!0:d&&"]"==b&&(d=!1)}c=!c&&"\\"==b}}function e(a,b,c){return Oa=a,Pa=c,b}function f(a,b){var d=a.next();if("\""==d||"'"==d)return b.tokenize=g(d),b.tokenize(a,b);if("."==d&&a.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return e("number","number");if("."==d&&a.match(".."))return e("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(d))return e(d);if("="==d&&a.eat(">"))return e("=>","operator");if("0"==d&&a.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return e("number","number");if(/\d/.test(d))return a.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),e("number","number");if("/"==d)return a.eat("*")?(b.tokenize=h,h(a,b)):a.eat("/")?(a.skipToEnd(),e("comment","comment")):Na(a,b,1)?(c(a),a.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),e("regexp","string-2")):(a.eat("="),e("operator","operator",a.current()));if("`"==d)return b.tokenize=i,i(a,b);if("#"==d)return a.skipToEnd(),e("error","error");if("<"==d&&a.match("!--")||"-"==d&&a.match("->"))return a.skipToEnd(),e("comment","comment");if(Xa.test(d))return">"==d&&b.lexical&&">"==b.lexical.type||(a.eat("=")?("!"==d||"="==d)&&a.eat("="):/[<>*+\-]/.test(d)&&(a.eat(d),">"==d&&a.eat(d))),e("operator","operator",a.current());if(Va.test(d)){a.eatWhile(Va);var f=a.current();if("."!=b.lastType){if(Wa.propertyIsEnumerable(f)){var j=Wa[f];return e(j.type,j.style,f)}if("async"==f&&a.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return e("async","keyword",f)}return e("variable","variable",f)}}function g(a){return function(b,c){var d,g=!1;if(Sa&&"@"==b.peek()&&b.match(Ya))return c.tokenize=f,e("jsonld-keyword","meta");for(;null!=(d=b.next())&&(d!=a||g);)g=!g&&"\\"==d;return g||(c.tokenize=f),e("string","string")}}function h(a,b){for(var c,d=!1;c=a.next();){if("/"==c&&d){b.tokenize=f;break}d="*"==c}return e("comment","comment")}function i(a,b){for(var c,d=!1;null!=(c=a.next());){if(!d&&("`"==c||"$"==c&&a.eat("{"))){b.tokenize=f;break}d=!d&&"\\"==c}return e("quasi","string-2",a.current())}function j(a,b){b.fatArrowAt&&(b.fatArrowAt=null);var c=a.string.indexOf("=>",a.start);if(!(0>c)){if(Ua){var d=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(a.string.slice(a.start,c));d&&(c=d.index)}for(var e=0,f=!1,g=c-1;0<=g;--g){var h=a.string.charAt(g),i=Za.indexOf(h);if(0<=i&&3>i){if(!e){++g;break}if(0==--e){"("==h&&(f=!0);break}}else if(3<=i&&6>i)++e;else if(Va.test(h))f=!0;else if(/["'\/`]/.test(h))for(;;--g){if(0==g)return;var j=a.string.charAt(g-1);if(j==h&&"\\"!=a.string.charAt(g-2)){g--;break}}else if(f&&!e){++g;break}}f&&!e&&(b.fatArrowAt=g)}}function k(a,b,c,d,e,f){this.indented=a,this.column=b,this.type=c,this.prev=e,this.info=f,null!=d&&(this.align=d)}function l(a,b){for(var c=a.localVars;c;c=c.next)if(c.name==b)return!0;for(var d=a.context;d;d=d.prev)for(var c=d.vars;c;c=c.next)if(c.name==b)return!0}function m(a,b,c,d,e){var f=a.cc;for(_a.state=a,_a.stream=e,_a.marked=null,_a.cc=f,_a.style=b,a.lexical.hasOwnProperty("align")||(a.lexical.align=!0);;){var g=f.length?f.pop():Ta?D:B;if(g(c,d)){for(;f.length&&f[f.length-1].lex;)f.pop()();return _a.marked?_a.marked:"variable"==c&&l(a,d)?"variable-2":b}}}function n(){for(var a=arguments.length-1;0<=a;a--)_a.cc.push(arguments[a])}function o(){return n.apply(null,arguments),!0}function p(a,b){for(var c=b;c;c=c.next)if(c.name==a)return!0;return!1}function q(a){var b=_a.state;if(_a.marked="def",b.context)if("var"==b.lexical.info&&b.context&&b.context.block){var c=r(a,b.context);if(null!=c)return void(b.context=c)}else if(!p(a,b.localVars))return void(b.localVars=new u(a,b.localVars));d.globalVars&&!p(a,b.globalVars)&&(b.globalVars=new u(a,b.globalVars))}function r(a,b){if(!b)return null;if(b.block){var c=r(a,b.prev);return c?c==b.prev?b:new t(c,b.vars,!0):null}return p(a,b.vars)?b:new t(b.prev,new u(a,b.vars),!1)}function s(a){return"public"==a||"private"==a||"protected"==a||"abstract"==a||"readonly"==a}function t(a,b,c){this.prev=a,this.vars=b,this.block=c}function u(a,b){this.name=a,this.next=b}function v(){_a.state.context=new t(_a.state.context,_a.state.localVars,!1),_a.state.localVars=ab}function w(){_a.state.context=new t(_a.state.context,_a.state.localVars,!0),_a.state.localVars=null}function x(){_a.state.localVars=_a.state.context.vars,_a.state.context=_a.state.context.prev}function y(a,b){var c=function(){var c=_a.state,d=c.indented;if("stat"==c.lexical.type)d=c.lexical.indented;else for(var e=c.lexical;e&&")"==e.type&&e.align;e=e.prev)d=e.indented;c.lexical=new k(d,_a.stream.column(),a,null,c.lexical,b)};return c.lex=!0,c}function z(){var a=_a.state;a.lexical.prev&&(")"==a.lexical.type&&(a.indented=a.lexical.indented),a.lexical=a.lexical.prev)}function A(a){function b(c){return c==a?o():";"==a||"}"==c||")"==c||"]"==c?n():o(b)}return b}function B(a,b){return"var"==a?o(y("vardef",b),ja,A(";"),z):"keyword a"==a?o(y("form"),F,B,z):"keyword b"==a?o(y("form"),B,z):"keyword d"==a?_a.stream.match(/^\s*$/,!1)?o():o(y("stat"),H,A(";"),z):"debugger"==a?o(A(";")):"{"==a?o(y("}"),w,Y,z,x):";"==a?o():"if"==a?("else"==_a.state.lexical.info&&_a.state.cc[_a.state.cc.length-1]==z&&_a.state.cc.pop()(),o(y("form"),F,B,z,pa)):"function"==a?o(ta):"for"==a?o(y("form"),qa,B,z):"class"==a||Ua&&"interface"==b?(_a.marked="keyword",o(y("form","class"==a?a:b),ya,z)):"variable"==a?Ua&&"declare"==b?(_a.marked="keyword",o(B)):Ua&&("module"==b||"enum"==b||"type"==b)&&_a.stream.match(/^\s*\w/,!1)?(_a.marked="keyword","enum"==b?o(Ka):"type"==b?o(va,A("operator"),ba,A(";")):o(y("form"),ka,A("{"),y("}"),Y,z,z)):Ua&&"namespace"==b?(_a.marked="keyword",o(y("form"),D,B,z)):Ua&&"abstract"==b?(_a.marked="keyword",o(B)):o(y("stat"),R):"switch"==a?o(y("form"),F,A("{"),y("}","switch"),w,Y,z,z,x):"case"==a?o(D,A(":")):"default"==a?o(A(":")):"catch"==a?o(y("form"),v,C,B,z,x):"export"==a?o(y("stat"),Ca,z):"import"==a?o(y("stat"),Ea,z):"async"==a?o(B):"@"==b?o(D,B):n(y("stat"),D,A(";"),z)}function C(a){if("("==a)return o(wa,A(")"))}function D(a,b){return G(a,b,!1)}function E(a,b){return G(a,b,!0)}function F(a){return"("==a?o(y(")"),D,A(")"),z):n()}function G(a,b,c){if(_a.state.fatArrowAt==_a.stream.start){var d=c?N:M;if("("==a)return o(v,y(")"),W(wa,")"),z,A("=>"),d,x);if("variable"==a)return n(v,ka,A("=>"),d,x)}var e=c?J:I;return $a.hasOwnProperty(a)?o(e):"function"==a?o(ta,e):"class"==a||Ua&&"interface"==b?(_a.marked="keyword",o(y("form"),xa,z)):"keyword c"==a||"async"==a?o(c?E:D):"("==a?o(y(")"),H,A(")"),z,e):"operator"==a||"spread"==a?o(c?E:D):"["==a?o(y("]"),Ja,z,e):"{"==a?X(T,"}",null,e):"quasi"==a?n(K,e):"new"==a?o(O(c)):"import"==a?o(D):o()}function H(a){return a.match(/[;\}\)\],]/)?n():n(D)}function I(a,b){return","==a?o(D):J(a,b,!1)}function J(a,b,c){var d=!1==c?I:J,e=!1==c?D:E;return"=>"==a?o(v,c?N:M,x):"operator"==a?/\+\+|--/.test(b)||Ua&&"!"==b?o(d):Ua&&"<"==b&&_a.stream.match(/^([^>]|<.*?>)*>\s*\(/,!1)?o(y(">"),W(ba,">"),z,d):"?"==b?o(D,A(":"),e):o(e):"quasi"==a?n(K,d):";"==a?void 0:"("==a?X(E,")","call",d):"."==a?o(S,d):"["==a?o(y("]"),H,A("]"),z,d):Ua&&"as"==b?(_a.marked="keyword",o(ba,d)):"regexp"==a?(_a.state.lastType=_a.marked="operator",_a.stream.backUp(_a.stream.pos-_a.stream.start-1),o(e)):void 0}function K(a,b){return"quasi"==a?"${"==b.slice(b.length-2)?o(D,L):o(K):n()}function L(a){if("}"==a)return _a.marked="string-2",_a.state.tokenize=i,o(K)}function M(a){return j(_a.stream,_a.state),n("{"==a?B:D)}function N(a){return j(_a.stream,_a.state),n("{"==a?B:E)}function O(a){return function(b){return"."==b?o(a?Q:P):"variable"==b&&Ua?o(ga,a?J:I):n(a?E:D)}}function P(a,b){if("target"==b)return _a.marked="keyword",o(I)}function Q(a,b){if("target"==b)return _a.marked="keyword",o(J)}function R(a){return":"==a?o(z,B):n(I,A(";"),z)}function S(a){if("variable"==a)return _a.marked="property",o()}function T(a,b){if("async"==a)return _a.marked="property",o(T);if("variable"==a||"keyword"==_a.style){if(_a.marked="property","get"==b||"set"==b)return o(U);var c;return Ua&&_a.state.fatArrowAt==_a.stream.start&&(c=_a.stream.match(/^\s*:\s*/,!1))&&(_a.state.fatArrowAt=_a.stream.pos+c[0].length),o(V)}return"number"==a||"string"==a?(_a.marked=Sa?"property":_a.style+" property",o(V)):"jsonld-keyword"==a?o(V):Ua&&s(b)?(_a.marked="keyword",o(T)):"["==a?o(D,Z,A("]"),V):"spread"==a?o(E,V):"*"==b?(_a.marked="keyword",o(T)):":"==a?n(V):void 0}function U(a){return"variable"==a?(_a.marked="property",o(ta)):n(V)}function V(a){return":"==a?o(E):"("==a?n(ta):void 0}function W(a,b,c){function d(e,f){if(c?-1<c.indexOf(e):","==e){var g=_a.state.lexical;return"call"==g.info&&(g.pos=(g.pos||0)+1),o(function(c,d){return c==b||d==b?n():n(a)},d)}return e==b||f==b?o():c&&-1<c.indexOf(";")?n(a):o(A(b))}return function(c,e){return c==b||e==b?o():n(a,d)}}function X(a,b,c){for(var d=3;d<arguments.length;d++)_a.cc.push(arguments[d]);return o(y(b,c),W(a,b),z)}function Y(a){return"}"==a?o():n(B,Y)}function Z(a,b){if(Ua){if(":"==a)return o(ba);if("?"==b)return o(Z)}}function $(a,b){if(Ua&&(":"==a||"in"==b))return o(ba)}function _(a){if(Ua&&":"==a)return _a.stream.match(/^\s*\w+\s+is\b/,!1)?o(D,aa,ba):o(ba)}function aa(a,b){if("is"==b)return _a.marked="keyword",o()}function ba(a,b){return"keyof"==b||"typeof"==b||"infer"==b?(_a.marked="keyword",o("typeof"==b?E:ba)):"variable"==a||"void"==b?(_a.marked="type",o(fa)):"|"==b||"&"==b?o(ba):"string"==a||"number"==a||"atom"==a?o(fa):"["==a?o(y("]"),W(ba,"]",","),z,fa):"{"==a?o(y("}"),W(da,"}",",;"),z,fa):"("==a?o(W(ea,")"),ca,fa):"<"==a?o(W(ba,">"),ba):void 0}function ca(a){if("=>"==a)return o(ba)}function da(a,b){return"variable"==a||"keyword"==_a.style?(_a.marked="property",o(da)):"?"==b||"number"==a||"string"==a?o(da):":"==a?o(ba):"["==a?o(A("variable"),$,A("]"),da):"("==a?n(ua,da):void 0}function ea(a,b){return"variable"==a&&_a.stream.match(/^\s*[?:]/,!1)||"?"==b?o(ea):":"==a?o(ba):"spread"==a?o(ea):n(ba)}function fa(a,b){return"<"==b?o(y(">"),W(ba,">"),z,fa):"|"==b||"."==a||"&"==b?o(ba):"["==a?o(ba,A("]"),fa):"extends"==b||"implements"==b?(_a.marked="keyword",o(ba)):"?"==b?o(ba,A(":"),ba):void 0}function ga(a,b){if("<"==b)return o(y(">"),W(ba,">"),z,fa)}function ha(){return n(ba,ia)}function ia(a,b){if("="==b)return o(ba)}function ja(a,b){return"enum"==b?(_a.marked="keyword",o(Ka)):n(ka,Z,na,oa)}function ka(a,b){return Ua&&s(b)?(_a.marked="keyword",o(ka)):"variable"==a?(q(b),o()):"spread"==a?o(ka):"["==a?X(ma,"]"):"{"==a?X(la,"}"):void 0}function la(a,b){return"variable"!=a||_a.stream.match(/^\s*:/,!1)?("variable"==a&&(_a.marked="property"),"spread"==a?o(ka):"}"==a?n():"["==a?o(D,A("]"),A(":"),la):o(A(":"),ka,na)):(q(b),o(na))}function ma(){return n(ka,na)}function na(a,b){if("="==b)return o(E)}function oa(a){if(","==a)return o(ja)}function pa(a,b){if("keyword b"==a&&"else"==b)return o(y("form","else"),B,z)}function qa(a,b){return"await"==b?o(qa):"("==a?o(y(")"),ra,z):void 0}function ra(a){return"var"==a?o(ja,sa):"variable"==a?o(sa):n(sa)}function sa(a,b){return")"==a?o():";"==a?o(sa):"in"==b||"of"==b?(_a.marked="keyword",o(D,sa)):n(D,sa)}function ta(a,b){return"*"==b?(_a.marked="keyword",o(ta)):"variable"==a?(q(b),o(ta)):"("==a?o(v,y(")"),W(wa,")"),z,_,B,x):Ua&&"<"==b?o(y(">"),W(ha,">"),z,ta):void 0}function ua(a,b){return"*"==b?(_a.marked="keyword",o(ua)):"variable"==a?(q(b),o(ua)):"("==a?o(v,y(")"),W(wa,")"),z,_,x):Ua&&"<"==b?o(y(">"),W(ha,">"),z,ua):void 0}function va(a,b){return"keyword"==a||"variable"==a?(_a.marked="type",o(va)):"<"==b?o(y(">"),W(ha,">"),z):void 0}function wa(a,b){return"@"==b&&o(D,wa),"spread"==a?o(wa):Ua&&s(b)?(_a.marked="keyword",o(wa)):Ua&&"this"==a?o(Z,na):n(ka,Z,na)}function xa(a,b){return"variable"==a?ya(a,b):za(a,b)}function ya(a,b){if("variable"==a)return q(b),o(za)}function za(a,b){return"<"==b?o(y(">"),W(ha,">"),z,za):"extends"==b||"implements"==b||Ua&&","==a?("implements"==b&&(_a.marked="keyword"),o(Ua?ba:D,za)):"{"==a?o(y("}"),Aa,z):void 0}function Aa(a,b){return"async"==a||"variable"==a&&("static"==b||"get"==b||"set"==b||Ua&&s(b))&&_a.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(_a.marked="keyword",o(Aa)):"variable"==a||"keyword"==_a.style?(_a.marked="property",o(Ua?Ba:ta,Aa)):"number"==a||"string"==a?o(Ua?Ba:ta,Aa):"["==a?o(D,Z,A("]"),Ua?Ba:ta,Aa):"*"==b?(_a.marked="keyword",o(Aa)):Ua&&"("==a?n(ua,Aa):";"==a||","==a?o(Aa):"}"==a?o():"@"==b?o(D,Aa):void 0}function Ba(a,b){if("?"==b)return o(Ba);if(":"==a)return o(ba,na);if("="==b)return o(E);var c=_a.state.lexical.prev,d=c&&"interface"==c.info;return n(d?ua:ta)}function Ca(a,b){return"*"==b?(_a.marked="keyword",o(Ia,A(";"))):"default"==b?(_a.marked="keyword",o(D,A(";"))):"{"==a?o(W(Da,"}"),Ia,A(";")):n(B)}function Da(a,b){return"as"==b?(_a.marked="keyword",o(A("variable"))):"variable"==a?n(E,Da):void 0}function Ea(a){return"string"==a?o():"("==a?n(D):n(Fa,Ga,Ia)}function Fa(a,b){return"{"==a?X(Fa,"}"):("variable"==a&&q(b),"*"==b&&(_a.marked="keyword"),o(Ha))}function Ga(a){if(","==a)return o(Fa,Ga)}function Ha(a,b){if("as"==b)return _a.marked="keyword",o(Fa)}function Ia(a,b){if("from"==b)return _a.marked="keyword",o(D)}function Ja(a){return"]"==a?o():n(W(E,"]"))}function Ka(){return n(y("form"),ka,A("{"),y("}"),W(La,"}"),z,z)}function La(){return n(ka,na)}function Ma(a,b){return"operator"==a.lastType||","==a.lastType||Xa.test(b.charAt(0))||/[,.]/.test(b.charAt(0))}function Na(a,b,c){return b.tokenize==f&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(b.lastType)||"quasi"==b.lastType&&/\{\s*$/.test(a.string.slice(0,a.pos-(c||0)))}var Oa,Pa,Qa=b.indentUnit,Ra=d.statementIndent,Sa=d.jsonld,Ta=d.json||Sa,Ua=d.typescript,Va=d.wordCharacters||/[\w$\xa1-\uffff]/,Wa=function(){function a(a){return{type:a,style:"keyword"}}var b=a("keyword a"),c=a("keyword b"),d=a("keyword c"),e=a("keyword d"),f=a("operator"),g={type:"atom",style:"atom"};return{if:a("if"),while:b,with:b,else:c,do:c,try:c,finally:c,return:e,break:e,continue:e,new:a("new"),delete:d,void:d,throw:d,debugger:a("debugger"),var:a("var"),const:a("var"),let:a("var"),function:a("function"),catch:a("catch"),for:a("for"),switch:a("switch"),case:a("case"),default:a("default"),in:f,typeof:f,instanceof:f,true:g,false:g,null:g,undefined:g,NaN:g,Infinity:g,this:a("this"),class:a("class"),super:a("atom"),yield:d,export:a("export"),import:a("import"),extends:d,await:d}}(),Xa=/[+\-*&%=<>!?|~^@]/,Ya=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,Za="([{}])",$a={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0},_a={state:null,column:null,marked:null,cc:null},ab=new u("this",new u("arguments",null));return x.lex=!0,z.lex=!0,{startState:function(a){var b={tokenize:f,lastType:"sof",cc:[],lexical:new k((a||0)-Qa,0,"block",!1),localVars:d.localVars,context:d.localVars&&new t(null,null,!1),indented:a||0};return d.globalVars&&"object"==typeof d.globalVars&&(b.globalVars=d.globalVars),b},token:function(a,b){if(a.sol()&&(!b.lexical.hasOwnProperty("align")&&(b.lexical.align=!1),b.indented=a.indentation(),j(a,b)),b.tokenize!=h&&a.eatSpace())return null;var c=b.tokenize(a,b);return"comment"==Oa?c:(b.lastType="operator"==Oa&&("++"==Pa||"--"==Pa)?"incdec":Oa,m(b,c,Oa,Pa,a))},indent:function(b,e){if(b.tokenize==h)return a.Pass;if(b.tokenize!=f)return 0;var g,j=e&&e.charAt(0),k=b.lexical;if(!/^\s*else\b/.test(e))for(var l,c=b.cc.length-1;0<=c;--c)if(l=b.cc[c],l==z)k=k.prev;else if(l!=pa)break;for(;("stat"==k.type||"form"==k.type)&&("}"==j||(g=b.cc[b.cc.length-1])&&(g==I||g==J)&&!/^[,\.=+\-*:?[\(]/.test(e));)k=k.prev;Ra&&")"==k.type&&"stat"==k.prev.type&&(k=k.prev);var i=k.type,m=j==i;return"vardef"==i?k.indented+("operator"==b.lastType||","==b.lastType?k.info.length+1:0):"form"==i&&"{"==j?k.indented:"form"==i?k.indented+Qa:"stat"==i?k.indented+(Ma(b,e)?Ra||Qa:0):"switch"!=k.info||m||!1==d.doubleIndentSwitch?k.align?k.column+(m?0:1):k.indented+(m?0:Qa):k.indented+(/^(?:case|default)\b/.test(e)?Qa:2*Qa)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:Ta?null:"/*",blockCommentEnd:Ta?null:"*/",blockCommentContinue:Ta?null:" * ",lineComment:Ta?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:Ta?"json":"javascript",jsonldMode:Sa,jsonMode:Ta,expressionAllowed:Na,skipExpression:function(a){var b=a.cc[a.cc.length-1];(b==D||b==E)&&a.cc.pop()}}}),a.registerHelper("wordChars","javascript",/[\w$]/),a.defineMIME("text/javascript","javascript"),a.defineMIME("text/ecmascript","javascript"),a.defineMIME("application/javascript","javascript"),a.defineMIME("application/x-javascript","javascript"),a.defineMIME("application/ecmascript","javascript"),a.defineMIME("application/json",{name:"javascript",json:!0}),a.defineMIME("application/x-json",{name:"javascript",json:!0}),a.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),a.defineMIME("text/typescript",{name:"javascript",typescript:!0}),a.defineMIME("application/typescript",{name:"javascript",typescript:!0})})}});
//# sourceMappingURL=javascript.js.map
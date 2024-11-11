(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}self.webpackChunk=function(b,c){for(var e in c)a[e]=c[e];for(;b.length;)d[b.pop()]=1};var c={},d={highlighter:1};return b.e=function(a){var b=[Promise.resolve().then(function(){d[a]||importScripts("highlighter/"+a+".js")})];return Promise.all(b)},b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.r=function(a){Object.defineProperty(a,"__esModule",{value:!0})},b.n=function(a){var c=a&&a.__esModule?function(){return a["default"]}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=1)})([function(a,b,c){function d(a){return a.split(/\r\n?|\n/)}function e(a,b,c){this.pos=this.start=0,this.string=a,this.tabSize=b||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0,this.context=c}function f(a,b,c){for(var d in b||(b={}),a)a.hasOwnProperty(d)&&(!1!==c||!b.hasOwnProperty(d))&&(b[d]=a[d]);return b}var g=b.countColumn=function(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));for(var f,g=d||0,h=e||0;;){if(f=a.indexOf("\t",g),0>f||f>=b)return h+(b-g);h+=f-g,h+=c-h%c,g=f+1}};e.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){if(this.pos<this.string.length)return this.string.charAt(this.pos++)},eat:function(a){var b=this.string.charAt(this.pos);if("string"==typeof a)var c=b==a;else var c=b&&(a.test?a.test(b):a(b));return c?(++this.pos,b):void 0},eatWhile:function(a){for(var b=this.pos;this.eat(a););return this.pos>b},eatSpace:function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){var b=this.string.indexOf(a,this.pos);if(-1<b)return this.pos=b,!0},backUp:function(a){this.pos-=a},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=g(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?g(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return g(this.string,null,this.tabSize)-(this.lineStart?g(this.string,this.lineStart,this.tabSize):0)},match:function(a,b,c){if("string"==typeof a){var d=function(a){return c?a.toLowerCase():a},e=this.string.substr(this.pos,a.length);if(d(e)==d(a))return!1!==b&&(this.pos+=a.length),!0}else{var f=this.string.slice(this.pos).match(a);return f&&0<f.index?null:(f&&!1!==b&&(this.pos+=f[0].length),f)}},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}},lookAhead:function(a){var b=this.context.line+a;return b>=this.context.lines.length?null:this.context.lines[b]}},b.StringStream=e,b.startState=function(a,b,c){return!a.startState||a.startState(b,c)};var h=b.modes={},i=b.mimeModes={};b.defineMode=function(a,b){2<arguments.length&&(b.dependencies=Array.prototype.slice.call(arguments,2)),h[a]=b},b.defineMIME=function(a,b){i[a]=b},b.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}}),b.defineMIME("text/plain","null"),b.resolveMode=function(a){return"string"==typeof a&&i.hasOwnProperty(a)?a=i[a]:a&&"string"==typeof a.name&&i.hasOwnProperty(a.name)&&(a=i[a.name]),"string"==typeof a?{name:a}:a||{name:"null"}};var j=b.modeExtensions={};b.extendMode=function(a,b){var c=j.hasOwnProperty(a)?j[a]:j[a]={};f(b,c)},b.getMode=function(a,c){var c=b.resolveMode(c),d=h[c.name];if(!d)return b.getMode(a,"text/plain");var e=d(a,c);if(j.hasOwnProperty(c.name)){var f=j[c.name];for(var g in f)f.hasOwnProperty(g)&&(e.hasOwnProperty(g)&&(e["_"+g]=e[g]),e[g]=f[g])}if(e.name=c.name,c.helperType&&(e.helperType=c.helperType),c.modeProps)for(var g in c.modeProps)e[g]=c.modeProps[g];return e},b.innerMode=function(a,b){for(var c;a.innerMode&&(c=a.innerMode(b),c&&c.mode!=a);)b=c.state,a=c.mode;return c||{mode:a,state:b}},b.registerHelper=b.registerGlobalHelper=Math.min,b.runMode=function(a,c,f,g){for(var h=b.getMode({indentUnit:2},c),j=d(a),k=g&&g.state||b.startState(h),l={lines:j,line:0},m=0,i=j.length;m<i;++m,++l.line){m&&f("\n");var e=new b.StringStream(j[m],4,l);for(!e.string&&h.blankLine&&h.blankLine(k);!e.eol();){var n=h.token(e,k);f(e.current(),n,m,e.start,k),e.start=e.pos}}},c.c[0]=c.c[0],c.c[0]=c.c[0]},function(a,b,c){"use strict";function d(a){if(a.startsWith("<?xml"))return"text/xml";if(a.startsWith("#!")){const b=/^#!.*?(ts-node|node|bash|sh|python(?:[\d.]+)?)\r?\n/g.exec(a);if(b){switch(b[1]){case"ts-node":return"text/typescript";case"node":return"text/javascript";case"sh":case"bash":return"text/x-sh";case"perl":return"text/x-perl";}if(b[1].startsWith("python"))return"text/x-python"}}return null}async function e(a){const b=l.get(a.extension.toLowerCase())||n.get(a.basename.toLowerCase())||d(a.contents);if(!b)return null;const c=o.get(b);return void 0===c?null:(await c.install(),Object(i.getMode)({},b)||null)}function f(a){const b=a.name;return b&&"string"==typeof b?b:null}function g(a,b){const c=Object(i.innerMode)(a,b);return c&&c.mode?f(c.mode):null}function h(a,b,c,d){for(let e=0;10>e;e++){const e=d?g(a,c):null,f=a.token(b,c);if(b.pos>b.start)return f&&e?`m-${e} ${f}`:f}throw new Error(`Mode ${f(a)} failed to advance stream.`)}c.r(b);var i=c(0),j=c.n(i);const k=[{install:()=>c.e("mode/javascript").then(function(){var a=c(5);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".ts":"text/typescript",".js":"text/javascript",".json":"application/json"}},{install:()=>c.e("mode/coffeescript").then(function(){var a=c(12);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".coffee":"text/x-coffeescript"}},{install:()=>Promise.all([c.e("mode/xml"),c.e("mode/javascript"),c.e("mode/jsx")]).then(function(){var a=c(53);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".tsx":"text/typescript-jsx",".jsx":"text/jsx"}},{install:()=>Promise.all([c.e("mode/xml"),c.e("mode/javascript"),c.e("mode/css"),c.e("mode/htmlmixed")]).then(function(){var a=c(2);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".html":"text/html",".htm":"text/html"}},{install:()=>Promise.all([c.e("mode/xml"),c.e("mode/javascript"),c.e("mode/css"),c.e("mode/htmlmixed"),c.e("common"),c.e("mode/htmlembedded")]).then(function(){var a=c(52);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".jsp":"application/x-jsp"}},{install:()=>c.e("mode/css").then(function(){var a=c(3);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".css":"text/css",".scss":"text/x-scss",".less":"text/x-less"}},{install:()=>Promise.all([c.e("mode/xml"),c.e("mode/javascript"),c.e("mode/css"),c.e("mode/htmlmixed"),c.e("common"),c.e("mode/stylus"),c.e("mode/pug"),c.e("mode/coffeescript"),c.e("mode/handlebars"),c.e("mode/sass"),c.e("mode/vue")]).then(function(){var a=c(51);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".vue":"text/x-vue"}},{install:()=>Promise.all([c.e("mode/xml"),c.e("common"),c.e("mode/markdown")]).then(function(){var a=c(50);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".markdown":"text/x-markdown",".md":"text/x-markdown"}},{install:()=>c.e("mode/yaml").then(function(){var a=c(49);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".yaml":"text/yaml",".yml":"text/yaml"}},{install:()=>c.e("mode/xml").then(function(){var a=c(4);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".xml":"text/xml",".xaml":"text/xml",".csproj":"text/xml",".fsproj":"text/xml",".vcxproj":"text/xml",".vbproj":"text/xml",".svg":"text/xml",".resx":"text/xml"}},{install:()=>c.e("mode/clike").then(function(){var a=c(9);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".m":"text/x-objectivec",".scala":"text/x-scala",".sc":"text/x-scala",".cs":"text/x-csharp",".cake":"text/x-csharp",".java":"text/x-java",".c":"text/x-c",".h":"text/x-c",".cpp":"text/x-c++src",".hpp":"text/x-c++src",".kt":"text/x-kotlin"}},{install:()=>c.e("mode/mllike").then(function(){var a=c(48);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".ml":"text/x-ocaml",".fs":"text/x-fsharp",".fsx":"text/x-fsharp",".fsi":"text/x-fsharp"}},{install:()=>c.e("mode/swift").then(function(){var a=c(47);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".swift":"text/x-swift"}},{install:()=>c.e("mode/shell").then(function(){var a=c(46);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".sh":"text/x-sh"}},{install:()=>c.e("mode/sql").then(function(){var a=c(45);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".sql":"text/x-sql"}},{install:()=>c.e("mode/cypher").then(function(){var a=c(44);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".cql":"application/x-cypher-query"}},{install:()=>c.e("mode/go").then(function(){var a=c(43);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".go":"text/x-go"}},{install:()=>c.e("mode/perl").then(function(){var a=c(42);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".pl":"text/x-perl"}},{install:()=>Promise.all([c.e("mode/xml"),c.e("mode/javascript"),c.e("mode/css"),c.e("mode/htmlmixed"),c.e("mode/clike"),c.e("mode/php")]).then(function(){var a=c(41);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".php":"application/x-httpd-php"}},{install:()=>c.e("mode/python").then(function(){var a=c(8);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".py":"text/x-python"}},{install:()=>c.e("mode/ruby").then(function(){var a=c(7);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".rb":"text/x-ruby"}},{install:()=>c.e("mode/clojure").then(function(){var a=c(40);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".clj":"text/x-clojure",".cljc":"text/x-clojure",".cljs":"text/x-clojure",".edn":"text/x-clojure"}},{install:()=>Promise.all([c.e("common"),c.e("mode/rust")]).then(function(){var a=c(39);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".rs":"text/x-rustsrc"}},{install:()=>c.e("ext/elixir").then(c.bind(null,38)),mappings:{".ex":"text/x-elixir",".exs":"text/x-elixir"}},{install:()=>c.e("mode/haxe").then(function(){var a=c(37);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".hx":"text/x-haxe"}},{install:()=>c.e("mode/r").then(function(){var a=c(36);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".r":"text/x-rsrc"}},{install:()=>c.e("mode/powershell").then(function(){var a=c(35);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".ps1":"application/x-powershell"}},{install:()=>c.e("mode/vb").then(function(){var a=c(34);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".vb":"text/x-vb"}},{install:()=>c.e("mode/fortran").then(function(){var a=c(33);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".f":"text/x-fortran",".f90":"text/x-fortran"}},{install:()=>c.e("mode/lua").then(function(){var a=c(32);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".lua":"text/x-lua"}},{install:()=>c.e("mode/crystal").then(function(){var a=c(31);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".cr":"text/x-crystal"}},{install:()=>c.e("mode/julia").then(function(){var a=c(30);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".jl":"text/x-julia"}},{install:()=>c.e("mode/stex").then(function(){var a=c(6);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".tex":"text/x-stex"}},{install:()=>c.e("mode/sparql").then(function(){var a=c(29);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".rq":"application/sparql-query"}},{install:()=>c.e("mode/stylus").then(function(){var a=c(11);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".styl":"text/x-styl"}},{install:()=>Promise.all([c.e("mode/xml"),c.e("mode/javascript"),c.e("mode/css"),c.e("mode/htmlmixed"),c.e("mode/soy")]).then(function(){var a=c(28);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".soy":"text/x-soy"}},{install:()=>c.e("mode/smalltalk").then(function(){var a=c(27);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".st":"text/x-stsrc"}},{install:()=>Promise.all([c.e("mode/xml"),c.e("mode/javascript"),c.e("mode/css"),c.e("mode/htmlmixed"),c.e("mode/ruby"),c.e("mode/slim")]).then(function(){var a=c(26);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".slim":"application/x-slim"}},{install:()=>c.e("mode/sieve").then(function(){var a=c(25);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".sieve":"application/sieve"}},{install:()=>c.e("mode/scheme").then(function(){var a=c(24);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".ss":"text/x-scheme",".sls":"text/x-scheme",".scm":"text/x-scheme"}},{install:()=>Promise.all([c.e("common"),c.e("mode/python"),c.e("mode/stex"),c.e("mode/rst")]).then(function(){var a=c(23);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".rst":"text/x-rst"}},{install:()=>c.e("mode/rpm").then(function(){var a=c(22);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".rpm":"text/x-rpm-spec"}},{install:()=>c.e("mode/q").then(function(){var a=c(21);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".q":"text/x-q"}},{install:()=>c.e("mode/puppet").then(function(){var a=c(20);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".pp":"text/x-puppet"}},{install:()=>Promise.all([c.e("mode/xml"),c.e("mode/javascript"),c.e("mode/css"),c.e("mode/htmlmixed"),c.e("mode/pug")]).then(function(){var a=c(10);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".pug":"text/x-pug"}},{install:()=>c.e("mode/protobuf").then(function(){var a=c(19);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".proto":"text/x-protobuf"}},{install:()=>c.e("mode/properties").then(function(){var a=c(18);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".properties":"text/x-properties",".gitattributes":"text/x-properties",".gitignore":"text/x-properties",".editorconfig":"text/x-properties",".ini":"text/x-ini"}},{install:()=>c.e("mode/pig").then(function(){var a=c(17);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".pig":"text/x-pig"}},{install:()=>c.e("mode/asciiarmor").then(function(){var a=c(16);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".pgp":"application/pgp"}},{install:()=>c.e("mode/oz").then(function(){var a=c(15);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".oz":"text/x-oz"}},{install:()=>c.e("mode/pascal").then(function(){var a=c(14);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{".pas":"text/x-pascal"}}],l=new Map,m=[{install:()=>Promise.all([c.e("common"),c.e("mode/dockerfile")]).then(function(){var a=c(13);return"object"==typeof a&&a&&a.__esModule?a:Object.assign({},"object"==typeof a&&a,{default:a})}),mappings:{dockerfile:"text/x-dockerfile"}}],n=new Map,o=new Map;for(const d of k)for(const[a,b]of Object.entries(d.mappings))l.set(a,b),o.set(b,d);for(const d of m)for(const[a,b]of Object.entries(d.mappings))n.set(a,b),o.set(b,d);onmessage=async(a)=>{const b=a.data,c=b.tabSize||4,d=b.contents,f=!0===b.addModeClass,g=await e(b);if(!g)return void postMessage({});const j=b.lines&&b.lines.length?new Set(b.lines):null,k=j?Math.max(...j):null,l=d.split(/\r?\n/),m=g.startState?g.startState():null,n={};for(const[b,d]of l.entries()){if(null!==k&&b>k)break;if(j&&!m&&!j.has(b))continue;if(!d.length){g.blankLine&&g.blankLine(m);continue}const a=new i.StringStream(d,c,{lines:l,line:b});for(;!a.eol();){const c=h(g,a,m,f);c&&(!j||j.has(b))&&(n[b]=n[b]||{},n[b][a.start]={length:a.pos-a.start,token:c}),a.start=a.pos}}postMessage(n)}}]);
//# sourceMappingURL=highlighter.js.map
self.webpackChunk(["mode/ruby"],{7:function(a,b,c){(function(a){a(c(0))})(function(a){"use strict";a.defineMode("ruby",function(b){function c(a){for(var b={},c=0,d=a.length;c<d;++c)b[a[c]]=!0;return b}function d(a,b,c){return c.tokenize.push(a),a(b,c)}function e(a,b){if(a.sol()&&a.match("=begin")&&a.eol())return b.tokenize.push(k),"comment";if(a.eatSpace())return null;var c,e=a.next();if("`"==e||"'"==e||"\""==e)return d(i(e,"string","\""==e||"`"==e),a,b);if("/"==e)return f(a)?d(i(e,"string-2",!0),a,b):"operator";if("%"==e){var g="string",h=!0;a.eat("s")?g="atom":a.eat(/[WQ]/)?g="string":a.eat(/[r]/)?g="string-2":a.eat(/[wxq]/)&&(g="string",h=!1);var m=a.eat(/[^\w\s=]/);return m?(p.propertyIsEnumerable(m)&&(m=p[m]),d(i(m,g,h,!0),a,b)):"operator"}if("#"==e)return a.skipToEnd(),"comment";if("<"==e&&(c=a.match(/^<([-~])[\`\"\']?([a-zA-Z_?]\w*)[\`\"\']?(?:;|$)/)))return d(j(c[2],c[1]),a,b);if("0"==e)return a.eat("x")?a.eatWhile(/[\da-fA-F]/):a.eat("b")?a.eatWhile(/[01]/):a.eatWhile(/[0-7]/),"number";if(/\d/.test(e))return a.match(/^[\d_]*(?:\.[\d_]+)?(?:[eE][+\-]?[\d_]+)?/),"number";if("?"==e){for(;a.match(/^\\[CM]-/););return a.eat("\\")?a.eatWhile(/\w/):a.next(),"string"}if(":"==e)return a.eat("'")?d(i("'","atom",!1),a,b):a.eat("\"")?d(i("\"","atom",!0),a,b):a.eat(/[\<\>]/)?(a.eat(/[\<\>]/),"atom"):a.eat(/[\+\-\*\/\&\|\:\!]/)?"atom":a.eat(/[a-zA-Z$@_\xa1-\uffff]/)?(a.eatWhile(/[\w$\xa1-\uffff]/),a.eat(/[\?\!\=]/),"atom"):"operator";if("@"==e&&a.match(/^@?[a-zA-Z_\xa1-\uffff]/))return a.eat("@"),a.eatWhile(/[\w\xa1-\uffff]/),"variable-2";if("$"==e)return a.eat(/[a-zA-Z_]/)?a.eatWhile(/[\w]/):a.eat(/\d/)?a.eat(/\d/):a.next(),"variable-3";if(/[a-zA-Z_\xa1-\uffff]/.test(e))return a.eatWhile(/[\w\xa1-\uffff]/),a.eat(/[\?\!]/),a.eat(":")?"atom":"ident";if("|"==e&&(b.varList||"{"==b.lastTok||"do"==b.lastTok))return l="|",null;if(/[\(\)\[\]{}\\;]/.test(e))return l=e,null;if("-"==e&&a.eat(">"))return"arrow";if(/[=+\-\/*:\.^%<>~|]/.test(e)){var n=a.eatWhile(/[=+\-\/*:\.^%<>~|]/);return"."!=e||n||(l="."),"operator"}return null}function f(a){for(var b,c=a.pos,d=0,e=!1,f=!1;null!=(b=a.next());)if(!f){if(-1<"[{(".indexOf(b))d++;else if(-1<"]})".indexOf(b)){if(d--,0>d)break;}else if("/"==b&&0==d){e=!0;break}f="\\"==b}else f=!1;return a.backUp(a.pos-c),e}function g(a){return a||(a=1),function(b,c){if("}"==b.peek()){if(1==a)return c.tokenize.pop(),c.tokenize[c.tokenize.length-1](b,c);c.tokenize[c.tokenize.length-1]=g(a-1)}else"{"==b.peek()&&(c.tokenize[c.tokenize.length-1]=g(a+1));return e(b,c)}}function h(){var a=!1;return function(b,c){return a?(c.tokenize.pop(),c.tokenize[c.tokenize.length-1](b,c)):(a=!0,e(b,c))}}function i(a,b,c,d){return function(e,f){var i,j=!1;for("read-quoted-paused"===f.context.type&&(f.context=f.context.prev,e.eat("}"));null!=(i=e.next());){if(i==a&&(d||!j)){f.tokenize.pop();break}if(c&&"#"==i&&!j)if(e.eat("{")){"}"==a&&(f.context={prev:f.context,type:"read-quoted-paused"}),f.tokenize.push(g());break}else if(/[@\$]/.test(e.peek())){f.tokenize.push(h());break}j=!j&&"\\"==i}return b}}function j(a,b){return function(c,d){return b&&c.eatSpace(),c.match(a)?d.tokenize.pop():c.skipToEnd(),"string"}}function k(a,b){return a.sol()&&a.match("=end")&&a.eol()&&b.tokenize.pop(),a.skipToEnd(),"comment"}var l,m=c(["alias","and","BEGIN","begin","break","case","class","def","defined?","do","else","elsif","END","end","ensure","false","for","if","in","module","next","not","or","redo","rescue","retry","return","self","super","then","true","undef","unless","until","when","while","yield","nil","raise","throw","catch","fail","loop","callcc","caller","lambda","proc","public","protected","private","require","load","require_relative","extend","autoload","__END__","__FILE__","__LINE__","__dir__"]),n=c(["def","class","case","for","while","until","module","then","catch","loop","proc","begin"]),o=c(["end","until"]),p={"[":"]","{":"}","(":")"},q={"]":"[","}":"{",")":"("};return{startState:function(){return{tokenize:[e],indented:0,context:{type:"top",indented:-b.indentUnit},continuedLine:!1,lastTok:null,varList:!1}},token:function(a,b){l=null,a.sol()&&(b.indented=a.indentation());var c,d=b.tokenize[b.tokenize.length-1](a,b),e=l;if("ident"==d){var f=a.current();d="."==b.lastTok?"property":m.propertyIsEnumerable(a.current())?"keyword":/^[A-Z]/.test(f)?"tag":"def"==b.lastTok||"class"==b.lastTok||b.varList?"def":"variable","keyword"==d&&(e=f,n.propertyIsEnumerable(f)?c="indent":o.propertyIsEnumerable(f)?c="dedent":("if"==f||"unless"==f)&&a.column()==a.indentation()?c="indent":"do"==f&&b.context.indented<b.indented&&(c="indent"))}return(l||d&&"comment"!=d)&&(b.lastTok=e),"|"==l&&(b.varList=!b.varList),"indent"==c||/[\(\[\{]/.test(l)?b.context={prev:b.context,type:l||d,indented:b.indented}:("dedent"==c||/[\)\]\}]/.test(l))&&b.context.prev&&(b.context=b.context.prev),a.eol()&&(b.continuedLine="\\"==l||"operator"==d),d},indent:function(c,d){if(c.tokenize[c.tokenize.length-1]!=e)return a.Pass;var f=d&&d.charAt(0),g=c.context,h=g.type==q[f]||"keyword"==g.type&&/^(?:end|until|else|elsif|when|rescue)\b/.test(d);return g.indented+(h?0:b.indentUnit)+(c.continuedLine?b.indentUnit:0)},electricInput:/^\s*(?:end|rescue|elsif|else|\})$/,lineComment:"#",fold:"indent"}}),a.defineMIME("text/x-ruby","ruby")})}});
//# sourceMappingURL=ruby.js.map
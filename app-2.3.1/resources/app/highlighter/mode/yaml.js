self.webpackChunk(["mode/yaml"],{49:function(a,b,c){(function(a){a(c(0))})(function(a){"use strict";a.defineMode("yaml",function(){var a=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(b,c){var d=b.peek(),e=c.escaped;if(c.escaped=!1,"#"==d&&(0==b.pos||/\s/.test(b.string.charAt(b.pos-1))))return b.skipToEnd(),"comment";if(b.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(c.literal&&b.indentation()>c.keyCol)return b.skipToEnd(),"string";if(c.literal&&(c.literal=!1),b.sol()){if(c.keyCol=0,c.pair=!1,c.pairStart=!1,b.match(/---/))return"def";if(b.match(/\.\.\./))return"def";if(b.match(/\s*-\s+/))return"meta"}if(b.match(/^(\{|\}|\[|\])/))return"{"==d?c.inlinePairs++:"}"==d?c.inlinePairs--:"["==d?c.inlineList++:c.inlineList--,"meta";if(0<c.inlineList&&!e&&","==d)return b.next(),"meta";if(0<c.inlinePairs&&!e&&","==d)return c.keyCol=0,c.pair=!1,c.pairStart=!1,b.next(),"meta";if(c.pairStart){if(b.match(/^\s*(\||\>)\s*/))return c.literal=!0,"meta";if(b.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==c.inlinePairs&&b.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(0<c.inlinePairs&&b.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(b.match(a))return"keyword"}return!c.pair&&b.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(c.pair=!0,c.keyCol=b.indentation(),"atom"):c.pair&&b.match(/^:\s*/)?(c.pairStart=!0,"meta"):(c.pairStart=!1,c.escaped="\\"==d,b.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}}),a.defineMIME("text/x-yaml","yaml"),a.defineMIME("text/yaml","yaml")})}});
//# sourceMappingURL=yaml.js.map
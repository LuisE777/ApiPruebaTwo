var hljs=new function(){function e(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,t){var r=e&&e.exec(t);return r&&0==r.index}function n(e,t){var r={};for(var n in e)r[n]=e[n];if(t)for(var n in t)r[n]=t[n];return r}function a(e){var r=[];return function e(n,a){for(var c=n.firstChild;c;c=c.nextSibling)3==c.nodeType?a+=c.nodeValue.length:"br"==t(c)?a+=1:1==c.nodeType&&(r.push({event:"start",offset:a,node:c}),a=e(c,a),r.push({event:"stop",offset:a,node:c}));return a}(e,0),r}function c(t,a,s,o){function u(e,t,r,n){var a='<span class="'+(n?"":l.classPrefix);return(a+=e+'">')+t+(r?"":"</span>")}function f(){return void 0!==N.sL?function(){if(N.sL&&!b[N.sL])return e(_);var t=N.sL?c(N.sL,_,!0,N.continuation.top):i(_);return N.r>0&&(E+=t.r),"continuous"==N.subLanguageMode&&(N.continuation.top=t.top),u(t.language,t.value,!1,!0)}():function(){var t=e(_);if(!N.k)return t;var r="",n=0;N.lR.lastIndex=0;for(var a,c,i,s=N.lR.exec(t);s;){r+=t.substr(n,s.index-n);var o=(a=N,c=s,i=p.cI?c[0].toLowerCase():c[0],a.k.hasOwnProperty(i)&&a.k[i]);o?(E+=o[1],r+=u(o[0],s[0])):r+=s[0],n=N.lR.lastIndex,s=N.lR.exec(t)}return r+t.substr(n)}()}function d(t,r){var n=t.cN?u(t.cN,"",!0):"";t.rB?(m+=n,_=""):t.eB?(m+=e(r)+n,_=""):(m+=n,_=r),N=Object.create(t,{parent:{value:N}})}function g(t,n){if(_+=t,void 0===n)return m+=f(),0;var a=function(e,t){for(var n=0;n<t.c.length;n++)if(r(t.c[n].bR,e))return t.c[n]}(n,N);if(a)return m+=f(),d(a,n),a.rB?0:n.length;var c,i=function e(t,n){return r(t.eR,n)?t:t.eW?e(t.parent,n):void 0}(N,n);if(i){var o=N;o.rE||o.eE||(_+=n),m+=f();do{N.cN&&(m+="</span>"),E+=N.r,N=N.parent}while(N!=i.parent);return o.eE&&(m+=e(n)),_="",i.starts&&d(i.starts,""),o.rE?0:n.length}if(c=n,!s&&r(N.iR,c))throw new Error('Illegal lexeme "'+n+'" for mode "'+(N.cN||"<unnamed>")+'"');return _+=n,n.length||1}var p=h(t);if(!p)throw new Error('Unknown language: "'+t+'"');!function(e){function t(e){return e&&e.source||e}function r(r,n){return RegExp(t(r),"m"+(e.cI?"i":"")+(n?"g":""))}!function a(c,i){if(!c.compiled){if(c.compiled=!0,c.k=c.k||c.bK,c.k){var s={};function o(t,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");s[r[0]]=[t,r[1]?Number(r[1]):1]})}"string"==typeof c.k?o("keyword",c.k):Object.keys(c.k).forEach(function(e){o(e,c.k[e])}),c.k=s}c.lR=r(c.l||/\b[A-Za-z0-9_]+\b/,!0),i&&(c.bK&&(c.b=c.bK.split(" ").join("|")),c.b||(c.b=/\B|\b/),c.bR=r(c.b),c.e||c.eW||(c.e=/\B|\b/),c.e&&(c.eR=r(c.e)),c.tE=t(c.e)||"",c.eW&&i.tE&&(c.tE+=(c.e?"|":"")+i.tE)),c.i&&(c.iR=r(c.i)),void 0===c.r&&(c.r=1),c.c||(c.c=[]);var l=[];c.c.forEach(function(e){e.v?e.v.forEach(function(t){l.push(n(e,t))}):l.push("self"==e?c:e)}),c.c=l,c.c.forEach(function(e){a(e,c)}),c.starts&&a(c.starts,i);var u=c.c.map(function(e){return e.bK?"\\.?\\b("+e.b+")\\b\\.?":e.b}).concat([c.tE]).concat([c.i]).map(t).filter(Boolean);c.t=u.length?r(u.join("|"),!0):{exec:function(e){return null}},c.continuation={}}}(e)}(p);for(var N=o||p,m="",v=N;v!=p;v=v.parent)v.cN&&(m=u(v.cN,m,!0));var _="",E=0;try{for(var y,M,w=0;N.t.lastIndex=w,y=N.t.exec(a);)M=g(a.substr(w,y.index-w),y[0]),w=y.index+M;g(a.substr(w));for(v=N;v.parent;v=v.parent)v.cN&&(m+="</span>");return{r:E,value:m,language:t,top:N}}catch(t){if(-1!=t.message.indexOf("Illegal"))return{r:0,value:e(a)};throw t}}function i(t,r){r=r||l.languages||Object.keys(b);var n={r:0,value:e(t)},a=n;return r.forEach(function(e){if(h(e)){var r=c(e,t,!1);r.language=e,r.r>a.r&&(a=r),r.r>n.r&&(a=n,n=r)}}),a.language&&(n.second_best=a),n}function s(e){return l.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,t,r,n){return t.replace(/\t/g,l.tabReplace)})),l.useBR&&(e=e.replace(/\n/g,"<br>")),e}function o(r){var n,o=function e(r){return Array.prototype.map.call(r.childNodes,function(r){return 3==r.nodeType?l.useBR?r.nodeValue.replace(/\n/g,""):r.nodeValue:"br"==t(r)?"\n":e(r)}).join("")}(r),u=((n=r).className+" "+(n.parentNode?n.parentNode.className:"")).split(/\s+/).map(function(e){return e.replace(/^language-/,"")}).filter(function(e){return h(e)||"no-highlight"==e})[0];if("no-highlight"!=u){var b=u?c(u,o,!0):i(o),f=a(r);if(f.length){var d=document.createElementNS("http://www.w3.org/1999/xhtml","pre");d.innerHTML=b.value,b.value=function(r,n,a){var c=0,i="",s=[];function o(){return r.length&&n.length?r[0].offset!=n[0].offset?r[0].offset<n[0].offset?r:n:"start"==n[0].event?r:n:r.length?r:n}function l(r){i+="<"+t(r)+Array.prototype.map.call(r.attributes,function(t){return" "+t.nodeName+'="'+e(t.value)+'"'}).join("")+">"}function u(e){i+="</"+t(e)+">"}function b(e){("start"==e.event?l:u)(e.node)}for(;r.length||n.length;){var f=o();if(i+=e(a.substr(c,f[0].offset-c)),c=f[0].offset,f==r){s.reverse().forEach(u);do{b(f.splice(0,1)[0]),f=o()}while(f==r&&f.length&&f[0].offset==c);s.reverse().forEach(l)}else"start"==f[0].event?s.push(f[0].node):s.pop(),b(f.splice(0,1)[0])}return i+e(a.substr(c))}(f,a(d),o)}b.value=s(b.value),r.innerHTML=b.value,r.className+=" hljs "+(!u&&b.language||""),r.result={language:b.language,re:b.r},b.second_best&&(r.second_best={language:b.second_best.language,re:b.second_best.r})}}var l={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function u(){if(!u.called){u.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,o)}}var b={},f={};function h(e){return b[e]||b[f[e]]}this.highlight=c,this.highlightAuto=i,this.fixMarkup=s,this.highlightBlock=o,this.configure=function(e){l=n(l,e)},this.initHighlighting=u,this.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",u,!1),addEventListener("load",u,!1)},this.registerLanguage=function(e,t){var r=b[e]=t(this);r.aliases&&r.aliases.forEach(function(t){f[t]=e})},this.getLanguage=h,this.inherit=n,this.IR="[a-zA-Z][a-zA-Z0-9_]*",this.UIR="[a-zA-Z_][a-zA-Z0-9_]*",this.NR="\\b\\d+(\\.\\d+)?",this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",this.BNR="\\b(0b[01]+)",this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",this.BE={b:"\\\\[\\s\\S]",r:0},this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]},this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]},this.CLCM={cN:"comment",b:"//",e:"$"},this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"},this.HCM={cN:"comment",b:"#",e:"$"},this.NM={cN:"number",b:this.NR,r:0},this.CNM={cN:"number",b:this.CNR,r:0},this.BNM={cN:"number",b:this.BNR,r:0},this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]},this.TM={cN:"title",b:this.IR,r:0},this.UTM={cN:"title",b:this.UIR,r:0}};hljs.registerLanguage("javascript",function(e){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},e.ASM,e.QSM,e.CLCM,e.CBLCLM,e.CNM,{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBLCLM,e.REGEXP_MODE,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,c:[e.inherit(e.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[e.CLCM,e.CBLCLM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+e.IR,r:0}]}}),hljs.registerLanguage("xml",function(e){var t={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"},r={eW:!0,i:/</,r:0,c:[t,{cN:"attribute",b:"[A-Za-z0-9\\._:-]+",r:0},{b:"=",r:0,c:[{cN:"value",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html"],cI:!0,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"\x3c!--",e:"--\x3e",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[r],starts:{e:"</style>",rE:!0,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[r],starts:{e:"<\/script>",rE:!0,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},t,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ /><]+",r:0},r]}]}}),hljs.registerLanguage("markdown",function(e){return{c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].+?[\\)\\]]",rB:!0,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:"^\\[.+\\]:",e:"$",rB:!0,c:[{cN:"link_reference",b:"\\[",e:"\\]",eB:!0,eE:!0},{cN:"link_url",b:"\\s",e:"$"}]}]}}),hljs.registerLanguage("css",function(e){var t="[a-zA-Z-][a-zA-Z0-9_-]*",r={cN:"function",b:t+"\\(",e:"\\)",c:["self",e.NM,e.ASM,e.QSM]};return{cI:!0,i:"[=/|']",c:[e.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[r,e.ASM,e.QSM,e.NM]}]},{cN:"tag",b:t,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[e.CBLCLM,{cN:"rule",b:"[^\\s]",rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:!0,i:"[^\\s]",starts:{cN:"value",eW:!0,eE:!0,c:[r,e.NM,e.QSM,e.ASM,e.CBLCLM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}}),hljs.registerLanguage("http",function(e){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:!0,e:"$",c:[{cN:"string",b:" ",e:" ",eB:!0,eE:!0}]},{cN:"attribute",b:"^\\w",e:": ",eE:!0,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:!0}}]}}),hljs.registerLanguage("php",function(e){var t={cN:"variable",b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},r={cN:"preprocessor",b:/<\?(php)?|\?>/},n={cN:"string",c:[e.BE,r],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},a={v:[e.BNM,e.CNM]};return{cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.CLCM,e.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},r]},{cN:"comment",b:"__halt_compiler.+?;",eW:!0,k:"__halt_compiler",l:e.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[e.BE]},r,t,{cN:"function",bK:"function",e:/[;{]/,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",t,e.CBLCLM,n,a]}]},{cN:"class",bK:"class interface",e:"{",i:/[:\(\$"]/,c:[{bK:"extends implements",r:10},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},n,a]}}),hljs.registerLanguage("sql",function(e){return{cI:!0,i:/[<>]/,c:[{cN:"operator",b:"\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",e:";",eW:!0,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[e.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[e.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[e.BE]},e.CNM]},e.CBLCLM,{cN:"comment",b:"--",e:"$"}]}}),hljs.registerLanguage("ini",function(e){return{cI:!0,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:!0,k:"on off true false yes no",c:[e.QSM,e.NM],r:0}]}]}}),hljs.registerLanguage("coffeescript",function(e){var t={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"},r="[A-Za-z$_][0-9A-Za-z$_]*",n=e.inherit(e.TM,{b:r}),a={cN:"subst",b:/#\{/,e:/}/,k:t},c=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,a]},{b:/"/,e:/"/,c:[e.BE,a]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[a,e.HCM]},{b:"//[gim]*",r:0},{b:"/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"}]},{cN:"property",b:"@"+r},{b:"`",e:"`",eB:!0,eE:!0,sL:"javascript"}];return a.c=c,{k:t,c:c.concat([{cN:"comment",b:"###",e:"###"},e.HCM,{cN:"function",b:"("+r+"\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",e:"[-=]>",rB:!0,c:[n,{cN:"params",b:"\\(",rB:!0,c:[{b:/\(/,e:/\)/,k:t,c:["self"].concat(c)}]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[n]},n]},{cN:"attribute",b:r+":",e:":",rB:!0,eE:!0,r:0}])}}),hljs.registerLanguage("json",function(e){var t={literal:"true false null"},r=[e.QSM,e.CNM],n={cN:"value",e:",",eW:!0,eE:!0,c:r,k:t},a={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:!0,eE:!0,c:[e.BE],i:"\\n",starts:n}],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(n,{cN:null})],i:"\\S"};return r.splice(r.length,0,a,c),{c:r,k:t,i:"\\S"}});
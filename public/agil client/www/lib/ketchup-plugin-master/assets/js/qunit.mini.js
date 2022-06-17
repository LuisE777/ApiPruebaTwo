!function(e){var t={module:function(e,r){n.currentModule=e,i(function(){n.currentModule&&t.moduleDone(n.currentModule,n.moduleStats.bad,n.moduleStats.all),n.currentModule=e,n.moduleTestEnvironment=r,n.moduleStats={all:0,bad:0},t.moduleStart(e,r)})},asyncTest:function(e,n,r){2===arguments.length&&(r=n,n=0),t.test(e,n,r,!0)},test:function(o,s,a,m){var h,g,v='<span class="test-name">'+o+"</span>";2===arguments.length&&(a=s,s=null),s&&"object"==typeof s&&(g=s,s=null),n.currentModule&&(v='<span class="module-name">'+n.currentModule+"</span>: "+v),function(e){var t=n.filters.length,r=!1;if(!t)return!0;for(;t--;){var o=n.filters[t],s="!"==o.charAt(0);if(s&&(o=o.slice(1)),-1!==e.indexOf(o))return!s;s&&(r=!0)}return r}(n.currentModule+": "+o)&&(i(function(){h=d({setup:function(){},teardown:function(){}},n.moduleTestEnvironment),g&&d(h,g),t.testStart(o,h),t.current_testEnvironment=h,n.assertions=[],n.expected=s;var e=p("qunit-tests");if(e){var r=document.createElement("strong");r.innerHTML="Running "+v;var i=document.createElement("li");i.appendChild(r),i.id="current-test-output",e.appendChild(i)}try{n.pollution||u(),h.setup.call(h)}catch(e){t.ok(!1,"Setup failed on "+v+": "+e.message)}}),i(function(){m&&t.stop();try{a.call(h)}catch(e){c("Test "+v+" died, exception and test follows",e,a),t.ok(!1,"Died on test #"+(n.assertions.length+1)+": "+e.message),u(),n.blocking&&start()}}),i(function(){try{!function(e){var t=n.pollution;u();var r=l(t,n.pollution);r.length>0&&(ok(!1,"Introduced global variable(s): "+r.join(", ")),n.expected++);var o=l(n.pollution,t);o.length>0&&(ok(!1,"Deleted global variable(s): "+o.join(", ")),n.expected++)}(),h.teardown.call(h)}catch(e){t.ok(!1,"Teardown failed on "+v+": "+e.message)}}),i(function(){try{t.reset()}catch(e){c("reset() failed, following Test "+v+", exception and reset fn follows",e,reset)}n.expected&&n.expected!=n.assertions.length&&t.ok(!1,"Expected "+n.expected+" assertions, but "+n.assertions.length+" were run");var s=0,i=0,a=p("qunit-tests");if(n.stats.all+=n.assertions.length,n.moduleStats.all+=n.assertions.length,a){for(var u=document.createElement("ol"),l=0;l<n.assertions.length;l++){var d=n.assertions[l];(m=document.createElement("li")).className=d.result?"pass":"fail",m.innerHTML=d.message||"(no message)",u.appendChild(m),d.result?s++:(i++,n.stats.bad++,n.moduleStats.bad++)}0==i&&(u.style.display="none");var m,h=document.createElement("strong");if(h.innerHTML=v+" <b class='counts'>(<b class='failed'>"+i+"</b>, <b class='passed'>"+s+"</b>, "+n.assertions.length+")</b>",f(h,"click",function(){var e=h.nextSibling,t=e.style.display;e.style.display="none"===t?"block":"none"}),f(h,"dblclick",function(t){var n=t&&t.target?t.target:e.event.srcElement;"span"!=n.nodeName.toLowerCase()&&"b"!=n.nodeName.toLowerCase()||(n=n.parentNode),e.location&&"strong"===n.nodeName.toLowerCase()&&(e.location.search="?"+encodeURIComponent(function e(t){var n,r="";for(var o=0;t[o];o++)3===(n=t[o]).nodeType||4===n.nodeType?r+=n.nodeValue:8!==n.nodeType&&(r+=e(n.childNodes));return r}([n]).replace(/\(.+\)$/,"").replace(/(^\s*|\s*$)/g,"")))}),(m=p("current-test-output")).id="",m.className=i?"fail":"pass",m.removeChild(m.firstChild),m.appendChild(h),m.appendChild(u),i){var g=p("qunit-testrunner-toolbar");g&&(g.style.display="block",p("qunit-filter-pass").disabled=null,p("qunit-filter-missing").disabled=null)}}else for(l=0;l<n.assertions.length;l++)n.assertions[l].result||(i++,n.stats.bad++,n.moduleStats.bad++);t.testDone(o,i,n.assertions.length),e.setTimeout||n.queue.length||r()}),i(r))},expect:function(e){n.expected=e},ok:function(e,r){r=o(r),t.log(e,r),n.assertions.push({result:!!e,message:r})},equal:function(e,t,n){s(t==e,e,t,n)},notEqual:function(e,t,n){s(t!=e,e,t,n)},deepEqual:function(e,n,r){s(t.equiv(e,n),e,n,r)},notDeepEqual:function(e,n,r){s(!t.equiv(e,n),e,n,r)},strictEqual:function(e,t,n){s(t===e,e,t,n)},notStrictEqual:function(e,t,n){s(t!==e,e,t,n)},raises:function(e,t){try{e(),ok(!1,t)}catch(e){ok(!0,t)}},start:function(){e.setTimeout?e.setTimeout(function(){n.timeout&&clearTimeout(n.timeout),n.blocking=!1,a()},13):(n.blocking=!1,a())},stop:function(r){n.blocking=!0,r&&e.setTimeout&&(n.timeout=e.setTimeout(function(){t.ok(!1,"Test timed out"),t.start()},r))}};t.equals=t.equal,t.same=t.deepEqual;var n={queue:[],blocking:!0};function r(){if(n.doneTimer&&e.clearTimeout&&(e.clearTimeout(n.doneTimer),n.doneTimer=null),n.queue.length)n.doneTimer=e.setTimeout(function(){n.queue.length?i(r):r()},13);else{n.autorun=!0,n.currentModule&&t.moduleDone(n.currentModule,n.moduleStats.bad,n.moduleStats.all);var o=p("qunit-banner"),s=p("qunit-tests"),a=["Tests completed in ",+new Date-n.started," milliseconds.<br/>",'<span class="passed">',n.stats.all-n.stats.bad,'</span> tests of <span class="total">',n.stats.all,'</span> passed, <span class="failed">',n.stats.bad,"</span> failed."].join("");if(o&&(o.className=n.stats.bad?"qunit-fail":"qunit-pass"),s){var u=p("qunit-testresult");u||((u=document.createElement("p")).id="qunit-testresult",u.className="result",s.parentNode.insertBefore(u,s.nextSibling)),u.innerHTML=a}t.done(n.stats.bad,n.stats.all)}}function o(e){return(e=null===e?"":e+"").replace(/[\&"<>\\]/g,function(e){switch(e){case"&":return"&amp;";case"\\":return"\\\\";case'"':return'"';case"<":return"&lt;";case">":return"&gt;";default:return e}})}function s(e,r,s,i){var a=(i='<span class="test-message">'+(i=o(i)||(e?"okay":"failed"))+"</span>")+', expected: <span class="test-expected">'+(s=o(t.jsDump.parse(s)))+"</span>";(r=o(t.jsDump.parse(r)))!=s&&(a+=' result: <span class="test-actual">'+r+"</span>, diff: "+t.diff(s,r)),t.log(e,a),n.assertions.push({result:!!e,message:a})}function i(e){n.queue.push(e),n.autorun&&!n.blocking&&a()}function a(){for(var e=(new Date).getTime();n.queue.length&&!n.blocking;){if(!(n.updateRate<=0||(new Date).getTime()-e<n.updateRate)){setTimeout(a,13);break}n.queue.shift()()}}function u(){if(n.pollution=[],n.noglobals)for(var t in e)n.pollution.push(t)}function l(e,t){for(var n=e.slice(),r=0;r<n.length;r++)for(var o=0;o<t.length;o++)if(n[r]===t[o]){n.splice(r,1),r--;break}return n}function c(t,n,r){"undefined"!=typeof console&&console.error&&console.warn?(console.error(t),console.error(n),console.warn(r.toString())):e.opera&&opera.postError&&opera.postError(t,n,r.toString)}function d(e,t){for(var n in t)e[n]=t[n];return e}function f(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):n()}function p(e){return!("undefined"==typeof document||!document||!document.getElementById)&&document.getElementById(e)}!function(){for(var r=e.location||{search:"",protocol:"file:"},o=r.search.slice(1).split("&"),s=0;s<o.length;s++)o[s]=decodeURIComponent(o[s]),"noglobals"===o[s]?(o.splice(s,1),s--,n.noglobals=!0):o[s].search("=")>-1&&(o.splice(s,1),s--);n.filters=o,t.isLocal=!("file:"!==r.protocol)}(),"undefined"==typeof exports||"undefined"==typeof require?(d(e,t),e.QUnit=t):(d(exports,t),exports.QUnit=t),d(t,{config:n,init:function(){d(n,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:+new Date,updateRate:1e3,blocking:!1,autostart:!0,autorun:!1,assertions:[],filters:[],queue:[]});var e=p("qunit-tests"),t=p("qunit-banner"),r=p("qunit-testresult");e&&(e.innerHTML=""),t&&(t.className=""),r&&r.parentNode.removeChild(r)},reset:function(){e.jQuery&&jQuery("#main, #qunit-fixture").html(n.fixture)},triggerEvent:function(e,t,n){document.createEvent?((n=document.createEvent("MouseEvents")).initMouseEvent(t,!0,!0,e.ownerDocument.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)):e.fireEvent&&e.fireEvent("on"+t)},is:function(e,n){return t.objectType(n)==e},objectType:function(e){if(void 0===e)return"undefined";if(null===e)return"null";var t=Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]||"";switch(t){case"Number":return isNaN(e)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return t.toLowerCase()}return"object"==typeof e?"object":void 0},begin:function(){},done:function(e,t){},log:function(e,t){},testStart:function(e,t){},testDone:function(e,t,n){},moduleStart:function(e,t){},moduleDone:function(e,t,n){}}),"undefined"!=typeof document&&"complete"!==document.readyState||(n.autorun=!0),f(e,"load",function(){t.begin();var e=d({},n);t.init(),d(n,e),n.blocking=!1;var r=p("qunit-userAgent");r&&(r.innerHTML=navigator.userAgent);var o=p("qunit-header");o&&(o.innerHTML='<a href="'+location.href+'">'+o.innerHTML+"</a>");var s=p("qunit-testrunner-toolbar");if(s){s.style.display="none";var i=document.createElement("input");i.type="checkbox",i.id="qunit-filter-pass",i.disabled=!0,f(i,"click",function(){for(var e=document.getElementsByTagName("li"),t=0;t<e.length;t++)e[t].className.indexOf("pass")>-1&&(e[t].style.display=i.checked?"none":"")}),s.appendChild(i);var a=document.createElement("label");a.setAttribute("for","qunit-filter-pass"),a.innerHTML="Hide passed tests",s.appendChild(a);var u=document.createElement("input");u.type="checkbox",u.id="qunit-filter-missing",u.disabled=!0,f(u,"click",function(){for(var e=document.getElementsByTagName("li"),t=0;t<e.length;t++)e[t].className.indexOf("fail")>-1&&e[t].innerHTML.indexOf("missing test - untested code is broken code")>-1&&(e[t].parentNode.parentNode.style.display=u.checked?"none":"block")}),s.appendChild(u),(a=document.createElement("label")).setAttribute("for","qunit-filter-missing"),a.innerHTML="Hide missing tests (untested code is broken code)",s.appendChild(a)}var l=p("main")||p("qunit-fixture");l&&(n.fixture=l.innerHTML),n.autostart&&t.start()}),t.equiv=function(){var e,n=[],r=[];var o=function(){function o(e,t){return e instanceof t.constructor||t instanceof e.constructor?t==e:t===e}return{string:o,boolean:o,number:o,null:o,undefined:o,nan:function(e){return isNaN(e)},date:function(e,n){return"date"===t.objectType(e)&&n.valueOf()===e.valueOf()},regexp:function(e,n){return"regexp"===t.objectType(e)&&n.source===e.source&&n.global===e.global&&n.ignoreCase===e.ignoreCase&&n.multiline===e.multiline},function:function(){var e=n[n.length-1];return e!==Object&&void 0!==e},array:function(n,o){var s,i,a,u;if("array"!==t.objectType(n))return!1;if((u=o.length)!==n.length)return!1;for(r.push(o),s=0;s<u;s++){for(a=!1,i=0;i<r.length;i++)r[i]===o[s]&&(a=!0);if(!a&&!e(o[s],n[s]))return r.pop(),!1}return r.pop(),!0},object:function(t,o){var s,i,a,u=!0,l=[],c=[];if(o.constructor!==t.constructor)return!1;n.push(o.constructor),r.push(o);for(s in o){for(a=!1,i=0;i<r.length;i++)r[i]===o[s]&&(a=!0);if(l.push(s),!a&&!e(o[s],t[s])){u=!1;break}}n.pop(),r.pop();for(s in t)c.push(s);return u&&e(l.sort(),c.sort())}}}();return e=function(){var e,n,r=Array.prototype.slice.apply(arguments);return r.length<2||(e=r[0],n=r[1],(e===n||null!==e&&null!==n&&void 0!==e&&void 0!==n&&t.objectType(e)===t.objectType(n)&&function(e,n,r){var o=t.objectType(e);if(o)return"function"===t.objectType(n[o])?n[o].apply(n,r):n[o]}(e,o,[n,e]))&&arguments.callee.apply(this,r.splice(1,r.length-1)))}}(),t.jsDump=function(){function e(e){return'"'+e.toString().replace(/"/g,'\\"')+'"'}function n(e){return e+""}function r(e,t,n){var r=i.separator(),o=i.indent(),s=i.indent(1);return t.join&&(t=t.join(","+r+s)),t?[e,s+t,o+n].join(r):e+n}function o(e){var t=e.length,n=Array(t);for(this.up();t--;)n[t]=this.parse(e[t]);return this.down(),r("[",n,"]")}var s=/^function (\w+)/,i={parse:function(e,t){var n=this.parsers[t||this.typeOf(e)];return"function"==(t=typeof n)?n.call(this,e):"string"==t?n:this.parsers.error},typeOf:function(e){return null===e?"null":void 0===e?"undefined":t.is("RegExp",e)?"regexp":t.is("Date",e)?"date":t.is("Function",e)?"function":e.setInterval&&e.document&&!e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":"object"==typeof e&&"number"==typeof e.length&&e.length>=0?"array":typeof e},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&nbsp;":" "},indent:function(e){if(!this.multiline)return"";var t=this.indentChar;return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&nbsp;")),Array(this._depth_+(e||0)).join(t)},up:function(e){this._depth_+=e||1},down:function(e){this._depth_-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:n,join:r,_depth_:1,parsers:{window:"[Window]",document:"[Document]",error:"[ERROR]",unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",n="name"in e?e.name:(s.exec(e)||[])[1];return n&&(t+=" "+n),r(t=[t+="(",this.parse(e,"functionArgs"),"){"].join(""),this.parse(e,"functionCode"),"}")},array:o,nodelist:o,arguments:o,object:function(e){var t=[];this.up();for(var n in e)t.push(this.parse(n,"key")+": "+this.parse(e[n]));return this.down(),r("{",t,"}")},node:function(e){var t=this.HTML?"&lt;":"<",n=this.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),o=t+r;for(var s in this.DOMAttrs){var i=e[this.DOMAttrs[s]];i&&(o+=" "+s+"="+this.parse(i,"attribute"))}return o+n+t+"/"+r+n},functionArgs:function(e){var t=e.length;if(!t)return"";for(var n=Array(t);t--;)n[t]=String.fromCharCode(97+t);return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:n,number:n,boolean:n},DOMAttrs:{id:"id",name:"name",class:"className"},HTML:!1,indentChar:"   ",multiline:!1};return i}(),t.diff=function(){return function(e,t){e=e.replace(/\s+$/,""),t=t.replace(/\s+$/,"");var n=function(e,t){for(var n=new Object,r=new Object,o=0;o<t.length;o++)null==n[t[o]]&&(n[t[o]]={rows:new Array,o:null}),n[t[o]].rows.push(o);for(o=0;o<e.length;o++)null==r[e[o]]&&(r[e[o]]={rows:new Array,n:null}),r[e[o]].rows.push(o);for(var o in n)1==n[o].rows.length&&void 0!==r[o]&&1==r[o].rows.length&&(t[n[o].rows[0]]={text:t[n[o].rows[0]],row:r[o].rows[0]},e[r[o].rows[0]]={text:e[r[o].rows[0]],row:n[o].rows[0]});for(o=0;o<t.length-1;o++)null!=t[o].text&&null==t[o+1].text&&t[o].row+1<e.length&&null==e[t[o].row+1].text&&t[o+1]==e[t[o].row+1]&&(t[o+1]={text:t[o+1],row:t[o].row+1},e[t[o].row+1]={text:e[t[o].row+1],row:o+1});for(o=t.length-1;o>0;o--)null!=t[o].text&&null==t[o-1].text&&t[o].row>0&&null==e[t[o].row-1].text&&t[o-1]==e[t[o].row-1]&&(t[o-1]={text:t[o-1],row:t[o].row-1},e[t[o].row-1]={text:e[t[o].row-1],row:o-1});return{o:e,n:t}}(""==e?[]:e.split(/\s+/),""==t?[]:t.split(/\s+/)),r="",o=e.match(/\s+/g);null==o?o=[" "]:o.push(" ");var s=t.match(/\s+/g);if(null==s?s=[" "]:s.push(" "),0==n.n.length)for(var i=0;i<n.o.length;i++)r+="<del>"+n.o[i]+o[i]+"</del>";else{if(null==n.n[0].text)for(t=0;t<n.o.length&&null==n.o[t].text;t++)r+="<del>"+n.o[t]+o[t]+"</del>";for(i=0;i<n.n.length;i++)if(null==n.n[i].text)r+="<ins>"+n.n[i]+s[i]+"</ins>";else{var a="";for(t=n.n[i].row+1;t<n.o.length&&null==n.o[t].text;t++)a+="<del>"+n.o[t]+o[t]+"</del>";r+=" "+n.n[i].text+s[i]+a}}return r}}()}(this);
!function(){"use strict";var e=function(e,n){var t=d,o=f;null===t&&console.warn("computations created without a root or parent will never be disposed");var u=new r(e,n);return d=f=u,null===p?function(e){p=c,c.changes.reset(),c.updates.reset();try{e.value=e.fn(e.value),(c.changes.count>0||c.updates.count>0)&&(c.time++,v(c))}finally{p=d=f=null}}(u):u.value=u.fn(u.value),t&&t!==h&&(null===t.owned?t.owned=[u]:t.owned.push(u)),d=t,f=o,function(){if(null!==f){if(u.age===c.time){if(u.state===s)throw new Error("circular dependency");C(u)}!function(e,n){null===e.log&&(e.log=new l);m(e.log,n)}(u,f)}return u.value}};Object.defineProperty(e,"default",{value:e}),e.root=function(e){var n=d,t=0===e.length?h:new r(null,null),l=void 0,o=0===e.length?null:function(){null!==p?c.disposes.add(t):k(t)};return d=t,null===p?l=function(e,n,t){try{return null===n?e():e(n)}finally{d=t}}(e,o,n):(l=null===o?e():e(o),d=n),l},e.on=function(n,t,r,l){var o;return Array.isArray(n)&&(o=n,n=function(){for(var e=0;e<o.length;e++)o[e]()}),l=!!l,e(u,r);function u(e){var r=f;return n(),l?l=!1:(f=null,e=t(e),f=r),e}},e.data=function(e){var n=new t(e);return function(e){if(arguments.length>0){if(null!==p)if(n.pending!==u){if(e!==n.pending)throw new Error("conflicting changes: "+e+" !== "+n.pending)}else n.pending=e,c.changes.add(n);else null!==n.log?(n.pending=e,c.changes.add(n),g()):n.value=e;return e}return null!==f&&function(e,n){null===e.log&&(e.log=new l);m(e.log,n)}(n,f),n.value}},e.value=function(n,t){var r=e.data(n),l=-1;return function(e){if(0===arguments.length)return r();if(!(t?t(n,e):n===e)){var o=c.time;if(l===o)throw new Error("conflicting values: "+e+" is not the same as "+n);l=o,n=e,r(e)}return e}},e.freeze=function(e){var n=void 0;if(null!==p)n=e();else{(p=c).changes.reset();try{n=e(),g()}finally{p=null}}return n},e.sample=function(e){var n,t=f;return null!==t?(f=null,n=e(),f=t):n=e(),n},e.cleanup=function(e){null!==d?null===d.cleanups?d.cleanups=[e]:d.cleanups.push(e):console.warn("cleanups created without a root or parent will never be run")};var n=function(){return function(){this.time=0,this.changes=new o,this.updates=new o,this.disposes=new o}}(),t=function(){return function(e){this.value=e,this.pending=u,this.log=null}}(),r=function(){return function(e,n){this.fn=e,this.value=n,this.state=i,this.source1=null,this.source1slot=0,this.sources=null,this.sourceslots=null,this.log=null,this.owned=null,this.cleanups=null,this.age=c.time}}(),l=function(){return function(){this.node1=null,this.node1slot=0,this.nodes=null,this.nodeslots=null}}(),o=function(){function e(){this.items=[],this.count=0}return e.prototype.reset=function(){this.count=0},e.prototype.add=function(e){this.items[this.count++]=e},e.prototype.run=function(e){for(var n=this.items,t=0;t<this.count;t++)e(n[t]),n[t]=null;this.count=0},e}(),u={},i=0,a=1,s=2,c=new n,p=null,f=null,d=null,h=new r(null,null);function m(e,n){var t,r=null===n.source1?-1:null===n.sources?0:n.sources.length;null===e.node1?(e.node1=n,e.node1slot=r,t=-1):null===e.nodes?(e.nodes=[n],e.nodeslots=[r],t=0):(t=e.nodes.length,e.nodes.push(n),e.nodeslots.push(r)),null===n.source1?(n.source1=e,n.source1slot=t):null===n.sources?(n.sources=[e],n.sourceslots=[t]):(n.sources.push(e),n.sourceslots.push(t))}function g(){var e=d;c.updates.reset(),c.time++;try{v(c)}finally{p=f=null,d=e}}function v(e){var n=p,t=0;for(p=e,e.disposes.reset();0!==e.changes.count||0!==e.updates.count||0!==e.disposes.count;)if(t>0&&e.time++,e.changes.run(y),e.updates.run(C),e.disposes.run(k),t++>1e5)throw new Error("Runaway clock detected");p=n}function y(e){e.value=e.pending,e.pending=u,e.log&&S(e.log)}function S(e){var n=e.node1,t=e.nodes;if(null!==n&&b(n),null!==t)for(var r=0,l=t.length;r<l;r++)b(t[r])}function b(e){var n=c.time;e.age<n&&(e.age=n,e.state=a,c.updates.add(e),null!==e.owned&&function e(n){for(var t=0;t<n.length;t++){var r=n[t];r.age=c.time,r.state=i,null!==r.owned&&e(r.owned)}}(e.owned),null!==e.log&&S(e.log))}function C(e){if(e.state===a){var n=d,t=f;d=f=e,e.state=s,x(e,!1),e.value=e.fn(e.value),e.state=i,d=n,f=t}}function x(e,n){var t,r,l=e.source1,o=e.sources,u=e.sourceslots,i=e.cleanups,a=e.owned;if(null!==i){for(t=0;t<i.length;t++)i[t](n);e.cleanups=null}if(null!==a){for(t=0;t<a.length;t++)k(a[t]);e.owned=null}if(null!==l&&(w(l,e.source1slot),e.source1=null),null!==o)for(t=0,r=o.length;t<r;t++)w(o.pop(),u.pop())}function w(e,n){var t,r,l=e.nodes,o=e.nodeslots;-1===n?e.node1=null:(t=l.pop(),r=o.pop(),n!==l.length&&(l[n]=t,o[n]=r,-1===r?t.source1slot=n:t.sourceslots[r]=n))}function k(e){e.fn=null,e.log=null,x(e,!0)}var A=3;var T=-1,E=-2,X=0,J=16,U=1<<J,j=U-1;function N(e,n,t){var r,l,o,u=t.length,i=0,a=n.length-1,s=0,c=u-1,p=n[i],f=t[s],d=n[a],h=t[c],m=d.nextSibling,g=!0;e:for(;g;){for(g=!1;P(f,p,s,t);){if(i++,++s>c||i>a)break e;f=t[s],p=n[i]}for(;P(h,d,c,t);){if(m=d,a--,s>--c||i>a)break e;h=t[c],d=n[a]}for(;P(f,d,s,t);){if(g=!0,e.insertBefore(d,p),a--,++s>c||i>a)break e;f=t[s],d=n[a]}for(;P(h,p,c,t);){if(g=!0,null===m?e.appendChild(p):e.insertBefore(p,m),m=p,i++,s>--c||i>a)break e;h=t[c],p=n[i]}}if(s>c)for(;i<=a;)e.removeChild(n[a]),a--;else if(i>a)for(;s<=c;)L(e,t[s],m,s,t),s++;else{var v=[];for(r=i,l=(i<<J)+(X=(X+1)%U);r<=a;r++,l+=U)void 0===(p=n[r]).__surplus_order?Object.defineProperty(p,"__surplus_order",{value:l,writable:!0}):p.__surplus_order=l,p instanceof Text&&v.push(r);var y=new Array(c-s+1),S=[],b=0;for(r=s;r<=c;r++)"string"==typeof(f=t[r])?(S.push(r),y[r-s]=T):void 0!==(l=f.__surplus_order)&&(l&j)===X?(l>>=J,y[r-s]=l,n[l]=null,b++):y[r-s]=T;if(0!==b||0!==i||a!==n.length-1){var C=function(e){for(var n=[],t=[],r=-1,l=new Array(e.length),o=0,u=e.length;o<u;o++){var i=e[o];if(!(i<0)){var a=q(n,i);-1!==a&&(l[o]=t[a]),a===r?(n[++r]=i,t[r]=o):i<n[a+1]&&(n[a+1]=i,t[a+1]=o)}}for(o=t[r];r>=0;o=l[o],r--)n[r]=o;return n}(y);for(r=0;r<C.length;r++)y[C[r]]=E;var x=0,w=0,k=0;for(r=0,l=0,o=0;r<S.length;r++){for(x=S[r];l<C.length&&(w=C[l])<x-s;)l++;for(;o<v.length&&(k=v[o],0!==l)&&k<y[C[l-1]];)o++;o<v.length&&(l===C.length||k<y[w])?(p=n[k],f=t[x],p.data!==f&&(p.data=f),n[k]=null,t[x]=p,y[x]=E,o++):t[x]=document.createTextNode(t[x])}for(;i<=a;)null!==(p=n[i])&&e.removeChild(p),i++;for(;s<=c;)h=t[c],y[c-s]!==E&&(null===m?e.appendChild(h):e.insertBefore(h,m)),m=h,c--}else for(R(e);s<=c;)L(e,t[s],null,s,t),s++}}function P(e,n,t,r){return e===n||"string"==typeof e&&n instanceof Text&&(n.data!==e&&(n.data=e),r[t]=n,!0)}function _(e,n,t,r){for(var l;t<r;t++)(l=n[t])instanceof Node?e.appendChild(l):(l=n[t]=document.createTextNode(l),e.appendChild(l))}function L(e,n,t,r,l){"string"==typeof n&&(n=l[r]=document.createTextNode(n)),null===t?e.appendChild(n):e.insertBefore(n,t)}function R(e){e.textContent=""}function q(e,n){var t=-1,r=e.length;if(r>0&&e[r-1]<=n)return r-1;for(;r-t>1;){var l=Math.floor((t+r)/2);e[l]>n?r=l:t=l}return t}var F="http://www.w3.org/2000/svg";function O(e,n,t){!1===t||null===t||void 0===t?e.removeAttribute(n):e.setAttribute(n,t)}function M(e,n,t,r){!1===r||null===r||void 0===r?e.removeAttributeNS(n,t):e.setAttributeNS(n,t,r)}var z={style:["style",null,3],ref:["ref",null,2],fn:["fn",null,2],class:["className",null,0],for:["htmlFor",null,0],"accept-charset":["acceptCharset",null,0],"http-equiv":["httpEquiv",null,0],onDoubleClick:["ondblclick",null,0],spellCheck:["spellcheck",null,0],allowFullScreen:["allowFullscreen",null,0],autoCapitalize:["autocapitalize",null,0],autoFocus:["autofocus",null,0],autoPlay:["autoplay",null,0],role:["role",null,1]},I={style:["style",null,3],ref:["ref",null,2],fn:["fn",null,2],className:["class",null,1],htmlFor:["for",null,1],tabIndex:["tabindex",null,1],onDoubleClick:["ondblclick",null,0],allowReorder:["allowReorder",null,1],attributeName:["attributeName",null,1],attributeType:["attributeType",null,1],autoReverse:["autoReverse",null,1],baseFrequency:["baseFrequency",null,1],calcMode:["calcMode",null,1],clipPathUnits:["clipPathUnits",null,1],contentScriptType:["contentScriptType",null,1],contentStyleType:["contentStyleType",null,1],diffuseConstant:["diffuseConstant",null,1],edgeMode:["edgeMode",null,1],externalResourcesRequired:["externalResourcesRequired",null,1],filterRes:["filterRes",null,1],filterUnits:["filterUnits",null,1],gradientTransform:["gradientTransform",null,1],gradientUnits:["gradientUnits",null,1],kernelMatrix:["kernelMatrix",null,1],kernelUnitLength:["kernelUnitLength",null,1],keyPoints:["keyPoints",null,1],keySplines:["keySplines",null,1],keyTimes:["keyTimes",null,1],lengthAdjust:["lengthAdjust",null,1],limitingConeAngle:["limitingConeAngle",null,1],markerHeight:["markerHeight",null,1],markerUnits:["markerUnits",null,1],maskContentUnits:["maskContentUnits",null,1],maskUnits:["maskUnits",null,1],numOctaves:["numOctaves",null,1],pathLength:["pathLength",null,1],patternContentUnits:["patternContentUnits",null,1],patternTransform:["patternTransform",null,1],patternUnits:["patternUnits",null,1],pointsAtX:["pointsAtX",null,1],pointsAtY:["pointsAtY",null,1],pointsAtZ:["pointsAtZ",null,1],preserveAlpha:["preserveAlpha",null,1],preserveAspectRatio:["preserveAspectRatio",null,1],primitiveUnits:["primitiveUnits",null,1],refX:["refX",null,1],refY:["refY",null,1],repeatCount:["repeatCount",null,1],repeatDur:["repeatDur",null,1],requiredExtensions:["requiredExtensions",null,1],requiredFeatures:["requiredFeatures",null,1],specularConstant:["specularConstant",null,1],specularExponent:["specularExponent",null,1],spreadMethod:["spreadMethod",null,1],startOffset:["startOffset",null,1],stdDeviation:["stdDeviation",null,1],stitchTiles:["stitchTiles",null,1],surfaceScale:["surfaceScale",null,1],systemLanguage:["systemLanguage",null,1],tableValues:["tableValues",null,1],targetX:["targetX",null,1],targetY:["targetY",null,1],textLength:["textLength",null,1],viewBox:["viewBox",null,1],viewTarget:["viewTarget",null,1],xChannelSelector:["xChannelSelector",null,1],yChannelSelector:["yChannelSelector",null,1],zoomAndPan:["zoomAndPan",null,1]},D=/-/,B=/^style-/,G=/^(on|style)/,Z=/[a-z][A-Z]/g,$=/^on[A-Z]/,V=/\-(?:[a-z]|$)/g,Y=/^(style)([A-Z])/,H={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},W=new RegExp("^("+Object.keys(H).join("|")+")-(.*)"),Q=function(e,n){var t=n?I:z,r=t[e];if(r)return r;var l=n&&!function(e){return G.test(e)}(e)||!n&&function(e){return D.test(e)&&!B.test(e)}(e),o=l?function(e){return e.replace(Z,function(e){return e[0]+"-"+e[1]}).toLowerCase()}(e):function(e){var n=e.replace(V,function(e){return 1===e.length?"":e[1].toUpperCase()});return $.test(n)?n.toLowerCase():n}(e);if(o!==e&&(r=t[o]))return r;var u,i,a=l?function(e){var n=W.exec(e);return n?[n[2],H[n[1]],1]:[e,null,1]}(o):(u=o,(i=Y.exec(u))?[i[2].toLowerCase()+u.substr(i[0].length),i[1],0]:[u,null,0]);return t[e]=a};function K(e,n){for(var t=Object.keys(n),r=0,l=t.length;r<l;r++){var o=t[r];e[o]=n[o]}}function ee(e,n,t,r){var l=Q(n,r),o=l[0],u=l[1],i=3&l[2];0===i?(u&&(e=e[u]),e[o]=t):1===i?u?M(e,u,o,t):O(e,o,t):3===i&&t&&"object"==typeof t&&K(e.style,t)}var ne=Object.freeze({insert:function n(t,r){var l=t.start.parentNode,o=t.start,u=null,i=typeof r;for("string"===i||"number"===i?(r=r.toString(),o.nodeType===A?(o.data=r,u=o):(r=document.createTextNode(r),l.replaceChild(r,o),t.end===o&&(t.end=r),t.start=u=r)):r instanceof Node?(o!==r&&(l.replaceChild(r,o),t.end===o&&(t.end=r),t.start=r),u=r):Array.isArray(r)?function e(n){for(var r=0,i=n.length;r<i;r++){var a=n[r];u===t.end?a instanceof Node?u=t.end=u.nextSibling?l.insertBefore(a,u.nextSibling):l.appendChild(a):a instanceof Array?e(a):null!==a&&void 0!==a&&!1!==a&&!0!==a&&(a=document.createTextNode(a.toString()),u=t.end=u.nextSibling?l.insertBefore(a,u.nextSibling):l.appendChild(a)):a instanceof Node?(o!==a?null===u?(t.end===a&&(t.end=a.previousSibling),l.replaceChild(a,o),t.start=a,t.end===o&&(t.end=a),o=a.nextSibling):o.nextSibling===a&&o!==a.nextSibling&&o!==t.end?(l.removeChild(o),o=a.nextSibling):(t.end===a&&(t.end=a.previousSibling),l.insertBefore(a,o)):o=o.nextSibling,u=a):a instanceof Array?e(a):null!==a&&void 0!==a&&!0!==a&&!1!==a&&(a=a.toString(),o.nodeType===A?(o.data=a,null===u&&(t.start=o),o=(u=o).nextSibling):(a=document.createTextNode(a),l.insertBefore(a,o),null===u&&(t.start=a),u=a))}}(r):r instanceof Function?(e(function(){n(t,r())}),u=t.end):null!==r&&void 0!==r&&!0!==r&&!1!==r&&(r=r.toString(),o.nodeType===A?(o.data=r,u=o):(r=document.createTextNode(r),l.replaceChild(r,o),t.end===o&&(t.end=r),t.start=u=r)),null===u&&(t.start===l.firstChild&&t.end===l.lastChild&&t.start!==t.end?(l.textContent="",r=document.createTextNode(""),l.appendChild(r),u=t.start=t.end=r):o.nodeType===A?(o.data="",u=o):(r=document.createTextNode(""),l.replaceChild(r,o),t.end===o&&(t.end=r),t.start=u=r));u!==t.end;)o=t.end,t.end=o.previousSibling,l.removeChild(o);return t},content:function n(t,r,l){var o=typeof r;if(l===r);else if("string"===o)l=""!==l&&"string"==typeof l?t.firstChild.data=r:t.textContent=r;else if("number"===o)r=r.toString(),l=""!==l&&"string"==typeof l?t.firstChild.data=r:t.textContent=r;else if(null==r||"boolean"===o)R(t),l="";else if("function"===o)e(function(){l=n(t,r(),l)});else if(r instanceof Node)Array.isArray(l)?0===l.length?t.appendChild(r):1===l.length?t.replaceChild(r,l[0]):(R(t),t.appendChild(r)):""===l?t.appendChild(r):t.replaceChild(r,t.firstChild),l=r;else{if(!Array.isArray(r))throw new Error("content must be Node, stringable, or array of same");var u=function e(n,t){for(var r=0,l=t.length;r<l;r++){var o=t[r];o instanceof Node?n.push(o):null==o||!0===o||!1===o||(Array.isArray(o)?e(n,o):"string"==typeof o?n.push(o):n.push(o.toString()))}return n}([],r);0===u.length?R(t):Array.isArray(l)?0===l.length?_(t,u,0,u.length):N(t,l,u):""===l?_(t,u,0,u.length):N(t,[t.firstChild],u),l=u}return l},spread:function(e,n,t){for(var r=Object.keys(n),l=0,o=r.length;l<o;l++){var u=r[l];ee(e,u,n[u],t)}},assign:K,S:e,createElement:function(e,n,t){var r=document.createElement(e);return n&&(r.className=n),t&&t.appendChild(r),r},createSvgElement:function(e,n,t){var r=document.createElementNS(F,e);return n&&r.setAttribute("class",n),t&&t.appendChild(r),r},createComment:function(e,n){var t=document.createComment(e);return n.appendChild(t),t},createTextNode:function(e,n){var t=document.createTextNode(e);return n.appendChild(t),t},setAttribute:O,setAttributeNS:M}),te=/<\/?(?=\w)|\/?>|<!--|-->|=|\{\.\.\.|\)|\(|\[|\]|\{|\}|"|'|`|\$|\/\/|\n|\/\*|\*\/|(?:[^<>=\/()[\]{}"'`$\n*-]|(?!-->)-|\/(?![>/*])|\*(?!\/)|(?!<\/?\w|<!--)<\/?)+/g;var re,le="Program",oe="CodeText",ue="EmbeddedCode";!function(e){e[e.HTML=0]="HTML",e[e.SVG=1]="SVG",e[e.SubComponent=2]="SubComponent"}(re||(re={}));var ie="JSXElement",ae="JSXText",se="JSXComment",ce="JSXInsert",pe="JSXStaticField",fe="JSXDynamicField",de="JSXSpread",he="JSXStyleProperty",me="JSXReference",ge="JSXFunction",ve={identifier:/^[a-zA-Z][A-Za-z0-9_-]*(\.[A-Za-z0-9_-]+)*/,stringEscapedEnd:/[^\\](\\\\)*\\$/,leadingWs:/^\s+/,hasNonWs:/\S/,refProp:/^ref\d*$/,fnProp:/^fn\d*$/,styleProp:/^style$/,badStaticProp:/^(ref\d*|fn\d*|style)$/},ye={"(":")","[":"]","{":"}","{...":"}"};var Se={locs:/(\n)|(\u0000(\d+),(\d+)\u0000)/g},be="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef",Ce="ghijklmnopqrstuvwxyz0123456789+/";function xe(e){return"\0"+e.line+","+e.col+"\0"}function we(e,n,t){var r=function(e){var n=[],t=[],r=0,l=0,o=0,u=0,i=0,a=e.replace(Se.locs,function(e,a,s,c,p,f){if(a)return t.push(n),n=[],u=f+1,i=0,r=0,a;var d=f-u-i,h=parseInt(c,10),m=parseInt(p,10);return n.push(ke(d-r)+"A"+ke(h-l)+ke(m-o)),i+=s.length,r=d,l=h,o=m,""});return t.push(n),{src:a,mappings:t.map(function(e){return e.join(",")}).join(";")}}(e),l=function(e,n,t){return{version:3,file:t.targetfile,sources:[t.sourcefile],sourcesContent:[n],names:[],mappings:e}}(r.mappings,n,t);return{src:r.src,map:l}}function ke(e){var n,t="",r=(e=e<0?1+(-e<<1):e<<1).toString(32);for(n=r.length-1;n>0;n--)t+=Ce[parseInt(r[n],32)];return t+=be[parseInt(r[0],32)]}var Ae={style:["style",null,3],ref:["ref",null,2],fn:["fn",null,2],class:["className",null,0],for:["htmlFor",null,0],"accept-charset":["acceptCharset",null,0],"http-equiv":["httpEquiv",null,0],onDoubleClick:["ondblclick",null,0],spellCheck:["spellcheck",null,0],allowFullScreen:["allowFullscreen",null,0],autoCapitalize:["autocapitalize",null,0],autoFocus:["autofocus",null,0],autoPlay:["autoplay",null,0],role:["role",null,1]},Te={style:["style",null,3],ref:["ref",null,2],fn:["fn",null,2],className:["class",null,1],htmlFor:["for",null,1],tabIndex:["tabindex",null,1],onDoubleClick:["ondblclick",null,0],allowReorder:["allowReorder",null,1],attributeName:["attributeName",null,1],attributeType:["attributeType",null,1],autoReverse:["autoReverse",null,1],baseFrequency:["baseFrequency",null,1],calcMode:["calcMode",null,1],clipPathUnits:["clipPathUnits",null,1],contentScriptType:["contentScriptType",null,1],contentStyleType:["contentStyleType",null,1],diffuseConstant:["diffuseConstant",null,1],edgeMode:["edgeMode",null,1],externalResourcesRequired:["externalResourcesRequired",null,1],filterRes:["filterRes",null,1],filterUnits:["filterUnits",null,1],gradientTransform:["gradientTransform",null,1],gradientUnits:["gradientUnits",null,1],kernelMatrix:["kernelMatrix",null,1],kernelUnitLength:["kernelUnitLength",null,1],keyPoints:["keyPoints",null,1],keySplines:["keySplines",null,1],keyTimes:["keyTimes",null,1],lengthAdjust:["lengthAdjust",null,1],limitingConeAngle:["limitingConeAngle",null,1],markerHeight:["markerHeight",null,1],markerUnits:["markerUnits",null,1],maskContentUnits:["maskContentUnits",null,1],maskUnits:["maskUnits",null,1],numOctaves:["numOctaves",null,1],pathLength:["pathLength",null,1],patternContentUnits:["patternContentUnits",null,1],patternTransform:["patternTransform",null,1],patternUnits:["patternUnits",null,1],pointsAtX:["pointsAtX",null,1],pointsAtY:["pointsAtY",null,1],pointsAtZ:["pointsAtZ",null,1],preserveAlpha:["preserveAlpha",null,1],preserveAspectRatio:["preserveAspectRatio",null,1],primitiveUnits:["primitiveUnits",null,1],refX:["refX",null,1],refY:["refY",null,1],repeatCount:["repeatCount",null,1],repeatDur:["repeatDur",null,1],requiredExtensions:["requiredExtensions",null,1],requiredFeatures:["requiredFeatures",null,1],specularConstant:["specularConstant",null,1],specularExponent:["specularExponent",null,1],spreadMethod:["spreadMethod",null,1],startOffset:["startOffset",null,1],stdDeviation:["stdDeviation",null,1],stitchTiles:["stitchTiles",null,1],surfaceScale:["surfaceScale",null,1],systemLanguage:["systemLanguage",null,1],tableValues:["tableValues",null,1],targetX:["targetX",null,1],targetY:["targetY",null,1],textLength:["textLength",null,1],viewBox:["viewBox",null,1],viewTarget:["viewTarget",null,1],xChannelSelector:["xChannelSelector",null,1],yChannelSelector:["yChannelSelector",null,1],zoomAndPan:["zoomAndPan",null,1]},Ee=/-/,Xe=/^style-/,Je=/^(on|style)/,Ue=/[a-z][A-Z]/g,je=/^on[A-Z]/,Ne=/\-(?:[a-z]|$)/g,Pe=/^(style)([A-Z])/,_e={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},Le=new RegExp("^("+Object.keys(_e).join("|")+")-(.*)"),Re=function(e,n){var t=n?Te:Ae,r=t[e];if(r)return r;var l=n&&!function(e){return Je.test(e)}(e)||!n&&function(e){return Ee.test(e)&&!Xe.test(e)}(e),o=l?function(e){return e.replace(Ue,function(e){return e[0]+"-"+e[1]}).toLowerCase()}(e):function(e){var n=e.replace(Ne,function(e){return 1===e.length?"":e[1].toUpperCase()});return je.test(n)?n.toLowerCase():n}(e);if(o!==e&&(r=t[o]))return r;var u,i,a=l?function(e){var n=Le.exec(e);return n?[n[2],_e[n[1]],1]:[e,null,1]}(o):(u=o,(i=Pe.exec(u))?[i[2].toLowerCase()+u.substr(i[0].length),i[1],0]:[u,null,0]);return t[e]=a},qe=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var l in n=arguments[t])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e},Fe={backslashes:/\\/g,newlines:/\r?\n/g,hasParen:/\(/,loneFunction:/^function |^\(\w*\) =>|^\w+ =>/,endsInParen:/\)\s*$/,nonIdChars:/[^a-zA-Z0-9]/g,doubleQuotes:/"/g,indent:/\n(?=[^\n]+$)([ \t]*)/},Oe=function(){return function(e,n,t){this.ids=e,this.statements=n,this.computations=t}}(),Me=function(){return function(e,n,t,r){this.statements=e,this.loc=n,this.stateVar=t,this.seed=r}}(),ze=function(){return function(e,n,t,r,l,o){this.name=e,this.refs=n,this.fns=t,this.properties=r,this.children=l,this.loc=o}}(),Ie=function(e,n){var t=function(e){return e.segments.reduce(function(e,n){return e+r(n,e)},"")},r=function(e,n){return e.type===oe?l(e):o(e,Be(n))},l=function(e){return $e(e.text,e.loc,n)},o=function(e,t){var r=e.kind===re.SubComponent?u(e,t):i(e,t);return Ze(r,e.loc,n)},u=function(e,n){return s(a(e),n)},i=function(e,n){var r=e.kind===re.SVG;return 0===e.fields.length&&0===e.functions.length&&0===e.content.length?e.references.map(function(e){return t(e.code)+" = "}).join("")+"Surplus.create"+(r?"Svg":"")+"Element('"+e.tag+"', null, null)":1===e.fields.length&&e.fields[0].type===pe&&e.fields[0].name===(r?"class":"className")&&0===e.functions.length&&0===e.content.length?e.references.map(function(e){return t(e.code)+" = "}).join("")+"Surplus.create"+(r?"Svg":"")+"Element('"+e.tag+"', "+e.fields[0].value+", null)":p(c(e),n)},a=function(e){var n=e.references.map(function(e){return t(e.code)}),r=e.functions.map(function(e){return t(e.code)}),l=e.fields.reduce(function(e,n){var r,l=e.length>0?e[e.length-1]:null,o=n.type===pe?n.value:t(n.code);return n.type===de?e.push(o):null===l||"string"==typeof l||n.type===he&&l.style?e.push(((r={})[n.name]=o,r)):l[n.name]=o,e},[]),u=e.content.map(function(e){return e.type===ie?o(e,Be("")):e.type===ae?Ge(e.text.trim()):e.type===ce?t(e.code):"document.createComment("+Ge(e.text)+")"});return new ze(e.tag,n,r,l,u,e.loc)},s=function(e,n){var t=n.nl,r=n.nli,l=n.nlii,o=0===e.children.length?null:1===e.children.length?e.children[0]:"["+l+e.children.join(","+l)+r+"]",u=0===e.properties.length?null:e.properties[e.properties.length-1],i=null===o?e.properties:null===u||"string"==typeof u?e.properties.concat([{children:o}]):e.properties.slice(0,e.properties.length-1).concat([qe({},u,{children:o})]),a=(0===i.length||i.length>1&&"string"==typeof i[0]?[{}].concat(i):i).map(function(e){return"string"==typeof e?e:"{"+Object.keys(e).map(function(n){return""+r+Ge(n)+": "+e[n]}).join(",")+t+"}"}),s=1===a.length?a[0]:"Object.assign("+a.join(", ")+")",c=e.name+"("+s+")";if(e.refs.length>0&&(c=e.refs.map(function(e){return e+" = "}).join("")+c),e.fns.length>0){var p=e.fns.map(function(n){return new Me(["("+n+")(__, __state);"],e.loc,"__state",null)});c="(function (__) {"+r+"var __ = "+c+";"+r+p.map(function(e){return f(e,n)+r})+r+"return __;"+t+"})()"}return c},c=function(e){var n=[],r=[],l=[],o=function(e,n,r){var l=e.tag,o=e.fields,i=e.references,a=e.functions,h=e.content,m=e.loc;if(e.kind===re.SubComponent)d(e,n,r);else{var g=y(n,l,r),C=e.kind===re.SVG,x=o.map(function(e){return e.type===pe?"":t(e.code)}),w=o.filter(function(e){return e.type===de||e.type===he}),k=0===w.length&&o.filter(function(e){return e.type===pe&&(C?"class"===e.name:"className"===e.name)})[0]||null,A=x.some(function(e){return!De(e)}),T=o.map(function(n,t){return n===k?"":n.type===pe?u(g,n,n.value,e):n.type===fe?u(g,n,x[t],e):n.type===he?p(n,g,x[t],A,w):s(g,x[t],C)}).filter(function(e){return""!==e}),E=i.map(function(e){return t(e.code)+" = "}).join("");S(g+" = "+E+"Surplus.create"+(C?"Svg":"")+"Element('"+l+"', "+(k&&k.value)+", "+(n||null)+");"),A||T.forEach(S),1===h.length&&h[0].type===ce?v(h[0],g):h.forEach(function(e,n){return f(e,g,n)}),A&&b(T,null,null,m),a.forEach(function(e){return c(e,g)})}},u=function(e,n,t,r){var l=Re(n.name,r.kind===re.SVG),o=l[0],u=l[1],s=3&l[2];return 0===s?i(e,o,u,t):1===s?a(e,o,u,t):""},i=function(e,n,t,r){return t?e+"."+t+"."+n+" = "+r+";":e+"."+n+" = "+r+";"},a=function(e,n,t,r){return t?"Surplus.setAttributeNS("+e+", "+Ge(t)+", "+Ge(n)+", "+r+");":"Surplus.setAttribute("+e+", "+Ge(n)+", "+r+");"},s=function(e,n,t){return"Surplus.spread("+e+", "+n+", "+t+");"},c=function(e,n){var r=t(e.code);b(["("+r+")("+n+", __state);"],"__state",null,e.loc)},p=function(e,n,t,r,l){return"Surplus.assign("+n+".style, "+t+");"},f=function(e,n,t){return e.type===ie?o(e,n,t):e.type===se?h(e,n):e.type===ae?m(e,n,t):g(e,n,t)},d=function(e,n,t){return g({type:ce,code:{type:ue,segments:[e]},loc:e.loc},n,t)},h=function(e,n){return S("Surplus.createComment("+Ge(e.text)+", "+n+")")},m=function(e,n,t){return S("Surplus.createTextNode("+Ge(e.text)+", "+n+")")},g=function(e,n,r){var l=y(n,"insert",r),o=t(e.code),u="{ start: "+l+", end: "+l+" }";S(l+" = Surplus.createTextNode('', "+n+")"),b(["Surplus.insert(__range, "+o+");"],"__range",u,e.loc)},v=function(e,n){var r=t(e.code);!De(r)?b(["Surplus.content("+n+", "+r+", __current);"],"__current","''",e.loc):S("Surplus.content("+n+", "+r+', "");')},y=function(e,t,r){t=t.replace(Fe.nonIdChars,"_");var l=""===e?"__":e+("_"===e[e.length-1]?"":"_")+t+(r+1);return n.push(l),l},S=function(e){return r.push(e)},b=function(e,n,t,r){l.push(new Me(e,r,n,t))};return o(e,"",0),new Oe(n,r,l)},p=function(e,n){var t=n.nl,r=n.nli;n.nlii;return"(function () {"+r+"var "+e.ids.join(", ")+";"+r+e.statements.join(r)+r+e.computations.map(function(e){return f(e,n)}).join(r)+(0===e.computations.length?"":r)+"return __;"+t+"})()"},f=function(e,t){var r=t.nli,l=t.nlii,o=e.statements,u=e.loc,i=e.stateVar,a=e.seed;i&&(o[o.length-1]="return "+o[o.length-1]);var s=1===o.length?" "+o[0]+" ":l+o.join(l)+r;return Ze("Surplus.S(function ("+(i||"")+") {"+s+"}"+(null!==a?", "+a:"")+");",u,n)};return t(e)},De=function(e){return!Fe.hasParen.test(e)||Fe.loneFunction.test(e)&&!Fe.endsInParen.test(e)},Be=function(e){var n=Fe.indent.exec(e),t="\r\n"+(n?n[1]:""),r=t+"    ";return{nl:t,nli:r,nlii:r+"    "}},Ge=function(e){return'"'+e.replace(Fe.backslashes,"\\\\").replace(Fe.doubleQuotes,'\\"').replace(Fe.newlines,"\\n")+'"'},Ze=function(e,n,t){return t.sourcemap?xe(n)+e:e},$e=function(e,n,t){if(!t.sourcemap)return e;for(var r=e.split("\n"),l=0,o=1;o<r.length;o++){var u=r[o];l+=u.length;var i={line:n.line+o,col:0,pos:n.pos+l+o};r[o]=xe(i)+u}return xe(n)+r.join("\n")},Ve=new RegExp("^("+["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","menu","menuitem","meta","meter","multicol","nav","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"].join("|")+")$"),Ye=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],He=(new RegExp("^("+Ye.join("|")+")$"),Ye.filter(function(e){return!Ve.test(e)})),We=new RegExp("^("+He.join("|")+")$"),Qe="foreignObject",Ke={quot:'"',amp:"&",apos:"'",lt:"<",gt:">",nbsp:" ",iexcl:"¡",cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",agrave:"à",aacute:"á",acirc:"â",atilde:"ã",auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",alpha:"α",beta:"β",gamma:"γ",delta:"δ",epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",dagger:"†",Dagger:"‡",bull:"•",hellip:"…",permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",rfloor:"⌋",lang:"〈",rang:"〉",loz:"◊",spades:"♠",clubs:"♣",hearts:"♥",diams:"♦"},en=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var l in n=arguments[t])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e},nn={trimmableWS:/^\s*?\n\s*|\s*?\n\s*$/g,extraWs:/\s\s+/g,htmlEntity:/(?:&#(\d+);|&#x([\da-fA-F]+);|&(\w+);)/g,subcomponent:/(^[A-Z])|\./},tn={Program:function(e){return{type:le,segments:this.CodeSegments(e.segments)}},CodeSegments:function(e){var n=this;return e.map(function(e){return e.type===oe?n.CodeText(e):n.JSXElement(e,null)})},EmbeddedCode:function(e){return{type:ue,segments:this.CodeSegments(e.segments)}},JSXElement:function(e,n){var t=this;return en({},e,{fields:e.fields.map(function(n){return t.JSXField(n,e)}),references:e.references.map(function(e){return t.JSXReference(e)}),functions:e.functions.map(function(e){return t.JSXFunction(e)}),content:e.content.map(function(n){return t.JSXContent(n,e)})})},JSXField:function(e,n){return e.type===pe?this.JSXStaticField(e,n):e.type===fe?this.JSXDynamicField(e,n):e.type===he?this.JSXStyleProperty(e):this.JSXSpreadProperty(e)},JSXContent:function(e,n){return e.type===se?this.JSXComment(e):e.type===ae?this.JSXText(e):e.type===ce?this.JSXInsert(e):this.JSXElement(e,n)},JSXInsert:function(e){return en({},e,{code:this.EmbeddedCode(e.code)})},CodeText:function(e){return e},JSXText:function(e){return e},JSXComment:function(e){return e},JSXStaticField:function(e,n){return e},JSXDynamicField:function(e,n){return en({},e,{code:this.EmbeddedCode(e.code)})},JSXSpreadProperty:function(e){return en({},e,{code:this.EmbeddedCode(e.code)})},JSXStyleProperty:function(e){return en({},e,{code:this.EmbeddedCode(e.code)})},JSXReference:function(e){return en({},e,{code:this.EmbeddedCode(e.code)})},JSXFunction:function(e){return en({},e,{code:this.EmbeddedCode(e.code)})}},rn=[function(e){return en({},e,{JSXElement:function(n,t){var r=nn.subcomponent.test(n.tag)?re.SubComponent:We.test(n.tag)?re.SVG:t&&t.kind===re.SVG&&t.tag!==Qe?re.SVG:re.HTML;return e.JSXElement.call(this,en({},n,{kind:r}),t)}})},function(e){return en({},e,{JSXElement:function(n,t){if("pre"!==n.tag){var r=n.content.map(function(e){return e.type===ae?en({},e,{text:e.text.replace(nn.trimmableWS,"")}):e});n=en({},n,{content:r})}return e.JSXElement.call(this,n,t)}})},function(e){return en({},e,{JSXElement:function(n,t){if("pre"!==n.tag){var r=n.content.map(function(e){return e.type===ae?en({},e,{text:e.text.replace(nn.extraWs," ")}):e});n=en({},n,{content:r})}return e.JSXElement.call(this,n,t)}})},function(e){return en({},e,{JSXElement:function(n,t){var r=n.content.filter(function(e){return e.type!==ae||""!==e.text});return n=en({},n,{content:r}),e.JSXElement.call(this,n,t)}})},function(e){return en({},e,{JSXText:function(n){var t=n.text.replace(nn.htmlEntity,function(e,n,t,r){return n?String.fromCharCode(parseInt(n,10)):t?String.fromCharCode(parseInt(t,16)):Ke[r]||e});return t!==n.text&&(n=en({},n,{text:t})),e.JSXText.call(this,n)}})},function(e){return en({},e,{JSXElement:function(n,t){var r=n.content[0];if(n.kind===re.HTML&&1===n.content.length&&r.type===ae){var l=this.JSXText(r),o={type:pe,name:"textContent",attr:!1,namespace:null,value:Ge(l.text)};n=en({},n,{fields:n.fields.concat([o]),content:[]})}return e.JSXElement.call(this,n,t)}})}].reverse().reduce(function(e,n){return n(e)},tn),ln=function(e,n){return rn.Program(e)};function on(e,n){var t={sourcemap:(n=n||{}).sourcemap||null,sourcefile:n.sourcefile||"in.js",targetfile:n.targetfile||"out.js"},r=function(e,n){var t=0,r=0===e.length,l=r?"":e[t],o=0,u=0,i=0;return function(){for(var e=[],n="",t=J();!r;)x("<")?(n&&e.push({type:oe,text:n,loc:t}),n="",e.push(a()),t=J()):x('"')||x("'")?n+=v():x("`")?n=g(e,n,t):x("//")?n+=y():x("/*")?n+=S():(n+=l,b());return n&&e.push({type:oe,text:n,loc:t}),{type:le,segments:e}}();function a(){w("<")&&C("not at start of html element");var e,n,t,l,o=J(),u=[],i=[],h=[],m=[];for(b(),(e=X(ve.identifier))||C("bad element name",o),E();!r&&w(">")&&w("/>");)k(ve.identifier)?(t=f()).type===me?i.push(t):t.type===ge?h.push(t):u.push(t):x("{...")?u.push(d()):C("unrecognized content in begin tag"),E();if(r&&C("unterminated start node",o),n=x(">"),b(),n){for(;!r&&w("</");)x("<")?m.push(a()):x("{")?(l=p())&&m.push(l):x("\x3c!--")?m.push(c()):m.push(s());r&&C("element missing close tag",o),b(),e!==X(ve.identifier)&&C("mismatched open and close tags",o),w(">")&&C("malformed close tag"),b()}return{type:ie,tag:e,fields:u,references:i,functions:h,content:m,kind:re.HTML,loc:o}}function s(){for(var e="";!r&&w("<")&&w("\x3c!--")&&w("{")&&w("</");)e+=l,b();return{type:ae,text:e}}function c(){w("\x3c!--")&&C("not in HTML comment");var e=J(),n="";for(b();!r&&w("--\x3e");)n+=l,b();return r&&C("unterminated html comment",e),b(),{type:se,text:n}}function p(){w("{")&&C("not in JSX insert");var e=J(),n={hasContent:!1},t=h(n);return n.hasContent?{type:ce,code:t,loc:e}:null}function f(){k(ve.identifier)||C("not at start of property declaration");var e,n,t=J(),r=X(ve.identifier);return E(),x("=")?(b(),E(),x('"')||x("'")?(ve.badStaticProp.test(r)&&C("cannot name a static property '"+r+"' as it has a special meaning as a dynamic property",t),{type:pe,name:r,value:v()}):x("{")?(e=h(n={hasContent:!1}),n.hasContent||C("value for property '"+r+"' cannot be empty",t),ve.refProp.test(r)?{type:me,code:e,loc:t}:ve.fnProp.test(r)?{type:ge,code:e,loc:t}:ve.styleProp.test(r)?{type:he,name:"style",code:e,loc:t}:{type:fe,name:r,code:e,loc:t}):C("unexepected value for JSX property")):{type:pe,name:r,value:"true"}}function d(){w("{...")&&C("not at start of JSX spread");var e=J(),n={hasContent:!1},t=h(n);return n.hasContent||C("spread value cannot be empty",e),{type:de,code:t,loc:e}}function h(e){w("{")&&w("{...")&&C("not at start of JSX embedded code");var n=l.length,t=[],r=J(),o=m(t,"",r,e);o=o.substr(0,o.length-1),t.push({type:oe,text:o,loc:r});var u=t[0];return u.loc.col+=n,t[0]={type:oe,text:u.text.substr(n),loc:u.loc},{type:ue,segments:t}}function m(e,n,t,s){var c=J(),p=T();for(void 0===p&&C("not in parentheses"),n+=l,b();!r&&w(p);)x("'")||x('"')?(s&&(s.hasContent=!0),n+=v()):x("`")?(s&&(s.hasContent=!0),n=g(e,n,t)):x("//")?n+=y():x("/*")?n+=S():x("<")?(s&&(s.hasContent=!0),n&&e.push({type:oe,text:n,loc:{line:t.line,col:t.col,pos:t.pos}}),n="",e.push(a()),t.line=o,t.col=u,t.pos=i):T()?(s&&(s.hasContent=!0),n=m(e,n,t,s)):(s&&(s.hasContent=s.hasContent||ve.hasNonWs.test(l)),n+=l,b());return r&&C("unterminated parentheses",c),n+=l,b(),n}function g(e,n,t){w("`")&&C("not in template literal");var o=J();for(n+=l,b();!r&&w("`");)x("$")&&!ve.stringEscapedEnd.test(n)?(n+=l,b(),x("{")&&(n=m(e,n,t))):(n+=l,b());return r&&C("unterminated template literal",o),n+=l,b(),n}function v(){w("'")&&w('"')&&C("not in quoted string");var e,n,t=J();for(e=n=l,b();!r&&(w(e)||ve.stringEscapedEnd.test(n));)n+=l,b();return r&&C("unterminated string",t),n+=l,b(),n}function y(){w("//")&&C("not in code comment");for(var e="";!r&&w("\n");)e+=l,b();return r||(e+=l,b()),e}function S(){w("/*")&&C("not in code comment");for(var e=J(),n="";!r&&w("*/");)n+=l,b();return r&&C("unterminated multi-line comment",e),n+=l,b(),n}function b(){"\n"===l?(o++,u=0,i++):l&&(u+=l.length,i+=l.length),++t>=e.length?(r=!0,l=""):l=e[t]}function C(n,t){var r=" at line "+(t=t||J()).line+" col "+t.col+": ``"+e.join("").substr(t.pos,30).replace("\n","").replace("\r","")+"''";throw new Error(n+r)}function x(e){return l===e}function w(e){return l!==e}function k(e){return e.test(l)}function A(e){return e.exec(l)}function T(){return ye[l]}function E(){for(;;)if(x("//"))y();else if(x("/*"))S();else if(x("\n"))b();else{if(!A(ve.leadingWs))break;X(ve.leadingWs)}}function X(e){var n,t=A(e);return t&&(n=t[0])?(u+=n.length,i+=n.length,""===(l=l.substring(n.length))&&b(),n):""}function J(){return{line:o,col:u,pos:i}}}(function(e,n){return e.match(te)||[]}(e)),l=ln(r,t),o=Ie(l,t);return"extract"===t.sourcemap?we(o,e,t):"append"===t.sourcemap?function(e,n,t){var r=we(e,n,t);return r.src+"\n//# sourceMappingURL=data:application/json,"+encodeURIComponent(JSON.stringify(r.map))}(o,e,t):o}var un=window;un.S=e,un.Surplus=ne,document.addEventListener("DOMContentLoaded",function(){var e,n,t,r;for(;e=document.querySelector("script[type='text/jsx']");)e.type+="-processed",t=e.textContent||e.innerText||e.innerHTML,r=on(t,{sourcemap:"append"}),(n=document.createElement("script")).type="text/javascript",n.src="data:text/javascript;charset=utf-8,"+encodeURIComponent(r),n.async=e.async,n.defer=e.defer,e.nextSibling?e.parentNode.insertBefore(n,e.nextSibling):e.parentNode.appendChild(n)})}();

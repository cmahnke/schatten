/*! Bundled license information:

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/(()=>{vu=Object.create,Tl=Object.defineProperty,Gl=Object.getOwnPropertyDescriptor,Ml=Object.getOwnPropertyNames,nd=Object.getPrototypeOf,sd=Object.prototype.hasOwnProperty,Ue=(e,t)=>function(){return t||(0,e[Ml(e)[0]])((t={exports:{}}).exports,t),t.exports},od=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ml(t))!sd.call(e,o)&&o!==n&&Tl(e,o,{get:()=>t[o],enumerable:!(s=Gl(t,o))||s.enumerable});return e},ad=(e,t,n)=>(n=e!=null?vu(nd(e)):{},od(t||!e||!e.__esModule?Tl(n,"default",{value:e,enumerable:!0}):n,e)),_l=Ue({"node_modules/color-name/index.js"(e,t){"use strict",t.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}),rd=Ue({"node_modules/simple-swizzle/node_modules/is-arrayish/index.js"(e,t){t.exports=function(t){return!!t&&typeof t!="string"&&(t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&t.constructor.name!=="String"))}}}),cd=Ue({"node_modules/simple-swizzle/index.js"(e,t){"use strict";var s=rd(),o=Array.prototype.concat,i=Array.prototype.slice,n=t.exports=function(t){for(var a,n=[],r=0,c=t.length;r<c;r++)a=t[r],s(a)?n=o.call(n,i.call(a)):n.push(a);return n};n.wrap=function(e){return function(){return e(n(arguments))}}}}),hd=Ue({"node_modules/color-string/index.js"(e,t){var n,a,o=_l(),i=cd(),c=Object.hasOwnProperty,l=Object.create(null);for(a in o)c.call(o,a)&&(l[o[a]]=a);n=t.exports={to:{},get:{}},n.get=function(e){var t,s,o=e.substring(0,3).toLowerCase();switch(o){case"hsl":t=n.get.hsl(e),s="hsl";break;case"hwb":t=n.get.hwb(e),s="hwb";break;default:t=n.get.rgb(e),s="rgb";break}return t?{model:s,value:t}:null},n.get.rgb=function(e){if(!e)return null;var t,n,a,r,l=/^#([a-f0-9]{3,4})$/i,d=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,u=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/,h=/^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/,m=/^(\w+)$/,i=[0,0,0,1];if(t=e.match(d)){a=t[2],t=t[1];for(n=0;n<3;n++)r=n*2,i[n]=parseInt(t.slice(r,r+2),16);a&&(i[3]=parseInt(a,16)/255)}else if(t=e.match(l)){t=t[1],a=t[3];for(n=0;n<3;n++)i[n]=parseInt(t[n]+t[n],16);a&&(i[3]=parseInt(a+a,16)/255)}else if(t=e.match(u)){for(n=0;n<3;n++)i[n]=parseInt(t[n+1],0);t[4]&&(t[5]?i[3]=parseFloat(t[4])*.01:i[3]=parseFloat(t[4]))}else if(t=e.match(h)){for(n=0;n<3;n++)i[n]=Math.round(parseFloat(t[n+1])*2.55);t[4]&&(t[5]?i[3]=parseFloat(t[4])*.01:i[3]=parseFloat(t[4]))}else return(t=e.match(m))?t[1]==="transparent"?[0,0,0,0]:c.call(o,t[1])?(i=o[t[1]],i[3]=1,i):null:null;for(n=0;n<3;n++)i[n]=s(i[n],0,255);return i[3]=s(i[3],0,1),i},n.get.hsl=function(e){if(!e)return null;var n,o,i,a,r,c=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,t=e.match(c);return t?(n=parseFloat(t[4]),o=(parseFloat(t[1])%360+360)%360,i=s(parseFloat(t[2]),0,100),a=s(parseFloat(t[3]),0,100),r=s(isNaN(n)?1:n,0,1),[o,i,a,r]):null},n.get.hwb=function(e){if(!e)return null;var n,o,i,a,r,c=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,t=e.match(c);return t?(n=parseFloat(t[4]),o=(parseFloat(t[1])%360+360)%360,i=s(parseFloat(t[2]),0,100),a=s(parseFloat(t[3]),0,100),r=s(isNaN(n)?1:n,0,1),[o,i,a,r]):null},n.to.hex=function(){var e=i(arguments);return"#"+r(e[0])+r(e[1])+r(e[2])+(e[3]<1?r(Math.round(e[3]*255)):"")},n.to.rgb=function(){var e=i(arguments);return e.length<4||e[3]===1?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},n.to.rgb.percent=function(){var e=i(arguments),t=Math.round(e[0]/255*100),n=Math.round(e[1]/255*100),s=Math.round(e[2]/255*100);return e.length<4||e[3]===1?"rgb("+t+"%, "+n+"%, "+s+"%)":"rgba("+t+"%, "+n+"%, "+s+"%, "+e[3]+")"},n.to.hsl=function(){var e=i(arguments);return e.length<4||e[3]===1?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},n.to.hwb=function(){var e=i(arguments),t="";return e.length>=4&&e[3]!==1&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},n.to.keyword=function(e){return l[e.slice(0,3)]};function s(e,t,n){return Math.min(Math.max(t,e),n)}function r(e){var t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}}}),bl=Ue({"node_modules/color/node_modules/color-convert/conversions.js"(e,t){var n,s=_l(),o={};for(const e of Object.keys(s))o[s[e]]=e;n={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},t.exports=n;for(const e of Object.keys(n)){if(!("channels"in n[e]))throw new Error("missing channels property: "+e);if(!("labels"in n[e]))throw new Error("missing channel labels property: "+e);if(n[e].labels.length!==n[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:s}=n[e];delete n[e].channels,delete n[e].labels,Object.defineProperty(n[e],"channels",{value:t}),Object.defineProperty(n[e],"labels",{value:s})}n.rgb.hsl=function(e){const o=e[0]/255,i=e[1]/255,a=e[2]/255,s=Math.min(o,i,a),t=Math.max(o,i,a),r=t-s;let n,c;t===s?n=0:o===t?n=(i-a)/r:i===t?n=2+(a-o)/r:a===t&&(n=4+(o-i)/r),n=Math.min(n*60,360),n<0&&(n+=360);const l=(s+t)/2;return t===s?c=0:l<=.5?c=r/(t+s):c=r/(2-t-s),[n,c*100,l*100]},n.rgb.hsv=function(e){let a,r,c,t,l;const s=e[0]/255,o=e[1]/255,i=e[2]/255,n=Math.max(s,o,i),d=n-Math.min(s,o,i),u=function(e){return(n-e)/6/d+1/2};return d===0?(t=0,l=0):(l=d/n,a=u(s),r=u(o),c=u(i),s===n?t=c-r:o===n?t=1/3+a-c:i===n&&(t=2/3+r-a),t<0?t+=1:t>1&&(t-=1)),[t*360,l*100,n*100]},n.rgb.hwb=function(e){const s=e[0],o=e[1];let t=e[2];const i=n.rgb.hsl(e)[0],a=1/255*Math.min(s,Math.min(o,t));return t=1-1/255*Math.max(s,Math.max(o,t)),[i,a*100,t*100]},n.rgb.cmyk=function(e){const n=e[0]/255,s=e[1]/255,o=e[2]/255,t=Math.min(1-n,1-s,1-o),i=(1-n-t)/(1-t)||0,a=(1-s-t)/(1-t)||0,r=(1-o-t)/(1-t)||0;return[i*100,a*100,r*100,t*100]};function i(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}n.rgb.keyword=function(e){const t=o[e];if(t)return t;let n=1/0,a;for(const t of Object.keys(s)){const r=s[t],o=i(e,r);o<n&&(n=o,a=t)}return a},n.keyword.rgb=function(e){return s[e]},n.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,s=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,s=s>.04045?((s+.055)/1.055)**2.4:s/12.92;const o=t*.4124+n*.3576+s*.1805,i=t*.2126+n*.7152+s*.0722,a=t*.0193+n*.1192+s*.9505;return[o*100,i*100,a*100]},n.rgb.lab=function(e){const i=n.rgb.xyz(e);let s=i[0],t=i[1],o=i[2];s/=95.047,t/=100,o/=108.883,s=s>.008856?s**(1/3):7.787*s+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*t-16,r=500*(s-t),c=200*(t-o);return[a,r,c]},n.hsl.rgb=function(e){const c=e[0]/360,a=e[1]/100,s=e[2]/100;let o,t,n;if(a===0)return n=s*255,[n,n,n];s<.5?o=s*(1+a):o=s+a-s*a;const i=2*s-o,r=[0,0,0];for(let e=0;e<3;e++)t=c+1/3*-(e-1),t<0&&t++,t>1&&t--,6*t<1?n=i+(o-i)*6*t:2*t<1?n=o:3*t<2?n=i+(o-i)*(2/3-t)*6:n=i,r[e]=n*255;return r},n.hsl.hsv=function(e){const i=e[0];let n=e[1]/100,t=e[2]/100,o=n;const s=Math.max(t,.01);t*=2,n*=t<=1?t:2-t,o*=s<=1?s:2-s;const a=(t+n)/2,r=t===0?2*o/(s+o):2*n/(t+n);return[i,r*100,a*100]},n.hsv.rgb=function(e){const s=e[0]/60,o=e[1]/100;let t=e[2]/100;const c=Math.floor(s)%6,r=s-Math.floor(s),n=255*t*(1-o),i=255*t*(1-o*r),a=255*t*(1-o*(1-r));switch(t*=255,c){case 0:return[t,a,n];case 1:return[i,t,n];case 2:return[n,t,a];case 3:return[n,i,t];case 4:return[a,n,t];case 5:return[t,n,i]}},n.hsv.hsl=function(e){const r=e[0],n=e[1]/100,i=e[2]/100,a=Math.max(i,.01);let t,s;s=(2-n)*i;const o=(2-n)*a;return t=n*a,t/=o<=1?o:2-o,t=t||0,s/=2,[r,t*100,s*100]},n.hwb.rgb=function(e){const u=e[0]/360;let t=e[1]/100,c=e[2]/100;const l=t+c;let r;l>1&&(t/=l,c/=l);const d=Math.floor(6*u),n=1-c;r=6*u-d,(d&1)!==0&&(r=1-r);const a=t+r*(n-t);let s,o,i;switch(d){default:case 6:case 0:s=n,o=a,i=t;break;case 1:s=a,o=n,i=t;break;case 2:s=t,o=n,i=a;break;case 3:s=t,o=a,i=n;break;case 4:s=a,o=t,i=n;break;case 5:s=n,o=t,i=a;break}return[s*255,o*255,i*255]},n.cmyk.rgb=function(e){const n=e[0]/100,s=e[1]/100,o=e[2]/100,t=e[3]/100,i=1-Math.min(1,n*(1-t)+t),a=1-Math.min(1,s*(1-t)+t),r=1-Math.min(1,o*(1-t)+t);return[i*255,a*255,r*255]},n.xyz.rgb=function(e){const o=e[0]/100,i=e[1]/100,a=e[2]/100;let t,n,s;return t=o*3.2406+i*-1.5372+a*-.4986,n=o*-.9689+i*1.8758+a*.0415,s=o*.0557+i*-.204+a*1.057,t=t>.0031308?1.055*t**(1/2.4)-.055:t*12.92,n=n>.0031308?1.055*n**(1/2.4)-.055:n*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,t=Math.min(Math.max(0,t),1),n=Math.min(Math.max(0,n),1),s=Math.min(Math.max(0,s),1),[t*255,n*255,s*255]},n.xyz.lab=function(e){let n=e[0],t=e[1],s=e[2];n/=95.047,t/=100,s/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,t=t>.008856?t**(1/3):7.787*t+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;const o=116*t-16,i=500*(n-t),a=200*(t-s);return[o,i,a]},n.lab.xyz=function(e){const r=e[0],c=e[1],l=e[2];let n,t,s;t=(r+16)/116,n=c/500+t,s=t-l/200;const o=t**3,i=n**3,a=s**3;return t=o>.008856?o:(t-16/116)/7.787,n=i>.008856?i:(n-16/116)/7.787,s=a>.008856?a:(s-16/116)/7.787,n*=95.047,t*=100,s*=108.883,[n,t,s]},n.lab.lch=function(e){const o=e[0],n=e[1],s=e[2];let t;const i=Math.atan2(s,n);t=i*360/2/Math.PI,t<0&&(t+=360);const a=Math.sqrt(n*n+s*s);return[o,a,t]},n.lch.lab=function(e){const s=e[0],t=e[1],o=e[2],n=o/360*2*Math.PI,i=t*Math.cos(n),a=t*Math.sin(n);return[s,i,a]},n.rgb.ansi16=function(e,t=null){const[i,a,r]=e;let s=t===null?n.rgb.hsv(e)[2]:t;if(s=Math.round(s/50),s===0)return 30;let o=30+(Math.round(r/255)<<2|Math.round(a/255)<<1|Math.round(i/255));return s===2&&(o+=60),o},n.hsv.ansi16=function(e){return n.rgb.ansi16(n.hsv.rgb(e),e[2])},n.rgb.ansi256=function(e){const t=e[0],n=e[1],s=e[2];if(t===n&&n===s)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;const o=16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(s/255*5);return o},n.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,s=(t&1)*n*255,o=(t>>1&1)*n*255,i=(t>>2&1)*n*255;return[s,o,i]},n.ansi256.rgb=function(e){if(e>=232){const t=(e-232)*10+8;return[t,t,t]}e-=16;let t;const n=Math.floor(e/36)/5*255,s=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,s,o]},n.rgb.hex=function(e){const n=((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255),t=n.toString(16).toUpperCase();return"000000".substring(t.length)+t},n.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(e=>e+e).join(""));const s=parseInt(n,16),o=s>>16&255,i=s>>8&255,a=s&255;return[o,i,a]},n.rgb.hcg=function(e){const s=e[0]/255,o=e[1]/255,i=e[2]/255,a=Math.max(Math.max(s,o),i),c=Math.min(Math.min(s,o),i),t=a-c;let r,n;return t<1?r=c/(1-t):r=0,t<=0?n=0:a===s?n=(o-i)/t%6:a===o?n=2+(i-s)/t:n=4+(s-o)/t,n/=6,n%=1,[n*360,t*100,r*100]},n.hsl.hcg=function(e){const s=e[1]/100,t=e[2]/100,n=t<.5?2*s*t:2*s*(1-t);let o=0;return n<1&&(o=(t-.5*n)/(1-n)),[e[0],n*100,o*100]},n.hsv.hcg=function(e){const o=e[1]/100,n=e[2]/100,t=o*n;let s=0;return t<1&&(s=(n-t)/(1-t)),[e[0],t*100,s*100]},n.hcg.rgb=function(e){const c=e[0]/360,n=e[1]/100,s=e[2]/100;if(n===0)return[s*255,s*255,s*255];const t=[0,0,0],r=c%1*6,o=r%1,a=1-o;let i=0;switch(Math.floor(r)){case 0:t[0]=1,t[1]=o,t[2]=0;break;case 1:t[0]=a,t[1]=1,t[2]=0;break;case 2:t[0]=0,t[1]=1,t[2]=o;break;case 3:t[0]=0,t[1]=a,t[2]=1;break;case 4:t[0]=o,t[1]=0,t[2]=1;break;default:t[0]=1,t[1]=0,t[2]=a}return i=(1-n)*s,[(n*t[0]+i)*255,(n*t[1]+i)*255,(n*t[2]+i)*255]},n.hcg.hsv=function(e){const t=e[1]/100,o=e[2]/100,n=t+o*(1-t);let s=0;return n>0&&(s=t/n),[e[0],s*100,n*100]},n.hcg.hsl=function(e){const n=e[1]/100,o=e[2]/100,t=o*(1-n)+.5*n;let s=0;return t>0&&t<.5?s=n/(2*t):t>=.5&&t<1&&(s=n/(2*(1-t))),[e[0],s*100,t*100]},n.hcg.hwb=function(e){const t=e[1]/100,s=e[2]/100,n=t+s*(1-t);return[e[0],(n-t)*100,(1-n)*100]},n.hwb.hcg=function(e){const o=e[1]/100,i=e[2]/100,n=1-i,t=n-o;let s=0;return t<1&&(s=(n-t)/(1-t)),[e[0],t*100,s*100]},n.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},n.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},n.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},n.gray.hsl=function(e){return[0,0,e[0]]},n.gray.hsv=n.gray.hsl,n.gray.hwb=function(e){return[0,100,e[0]]},n.gray.cmyk=function(e){return[0,0,0,e[0]]},n.gray.lab=function(e){return[e[0],0,0]},n.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,s=(t<<16)+(t<<8)+t,n=s.toString(16).toUpperCase();return"000000".substring(n.length)+n},n.rgb.gray=function(e){const t=(e[0]+e[1]+e[2])/3;return[t/255*100]}}}),md=Ue({"node_modules/color/node_modules/color-convert/route.js"(e,t){var n=bl();function s(){const e={},t=Object.keys(n);for(let s=t.length,n=0;n<s;n++)e[t[n]]={distance:-1,parent:null};return e}function o(e){const t=s(),o=[e];for(t[e].distance=0;o.length;){const e=o.pop(),s=Object.keys(n[e]);for(let r=s.length,n=0;n<r;n++){const a=s[n],i=t[a];i.distance===-1&&(i.distance=t[e].distance+1,i.parent=e,o.unshift(a))}}return t}function i(e,t){return function(n){return t(e(n))}}function a(e,t){const a=[t[e].parent,e];let o=n[t[e].parent][e],s=t[e].parent;for(;t[s].parent;)a.unshift(t[s].parent),o=i(n[t[s].parent][s],o),s=t[s].parent;return o.conversion=a,o}t.exports=function(e){const t=o(e),n={},s=Object.keys(t);for(let i=s.length,e=0;e<i;e++){const o=s[e],r=t[o];if(r.parent===null)continue;n[o]=a(o,t)}return n}}}),pd=Ue({"node_modules/color/node_modules/color-convert/index.js"(e,t){var s=bl(),o=md(),n={},i=Object.keys(s);function a(e){const t=function(...n){const t=n[0];return t==null?t:(t.length>1&&(n=t),e(n))};return"conversion"in e&&(t.conversion=e.conversion),t}function r(e){const t=function(...s){const t=s[0];if(t==null)return t;t.length>1&&(s=t);const n=e(s);if(typeof n=="object")for(let t=n.length,e=0;e<t;e++)n[e]=Math.round(n[e]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}i.forEach(e=>{n[e]={},Object.defineProperty(n[e],"channels",{value:s[e].channels}),Object.defineProperty(n[e],"labels",{value:s[e].labels});const t=o(e),i=Object.keys(t);i.forEach(s=>{const o=t[s];n[e][s]=r(o),n[e][s].raw=a(o)})}),t.exports=n}}),gd=Ue({"node_modules/color/index.js"(e,t){var r,a=hd(),i=pd(),d=["keyword","gray","hex"],c={};for(const e of Object.keys(i))c[[...i[e].labels].sort().join("")]=e;r={};function o(e,t){if(!(this instanceof o))return new o(e,t);if(t&&t in d&&(t=null),t&&!(t in i))throw new Error("Unknown model: "+t);let s,n;if(e==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof o)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if(typeof e=="string"){const t=a.get(e);if(t===null)throw new Error("Unable to parse color from string: "+e);this.model=t.model,n=i[this.model].channels,this.color=t.value.slice(0,n),this.valpha=typeof t.value[n]=="number"?t.value[n]:1}else if(e.length>0){this.model=t||"rgb",n=i[this.model].channels;const s=Array.prototype.slice.call(e,0,n);this.color=l(s,n),this.valpha=typeof e[n]=="number"?e[n]:1}else if(typeof e=="number")this.model="rgb",this.color=[e>>16&255,e>>8&255,e&255],this.valpha=1;else{this.valpha=1;const t=Object.keys(e);"alpha"in e&&(t.splice(t.indexOf("alpha"),1),this.valpha=typeof e.alpha=="number"?e.alpha:0);const n=t.sort().join("");if(!(n in c))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=c[n];const{labels:o}=i[this.model],a=[];for(s=0;s<o.length;s++)a.push(e[o[s]]);this.color=l(a)}if(r[this.model]){n=i[this.model].channels;for(s=0;s<n;s++){const e=r[this.model][s];e&&(this.color[s]=e(this.color[s]))}}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}o.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in a.to?this:this.rgb();t=t.round(typeof e=="number"?e:1);const n=t.valpha===1?t.color:[...t.color,this.valpha];return a.to[t.model](n)},percentString(e){const t=this.rgb().round(typeof e=="number"?e:1),n=t.valpha===1?t.color:[...t.color,this.valpha];return a.to.rgb.percent(n)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const e={},{channels:t}=i[this.model],{labels:n}=i[this.model];for(let s=0;s<t;s++)e[n[s]]=this.color[s];return this.valpha!==1&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,this.valpha!==1&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,this.valpha!==1&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new o([...this.color.map(h(e)),this.valpha],this.model)},alpha(e){return e!==void 0?new o([...this.color,Math.max(0,Math.min(1,e))],this.model):this.valpha},red:n("rgb",0,s(255)),green:n("rgb",1,s(255)),blue:n("rgb",2,s(255)),hue:n(["hsl","hsv","hsl","hwb","hcg"],0,e=>(e%360+360)%360),saturationl:n("hsl",1,s(100)),lightness:n("hsl",2,s(100)),saturationv:n("hsv",1,s(100)),value:n("hsv",2,s(100)),chroma:n("hcg",1,s(100)),gray:n("hcg",2,s(100)),white:n("hwb",1,s(100)),wblack:n("hwb",2,s(100)),cyan:n("cmyk",0,s(100)),magenta:n("cmyk",1,s(100)),yellow:n("cmyk",2,s(100)),black:n("cmyk",3,s(100)),x:n("xyz",0,s(95.047)),y:n("xyz",1,s(100)),z:n("xyz",2,s(108.833)),l:n("lab",0,s(100)),a:n("lab",1),b:n("lab",2),keyword(e){return e!==void 0?new o(e):i[this.model].keyword(this.color)},hex(e){return e!==void 0?new o(e):a.to.hex(this.rgb().round().color)},hexa(e){if(e!==void 0)return new o(e);const n=this.rgb().round().color;let t=Math.round(this.valpha*255).toString(16).toUpperCase();return t.length===1&&(t="0"+t),a.to.hex(n)+t},rgbNumber(){const e=this.rgb().color;return(e[0]&255)<<16|(e[1]&255)<<8|e[2]&255},luminosity(){const t=this.rgb().color,e=[];for(const[s,o]of t.entries()){const n=o/255;e[s]=n<=.04045?n/12.92:((n+.055)/1.055)**2.4}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(e){const t=this.luminosity(),n=e.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level(e){const t=this.contrast(e);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){const e=this.rgb().color,t=(e[0]*2126+e[1]*7152+e[2]*722)/1e4;return t<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){const t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){const t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){const t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){const t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){const t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){const t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){const e=this.rgb().color,t=e[0]*.3+e[1]*.59+e[2]*.11;return o.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const n=this.hsl();let t=n.color[0];return t=(t+e)%360,t=t<0?360+t:t,n.color[0]=t,n},mix(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const n=e.rgb(),s=this.rgb(),r=t===void 0?.5:t,i=2*r-1,c=n.alpha()-s.alpha(),a=((i*c===-1?i:(i+c)/(1+i*c))+1)/2,l=1-a;return o.rgb(a*n.red()+l*s.red(),a*n.green()+l*s.green(),a*n.blue()+l*s.blue(),n.alpha()*r+s.alpha()*(1-r))}};for(const e of Object.keys(i)){if(d.includes(e))continue;const{channels:t}=i[e];o.prototype[e]=function(...t){return this.model===e?new o(this):t.length>0?new o(t,e):new o([...m(i[this.model][e].raw(this.color)),this.valpha],e)},o[e]=function(...s){let n=s[0];return typeof n=="number"&&(n=l(s,t)),new o(n,e)}}function u(e,t){return Number(e.toFixed(t))}function h(e){return function(t){return u(t,e)}}function n(e,t,n){e=Array.isArray(e)?e:[e];for(const s of e)(r[s]||(r[s]=[]))[t]=n;return e=e[0],function(s){let o;return s!==void 0?(n&&(s=n(s)),o=this[e](),o.color[t]=s,o):(o=this[e]().color[t],n&&(o=n(o)),o)}}function s(e){return function(t){return Math.max(0,Math.min(e,t))}}function m(e){return Array.isArray(e)?e:[e]}function l(e,t){for(let n=0;n<t;n++)typeof e[n]!="number"&&(e[n]=0);return e}t.exports=o}});function Yf(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let s=document;t&&(s=t.current);const o=n?.[e]??s.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}vd={some:0,all:1};function Kf(e,t,{root:n,margin:s,amount:o="some"}={}){const r=Yf(e),i=new WeakMap,c=e=>{e.forEach(e=>{const n=i.get(e.target);if(e.isIntersecting===Boolean(n))return;if(e.isIntersecting){const n=t(e.target,e);typeof n=="function"?i.set(e.target,n):a.unobserve(e.target)}else typeof n=="function"&&(n(e),i.delete(e.target))})},a=new IntersectionObserver(c,{root:n,rootMargin:s,threshold:typeof o=="number"?o:vd[o]});return r.forEach(e=>a.observe(e)),()=>a.disconnect()}bd=ad(gd());function io(e){for(var n,s,t=1;t<arguments.length;t++){n=arguments[t];for(s in n)e[s]=n[s]}return e}yd={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function pl(e,t){function n(n,s,o){if(typeof document=="undefined")return;o=io({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i,a="";for(i in o){if(!o[i])continue;if(a+="; "+i,o[i]===!0)continue;a+="="+o[i].split(";")[0]}return document.cookie=n+"="+e.write(s,n)+a}function s(t){if(typeof document=="undefined"||arguments.length&&!t)return;for(var n,i,r,a=document.cookie?document.cookie.split("; "):[],s={},o=0;o<a.length;o++){i=a[o].split("="),r=i.slice(1).join("=");try{if(n=decodeURIComponent(i[0]),s[n]=e.read(r,n),t===n)break}catch{}}return t?s[t]:s}return Object.create({set:n,get:s,remove:function(e,t){n(e,"",io({},t,{expires:-1}))},withAttributes:function(e){return pl(this.converter,io({},this.attributes,e))},withConverter:function(e){return pl(io({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}fl=pl(yd,{path:"/"});function b(e,t){let s=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(e=>[e]));let o=t[0].length,i=t[0].map((e,n)=>t.map(e=>e[n])),n=e.map(e=>i.map(t=>{let n=0;if(!Array.isArray(e)){for(let s of t)n+=e*s;return n}for(let s=0;s<e.length;s++)n+=e[s]*(t[s]||0);return n}));return s===1&&(n=n[0]),o===1?n.map(e=>e[0]):n}function Ds(e){return it(e)==="string"}function it(e){let t=Object.prototype.toString.call(e);return(t.match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function ro(e,{precision:t,unit:n}){return nt(e)?"none":Hd(e,t)+(n??"")}function nt(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function w(e){return nt(e)?0:e}function Hd(e,t){if(e===0)return 0;let n=~~e,s=0;n&&t&&(s=~~Math.log10(Math.abs(n))+1);const o=10**(t-s);return Math.floor(e*o+.5)/o}Wd={deg:1,grad:.9,rad:180/Math.PI,turn:360};function Bu(e){if(!e)return;e=e.trim();const n=/^([a-z]+)\((.+?)\)$/i,s=/^-?[\d.]+$/,o=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let t=e.match(n);if(t){let e=[];return t[2].replace(i,(t,n)=>{let a=n.match(o),i=n;if(a){let e=a[0],t=i.slice(0,-e.length);e==="%"?(i=new Number(t/100),i.type="<percentage>"):(i=new Number(t*Wd[e]),i.type="<angle>",i.unit=e)}else s.test(i)?(i=new Number(i),i.type="<number>"):i==="none"&&(i=new Number(NaN),i.none=!0);t.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),typeof i=="object"&&i instanceof Number&&(i.raw=n),e.push(i)}),{name:t[1].toLowerCase(),rawName:t[1],rawArgs:t[2],args:e}}}function Xu(e){return e[e.length-1]}function Jn(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function n1(e,t,n){return(n-e)/(t-e)}function al(e,t,n){return Jn(t[0],t[1],n1(e[0],e[1],n))}function r1(e){return e.map(e=>e.split("|").map(e=>{e=e.trim();let t=e.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(t){let e=new String(t[1]);return e.range=[+t[2],+t[3]],e}return e}))}function c1(e,t,n){return Math.max(Math.min(n,t),e)}function mo(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function je(e,t){return mo(Math.abs(e)**t,e)}function el(e,t){return t===0?0:e/t}function d1(e,t,n=0,s=e.length){for(;n<s;){const o=n+s>>1;e[o]<t?n=o+1:s=o}return n}u1=Object.freeze({__proto__:null,bisectLeft:d1,clamp:c1,copySign:mo,interpolate:Jn,interpolateInv:n1,isNone:nt,isString:Ds,last:Xu,mapRange:al,multiplyMatrices:b,parseCoordGrammar:r1,parseFunction:Bu,serializeNumber:ro,skipNone:w,spow:je,toPrecision:Hd,type:it,zdiv:el}),h1=class{add(e,t,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},He=new h1,q={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},F={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function Zc(e){return Array.isArray(e)?e:F[e]}function po(e,t,n,s={}){if(e=Zc(e),t=Zc(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let o={W1:e,W2:t,XYZ:n,options:s};if(He.run("chromatic-adaptation-start",o),o.M||(o.W1===F.D65&&o.W2===F.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===F.D50&&o.W2===F.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),He.run("chromatic-adaptation-end",o),o.M)return b(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}g1=new Set(["<number>","<percentage>","<angle>"]);function w1(e,t,n,s){let o=Object.entries(e.coords).map(([e,o],i)=>{let d=t.coordGrammar[i],r=s[i],c=r?.type,a;if(r.none?a=d.find(e=>g1.has(e)):a=d.find(e=>e==c),!a){let t=o.name||e;throw new TypeError(`${c??r.raw} not allowed for ${t} in ${n}()`)}let l=a.range;c==="<percentage>"&&(l||=[0,1]);let u=o.range||o.refRange;return l&&u&&(s[i]=al(l,u,s[i])),a});return o}function O1(e,{meta:t}={}){let s={str:String(e)?.trim()};if(He.run("parse-start",s),s.color)return s.color;if(s.parsed=Bu(s.str),s.parsed){{let e=s.parsed.name;if(e==="color"){let e=s.parsed.args.shift(),o=e.startsWith("--")?e.substring(2):`--${e}`,i=[e,o],c=s.parsed.rawArgs.indexOf("/")>0?s.parsed.args.pop():1;for(let a of n.all){let o=a.getFormat("color");if(o&&(i.includes(o.id)||o.ids?.filter(e=>i.includes(e)).length)){const n=Object.keys(a.coords).map((e,t)=>s.parsed.args[t]||0);let i;return o.coordGrammar&&(i=w1(a,o,"color",n)),t&&Object.assign(t,{formatId:"color",types:i}),o.id.startsWith("--")&&!e.startsWith("--")&&q.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${o.id}) instead of color(${e}).`),e.startsWith("--")&&!o.id.startsWith("--")&&q.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${o.id}) instead of prefixed color(${e}).`),{spaceId:a.id,coords:n,alpha:c}}}let a="",r=e in n.registry?e:o;if(r in n.registry){let e=n.registry[r].formats?.color?.id;e&&(a=`Did you mean color(${e})?`)}throw new TypeError(`Cannot parse color(${e}). `+(a||"Missing a plugin?"))}for(let i of n.all){let o=i.getFormat(e);if(o&&o.type==="function"){let n=1;(o.lastAlpha||Xu(s.parsed.args).alpha)&&(n=s.parsed.args.pop());let a=s.parsed.args,r;return o.coordGrammar&&(r=w1(i,o,e,a)),t&&Object.assign(t,{formatId:o.name,types:r}),{spaceId:i.id,coords:a,alpha:n}}}}}else for(let e of n.all)for(let i in e.formats){let n=e.formats[i];if(n.type!=="custom")continue;if(n.test&&!n.test(s.str))continue;let o=n.parse(s.str);if(o)return o.alpha??=1,t&&(t.formatId=i),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function a(e){if(Array.isArray(e))return e.map(a);if(!e)throw new TypeError("Empty color reference");Ds(e)&&(e=O1(e));let t=e.space||e.spaceId;return t instanceof n||(e.space=n.get(t)),e.alpha===void 0&&(e.alpha=1),e}k1=75e-6,n=class _ColorSpace{constructor(e){this.id=e.id,this.name=e.name,this.base=e.base?_ColorSpace.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let t=e.coords??this.base.coords;for(let e in t)"name"in t[e]||(t[e].name=e);this.coords=t;let n=e.white??this.base.white??"D65";this.white=Zc(n),this.formats=e.formats??{};for(let e in this.formats){let t=this.formats[e];t.type||="function",t.name||=e}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:_ColorSpace.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=()=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:gf(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),He.run("colorspace-init-end",this)}inGamut(e,{epsilon:t=k1}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:t});let n=Object.values(this.coords);return e.every((e,s)=>{let o=n[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(e))return!0;let[n,s]=o.range;return(n===void 0||e>=n-t)&&(s===void 0||e<=s+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=F1(e,this),e;let t;return e==="default"?t=Object.values(this.formats)[0]:t=this.formats[e],t?(t=F1(t,this),t):null}equals(e){return!!e&&(this===e||this.id===e||this.id===e.id)}to(e,t){if(arguments.length===1){const n=a(e);[e,t]=[n.space,n.coords]}if(e=_ColorSpace.get(e),this.equals(e))return t;t=t.map(e=>Number.isNaN(e)?0:e);let n=this.path,s=e.path,i,o;for(let e=0;e<n.length;e++)if(n[e].equals(s[e]))i=n[e],o=e;else break;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let e=n.length-1;e>o;e--)t=n[e].toBase(t);for(let e=o+1;e<s.length;e++)t=s[e].fromBase(t);return t}from(e,t){if(arguments.length===1){const n=a(e);[e,t]=[n.space,n.coords]}return e=_ColorSpace.get(e),e.to(this,t)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let n in this.coords){let t=this.coords[n],s=t.range||t.refRange;e.push(s?.min??0)}return e}static registry={};static get all(){return[...new Set(Object.values(_ColorSpace.registry))]}static register(e,t){if(arguments.length===1&&(t=arguments[0],e=t.id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=t,arguments.length===1&&t.aliases)for(let e of t.aliases)this.register(e,t);return t}static get(e,...t){if(!e||e instanceof _ColorSpace)return e;let n=it(e);if(n==="string"){let t=_ColorSpace.registry[e.toLowerCase()];if(!t)throw new TypeError(`No color space found with id = "${e}"`);return t}if(t.length)return _ColorSpace.get(...t);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,t){let o=it(e),n,s;if(o==="string"?e.includes(".")?[n,s]=e.split("."):[n,s]=[,e]:Array.isArray(e)?[n,s]=e:(n=e.space,s=e.coordId),n=_ColorSpace.get(n),n||(n=t),!n)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(o=it(s),o==="number"||o==="string"&&s>=0){let e=Object.entries(n.coords)[s];if(e)return{space:n,id:e[0],index:s,...e[1]}}n=_ColorSpace.get(n);let i=s.toLowerCase(),a=0;for(let e in n.coords){let t=n.coords[e];if(e.toLowerCase()===i||t.name?.toLowerCase()===i)return{space:n,id:e,index:a,...t};a++}throw new TypeError(`No "${s}" coordinate found in ${n.name}. Its coordinates are: ${Object.keys(n.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function gf(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function F1(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=r1(e.coords);let n=Object.entries(t).map(([t,n],s)=>{let o=e.coordGrammar[s][0],r=n.range||n.refRange,a=o.range,i="";return o=="<percentage>"?(a=[0,100],i="%"):o=="<angle>"&&(i="deg"),{fromRange:r,toRange:a,suffix:i}});e.serializeCoords=(e,t)=>e.map((e,s)=>{let{fromRange:o,toRange:i,suffix:a}=n[s];return o&&i&&(e=al(o,i,e)),e=ro(e,{precision:t,unit:a}),e})}return e}k=new n({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),L=class extends n{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=k),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let n=b(e.toXYZ_M,t);return this.white!==this.base.white&&(n=po(this.white,this.base.white,n)),n},e.fromBase??=t=>(t=po(this.base.white,this.white,t),b(e.fromXYZ_M,t))),e.referred??="display",super(e)}};function ts(e,t){return e=a(e),!t||e.space.equals(t)?e.coords.slice():(t=n.get(t),t.from(e))}function X(e,t){e=a(e);let{space:s,index:o}=n.resolveCoord(t,e.space),i=ts(e,s);return i[o]}function Kc(e,t,s){return e=a(e),t=n.get(t),e.coords=t.to(e.space,s),e}Kc.returns="color";function Se(e,t,s){if(e=a(e),arguments.length===2&&it(arguments[1])==="object"){let t=arguments[1];for(let n in t)Se(e,n,t[n])}else{typeof s=="function"&&(s=s(X(e,t)));let{space:o,index:a}=n.resolveCoord(t,e.space),i=ts(e,o);i[a]=s,Kc(e,o,i)}return e}Se.returns="color",bo=new n({id:"xyz-d50",name:"XYZ D50",white:"D50",base:k,fromBase:e=>po(k.white,"D50",e),toBase:e=>po("D50",k.white,e)}),T1=216/24389,Wc=24/116,ls=24389/27,jo=F.D50,Y=new n({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:jo,base:bo,fromBase(e){let n=e.map((e,t)=>e/jo[t]),t=n.map(e=>e>T1?Math.cbrt(e):(ls*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200;let n=[t[0]>Wc?Math.pow(t[0],3):(116*t[0]-16)/ls,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/ls,t[2]>Wc?Math.pow(t[2],3):(116*t[2]-16)/ls];return n.map((e,t)=>e*jo[t])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function ve(e){return(e%360+360)%360}function uf(e,t){if(e==="raw")return t;let[s,o]=t.map(ve),n=o-s;return e==="increasing"?n<0&&(o+=360):e==="decreasing"?n>0&&(s+=360):e==="longer"?-180<n&&n<180&&(n>0?s+=360:o+=360):e==="shorter"&&(n>180?s+=360:n<-180&&(o+=360)),[s,o]}kn=new n({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Y,fromBase(e){let[i,t,n]=e,s;const o=.02;return Math.abs(t)<o&&Math.abs(n)<o?s=NaN:s=Math.atan2(n,t)*180/Math.PI,[i,Math.sqrt(t**2+n**2),ve(s)]},toBase(e){let[s,t,n]=e;return t<0&&(t=0),isNaN(n)&&(n=0),[s,t*Math.cos(n*Math.PI/180),t*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),Hc=25**7,gs=Math.PI,Pc=180/gs,Gt=gs/180;function e4(e){const t=e*e,n=t*t*t*e;return n}function h4(e,t,{kL:n=1,kC:s=1,kH:o=1}={}){[e,t]=a([e,t]);let[w,A,g]=Y.from(e),x=kn.from(Y,[w,A,g])[1],[b,z,v]=Y.from(t),O=kn.from(Y,[b,z,v])[1];x<0&&(x=0),O<0&&(O=0);let R=(x+O)/2,C=e4(R),F=.5*(1-Math.sqrt(C/(C+Hc))),y=(1+F)*A,j=(1+F)*z,c=Math.sqrt(y**2+g**2),f=Math.sqrt(j**2+v**2),m=y===0&&g===0?0:Math.atan2(g,y),h=j===0&&v===0?0:Math.atan2(v,j);m<0&&(m+=2*gs),h<0&&(h+=2*gs),m*=Pc,h*=Pc;let V=b-w,M=f-c,r=h-m,l=m+h,k=Math.abs(r),u;c*f===0?u=0:k<=180?u=r:r>180?u=r-360:r<-180?u=r+360:q.warn("the unthinkable has happened");let S=2*Math.sqrt(f*c)*Math.sin(u*Gt/2),P=(w+b)/2,_=(c+f)/2,T=e4(_),i;c*f===0?i=l:k<=180?i=l/2:l<360?i=(l+360)/2:i=(l-360)/2;let D=(P-50)**2,L=1+.015*D/Math.sqrt(20+D),N=1+.045*_,d=1;d-=.17*Math.cos((i-30)*Gt),d+=.24*Math.cos(2*i*Gt),d+=.32*Math.cos((3*i+6)*Gt),d-=.2*Math.cos((4*i-63)*Gt);let E=1+.015*_*d,H=30*Math.exp(-1*((i-275)/25)**2),I=2*Math.sqrt(T/(T+Hc)),B=-1*Math.sin(2*H*Gt)*I,p=(V/(n*L))**2;return p+=(M/(s*N))**2,p+=(S/(o*E))**2,p+=B*(M/(s*N))*(S/(o*E)),Math.sqrt(p)}f4=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],Y3=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],rh=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],Ih=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],_t=new n({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:k,fromBase(e){let t=b(f4,e),n=t.map(e=>Math.cbrt(e));return b(rh,n)},toBase(e){let t=b(Ih,e),n=t.map(e=>e**3);return b(Y3,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Tc(e,t){[e,t]=a([e,t]);let[n,s,o]=_t.from(e),[i,r,c]=_t.from(t),l=n-i,d=s-r,u=o-c;return Math.sqrt(l**2+d**2+u**2)}Wh=75e-6;function Wt(e,t,{epsilon:s=Wh}={}){e=a(e),t||(t=e.space),t=n.get(t);let o=e.coords;return t!==e.space&&(o=t.from(e)),t.inGamut(o,{epsilon:s})}function vn(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function Uh(e,t,s="lab"){s=n.get(s);let o=s.from(e),i=s.from(t);return Math.sqrt(o.reduce((e,t,n)=>{let s=i[n];return isNaN(t)||isNaN(s)?e:e+(s-t)**2},0))}function Sm(e,t){return Uh(e,t,"lab")}Xh=Math.PI,Ac=Xh/180;function _m(e,t,{l:n=2,c:s=1}={}){[e,t]=a([e,t]);let[r,f,h]=Y.from(e),[,o,i]=kn.from(Y,[r,f,h]),[p,m,b]=Y.from(t),c=kn.from(Y,[p,m,b])[1];o<0&&(o=0),c<0&&(c=0);let C=r-p,u=o-c,O=f-m,w=h-b,_=O**2+w**2-u**2,j=.511;r>=16&&(j=.040975*r/(1+.01765*r));let y=.0638*o/(1+.0131*o)+.638,d;Number.isNaN(i)&&(i=0),i>=164&&i<=345?d=.56+Math.abs(.2*Math.cos((i+168)*Ac)):d=.36+Math.abs(.4*Math.cos((i+35)*Ac));let v=Math.pow(o,4),g=Math.sqrt(v/(v+1900)),x=y*(g*d+1-g),l=(C/(n*j))**2;return l+=(u/(s*y))**2,l+=_/x**2,Math.sqrt(l)}Ec=203,ko=new n({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:k,fromBase(e){return e.map(e=>Math.max(e*Ec,0))},toBase(e){return e.map(e=>Math.max(e/Ec,0))}}),_s=1.15,ys=.66,xc=2610/2**14,Fh=2**14/2610,mc=3424/2**12,dc=2413/2**7,lc=2392/2**7,Mh=1.7*2523/2**5,rc=2**5/(1.7*2523),ds=-.56,Wo=16295499532821565e-27,Sh=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],Ah=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],kh=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],Eh=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],nc=new n({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:ko,fromBase(e){let[t,o,n]=e,i=_s*t-(_s-1)*n,a=ys*o-(ys-1)*t,r=b(Sh,[i,a,n]),c=r.map(function(e){let t=mc+dc*(e/1e4)**xc,n=1+lc*(e/1e4)**xc;return(t/n)**Mh}),[s,l,d]=b(kh,c),u=(1+ds)*s/(1+ds*s)-Wo;return[u,l,d]},toBase(e){let[t,o,i]=e,a=(t+Wo)/(1+ds-ds*(t+Wo)),r=b(Eh,[a,o,i]),c=r.map(function(e){let t=mc-e**rc,n=lc*e**rc-dc,s=1e4*(t/n)**Fh;return s}),[l,d,n]=b(Ah,c),s=(l+(_s-1)*n)/_s,u=(d+(ys-1)*s)/ys;return[s,u,n]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Ko=new n({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:nc,fromBase(e){let[i,t,n]=e,s;const o=2e-4;return Math.abs(t)<o&&Math.abs(n)<o?s=NaN:s=Math.atan2(n,t)*180/Math.PI,[i,Math.sqrt(t**2+n**2),ve(s)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function l8(e,t){[e,t]=a([e,t]);let[r,o,n]=Ko.from(e),[c,i,s]=Ko.from(t),l=r-c,d=o-i;Number.isNaN(n)&&Number.isNaN(s)?(n=0,s=0):Number.isNaN(n)?n=s:Number.isNaN(s)&&(s=n);let u=n-s,h=2*Math.sqrt(o*i)*Math.sin(u/2*(Math.PI/180));return Math.sqrt(l**2+d**2+h**2)}gl=3424/4096,ma=2413/128,Xr=2392/128,Gr=2610/16384,xh=2523/32,Oh=16384/2610,Wr=32/2523,wh=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],_h=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],yh=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],jh=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],qo=new n({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:ko,fromBase(e){let t=b(wh,e);return m8(t)},toBase(e){let t=A8(e);return b(jh,t)}});function m8(e){let t=e.map(function(e){let t=gl+ma*(e/1e4)**Gr,n=1+Xr*(e/1e4)**Gr;return(t/n)**xh});return b(_h,t)}function A8(e){let t=b(yh,e),n=t.map(function(e){let t=Math.max(e**Wr-gl,0),n=ma-Xr*e**Wr;return 1e4*(t/n)**Oh});return n}function M8(e,t){[e,t]=a([e,t]);let[n,s,o]=qo.from(e),[i,r,c]=qo.from(t);return 720*Math.sqrt((n-i)**2+.25*(s-r)**2+(o-c)**2)}sh=F.D65,Sr=.42,Ar=1/Sr,Qo=2*Math.PI,Cr=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],th=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],eh=[[460,451,288],[460,-891,-261],[460,-220,-6300]],J3={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},ft={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Z3=180/Math.PI,yr=Math.PI/180;function Q3(e,t){const n=e.map(e=>{const n=je(t*Math.abs(e)*.01,Sr);return 400*mo(n,e)/(n+27.13)});return n}function D8(e,t){const n=100/t*27.13**Ar;return e.map(e=>{const t=Math.abs(e);return mo(n*je(t/(400-t),Ar),e)})}function N8(e){let t=ve(e);t<=ft.h[0]&&(t+=360);const n=d1(ft.h,t)-1,[o,i]=ft.h.slice(n,n+2),[a,r]=ft.e.slice(n,n+2),c=ft.H[n],s=(t-o)/a;return c+100*s/(s+(i-t)/r)}function R8(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[o,a]=ft.h.slice(n,n+2),[i,s]=ft.e.slice(n,n+2);return ve((t*(s*o-i*a)-100*o*s)/(t*(s-i)-100*s))}function q3(e,t,n,s,o){const i={};i.discounting=o,i.refWhite=e,i.surround=s;const c=e.map(e=>e*100);i.la=t,i.yb=n;const l=c[1],d=b(Cr,c);s=J3[i.surround];const u=s[0];i.c=s[1],i.nc=s[2];const h=1/(5*i.la+1),a=h**4;i.fl=a*i.la+.1*(1-a)*(1-a)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/l,i.z=1.48+Math.sqrt(i.n),i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const m=Math.max(Math.min(u*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=d.map(e=>Jn(1,l/e,m)),i.dRgbInv=i.dRgb.map(e=>1/e);const f=d.map((e,t)=>e*i.dRgb[t]),r=Q3(f,i.fl);return i.aW=i.nbb*(2*r[0]+r[1]+.05*r[2]),i}mr=q3(sh,64/Math.PI*.2,20,"average",!1);function lr(e,t){if(!(e.J!==void 0^e.Q!==void 0))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==void 0^e.M!==void 0^e.s!==void 0))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==void 0^e.H!==void 0))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let s=0;e.h!==void 0?s=ve(e.h)*yr:s=R8(e.H)*yr;const c=Math.cos(s),a=Math.sin(s);let n=0;e.J!==void 0?n=je(e.J,1/2)*.1:e.Q!==void 0&&(n=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==void 0?o=e.C/n:e.M!==void 0?o=e.M/t.flRoot/n:e.s!==void 0&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const r=je(o*Math.pow(1.64-Math.pow(.29,t.n),-.73),10/9),d=.25*(Math.cos(s+2)+3.8),u=t.aW*je(n,2/t.c/t.z),h=5e4/13*t.nc*t.ncb*d,i=u/t.nbb,l=23*(i+.305)*el(r,23*h+r*(11*c+108*a)),m=l*c,f=l*a,p=D8(b(eh,[i,m,f]).map(e=>e*1/1403),t.fl);return b(th,p.map((e,n)=>e*t.dRgbInv[n])).map(e=>e/100)}function K3(e,t){const f=e.map(e=>e*100),n=Q3(b(Cr,f).map((e,n)=>e*t.dRgb[n]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,c=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(c,i)%Qo+Qo)%Qo,g=.25*(Math.cos(a+2)+3.8),d=5e4/13*t.nc*t.ncb*el(g*Math.sqrt(i**2+c**2),n[0]+n[1]+1.05*n[2]+.305),l=je(d,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),u=t.nbb*(2*n[0]+n[1]+.05*n[2]),s=je(u/t.aW,.5*t.c*t.z),h=100*je(s,2),m=4/t.c*s*(t.aW+4)*t.flRoot,o=l*s,p=o*t.flRoot,r=ve(a*Z3),v=N8(r),j=50*je(t.c*l/(t.aW+4),1/2);return{J:h,C:o,h:r,s:j,Q:m,M:p,H:v}}U3=new n({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:k,fromBase(e){const t=K3(e,mr);return[t.J,t.M,t.h]},toBase(e){return lr({J:e[0],M:e[1],h:e[2]},mr)}}),W3=F.D65,L3=216/24389,sr=24389/27;function W8(e){const t=e>L3?Math.cbrt(e):(sr*e+16)/116;return 116*t-16}function nr(e){return e>8?Math.pow((e+16)/116,3):e/sr}function U8(e,t){let[i,a,n]=e,o=[],s=0;if(n===0)return[0,0,0];let r=nr(n);n>0?s=.00379058511492914*n**2+.608983189401032*n+.9155088574762233:s=9514440756550361e-21*n**2+.08693057439788597*n-21.928975842194614;const d=2e-12,u=15;let c=0,l=1/0;for(;c<=u;){o=lr({J:s,C:a,h:i},t);const e=Math.abs(o[1]-r);if(e<l){if(e<=d)return o;l=e}s=s-(o[1]-r)*s/(2*o[1]),c+=1}return lr({J:s,C:a,h:i},t)}function K8(e){const n=W8(e[1]);if(n===0)return[0,0,0];const s=K3(e,ji);return[ve(s.h),s.C,n]}ji=q3(W3,200/Math.PI*nr(50),nr(50)*100,"average",!1),Sn=new n({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:k,fromBase(e){return K8(e)},toBase(e){return U8(e,ji)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),T3=Math.PI/180,ka=[1,.007,.0228];function q4(e){e[1]<0&&(e=Sn.fromBase(Sn.toBase(e)));const t=Math.log(Math.max(1+ka[2]*e[1]*ji.flRoot,1))/ka[2],n=e[0]*T3,s=t*Math.cos(n),o=t*Math.sin(n);return[e[2],s,o]}function G8(e,t){[e,t]=a([e,t]);let[n,s,o]=q4(Sn.from(e)),[i,r,c]=q4(Sn.from(t));return Math.sqrt((n-i)**2+(s-r)**2+(o-c)**2)}en={deltaE76:Sm,deltaECMC:_m,deltaE2000:h4,deltaEJz:l8,deltaEITP:M8,deltaEOK:Tc,deltaEHCT:G8};function X8(e){const t=e?Math.floor(Math.log10(Math.abs(e))):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}ba={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function ut(e,{method:t=q.gamut_mapping,space:s=void 0,deltaEMethod:o="",jnd:i=2,blackWhiteClamp:r={}}={}){if(e=a(e),Ds(arguments[1])?s=arguments[1]:s||(s=e.space),s=n.get(s),Wt(e,s,{epsilon:0}))return e;let c;if(t==="css")c=Q8(e,{space:s});else{if(t!=="clip"&&!Wt(e,s)){Object.prototype.hasOwnProperty.call(ba,t)&&({method:t,jnd:i,deltaEMethod:o,blackWhiteClamp:r}=ba[t]);let a=h4;if(o!=="")for(let e in en)if("deltae"+o.toLowerCase()===e.toLowerCase()){a=en[e];break}let l=ut(g(e,s),{method:"clip",space:s});if(a(e,l)>i){if(Object.keys(r).length===3){let s=n.resolveCoord(r.channel),t=X(g(e,s.space),s.id);if(nt(t)&&(t=0),t>=r.max)return g({space:"xyz-d65",coords:F.D65},e.space);if(t<=r.min)return g({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=n.resolveCoord(t),f=l.space,d=l.id,o=g(e,f);o.coords.forEach((e,t)=>{nt(e)&&(o.coords[t]=0)});let p=l.range||l.refRange,v=p[0],m=X8(i),u=v,h=X(o,d);for(;h-u>m;){let e=vn(o);e=ut(e,{space:s,method:"clip"});let t=a(o,e);t-i<m?u=X(o,d):h=X(o,d),Se(o,d,(u+h)/2)}c=g(o,s)}else c=l}else c=g(e,s);if(t==="clip"||!Wt(c,s,{epsilon:0})){let e=Object.values(s.coords).map(e=>e.range||[]);c.coords=c.coords.map((t,n)=>{let[s,o]=e[n];return s!==void 0&&(t=Math.max(s,t)),o!==void 0&&(t=Math.min(t,o)),t})}}return s!==e.space&&(c=g(c,e.space)),e.coords=c.coords,e}ut.returns="color",va={WHITE:{space:_t,coords:[1,0,0]},BLACK:{space:_t,coords:[0,0,0]}};function Q8(e,{space:t}={}){const l=.02,u=1e-4;e=a(e),t||(t=e.space),t=n.get(t);const p=n.get("oklch");if(t.isUnbounded)return g(e,t);const o=g(e,p);let h=o.coords[0];if(h>=1){const n=g(va.WHITE,t);return n.alpha=e.alpha,g(n,t)}if(h<=0){const n=g(va.BLACK,t);return n.alpha=e.alpha,g(n,t)}if(Wt(o,t,{epsilon:0}))return g(o,t);function m(e){const n=g(e,t),s=Object.values(t.coords);return n.coords=n.coords.map((e,t)=>{if("range"in s[t]){const[n,o]=s[t].range;return c1(n,e,o)}return e}),n}let r=0,d=o.coords[1],f=!0,s=vn(o),i=m(s),c=Tc(i,s);if(c<l)return i;for(;d-r>u;){const e=(r+d)/2;if(s.coords[1]=e,f&&Wt(s,t,{epsilon:0}))r=e;else if(i=m(s),c=Tc(i,s),c<l){if(l-c<u)break;f=!1,r=e}else d=e}return i}function g(e,t,{inGamut:s}={}){e=a(e),t=n.get(t);let i=t.from(e),o={space:t,coords:i,alpha:e.alpha};return s&&(o=ut(o,s===!0?void 0:s)),o}g.returns="color";function Ks(e,{precision:t=q.precision,format:s="default",inGamut:o=!0,...i}={}){let c;e=a(e);let l=s;s=e.space.getFormat(s)??e.space.getFormat("default")??n.DEFAULT_FORMAT;let r=e.coords.slice();if(o||=s.toGamut,o&&!Wt(e)&&(r=ut(vn(e),o===!0?void 0:o).coords),s.type==="custom")if(i.precision=t,s.serialize)c=s.serialize(r,e.alpha,i);else throw new TypeError(`format ${l} can only be used to parse colors, not for serialization`);else{let o=s.name||"color";s.serializeCoords?r=s.serializeCoords(r,t):t!==null&&(r=r.map(e=>ro(e,{precision:t})));let i=[...r];if(o==="color"){let t=s.id||s.ids?.[0]||e.space.id;i.unshift(t)}let n=e.alpha;t!==null&&(n=ro(n,{precision:t}));let a=e.alpha>=1||s.noAlpha?"":`${s.commas?",":" /"} ${n}`;c=`${o}(${i.join(s.commas?", ":" ")}${a})`}return c}if(B4=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],H4=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]],Ps=new L({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:B4,fromXYZ_M:H4}),Rs=1.09929682680944,ya=.018053968510807,wa=new L({id:"rec2020",name:"REC.2020",base:Ps,toBase(e){return e.map(function(e){return e<ya*4.5?e/4.5:Math.pow((e+Rs-1)/Rs,1/.45)})},fromBase(e){return e.map(function(e){return e>=ya?Rs*Math.pow(e,.45)-(Rs-1):4.5*e})}}),M4=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],A4=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]],Aa=new L({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:M4,fromXYZ_M:A4}),C4=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],_=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Sa=new L({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:C4,fromXYZ_M:_}),Ma={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},Fa=Array(3).fill("<percentage> | <number>[0, 255]"),Ta=Array(3).fill("<number>[0, 255]"),Xt=new L({id:"srgb",name:"sRGB",base:Sa,fromBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n<=.04045?e/12.92:t*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:Fa},rgb_number:{name:"rgb",commas:!0,coords:Ta,noAlpha:!0},color:{},rgba:{coords:Fa,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:Ta},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,e=>{t.push(parseInt(e,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(e=>Math.round(e*255));let s=n&&e.every(e=>e%17===0),o=e.map(e=>s?(e/17).toString(16):e.toString(16).padStart(2,"0")).join("");return"#"+o}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=Ma.black,t.alpha=0):t.coords=Ma[e],t.coords)return t}}}}),Da=new L({id:"p3",cssId:"display-p3",name:"P3",base:Aa,fromBase:Xt.fromBase,toBase:Xt.toBase}),q.display_space=Xt,typeof CSS!="undefined"&&CSS.supports)for(let e of[Y,wa,Da]){let t=e.getMinCoords(),n={space:e,coords:t,alpha:1},s=Ks(n);if(CSS.supports("color",s)){q.display_space=e;break}}function ef(e,{space:t=q.display_space,...n}={}){let s=Ks(e,n);if(typeof CSS=="undefined"||CSS.supports("color",s)||!q.display_space)s=new String(s),s.color=e;else{let o=e,i=e.coords.some(nt)||nt(e.alpha);if(i&&!(J8??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=vn(e),o.coords=o.coords.map(w),o.alpha=w(o.alpha),s=Ks(o,n),CSS.supports("color",s)))return s=new String(s),s.color=o,s;o=g(o,t),s=new String(Ks(o,n)),s.color=o}return s}function tf(e,t){return e=a(e),t=a(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((e,n)=>e===t.coords[n])}function rt(e){return X(e,[k,"y"])}function v4(e,t){Se(e,[k,"y"],t)}function nf(e){Object.defineProperty(e.prototype,"luminance",{get(){return rt(this)},set(e){v4(this,e)}})}m4=Object.freeze({__proto__:null,getLuminance:rt,register:nf,setLuminance:v4});function sf(e,t){e=a(e),t=a(t);let n=Math.max(rt(e),0),s=Math.max(rt(t),0);return s>n&&([n,s]=[s,n]),(n+.05)/(s+.05)}u4=.56,d4=.57,l4=.62,r4=.65,Ua=.022,i4=1.414,o4=.1,t4=5e-4,Q1=1.14,Ka=.027,X1=1.14;function G1(e){return e>=Ua?e:e+(Ua-e)**i4}function Pn(e){let t=e<0?-1:1,n=Math.abs(e);return t*Math.pow(n,2.4)}function cf(e,t){t=a(t),e=a(e);let s,n,o,i,r,c;t=g(t,"srgb"),[i,r,c]=t.coords;let u=Pn(i)*.2126729+Pn(r)*.7151522+Pn(c)*.072175;e=g(e,"srgb"),[i,r,c]=e.coords;let h=Pn(i)*.2126729+Pn(r)*.7151522+Pn(c)*.072175,l=G1(u),d=G1(h),m=d>l;return Math.abs(d-l)<t4?n=0:m?(s=d**u4-l**d4,n=s*Q1):(s=d**r4-l**l4,n=s*X1),Math.abs(n)<o4?o=0:n>0?o=n-Ka:o=n+Ka,o*100}function lf(e,t){e=a(e),t=a(t);let n=Math.max(rt(e),0),s=Math.max(rt(t),0);s>n&&([n,s]=[s,n]);let o=n+s;return o===0?0:(n-s)/o}U1=5e4;function df(e,t){e=a(e),t=a(t);let s=Math.max(rt(e),0),n=Math.max(rt(t),0);return n>s&&([s,n]=[n,s]),n===0?U1:(s-n)/n}function hf(e,t){e=a(e),t=a(t);let n=X(e,[Y,"l"]),s=X(t,[Y,"l"]);return Math.abs(n-s)}N1=216/24389,Ga=24/116,es=24389/27,bi=F.D65,gi=new n({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:bi,base:k,fromBase(e){let n=e.map((e,t)=>e/bi[t]),t=n.map(e=>e>N1?Math.cbrt(e):(es*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200;let n=[t[0]>Ga?Math.pow(t[0],3):(116*t[0]-16)/es,e[0]>8?Math.pow((e[0]+16)/116,3):e[0]/es,t[2]>Ga?Math.pow(t[2],3):(116*t[2]-16)/es];return n.map((e,t)=>e*bi[t])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),mi=Math.pow(5,.5)*.5+.5;function ff(e,t){e=a(e),t=a(t);let s=X(e,[gi,"l"]),o=X(t,[gi,"l"]),i=Math.abs(Math.pow(s,mi)-Math.pow(o,mi)),n=Math.pow(i,1/mi)*Math.SQRT2-40;return n<7.5?0:n}is=Object.freeze({__proto__:null,contrastAPCA:cf,contrastDeltaPhi:ff,contrastLstar:hf,contrastMichelson:lf,contrastWCAG21:sf,contrastWeber:df});function pf(e,t,n={}){Ds(n)&&(n={algorithm:n});let{algorithm:s,...o}=n;if(!s){let e=Object.keys(is).map(e=>e.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`)}e=a(e),t=a(t);for(let n in is)if("contrast"+s.toLowerCase()===n.toLowerCase())return is[n](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${s}`)}function ui(e){let[t,n,o]=ts(e,k),s=t+15*n+3*o;return[4*t/s,9*n/s]}function M1(e){let[t,n,o]=ts(e,k),s=t+n+o;return[t/s,n/s]}function vf(e){Object.defineProperty(e.prototype,"uv",{get(){return ui(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return M1(this)}})}x1=Object.freeze({__proto__:null,register:vf,uv:ui,xy:M1});function hs(e,t,n={}){Ds(n)&&(n={method:n});let{method:s=q.deltaE,...o}=n;for(let n in en)if("deltae"+s.toLowerCase()===n.toLowerCase())return en[n](e,t,o);throw new TypeError(`Unknown deltaE method: ${s}`)}function bf(e,t=.25){let s=n.get("oklch","lch"),o=[s,"l"];return Se(e,o,e=>e*(1+t))}function jf(e,t=.25){let s=n.get("oklch","lch"),o=[s,"l"];return Se(e,o,e=>e*(1-t))}_1=Object.freeze({__proto__:null,darken:jf,lighten:bf});function y1(e,t,n=.5,s={}){[e,t]=[a(e),a(t)],it(n)==="object"&&([n,s]=[.5,n]);let o=bs(e,t,s);return o(n)}function v1(e,t,n={}){let o;Pr(e)&&([o,n]=[e,t],[e,t]=o.rangeArgs.colors);let{maxDeltaE:r,deltaEMethod:d,steps:l=2,maxSteps:c=1e3,...u}=n;o||([e,t]=[a(e),a(t)],o=bs(e,t,u));let h=hs(e,t),i=r>0?Math.max(l,Math.ceil(h/r)+1):l,s=[];if(c!==void 0&&(i=Math.min(i,c)),i===1)s=[{p:.5,color:o(.5)}];else{let e=1/(i-1);s=Array.from({length:i},(t,n)=>{let s=n*e;return{p:s,color:o(s)}})}if(r>0){let e=s.reduce((e,t,n)=>{if(n===0)return 0;let o=hs(t.color,s[n-1].color,d);return Math.max(e,o)},0);for(;e>r;){e=0;for(let t=1;t<s.length&&s.length<c;t++){let i=s[t-1],a=s[t],n=(a.p+i.p)/2,r=o(n);e=Math.max(e,hs(r,i.color),hs(r,a.color)),s.splice(t,0,{p:n,color:o(n)}),t++}}}return s=s.map(e=>e.color),s}function bs(e,t,s={}){if(Pr(e)){let[n,s]=[e,t];return bs(...n.rangeArgs.colors,{...n.rangeArgs.options,...s})}let{space:o,outputSpace:i,progression:r,premultiplied:c}=s;e=a(e),t=a(t),e=vn(e),t=vn(t);let l={colors:[e,t],options:s};if(o?o=n.get(o):o=n.registry[q.interpolationSpace]||e.space,i=i?n.get(i):o,e=g(e,o),t=g(t,o),e=ut(e),t=ut(t),o.coords.h&&o.coords.h.type==="angle"){let r=s.hue=s.hue||"shorter",a=[o,"h"],[n,i]=[X(e,a),X(t,a)];isNaN(n)&&!isNaN(i)?n=i:isNaN(i)&&!isNaN(n)&&(i=n),[n,i]=uf(r,[n,i]),Se(e,a,n),Se(t,a,i)}return c&&(e.coords=e.coords.map(t=>t*e.alpha),t.coords=t.coords.map(e=>e*t.alpha)),Object.assign(n=>{n=r?r(n):n;let l=e.coords.map((e,s)=>{let o=t.coords[s];return Jn(e,o,n)}),a=Jn(e.alpha,t.alpha,n),s={space:o,coords:l,alpha:a};return c&&(s.coords=s.coords.map(e=>e/a)),i!==o&&(s=g(s,i)),s},{rangeArgs:l})}function Pr(e){return it(e)==="function"&&!!e.rangeArgs}q.interpolationSpace="lab";function yf(e){e.defineFunction("mix",y1,{returns:"color"}),e.defineFunction("range",bs,{returns:"function<color>"}),e.defineFunction("steps",v1,{returns:"array<color>"})}var Tl,Gl,Ml,nd,sd,Ue,od,ad,_l,rd,cd,hd,bl,md,pd,gd,vd,bd,yd,fl,Wd,u1,h1,He,F,q,g1,k1,n,k,L,bo,T1,Wc,ls,jo,Y,kn,Hc,gs,Pc,Gt,f4,Y3,rh,Ih,_t,Wh,Xh,Ac,Ec,ko,_s,ys,xc,Fh,mc,dc,lc,Mh,rc,ds,Wo,Sh,Ah,kh,Eh,nc,Ko,gl,ma,Xr,Gr,xh,Oh,Wr,wh,_h,yh,jh,qo,sh,Sr,Ar,Qo,Cr,th,eh,J3,ft,Z3,yr,mr,U3,W3,L3,sr,ji,Sn,T3,ka,en,ba,va,B4,H4,Ps,Rs,ya,wa,M4,A4,Aa,C4,_,Sa,Ma,Fa,Ta,Xt,Da,J8,m4,u4,d4,l4,r4,Ua,i4,o4,t4,Q1,Ka,X1,U1,N1,Ga,es,bi,gi,mi,is,x1,_1,vu,Fu,Su,hl,ul,Au,ku,il,tl,Jc,Qc,Eu,Gc,Uc,$c,yo,Cu,Ic,Ou,wu,Cc,$s,So,Vs,_u,bc,W,yu,Bf,Po,Ll,hc,gu,cc,pu,he,Oe,I,se,Ke,Zt,Mr,kr,_r,fu,ot,mu,hu,uu,du,lu,cu,au,ou,li,di,nu,tu,eu,Jd,Zd,Qd,Xd,Gd,$d,yi,_i,wi,Ft,xi,Ci,Ei,ki,Ya,Vd,Bd,Re,Id,Pd,Rd,$a,Ld,Nd,Dd,Ha,zd,Pa,Ut,Kt,Wi,Ui,Qn,qt,Te,fs,M,za,On,V,ks,_e,me,Ca,Oa,gn,aa,at,oe,mn,da,ua,ln,pa,Zr,Qr,Q,Fn,an,ha,la,_a,ca,oa,qs,Ls,Ns,Ms,na,ta,ea,Ji,Zi,Qi,Xi,Yi,Ki,$i,Bi,Hi,Ri,Li,Gs,Ni,Di,zi,Fi,Si,Ai,rs,vi,pi,Za,fi,Ys,ci,Dn,on,ri,ir,ar,rr,Td,Fd,dr,ii,Md,Sd,fr,Ad,Le,E,z,Wn,p,Mt,wr,kd,Ed,Cd,Er,xd,Od,wd,_d,Go,Tr,ke,Gn,jt,A,Rr,Nn,Nt,td,o,c,Bo,pc,yc,_c,u,yn,Yl,ql,Co,Kl,m,B,Ul,ht,Lc,Wl,Ye,e,wo,Bc,ge,ye,ae,cs,Jt,Pt,Lt,Ve,Be,gt,sn,Un,$n,mt,$l,zn,ho,le,Ae,uo,xs,Fe,co,Ws,ao,jn,i,Qt,ce,Vl,Bl,$e,os,U,Ol,xl,Qe,Js,Il,Al,Dt,Ce,Os,un,Pl,L1,Nl,er,Dl,zl,Hl,Ht,so,j,ie,xe,xo,Ee,bt,Ot,wc,Fo,To,zo,No,Io,Vo,nn,oc,Me,ss,s,S,ld,re,qe,y,Hn,fd,T,qr,Kr,$,jd,J,Xo,wt,K,Rn,C,ne,Or,Je,Vn,hr,Bn,vs,Xn,Pi,Yn,Ba,qn,P,Mi,Kd,qd,Yd,Ge,Xa,Xe,Qa,Ja,N,$t,tn,su,tr,iu,st,ru,ai,ur,pr,D,ni,br,En,xn,St,At,zt,pn,fc,Is,dn,Us,Dc,_o,Xc,cl,ml,fa,jl,Tu,wl,ns,Qs,Va,Zs,Pu,vl,Sc,kc,Vu,$u,Ao,Yt,Jr,Hs,vc,Gu,hn,fn,Zu,Lo,e1,t1,et,dt,Ts,Ro,Ho,Ss,As,uc,wn,Cs,$o,ac,ws,ec,Dr,b1,j1,Fr,jr,ei,ms,us,C1,vr,A1,S1,or,hi,pe,z1,D1,Tn,B1,V1,$1,ee,yt,qa,xt,Y1,Ct,Tt,vt,Z1,Ne,n4,s4,It,be,a4,Wa,c4,Ia,Ii,Vi,Ra,La,qi,p4,g4,Na,An,Gi,y4,_4,ps,O4,x4,bn,E4,k4,ia,S4,ra,F4,T4,z4,D4,N4,L4,R4,P4,v,Z8,ja,V4,xa,sa,Ea,Y4,J4,e0,t0,n0,s0,o0,i0,a0,r0,c0,l0,d0,u0,h0,m0,f0,p0,g0,v0,b0,j0,y0,_0,w0,O0,x0,C0,E0,k0,A0,S0,M0,F0,T0,z0,D0,N0,L0,R0,P0,H0,I0,B0,V0,$0,W0,U0,K0,q0,Y0,G0,X0,Q0,Z0,J0,e2,t2,n2,s2,o2,i2,a2,r2,c2,l2,d2,u2,h2,m2,f2,p2,g2,v2,b2,j2,y2,_2,w2,O2,x2,C2,E2,k2,A2,S2,M2,F2,T2,z2,D2,N2,L2,R2,P2,H2,I2,B2,V2,$2,W2,U2,K2,q2,Y2,G2,X2,Q2,Z2,J2,e3,t3,n3,s3,o3,i3,a3,r3,c3,l3,d3,u3,h3,m3,f3,p3,g3,v3,b3,j3,y3,_3,w3,O3,x3,C3,E3,k3,A3,S3,M3,F3,t,r,de,Kn,ct,R3,Bt,cr,lt,oi,gr,si,ti,Jo,Zo,pt,kt,xr,nh,zr,Lr,Hr,Ir,Br,$r,Ur,Yr,jc,sc,ic,U4,Jh,Zh,Eo,Fs,Yh,qh,Fc,zs,Bh,Hh,Ph,Nh,Dh,zh,bh,gh,ph,fh,mh,hh,uh,dh,tt,ah,oh,G3,l,$3,V3,B3,I3,H3,P3,N3,D3,z3,Z4,X4,K4,Rl,W4,I4,w4,j4,b4,Nc,Cn,Rc,J1,q1,K1,W1,Vc,I1,R1,G,Rt,qc,Yc,vo,go,Ie,p1,fo,a1,o1,Z,Ju,rl,Wu,ll,bu,dl,we,h,R,Es,js,ze,De,te,oo,yl,Ze,no,eo,kl,Sl,Jl,Zl,Ql,Xl,Xs,_f=Object.freeze({__proto__:null,isRange:Pr,mix:y1,range:bs,register:yf,steps:v1}),f1=new n({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Xt,fromBase:e=>{let o=Math.max(...e),l=Math.min(...e),[c,i,a]=e,[t,s,n]=[NaN,0,(l+o)/2],r=o-l;if(r!==0){switch(s=n===0||n===1?0:(o-n)/Math.min(n,1-n),o){case c:t=(i-a)/r+(i<a?6:0);break;case i:t=(a-c)/r+2;break;case a:t=(c-i)/r+4}t=t*60}return s<0&&(t+=180,s=Math.abs(s)),t>=360&&(t-=360),[t,s*100,n*100]},toBase:e=>{let[t,o,n]=e;t=t%360,t<0&&(t+=360),o/=100,n/=100;function s(e){let s=(e+t/30)%12,i=o*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[s(0),s(8),s(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),m1=new n({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:f1,fromBase(e){let[o,s,t]=e;s/=100,t/=100;let n=t+s*Math.min(t,1-t);return[o,n===0?0:200*(1-t/n),100*n]},toBase(e){let[o,s,n]=e;s/=100,n/=100;let t=n*(1-s/2);return[o,t===0||t===1?0:(n-t)/Math.min(t,1-t)*100,t*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),wf=new n({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:m1,fromBase(e){let[n,s,t]=e;return[n,t*(100-s)/100,100-t]},toBase(e){let[o,t,n]=e;t/=100,n/=100;let i=t+n;if(i>=1){let e=t/i;return[o,0,e*100]}let s=1-n,a=s===0?0:1-t/s;return[o,a*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),xf=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],Cf=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]],l1=new L({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe\xAE 98 RGB compatible",white:"D65",toXYZ_M:xf,fromXYZ_M:Cf}),Sf=new L({id:"a98rgb",cssId:"a98-rgb",name:"Adobe\xAE 98 RGB compatible",base:l1,toBase:e=>e.map(e=>Math.pow(Math.abs(e),563/256)*Math.sign(e)),fromBase:e=>e.map(e=>Math.pow(Math.abs(e),256/563)*Math.sign(e))}),Mf=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],Tf=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]],i1=new L({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:bo,toXYZ_M:Mf,fromXYZ_M:Tf}),zf=1/512,Nf=16/512,Lf=new L({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:i1,toBase(e){return e.map(e=>e<Nf?e/16:e**1.8)},fromBase(e){return e.map(e=>e>=zf?e**(1/1.8):16*e)}}),Rf=new n({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:_t,fromBase(e){let[i,t,n]=e,s;const o=2e-4;return Math.abs(t)<o&&Math.abs(n)<o?s=NaN:s=Math.atan2(n,t)*180/Math.PI,[i,Math.sqrt(t**2+n**2),ve(s)]},toBase(e){let[i,o,t]=e,n,s;return isNaN(t)?(n=0,s=0):(n=o*Math.cos(t*Math.PI/180),s=o*Math.sin(t*Math.PI/180)),[i,n,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}}),Qu=F.D65,Pf=216/24389,Yu=24389/27,[qu,Ku]=ui({space:k,coords:Qu}),Uu=new n({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:Qu,base:k,fromBase(e){let s=[w(e[0]),w(e[1]),w(e[2])],t=s[1],[o,i]=ui({space:k,coords:s});if(!Number.isFinite(o)||!Number.isFinite(i))return[0,0,0];let n=t<=Pf?Yu*t:116*Math.cbrt(t)-16;return[n,13*n*(o-qu),13*n*(i-Ku)]},toBase(e){let[t,n,s]=e;if(t===0||nt(t))return[0,0,0];n=w(n),s=w(s);let a=n/(13*t)+qu,o=s/(13*t)+Ku,i=t<=8?t/Yu:Math.pow((t+16)/116,3);return[i*(9*a/(4*o)),i,i*((12-3*a-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),Oc=new n({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:Uu,fromBase(e){let[i,t,n]=e,s;const o=.02;return Math.abs(t)<o&&Math.abs(n)<o?s=NaN:s=Math.atan2(n,t)*180/Math.PI,[i,Math.sqrt(t**2+n**2),ve(s)]},toBase(e){let[s,t,n]=e;return t<0&&(t=0),isNaN(n)&&(n=0),[s,t*Math.cos(n*Math.PI/180),t*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),Hf=216/24389,If=24389/27,Iu=_[0][0],Hu=_[0][1],Cl=_[0][2],Ru=_[1][0],Lu=_[1][1],Fl=_[1][2],Nu=_[2][0],Du=_[2][1],El=_[2][2];function rn(e,t,n){const s=t/(Math.sin(n)-e*Math.cos(n));return s<0?1/0:s}function to(e){const i=Math.pow(e+16,3)/1560896,t=i>Hf?i:e/If,a=t*(284517*Iu-94839*Cl),r=t*(838422*Cl+769860*Hu+731718*Iu),n=t*(632260*Cl-126452*Hu),c=t*(284517*Ru-94839*Fl),l=t*(838422*Fl+769860*Lu+731718*Ru),s=t*(632260*Fl-126452*Lu),d=t*(284517*Nu-94839*El),u=t*(838422*El+769860*Du+731718*Nu),o=t*(632260*El-126452*Du);return{r0s:a/n,r0i:r*e/n,r1s:a/(n+126452),r1i:(r-769860)*e/(n+126452),g0s:c/s,g0i:l*e/s,g1s:c/(s+126452),g1i:(l-769860)*e/(s+126452),b0s:d/o,b0i:u*e/o,b1s:d/(o+126452),b1i:(u-769860)*e/(o+126452)}}function zu(e,t){const n=t/360*Math.PI*2,s=rn(e.r0s,e.r0i,n),o=rn(e.r1s,e.r1i,n),i=rn(e.g0s,e.g0i,n),a=rn(e.g1s,e.g1i,n),r=rn(e.b0s,e.b0i,n),c=rn(e.b1s,e.b1i,n);return Math.min(s,o,i,a,r,c)}Fu=new n({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Oc,gamutSpace:Xt,fromBase(e){let[t,o,s]=[w(e[0]),w(e[1]),w(e[2])],n;if(t>99.9999999)n=0,t=100;else if(t<1e-8)n=0,t=0;else{let e=to(t),i=zu(e,s);n=o/i*100}return[s,n,t]},toBase(e){let[s,o,t]=[w(e[0]),w(e[1]),w(e[2])],n;if(t>99.9999999)t=100,n=0;else if(t<1e-8)t=0,n=0;else{let e=to(t),i=zu(e,s);n=i/100*o}return[t,n,s]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),_[0][0],_[0][1],_[0][2],_[1][0],_[1][1],_[1][2],_[2][0],_[2][1],_[2][2];function cn(e,t){return Math.abs(t)/Math.sqrt(Math.pow(e,2)+1)}function Mu(e){let t=cn(e.r0s,e.r0i),n=cn(e.r1s,e.r1i),s=cn(e.g0s,e.g0i),o=cn(e.g1s,e.g1i),i=cn(e.b0s,e.b0i),a=cn(e.b1s,e.b1i);return Math.min(t,n,s,o,i,a)}Su=new n({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Oc,gamutSpace:"self",fromBase(e){let[t,s,o]=[w(e[0]),w(e[1]),w(e[2])],n;if(t>99.9999999)n=0,t=100;else if(t<1e-8)n=0,t=0;else{let e=to(t),o=Mu(e);n=s/o*100}return[o,n,t]},toBase(e){let[s,o,t]=[w(e[0]),w(e[1]),w(e[2])],n;if(t>99.9999999)t=100,n=0;else if(t<1e-8)t=0,n=0;else{let e=to(t),s=Mu(e);n=s/100*o}return[t,n,s]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),hl=203,ul=2610/2**14,Au=2**14/2610,ku=2523/2**5,il=2**5/2523,tl=3424/2**12,Jc=2413/2**7,Qc=2392/2**7,Eu=new L({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Ps,toBase(e){return e.map(function(e){let t=(Math.max(e**il-tl,0)/(Jc-Qc*e**il))**Au;return t*1e4/hl})},fromBase(e){return e.map(function(e){let t=Math.max(e*hl/1e4,0),n=tl+Jc*t**ul,s=1+Qc*t**ul;return(n/s)**ku})}}),Gc=.17883277,Uc=.28466892,$c=.55991073,yo=3.7743,Cu=new L({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ps,toBase(e){return e.map(function(e){return e<=.5?e**2/3*yo:(Math.exp((e-$c)/Gc)+Uc)/12*yo})},fromBase(e){return e.map(function(e){return e/=yo,e<=1/12?Math.sqrt(3*e):Gc*Math.log(12*e-Uc)+$c})}}),Ic={},He.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=xu(e.W1,e.W2,e.options.method))}),He.add("chromatic-adaptation-end",e=>{e.M||(e.M=xu(e.W1,e.W2,e.options.method))});function Oo({id:e,toCone_M:t,fromCone_M:n}){Ic[e]=arguments[0]}function xu(e,t,n="Bradford"){let s=Ic[n],[o,i,a]=b(s.toCone_M,e),[r,c,l]=b(s.toCone_M,t),d=[[r/o,0,0],[0,c/i,0],[0,0,l/a]],u=b(d,s.toCone_M),h=b(s.fromCone_M,u);return h}Oo({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),Oo({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),Oo({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),Oo({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(F,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),F.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767],Ou=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],wu=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]],Cc=new L({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:F.ACES,toXYZ_M:Ou,fromXYZ_M:wu}),$s=2**-16,So=-.35828683,Vs=(Math.log2(65504)+9.72)/17.52,_u=new L({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[So,Vs],name:"Red"},g:{range:[So,Vs],name:"Green"},b:{range:[So,Vs],name:"Blue"}},referred:"scene",base:Cc,toBase(e){const t=(9.72-15)/17.52;return e.map(function(e){return e<=t?(2**(e*17.52-9.72)-$s)*2:e<Vs?2**(e*17.52-9.72):65504})},fromBase(e){return e.map(function(e){return e<=0?(Math.log2($s)+9.72)/17.52:e<$s?(Math.log2($s+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),bc=Object.freeze({__proto__:null,A98RGB:Sf,A98RGB_Linear:l1,ACEScc:_u,ACEScg:Cc,CAM16_JMh:U3,HCT:Sn,HPLuv:Su,HSL:f1,HSLuv:Fu,HSV:m1,HWB:wf,ICTCP:qo,JzCzHz:Ko,Jzazbz:nc,LCH:kn,LCHuv:Oc,Lab:Y,Lab_D65:gi,Luv:Uu,OKLCH:Rf,OKLab:_t,P3:Da,P3_Linear:Aa,ProPhoto:Lf,ProPhoto_Linear:i1,REC_2020:wa,REC_2020_Linear:Ps,REC_2100_HLG:Cu,REC_2100_PQ:Eu,XYZ_ABS_D65:ko,XYZ_D50:bo,XYZ_D65:k,sRGB:Xt,sRGB_Linear:Sa}),W=class _Color{constructor(...o){let e;o.length===1&&(e=a(o[0]));let i,s,t;e?(i=e.space||e.spaceId,s=e.coords,t=e.alpha):[i,s,t]=o,Object.defineProperty(this,"space",{value:n.get(i),writable:!1,enumerable:!0,configurable:!0}),this.coords=s?s.slice():[0,0,0],this.alpha=t>1||t===void 0?1:t<0?0:t;for(let e=0;e<this.coords.length;e++)this.coords[e]==="NaN"&&(this.coords[e]=NaN);for(let e in this.space.coords)Object.defineProperty(this,e,{get:()=>this.get(e),set:t=>this.set(e,t)})}get spaceId(){return this.space.id}clone(){return new _Color(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let e=ef(this,...t);return e.color=new _Color(e.color),e}static get(e,...t){return e instanceof _Color?e:new _Color(e,...t)}static defineFunction(e,t,n=t){let{instance:i=!0,returns:s}=n,o=function(...n){let e=t(...n);if(s==="color")e=_Color.get(e);else if(s==="function<color>"){let t=e;e=function(...e){let n=t(...e);return _Color.get(n)},Object.assign(e,t)}else s==="array<color>"&&(e=e.map(e=>_Color.get(e)));return e};e in _Color||(_Color[e]=o),i&&(_Color.prototype[e]=function(...e){return o(this,...e)})}static defineFunctions(e){for(let t in e)_Color.defineFunction(t,e[t],e[t])}static extend(e){if(e.register)e.register(_Color);else for(let t in e)_Color.defineFunction(t,e[t])}},W.defineFunctions({get:X,getAll:ts,set:Se,setAll:Kc,to:g,equals:tf,inGamut:Wt,toGamut:ut,distance:Uh,toString:Ks}),Object.assign(W,{util:u1,hooks:He,WHITES:F,Space:n,spaces:n.registry,parse:O1,defaults:q});for(let e of Object.keys(bc))n.register(bc[e]);for(let e in n.registry)gc(e,n.registry[e]);He.add("colorspace-init-end",e=>{gc(e.id,e),e.aliases?.forEach(t=>{gc(t,e)})});function gc(e,t){let s=e.replace(/-/g,"_");Object.defineProperty(W.prototype,s,{get(){let s=this.getAll(e);return typeof Proxy=="undefined"?s:new Proxy(s,{has:(e,s)=>{try{return n.resolveCoord([t,s]),!0}catch{}return Reflect.has(e,s)},get:(e,s,o)=>{if(s&&typeof s!="symbol"&&!(s in e)){let{index:o}=n.resolveCoord([t,s]);if(o>=0)return e[o]}return Reflect.get(e,s,o)},set:(s,o,i,a)=>{if(o&&typeof o!="symbol"&&!(o in s)||o>=0){let{index:a}=n.resolveCoord([t,o]);if(a>=0)return s[a]=i,this.setAll(e,s),!0}return Reflect.set(s,o,i,a)}})},set(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}W.extend(en),W.extend({deltaE:hs}),Object.assign(W,{deltaEMethods:en}),W.extend(_1),W.extend({contrast:pf}),W.extend(x1),W.extend(m4),W.extend(_f),W.extend(is),yu=class _Uint16Image{height;width;data;static DEFAULT_COLORSPACE="rec2100-hlg";static SDR_MULTIPLIER=2**16-1;static COLORSPACES={"rec2100-hlg":"rec2100hlg","display-p3":"p3",srgb:"sRGB","rec2100-pq":"rec2100pq"};colorSpace;constructor(e,t,n){n==null?this.colorSpace=_Uint16Image.DEFAULT_COLORSPACE:this.colorSpace=n,this.height=t,this.width=e,this.data=new Uint16Array(t*e*4)}fill(e){if(e.length!=4)return;for(let t=0;t<this.data.length;t+=4)this.data[t]=e[0],this.data[t+1]=e[1],this.data[t+2]=e[2],this.data[t+3]=e[3];return this}getPixel(e,t){const n=(t*this.width+e)*4;return this.data.slice(n,n+4)}setPixel(e,t,n){const s=(t*this.width+e)*4;this.data[s+0]=n[0],this.data[s+1]=n[1],this.data[s+2]=n[2],this.data[s+3]=n[3]}static scaleUint8ToUint16(e){return e<<8|e}getImageData(){return this.data===void 0||this.data===null?null:new ImageData(this.data,this.width,this.height,{colorSpace:this.colorSpace})}static convertPixelToRec2100_hlg(e){const s=_Uint16Image.COLORSPACES["rec2100-hlg"],o=new W("srgb",Array.from(e.slice(0,3)).map(e=>e/255),e[3]/255),t=o.to(s),n=t.coords.map(e=>Math.round(e*_Uint16Image.SDR_MULTIPLIER));return n.push(t.alpha*_Uint16Image.SDR_MULTIPLIER),Uint16Array.from(n)}static convertArrayToRec2100_hlg(e){const t=new Uint16Array(e.length);for(let n=0;n<e.length;n+=4){const s=e.slice(n,n+4),o=_Uint16Image.convertPixelToRec2100_hlg(s);t.set(o,n)}return t}pixelCallback(e){for(let t=0;t<this.data.length;t+=4)this.data.set(e(this.data[t],this.data[t+1],this.data[t+2],this.data[t+3]),t)}static async loadSDRImageData(e){return fetch(e).then(e=>e.blob()).then(e=>createImageBitmap(e)).then(e=>{const{width:n,height:s}=e,o=new OffscreenCanvas(n,s),t=o.getContext("2d");return t?.drawImage(e,0,0),t}).then(e=>e?.getImageData(0,0,e?.canvas.width,e?.canvas.height))}static fromImageData(e){const t=new _Uint16Image(e.width,e.height);if(e.colorSpace=="srgb")t.data=_Uint16Image.convertArrayToRec2100_hlg(e.data);else if(e.colorSpace==_Uint16Image.DEFAULT_COLORSPACE)t.data=e.data;else throw new Error(`ColorSpace ${e.colorSpace} isn't supported!`);return t}static async fromURL(e){return _Uint16Image.loadSDRImageData(e).then(e=>{if(e!==void 0)return _Uint16Image.fromImageData(e)})}setImageData(e){if(this.width=e.width,this.height=e.height,e.colorSpace=="srgb")this.data=_Uint16Image.convertArrayToRec2100_hlg(e.data);else if(e.colorSpace==_Uint16Image.DEFAULT_COLORSPACE)this.data=e.data;else throw new Error(`ColorSpace ${e.colorSpace} isn't supported!`);this.colorSpace=_Uint16Image.DEFAULT_COLORSPACE}clone(){const e=new _Uint16Image(this.width,this.height,this.colorSpace);return e.data=this.data.slice(),e}};function ju(){try{const e=screen.colorDepth/3,t=e>8,n=window.matchMedia("(dynamic-range: high)").matches,s=window.matchMedia("(color-gamut: rec2020)").matches||window.matchMedia("(color-gamut: p3)").matches;return!!(s&&n)&&e===Math.round(e)&&!!t}catch(e){return console.error("Bad window.screen test",e),!1}}Bf={colorSpace:yu.DEFAULT_COLORSPACE,pixelFormat:"float16"},Po="176",Ll=0,hc=1,gu=2,cc=1,pu=2,he=3,Oe=0,I=1,se=2,Ke=0,Zt=1,Mr=2,kr=3,_r=4,fu=5,ot=100,mu=101,hu=102,uu=103,du=104,lu=200,cu=201,au=202,ou=203,li=204,di=205,nu=206,tu=207,eu=208,Jd=209,Zd=210,Qd=211,Xd=212,Gd=213,$d=214,yi=0,_i=1,wi=2,Ft=3,xi=4,Ci=5,Ei=6,ki=7,Ya=0,Vd=1,Bd=2,Re=0,Id=1,Pd=2,Rd=3,$a=4,Ld=5,Nd=6,Dd=7,Ha="attached",zd="detached",Pa=300,Ut=301,Kt=302,Wi=303,Ui=304,Qn=306,qt=1e3,Te=1001,fs=1002,M=1003,za=1004,On=1005,V=1006,ks=1007,_e=1008,me=1009,Ca=1010,Oa=1011,gn=1012,aa=1013,at=1014,oe=1015,mn=1016,da=1017,ua=1018,ln=1020,pa=35902,Zr=1021,Qr=1022,Q=1023,Fn=1026,an=1027,ha=1028,la=1029,_a=1030,ca=1031,oa=1033,qs=33776,Ls=33777,Ns=33778,Ms=33779,na=35840,ta=35841,ea=35842,Ji=35843,Zi=36196,Qi=37492,Xi=37496,Yi=37808,Ki=37809,$i=37810,Bi=37811,Hi=37812,Ri=37813,Li=37814,Gs=37815,Ni=37816,Di=37817,zi=37818,Fi=37819,Si=37820,Ai=37821,rs=36492,vi=36494,pi=36495,Za=36283,fi=36284,Ys=36285,ci=36286,Dn=2300,on=2301,ri=2302,ir=2400,ar=2401,rr=2402,Td=2500,Fd=0,dr=1,ii=2,Md=3200,Sd=3201,fr=0,Ad=1,Le="",E="srgb",z="srgb-linear",Wn="linear",p="srgb",Mt=7680,wr=519,kd=512,Ed=513,Cd=514,Er=515,xd=516,Od=517,wd=518,_d=519,Go=35044,Tr="300 es",ke=2e3,Gn=2001,jt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const n=s[e];if(n!==void 0){const e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const t=n.slice(0);for(let n=0,s=t.length;n<s;n++)t[n].call(this,e);e.target=null}}},A=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rr=1234567,Nn=Math.PI/180,Nt=180/Math.PI;function ue(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0,o=A[e&255]+A[e>>8&255]+A[e>>16&255]+A[e>>24&255]+"-"+A[t&255]+A[t>>8&255]+"-"+A[t>>16&15|64]+A[t>>24&255]+"-"+A[n&63|128]+A[n>>8&255]+"-"+A[n>>16&255]+A[n>>24&255]+A[s&255]+A[s>>8&255]+A[s>>16&255]+A[s>>24&255];return o.toLowerCase()}function d(e,t,n){return Math.max(t,Math.min(n,e))}function Vr(e,t){return(e%t+t)%t}function Wf(e,t,n,s,o){return s+(e-t)*(o-s)/(n-t)}function Uf(e,t,n){return e!==t?(n-e)/(t-e):0}function Zn(e,t,n){return(1-n)*e+n*t}function qf(e,t,n,s){return Zn(e,t,1-Math.exp(-n*s))}function Gf(e,t=1){return t-Math.abs(Vr(e,t*2)-t)}function Xf(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Qf(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Zf(e,t){return e+Math.floor(Math.random()*(t-e+1))}function t6(e,t){return e+Math.random()*(t-e)}function i6(e){return e*(.5-Math.random())}function r6(e){e!==void 0&&(Rr=e);let t=Rr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function c6(e){return e*Nn}function l6(e){return e*Nt}function m6(e){return(e&e-1)===0&&e!==0}function f6(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function p6(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function g6(e,t,n,s,o){const l=Math.cos,d=Math.sin,i=l(n/2),a=d(n/2),r=l((t+s)/2),c=d((t+s)/2),u=l((t-s)/2),h=d((t-s)/2),m=l((s-t)/2),f=d((s-t)/2);switch(o){case"XYX":e.set(i*c,a*u,a*h,i*r);break;case"YZY":e.set(a*h,i*c,a*u,i*r);break;case"ZXZ":e.set(a*u,a*h,i*c,i*r);break;case"XZX":e.set(i*c,a*f,a*m,i*r);break;case"YXY":e.set(a*m,i*c,a*f,i*r);break;case"ZYZ":e.set(a*f,a*m,i*c,i*r);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function fe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function f(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}td={DEG2RAD:Nn,RAD2DEG:Nt,generateUUID:ue,clamp:d,euclideanModulo:Vr,mapLinear:Wf,inverseLerp:Uf,lerp:Zn,damp:qf,pingpong:Gf,smoothstep:Xf,smootherstep:Qf,randInt:Zf,randFloat:t6,randFloatSpread:i6,seededRandom:r6,degToRad:c6,radToDeg:l6,isPowerOfTwo:m6,ceilPowerOfTwo:f6,floorPowerOfTwo:p6,setQuaternionFromProperEuler:g6,normalize:f,denormalize:fe},o=class _Vector2{constructor(e=0,t=0){_Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6],this.y=t[1]*n+t[4]*s+t[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=d(this.x,e.x,t.x),this.y=d(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=d(this.x,e,t),this.y=d(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(d(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){const e=Math.atan2(-this.y,-this.x)+Math.PI;return e}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(d(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,i=this.y-e.y;return this.x=o*n-i*s+e.x,this.y=o*s+i*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},c=class _Matrix3{constructor(e,t,n,s,o,i,a,r,c){_Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,i,a,r,c)}set(e,t,n,s,o,i,a,r,c){const l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=o,l[5]=r,l[6]=n,l[7]=i,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[3],r=n[6],c=n[1],l=n[4],d=n[7],u=n[2],h=n[5],m=n[8],f=s[0],p=s[3],g=s[6],v=s[1],b=s[4],j=s[7],y=s[2],_=s[5],w=s[8];return o[0]=i*f+a*v+r*y,o[3]=i*p+a*b+r*_,o[6]=i*g+a*j+r*w,o[1]=c*f+l*v+d*y,o[4]=c*p+l*b+d*_,o[7]=c*g+l*j+d*w,o[2]=u*f+h*v+m*y,o[5]=u*p+h*b+m*_,o[8]=u*g+h*j+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],i=e[4],a=e[5],r=e[6],c=e[7],l=e[8];return t*i*l-t*a*c-n*o*l+n*a*r+s*o*c-s*i*r}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],d=e[3],a=e[4],i=e[5],r=e[6],c=e[7],l=e[8],u=l*a-i*c,h=i*r-l*d,m=c*d-a*r,f=n*u+s*h+o*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const t=1/f;return e[0]=u*t,e[1]=(o*c-l*s)*t,e[2]=(i*s-o*a)*t,e[3]=h*t,e[4]=(l*n-o*r)*t,e[5]=(o*d-i*n)*t,e[6]=m*t,e[7]=(s*r-c*n)*t,e[8]=(a*n-s*d)*t,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,i,a){const r=Math.cos(o),c=Math.sin(o);return this.set(n*r,n*c,-n*(r*i+c*a)+i+e,-s*c,s*r,-s*(-c*i+r*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return(new this.constructor).fromArray(this.elements)}},Bo=new c;function ed(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function In(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function v6(){const e=In("canvas");return e.style.display="block",e}pc={};function Do(e){if(e in pc)return;pc[e]=!0,console.warn(e)}function b6(e,t,n){return new Promise(function(s,o){function i(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:o();break;case e.TIMEOUT_EXPIRED:setTimeout(i,n);break;default:s()}}setTimeout(i,n)})}function N6(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function L6(e){const t=e.elements,n=t[11]===-1;n?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}yc=(new c).set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=(new c).set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R6(){const e={enabled:!0,workingColorSpace:z,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===p&&(e.r=We(e.r),e.g=We(e.g),e.b=We(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===p&&(e.r=_n(e.r),e.g=_n(e.g),e.b=_n(e.b)),e)},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Le?Wn:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return e.define({[z]:{primaries:t,whitePoint:s,transfer:Wn,toXYZ:yc,fromXYZ:_c,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:E},outputColorSpaceConfig:{drawingBufferColorSpace:E}},[E]:{primaries:t,whitePoint:s,transfer:p,toXYZ:yc,fromXYZ:_c,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:E}}}),e}u=R6();function We(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function _n(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}Yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yn===void 0&&(yn=In("canvas")),yn.width=e.width,yn.height=e.height;const t=yn.getContext("2d");e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=yn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=In("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),s=o.data;for(let e=0;e<s.length;e++)s[e]=We(s[e]/255)*255;return n.putImageData(o,0,0),t}if(e.data){const t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(We(t[e]/255)*255):t[e]=We(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ql=0,Co=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ql++}),this.uuid=ue(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const s=e===void 0||typeof e=="string";if(!s&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},t=this.data;if(t!==null){let e;if(Array.isArray(t)){e=[];for(let n=0,s=t.length;n<s;n++)t[n].isDataTexture?e.push(Mc(t[n].image)):e.push(Mc(t[n]))}else e=Mc(t);n.url=e}return s||(e.images[this.uuid]=n),n}};function Mc(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?Yl.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Kl=0,B=class _Texture extends jt{constructor(e=_Texture.DEFAULT_IMAGE,t=_Texture.DEFAULT_MAPPING,n=Te,s=Te,i=V,a=_e,r=Q,l=me,d=_Texture.DEFAULT_ANISOTROPY,u=Le){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ue(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=i,this.minFilter=a,this.anisotropy=d,this.format=r,this.internalFormat=null,this.type=l,this.offset=new o(0,0),this.repeat=new o(1,1),this.center=new o(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new c,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return(new this.constructor).copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),n||(e.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qt:e.x=e.x-Math.floor(e.x);break;case Te:e.x=e.x<0?0:1;break;case fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qt:e.y=e.y-Math.floor(e.y);break;case Te:e.y=e.y<0?0:1;break;case fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}},B.DEFAULT_IMAGE=null,B.DEFAULT_MAPPING=Pa,B.DEFAULT_ANISOTROPY=1,m=class _Vector4{constructor(e=0,t=0,n=0,s=1){_Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,i=this.w,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o+t[12]*i,this.y=t[1]*n+t[5]*s+t[9]*o+t[13]*i,this.z=t[2]*n+t[6]*s+t[10]*o+t[14]*i,this.w=t[3]*n+t[7]*s+t[11]*o+t[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let v,n,s,o;const a=.01,m=.1,t=e.elements,f=t[0],i=t[4],r=t[8],c=t[1],p=t[5],l=t[9],d=t[2],u=t[6],g=t[10];if(Math.abs(i-c)<a&&Math.abs(r-d)<a&&Math.abs(l-u)<a){if(Math.abs(i+c)<m&&Math.abs(r+d)<m&&Math.abs(l+u)<m&&Math.abs(f+p+g-3)<m)return this.set(1,0,0,0),this;v=Math.PI;const e=(f+1)/2,t=(p+1)/2,h=(g+1)/2,b=(i+c)/4,j=(r+d)/4,y=(l+u)/4;return e>t&&e>h?e<a?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(e),s=b/n,o=j/n):t>h?t<a?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(t),n=b/s,o=y/s):h<a?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(h),n=j/o,s=y/o),this.set(n,s,o,v),this}let h=Math.sqrt((u-l)*(u-l)+(r-d)*(r-d)+(c-i)*(c-i));return Math.abs(h)<.001&&(h=1),this.x=(u-l)/h,this.y=(r-d)/h,this.z=(c-i)/h,this.w=Math.acos((f+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=d(this.x,e.x,t.x),this.y=d(this.y,e.y,t.y),this.z=d(this.z,e.z,t.z),this.w=d(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=d(this.x,e,t),this.y=d(this.y,e,t),this.z=d(this.z,e,t),this.w=d(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(d(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ul=class extends jt{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth?n.depth:1,this.scissor=new m(0,0,e,t),this.scissorTest=!1,this.viewport=new m(0,0,e,t);const o={width:e,height:t,depth:this.depth};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:V,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},n);const s=new B(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const i=n.count;for(let e=0;e<i;e++)this.textures[e]=s.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return(new this.constructor).copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Co(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ht=class extends Ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Lc=class extends B{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=M,this.minFilter=M,this.wrapR=Te,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Wl=class extends B{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=M,this.minFilter=M,this.wrapR=Te,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ye=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,i,a){let r=n[s+0],c=n[s+1],l=n[s+2],d=n[s+3];const u=o[i+0],h=o[i+1],m=o[i+2],f=o[i+3];if(a===0){e[t+0]=r,e[t+1]=c,e[t+2]=l,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=h,e[t+2]=m,e[t+3]=f;return}if(d!==f||r!==u||c!==h||l!==m){let e=1-a;const t=r*u+c*h+l*m+d*f,s=t>=0?1:-1,o=1-t*t;if(o>Number.EPSILON){const n=Math.sqrt(o),i=Math.atan2(n,t*s);e=Math.sin(e*i)/n,a=Math.sin(a*i)/n}const n=a*s;if(r=r*e+u*n,c=c*e+h*n,l=l*e+m*n,d=d*e+f*n,e===1-a){const e=1/Math.sqrt(r*r+c*c+l*l+d*d);r*=e,c*=e,l*=e,d*=e}}e[t]=r,e[t+1]=c,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,o,i){const a=n[s],r=n[s+1],c=n[s+2],l=n[s+3],d=o[i],u=o[i+1],h=o[i+2],m=o[i+3];return e[t]=a*m+l*d+r*h-c*u,e[t+1]=r*m+l*u+c*d-a*h,e[t+2]=c*m+l*h+a*u-r*d,e[t+3]=l*m-a*d-r*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const d=e._x,u=e._y,h=e._z,m=e._order,c=Math.cos,l=Math.sin,n=c(d/2),s=c(u/2),o=c(h/2),i=l(d/2),a=l(u/2),r=l(h/2);switch(m){case"XYZ":this._x=i*s*o+n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o-i*a*r;break;case"YXZ":this._x=i*s*o+n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o+i*a*r;break;case"ZXY":this._x=i*s*o-n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o-i*a*r;break;case"ZYX":this._x=i*s*o-n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o+i*a*r;break;case"YZX":this._x=i*s*o+n*a*r,this._y=n*a*o+i*s*r,this._z=n*s*r-i*a*o,this._w=n*s*o-i*a*r;break;case"XZY":this._x=i*s*o-n*a*r,this._y=n*a*o-i*s*r,this._z=n*s*r+i*a*o,this._w=n*s*o+i*a*r;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+m)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,n=Math.sin(s);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],s=t[5],c=t[9],l=t[2],d=t[6],o=t[10],u=n+s+o;if(u>0){const e=.5/Math.sqrt(u+1);this._w=.25/e,this._x=(d-c)*e,this._y=(a-l)*e,this._z=(r-i)*e}else if(n>s&&n>o){const e=2*Math.sqrt(1+n-s-o);this._w=(d-c)/e,this._x=.25*e,this._y=(i+r)/e,this._z=(a+l)/e}else if(s>o){const e=2*Math.sqrt(1+s-n-o);this._w=(a-l)/e,this._x=(i+r)/e,this._y=.25*e,this._z=(c+d)/e}else{const e=2*Math.sqrt(1+o-n-s);this._w=(r-i)/e,this._x=(a+l)/e,this._y=(c+d)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(d(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,i=e._w,a=t._x,r=t._y,c=t._z,l=t._w;return this._x=n*l+i*a+s*c-o*r,this._y=s*l+i*r+o*a-n*c,this._z=o*l+i*c+n*r-s*a,this._w=i*l-n*a-s*r-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,i=this._z,a=this._w;let n=a*e._w+s*e._x+o*e._y+i*e._z;if(n<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,n=-n):this.copy(e),n>=1)return this._w=a,this._x=s,this._y=o,this._z=i,this;const d=1-n*n;if(d<=Number.EPSILON){const e=1-t;return this._w=e*a+t*this._w,this._x=e*s+t*this._x,this._y=e*o+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}const l=Math.sqrt(d),u=Math.atan2(l,n),r=Math.sin((1-t)*u)/l,c=Math.sin(t*u)/l;return this._w=a*r+this._w*c,this._x=s*r+this._x*c,this._y=o*r+this._y*c,this._z=i*r+this._z*c,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},e=class _Vector3{constructor(e=0,t=0,n=0){_Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6]*o,this.y=t[1]*n+t[4]*s+t[7]*o,this.z=t[2]*n+t[5]*s+t[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,t=e.elements,i=1/(t[3]*n+t[7]*s+t[11]*o+t[15]);return this.x=(t[0]*n+t[4]*s+t[8]*o+t[12])*i,this.y=(t[1]*n+t[5]*s+t[9]*o+t[13])*i,this.z=(t[2]*n+t[6]*s+t[10]*o+t[14])*i,this}applyQuaternion(e){const o=this.x,i=this.y,a=this.z,t=e.x,n=e.y,s=e.z,r=e.w,c=2*(n*a-s*i),l=2*(s*o-t*a),d=2*(t*i-n*o);return this.x=o+r*c+n*d-s*l,this.y=i+r*l+s*c-t*d,this.z=a+r*d+t*l-n*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o,this.y=t[1]*n+t[5]*s+t[9]*o,this.z=t[2]*n+t[6]*s+t[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=d(this.x,e.x,t.x),this.y=d(this.y,e.y,t.y),this.z=d(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=d(this.x,e,t),this.y=d(this.y,e,t),this.z=d(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(d(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,i=t.x,a=t.y,r=t.z;return this.x=s*r-o*a,this.y=o*i-n*r,this.z=n*a-s*i,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(d(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wo=new e,Bc=new Ye,ge=class{constructor(t=new e(1/0,1/0,1/0),n=new e(-(1/0),-(1/0),-(1/0))){this.isBox3=!0,this.min=t,this.max=n}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ae.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ae.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ae.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return(new this.constructor).copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-(1/0),this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=s.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ae):ae.fromBufferAttribute(s,t),ae.applyMatrix4(e.matrixWorld),this.expandByPoint(ae);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const s=e.children;for(let e=0,n=s.length;e<n;e++)this.expandByObject(s[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ae),ae.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sn),Un.subVectors(this.max,sn),Jt.subVectors(e.a,sn),Pt.subVectors(e.b,sn),Lt.subVectors(e.c,sn),Ve.subVectors(Pt,Jt),Be.subVectors(Lt,Pt),gt.subVectors(Jt,Lt);let t=[0,-Ve.z,Ve.y,0,-Be.z,Be.y,0,-gt.z,gt.y,Ve.z,0,-Ve.x,Be.z,0,-Be.x,gt.z,0,-gt.x,-Ve.y,Ve.x,0,-Be.y,Be.x,0,-gt.y,gt.x,0];return!!nl(t,Jt,Pt,Lt,Un)&&(t=[1,0,0,0,1,0,0,0,1],!!nl(t,Jt,Pt,Lt,Un)&&($n.crossVectors(Ve,Be),t=[$n.x,$n.y,$n.z],nl(t,Jt,Pt,Lt,Un)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ae).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ae).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ye),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ye=[new e,new e,new e,new e,new e,new e,new e,new e],ae=new e,cs=new ge,Jt=new e,Pt=new e,Lt=new e,Ve=new e,Be=new e,gt=new e,sn=new e,Un=new e,$n=new e,mt=new e;function nl(e,t,n,s,o){for(let i=0,l=e.length-3;i<=l;i+=3){mt.fromArray(e,i);const d=o.x*Math.abs(mt.x)+o.y*Math.abs(mt.y)+o.z*Math.abs(mt.z),a=t.dot(mt),r=n.dot(mt),c=s.dot(mt);if(Math.max(-Math.max(a,r,c),Math.min(a,r,c))>d)return!1}return!0}$l=new ge,zn=new e,ho=new e,le=class{constructor(t=new e,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$l.setFromPoints(e).getCenter(n);let s=0;for(let t=0,o=e.length;t<o;t++)s=Math.max(s,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zn.subVectors(e,this.center);const t=zn.lengthSq();if(t>this.radius*this.radius){const e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(zn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zn.copy(e.center).add(ho)),this.expandByPoint(zn.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return(new this.constructor).copy(this)}},Ae=new e,uo=new e,xs=new e,Fe=new e,co=new e,Ws=new e,ao=new e,jn=class{constructor(t=new e,n=new e(0,0,-1)){this.origin=t,this.direction=n}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ae)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ae.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ae.copy(this.origin).addScaledVector(this.direction,t),Ae.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){uo.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),Fe.copy(this.origin).sub(uo);const a=e.distanceTo(t)*.5,r=-this.direction.dot(xs),l=Fe.dot(this.direction),c=-Fe.dot(xs),u=Fe.lengthSq(),m=Math.abs(1-r*r);let i,o,d,h;if(m>0)if(i=r*c-l,o=r*l-c,h=a*m,i>=0)if(o>=-h)if(o<=h){const e=1/m;i*=e,o*=e,d=i*(i+r*o+2*l)+o*(r*i+o+2*c)+u}else o=a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o=-a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o<=-h?(i=Math.max(0,-(-r*a+l)),o=i>0?-a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u):o<=h?(i=0,o=Math.min(Math.max(-a,-c),a),d=o*(o+2*c)+u):(i=Math.max(0,-(r*a+l)),o=i>0?a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u);else o=r>0?-a:a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,i),s&&s.copy(uo).addScaledVector(xs,o),d}intersectSphere(e,t){Ae.subVectors(e.center,this.origin);const n=Ae.dot(this.direction),s=Ae.dot(Ae)-n*n,o=e.radius*e.radius;if(s>o)return null;const i=Math.sqrt(o-s),a=n-i,r=n+i;return r<0?null:a<0?this.at(r,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);if(t===0)return!0;const n=e.normal.dot(this.direction);return n*t<0}intersectBox(e,t){let n,s,i,a,r,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,o=this.origin;return l>=0?(n=(e.min.x-o.x)*l,s=(e.max.x-o.x)*l):(n=(e.max.x-o.x)*l,s=(e.min.x-o.x)*l),d>=0?(i=(e.min.y-o.y)*d,a=(e.max.y-o.y)*d):(i=(e.max.y-o.y)*d,a=(e.min.y-o.y)*d),n>a||i>s?null:((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),u>=0?(r=(e.min.z-o.z)*u,c=(e.max.z-o.z)*u):(r=(e.max.z-o.z)*u,c=(e.min.z-o.z)*u),n>c||r>s?null:((r>n||n!==n)&&(n=r),(c<s||s!==s)&&(s=c),s<0?null:this.at(n>=0?n:s,t)))}intersectsBox(e){return this.intersectBox(e,Ae)!==null}intersectTriangle(e,t,n,s,o){co.subVectors(t,e),Ws.subVectors(n,e),ao.crossVectors(co,Ws);let i=this.direction.dot(ao),a;if(i>0){if(s)return null;a=1}else if(i<0)a=-1,i=-i;else return null;Fe.subVectors(this.origin,e);const r=a*this.direction.dot(Ws.crossVectors(Fe,Ws));if(r<0)return null;const c=a*this.direction.dot(co.cross(Fe));if(c<0)return null;if(r+c>i)return null;const l=-a*Fe.dot(ao);return l<0?null:this.at(l/i,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}},i=class _Matrix4{constructor(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p){_Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p)}set(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=o,g[5]=i,g[9]=a,g[13]=r,g[2]=c,g[6]=l,g[10]=d,g[14]=u,g[3]=h,g[7]=m,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new _Matrix4).fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Qt.setFromMatrixColumn(e,0).length(),o=1/Qt.setFromMatrixColumn(e,1).length(),i=1/Qt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*i,t[9]=n[9]*i,t[10]=n[10]*i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,c=e.x,l=e.y,d=e.z,i=Math.cos(c),n=Math.sin(c),a=Math.cos(l),s=Math.sin(l),r=Math.cos(d),o=Math.sin(d);if(e.order==="XYZ"){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=-a*o,t[8]=s,t[1]=c+l*s,t[5]=e-d*s,t[9]=-n*a,t[2]=d-e*s,t[6]=l+c*s,t[10]=i*a}else if(e.order==="YXZ"){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e+d*n,t[4]=l*n-c,t[8]=i*s,t[1]=i*o,t[5]=i*r,t[9]=-n,t[2]=c*n-l,t[6]=d+e*n,t[10]=i*a}else if(e.order==="ZXY"){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e-d*n,t[4]=-i*o,t[8]=l+c*n,t[1]=c+l*n,t[5]=i*r,t[9]=d-e*n,t[2]=-i*s,t[6]=n,t[10]=i*a}else if(e.order==="ZYX"){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=l*s-c,t[8]=e*s+d,t[1]=a*o,t[5]=d*s+e,t[9]=c*s-l,t[2]=-s,t[6]=n*a,t[10]=i*a}else if(e.order==="YZX"){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=d-e*o,t[8]=l*o+c,t[1]=o,t[5]=i*r,t[9]=-n*r,t[2]=-s*r,t[6]=c*o+l,t[10]=e-d*o}else if(e.order==="XZY"){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=-o,t[8]=s*r,t[1]=e*o+d,t[5]=i*r,t[9]=c*o-l,t[2]=l*o-c,t[6]=n*r,t[10]=d*o+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vl,e,Bl)}lookAt(e,t,n){const s=this.elements;return U.subVectors(e,t),U.lengthSq()===0&&(U.z=1),U.normalize(),$e.crossVectors(n,U),$e.lengthSq()===0&&(Math.abs(n.z)===1?U.x+=1e-4:U.z+=1e-4,U.normalize(),$e.crossVectors(n,U)),$e.normalize(),os.crossVectors(U,$e),s[0]=$e.x,s[4]=os.x,s[8]=U.x,s[1]=$e.y,s[5]=os.y,s[9]=U.y,s[2]=$e.z,s[6]=os.z,s[10]=U.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[4],r=n[8],c=n[12],l=n[1],d=n[5],u=n[9],h=n[13],m=n[2],f=n[6],p=n[10],g=n[14],v=n[3],b=n[7],j=n[11],y=n[15],_=s[0],w=s[4],O=s[8],x=s[12],C=s[1],E=s[5],k=s[9],A=s[13],S=s[2],M=s[6],F=s[10],T=s[14],z=s[3],D=s[7],N=s[11],L=s[15];return o[0]=i*_+a*C+r*S+c*z,o[4]=i*w+a*E+r*M+c*D,o[8]=i*O+a*k+r*F+c*N,o[12]=i*x+a*A+r*T+c*L,o[1]=l*_+d*C+u*S+h*z,o[5]=l*w+d*E+u*M+h*D,o[9]=l*O+d*k+u*F+h*N,o[13]=l*x+d*A+u*T+h*L,o[2]=m*_+f*C+p*S+g*z,o[6]=m*w+f*E+p*M+g*D,o[10]=m*O+f*k+p*F+g*N,o[14]=m*x+f*A+p*T+g*L,o[3]=v*_+b*C+j*S+y*z,o[7]=v*w+b*E+j*M+y*D,o[11]=v*O+b*k+j*F+y*N,o[15]=v*x+b*A+j*T+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],i=e[1],a=e[5],r=e[9],c=e[13],l=e[2],d=e[6],u=e[10],h=e[14],m=e[3],f=e[7],p=e[11],g=e[15];return m*(+o*r*d-s*c*d-o*a*u+n*c*u+s*a*h-n*r*h)+f*(+t*r*h-t*c*u+o*i*u-s*i*h+s*c*l-o*r*l)+p*(+t*c*d-t*a*h-o*i*d+n*i*h+o*a*l-n*c*l)+g*(-s*a*l-t*r*d+t*a*u+s*i*d-n*i*u+n*r*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],d=e[4],f=e[5],r=e[6],c=e[7],l=e[8],i=e[9],u=e[10],h=e[11],m=e[12],a=e[13],p=e[14],g=e[15],b=i*p*c-a*u*c+a*r*h-f*p*h-i*r*g+f*u*g,j=m*u*c-l*p*c-m*r*h+d*p*h+l*r*g-d*u*g,y=l*a*c-m*i*c+m*f*h-d*a*h-l*f*g+d*i*g,_=m*i*r-l*a*r-m*f*u+d*a*u+l*f*p-d*i*p,w=t*b+n*j+s*y+o*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const v=1/w;return e[0]=b*v,e[1]=(a*u*o-i*p*o-a*s*h+n*p*h+i*s*g-n*u*g)*v,e[2]=(f*p*o-a*r*o+a*s*c-n*p*c-f*s*g+n*r*g)*v,e[3]=(i*r*o-f*u*o-i*s*c+n*u*c+f*s*h-n*r*h)*v,e[4]=j*v,e[5]=(l*p*o-m*u*o+m*s*h-t*p*h-l*s*g+t*u*g)*v,e[6]=(m*r*o-d*p*o-m*s*c+t*p*c+d*s*g-t*r*g)*v,e[7]=(d*u*o-l*r*o+l*s*c-t*u*c-d*s*h+t*r*h)*v,e[8]=y*v,e[9]=(m*i*o-l*a*o-m*n*h+t*a*h+l*n*g-t*i*g)*v,e[10]=(d*a*o-m*f*o+m*n*c-t*a*c-d*n*g+t*f*g)*v,e[11]=(l*f*o-d*i*o-l*n*c+t*i*c+d*n*h-t*f*h)*v,e[12]=_*v,e[13]=(l*a*s-m*i*s+m*n*u-t*a*u-l*n*p+t*i*p)*v,e[14]=(m*f*s-d*a*s-m*n*r+t*a*r+d*n*p-t*f*p)*v,e[15]=(d*i*s-l*f*s+l*n*r-t*i*r-d*n*u+t*f*u)*v,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),c=1-a,r=e.x,o=e.y,n=e.z,i=c*r,l=c*o;return this.set(i*r+a,i*o-s*n,i*n+s*o,0,i*o+s*n,l*o+a,l*n-s*r,0,i*n-s*o,l*n+s*r,c*n*n+a,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,i){return this.set(1,n,o,0,e,1,i,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,i=t._y,r=t._z,c=t._w,w=o+o,d=i+i,a=r+r,_=o*w,y=o*d,m=o*a,f=i*d,p=i*a,g=r*a,v=c*w,b=c*d,j=c*a,h=n.x,u=n.y,l=n.z;return s[0]=(1-(f+g))*h,s[1]=(y+j)*h,s[2]=(m-b)*h,s[3]=0,s[4]=(y-j)*u,s[5]=(1-(_+g))*u,s[6]=(p+v)*u,s[7]=0,s[8]=(m+b)*l,s[9]=(p-v)*l,s[10]=(1-(_+f))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=Qt.set(s[0],s[1],s[2]).length();const c=Qt.set(s[4],s[5],s[6]).length(),l=Qt.set(s[8],s[9],s[10]).length(),d=this.determinant();d<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],ce.copy(this);const i=1/o,a=1/c,r=1/l;return ce.elements[0]*=i,ce.elements[1]*=i,ce.elements[2]*=i,ce.elements[4]*=a,ce.elements[5]*=a,ce.elements[6]*=a,ce.elements[8]*=r,ce.elements[9]*=r,ce.elements[10]*=r,t.setFromRotationMatrix(ce),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,s,o,i,a=ke){const r=this.elements,d=2*o/(t-e),u=2*o/(n-s),h=(t+e)/(t-e),m=(n+s)/(n-s);let c,l;if(a===ke)c=-(i+o)/(i-o),l=-2*i*o/(i-o);else if(a===Gn)c=-i/(i-o),l=-i*o/(i-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return r[0]=d,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=u,r[9]=m,r[13]=0,r[2]=0,r[6]=0,r[10]=c,r[14]=l,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,s,o,i,a=ke){const r=this.elements,u=1/(t-e),h=1/(n-s),c=1/(i-o),m=(t+e)*u,f=(n+s)*h;let l,d;if(a===ke)l=(i+o)*c,d=-2*c;else if(a===Gn)l=o*c,d=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return r[0]=2*u,r[4]=0,r[8]=0,r[12]=-m,r[1]=0,r[5]=2*h,r[9]=0,r[13]=-f,r[2]=0,r[6]=0,r[10]=d,r[14]=-l,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qt=new e,ce=new i,Vl=new e(0,0,0),Bl=new e(1,1,1),$e=new e,os=new e,U=new e,Ol=new i,xl=new Ye,Qe=class _Euler{constructor(e=0,t=0,n=0,s=_Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],r=s[4],c=s[8],l=s[1],i=s[5],u=s[9],h=s[2],m=s[6],a=s[10];switch(t){case"XYZ":this._y=Math.asin(d(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,a),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(m,i),this._z=0);break;case"YXZ":this._x=Math.asin(-d(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(c,a),this._z=Math.atan2(l,i)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(d(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,a),this._z=Math.atan2(-r,i)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-d(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,a),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,i));break;case"YZX":this._z=Math.asin(d(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,i),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,a));break;case"XZY":this._z=Math.asin(-d(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(m,i),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-u,a),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ol,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xl.setFromEuler(this),this.setFromQuaternion(xl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},Qe.DEFAULT_ORDER="XYZ",Js=class{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Il=0,Al=new e,Dt=new Ye,Ce=new i,Os=new e,un=new e,Pl=new e,L1=new Ye,Nl=new e(1,0,0),er=new e(0,1,0),Dl=new e(0,0,1),zl={type:"added"},Hl={type:"removed"},Ht={type:"childadded",child:null},so={type:"childremoved",child:null},j=class _Object3D extends jt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Il++}),this.uuid=ue(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_Object3D.DEFAULT_UP.clone();const s=new e,t=new Qe,n=new Ye,o=new e(1,1,1);function a(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:s},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new i},normalMatrix:{value:new c}}),this.matrix=new i,this.matrixWorld=new i,this.matrixAutoUpdate=_Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dt.setFromAxisAngle(e,t),this.quaternion.multiply(Dt),this}rotateOnWorldAxis(e,t){return Dt.setFromAxisAngle(e,t),this.quaternion.premultiply(Dt),this}rotateX(e){return this.rotateOnAxis(Nl,e)}rotateY(e){return this.rotateOnAxis(er,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nl,e)}translateY(e){return this.translateOnAxis(er,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ce.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),un.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ce.lookAt(un,Os,this.up):Ce.lookAt(Os,un,this.up),this.quaternion.setFromRotationMatrix(Ce),s&&(Ce.extractRotation(s.matrixWorld),Dt.setFromRotationMatrix(Ce),this.quaternion.premultiply(Dt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),Ht.child=e,this.dispatchEvent(Ht),Ht.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hl),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ce.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ce.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ce),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),Ht.child=e,this.dispatchEvent(Ht),Ht.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const i=this.children[n],s=i.getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,i=s.length;o<i;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(un,e,Pl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(un,L1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const e=this.children;for(let t=0,n=e.length;t<n;t++){const s=e[t];s.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const t={};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.castShadow===!0&&(t.castShadow=!0),this.receiveShadow===!0&&(t.receiveShadow=!0),this.visible===!1&&(t.visible=!1),this.frustumCulled===!1&&(t.frustumCulled=!1),this.renderOrder!==0&&(t.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(t.userData=this.userData),t.layers=this.layers.mask,t.matrix=this.matrix.toArray(),t.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(t.matrixAutoUpdate=!1),this.isInstancedMesh&&(t.type="InstancedMesh",t.count=this.count,t.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(t.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(t.type="BatchedMesh",t.perObjectFrustumCulled=this.perObjectFrustumCulled,t.sortObjects=this.sortObjects,t.drawRanges=this._drawRanges,t.reservedRanges=this._reservedRanges,t.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?{min:e.boundingBox.min.toArray(),max:e.boundingBox.max.toArray()}:void 0,boundingSphere:e.boundingSphere?{radius:e.boundingSphere.radius,center:e.boundingSphere.center.toArray()}:void 0})),t.instanceInfo=this._instanceInfo.map(e=>({...e})),t.availableInstanceIds=this._availableInstanceIds.slice(),t.availableGeometryIds=this._availableGeometryIds.slice(),t.nextIndexStart=this._nextIndexStart,t.nextVertexStart=this._nextVertexStart,t.geometryCount=this._geometryCount,t.maxInstanceCount=this._maxInstanceCount,t.maxVertexCount=this._maxVertexCount,t.maxIndexCount=this._maxIndexCount,t.geometryInitialized=this._geometryInitialized,t.matricesTexture=this._matricesTexture.toJSON(e),t.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(t.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(t.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(t.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function o(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?t.background=this.background.toJSON():this.background.isTexture&&(t.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(t.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){t.geometry=o(e.geometries,this.geometry);const n=this.geometry.parameters;if(n!==void 0&&n.shapes!==void 0){const t=n.shapes;if(Array.isArray(t))for(let n=0,s=t.length;n<s;n++){const i=t[n];o(e.shapes,i)}else o(e.shapes,t)}}if(this.isSkinnedMesh&&(t.bindMode=this.bindMode,t.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),t.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const n=[];for(let t=0,s=this.material.length;t<s;t++)n.push(o(e.materials,this.material[t]));t.material=n}else t.material=o(e.materials,this.material);if(this.children.length>0){t.children=[];for(let n=0;n<this.children.length;n++)t.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){t.animations=[];for(let n=0;n<this.animations.length;n++){const s=this.animations[n];t.animations.push(o(e.animations,s))}}if(i){const t=s(e.geometries),o=s(e.materials),i=s(e.textures),a=s(e.images),r=s(e.shapes),c=s(e.skeletons),l=s(e.animations),d=s(e.nodes);t.length>0&&(n.geometries=t),o.length>0&&(n.materials=o),i.length>0&&(n.textures=i),a.length>0&&(n.images=a),r.length>0&&(n.shapes=r),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),d.length>0&&(n.nodes=d)}return n.object=t,n;function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}}clone(e){return(new this.constructor).copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){const n=e.children[t];this.add(n.clone())}return this}},j.DEFAULT_UP=new e(0,1,0),j.DEFAULT_MATRIX_AUTO_UPDATE=!0,j.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,ie=new e,xe=new e,xo=new e,Ee=new e,bt=new e,Ot=new e,wc=new e,Fo=new e,To=new e,zo=new e,No=new m,Io=new m,Vo=new m,nn=class _Triangle{constructor(t=new e,n=new e,s=new e){this.a=t,this.b=n,this.c=s}static getNormal(e,t,n,s){s.subVectors(n,t),ie.subVectors(e,t),s.cross(ie);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){ie.subVectors(s,t),xe.subVectors(n,t),xo.subVectors(e,t);const a=ie.dot(ie),i=ie.dot(xe),r=ie.dot(xo),c=xe.dot(xe),l=xe.dot(xo),d=a*c-i*i;if(d===0)return o.set(0,0,0),null;const u=1/d,h=(c*r-i*l)*u,m=(a*l-i*r)*u;return o.set(1-h-m,m,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ee)!==null&&Ee.x>=0&&Ee.y>=0&&Ee.x+Ee.y<=1}static getInterpolation(e,t,n,s,o,i,a,r){return this.getBarycoord(e,t,n,s,Ee)===null?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(o,Ee.x),r.addScaledVector(i,Ee.y),r.addScaledVector(a,Ee.z),r)}static getInterpolatedAttribute(e,t,n,s,o,i){return No.setScalar(0),Io.setScalar(0),Vo.setScalar(0),No.fromBufferAttribute(e,t),Io.fromBufferAttribute(e,n),Vo.fromBufferAttribute(e,s),i.setScalar(0),i.addScaledVector(No,o.x),i.addScaledVector(Io,o.y),i.addScaledVector(Vo,o.z),i}static isFrontFacing(e,t,n,s){return ie.subVectors(n,t),xe.subVectors(e,t),ie.cross(xe).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return(new this.constructor).copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ie.subVectors(this.c,this.b),xe.subVectors(this.a,this.b),ie.cross(xe).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return _Triangle.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return _Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,d=this.b,h=this.c;let u,i;bt.subVectors(d,o),Ot.subVectors(h,o),Fo.subVectors(e,o);const a=bt.dot(Fo),r=Ot.dot(Fo);if(a<=0&&r<=0)return t.copy(o);To.subVectors(e,d);const n=bt.dot(To),c=Ot.dot(To);if(n>=0&&c<=n)return t.copy(d);const m=a*c-n*r;if(m<=0&&a>=0&&n<=0)return u=a/(a-n),t.copy(o).addScaledVector(bt,u);zo.subVectors(e,h);const l=bt.dot(zo),s=Ot.dot(zo);if(s>=0&&l<=s)return t.copy(h);const f=l*r-a*s;if(f<=0&&r>=0&&s<=0)return i=r/(r-s),t.copy(o).addScaledVector(Ot,i);const p=n*s-l*c;if(p<=0&&c-n>=0&&l-s>=0)return wc.subVectors(h,d),i=(c-n)/(c-n+(l-s)),t.copy(d).addScaledVector(wc,i);const g=1/(p+f+m);return u=f*g,i=m*g,t.copy(o).addScaledVector(bt,u).addScaledVector(Ot,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Me={h:0,s:0,l:0},ss={h:0,s:0,l:0};function tc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}s=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const t=e;t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=E){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,u.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=u.workingColorSpace){return this.r=e,this.g=t,this.b=n,u.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=u.workingColorSpace){if(e=Vr(e,1),t=d(t,0,1),n=d(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=tc(o,s,e+1/3),this.g=tc(o,s,e),this.b=tc(o,s,e-1/3)}return u.toWorkingColorSpace(this,s),this}setStyle(e,t=E){function s(t){if(t===void 0)return;parseFloat(t)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^)]*)\)/.exec(e)){let o;const a=n[1],i=n[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)%\s*,\s*(\d*\.?\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return s(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=E){const n=oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=We(e.r),this.g=We(e.g),this.b=We(e.b),this}copyLinearToSRGB(e){return this.r=_n(e.r),this.g=_n(e.g),this.b=_n(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=E){return u.fromWorkingColorSpace(S.copy(this),e),Math.round(d(S.r*255,0,255))*65536+Math.round(d(S.g*255,0,255))*256+Math.round(d(S.b*255,0,255))}getHexString(e=E){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=u.workingColorSpace){u.fromWorkingColorSpace(S.copy(this),t);const a=S.r,n=S.g,s=S.b,o=Math.max(a,n,s),r=Math.min(a,n,s);let i,c;const l=(r+o)/2;if(r===o)i=0,c=0;else{const e=o-r;switch(c=l<=.5?e/(o+r):e/(2-o-r),o){case a:i=(n-s)/e+(n<s?6:0);break;case n:i=(s-a)/e+2;break;case s:i=(a-n)/e+4;break}i/=6}return e.h=i,e.s=c,e.l=l,e}getRGB(e,t=u.workingColorSpace){return u.fromWorkingColorSpace(S.copy(this),t),e.r=S.r,e.g=S.g,e.b=S.b,e}getStyle(e=E){u.fromWorkingColorSpace(S.copy(this),e);const t=S.r,n=S.g,s=S.b;return e!==E?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Me),this.setHSL(Me.h+e,Me.s+t,Me.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Me),e.getHSL(ss);const n=Zn(Me.h,ss.h,t),s=Zn(Me.s,ss.s,t),o=Zn(Me.l,ss.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,o=this.b,t=e.elements;return this.r=t[0]*n+t[3]*s+t[6]*o,this.g=t[1]*n+t[4]*s+t[7]*o,this.b=t[2]*n+t[5]*s+t[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},S=new s,s.NAMES=oc,ld=0,re=class extends jt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=ue(),this.name="",this.type="Material",this.blending=Zt,this.side=Oe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=li,this.blendDst=di,this.blendEquation=ot,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new s(0,0,0),this.blendAlpha=0,this.depthFunc=Ft,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mt,this.stencilZFail=Mt,this.stencilZPass=Mt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!==e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(const s in e){const n=e[s];if(n===void 0){console.warn(`THREE.Material: parameter '${s}' has value of undefined.`);continue}const t=this[s];if(t===void 0){console.warn(`THREE.Material: '${s}' is not a property of THREE.${this.type}.`);continue}t&&t.isColor?t.set(n):t&&t.isVector3&&n&&n.isVector3?t.copy(n):this[s]=n}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(e).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(e).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(e).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(e).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(e).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Zt&&(t.blending=this.blending),this.side!==Oe&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==li&&(t.blendSrc=this.blendSrc),this.blendDst!==di&&(t.blendDst=this.blendDst),this.blendEquation!==ot&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==Ft&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wr&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mt&&(t.stencilFail=this.stencilFail),this.stencilZFail!==Mt&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==Mt&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}if(n){const n=s(e.textures),o=s(e.images);n.length>0&&(t.textures=n),o.length>0&&(t.images=o)}return t}clone(){return(new this.constructor).copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const e=t.length;n=new Array(e);for(let s=0;s!==e;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qe=class extends re{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new s(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},y=new e,Hn=new o,fd=0,T=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=oe,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix3(e),this.setXY(t,Hn.x,Hn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)y.fromBufferAttribute(this,t),y.applyMatrix3(e),this.setXYZ(t,y.x,y.y,y.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)y.fromBufferAttribute(this,t),y.applyMatrix4(e),this.setXYZ(t,y.x,y.y,y.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)y.fromBufferAttribute(this,t),y.applyNormalMatrix(e),this.setXYZ(t,y.x,y.y,y.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)y.fromBufferAttribute(this,t),y.transformDirection(e),this.setXYZ(t,y.x,y.y,y.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fe(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=f(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fe(t,this.array)),t}setX(e,t){return this.normalized&&(t=f(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fe(t,this.array)),t}setY(e,t){return this.normalized&&(t=f(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fe(t,this.array)),t}setZ(e,t){return this.normalized&&(t=f(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fe(t,this.array)),t}setW(e,t){return this.normalized&&(t=f(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=f(t,this.array),n=f(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=f(t,this.array),n=f(n,this.array),s=f(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=f(t,this.array),n=f(n,this.array),s=f(s,this.array),o=f(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}},qr=class extends T{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Kr=class extends T{constructor(e,t,n){super(new Uint32Array(e),t,n)}},$=class extends T{constructor(e,t,n){super(new Float32Array(e),t,n)}},jd=0,J=new i,Xo=new j,wt=new e,K=new ge,Rn=new ge,C=new e,ne=class _BufferGeometry extends jt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=ue(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?Kr:qr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const t=(new c).getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return J.makeRotationFromQuaternion(e),this.applyMatrix4(J),this}rotateX(e){return J.makeRotationX(e),this.applyMatrix4(J),this}rotateY(e){return J.makeRotationY(e),this.applyMatrix4(J),this}rotateZ(e){return J.makeRotationZ(e),this.applyMatrix4(J),this}translate(e,t,n){return J.makeTranslation(e,t,n),this.applyMatrix4(J),this}scale(e,t,n){return J.makeScale(e,t,n),this.applyMatrix4(J),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wt).negate(),this.translate(wt.x,wt.y,wt.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const t=[];for(let n=0,o=e.length;n<o;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}this.setAttribute("position",new $(t,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ge);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new e(-(1/0),-(1/0),-(1/0)),new e(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let e=0,t=n.length;e<t;e++){const s=n[e];K.setFromBufferAttribute(s),this.morphTargetsRelative?(C.addVectors(this.boundingBox.min,K.min),this.boundingBox.expandByPoint(C),C.addVectors(this.boundingBox.max,K.max),this.boundingBox.expandByPoint(C)):(this.boundingBox.expandByPoint(K.min),this.boundingBox.expandByPoint(K.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new le);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new e,1/0);return}if(t){const s=this.boundingSphere.center;if(K.setFromBufferAttribute(t),n)for(let e=0,t=n.length;e<t;e++){const s=n[e];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(C.addVectors(K.min,Rn.min),K.expandByPoint(C),C.addVectors(K.max,Rn.max),K.expandByPoint(C)):(K.expandByPoint(Rn.min),K.expandByPoint(Rn.max))}K.getCenter(s);let e=0;for(let n=0,o=t.count;n<o;n++)C.fromBufferAttribute(t,n),e=Math.max(e,s.distanceToSquared(C));if(n)for(let o=0,a=n.length;o<a;o++){const i=n[o],r=this.morphTargetsRelative;for(let n=0,o=i.count;n<o;n++)C.fromBufferAttribute(i,n),r&&(wt.fromBufferAttribute(t,n),C.add(wt)),e=Math.max(e,s.distanceToSquared(C))}this.boundingSphere.radius=Math.sqrt(e),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,s=this.attributes;if(t===null||s.position===void 0||s.normal===void 0||s.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=s.position,w=s.normal,j=s.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new T(new Float32Array(4*r.count),4));const x=this.getAttribute("tangent"),l=[],d=[];for(let t=0;t<r.count;t++)l[t]=new e,d[t]=new e;const v=new e,m=new e,h=new e,g=new o,n=new o,a=new o,f=new e,u=new e;function O(e,t,s){v.fromBufferAttribute(r,e),m.fromBufferAttribute(r,t),h.fromBufferAttribute(r,s),g.fromBufferAttribute(j,e),n.fromBufferAttribute(j,t),a.fromBufferAttribute(j,s),m.sub(v),h.sub(v),n.sub(g),a.sub(g);const o=1/(n.x*a.y-a.x*n.y);if(!isFinite(o))return;f.copy(m).multiplyScalar(a.y).addScaledVector(h,-n.y).multiplyScalar(o),u.copy(h).multiplyScalar(n.x).addScaledVector(m,-a.x).multiplyScalar(o),l[e].add(f),l[t].add(f),l[s].add(f),d[e].add(u),d[t].add(u),d[s].add(u)}let i=this.groups;i.length===0&&(i=[{start:0,count:t.count}]);for(let e=0,o=i.length;e<o;++e){const n=i[e],s=n.start,a=n.count;for(let e=s,n=s+a;e<n;e+=3)O(t.getX(e+0),t.getX(e+1),t.getX(e+2))}const c=new e,y=new e,p=new e,_=new e;function b(e){p.fromBufferAttribute(w,e),_.copy(p);const t=l[e];c.copy(t),c.sub(p.multiplyScalar(p.dot(t))).normalize(),y.crossVectors(_,t);const n=y.dot(d[e]),s=n<0?-1:1;x.setXYZW(e,c.x,c.y,c.z,s)}for(let e=0,o=i.length;e<o;++e){const n=i[e],s=n.start,a=n.count;for(let e=s,n=s+a;e<n;e+=3)b(t.getX(e+0)),b(t.getX(e+1)),b(t.getX(e+2))}}computeVertexNormals(){const n=this.index,t=this.getAttribute("position");if(t!==void 0){let o=this.getAttribute("normal");if(o===void 0)o=new T(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let e=0,t=o.count;e<t;e++)o.setXYZ(e,0,0,0);const l=new e,i=new e,d=new e,a=new e,r=new e,c=new e,s=new e,u=new e;if(n)for(let e=0,p=n.count;e<p;e+=3){const h=n.getX(e+0),m=n.getX(e+1),f=n.getX(e+2);l.fromBufferAttribute(t,h),i.fromBufferAttribute(t,m),d.fromBufferAttribute(t,f),s.subVectors(d,i),u.subVectors(l,i),s.cross(u),a.fromBufferAttribute(o,h),r.fromBufferAttribute(o,m),c.fromBufferAttribute(o,f),a.add(s),r.add(s),c.add(s),o.setXYZ(h,a.x,a.y,a.z),o.setXYZ(m,r.x,r.y,r.z),o.setXYZ(f,c.x,c.y,c.z)}else for(let e=0,n=t.count;e<n;e+=3)l.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),d.fromBufferAttribute(t,e+2),s.subVectors(d,i),u.subVectors(l,i),s.cross(u),o.setXYZ(e+0,s.x,s.y,s.z),o.setXYZ(e+1,s.x,s.y,s.z),o.setXYZ(e+2,s.x,s.y,s.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)C.fromBufferAttribute(e,t),C.normalize(),e.setXYZ(t,C.x,C.y,C.z)}toNonIndexed(){function t(e,t){const o=e.array,n=e.itemSize,a=e.normalized,i=new o.constructor(t.length*n);let s=0,r=0;for(let a=0,c=t.length;a<c;a++){e.isInterleavedBufferAttribute?s=t[a]*e.data.stride+e.offset:s=t[a]*n;for(let e=0;e<n;e++)i[r++]=o[s++]}return new T(i,n,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _BufferGeometry,n=this.index.array,s=this.attributes;for(const o in s){const i=s[o],a=t(i,n);e.setAttribute(o,a)}const o=this.morphAttributes;for(const s in o){const i=[],a=o[s];for(let e=0,s=a.length;e<s;e++){const o=a[e],r=t(o,n);i.push(r)}e.morphAttributes[s]=i}e.morphTargetsRelative=this.morphTargetsRelative;const i=this.groups;for(let t=0,s=i.length;t<s;t++){const n=i[t];e.addGroup(n.start,n.count,n.materialIndex)}return e}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const t=this.parameters;for(const n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const t in s){const n=s[t];e.data.attributes[t]=n.toJSON(e.data)}const o={};let i=!1;for(const n in this.morphAttributes){const s=this.morphAttributes[n],t=[];for(let n=0,o=s.length;n<o;n++){const i=s[n];t.push(i.toJSON(e.data))}t.length>0&&(o[n]=t,i=!0)}i&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const n=this.boundingSphere;return n!==null&&(e.data.boundingSphere={center:n.center.toArray(),radius:n.radius}),e}clone(){return(new this.constructor).copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const e in s){const n=s[e];this.setAttribute(e,n.clone(t))}const o=e.morphAttributes;for(const e in o){const n=[],s=o[e];for(let e=0,o=s.length;e<o;e++)n.push(s[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;const i=e.groups;for(let e=0,n=i.length;e<n;e++){const t=i[e];this.addGroup(t.start,t.count,t.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const r=e.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Or=new i,Je=new jn,Vn=new le,hr=new e,Bn=new e,vs=new e,Xn=new e,Pi=new e,Yn=new e,Ba=new e,qn=new e,P=class extends j{constructor(e=new ne,t=new qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry,e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Yn.set(0,0,0);for(let n=0,r=s.length;n<r;n++){const i=o[n],c=s[n];if(i===0)continue;Pi.fromBufferAttribute(c,e),a?Yn.addScaledVector(Pi,i):Yn.addScaledVector(Pi.sub(t),i)}t.add(Yn)}return t}raycast(e,t){const n=this.geometry,o=this.material,s=this.matrixWorld;if(o===void 0)return;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vn.copy(n.boundingSphere),Vn.applyMatrix4(s),Je.copy(e.ray).recast(e.near),Vn.containsPoint(Je.origin)===!1){if(Je.intersectSphere(Vn,hr)===null)return;if(Je.origin.distanceToSquared(hr)>(e.far-e.near)**2)return}if(Or.copy(s).invert(),Je.copy(e.ray).applyMatrix4(Or),n.boundingBox!==null&&Je.intersectsBox(n.boundingBox)===!1)return;this._computeIntersections(e,t,Je)}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,i=a.index,h=a.attributes.position,c=a.attributes.uv,l=a.attributes.uv1,d=a.attributes.normal,u=a.groups,o=a.drawRange;if(i!==null)if(Array.isArray(r))for(let h=0,m=u.length;h<m;h++){const a=u[h],f=r[a.materialIndex],p=Math.max(a.start,o.start),g=Math.min(i.count,Math.min(a.start+a.count,o.start+o.count));for(let o=p,r=g;o<r;o+=3){const u=i.getX(o),h=i.getX(o+1),m=i.getX(o+2);s=Ti(this,f,e,n,c,l,d,u,h,m),s&&(s.faceIndex=Math.floor(o/3),s.face.materialIndex=a.materialIndex,t.push(s))}}else{const a=Math.max(0,o.start),u=Math.min(i.count,o.start+o.count);for(let o=a,h=u;o<h;o+=3){const m=i.getX(o),f=i.getX(o+1),p=i.getX(o+2);s=Ti(this,r,e,n,c,l,d,m,f,p),s&&(s.faceIndex=Math.floor(o/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(r))for(let a=0,m=u.length;a<m;a++){const i=u[a],f=r[i.materialIndex],p=Math.max(i.start,o.start),g=Math.min(h.count,Math.min(i.start+i.count,o.start+o.count));for(let o=p,a=g;o<a;o+=3){const r=o,u=o+1,h=o+2;s=Ti(this,f,e,n,c,l,d,r,u,h),s&&(s.faceIndex=Math.floor(o/3),s.face.materialIndex=i.materialIndex,t.push(s))}}else{const i=Math.max(0,o.start),a=Math.min(h.count,o.start+o.count);for(let o=i,u=a;o<u;o+=3){const h=o,m=o+1,f=o+2;s=Ti(this,r,e,n,c,l,d,h,m,f),s&&(s.faceIndex=Math.floor(o/3),t.push(s))}}}};function $f(e,t,n,s,o,i,a,r){let c;if(t.side===I?c=s.intersectTriangle(a,i,o,!0,r):c=s.intersectTriangle(o,i,a,t.side===Oe,r),c===null)return null;qn.copy(r),qn.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(qn);return l<n.near||l>n.far?null:{distance:l,point:qn.clone(),object:e}}function Ti(t,n,s,i,a,r,c,l,d,u){t.getVertexPosition(l,Bn),t.getVertexPosition(d,vs),t.getVertexPosition(u,Xn);const h=$f(t,n,s,i,Bn,vs,Xn,Ba);if(h){const t=new e;nn.getBarycoord(Ba,Bn,vs,Xn,t),a&&(h.uv=nn.getInterpolatedAttribute(a,l,d,u,t,new o)),r&&(h.uv1=nn.getInterpolatedAttribute(r,l,d,u,t,new o)),c&&(h.normal=nn.getInterpolatedAttribute(c,l,d,u,t,new e),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const n={a:l,b:d,c:u,normal:new e,materialIndex:0};nn.getNormal(Bn,vs,Xn,n.normal),h.face=n,h.barycoord=t}return h}Mi=class _BoxGeometry extends ne{constructor(t=1,n=1,s=1,o=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:i,depthSegments:a};const f=this;o=Math.floor(o),i=Math.floor(i),a=Math.floor(a);const l=[],u=[],h=[],d=[];let c=0,m=0;r("z","y","x",-1,-1,s,n,t,a,i,0),r("z","y","x",1,-1,s,n,-t,a,i,1),r("x","z","y",1,1,t,s,n,o,a,2),r("x","z","y",1,-1,t,s,-n,o,a,3),r("x","y","z",1,-1,t,n,s,o,i,4),r("x","y","z",-1,-1,t,n,-s,o,i,5),this.setIndex(l),this.setAttribute("position",new $(u,3)),this.setAttribute("normal",new $(h,3)),this.setAttribute("uv",new $(d,2));function r(t,n,s,o,i,a,r,p,g,v,b){const O=a/g,x=r/v,C=a/2,E=r/2,k=p/2,y=g+1,A=v+1;let w=0,_=0;const j=new e;for(let e=0;e<A;e++){const a=e*x-E;for(let r=0;r<y;r++){const c=r*O-C;j[t]=c*o,j[n]=a*i,j[s]=k,u.push(j.x,j.y,j.z),j[t]=0,j[n]=0,j[s]=p>0?1:-1,h.push(j.x,j.y,j.z),d.push(r/g),d.push(1-e/v),w+=1}}for(let e=0;e<v;e++)for(let t=0;t<g;t++){const o=c+t+y*e,n=c+t+y*(e+1),i=c+(t+1)+y*(e+1),s=c+(t+1)+y*e;l.push(o,n,s),l.push(n,i,s),_+=6}f.addGroup(m,_,b),m+=_,c+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ln(e){const t={};for(const n in e){t[n]={};for(const o in e[n]){const s=e[n][o];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][o]=null):t[n][o]=s.clone():Array.isArray(s)?t[n][o]=s.slice():t[n][o]=s}}return t}function H(e){const t={};for(let n=0;n<e.length;n++){const s=Ln(e[n]);for(const e in s)t[e]=s[e]}return t}function Vf(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ud(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:u.workingColorSpace}Kd={clone:Ln,merge:H},qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ge=class extends re{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Yd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ln(e.uniforms),this.uniformsGroups=Vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s],n=o.value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xa=class extends j{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new i,this.projectionMatrix=new i,this.projectionMatrixInverse=new i,this.coordinateSystem=ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return(new this.constructor).copy(this)}},Xe=new e,Qa=new o,Ja=new o,N=class extends Xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Nt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nn*.5*this.fov);return.5*this.getFilmHeight()/e}getEffectiveFOV(){return Nt*2*Math.atan(Math.tan(Nn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xe.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xe.x,Xe.y).multiplyScalar(-e/Xe.z),Xe.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xe.x,Xe.y).multiplyScalar(-e/Xe.z)}getViewSize(e,t){return this.getViewBounds(e,Qa,Ja),t.subVectors(Ja,Qa)}setViewOffset(e,t,n,s,o,i){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=this.near;let t=i*Math.tan(Nn*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const e=this.view;if(this.view!==null&&this.view.enabled){const i=e.fullWidth,a=e.fullHeight;o+=e.offsetX*s/i,t-=e.offsetY*n/a,s*=e.width/i,n*=e.height/a}const a=this.filmOffset;a!==0&&(o+=i*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,i,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$t=-90,tn=1,su=class extends j{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new N($t,tn,e,t);s.layers=this.layers,this.add(s);const o=new N($t,tn,e,t);o.layers=this.layers,this.add(o);const i=new N($t,tn,e,t);i.layers=this.layers,this.add(i);const a=new N($t,tn,e,t);a.layers=this.layers,this.add(a);const r=new N($t,tn,e,t);r.layers=this.layers,this.add(r);const c=new N($t,tn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const a=this.coordinateSystem,r=this.children.concat(),[e,t,n,s,o,i]=r;for(const e of r)this.remove(e);if(a===ke)e.up.set(0,1,0),e.lookAt(1,0,0),t.up.set(0,1,0),t.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),i.up.set(0,1,0),i.lookAt(0,0,-1);else if(a===Gn)e.up.set(0,-1,0),e.lookAt(-1,0,0),t.up.set(0,-1,0),t.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),i.up.set(0,-1,0),i.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);for(const e of r)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,i,a,r,c,l]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,i),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,r),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=f,e.setRenderTarget(n,5,s),e.render(t,l),e.setRenderTarget(d,u,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},tr=class extends B{constructor(e=[],t=Ut,n,s,o,i,a,r,c,l){super(e,t,n,s,o,i,a,r,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},iu=class extends ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new tr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:V}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Mi(5,5,5),o=new Ge({name:"CubemapFromEquirect",uniforms:Ln(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:I,blending:Ke});o.uniforms.tEquirect.value=t;const s=new P(i,o),a=t.minFilter;t.minFilter===_e&&(t.minFilter=V);const r=new su(1,10,this);return r.update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(o)}},st=class extends j{constructor(){super(),this.isGroup=!0,this.type="Group"}},ru={type:"move"},ai=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new e),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new e),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,c=null;const s=this._targetRay,o=this._grip,r=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(r&&e.hand){c=!0;for(const i of e.hand.values()){const o=t.getJointPose(i,n),s=this._getHandJoint(r,i);o!==null&&(s.matrix.fromArray(o.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,s.jointRadius=o.radius),s.visible=o!==null}const a=r.joints["index-finger-tip"],l=r.joints["thumb-tip"],s=a.position.distanceTo(l.position),o=.02,i=.005;r.inputState.pinching&&s>o+i?(r.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!r.inputState.pinching&&s<=o-i&&(r.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ru)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=a!==null),r!==null&&(r.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ur=class extends j{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Go,this.updateRanges=[],this.version=0,this.uuid=ue()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ue()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),t=new this.constructor(n,this.stride);return t.setUsage(this.usage),t}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ue()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},D=new e,ni=class _InterleavedBufferAttribute{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)D.fromBufferAttribute(this,t),D.applyMatrix4(e),this.setXYZ(t,D.x,D.y,D.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)D.fromBufferAttribute(this,t),D.applyNormalMatrix(e),this.setXYZ(t,D.x,D.y,D.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)D.fromBufferAttribute(this,t),D.transformDirection(e),this.setXYZ(t,D.x,D.y,D.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fe(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=f(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=f(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=f(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=f(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=f(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fe(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fe(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fe(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fe(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=f(t,this.array),n=f(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=f(t,this.array),n=f(n,this.array),s=f(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=f(t,this.array),n=f(n,this.array),s=f(s,this.array),o=f(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new T(new this.array.constructor(e),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _InterleavedBufferAttribute(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},br=class extends re{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new s(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},xn=new e,St=new e,At=new e,zt=new o,pn=new o,fc=new i,Is=new e,dn=new e,Us=new e,Dc=new o,_o=new o,Xc=new o,cl=class extends j{constructor(e=new br){if(super(),this.isSprite=!0,this.type="Sprite",En===void 0){En=new ne;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new pr(t,5);En.setIndex([0,1,2,0,2,3]),En.setAttribute("position",new ni(e,3,0,!1)),En.setAttribute("uv",new ni(e,2,3,!1))}this.geometry=En,this.material=e,this.center=new o(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),St.setFromMatrixScale(this.matrixWorld),fc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),At.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&St.multiplyScalar(-At.z);const a=this.material.rotation;let n,s;a!==0&&(s=Math.cos(a),n=Math.sin(a));const i=this.center;lo(Is.set(-.5,-.5,0),At,i,St,n,s),lo(dn.set(.5,-.5,0),At,i,St,n,s),lo(Us.set(.5,.5,0),At,i,St,n,s),Dc.set(0,0),_o.set(1,0),Xc.set(1,1);let r=e.ray.intersectTriangle(Is,dn,Us,!1,xn);if(r===null&&(lo(dn.set(-.5,.5,0),At,i,St,n,s),_o.set(0,1),r=e.ray.intersectTriangle(Is,Us,dn,!1,xn),r===null))return;const c=e.ray.origin.distanceTo(xn);if(c<e.near||c>e.far)return;t.push({distance:c,point:xn.clone(),uv:nn.getInterpolation(xn,Is,dn,Us,Dc,_o,Xc,new o),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function lo(e,t,n,s,o,i){zt.subVectors(e,n).addScalar(.5).multiply(s),o!==void 0?(pn.x=i*zt.x-o*zt.y,pn.y=o*zt.x+i*zt.y):pn.copy(zt),e.copy(t),e.x+=pn.x,e.y+=pn.y,e.applyMatrix4(fc)}ml=new e,fa=new m,jl=new m,Tu=new e,wl=new i,ns=new e,Qs=new le,Va=new i,Zs=new jn,Pu=class extends P{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ha,this.bindMatrix=new i,this.bindMatrixInverse=new i,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ge),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let e=0;e<t.count;e++)this.getVertexPosition(e,ns),this.boundingBox.expandByPoint(ns)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new le),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let e=0;e<t.count;e++)this.getVertexPosition(e,ns),this.boundingSphere.expandByPoint(ns)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const s=this.material,n=this.matrixWorld;if(s===void 0)return;if(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)===!1)return;if(Va.copy(n).invert(),Zs.copy(e.ray).applyMatrix4(Va),this.boundingBox!==null&&Zs.intersectsBox(this.boundingBox)===!1)return;this._computeIntersections(e,t,Zs)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new m,t=this.geometry.attributes.skinWeight;for(let n=0,o=t.count;n<o;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ha?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;fa.fromBufferAttribute(s.attributes.skinIndex,e),jl.fromBufferAttribute(s.attributes.skinWeight,e),ml.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){const s=jl.getComponent(e);if(s!==0){const o=fa.getComponent(e);wl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Tu.copy(ml).applyMatrix4(wl),s)}}return t.applyMatrix4(this.bindMatrixInverse)}},vl=class extends j{constructor(){super(),this.isBone=!0,this.type="Bone"}},Sc=class extends B{constructor(e=null,t=1,n=1,s,o,i,a,r,c=M,l=M,d,u){super(null,i,a,r,c,l,s,o,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kc=new i,Vu=new i,$u=class _Skeleton{constructor(e=[],t=[]){this.uuid=ue(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new i)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const t=new i;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const e=this.bones[t];e&&(e.parent&&e.parent.isBone?(e.matrix.copy(e.parent.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))}}update(){const e=this.bones,n=this.boneInverses,s=this.boneMatrices,t=this.boneTexture;for(let t=0,o=e.length;t<o;t++){const i=e[t]?e[t].matrixWorld:Vu;kc.multiplyMatrices(i,n[t]),kc.toArray(s,t*16)}t!==null&&(t.needsUpdate=!0)}clone(){return new _Skeleton(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Sc(t,e,e,Q,oe);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,s=this.bones.length;t<s;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,a=e.bones.length;n<a;n++){const o=e.bones[n];let s=t[o];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),s=new vl),this.bones.push(s),this.boneInverses.push((new i).fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,o=t.length;s<o;s++){const i=t[s];e.bones.push(i.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}},Ao=class extends T{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Yt=new i,Jr=new i,Hs=[],vc=new ge,Gu=new i,hn=new P,fn=new le,Zu=class extends P{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ao(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Gu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ge),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yt),vc.copy(e.boundingBox).applyMatrix4(Yt),this.boundingBox.union(vc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new le),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yt),fn.copy(e.boundingSphere).applyMatrix4(Yt),this.boundingSphere.union(fn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,i=e*o+1;for(let e=0;e<n.length;e++)n[e]=s[i+e]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(hn.geometry=this.geometry,hn.material=this.material,hn.material===void 0)return;if(this.boundingSphere===null&&this.computeBoundingSphere(),fn.copy(this.boundingSphere),fn.applyMatrix4(n),e.ray.intersectsSphere(fn)===!1)return;for(let o=0;o<s;o++){this.getMatrixAt(o,Yt),Jr.multiplyMatrices(n,Yt),hn.matrixWorld=Jr,hn.raycast(e,Hs);for(let e=0,s=Hs.length;e<s;e++){const n=Hs[e];n.instanceId=o,n.object=this,t.push(n)}Hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ao(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Sc(new Float32Array(s*this.count),s,this.count,ha,oe));const o=this.morphTexture.source.data.data;let i=0;for(let e=0;e<n.length;e++)i+=n[e];const r=this.geometry.morphTargetsRelative?1:1-i,a=s*e;o[a]=r,o.set(n,a+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Lo=new e,e1=new e,t1=new c,et=class{constructor(t=new e(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Lo.subVectors(n,t).cross(e1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Lo),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/o;return n<0||n>1?null:t.copy(e.start).addScaledVector(s,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||t1.getNormalMatrix(e),s=this.coplanarPoint(Lo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return(new this.constructor).copy(this)}},dt=new le,Ts=new e,Ro=class{constructor(e=new et,t=new et,n=new et,s=new et,o=new et,i=new et){this.planes=[e,t,n,s,o,i]}set(e,t,n,s,o,i){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(i),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ke){const s=this.planes,n=e.elements,j=n[0],g=n[1],l=n[2],r=n[3],m=n[4],h=n[5],c=n[6],a=n[7],f=n[8],p=n[9],d=n[10],i=n[11],v=n[12],b=n[13],u=n[14],o=n[15];if(s[0].setComponents(r-j,a-m,i-f,o-v).normalize(),s[1].setComponents(r+j,a+m,i+f,o+v).normalize(),s[2].setComponents(r+g,a+h,i+p,o+b).normalize(),s[3].setComponents(r-g,a-h,i-p,o-b).normalize(),s[4].setComponents(r-l,a-c,i-d,o-u).normalize(),t===ke)s[5].setComponents(r+l,a+c,i+d,o+u).normalize();else if(t===Gn)s[5].setComponents(l,c,d,u).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dt.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),dt.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dt)}intersectsSprite(e){return dt.center.set(0,0,0),dt.radius=.7071067811865476,dt.applyMatrix4(e.matrixWorld),this.intersectsSphere(dt)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let e=0;e<6;e++){const o=t[e].distanceToPoint(n);if(o<s)return!1}return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const n=t[s];if(Ts.x=n.normal.x>0?e.max.x:e.min.x,Ts.y=n.normal.y>0?e.max.y:e.min.y,Ts.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}},Ho=class extends re{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new s(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ss=new e,As=new e,uc=new i,wn=new jn,Cs=new le,$o=new e,ac=new e,ws=class extends j{constructor(e=new ne,t=new Ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,t=[0];for(let e=1,s=n.count;e<s;e++)Ss.fromBufferAttribute(n,e-1),As.fromBufferAttribute(n,e),t[e]=t[e-1],t[e]+=Ss.distanceTo(As);e.setAttribute("lineDistance",new $(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(a),Cs.radius+=r,e.ray.intersectsSphere(Cs)===!1)return;uc.copy(a).invert(),wn.copy(e.ray).applyMatrix4(uc);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),i=c*c,l=this.isLineSegments?2:1,o=n.index,d=n.attributes,u=d.position;if(o!==null){{const a=Math.max(0,s.start),n=Math.min(o.count,s.start+s.count);for(let s=a,c=n-1;s<c;s+=l){const d=o.getX(s),u=o.getX(s+1),r=Uo(this,e,wn,i,d,u,s);r&&t.push(r)}if(this.isLineLoop){const r=o.getX(n-1),c=o.getX(a),s=Uo(this,e,wn,i,r,c,n-1);s&&t.push(s)}}}else{const o=Math.max(0,s.start),n=Math.min(u.count,s.start+s.count);for(let s=o,r=n-1;s<r;s+=l){const a=Uo(this,e,wn,i,s,s+1,s);a&&t.push(a)}if(this.isLineLoop){const s=Uo(this,e,wn,i,n-1,o,n-1);s&&t.push(s)}}}updateMorphTargets(){const n=this.geometry,e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}};function Uo(e,t,n,s,o,i,a){const c=e.geometry.attributes.position;Ss.fromBufferAttribute(c,o),As.fromBufferAttribute(c,i);const l=n.distanceSqToSegment(Ss,As,$o,ac);if(l>s)return;$o.applyMatrix4(e.matrixWorld);const r=t.ray.origin.distanceTo($o);if(r<t.near||r>t.far)return;return{distance:r,point:ac.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}ec=new e,Dr=new e,b1=class extends ws{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,t=[];for(let e=0,s=n.count;e<s;e+=2)ec.fromBufferAttribute(n,e),Dr.fromBufferAttribute(n,e+1),t[e]=e===0?0:t[e-1],t[e+1]=t[e]+ec.distanceTo(Dr);e.setAttribute("lineDistance",new $(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},j1=class extends ws{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Fr=class extends re{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new s(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},jr=new i,ei=new jn,ms=new le,us=new e,C1=class extends j{constructor(e=new ne,t=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(o),ms.radius+=r,e.ray.intersectsSphere(ms)===!1)return;jr.copy(o).invert(),ei.copy(e.ray).applyMatrix4(jr);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,i=n.index,d=n.attributes,a=d.position;if(i!==null){const n=Math.max(0,s.start),r=Math.min(i.count,s.start+s.count);for(let s=n,d=r;s<d;s++){const c=i.getX(s);us.fromBufferAttribute(a,c),E1(us,c,l,o,e,t,this)}}else{const n=Math.max(0,s.start),i=Math.min(a.count,s.start+s.count);for(let s=n,r=i;s<r;s++)us.fromBufferAttribute(a,s),E1(us,s,l,o,e,t,this)}}updateMorphTargets(){const n=this.geometry,e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}};function E1(t,n,s,o,i,a,r){const c=ei.distanceSqToPoint(t);if(c<s){const s=new e;ei.closestPointToPoint(t,s),s.applyMatrix4(o);const l=i.ray.origin.distanceTo(s);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:Math.sqrt(c),point:s,index:n,face:null,faceIndex:null,barycoord:null,object:r})}}vr=class extends B{constructor(e,t,n=at,s,o,i,a=M,r=M,c,l=Fn){if(l!==Fn&&l!==an)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,o,i,a,r,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},A1=class _CylinderGeometry extends ne{constructor(t=1,n=1,s=1,i=32,a=1,r=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:s,radialSegments:i,heightSegments:a,openEnded:r,thetaStart:c,thetaLength:l};const b=this;i=Math.floor(i),a=Math.floor(a);const d=[],m=[],f=[],p=[];let u=0;const h=[],v=s/2;let g=0;y(),r===!1&&(t>0&&j(!0),n>0&&j(!1)),this.setIndex(d),this.setAttribute("position",new $(m,3)),this.setAttribute("normal",new $(f,3)),this.setAttribute("uv",new $(p,2));function y(){const r=new e,o=new e;let j=0;const y=(n-t)/s;for(let e=0;e<=a;e++){const g=[],d=e/a,b=d*(n-t)+t;for(let e=0;e<=i;e++){const t=e/i,n=t*l+c,a=Math.sin(n),h=Math.cos(n);o.x=b*a,o.y=-d*s+v,o.z=b*h,m.push(o.x,o.y,o.z),r.set(a,y,h).normalize(),f.push(r.x,r.y,r.z),p.push(t,1-d),g.push(u++)}h.push(g)}for(let e=0;e<i;e++)for(let s=0;s<a;s++){const r=h[s][e],o=h[s+1][e],c=h[s+1][e+1],i=h[s][e+1];(t>0||s!==0)&&(d.push(r,o,i),j+=3),(n>0||s!==a-1)&&(d.push(o,c,i),j+=3)}b.addGroup(g,j,0),g+=j}function j(s){const _=u,h=new o,a=new e;let j=0;const y=s===!0?t:n,r=s===!0?1:-1;for(let e=1;e<=i;e++)m.push(0,v*r,0),f.push(0,r,0),p.push(.5,.5),u++;const w=u;for(let e=0;e<=i;e++){const o=e/i,t=o*l+c,n=Math.cos(t),s=Math.sin(t);a.x=y*s,a.y=v*r,a.z=y*n,m.push(a.x,a.y,a.z),f.push(0,r,0),h.x=n*.5+.5,h.y=s*.5*r+.5,p.push(h.x,h.y),u++}for(let e=0;e<i;e++){const n=_+e,t=w+e;s===!0?d.push(t,t+1,n):d.push(t+1,t,n),j+=3}b.addGroup(g,j,s===!0?1:2),g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _CylinderGeometry(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},S1=class _ConeGeometry extends A1{constructor(e=1,t=1,n=32,s=1,o=!1,i=0,a=Math.PI*2){super(0,e,t,n,s,o,i,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:i,thetaLength:a}}static fromJSON(e){return new _ConeGeometry(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},or=class _PlaneGeometry extends ne{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const u=e/2,h=t/2,i=Math.floor(n),a=Math.floor(s),o=i+1,m=a+1,f=e/i,p=t/a,r=[],l=[],d=[],c=[];for(let e=0;e<m;e++){const t=e*p-h;for(let n=0;n<o;n++){const s=n*f-u;l.push(s,-t,0),d.push(0,0,1),c.push(n/i),c.push(1-e/a)}}for(let e=0;e<a;e++)for(let t=0;t<i;t++){const a=t+o*e,n=t+o*(e+1),c=t+1+o*(e+1),s=t+1+o*e;r.push(a,n,s),r.push(n,c,s)}this.setIndex(r),this.setAttribute("position",new $(l,3)),this.setAttribute("normal",new $(d,3)),this.setAttribute("uv",new $(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}},hi=class extends re{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new s(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new s(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fr,this.normalScale=new o(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},pe=class extends hi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new o(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return d(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new s(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new s(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new s(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!==e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!==e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!==e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!==e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!==e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!==e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},z1=class extends re{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},D1=class extends re{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function em(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function mf(e){function s(t,n){return e[t]-e[n]}const n=e.length,t=new Array(n);for(let e=0;e!==n;++e)t[e]=e;return t.sort(s),t}function P1(e,t,n){const s=e.length,o=new e.constructor(s);for(let i=0,a=0;a!==s;++i){const r=n[i]*t;for(let n=0;n!==t;++n)o[a++]=e[r+n]}return o}function H1(e,t,n,s){let a=1,o=e[0];for(;o!==void 0&&o[s]===void 0;)o=e[a++];if(o===void 0)return;let i=o[s];if(i===void 0)return;if(Array.isArray(i))do i=o[s],i!==void 0&&(t.push(o.time),n.push(...i)),o=e[a++];while(o!==void 0)else if(i.toArray!==void 0)do i=o[s],i!==void 0&&(t.push(o.time),i.toArray(n,n.length)),o=e[a++];while(o!==void 0)else do i=o[s],i!==void 0&&(t.push(o.time),n.push(i)),o=e[a++];while(o!==void 0)}Tn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const s=this.parameterPositions;let t=this._cachedIndex,o=s[t],n=s[t-1];validate_interval:{seek:{let i;linear_scan:{forward_scan:if(!(e<o)){for(let i=t+2;;){if(o===void 0){if(e<n)break forward_scan;return t=s.length,this._cachedIndex=t,this.copySampleValue_(t-1)}if(t===i)break;if(n=o,o=s[++t],e<o)break seek}i=s.length;break linear_scan}if(!(e>=n)){const a=s[1];e<a&&(t=2,n=a);for(let i=t-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(t===i)break;if(o=n,n=s[--t-1],e>=n)break seek}i=t,t=0;break linear_scan}break validate_interval}for(;t<i;){const n=t+i>>>1;e<s[n]?i=n:t=n+1}if(o=s[t],n=s[t-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return t=s.length,this._cachedIndex=t,this.copySampleValue_(t-1)}this._cachedIndex=t,this.intervalChanged_(t,n,o)}return this.interpolate_(t,n,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n;for(let e=0;e!==n;++e)t[e]=s[o+e];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},B1=class extends Tn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ir,endingEnd:ir}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,i=e+1,a=s[o],r=s[i];if(a===void 0)switch(this.getSettings_().endingStart){case ar:o=e,a=2*t-n;break;case rr:o=s.length-2,a=t+s[o]-s[o+1];break;default:o=e,a=n}if(r===void 0)switch(this.getSettings_().endingEnd){case ar:i=e,r=2*n-t;break;case rr:i=1,r=n+s[1]-s[0];break;default:i=e-1,r=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(r-n),this._offsetPrev=o*l,this._offsetNext=i*l}interpolate_(e,t,n,s){const h=this.resultBuffer,r=this.sampleValues,d=this.valueSize,u=e*d,m=u-d,p=this._offsetPrev,f=this._offsetNext,i=this._weightPrev,l=this._weightNext,o=(n-t)/(s-t),a=o*o,c=a*o,g=-i*c+2*i*a-i*o,v=(1+i)*c+(-1.5-2*i)*a+(-.5+i)*o+1,b=(-1-l)*c+(1.5+l)*a+.5*o,j=l*c-l*a;for(let e=0;e!==d;++e)h[e]=g*r[p+e]+v*r[m+e]+b*r[u+e]+j*r[f+e];return h}},V1=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,r=e*o,l=r-o,c=(n-t)/(s-t),d=1-c;for(let e=0;e!==o;++e)i[e]=a[l+e]*d+a[r+e]*c;return i}},$1=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ee=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oi(t,this.TimeBufferType),this.values=Oi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let t;if(n.toJSON!==this.toJSON)t=n.toJSON(e);else{t={name:e.name,times:Oi(e.times,Array),values:Oi(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(t.interpolation=n)}return t.type=e.ValueTypeName,t}InterpolantFactoryMethodDiscrete(e){return new $1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new V1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new B1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dn:t=this.InterpolantFactoryMethodDiscrete;break;case on:t=this.InterpolantFactoryMethodLinear;break;case ri:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(t);return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dn;case this.InterpolantFactoryMethodLinear:return on;case this.InterpolantFactoryMethodSmooth:return ri}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const o=this.times,i=o.length;let s=0,n=i-1;for(;s!==i&&o[s]<e;)++s;for(;n!==-1&&o[n]>t;)--n;if(++n,s!==0||n!==i){s>=n&&(n=Math.max(n,1),s=n-1);const e=this.getValueSize();this.times=o.slice(s,n),this.values=this.values.slice(s*e,n*e)}return this}validate(){let e=!0;const s=this.getValueSize();s-Math.floor(s)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const o=this.times,t=this.values,i=o.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==i;s++){const t=o[s];if(typeof t=="number"&&isNaN(t)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,t),e=!1;break}if(n!==null&&n>t){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,t,n),e=!1;break}n=t}if(t!==void 0&&em(t))for(let n=0,o=t.length;n!==o;++n){const s=t[n];if(isNaN(s)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,n,s),e=!1;break}}return e}optimize(){const e=this.times.slice(),s=this.values.slice(),t=this.getValueSize(),i=this.getInterpolation()===ri,o=e.length-1;let n=1;for(let a=1;a<o;++a){let r=!1;const c=e[a],l=e[a+1];if(c!==l&&(a!==1||c!==e[0]))if(i)r=!0;else{const e=a*t,n=e-t,o=e+t;for(let i=0;i!==t;++i){const a=s[e+i];if(a!==s[n+i]||a!==s[o+i]){r=!0;break}}}if(r){if(a!==n){e[n]=e[a];const o=a*t,i=n*t;for(let e=0;e!==t;++e)s[i+e]=s[o+e]}++n}}if(o>0){e[n]=e[o];for(let i=o*t,a=n*t,e=0;e!==t;++e)s[a+e]=s[i+e];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=s.slice(0,n*t)):(this.times=e,this.values=s),this}clone(){const t=this.times.slice(),n=this.values.slice(),s=this.constructor,e=new s(this.name,t,n);return e.createInterpolant=this.createInterpolant,e}},ee.prototype.ValueTypeName="",ee.prototype.TimeBufferType=Float32Array,ee.prototype.ValueBufferType=Float32Array,ee.prototype.DefaultInterpolation=on,yt=class extends ee{constructor(e,t,n){super(e,t,n)}},yt.prototype.ValueTypeName="bool",yt.prototype.ValueBufferType=Array,yt.prototype.DefaultInterpolation=Dn,yt.prototype.InterpolantFactoryMethodLinear=void 0,yt.prototype.InterpolantFactoryMethodSmooth=void 0,qa=class extends ee{constructor(e,t,n,s){super(e,t,n,s)}},qa.prototype.ValueTypeName="color",xt=class extends ee{constructor(e,t,n,s){super(e,t,n,s)}},xt.prototype.ValueTypeName="number",Y1=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,i=this.valueSize,c=(n-t)/(s-t);let o=e*i;for(let e=o+i;o!==e;o+=4)Ye.slerpFlat(a,0,r,o-i,r,o,c);return a}},Ct=class extends ee{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Y1(this.times,this.values,this.getValueSize(),e)}},Ct.prototype.ValueTypeName="quaternion",Ct.prototype.InterpolantFactoryMethodSmooth=void 0,Tt=class extends ee{constructor(e,t,n){super(e,t,n)}},Tt.prototype.ValueTypeName="string",Tt.prototype.ValueBufferType=Array,Tt.prototype.DefaultInterpolation=Dn,Tt.prototype.InterpolantFactoryMethodLinear=void 0,Tt.prototype.InterpolantFactoryMethodSmooth=void 0,vt=class extends ee{constructor(e,t,n,s){super(e,t,n,s)}},vt.prototype.ValueTypeName="vector",Z1=class{constructor(e="",t=-1,n=[],s=Td){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ue(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,o=1/(e.fps||1);for(let e=0,s=n.length;e!==s;++e)t.push(af(n[e]).scale(o));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,s=n.length;e!==s;++e)t.push(ee.toJSON(n[e]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const o=t.length,i=[];for(let a=0;a<o;a++){let e=[],r=[];e.push((a+o-1)%o,a,(a+1)%o),r.push(0,1,0);const c=mf(e);e=P1(e,1,c),r=P1(r,1,c),!s&&e[0]===0&&(e.push(o),r.push(r[0])),i.push(new xt(".morphTargetInfluences["+t[a].name+"]",e,r).scale(1/n))}return new this(e,-1,i)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,a=e.length;t<a;t++){const o=e[t],n=o.name.match(i);if(n&&n.length>1){const t=n[1];let e=s[t];e||(s[t]=e=[]),e.push(o)}}const o=[];for(const e in s)o.push(this.CreateFromMorphTargetSequence(e,s[e],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const s=function(e,t,n,s,o){if(n.length!==0){const i=[],a=[];H1(n,i,a,s),i.length!==0&&o.push(new e(t,i,a))}},n=[],a=e.name||"default",r=e.fps||30,c=e.blendMode;let o=e.length||-1;const i=e.hierarchy||[];for(let a=0;a<i.length;a++){const e=i[a].keys;if(!e||e.length===0)continue;if(e[0].morphTargets){const s={};let t;for(t=0;t<e.length;t++)if(e[t].morphTargets)for(let n=0;n<e[t].morphTargets.length;n++)s[e[t].morphTargets[n]]=-1;for(const o in s){const i=[],a=[];for(let n=0;n!==e[t].morphTargets.length;++n){const s=e[t];i.push(s.time),a.push(s.morphTarget===o?1:0)}n.push(new xt(".morphTargetInfluence["+o+"]",i,a))}o=s.length*r}else{const o=".bones["+t[a].name+"]";s(vt,o+".position",e,"pos",n),s(Ct,o+".quaternion",e,"rot",n),s(vt,o+".scale",e,"scl",n)}}if(n.length===0)return null;const l=new this(a,o,n,c);return l}resetDuration(){const t=this.tracks;let e=0;for(let n=0,o=t.length;n!==o;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function rf(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xt;case"vector":case"vector2":case"vector3":case"vector4":return vt;case"color":return qa;case"quaternion":return Ct;case"bool":case"boolean":return yt;case"string":return Tt}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function af(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=rf(e.type);if(e.times===void 0){const t=[],n=[];H1(e.keys,t,n,"value"),e.times=t,e.values=n}return t.parse!==void 0?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Ne={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},n4=class{constructor(e,t,n){const s=this;let r=!1,i=0,a=0,c=void 0;const o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){a++,r===!1&&s.onStart!==void 0&&s.onStart(e,i,a),r=!0},this.itemEnd=function(e){i++,s.onProgress!==void 0&&s.onProgress(e,i,a),i===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(e){s.onError!==void 0&&s.onError(e)},this.resolveURL=function(e){return c?c(e):e},this.setURLModifier=function(e){return c=e,this},this.addHandler=function(e,t){return o.push(e,t),this},this.removeHandler=function(e){const t=o.indexOf(e);return t!==-1&&o.splice(t,2),this},this.getHandler=function(e){for(let t=0,s=o.length;t<s;t+=2){const n=o[t],i=o[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return i}return null}}},s4=new n4,It=class{constructor(e){this.manager=e!==void 0?e:s4,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},It.DEFAULT_MATERIAL_NAME="__DEFAULT",be={},a4=class extends Error{constructor(e,t){super(e),this.response=t}},Wa=class extends It{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=Ne.get(e);if(o!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0),o;if(be[e]!==void 0){be[e].push({onLoad:t,onProgress:n,onError:s});return}be[e]=[],be[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),i=this.mimeType,r=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||t.body===void 0||t.body.getReader===void 0)return t;const n=be[e],a=t.body.getReader(),s=t.headers.get("X-File-Size")||t.headers.get("Content-Length"),o=s?parseInt(s):0,r=o!==0;let i=0;const c=new ReadableStream({start(e){t();function t(){a.read().then(({done:s,value:a})=>{if(s)e.close();else{i+=a.byteLength;const s=new ProgressEvent("progress",{lengthComputable:r,loaded:i,total:o});for(let e=0,o=n.length;e<o;e++){const t=n[e];t.onProgress&&t.onProgress(s)}e.enqueue(a),t()}},t=>{e.error(t)})}}});return new Response(c)}throw new a4(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(r){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(e=>{const t=new DOMParser;return t.parseFromString(e,i)});case"json":return e.json();default:if(i==="")return e.text();const n=/charset="?([^;"\s]*)"?/i,t=n.exec(i),s=t&&t[1]?t[1].toLowerCase():void 0,o=new TextDecoder(s);return e.arrayBuffer().then(e=>o.decode(e))}}).then(t=>{Ne.add(e,t);const n=be[e];delete be[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onLoad&&s.onLoad(t)}}).catch(t=>{const n=be[e];if(n===void 0)throw this.manager.itemError(e),t;delete be[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onError&&s.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},c4=class extends It{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Ne.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;const o=In("img");function r(){l(),Ne.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),s&&s(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener("load",r,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",r,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},Ia=class extends It{constructor(e){super(e)}load(e,t,n,s){const o=new B,i=new c4(this.manager);return i.setCrossOrigin(this.crossOrigin),i.setPath(this.path),i.load(e,function(e){o.image=e,o.needsUpdate=!0,t!==void 0&&t(o)},n,s),o}},Ii=class extends j{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new s(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Vi=new i,Ra=new e,La=new e,qi=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new o(512,512),this.mapType=me,this.map=null,this.mapPass=null,this.matrix=new i,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new o(1,1),this._viewportCount=1,this._viewports=[new m(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ra.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ra),La.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(La),t.updateMatrixWorld(),Vi.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vi),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vi)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return(new this.constructor).copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},p4=class extends qi{constructor(){super(new N(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Nt*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},g4=class extends Ii{constructor(e,t,n=0,s=Math.PI/3,o=0,i=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(j.DEFAULT_UP),this.updateMatrix(),this.target=new j,this.distance=n,this.angle=s,this.penumbra=o,this.decay=i,this.map=null,this.shadow=new p4}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Na=new i,An=new e,Gi=new e,y4=class extends qi{constructor(){super(new N(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new o(4,2),this._viewportCount=6,this._viewports=[new m(2,1,1,1),new m(0,1,1,1),new m(3,1,1,1),new m(1,1,1,1),new m(3,0,1,1),new m(1,0,1,1)],this._cubeDirections=[new e(1,0,0),new e(-1,0,0),new e(0,0,1),new e(0,0,-1),new e(0,1,0),new e(0,-1,0)],this._cubeUps=[new e(0,1,0),new e(0,1,0),new e(0,1,0),new e(0,1,0),new e(0,0,1),new e(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,o=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),An.setFromMatrixPosition(e.matrixWorld),n.position.copy(An),Gi.copy(n.position),Gi.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Gi),n.updateMatrixWorld(),o.makeTranslation(-An.x,-An.y,-An.z),Na.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na)}},_4=class extends Ii{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new y4}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ps=class extends Xa{constructor(e=-1,t=1,n=1,s=-1,o=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=i,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),s=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let e=o-n,a=o+n,t=i+s,r=i-s;if(this.view!==null&&this.view.enabled){const n=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;e+=n*this.view.offsetX,a=e+n*this.view.width,t-=s*this.view.offsetY,r=t-s*this.view.height}this.projectionMatrix.makeOrthographic(e,a,t,r,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},O4=class extends qi{constructor(){super(new ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},x4=class extends Ii{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(j.DEFAULT_UP),this.updateMatrix(),this.target=new j,this.shadow=new O4}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bn=class{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)?e:/^data:.*,.*$/i.test(e)?e:/^blob:.*$/i.test(e)?e:t+e)}},E4=class extends It{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,i=Ne.get(e);if(i!==void 0){if(o.manager.itemStart(e),i.then){i.then(n=>{t&&t(n),o.manager.itemEnd(e)}).catch(e=>{s&&s(e)});return}return setTimeout(function(){t&&t(i),o.manager.itemEnd(e)},0),i}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const r=fetch(e,a).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(n){return Ne.add(e,n),t&&t(n),o.manager.itemEnd(e),n}).catch(function(t){s&&s(t),Ne.remove(e),o.manager.itemError(e),o.manager.itemEnd(e)});Ne.add(e,r),o.manager.itemStart(e)}},k4=class extends N{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ia="\\[\\]\\.:\\/",S4=new RegExp("["+ia+"]","g"),ra="[^"+ia+"]",F4="[^"+ia.replace("\\.","")+"]",T4=/((?:WC+[/:])*)/.source.replace("WC",ra),z4=/(WCOD+)?/.source.replace("WCOD",F4),D4=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ra),N4=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ra),L4=new RegExp("^"+T4+z4+D4+N4+"$"),R4=["material","materials","bones","map"],P4=class{constructor(e,t,n){const s=n||v.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const s=this._targetGroup.nCachedObjects_,n=this._bindings[s];n!==void 0&&n.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},v=class _PropertyBinding{constructor(e,t,n){this.path=t,this.parsedPath=n||_PropertyBinding.parseTrackName(t),this.node=_PropertyBinding.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _PropertyBinding.Composite(e,t,n):new _PropertyBinding(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(S4,"")}static parseTrackName(e){const n=L4.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const t={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=t.nodeName&&t.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const e=t.nodeName.substring(s+1);R4.indexOf(e)!==-1&&(t.nodeName=t.nodeName.substring(0,s),t.objectName=e)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return t}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(e){for(let o=0;o<e.length;o++){const s=e[o];if(s.name===t||s.uuid===t)return s;const i=n(s.children);if(i)return i}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,a=n.propertyName;let s=n.propertyIndex;if(e||(e=_PropertyBinding.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let t=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let n=0;n<e.length;n++)if(e[n].name===t){t=n;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(t!==void 0){if(e[t]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[t]}}const t=e[a];if(t===void 0){const t=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+t+"."+a+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?r=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}o=this.BindingType.ArrayElement,this.resolvedProperty=t,this.propertyIndex=s}else t.fromArray!==void 0&&t.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=t):Array.isArray(t)?(o=this.BindingType.EntireArray,this.resolvedProperty=t):this.propertyName=a;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},v.Composite=P4,v.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},v.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},v.prototype.GetterByBindingType=[v.prototype._getValue_direct,v.prototype._getValue_array,v.prototype._getValue_arrayElement,v.prototype._getValue_toArray],v.prototype.SetterByBindingTypeAndVersioning=[[v.prototype._setValue_direct,v.prototype._setValue_direct_setNeedsUpdate,v.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[v.prototype._setValue_array,v.prototype._setValue_array_setNeedsUpdate,v.prototype._setValue_array_setMatrixWorldNeedsUpdate],[v.prototype._setValue_arrayElement,v.prototype._setValue_arrayElement_setNeedsUpdate,v.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[v.prototype._setValue_fromArray,v.prototype._setValue_fromArray_setNeedsUpdate,v.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],Z8=new Float32Array(1),ja=new i,V4=class{constructor(e,t,n=0,s=1/0){this.ray=new jn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ja.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ja),this}intersectObject(e,t=!0,n=[]){return ga(e,this,n,t),n.sort($4),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)ga(e[s],this,n,t);return n.sort($4),n}};function $4(e,t){return e.distance-t.distance}function ga(e,t,n,s){let o=!0;if(e.layers.test(t.layers)){const s=e.raycast(t,n);s===!1&&(o=!1)}if(o===!0&&s===!0){const s=e.children;for(let e=0,o=s.length;e<o;e++)ga(s[e],t,n,!0)}}xa=new e,Y4=class extends j{constructor(t=new e(0,0,1),n=new e(0,0,0),s=1,o=16776960,i=s*.2,a=i*.2){super(),this.type="ArrowHelper",sa===void 0&&(sa=new ne,sa.setAttribute("position",new $([0,0,0,0,1,0],3)),Ea=new S1(.5,1,5,1),Ea.translate(0,-.5,0)),this.position.copy(n),this.line=new ws(sa,new Ho({color:o,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new P(Ea,new qe({color:o,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,i,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{xa.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(xa,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};function G4(e,t,n,s){const o=Y8(s);switch(n){case Zr:return e*t;case ha:return e*t/o.components*o.byteLength;case la:return e*t/o.components*o.byteLength;case _a:return e*t*2/o.components*o.byteLength;case ca:return e*t*2/o.components*o.byteLength;case Qr:return e*t*3/o.components*o.byteLength;case Q:return e*t*4/o.components*o.byteLength;case oa:return e*t*4/o.components*o.byteLength;case qs:case Ls:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Ms:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ta:case Ji:return Math.max(e,16)*Math.max(t,8)/4;case na:case ea:return Math.max(e,8)*Math.max(t,8)/2;case Zi:case Qi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Xi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Yi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ki:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case $i:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Bi:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Hi:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ri:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Li:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Gs:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ni:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Di:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case zi:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Fi:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Si:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ai:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case rs:case vi:case pi:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Za:case fi:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ys:case ci:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Y8(e){switch(e){case me:case Ca:return{byteLength:1,components:1};case gn:case Oa:case mn:return{byteLength:2,components:1};case da:case ua:return{byteLength:2,components:4};case at:case aa:case oe:return{byteLength:4,components:1};case pa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Po}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Po);function Q4(){let e=null,t=!1,n=null,s=null;function o(t,i){n(t,i),s=e.requestAnimationFrame(o)}return{start:function(){if(t===!0)return;if(n===null)return;s=e.requestAnimationFrame(o),t=!0},stop:function(){e.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function q8(e){const t=new WeakMap;function n(t,n){const s=t.array,a=t.usage,r=s.byteLength,i=e.createBuffer();e.bindBuffer(n,i),e.bufferData(n,s,a),t.onUploadCallback();let o;if(s instanceof Float32Array)o=e.FLOAT;else if(s instanceof Uint16Array)t.isFloat16BufferAttribute?o=e.HALF_FLOAT:o=e.UNSIGNED_SHORT;else if(s instanceof Int16Array)o=e.SHORT;else if(s instanceof Uint32Array)o=e.UNSIGNED_INT;else if(s instanceof Int32Array)o=e.INT;else if(s instanceof Int8Array)o=e.BYTE;else if(s instanceof Uint8Array)o=e.UNSIGNED_BYTE;else if(s instanceof Uint8ClampedArray)o=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:i,type:o,bytesPerElement:s.BYTES_PER_ELEMENT,version:t.version,size:r}}function s(t,n,s){const i=n.array,o=n.updateRanges;if(e.bindBuffer(s,t),o.length===0)e.bufferSubData(s,0,i);else{o.sort((e,t)=>e.start-t.start);let t=0;for(let s=1;s<o.length;s++){const e=o[t],n=o[s];n.start<=e.start+e.count+1?e.count=Math.max(e.count,n.start+n.count-e.start):(++t,o[t]=n)}o.length=t+1;for(let t=0,a=o.length;t<a;t++){const n=o[t];e.bufferSubData(s,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function i(n){n.isInterleavedBufferAttribute&&(n=n.data);const s=t.get(n);s&&(e.deleteBuffer(s.buffer),t.delete(n))}function a(e,o){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){const n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}const i=t.get(e);if(i===void 0)t.set(e,n(e,o));else if(i.version<e.version){if(i.size!==e.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(i.buffer,e,o),i.version=e.version}}return{get:o,remove:i,update:a}}J4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,l0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,h0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,w0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,z0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,B0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Z0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,J0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,p2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,k2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,A2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,F2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,z2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,N2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,R2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,K2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,q2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Q2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,c3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,O3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,M3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,r={alphahash_fragment:J4,alphahash_pars_fragment:e0,alphamap_fragment:t0,alphamap_pars_fragment:n0,alphatest_fragment:s0,alphatest_pars_fragment:o0,aomap_fragment:i0,aomap_pars_fragment:a0,batching_pars_vertex:r0,batching_vertex:c0,begin_vertex:l0,beginnormal_vertex:d0,bsdfs:u0,iridescence_fragment:h0,bumpmap_pars_fragment:m0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:p0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:v0,color_fragment:b0,color_pars_fragment:j0,color_pars_vertex:y0,color_vertex:_0,common:w0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:x0,displacementmap_pars_vertex:C0,displacementmap_vertex:E0,emissivemap_fragment:k0,emissivemap_pars_fragment:A0,colorspace_fragment:S0,colorspace_pars_fragment:M0,envmap_fragment:F0,envmap_common_pars_fragment:T0,envmap_pars_fragment:z0,envmap_pars_vertex:D0,envmap_physical_pars_fragment:U0,envmap_vertex:N0,fog_vertex:L0,fog_pars_vertex:R0,fog_fragment:P0,fog_pars_fragment:H0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:B0,lights_lambert_fragment:V0,lights_lambert_pars_fragment:$0,lights_pars_begin:W0,lights_toon_fragment:K0,lights_toon_pars_fragment:q0,lights_phong_fragment:Y0,lights_phong_pars_fragment:G0,lights_physical_fragment:X0,lights_physical_pars_fragment:Q0,lights_fragment_begin:Z0,lights_fragment_maps:J0,lights_fragment_end:e2,logdepthbuf_fragment:t2,logdepthbuf_pars_fragment:n2,logdepthbuf_pars_vertex:s2,logdepthbuf_vertex:o2,map_fragment:i2,map_pars_fragment:a2,map_particle_fragment:r2,map_particle_pars_fragment:c2,metalnessmap_fragment:l2,metalnessmap_pars_fragment:d2,morphinstance_vertex:u2,morphcolor_vertex:h2,morphnormal_vertex:m2,morphtarget_pars_vertex:f2,morphtarget_vertex:p2,normal_fragment_begin:g2,normal_fragment_maps:v2,normal_pars_fragment:b2,normal_pars_vertex:j2,normal_vertex:y2,normalmap_pars_fragment:_2,clearcoat_normal_fragment_begin:w2,clearcoat_normal_fragment_maps:O2,clearcoat_pars_fragment:x2,iridescence_pars_fragment:C2,opaque_fragment:E2,packing:k2,premultiplied_alpha_fragment:A2,project_vertex:S2,dithering_fragment:M2,dithering_pars_fragment:F2,roughnessmap_fragment:T2,roughnessmap_pars_fragment:z2,shadowmap_pars_fragment:D2,shadowmap_pars_vertex:N2,shadowmap_vertex:L2,shadowmask_pars_fragment:R2,skinbase_vertex:P2,skinning_pars_vertex:H2,skinning_vertex:I2,skinnormal_vertex:B2,specularmap_fragment:V2,specularmap_pars_fragment:$2,tonemapping_fragment:W2,tonemapping_pars_fragment:U2,transmission_fragment:K2,transmission_pars_fragment:q2,uv_pars_fragment:Y2,uv_pars_vertex:G2,uv_vertex:X2,worldpos_vertex:Q2,background_vert:Z2,background_frag:J2,backgroundCube_vert:e3,backgroundCube_frag:t3,cube_vert:n3,cube_frag:s3,depth_vert:o3,depth_frag:i3,distanceRGBA_vert:a3,distanceRGBA_frag:r3,equirect_vert:c3,equirect_frag:l3,linedashed_vert:d3,linedashed_frag:u3,meshbasic_vert:h3,meshbasic_frag:m3,meshlambert_vert:f3,meshlambert_frag:p3,meshmatcap_vert:g3,meshmatcap_frag:v3,meshnormal_vert:b3,meshnormal_frag:j3,meshphong_vert:y3,meshphong_frag:_3,meshphysical_vert:w3,meshphysical_frag:O3,meshtoon_vert:x3,meshtoon_frag:C3,points_vert:E3,points_frag:k3,shadow_vert:A3,shadow_frag:S3,sprite_vert:M3,sprite_frag:F3},t={common:{diffuse:{value:new s(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new c},alphaMap:{value:null},alphaMapTransform:{value:new c},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new c}},envmap:{envMap:{value:null},envMapRotation:{value:new c},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new c}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new c}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new c},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new c},normalScale:{value:new o(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new c},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new c}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new c}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new c}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new s(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new s(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new c},alphaTest:{value:0},uvTransform:{value:new c}},sprite:{diffuse:{value:new s(16777215)},opacity:{value:1},center:{value:new o(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new c},alphaMap:{value:null},alphaMapTransform:{value:new c},alphaTest:{value:0}}},de={basic:{uniforms:H([t.common,t.specularmap,t.envmap,t.aomap,t.lightmap,t.fog]),vertexShader:r.meshbasic_vert,fragmentShader:r.meshbasic_frag},lambert:{uniforms:H([t.common,t.specularmap,t.envmap,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.fog,t.lights,{emissive:{value:new s(0)}}]),vertexShader:r.meshlambert_vert,fragmentShader:r.meshlambert_frag},phong:{uniforms:H([t.common,t.specularmap,t.envmap,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.fog,t.lights,{emissive:{value:new s(0)},specular:{value:new s(1118481)},shininess:{value:30}}]),vertexShader:r.meshphong_vert,fragmentShader:r.meshphong_frag},standard:{uniforms:H([t.common,t.envmap,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.roughnessmap,t.metalnessmap,t.fog,t.lights,{emissive:{value:new s(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:r.meshphysical_vert,fragmentShader:r.meshphysical_frag},toon:{uniforms:H([t.common,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.gradientmap,t.fog,t.lights,{emissive:{value:new s(0)}}]),vertexShader:r.meshtoon_vert,fragmentShader:r.meshtoon_frag},matcap:{uniforms:H([t.common,t.bumpmap,t.normalmap,t.displacementmap,t.fog,{matcap:{value:null}}]),vertexShader:r.meshmatcap_vert,fragmentShader:r.meshmatcap_frag},points:{uniforms:H([t.points,t.fog]),vertexShader:r.points_vert,fragmentShader:r.points_frag},dashed:{uniforms:H([t.common,t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:r.linedashed_vert,fragmentShader:r.linedashed_frag},depth:{uniforms:H([t.common,t.displacementmap]),vertexShader:r.depth_vert,fragmentShader:r.depth_frag},normal:{uniforms:H([t.common,t.bumpmap,t.normalmap,t.displacementmap,{opacity:{value:1}}]),vertexShader:r.meshnormal_vert,fragmentShader:r.meshnormal_frag},sprite:{uniforms:H([t.sprite,t.fog]),vertexShader:r.sprite_vert,fragmentShader:r.sprite_frag},background:{uniforms:{uvTransform:{value:new c},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:r.background_vert,fragmentShader:r.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new c}},vertexShader:r.backgroundCube_vert,fragmentShader:r.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:r.cube_vert,fragmentShader:r.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:r.equirect_vert,fragmentShader:r.equirect_frag},distanceRGBA:{uniforms:H([t.common,t.displacementmap,{referencePosition:{value:new e},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:r.distanceRGBA_vert,fragmentShader:r.distanceRGBA_frag},shadow:{uniforms:H([t.lights,t.fog,{color:{value:new s(0)},opacity:{value:1}}]),vertexShader:r.shadow_vert,fragmentShader:r.shadow_frag}},de.physical={uniforms:H([de.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new c},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new c},clearcoatNormalScale:{value:new o(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new c},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new c},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new c},sheen:{value:0},sheenColor:{value:new s(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new c},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new c},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new c},transmissionSamplerSize:{value:new o},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new c},attenuationDistance:{value:0},attenuationColor:{value:new s(0)},specularColor:{value:new s(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new c},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new c},anisotropyVector:{value:new o},anisotropyMap:{value:null},anisotropyMapTransform:{value:new c}}]),vertexShader:r.meshphysical_vert,fragmentShader:r.meshphysical_frag},Kn={r:0,b:0,g:0},ct=new Qe,R3=new i;function $8(e,t,n,o,i,a,r){const h=new s(0);let d=a===!0?0:1,l,c,m=null,f=0,g=null;function b(e){let s=e.isScene===!0?e.background:null;if(s&&s.isTexture){const o=e.backgroundBlurriness>0;s=(o?n:t).get(s)}return s}function j(t){let s=!1;const n=b(t);n===null?v(h,d):n&&n.isColor&&(v(n,1),s=!0);const i=e.xr.getEnvironmentBlendMode();i==="additive"?o.buffers.color.setClear(0,0,0,1,r):i==="alpha-blend"&&o.buffers.color.setClear(0,0,0,0,r),(e.autoClear||s)&&(o.buffers.depth.setTest(!0),o.buffers.depth.setMask(!0),o.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(t,n){const s=b(n);s&&(s.isCubeTexture||s.mapping===Qn)?(c===void 0&&(c=new P(new Mi(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Ln(de.backgroundCube.uniforms),vertexShader:de.backgroundCube.vertexShader,fragmentShader:de.backgroundCube.fragmentShader,side:I,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ct.copy(n.backgroundRotation),ct.x*=-1,ct.y*=-1,ct.z*=-1,s.isCubeTexture&&s.isRenderTargetTexture===!1&&(ct.y*=-1,ct.z*=-1),c.material.uniforms.envMap.value=s,c.material.uniforms.flipEnvMap.value=s.isCubeTexture&&s.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(R3.makeRotationFromEuler(ct)),c.material.toneMapped=u.getTransfer(s.colorSpace)!==p,(m!==s||f!==s.version||g!==e.toneMapping)&&(c.material.needsUpdate=!0,m=s,f=s.version,g=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null)):s&&s.isTexture&&(l===void 0&&(l=new P(new or(2,2),new Ge({name:"BackgroundMaterial",uniforms:Ln(de.background.uniforms),vertexShader:de.background.vertexShader,fragmentShader:de.background.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=s,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=u.getTransfer(s.colorSpace)!==p,s.matrixAutoUpdate===!0&&s.updateMatrix(),l.material.uniforms.uvTransform.value.copy(s.matrix),(m!==s||f!==s.version||g!==e.toneMapping)&&(l.material.needsUpdate=!0,m=s,f=s.version,g=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function v(t,n){t.getRGB(Kn,Ud(e)),o.buffers.color.setClear(Kn.r,Kn.g,Kn.b,n,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return h},setClearColor:function(e,t=1){h.set(e),d=t,v(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(e){d=e,v(h,d)},render:j,addToRenderList:y,dispose:_}}function V8(e,t){const v=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},o=h(null);let n=o,a=!1;function C(s,o,i,r,c){let l=!1;const u=j(r,i,o);n!==u&&(n=u,d(n.object)),l=b(s,r,i,c),l&&g(s,r,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(l||a)&&(a=!1,y(s,o,i,r),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function x(){return e.createVertexArray()}function d(t){return e.bindVertexArray(t)}function i(t){return e.deleteVertexArray(t)}function j(e,t,n){const r=n.wireframe===!0;let o=s[e.id];o===void 0&&(o={},s[e.id]=o);let i=o[t.id];i===void 0&&(i={},o[t.id]=i);let a=i[r];return a===void 0&&(a=h(x()),i[r]=a),a}function h(e){const t=[],n=[],s=[];for(let e=0;e<v;e++)t[e]=0,n[e]=0,s[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:s,object:e,attributes:{},index:null}}function b(e,t,s,o){const r=n.attributes,c=t.attributes;let i=0;const a=s.getAttributes();for(const t in a){const n=a[t];if(n.location>=0){const s=r[t];let n=c[t];if(n===void 0&&(t==="instanceMatrix"&&e.instanceMatrix&&(n=e.instanceMatrix),t==="instanceColor"&&e.instanceColor&&(n=e.instanceColor)),s===void 0)return!0;if(s.attribute!==n)return!0;if(n&&s.data!==n.data)return!0;i++}}return n.attributesNum!==i||n.index!==o}function g(e,t,s,o){const i={},c=t.attributes;let a=0;const r=s.getAttributes();for(const t in r){const n=r[t];if(n.location>=0){let n=c[t];n===void 0&&(t==="instanceMatrix"&&e.instanceMatrix&&(n=e.instanceMatrix),t==="instanceColor"&&e.instanceColor&&(n=e.instanceColor));const s={};s.attribute=n,n&&n.data&&(s.data=n.data),i[t]=s,a++}}n.attributes=i,n.attributesNum=a,n.index=o}function p(){const e=n.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function c(e){r(e,0)}function r(t,s){const a=n.newAttributes,o=n.enabledAttributes,i=n.attributeDivisors;a[t]=1,o[t]===0&&(e.enableVertexAttribArray(t),o[t]=1),i[t]!==s&&(e.vertexAttribDivisor(t,s),i[t]=s)}function m(){const s=n.newAttributes,t=n.enabledAttributes;for(let n=0,o=t.length;n<o;n++)t[n]!==s[n]&&(e.disableVertexAttribArray(n),t[n]=0)}function u(t,n,s,o,i,a,r){r===!0?e.vertexAttribIPointer(t,n,s,i,a):e.vertexAttribPointer(t,n,s,o,i,a)}function y(n,s,o,i){p();const d=i.attributes,a=o.getAttributes(),l=s.defaultAttributeValues;for(const o in a){const s=a[o];if(s.location>=0){let a=d[o];if(a===void 0&&(o==="instanceMatrix"&&n.instanceMatrix&&(a=n.instanceMatrix),o==="instanceColor"&&n.instanceColor&&(a=n.instanceColor)),a!==void 0){const m=a.normalized,o=a.itemSize,l=t.get(a);if(l===void 0)continue;const f=l.buffer,d=l.type,h=l.bytesPerElement,p=d===e.INT||d===e.UNSIGNED_INT||a.gpuType===aa;if(a.isInterleavedBufferAttribute){const t=a.data,l=t.stride,g=a.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<s.locationSize;e++)r(s.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&i._maxInstanceCount===void 0&&(i._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<s.locationSize;e++)c(s.location+e);e.bindBuffer(e.ARRAY_BUFFER,f);for(let e=0;e<s.locationSize;e++)u(s.location+e,o/s.locationSize,d,m,l*h,(g+o/s.locationSize*e)*h,p)}else{if(a.isInstancedBufferAttribute){for(let e=0;e<s.locationSize;e++)r(s.location+e,a.meshPerAttribute);n.isInstancedMesh!==!0&&i._maxInstanceCount===void 0&&(i._maxInstanceCount=a.meshPerAttribute*a.count)}else for(let e=0;e<s.locationSize;e++)c(s.location+e);e.bindBuffer(e.ARRAY_BUFFER,f);for(let e=0;e<s.locationSize;e++)u(s.location+e,o/s.locationSize,d,m,o*h,o/s.locationSize*e*h,p)}}else if(l!==void 0){const t=l[o];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(s.location,t);break;case 3:e.vertexAttrib3fv(s.location,t);break;case 4:e.vertexAttrib4fv(s.location,t);break;default:e.vertexAttrib1fv(s.location,t)}}}}m()}function _(){l();for(const t in s){const e=s[t];for(const n in e){const t=e[n];for(const e in t)i(t[e].object),delete t[e];delete e[n]}delete s[t]}}function w(e){if(s[e.id]===void 0)return;const t=s[e.id];for(const n in t){const e=t[n];for(const t in e)i(e[t].object),delete e[t];delete t[n]}delete s[e.id]}function O(e){for(const o in s){const t=s[o];if(t[e.id]===void 0)continue;const n=t[e.id];for(const e in n)i(n[e].object),delete n[e];delete t[e.id]}}function l(){if(f(),a=!0,n===o)return;n=o,d(n.object)}function f(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:C,reset:l,resetDefaultState:f,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:p,enableAttribute:c,disableUnusedAttributes:m}}function B8(e,t,n){let s;function i(e){s=e}function a(t,o){e.drawArrays(s,t,o),n.update(o,s,1)}function o(t,o,i){if(i===0)return;e.drawArraysInstanced(s,t,o,i),n.update(o,s,i)}function r(e,o,i){if(i===0)return;const r=t.get("WEBGL_multi_draw");r.multiDrawArraysWEBGL(s,e,0,o,0,i);let a=0;for(let e=0;e<i;e++)a+=o[e];n.update(a,s,1)}function c(e,i,a,r){if(a===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],r[t]);else{c.multiDrawArraysInstancedWEBGL(s,e,0,i,0,r,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*r[e];n.update(t,s,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=c}function I8(e,t,n,s){let i;function f(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const n=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function h(t){return t===Q||s.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function g(n){const o=n===mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(n!==me&&s.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==oe&&!o)}function c(t){if(t==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";t="mediump"}return t==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=n.precision!==void 0?n.precision:"highp";const a=c(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const u=n.logarithmicDepthBuffer===!0,l=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),r=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),v=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),j=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),_=r>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:c,textureFormatReadable:h,textureTypeReadable:g,precision:o,logarithmicDepthBuffer:u,reverseDepthBuffer:l,maxTextures:m,maxVertexTextures:r,maxTextureSize:p,maxCubemapSize:d,maxAttributes:v,maxVertexUniforms:b,maxVaryings:j,maxFragmentUniforms:y,vertexTextures:_,maxSamples:w}}function H8(e){const o=this;let i=null,n=0,r=!1,s=!1;const l=new et,d=new c,t={value:null,needsUpdate:!1};this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){const s=e.length!==0||t||n!==0||r;return r=t,n=e.length,s},this.beginShadows=function(){s=!0,a(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(e,t){i=a(e,t,0)},this.setState=function(o,c,l){const d=o.clippingPlanes,m=o.clipIntersection,f=o.clipShadows,h=e.get(o);if(!r||d===null||d.length===0||s&&!f)s?a(null):u();else{const o=s?0:n,r=o*4;let e=h.clippingState||null;t.value=e,e=a(d,c,r,l);for(let t=0;t!==r;++t)e[t]=i[t];h.clippingState=e,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=o}};function u(){t.value!==i&&(t.value=i,t.needsUpdate=n>0),o.numPlanes=n,o.numIntersection=0}function a(e,n,s,i){const r=e!==null?e.length:0;let a=null;if(r!==0){if(a=t.value,i!==!0||a===null){const t=s+r*4,o=n.matrixWorldInverse;d.getNormalMatrix(o),(a===null||a.length<t)&&(a=new Float32Array(t));for(let t=0,n=s;t!==r;++t,n+=4)l.copy(e[t]).applyMatrix4(o,d),l.normal.toArray(a,n),a[n+3]=l.constant}t.value=a,t.needsUpdate=!0}return o.numPlanes=r,o.numIntersection=0,a}}function P8(e){let t=new WeakMap;function n(e,t){return t===Wi?e.mapping=Ut:t===Ui&&(e.mapping=Kt),e}function o(o){if(o&&o.isTexture){const i=o.mapping;if(i===Wi||i===Ui){if(t.has(o)){const e=t.get(o).texture;return n(e,o.mapping)}const i=o.image;if(i&&i.height>0){const a=new iu(i.height);return a.fromEquirectangularTexture(e,o),t.set(o,a),o.addEventListener("dispose",s),n(a.texture,o.mapping)}return null}}return o}function s(e){const n=e.target;n.removeEventListener("dispose",s);const o=t.get(n);o!==void 0&&(t.delete(n),o.dispose())}function i(){t=new WeakMap}return{get:o,dispose:i}}Bt=4,cr=[.125,.215,.35,.446,.526,.582],lt=20,oi=new ps,gr=new s,si=null,ti=0,Jo=0,Zo=!1,pt=(1+Math.sqrt(5))/2,kt=1/pt,xr=[new e(-pt,kt,0),new e(pt,kt,0),new e(-kt,0,pt),new e(kt,0,pt),new e(0,pt,-kt),new e(0,pt,kt),new e(-1,1,-1),new e(1,1,-1),new e(-1,1,1),new e(1,1,1)],nh=new e,zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,o={}){const{size:a=256,position:r=nh}=o;si=this._renderer.getRenderTarget(),ti=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,s,i,r),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(si,ti,Jo),this._renderer.xr.enabled=Zo,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ut||e.mapping===Kt?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),si=this._renderer.getRenderTarget(),ti=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,n={magFilter:V,minFilter:V,generateMipmaps:!1,type:mn,format:Q,colorSpace:z,depthBuffer:!1},s=ih(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z8(s),this._blurMaterial=S8(s,e,t))}return s}_compileMaterial(e){const t=new P(this._lodPlanes[0],e);this._renderer.compile(t,oi)}_sceneToCubeUV(e,t,n,s,o){const m=90,f=1,i=new N(m,f,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],a=this._renderer,p=a.autoClear,g=a.toneMapping;a.getClearColor(gr),a.toneMapping=Re,a.autoClear=!1;const d=new qe({name:"PMREM.Background",side:I,depthWrite:!1,depthTest:!1}),u=new P(new Mi,d);let h=!1;const r=e.background;r?r.isColor&&(d.color.copy(r),e.background=null,h=!0):(d.color.copy(gr),h=!0);for(let t=0;t<6;t++){const r=t%3;r===0?(i.up.set(0,c[t],0),i.position.set(o.x,o.y,o.z),i.lookAt(o.x+l[t],o.y,o.z)):r===1?(i.up.set(0,0,c[t]),i.position.set(o.x,o.y,o.z),i.lookAt(o.x,o.y+l[t],o.z)):(i.up.set(0,c[t],0),i.position.set(o.x,o.y,o.z),i.lookAt(o.x,o.y,o.z+l[t]));const n=this._cubeSize;Yo(s,r*n,t>2?n:0,n,n),a.setRenderTarget(s),h&&a.render(u,i),a.render(e,i)}u.geometry.dispose(),u.material.dispose(),a.toneMapping=g,a.autoClear=p,e.background=r}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ut||e.mapping===Kt;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new P(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=e;const i=this._cubeSize;Yo(t,0,0,3*i,2*i),n.setRenderTarget(t),n.render(a,oi)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let t=1;t<n;t++){const s=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),o=xr[(n-t-1)%xr.length];this._blur(e,t-1,t,s,o)}t.autoClear=s}_blur(e,t,n,s,o){const i=this._pingPongRenderTarget;this._halfBlur(e,i,t,n,s,"latitudinal",o),this._halfBlur(i,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,i,a){const p=this._renderer,g=this._blurMaterial;i!=="latitudinal"&&i!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const j=3,b=new P(this._lodPlanes[s],g),r=g.uniforms,v=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*v):2*Math.PI/(2*lt-1),f=o/m,l=isFinite(o)?1+Math.floor(j*f):lt;l>lt&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${lt}`);const c=[];let h=0;for(let e=0;e<lt;++e){const n=e/f,t=Math.exp(-n*n/2);c.push(t),e===0?h+=t:e<l&&(h+=2*t)}for(let e=0;e<c.length;e++)c[e]=c[e]/h;r.envMap.value=e.texture,r.samples.value=l,r.weights.value=c,r.latitudinal.value=i==="latitudinal",a&&(r.poleAxis.value=a);const{_lodMax:u}=this;r.dTheta.value=m,r.mipInt.value=u-n;const d=this._sizeLods[s],y=3*d*(s>u-Bt?s-u+Bt:0),_=4*(this._cubeSize-d);Yo(t,y,_,3*d,2*d),p.setRenderTarget(t),p.render(b,oi)}};function z8(e){const n=[],s=[],o=[];let t=e;const i=e-Bt+1+cr.length;for(let l=0;l<i;l++){const m=Math.pow(2,t);s.push(m);let g=1/m;l>e-Bt?g=cr[l-e+Bt-1]:l===0&&(g=0),o.push(g);const v=1/(m-2),r=-v,c=1+v,_=[r,r,c,r,c,c,r,r,c,c,r,c],u=6,a=6,h=3,f=2,p=1,b=new Float32Array(h*a*u),j=new Float32Array(f*a*u),y=new Float32Array(p*a*u);for(let e=0;e<u;e++){const t=e%3*2/3-1,n=e>2?0:-1,s=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];b.set(s,h*a*e),j.set(_,f*a*e);const o=[e,e,e,e,e,e];y.set(o,p*a*e)}const d=new ne;d.setAttribute("position",new T(b,h)),d.setAttribute("uv",new T(j,f)),d.setAttribute("faceIndex",new T(y,p)),n.push(d),t>Bt&&t--}return{lodPlanes:n,sizeLods:s,sigmas:o}}function ih(e,t,n){const s=new ht(e,t,n);return s.texture.mapping=Qn,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Yo(e,t,n,s,o){e.viewport.set(t,n,s,o),e.scissor.set(t,n,s,o)}function S8(t,n,s){const o=new Float32Array(lt),i=new e(0,1,0),a=new Ge({name:"SphericalGaussianBlur",defines:{n:lt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/s,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ke,depthTest:!1,depthWrite:!1});return a}function ch(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ke,depthTest:!1,depthWrite:!1})}function lh(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ke,depthTest:!1,depthWrite:!1})}function Nr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function k8(e){let n=new WeakMap,t=null;function o(o){if(o&&o.isTexture){const a=o.mapping,r=a===Wi||a===Ui,c=a===Ut||a===Kt;if(r||c){let a=n.get(o);const l=a!==void 0?a.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==l)return t===null&&(t=new zr(e)),a=r?t.fromEquirectangular(o,a):t.fromCubemap(o,a),a.texture.pmremVersion=o.pmremVersion,n.set(o,a),a.texture;if(a!==void 0)return a.texture;const image=o.image;return r&&image&&image.height>0||c&&image&&i(image)?(t===null&&(t=new zr(e)),a=r?t.fromEquirectangular(o):t.fromCubemap(o),a.texture.pmremVersion=o.pmremVersion,n.set(o,a),o.addEventListener("dispose",s),a.texture):null}}return o}function i(e){let t=0;const n=6;for(let s=0;s<n;s++)e[s]!==void 0&&t++;return t===n}function s(e){const t=e.target;t.removeEventListener("dispose",s);const o=n.get(t);o!==void 0&&(n.delete(t),o.dispose())}function a(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:o,dispose:a}}function E8(e){const n={};function t(t){if(n[t]!==void 0)return n[t];let s;switch(t){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(t)}return n[t]=s,s}return{has:function(e){return t(e)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(e){const n=t(e);return n===null&&Do("THREE.WebGLRenderer: "+e+" extension not supported."),n}}}function C8(e,t,n,s){const i={},o=new WeakMap;function a(e){const r=e.target;r.index!==null&&t.remove(r.index);for(const e in r.attributes)t.remove(r.attributes[e]);r.removeEventListener("dispose",a),delete i[r.id];const c=o.get(r);c&&(t.remove(c),o.delete(r)),s.releaseStatesOfGeometry(r),r.isInstancedBufferGeometry===!0&&delete r._maxInstanceCount,n.memory.geometries--}function c(e,t){return i[t.id]===!0?t:(t.addEventListener("dispose",a),i[t.id]=!0,n.memory.geometries++,t)}function l(n){const s=n.attributes;for(const n in s)t.update(s[n],e.ARRAY_BUFFER)}function r(e){const n=[],s=e.index,i=e.attributes.position;let a=0;if(s!==null){const e=s.array;a=s.version;for(let t=0,a=e.length;t<a;t+=3){const s=e[t+0],o=e[t+1],i=e[t+2];n.push(s,o,o,i,i,s)}}else if(i!==void 0){const e=i.array;a=i.version;for(let t=0,a=e.length/3-1;t<a;t+=3){const s=t+0,o=t+1,i=t+2;n.push(s,o,o,i,i,s)}}else return;const r=new(ed(n)?Kr:qr)(n,1);r.version=a;const c=o.get(e);c&&t.remove(c),o.set(e,r)}function d(e){const t=o.get(e);if(t){const n=e.index;n!==null&&t.version<n.version&&r(e)}else r(e);return o.get(e)}return{get:c,update:l,getWireframeAttribute:d}}function _8(e,t,n){let s;function r(e){s=e}let o,i;function c(e){o=e.type,i=e.bytesPerElement}function l(t,a){e.drawElements(s,a,o,t*i),n.update(a,s,1)}function a(t,a,r){if(r===0)return;e.drawElementsInstanced(s,a,o,t*i,r),n.update(a,s,r)}function d(e,i,a){if(a===0)return;const c=t.get("WEBGL_multi_draw");c.multiDrawElementsWEBGL(s,i,0,o,e,0,a);let r=0;for(let e=0;e<a;e++)r+=i[e];n.update(r,s,1)}function u(e,r,c,l){if(c===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let t=0;t<e.length;t++)a(e[t]/i,r[t],l[t]);else{d.multiDrawElementsInstancedWEBGL(s,r,0,o,e,0,l,0,c);let t=0;for(let e=0;e<c;e++)t+=r[e]*l[e];n.update(t,s,1)}}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=a,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function j8(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(n,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(n/3);break;case e.LINES:t.lines+=o*(n/2);break;case e.LINE_STRIP:t.lines+=o*(n-1);break;case e.LINE_LOOP:t.lines+=o*n;break;case e.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:o,update:s}}function b8(e,t,n){const i=new WeakMap,s=new m;function a(a,r,c){const u=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=h!==void 0?h.length:0;let l=i.get(r);if(l===void 0||l.count!==d){let m=function(){u.dispose(),i.delete(r),r.removeEventListener("dispose",m)};l!==void 0&&l.texture.dispose();const p=r.morphAttributes.position!==void 0,f=r.morphAttributes.normal!==void 0,h=r.morphAttributes.color!==void 0,b=r.morphAttributes.position||[],v=r.morphAttributes.normal||[],g=r.morphAttributes.color||[];let a=0;p===!0&&(a=1),f===!0&&(a=2),h===!0&&(a=3);let n=r.attributes.position.count*a,c=1;n>t.maxTextureSize&&(c=Math.ceil(n/t.maxTextureSize),n=t.maxTextureSize);const e=new Float32Array(n*c*4*d),u=new Lc(e,n,c,d);u.type=oe,u.needsUpdate=!0;const j=a*4;for(let o=0;o<d;o++){const i=b[o],r=v[o],a=g[o],t=n*c*4*o;for(let o=0;o<i.count;o++){const n=o*j;p===!0&&(s.fromBufferAttribute(i,o),e[t+n+0]=s.x,e[t+n+1]=s.y,e[t+n+2]=s.z,e[t+n+3]=0),f===!0&&(s.fromBufferAttribute(r,o),e[t+n+4]=s.x,e[t+n+5]=s.y,e[t+n+6]=s.z,e[t+n+7]=0),h===!0&&(s.fromBufferAttribute(a,o),e[t+n+8]=s.x,e[t+n+9]=s.y,e[t+n+10]=s.z,e[t+n+11]=a.itemSize===4?s.w:1)}}l={count:d,texture:u,size:new o(n,c)},i.set(r,l),r.addEventListener("dispose",m)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let t=0;for(let e=0;e<u.length;e++)t+=u[e];const n=r.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,"morphTargetBaseInfluence",n),c.getUniforms().setValue(e,"morphTargetInfluences",u)}c.getUniforms().setValue(e,"morphTargetsTexture",l.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",l.size)}return{update:a}}function g8(e,t,n,s){let o=new WeakMap;function a(a){const r=s.render.frame,l=a.geometry,c=t.get(a,l);if(o.get(c)!==r&&(t.update(c),o.set(c,r)),a.isInstancedMesh&&(a.hasEventListener("dispose",i)===!1&&a.addEventListener("dispose",i),o.get(a)!==r&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),o.set(a,r))),a.isSkinnedMesh){const e=a.skeleton;o.get(e)!==r&&(e.update(),o.set(e,r))}return c}function r(){o=new WeakMap}function i(e){const t=e.target;t.removeEventListener("dispose",i),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:r}}Lr=new B,Hr=new vr(1,1),Ir=new Lc,Br=new Wl,$r=new tr,Ur=[],Yr=[],jc=new Float32Array(16),sc=new Float32Array(9),ic=new Float32Array(4);function Mn(e,t,n){const o=e[0];if(o<=0||o>0)return e;const i=t*n;let s=Ur[i];if(s===void 0&&(s=new Float32Array(i),Ur[i]=s),t!==0){o.toArray(s,0);for(let o=1,i=0;o!==t;++o)i+=n,e[o].toArray(s,i)}return s}function x(e,t){if(e.length!==t.length)return!1;for(let n=0,s=e.length;n<s;n++)if(e[n]!==t[n])return!1;return!0}function O(e,t){for(let n=0,s=t.length;n<s;n++)e[n]=t[n]}function Mo(e,t){let n=Yr[t];n===void 0&&(n=new Int32Array(t),Yr[t]=n);for(let s=0;s!==t;++s)n[s]=e.allocateTextureUnit();return n}function c8(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function o8(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(x(n,t))return;e.uniform2fv(this.addr,t),O(n,t)}}function s8(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(x(n,t))return;e.uniform3fv(this.addr,t),O(n,t)}}function n8(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(x(n,t))return;e.uniform4fv(this.addr,t),O(n,t)}}function Gm(e,t){const n=this.cache,s=t.elements;if(s===void 0){if(x(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),O(n,t)}else{if(x(n,s))return;ic.set(s),e.uniformMatrix2fv(this.addr,!1,ic),O(n,s)}}function qm(e,t){const n=this.cache,s=t.elements;if(s===void 0){if(x(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),O(n,t)}else{if(x(n,s))return;sc.set(s),e.uniformMatrix3fv(this.addr,!1,sc),O(n,s)}}function Km(e,t){const n=this.cache,s=t.elements;if(s===void 0){if(x(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),O(n,t)}else{if(x(n,s))return;jc.set(s),e.uniformMatrix4fv(this.addr,!1,jc),O(n,s)}}function Wm(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function $m(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(x(n,t))return;e.uniform2iv(this.addr,t),O(n,t)}}function Vm(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(x(n,t))return;e.uniform3iv(this.addr,t),O(n,t)}}function Bm(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(x(n,t))return;e.uniform4iv(this.addr,t),O(n,t)}}function Im(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function Hm(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(x(n,t))return;e.uniform2uiv(this.addr,t),O(n,t)}}function Dm(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(x(n,t))return;e.uniform3uiv(this.addr,t),O(n,t)}}function Fm(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(x(n,t))return;e.uniform4uiv(this.addr,t),O(n,t)}}function km(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let o;this.type===e.SAMPLER_2D_SHADOW?(Hr.compareFunction=Er,o=Hr):o=Lr,n.setTexture2D(t||o,s)}function Em(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture3D(t||Br,s)}function Cm(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTextureCube(t||$r,s)}function xm(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture2DArray(t||Ir,s)}function wm(e){switch(e){case 5126:return c8;case 35664:return o8;case 35665:return s8;case 35666:return n8;case 35674:return Gm;case 35675:return qm;case 35676:return Km;case 5124:case 35670:return Wm;case 35667:case 35671:return $m;case 35668:case 35672:return Vm;case 35669:case 35673:return Bm;case 5125:return Im;case 36294:return Hm;case 36295:return Dm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return xm}}function ym(e,t){e.uniform1fv(this.addr,t)}function jm(e,t){const n=Mn(t,this.size,2);e.uniform2fv(this.addr,n)}function bm(e,t){const n=Mn(t,this.size,3);e.uniform3fv(this.addr,n)}function tm(e,t){const n=Mn(t,this.size,4);e.uniform4fv(this.addr,n)}function nm(e,t){const n=Mn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function sm(e,t){const n=Mn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function om(e,t){const n=Mn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function im(e,t){e.uniform1iv(this.addr,t)}function am(e,t){e.uniform2iv(this.addr,t)}function rm(e,t){e.uniform3iv(this.addr,t)}function cm(e,t){e.uniform4iv(this.addr,t)}function lm(e,t){e.uniform1uiv(this.addr,t)}function dm(e,t){e.uniform2uiv(this.addr,t)}function um(e,t){e.uniform3uiv(this.addr,t)}function hm(e,t){e.uniform4uiv(this.addr,t)}function mm(e,t,n){const o=this.cache,i=t.length,s=Mo(n,i);x(o,s)||(e.uniform1iv(this.addr,s),O(o,s));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Lr,s[e])}function fm(e,t,n){const o=this.cache,i=t.length,s=Mo(n,i);x(o,s)||(e.uniform1iv(this.addr,s),O(o,s));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Br,s[e])}function pm(e,t,n){const o=this.cache,i=t.length,s=Mo(n,i);x(o,s)||(e.uniform1iv(this.addr,s),O(o,s));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||$r,s[e])}function gm(e,t,n){const o=this.cache,i=t.length,s=Mo(n,i);x(o,s)||(e.uniform1iv(this.addr,s),O(o,s));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Ir,s[e])}function vm(e){switch(e){case 5126:return ym;case 35664:return jm;case 35665:return bm;case 35666:return tm;case 35674:return nm;case 35675:return sm;case 35676:return om;case 5124:case 35670:return im;case 35667:case 35671:return am;case 35668:case 35672:return rm;case 35669:case 35673:return cm;case 5125:return lm;case 36294:return dm;case 36295:return um;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return gm}}U4=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=wm(t.type)}},Jh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vm(t.type)}},Zh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const i=s[o];i.setValue(e,t[i.id],n)}}},Eo=/(\w+)(\])?(\[|\.)?/g;function Qh(e,t){e.seq.push(t),e.map[t.id]=t}function Om(e,t,n){const s=e.name,o=s.length;for(Eo.lastIndex=0;!0;){const r=Eo.exec(s),l=Eo.lastIndex;let i=r[1];const d=r[2]==="]",c=r[3];if(d&&(i=i|0),c===void 0||c==="["&&l+2===o){Qh(n,c===void 0?new U4(i,e,t):new Jh(i,e,t));break}const u=n.map;let a=u[i];a===void 0&&(a=new Zh(i),Qh(n,a)),n=a}}Fs=class{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),i=e.getUniformLocation(t,o.name);Om(o,i,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const i=t[o],a=n[i.id];a.needsUpdate!==!1&&i.setValue(e,a.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const o=e[s];o.id in t&&n.push(o)}return n}};function Gh(e,t,n){const s=e.createShader(t);return e.shaderSource(s,n),e.compileShader(s),s}Yh=37297,qh=0;function Am(e,t){const n=e.split(`
`),s=[],o=Math.max(t-6,0),i=Math.min(t+6,n.length);for(let e=o;e<i;e++){const a=e+1;s.push(`${a===t?">":" "} ${a}: ${n[e]}`)}return s.join(`
`)}Fc=new c;function Mm(e){u._getMatrix(Fc,u.workingColorSpace,e);const t=`mat3( ${Fc.elements.map(e=>e.toFixed(4))} )`;switch(u.getTransfer(e)){case Wn:return[t,"LinearTransferOETF"];case p:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Kh(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const i=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+Am(e.getShaderSource(t),i)}return s}function Tm(e,t){const n=Mm(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function zm(e,t){let n;switch(t){case Id:n="Linear";break;case Pd:n="Reinhard";break;case Rd:n="Cineon";break;case $a:n="ACESFilmic";break;case Nd:n="AgX";break;case Dd:n="Neutral";break;case Ld:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}zs=new e;function Nm(){u.getLuminanceCoefficients(zs);const e=zs.x.toFixed(4),t=zs.y.toFixed(4),n=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lm(e){const t=[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""];return t.filter(Bs).join(`
`)}function Rm(e){const t=[];for(const n in e){const s=e[n];if(s===!1)continue;t.push("#define "+n+" "+s)}return t.join(`
`)}function Pm(e,t){const n={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=e.getActiveAttrib(t,a),r=o.name;let i=1;o.type===e.FLOAT_MAT2&&(i=2),o.type===e.FLOAT_MAT3&&(i=3),o.type===e.FLOAT_MAT4&&(i=4),n[r]={type:o.type,location:e.getAttribLocation(t,r),locationSize:i}}return n}function Bs(e){return e!==""}function $h(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}Bh=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(e){return e.replace(Bh,Um)}Hh=new Map;function Um(e,t){let n=r[t];if(n===void 0){const e=Hh.get(t);if(e!==void 0)n=r[e],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw new Error("Can not resolve #include <"+t+">")}return zc(n)}Ph=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(e){return e.replace(Ph,Ym)}function Ym(e,t,n,s){let o="";for(let e=parseInt(t);e<parseInt(n);e++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return o}function Lh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Xm(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===cc?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===he&&(t="SHADOWMAP_TYPE_VSM"),t}function Qm(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Ut:case Kt:t="ENVMAP_TYPE_CUBE";break;case Qn:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zm(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Kt:t="ENVMAP_MODE_REFRACTION";break}return t}function Jm(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ya:t="ENVMAP_BLENDING_MULTIPLY";break;case Vd:t="ENVMAP_BLENDING_MIX";break;case Bd:t="ENVMAP_BLENDING_ADD";break}return t}function e8(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t,o=1/(3*Math.max(Math.pow(2,n),7*16));return{texelWidth:o,texelHeight:s,maxMip:n}}function t8(e,t,n,s){const o=e.getContext(),k=n.defines;let a=n.vertexShader,c=n.fragmentShader;const y=Xm(n),w=Qm(n),j=Zm(n),E=Jm(n),u=e8(n),C=Lm(n),f=Rm(k),i=o.createProgram();let d,l,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Bs).join(`
`),d.length>0&&(d+=`
`),l=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Bs).join(`
`),l.length>0&&(l+=`
`)):(d=[Lh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+j:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+y:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),l=[Lh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+w:"",n.envMap?"#define "+j:"",n.envMap?"#define "+E:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+y:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Re?"#define TONE_MAPPING":"",n.toneMapping!==Re?r.tonemapping_pars_fragment:"",n.toneMapping!==Re?zm("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",r.colorspace_pars_fragment,Tm("linearToOutputTexel",n.outputColorSpace),Nm(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bs).join(`
`)),a=zc(a),a=$h(a,n),a=Vh(a,n),c=zc(c),c=$h(c,n),c=Vh(c,n),a=Rh(a),c=Rh(c),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[C,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,l=["#define varying in",n.glslVersion===Tr?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Tr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const x=b+d+a,O=b+l+c,h=Gh(o,o.VERTEX_SHADER,x),m=Gh(o,o.FRAGMENT_SHADER,O);o.attachShader(i,h),o.attachShader(i,m),n.index0AttributeName!==void 0?o.bindAttribLocation(i,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(i,0,"position"),o.linkProgram(i);function _(t){if(e.debug.checkShaderErrors){const n=o.getProgramInfoLog(i).trim(),s=o.getShaderInfoLog(h).trim(),a=o.getShaderInfoLog(m).trim();let r=!0,c=!0;if(o.getProgramParameter(i,o.LINK_STATUS)===!1)if(r=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(o,i,h,m);else{const e=Kh(o,h,"vertex"),s=Kh(o,m,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(i,o.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+s)}else n!==""?console.warn("THREE.WebGLProgram: Program Info Log:",n):(s===""||a==="")&&(c=!1);c&&(t.diagnostics={runnable:r,programLog:n,vertexShader:{log:s,prefix:d},fragmentShader:{log:a,prefix:l}})}o.deleteShader(h),o.deleteShader(m),g=new Fs(o,i),p=Pm(o,i)}let g;this.getUniforms=function(){return g===void 0&&_(this),g};let p;this.getAttributes=function(){return p===void 0&&_(this),p};let v=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=o.getProgramParameter(i,Yh)),v},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(i),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qh++,this.cacheKey=t,this.usedTimes=1,this.program=i,this.vertexShader=h,this.fragmentShader=m,this}Nh=0,Dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const o=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(o),s=this._getShaderStage(i),t=this._getShaderCacheForMaterial(e);return t.has(n)===!1&&(t.add(n),n.usedTimes++),t.has(s)===!1&&(t.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let t=n.get(e);return t===void 0&&(t=new Set,n.set(e,t)),t}_getShaderStage(e){const n=this.shaderCache;let t=n.get(e);return t===void 0&&(t=new zh(e),n.set(e,t)),t}},zh=class{constructor(e){this.id=Nh++,this.code=e,this.usedTimes=0}};function i8(e,t,n,s,o,i,a){const r=new Js,d=new Dh,h=new Set,l=[],v=o.logarithmicDepthBuffer,f=o.vertexTextures;let m=o.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function c(e){return h.add(e),e===0?"uv":`uv${e}`}function b(i,r,l,b,j){const H=b.fog,y=j.geometry,Oe=i.isMeshStandardMaterial?b.environment:null,_=(i.isMeshStandardMaterial?n:t).get(i.envMap||Oe),be=!!_&&_.mapping===Qn?_.image.height:null,D=g[i.type];i.precision!==null&&(m=o.getMaxPrecision(i.precision),m!==i.precision&&console.warn("THREE.WebGLProgram.getParameters:",i.precision,"not supported, using",m,"instead."));const te=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,pe=te!==void 0?te.length:0;let x=0;y.morphAttributes.position!==void 0&&(x=1),y.morphAttributes.normal!==void 0&&(x=2),y.morphAttributes.color!==void 0&&(x=3);let S,A,J,Q;if(D){const e=de[D];S=e.vertexShader,A=e.fragmentShader}else S=i.vertexShader,A=i.fragmentShader,d.update(i),J=d.getVertexShaderID(i),Q=d.getFragmentShaderID(i);const w=e.getRenderTarget(),_e=e.state.buffers.depth.getReversed(),L=j.isInstancedMesh===!0,R=j.isBatchedMesh===!0,E=!!i.map,we=!!i.matcap,q=!!_,U=!!i.aoMap,ae=!!i.lightMap,W=!!i.bumpMap,O=!!i.normalMap,K=!!i.displacementMap,B=!!i.emissiveMap,V=!!i.metalnessMap,G=!!i.roughnessMap,N=i.anisotropy>0,k=i.clearcoat>0,ge=i.dispersion>0,F=i.iridescence>0,M=i.sheen>0,T=i.transmission>0,ne=N&&!!i.anisotropyMap,oe=k&&!!i.clearcoatMap,ie=k&&!!i.clearcoatNormalMap,$=k&&!!i.clearcoatRoughnessMap,re=F&&!!i.iridescenceMap,ce=F&&!!i.iridescenceThicknessMap,le=M&&!!i.sheenColorMap,ue=M&&!!i.sheenRoughnessMap,he=!!i.specularMap,me=!!i.specularColorMap,fe=!!i.specularIntensityMap,ee=T&&!!i.transmissionMap,Z=T&&!!i.thicknessMap,ve=!!i.gradientMap,P=!!i.alphaMap,je=i.alphaTest>0,ye=!!i.alphaHash,X=!!i.extensions;let Y=Re;i.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Y=e.toneMapping);const C={shaderID:D,shaderType:i.type,shaderName:i.name,vertexShader:S,fragmentShader:A,defines:i.defines,customVertexShaderID:J,customFragmentShaderID:Q,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:m,batching:R,batchingColor:R&&j._colorsTexture!==null,instancing:L,instancingColor:L&&j.instanceColor!==null,instancingMorph:L&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:w===null?e.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:z,alphaToCoverage:!!i.alphaToCoverage,map:E,matcap:we,envMap:q,envMapMode:q&&_.mapping,envMapCubeUVHeight:be,aoMap:U,lightMap:ae,bumpMap:W,normalMap:O,displacementMap:f&&K,emissiveMap:B,normalMapObjectSpace:O&&i.normalMapType===Ad,normalMapTangentSpace:O&&i.normalMapType===fr,metalnessMap:V,roughnessMap:G,anisotropy:N,anisotropyMap:ne,clearcoat:k,clearcoatMap:oe,clearcoatNormalMap:ie,clearcoatRoughnessMap:$,dispersion:ge,iridescence:F,iridescenceMap:re,iridescenceThicknessMap:ce,sheen:M,sheenColorMap:le,sheenRoughnessMap:ue,specularMap:he,specularColorMap:me,specularIntensityMap:fe,transmission:T,transmissionMap:ee,thicknessMap:Z,gradientMap:ve,opaque:i.transparent===!1&&i.blending===Zt&&i.alphaToCoverage===!1,alphaMap:P,alphaTest:je,alphaHash:ye,combine:i.combine,mapUv:E&&c(i.map.channel),aoMapUv:U&&c(i.aoMap.channel),lightMapUv:ae&&c(i.lightMap.channel),bumpMapUv:W&&c(i.bumpMap.channel),normalMapUv:O&&c(i.normalMap.channel),displacementMapUv:K&&c(i.displacementMap.channel),emissiveMapUv:B&&c(i.emissiveMap.channel),metalnessMapUv:V&&c(i.metalnessMap.channel),roughnessMapUv:G&&c(i.roughnessMap.channel),anisotropyMapUv:ne&&c(i.anisotropyMap.channel),clearcoatMapUv:oe&&c(i.clearcoatMap.channel),clearcoatNormalMapUv:ie&&c(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&c(i.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&c(i.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&c(i.iridescenceThicknessMap.channel),sheenColorMapUv:le&&c(i.sheenColorMap.channel),sheenRoughnessMapUv:ue&&c(i.sheenRoughnessMap.channel),specularMapUv:he&&c(i.specularMap.channel),specularColorMapUv:me&&c(i.specularColorMap.channel),specularIntensityMapUv:fe&&c(i.specularIntensityMap.channel),transmissionMapUv:ee&&c(i.transmissionMap.channel),thicknessMapUv:Z&&c(i.thicknessMap.channel),alphaMapUv:P&&c(i.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(O||N),vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!y.attributes.uv&&(E||P),fog:!!H,useFog:i.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:i.flatShading===!0,sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:_e,skinning:j.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:x,numDirLights:r.directional.length,numPointLights:r.point.length,numSpotLights:r.spot.length,numSpotLightMaps:r.spotLightMap.length,numRectAreaLights:r.rectArea.length,numHemiLights:r.hemi.length,numDirLightShadows:r.directionalShadowMap.length,numPointLightShadows:r.pointShadowMap.length,numSpotLightShadows:r.spotShadowMap.length,numSpotLightShadowsWithMaps:r.numSpotLightShadowsWithMaps,numLightProbes:r.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Y,decodeVideoTexture:E&&i.map.isVideoTexture===!0&&u.getTransfer(i.map.colorSpace)===p,decodeVideoTextureEmissive:B&&i.emissiveMap.isVideoTexture===!0&&u.getTransfer(i.emissiveMap.colorSpace)===p,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===se,flipSided:i.side===I,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:X&&i.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(X&&i.extensions.multiDraw===!0||R)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:i.customProgramCacheKey()};return C.vertexUv1s=h.has(1),C.vertexUv2s=h.has(2),C.vertexUv3s=h.has(3),h.clear(),C}function j(t){const n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(const e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){r.disableAll(),t.supportsVertexTextures&&r.enable(0),t.instancing&&r.enable(1),t.instancingColor&&r.enable(2),t.instancingMorph&&r.enable(3),t.matcap&&r.enable(4),t.envMap&&r.enable(5),t.normalMapObjectSpace&&r.enable(6),t.normalMapTangentSpace&&r.enable(7),t.clearcoat&&r.enable(8),t.iridescence&&r.enable(9),t.alphaTest&&r.enable(10),t.vertexColors&&r.enable(11),t.vertexAlphas&&r.enable(12),t.vertexUv1s&&r.enable(13),t.vertexUv2s&&r.enable(14),t.vertexUv3s&&r.enable(15),t.vertexTangents&&r.enable(16),t.anisotropy&&r.enable(17),t.alphaHash&&r.enable(18),t.batching&&r.enable(19),t.dispersion&&r.enable(20),t.batchingColor&&r.enable(21),e.push(r.mask),r.disableAll(),t.fog&&r.enable(0),t.useFog&&r.enable(1),t.flatShading&&r.enable(2),t.logarithmicDepthBuffer&&r.enable(3),t.reverseDepthBuffer&&r.enable(4),t.skinning&&r.enable(5),t.morphTargets&&r.enable(6),t.morphNormals&&r.enable(7),t.morphColors&&r.enable(8),t.premultipliedAlpha&&r.enable(9),t.shadowMapEnabled&&r.enable(10),t.doubleSided&&r.enable(11),t.flipSided&&r.enable(12),t.useDepthPacking&&r.enable(13),t.dithering&&r.enable(14),t.transmission&&r.enable(15),t.sheen&&r.enable(16),t.opaque&&r.enable(17),t.pointsUvs&&r.enable(18),t.decodeVideoTexture&&r.enable(19),t.decodeVideoTextureEmissive&&r.enable(20),t.alphaToCoverage&&r.enable(21),e.push(r.mask)}function w(e){const n=g[e.type];let t;if(n){const e=de[n];t=Kd.clone(e.uniforms)}else t=e.uniforms;return t}function O(t,n){let s;for(let e=0,o=l.length;e<o;e++){const t=l[e];if(t.cacheKey===n){s=t,++s.usedTimes;break}}return s===void 0&&(s=new t8(e,n,t,i),l.push(s)),s}function x(e){if(--e.usedTimes===0){const t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function C(e){d.remove(e)}function E(){d.dispose()}return{getParameters:b,getProgramCacheKey:j,getUniforms:w,acquireProgram:O,releaseProgram:x,releaseShaderCache:C,programs:l,dispose:E}}function a8(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function s(t){e.delete(t)}function o(t,n,s){e.get(t)[n]=s}function i(){e=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:i}}function r8(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Th(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ch(){const o=[];let s=0;const e=[],t=[],n=[];function a(){s=0,e.length=0,t.length=0,n.length=0}function i(e,t,n,i,a,r){let c=o[s];return c===void 0?(c={id:e.id,object:e,geometry:t,material:n,groupOrder:i,renderOrder:e.renderOrder,z:a,group:r},o[s]=c):(c.id=e.id,c.object=e,c.geometry=t,c.material=n,c.groupOrder=i,c.renderOrder=e.renderOrder,c.z=a,c.group=r),s++,c}function r(s,o,a,r,c,l){const d=i(s,o,a,r,c,l);a.transmission>0?t.push(d):a.transparent===!0?n.push(d):e.push(d)}function c(s,o,a,r,c,l){const d=i(s,o,a,r,c,l);a.transmission>0?t.unshift(d):a.transparent===!0?n.unshift(d):e.unshift(d)}function l(s,o){e.length>1&&e.sort(s||r8),t.length>1&&t.sort(o||Th),n.length>1&&n.sort(o||Th)}function d(){for(let t=s,n=o.length;t<n;t++){const e=o[t];if(e.id===null)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null}}return{opaque:e,transmissive:t,transparent:n,init:a,push:r,unshift:c,finish:d,sort:l}}function d8(){let e=new WeakMap;function t(t,n){const o=e.get(t);let s;return o===void 0?(s=new Ch,e.set(t,[s])):n>=o.length?(s=new Ch,o.push(s)):s=o[n],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function u8(){const t={};return{get:function(n){if(t[n.id]!==void 0)return t[n.id];let o;switch(n.type){case"DirectionalLight":o={direction:new e,color:new s};break;case"SpotLight":o={position:new e,direction:new e,color:new s,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":o={position:new e,color:new s,distance:0,decay:0};break;case"HemisphereLight":o={direction:new e,skyColor:new s,groundColor:new s};break;case"RectAreaLight":o={color:new s,position:new e,halfWidth:new e,halfHeight:new e};break}return t[n.id]=o,o}}}function h8(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}bh=0;function f8(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function p8(n){const o=new u8,c=h8(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let t=0;t<9;t++)s.probe.push(new e);const a=new e,l=new i,r=new i;function d(e){let j=0,y=0,b=0;for(let e=0;e<9;e++)s.probe[e].set(0,0,0);let l=0,a=0,r=0,d=0,p=0,u=0,h=0,m=0,f=0,v=0,g=0;e.sort(f8);for(let _=0,O=e.length;_<O;_++){const t=e[_],i=t.color,n=t.intensity,x=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)j+=i.r*n,y+=i.g*n,b+=i.b*n;else if(t.isLightProbe){for(let e=0;e<9;e++)s.probe[e].addScaledVector(t.sh.coefficients[e],n);g++}else if(t.isDirectionalLight){const e=o.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity),t.castShadow){const n=t.shadow,e=c.get(t);e.shadowIntensity=n.intensity,e.shadowBias=n.bias,e.shadowNormalBias=n.normalBias,e.shadowRadius=n.radius,e.shadowMapSize=n.mapSize,s.directionalShadow[l]=e,s.directionalShadowMap[l]=w,s.directionalShadowMatrix[l]=t.shadow.matrix,u++}s.directional[l]=e,l++}else if(t.isSpotLight){const e=o.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(i).multiplyScalar(n),e.distance=x,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,s.spot[r]=e;const a=t.shadow;if(t.map&&(s.spotLightMap[f]=t.map,f++,a.updateMatrices(t),t.castShadow&&v++),s.spotLightMatrix[r]=a.matrix,t.castShadow){const e=c.get(t);e.shadowIntensity=a.intensity,e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,s.spotShadow[r]=e,s.spotShadowMap[r]=w,m++}r++}else if(t.isRectAreaLight){const e=o.get(t);e.color.copy(i).multiplyScalar(n),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),s.rectArea[d]=e,d++}else if(t.isPointLight){const e=o.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity),e.distance=t.distance,e.decay=t.decay,t.castShadow){const n=t.shadow,e=c.get(t);e.shadowIntensity=n.intensity,e.shadowBias=n.bias,e.shadowNormalBias=n.normalBias,e.shadowRadius=n.radius,e.shadowMapSize=n.mapSize,e.shadowCameraNear=n.camera.near,e.shadowCameraFar=n.camera.far,s.pointShadow[a]=e,s.pointShadowMap[a]=w,s.pointShadowMatrix[a]=t.shadow.matrix,h++}s.point[a]=e,a++}else if(t.isHemisphereLight){const e=o.get(t);e.skyColor.copy(t.color).multiplyScalar(n),e.groundColor.copy(t.groundColor).multiplyScalar(n),s.hemi[p]=e,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=t.LTC_FLOAT_1,s.rectAreaLTC2=t.LTC_FLOAT_2):(s.rectAreaLTC1=t.LTC_HALF_1,s.rectAreaLTC2=t.LTC_HALF_2)),s.ambient[0]=j,s.ambient[1]=y,s.ambient[2]=b;const i=s.hash;(i.directionalLength!==l||i.pointLength!==a||i.spotLength!==r||i.rectAreaLength!==d||i.hemiLength!==p||i.numDirectionalShadows!==u||i.numPointShadows!==h||i.numSpotShadows!==m||i.numSpotMaps!==f||i.numLightProbes!==g)&&(s.directional.length=l,s.spot.length=r,s.rectArea.length=d,s.point.length=a,s.hemi.length=p,s.directionalShadow.length=u,s.directionalShadowMap.length=u,s.pointShadow.length=h,s.pointShadowMap.length=h,s.spotShadow.length=m,s.spotShadowMap.length=m,s.directionalShadowMatrix.length=u,s.pointShadowMatrix.length=h,s.spotLightMatrix.length=m+f-v,s.spotLightMap.length=f,s.numSpotLightShadowsWithMaps=v,s.numLightProbes=g,i.directionalLength=l,i.pointLength=a,i.spotLength=r,i.rectAreaLength=d,i.hemiLength=p,i.numDirectionalShadows=u,i.numPointShadows=h,i.numSpotShadows=m,i.numSpotMaps=f,i.numLightProbes=g,s.version=bh++)}function u(e,t){let o=0,i=0,c=0,d=0,u=0;const n=t.matrixWorldInverse;for(let h=0,m=e.length;h<m;h++){const t=e[h];if(t.isDirectionalLight){const e=s.directional[o];e.direction.setFromMatrixPosition(t.matrixWorld),a.setFromMatrixPosition(t.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(n),o++}else if(t.isSpotLight){const e=s.spot[c];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),e.direction.setFromMatrixPosition(t.matrixWorld),a.setFromMatrixPosition(t.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(n),c++}else if(t.isRectAreaLight){const e=s.rectArea[d];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),r.identity(),l.copy(t.matrixWorld),l.premultiply(n),r.extractRotation(l),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),e.halfWidth.applyMatrix4(r),e.halfHeight.applyMatrix4(r),d++}else if(t.isPointLight){const e=s.point[i];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),i++}else if(t.isHemisphereLight){const e=s.hemi[u];e.direction.setFromMatrixPosition(t.matrixWorld),e.direction.transformDirection(n),u++}}}return{setup:d,setupView:u,state:s}}function vh(e){const n=new p8(e),t=[],s=[];function i(e){o.camera=e,t.length=0,s.length=0}function a(e){t.push(e)}function r(e){s.push(e)}function c(){n.setup(t)}function l(e){n.setupView(t,e)}const o={lightsArray:t,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:i,state:o,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:r}}function v8(e){let t=new WeakMap;function n(n,s=0){const i=t.get(n);let o;return i===void 0?(o=new vh(e),t.set(n,[o])):s>=i.length?(o=new vh(e),i.push(o)):o=i[s],o}function s(){t=new WeakMap}return{get:n,dispose:s}}gh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ph=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function y8(e,t,n){let v=new Ro;const s=new o,i=new o,b=new m,y=new z1({depthPacking:Sd}),O=new D1,l={},c=n.maxTextureSize,w={[Oe]:I,[I]:Oe,[se]:se},a=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new o},radius:{value:4}},vertexShader:gh,fragmentShader:ph}),r=a.clone();r.defines.HORIZONTAL_PASS=1;const j=new ne;j.setAttribute("position",new T(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const u=new P(j,a),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let h=this.type;this.render=function(t,n,o){if(d.enabled===!1)return;if(d.autoUpdate===!1&&d.needsUpdate===!1)return;if(t.length===0)return;const r=e.getRenderTarget(),l=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),a=e.state;a.setBlending(Ke),a.buffers.color.setClear(1,1,1,1),a.buffers.depth.setTest(!0),a.setScissorTest(!1);const m=h!==he&&this.type===he,f=h===he&&this.type!==he;for(let u=0,h=t.length;u<h;u++){const l=t[u],r=l.shadow;if(r===void 0){console.warn("THREE.WebGLShadowMap:",l,"has no shadow.");continue}if(r.autoUpdate===!1&&r.needsUpdate===!1)continue;s.copy(r.mapSize);const d=r.getFrameExtents();if(s.multiply(d),i.copy(r.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(i.x=Math.floor(c/d.x),s.x=i.x*d.x,r.mapSize.x=i.x),s.y>c&&(i.y=Math.floor(c/d.y),s.y=i.y*d.y,r.mapSize.y=i.y)),r.map===null||m===!0||f===!0){const e=this.type!==he?{minFilter:M,magFilter:M}:{};r.map!==null&&r.map.dispose(),r.map=new ht(s.x,s.y,e),r.map.texture.name=l.name+".shadowMap",r.camera.updateProjectionMatrix()}e.setRenderTarget(r.map),e.clear();const p=r.getViewportCount();for(let e=0;e<p;e++){const t=r.getViewport(e);b.set(i.x*t.x,i.y*t.y,i.x*t.z,i.y*t.w),a.viewport(b),r.updateMatrices(l,e),v=r.getFrustum(),g(n,o,r.camera,l,this.type)}r.isPointLightShadow!==!0&&this.type===he&&_(r,o),r.needsUpdate=!1}h=this.type,d.needsUpdate=!1,e.setRenderTarget(r,l,u)};function _(n,o){const i=t.update(u);a.defines.VSM_SAMPLES!==n.blurSamples&&(a.defines.VSM_SAMPLES=n.blurSamples,r.defines.VSM_SAMPLES=n.blurSamples,a.needsUpdate=!0,r.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new ht(s.x,s.y)),a.uniforms.shadow_pass.value=n.map.texture,a.uniforms.resolution.value=n.mapSize,a.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(o,null,i,a,u,null),r.uniforms.shadow_pass.value=n.mapPass.texture,r.uniforms.resolution.value=n.mapSize,r.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(o,null,i,r,u,null)}function f(t,n,s,o){let i=null;const a=s.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(a!==void 0)i=a;else if(i=s.isPointLight===!0?O:y,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){const s=i.uuid,o=n.uuid;let e=l[s];e===void 0&&(e={},l[s]=e);let t=e[o];t===void 0&&(t=i.clone(),e[o]=t,n.addEventListener("dispose",p)),i=t}if(i.visible=n.visible,i.wireframe=n.wireframe,o===he?i.side=n.shadowSide!==null?n.shadowSide:n.side:i.side=n.shadowSide!==null?n.shadowSide:w[n.side],i.alphaMap=n.alphaMap,i.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,i.map=n.map,i.clipShadows=n.clipShadows,i.clippingPlanes=n.clippingPlanes,i.clipIntersection=n.clipIntersection,i.displacementMap=n.displacementMap,i.displacementScale=n.displacementScale,i.displacementBias=n.displacementBias,i.wireframeLinewidth=n.wireframeLinewidth,i.linewidth=n.linewidth,s.isPointLight===!0&&i.isMeshDistanceMaterial===!0){const t=e.properties.get(i);t.light=s}return i}function g(n,s,o,i,a){if(n.visible===!1)return;const c=n.layers.test(s.layers);if(c&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&a===he)&&(!n.frustumCulled||v.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,n.matrixWorld);const r=t.update(n),c=n.material;if(Array.isArray(c)){{const t=r.groups;for(let d=0,h=t.length;d<h;d++){const l=t[d],u=c[l.materialIndex];if(u&&u.visible){const t=f(n,u,i,a);n.onBeforeShadow(e,n,s,o,r,t,l),e.renderBufferDirect(o,null,r,t,n,l),n.onAfterShadow(e,n,s,o,r,t,l)}}}}else if(c.visible){const t=f(n,c,i,a);n.onBeforeShadow(e,n,s,o,r,t,null),e.renderBufferDirect(o,null,r,t,n,null),n.onAfterShadow(e,n,s,o,r,t,null)}}const r=n.children;for(let e=0,t=r.length;e<t;e++)g(r[e],s,o,i,a)}function p(e){const t=e.target;t.removeEventListener("dispose",p);for(const s in l){const t=l[s],n=e.target.uuid;if(n in t){const e=t[n];e.dispose(),delete t[n]}}}}fh={[yi]:_i,[wi]:Ei,[xi]:ki,[Ft]:Ci,[_i]:yi,[Ei]:wi,[ki]:xi,[Ci]:Ft};function w8(e,t){function te(){let t=!1;const n=new m;let s=null;const o=new m(0,0,0,0);return{setMask:function(n){s!==n&&!t&&(e.colorMask(n,n,n,n),s=n)},setLocked:function(e){t=e},setClear:function(t,s,i,a,r){r===!0&&(t*=a,s*=a,i*=a),n.set(t,s,i,a),o.equals(n)===!1&&(e.clearColor(t,s,i,a),o.copy(n))},reset:function(){t=!1,s=null,o.set(-1,0,0,0)}}}function ie(){let a=!1,s=!1,r=null,c=null,i=null;return{setReversed:function(e){if(s!==e){const n=t.get("EXT_clip_control");e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),s=e;const o=i;i=null,this.setClear(o)}},getReversed:function(){return s},setTest:function(t){t?n(e.DEPTH_TEST):o(e.DEPTH_TEST)},setMask:function(t){r!==t&&!a&&(e.depthMask(t),r=t)},setFunc:function(t){if(s&&(t=fh[t]),c!==t){switch(t){case yi:e.depthFunc(e.NEVER);break;case _i:e.depthFunc(e.ALWAYS);break;case wi:e.depthFunc(e.LESS);break;case Ft:e.depthFunc(e.LEQUAL);break;case xi:e.depthFunc(e.EQUAL);break;case Ci:e.depthFunc(e.GEQUAL);break;case Ei:e.depthFunc(e.GREATER);break;case ki:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}c=t}},setLocked:function(e){a=e},setClear:function(t){i!==t&&(s&&(t=1-t),e.clearDepth(t),i=t)},reset:function(){a=!1,r=null,c=null,i=null,s=!1}}}function ne(){let t=!1,s=null,i=null,a=null,r=null,c=null,l=null,d=null,u=null;return{setTest:function(s){t||(s?n(e.STENCIL_TEST):o(e.STENCIL_TEST))},setMask:function(n){s!==n&&!t&&(e.stencilMask(n),s=n)},setFunc:function(t,n,s){(i!==t||a!==n||r!==s)&&(e.stencilFunc(t,n,s),i=t,a=n,r=s)},setOp:function(t,n,s){(c!==t||l!==n||d!==s)&&(e.stencilOp(t,n,s),c=t,l=n,d=s)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,s=null,i=null,a=null,r=null,c=null,l=null,d=null,u=null}}}const j=new te,i=new ie,r=new ne,W=new WeakMap,R=new WeakMap;let u={},h={},z=new WeakMap,Y=[],T=null,c=!1,b=null,f=null,y=null,_=null,d=null,O=null,x=null,C=new s(0,0,0),p=0,k=!1,P=null,L=null,N=null,V=null,H=null;const U=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,M=0;const S=e.getParameter(e.VERSION);S.indexOf("WebGL")!==-1?(M=parseFloat(/^WebGL (\d)/.exec(S)[1]),D=M>=1):S.indexOf("OpenGL ES")!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(S)[1]),D=M>=2);let a=null,A={};const G=e.getParameter(e.SCISSOR_BOX),J=e.getParameter(e.VIEWPORT),B=(new m).fromArray(G),$=(new m).fromArray(J);function w(t,n,s,o){const i=new Uint8Array(4),a=e.createTexture();e.bindTexture(t,a),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let a=0;a<s;a++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,o,0,e.RGBA,e.UNSIGNED_BYTE,i):e.texImage2D(n+a,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,i);return a}const l={};l[e.TEXTURE_2D]=w(e.TEXTURE_2D,e.TEXTURE_2D,1),l[e.TEXTURE_CUBE_MAP]=w(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),l[e.TEXTURE_2D_ARRAY]=w(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),l[e.TEXTURE_3D]=w(e.TEXTURE_3D,e.TEXTURE_3D,1,1),j.setClear(0,0,0,1),i.setClear(1),r.setClear(0),n(e.DEPTH_TEST),i.setFunc(Ft),F(!1),K(hc),n(e.CULL_FACE),g(Ke);function n(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function o(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function Z(t,n){return h[t]!==n&&(e.bindFramebuffer(t,n),h[t]=n,t===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=n),!0)}function Q(t,n){let s=Y,o=!1;if(t){{s=z.get(n),s===void 0&&(s=[],z.set(n,s));const i=t.textures;if(s.length!==i.length||s[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=i.length;t<n;t++)s[t]=e.COLOR_ATTACHMENT0+t;s.length=i.length,o=!0}}}else s[0]!==e.BACK&&(s[0]=e.BACK,o=!0);o&&e.drawBuffers(s)}function X(t){return T!==t&&(e.useProgram(t),T=t,!0)}const E={[ot]:e.FUNC_ADD,[mu]:e.FUNC_SUBTRACT,[hu]:e.FUNC_REVERSE_SUBTRACT};E[uu]=e.MIN,E[du]=e.MAX;const v={[lu]:e.ZERO,[cu]:e.ONE,[au]:e.SRC_COLOR,[li]:e.SRC_ALPHA,[Zd]:e.SRC_ALPHA_SATURATE,[eu]:e.DST_COLOR,[nu]:e.DST_ALPHA,[ou]:e.ONE_MINUS_SRC_COLOR,[di]:e.ONE_MINUS_SRC_ALPHA,[Jd]:e.ONE_MINUS_DST_COLOR,[tu]:e.ONE_MINUS_DST_ALPHA,[Qd]:e.CONSTANT_COLOR,[Xd]:e.ONE_MINUS_CONSTANT_COLOR,[Gd]:e.CONSTANT_ALPHA,[$d]:e.ONE_MINUS_CONSTANT_ALPHA};function g(t,s,i,a,r,l,u,h,m,g){if(t===Ke){c===!0&&(o(e.BLEND),c=!1);return}if(c===!1&&(n(e.BLEND),c=!0),t!==fu){if(t!==b||g!==k){if((f!==ot||d!==ot)&&(e.blendEquation(e.FUNC_ADD),f=ot,d=ot),g)switch(t){case Zt:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Mr:e.blendFunc(e.ONE,e.ONE);break;case kr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _r:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",t);break}else switch(t){case Zt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Mr:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case kr:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _r:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",t);break}y=null,_=null,O=null,x=null,C.set(0,0,0),p=0,b=t,k=g}return}r=r||s,l=l||i,u=u||a,(s!==f||r!==d)&&(e.blendEquationSeparate(E[s],E[r]),f=s,d=r),(i!==y||a!==_||l!==O||u!==x)&&(e.blendFuncSeparate(v[i],v[a],v[l],v[u]),y=i,_=a,O=l,x=u),(h.equals(C)===!1||m!==p)&&(e.blendColor(h.r,h.g,h.b,m),C.copy(h),p=m),b=t,k=!1}function ee(t,s){t.side===se?o(e.CULL_FACE):n(e.CULL_FACE);let a=t.side===I;s&&(a=!a),F(a),t.blending===Zt&&t.transparent===!1?g(Ke):g(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),i.setFunc(t.depthFunc),i.setTest(t.depthTest),i.setMask(t.depthWrite),j.setMask(t.colorWrite);const c=t.stencilWrite;r.setTest(c),c&&(r.setMask(t.stencilWriteMask),r.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),r.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),q(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?n(e.SAMPLE_ALPHA_TO_COVERAGE):o(e.SAMPLE_ALPHA_TO_COVERAGE)}function F(t){P!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),P=t)}function K(t){t!==Ll?(n(e.CULL_FACE),t!==L&&(t===hc?e.cullFace(e.BACK):t===gu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):o(e.CULL_FACE),L=t}function oe(t){t!==N&&(D&&e.lineWidth(t),N=t)}function q(t,s,i){t?(n(e.POLYGON_OFFSET_FILL),(V!==s||H!==i)&&(e.polygonOffset(s,i),V=s,H=i)):o(e.POLYGON_OFFSET_FILL)}function ae(t){t?n(e.SCISSOR_TEST):o(e.SCISSOR_TEST)}function re(t){t===void 0&&(t=e.TEXTURE0+U-1),a!==t&&(e.activeTexture(t),a=t)}function ce(t,n,s){s===void 0&&(a===null?s=e.TEXTURE0+U-1:s=a);let o=A[s];o===void 0&&(o={type:void 0,texture:void 0},A[s]=o),(o.type!==t||o.texture!==n)&&(a!==s&&(e.activeTexture(s),a=s),e.bindTexture(t,n||l[t]),o.type=t,o.texture=n)}function le(){const t=A[a];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function de(){try{e.compressedTexImage2D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function ue(){try{e.compressedTexImage3D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function he(){try{e.texSubImage2D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function me(){try{e.texSubImage3D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function fe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function ge(){try{e.texStorage2D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function ve(){try{e.texStorage3D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function be(){try{e.texImage2D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function je(){try{e.texImage3D(...arguments)}catch(e){console.error("THREE.WebGLState:",e)}}function ye(t){B.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),B.copy(t))}function _e(t){$.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),$.copy(t))}function we(t,n){let s=R.get(n);s===void 0&&(s=new WeakMap,R.set(n,s));let o=s.get(t);o===void 0&&(o=e.getUniformBlockIndex(n,t.name),s.set(t,o))}function Oe(t,n){const o=R.get(n),s=o.get(t);W.get(n)!==s&&(e.uniformBlockBinding(n,s,t.__bindingPointIndex),W.set(n,s))}function xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),i.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},a=null,A={},h={},z=new WeakMap,Y=[],T=null,c=!1,b=null,f=null,y=null,_=null,d=null,O=null,x=null,C=new s(0,0,0),p=0,k=!1,P=null,L=null,N=null,V=null,H=null,B.set(0,0,e.canvas.width,e.canvas.height),$.set(0,0,e.canvas.width,e.canvas.height),j.reset(),i.reset(),r.reset()}return{buffers:{color:j,depth:i,stencil:r},enable:n,disable:o,bindFramebuffer:Z,drawBuffers:Q,useProgram:X,setBlending:g,setMaterial:ee,setFlipSided:F,setCullFace:K,setLineWidth:oe,setPolygonOffset:q,setScissorTest:ae,activeTexture:re,bindTexture:ce,unbindTexture:le,compressedTexImage2D:de,compressedTexImage3D:ue,texImage2D:be,texImage3D:je,updateUBOMapping:we,uniformBlockBinding:Oe,texStorage2D:ge,texStorage3D:ve,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:fe,compressedTexSubImage3D:pe,scissor:ye,viewport:_e,reset:xe}}function O8(e,t,n,s,i,a,r){const j=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,D=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),d=new o,O=new WeakMap;let w;const f=new WeakMap;let R=!1;try{R=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(e,t){return R?new OffscreenCanvas(e,t):In("canvas")}function H(e,t,n){let o=1;const s=y(e);if((s.width>n||s.height>n)&&(o=n/Math.max(s.width,s.height)),o<1){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap||typeof VideoFrame!="undefined"&&e instanceof VideoFrame){const n=Math.floor(o*s.width),i=Math.floor(o*s.height);w===void 0&&(w=P(n,i));const a=t?P(n,i):w;a.width=n,a.height=i;const r=a.getContext("2d");return r.drawImage(e,0,0,n,i),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+s.width+"x"+s.height+") to ("+n+"x"+i+")."),a}return"data"in e&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+s.width+"x"+s.height+")."),e}return e}function h(e){return e.generateMipmaps}function m(t){e.generateMipmap(t)}function ne(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(n,s,o,i,a=!1){if(n!==null){if(e[n]!==void 0)return e[n];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'")}let r=s;if(s===e.RED&&(o===e.FLOAT&&(r=e.R32F),o===e.HALF_FLOAT&&(r=e.R16F),o===e.UNSIGNED_BYTE&&(r=e.R8)),s===e.RED_INTEGER&&(o===e.UNSIGNED_BYTE&&(r=e.R8UI),o===e.UNSIGNED_SHORT&&(r=e.R16UI),o===e.UNSIGNED_INT&&(r=e.R32UI),o===e.BYTE&&(r=e.R8I),o===e.SHORT&&(r=e.R16I),o===e.INT&&(r=e.R32I)),s===e.RG&&(o===e.FLOAT&&(r=e.RG32F),o===e.HALF_FLOAT&&(r=e.RG16F),o===e.UNSIGNED_BYTE&&(r=e.RG8)),s===e.RG_INTEGER&&(o===e.UNSIGNED_BYTE&&(r=e.RG8UI),o===e.UNSIGNED_SHORT&&(r=e.RG16UI),o===e.UNSIGNED_INT&&(r=e.RG32UI),o===e.BYTE&&(r=e.RG8I),o===e.SHORT&&(r=e.RG16I),o===e.INT&&(r=e.RG32I)),s===e.RGB_INTEGER&&(o===e.UNSIGNED_BYTE&&(r=e.RGB8UI),o===e.UNSIGNED_SHORT&&(r=e.RGB16UI),o===e.UNSIGNED_INT&&(r=e.RGB32UI),o===e.BYTE&&(r=e.RGB8I),o===e.SHORT&&(r=e.RGB16I),o===e.INT&&(r=e.RGB32I)),s===e.RGBA_INTEGER&&(o===e.UNSIGNED_BYTE&&(r=e.RGBA8UI),o===e.UNSIGNED_SHORT&&(r=e.RGBA16UI),o===e.UNSIGNED_INT&&(r=e.RGBA32UI),o===e.BYTE&&(r=e.RGBA8I),o===e.SHORT&&(r=e.RGBA16I),o===e.INT&&(r=e.RGBA32I)),s===e.RGB&&o===e.UNSIGNED_INT_5_9_9_9_REV&&(r=e.RGB9_E5),s===e.RGBA){const t=a?Wn:u.getTransfer(i);o===e.FLOAT&&(r=e.RGBA32F),o===e.HALF_FLOAT&&(r=e.RGBA16F),o===e.UNSIGNED_BYTE&&(r=t===p?e.SRGB8_ALPHA8:e.RGBA8),o===e.UNSIGNED_SHORT_4_4_4_4&&(r=e.RGBA4),o===e.UNSIGNED_SHORT_5_5_5_1&&(r=e.RGB5_A1)}return(r===e.R16F||r===e.R32F||r===e.RG16F||r===e.RG32F||r===e.RGBA16F||r===e.RGBA32F)&&t.get("EXT_color_buffer_float"),r}function F(t,n){let s;return t?n===null||n===at||n===ln?s=e.DEPTH24_STENCIL8:n===oe?s=e.DEPTH32F_STENCIL8:n===gn&&(s=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):n===null||n===at||n===ln?s=e.DEPTH_COMPONENT24:n===oe?s=e.DEPTH_COMPONENT32F:n===gn&&(s=e.DEPTH_COMPONENT16),s}function I(e,t){return h(e)===!0||e.isFramebufferTexture&&e.minFilter!==M&&e.minFilter!==V?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function K(e){const t=e.target;t.removeEventListener("dispose",K),G(t),t.isVideoTexture&&O.delete(t)}function T(e){const t=e.target;t.removeEventListener("dispose",T),q(t)}function G(e){const n=s.get(e);if(n.__webglInit===void 0)return;const o=e.source,t=f.get(o);if(t){const s=t[n.__cacheKey];s.usedTimes--,s.usedTimes===0&&W(e),Object.keys(t).length===0&&f.delete(o)}s.remove(e)}function W(t){const n=s.get(t);e.deleteTexture(n.__webglTexture);const o=t.source,i=f.get(o);delete i[n.__cacheKey],r.memory.textures--}function q(t){const n=s.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),s.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let s=0;s<n.__webglFramebuffer[t].length;s++)e.deleteFramebuffer(n.__webglFramebuffer[t][s]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}const o=t.textures;for(let t=0,i=o.length;t<i;t++){const n=s.get(o[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),r.memory.textures--),s.remove(o[t])}s.remove(t)}let E=0;function Z(){E=0}function de(){const e=E;return e>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+i.maxTextures),E+=1,e}function le(e){const t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function L(t,o){const i=s.get(t);if(t.isVideoTexture&&ce(t),t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version){const e=t.image;if(e===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(i,t,o);return}}n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+o)}function re(t,o){const i=s.get(t);if(t.version>0&&i.__version!==t.version){k(i,t,o);return}n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+o)}function ae(t,o){const i=s.get(t);if(t.version>0&&i.__version!==t.version){k(i,t,o);return}n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+o)}function se(t,o){const i=s.get(t);if(t.version>0&&i.__version!==t.version){te(i,t,o);return}n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+o)}const S={[qt]:e.REPEAT,[Te]:e.CLAMP_TO_EDGE,[fs]:e.MIRRORED_REPEAT},B={[M]:e.NEAREST,[za]:e.NEAREST_MIPMAP_NEAREST,[On]:e.NEAREST_MIPMAP_LINEAR,[V]:e.LINEAR,[ks]:e.LINEAR_MIPMAP_NEAREST,[_e]:e.LINEAR_MIPMAP_LINEAR},X={[kd]:e.NEVER,[_d]:e.ALWAYS,[Ed]:e.LESS,[Er]:e.LEQUAL,[Cd]:e.EQUAL,[wd]:e.GEQUAL,[xd]:e.GREATER,[Od]:e.NOTEQUAL};function b(n,o){if(o.type===oe&&t.has("OES_texture_float_linear")===!1&&(o.magFilter===V||o.magFilter===ks||o.magFilter===On||o.magFilter===_e||o.minFilter===V||o.minFilter===ks||o.minFilter===On||o.minFilter===_e)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(n,e.TEXTURE_WRAP_S,S[o.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,S[o.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,S[o.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,B[o.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,B[o.minFilter]),o.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,X[o.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(o.magFilter===M)return;if(o.minFilter!==On&&o.minFilter!==_e)return;if(o.type===oe&&t.has("OES_texture_float_linear")===!1)return;if(o.anisotropy>1||s.get(o).__currentAnisotropy){const a=t.get("EXT_texture_filter_anisotropic");e.texParameterf(n,a.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(o.anisotropy,i.getMaxAnisotropy())),s.get(o).__currentAnisotropy=o.anisotropy}}}function U(t,n){let i=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener("dispose",K));const a=n.source;let s=f.get(a);s===void 0&&(s={},f.set(a,s));const o=le(n);if(o!==t.__cacheKey){s[o]===void 0&&(s[o]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,i=!0),s[o].usedTimes++;const a=s[t.__cacheKey];a!==void 0&&(s[t.__cacheKey].usedTimes--,a.usedTimes===0&&W(n)),t.__cacheKey=o,t.__webglTexture=s[o].texture}return i}function k(t,o,r){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);const f=U(t,o),l=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+r);const d=s.get(l);if(l.version!==d.__version||f===!0){n.activeTexture(e.TEXTURE0+r);const k=u.getPrimaries(u.workingColorSpace),A=o.colorSpace===Le?null:u.getPrimaries(o.colorSpace),E=o.colorSpace===Le||k===A?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,E);let t=H(o.image,!1,i.maxTextureSize);t=N(o,t);const p=a.convert(o.format,o.colorSpace),j=a.convert(o.type);let v=g(o.internalFormat,p,j,o.colorSpace,o.isVideoTexture);b(c,o);let s;const _=o.mipmaps,w=o.isVideoTexture!==!0,O=d.__version===void 0||f===!0,x=l.dataReady,C=I(o,t);if(o.isDepthTexture)v=F(o.format===an,o.type),O&&(w?n.texStorage2D(e.TEXTURE_2D,1,v,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,v,t.width,t.height,0,p,j,null));else if(o.isDataTexture)if(_.length>0){w&&O&&n.texStorage2D(e.TEXTURE_2D,C,v,_[0].width,_[0].height);for(let t=0,o=_.length;t<o;t++)s=_[t],w?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,p,j,s.data):n.texImage2D(e.TEXTURE_2D,t,v,s.width,s.height,0,p,j,s.data);o.generateMipmaps=!1}else w?(O&&n.texStorage2D(e.TEXTURE_2D,C,v,t.width,t.height),x&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,t.width,t.height,p,j,t.data)):n.texImage2D(e.TEXTURE_2D,0,v,t.width,t.height,0,p,j,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){w&&O&&n.texStorage3D(e.TEXTURE_2D_ARRAY,C,v,_[0].width,_[0].height,t.depth);for(let i=0,a=_.length;i<a;i++)if(s=_[i],o.format!==Q)if(p!==null)if(w){if(x)if(o.layerUpdates.size>0){const t=G4(s.width,s.height,o.format,o.type);for(const a of o.layerUpdates){const r=s.data.subarray(a*t/s.data.BYTES_PER_ELEMENT,(a+1)*t/s.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,s.width,s.height,1,p,r)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,s.width,s.height,t.depth,p,s.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,v,s.width,s.height,t.depth,0,s.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?x&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,s.width,s.height,t.depth,p,j,s.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,v,s.width,s.height,t.depth,0,p,j,s.data)}else{w&&O&&n.texStorage2D(e.TEXTURE_2D,C,v,_[0].width,_[0].height);for(let t=0,i=_.length;t<i;t++)s=_[t],o.format!==Q?p!==null?w?x&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,p,s.data):n.compressedTexImage2D(e.TEXTURE_2D,t,v,s.width,s.height,0,s.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,p,j,s.data):n.texImage2D(e.TEXTURE_2D,t,v,s.width,s.height,0,p,j,s.data)}else if(o.isDataArrayTexture)if(w){if(O&&n.texStorage3D(e.TEXTURE_2D_ARRAY,C,v,t.width,t.height,t.depth),x)if(o.layerUpdates.size>0){const s=G4(t.width,t.height,o.format,o.type);for(const i of o.layerUpdates){const a=t.data.subarray(i*s/t.data.BYTES_PER_ELEMENT,(i+1)*s/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,p,j,a)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,p,j,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,v,t.width,t.height,t.depth,0,p,j,t.data);else if(o.isData3DTexture)w?(O&&n.texStorage3D(e.TEXTURE_3D,C,v,t.width,t.height,t.depth),x&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,p,j,t.data)):n.texImage3D(e.TEXTURE_3D,0,v,t.width,t.height,t.depth,0,p,j,t.data);else if(o.isFramebufferTexture){if(O)if(w)n.texStorage2D(e.TEXTURE_2D,C,v,t.width,t.height);else{let s=t.width,o=t.height;for(let t=0;t<C;t++)n.texImage2D(e.TEXTURE_2D,t,v,s,o,0,p,j,null),s>>=1,o>>=1}}else if(_.length>0){if(w&&O){const t=y(_[0]);n.texStorage2D(e.TEXTURE_2D,C,v,t.width,t.height)}for(let t=0,o=_.length;t<o;t++)s=_[t],w?x&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,p,j,s):n.texImage2D(e.TEXTURE_2D,t,v,p,j,s);o.generateMipmaps=!1}else if(w){if(O){const s=y(t);n.texStorage2D(e.TEXTURE_2D,C,v,s.width,s.height)}x&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,p,j,t)}else n.texImage2D(e.TEXTURE_2D,0,v,p,j,t);h(o)&&m(c),d.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function te(t,o,r){if(o.image.length!==6)return;const d=U(t,o),c=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);const l=s.get(c);if(c.version!==l.__version||d===!0){n.activeTexture(e.TEXTURE0+r);const k=u.getPrimaries(u.workingColorSpace),S=o.colorSpace===Le?null:u.getPrimaries(o.colorSpace),A=o.colorSpace===Le||k===S?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,A);const C=o.isCompressedTexture||o.image[0].isCompressedTexture,O=o.image[0]&&o.image[0].isDataTexture,t=[];for(let e=0;e<6;e++)!C&&!O?t[e]=H(o.image[e],!0,i.maxCubemapSize):t[e]=O?o.image[e].image:o.image[e],t[e]=N(o,t[e]);const w=t[0],s=a.convert(o.format,o.colorSpace),f=a.convert(o.type),j=g(o.internalFormat,s,f,o.colorSpace),v=o.isVideoTexture!==!0,E=l.__version===void 0||d===!0,_=c.dataReady;let x=I(o,w);b(e.TEXTURE_CUBE_MAP,o);let p;if(C){v&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,x,j,w.width,w.height);for(let i=0;i<6;i++){p=t[i].mipmaps;for(let a=0;a<p.length;a++){const t=p[a];o.format!==Q?s!==null?v?_&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a,0,0,t.width,t.height,s,t.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a,j,t.width,t.height,0,t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):v?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a,0,0,t.width,t.height,s,f,t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a,j,t.width,t.height,0,s,f,t.data)}}}else{if(p=o.mipmaps,v&&E){p.length>0&&x++;const s=y(t[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,x,j,s.width,s.height)}for(let o=0;o<6;o++)if(O){v?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,t[o].width,t[o].height,s,f,t[o].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,j,t[o].width,t[o].height,0,s,f,t[o].data);for(let i=0;i<p.length;i++){const a=p[i],t=a.image[o].image;v?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i+1,0,0,t.width,t.height,s,f,t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i+1,j,t.width,t.height,0,s,f,t.data)}}else{v?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,s,f,t[o]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,j,s,f,t[o]);for(let t=0;t<p.length;t++){const i=p[t];v?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,t+1,0,0,s,f,i.image[o]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,t+1,j,s,f,i.image[o])}}}h(o)&&m(e.TEXTURE_CUBE_MAP),l.__version=c.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function l(t,o,i,r,l,d){const u=a.convert(i.format,i.colorSpace),h=a.convert(i.type),f=g(i.internalFormat,u,h,i.colorSpace),p=s.get(o),m=s.get(i);if(m.__renderTarget=o,!p.__hasExternalTextures){const t=Math.max(1,o.width>>d),s=Math.max(1,o.height>>d);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,d,f,t,s,o.depth,0,u,h,null):n.texImage2D(l,d,f,t,s,0,u,h,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),c(o)?j.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,r,l,m.__webglTexture,0,v(o)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,r,l,m.__webglTexture,d),n.bindFramebuffer(e.FRAMEBUFFER,null)}function C(t,n,s){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){const o=n.depthTexture,r=o&&o.isDepthTexture?o.type:null,i=F(n.stencilBuffer,r),l=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=v(n),d=c(n);d?j.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,a,i,n.width,n.height):s?e.renderbufferStorageMultisample(e.RENDERBUFFER,a,i,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,l,e.RENDERBUFFER,t)}else{const t=n.textures;for(let i=0;i<t.length;i++){const o=t[i],d=a.convert(o.format,o.colorSpace),u=a.convert(o.type),r=g(o.internalFormat,d,u,o.colorSpace),l=v(n);s&&c(n)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,r,n.width,n.height):c(n)?j.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,r,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,r,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function $(t,o){const l=o&&o.isWebGLCubeRenderTarget;if(l)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,t),!o.depthTexture||!o.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const a=s.get(o.depthTexture);a.__renderTarget=o,(!a.__webglTexture||o.depthTexture.image.width!==o.width||o.depthTexture.image.height!==o.height)&&(o.depthTexture.image.width=o.width,o.depthTexture.image.height=o.height,o.depthTexture.needsUpdate=!0),L(o.depthTexture,0);const i=a.__webglTexture,r=v(o);if(o.depthTexture.format===Fn)c(o)?j.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0,r):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,i,0);else if(o.depthTexture.format===an)c(o)?j.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0,r):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,i,0);else throw new Error("Unknown depthTexture format")}function x(t){const o=s.get(t),i=t.isWebGLCubeRenderTarget===!0;if(o.__boundDepthTexture!==t.depthTexture){const e=t.depthTexture;if(o.__depthDisposeCallback&&o.__depthDisposeCallback(),e){const t=()=>{delete o.__boundDepthTexture,delete o.__depthDisposeCallback,e.removeEventListener("dispose",t)};e.addEventListener("dispose",t),o.__depthDisposeCallback=t}o.__boundDepthTexture=e}if(t.depthTexture&&!o.__autoAllocateDepthBuffer){if(i)throw new Error("target.depthTexture not supported in Cube render targets");const e=t.texture.mipmaps;e&&e.length>0?$(o.__webglFramebuffer[0],t):$(o.__webglFramebuffer,t)}else if(i){o.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer[s]),o.__webglDepthbuffer[s]===void 0)o.__webglDepthbuffer[s]=e.createRenderbuffer(),C(o.__webglDepthbuffer[s],t,!1);else{const i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,n=o.__webglDepthbuffer[s];e.bindRenderbuffer(e.RENDERBUFFER,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,n)}}else{const s=t.texture.mipmaps;if(s&&s.length>0?n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),o.__webglDepthbuffer===void 0)o.__webglDepthbuffer=e.createRenderbuffer(),C(o.__webglDepthbuffer,t,!1);else{const s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,n=o.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,n)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function J(t,n,o){const i=s.get(t);n!==void 0&&l(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),o!==void 0&&x(t)}function ee(t){const o=t.texture,i=s.get(t),u=s.get(o);t.addEventListener("dispose",T);const d=t.textures,p=t.isWebGLCubeRenderTarget===!0,f=d.length>1;if(f||(u.__webglTexture===void 0&&(u.__webglTexture=e.createTexture()),u.__version=o.version,r.memory.textures++),p){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(o.mipmaps&&o.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<o.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(o.mipmaps&&o.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<o.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(f)for(let t=0,o=d.length;t<o;t++){const n=s.get(d[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),r.memory.textures++)}if(t.samples>0&&c(t)===!1){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<d.length;n++){const s=d[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);const o=a.convert(s.format,s.colorSpace),r=a.convert(s.type),c=g(s.internalFormat,o,r,s.colorSpace,t.isXRRenderTarget===!0),l=v(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),C(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(p){n.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture),b(e.TEXTURE_CUBE_MAP,o);for(let n=0;n<6;n++)if(o.mipmaps&&o.mipmaps.length>0)for(let s=0;s<o.mipmaps.length;s++)l(i.__webglFramebuffer[n][s],t,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,s);else l(i.__webglFramebuffer[n],t,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);h(o)&&m(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(f){for(let o=0,r=d.length;o<r;o++){const a=d[o],c=s.get(a);n.bindTexture(e.TEXTURE_2D,c.__webglTexture),b(e.TEXTURE_2D,a),l(i.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+o,e.TEXTURE_2D,0),h(a)&&m(e.TEXTURE_2D)}n.unbindTexture()}else{let s=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(s,u.__webglTexture),b(s,o),o.mipmaps&&o.mipmaps.length>0)for(let n=0;n<o.mipmaps.length;n++)l(i.__webglFramebuffer[n],t,o,e.COLOR_ATTACHMENT0,s,n);else l(i.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0,s,0);h(o)&&m(s),n.unbindTexture()}t.depthBuffer&&x(t)}function Y(e){const t=e.textures;for(let o=0,a=t.length;o<a;o++){const i=t[o];if(h(i)){const t=ne(e),o=s.get(i).__webglTexture;n.bindTexture(t,o),m(t),n.unbindTexture()}}}const _=[],A=[];function ie(t){if(t.samples>0)if(c(t)===!1){const i=t.textures,c=t.width,l=t.height;let a=e.COLOR_BUFFER_BIT;const d=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,o=s.get(t),r=i.length>1;if(r)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);const u=t.texture.mipmaps;u&&u.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),r){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,o.__webglColorRenderbuffer[n]);const t=s.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,c,l,0,0,c,l,a,e.NEAREST),D===!0&&(_.length=0,A.length=0,_.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(_.push(d),A.push(d),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,A)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,_))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),r)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,o.__webglColorRenderbuffer[t]);const a=s.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&D){const n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}function v(e){return Math.min(i.maxSamples,e.samples)}function c(e){const n=s.get(e);return e.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&n.__useRenderToTexture!==!1}function ce(e){const t=r.render.frame;O.get(e)!==t&&(O.set(e,t),e.update())}function N(e,t){const n=e.colorSpace,s=e.format,o=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0?t:(n!==z&&n!==Le&&(u.getTransfer(n)===p?(s!==Q||o!==me)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",n)),t)}function y(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement?(d.width=e.naturalWidth||e.width,d.height=e.naturalHeight||e.height):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?(d.width=e.displayWidth,d.height=e.displayHeight):(d.width=e.width,d.height=e.height),d}this.allocateTextureUnit=de,this.resetTextureUnits=Z,this.setTexture2D=L,this.setTexture2DArray=re,this.setTexture3D=ae,this.setTextureCube=se,this.rebindTextures=J,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=x,this.setupFrameBufferTexture=l,this.useMultisampledRTT=c}function x8(e,t){function n(n,s=Le){let o;const i=u.getTransfer(s);if(n===me)return e.UNSIGNED_BYTE;if(n===da)return e.UNSIGNED_SHORT_4_4_4_4;if(n===ua)return e.UNSIGNED_SHORT_5_5_5_1;if(n===pa)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===Ca)return e.BYTE;if(n===Oa)return e.SHORT;if(n===gn)return e.UNSIGNED_SHORT;if(n===aa)return e.INT;if(n===at)return e.UNSIGNED_INT;if(n===oe)return e.FLOAT;if(n===mn)return e.HALF_FLOAT;if(n===Zr)return e.ALPHA;if(n===Qr)return e.RGB;if(n===Q)return e.RGBA;if(n===Fn)return e.DEPTH_COMPONENT;if(n===an)return e.DEPTH_STENCIL;if(n===ha)return e.RED;if(n===la)return e.RED_INTEGER;if(n===_a)return e.RG;if(n===ca)return e.RG_INTEGER;if(n===oa)return e.RGBA_INTEGER;if(n===qs||n===Ls||n===Ns||n===Ms)if(i===p)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){{if(n===qs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){{if(n===qs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ms)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}}else return null;if(n===na||n===ta||n===ea||n===Ji)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){{if(n===na)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ta)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ji)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}}else return null;if(n===Zi||n===Qi||n===Xi)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){{if(n===Zi||n===Qi)return i===p?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Xi)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}}else return null;if(n===Yi||n===Ki||n===$i||n===Bi||n===Hi||n===Ri||n===Li||n===Gs||n===Ni||n===Di||n===zi||n===Fi||n===Si||n===Ai)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){{if(n===Yi)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ki)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$i)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bi)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hi)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ri)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Li)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gs)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ni)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Di)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zi)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fi)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Si)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ai)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}}else return null;if(n===rs||n===vi||n===pi)if(o=t.get("EXT_texture_compression_bptc"),o!==null){{if(n===rs)return i===p?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vi)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pi)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}}else return null;if(n===Za||n===fi||n===Ys||n===ci)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){{if(n===rs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===fi)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ys)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ci)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}}else return null;return n===ln?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:n}}mh=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hh=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new B,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ge({vertexShader:mh,fragmentShader:hh,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new P(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dh=class extends jt{constructor(t,n){super();const b=this;let s=null,x=1,y=null,M="local-floor",A=1,j=null,E=null,g=null,r=null,a=null,C=null;const h=new uh,d=n.getContextAttributes();let F=null,p=null;const c=[],u=[],w=new o;let H=null;const f=new N;f.viewport=new m;const v=new N;v.viewport=new m;const P=[f,v],i=new k4;let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=c[e];return t===void 0&&(t=new ai,c[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=c[e];return t===void 0&&(t=new ai,c[e]=t),t.getGripSpace()},this.getHand=function(e){let t=c[e];return t===void 0&&(t=new ai,c[e]=t),t.getHandSpace()};function l(e){const n=u.indexOf(e.inputSource);if(n===-1)return;const t=c[n];t!==void 0&&(t.update(e.inputSource,e.frame,j||y),t.dispatchEvent({type:e.type,data:e.inputSource}))}function T(){s.removeEventListener("select",l),s.removeEventListener("selectstart",l),s.removeEventListener("selectend",l),s.removeEventListener("squeeze",l),s.removeEventListener("squeezestart",l),s.removeEventListener("squeezeend",l),s.removeEventListener("end",T),s.removeEventListener("inputsourceschange",z);for(let e=0;e<c.length;e++){const t=u[e];if(t===null)continue;u[e]=null,c[e].disconnect(t)}S=null,O=null,h.reset(),t.setRenderTarget(F),a=null,r=null,g=null,s=null,p=null,_.stop(),b.isPresenting=!1,t.setPixelRatio(H),t.setSize(w.width,w.height,!1),b.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(e){x=e,b.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){M=e,b.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return j||y},this.setReferenceSpace=function(e){j=e},this.getBaseLayer=function(){return r!==null?r:a},this.getBinding=function(){return g},this.getFrame=function(){return C},this.getSession=function(){return s},this.setSession=async function(e){if(s=e,s!==null){F=t.getRenderTarget(),s.addEventListener("select",l),s.addEventListener("selectstart",l),s.addEventListener("selectend",l),s.addEventListener("squeeze",l),s.addEventListener("squeezestart",l),s.addEventListener("squeezeend",l),s.addEventListener("end",T),s.addEventListener("inputsourceschange",z),d.xrCompatible!==!0&&await n.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(w);const e=typeof XRWebGLBinding!="undefined"&&"createProjectionLayer"in XRWebGLBinding.prototype;if(e){let e=null,o=null,i=null;d.depth&&(i=d.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,e=d.stencil?an:Fn,o=d.stencil?ln:at);const a={colorFormat:n.RGBA8,depthFormat:i,scaleFactor:x};g=new XRWebGLBinding(s,n),r=g.createProjectionLayer(a),s.updateRenderState({layers:[r]}),t.setPixelRatio(1),t.setSize(r.textureWidth,r.textureHeight,!1),p=new ht(r.textureWidth,r.textureHeight,{format:Q,type:me,depthTexture:new vr(r.textureWidth,r.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,e),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:r.ignoreDepthValues===!1,resolveStencilBuffer:r.ignoreDepthValues===!1})}else{const e={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:x};a=new XRWebGLLayer(s,n,e),s.updateRenderState({baseLayer:a}),t.setPixelRatio(1),t.setSize(a.framebufferWidth,a.framebufferHeight,!1),p=new ht(a.framebufferWidth,a.framebufferHeight,{format:Q,type:me,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:a.ignoreDepthValues===!1,resolveStencilBuffer:a.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(A),j=null,y=await s.requestReferenceSpace(M),_.setContext(s),_.start(),b.isPresenting=!0,b.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function z(e){for(let t=0;t<e.removed.length;t++){const s=e.removed[t],n=u.indexOf(s);n>=0&&(u[n]=null,c[n].disconnect(s))}for(let s=0;s<e.added.length;s++){const n=e.added[s];let t=u.indexOf(n);if(t===-1){for(let e=0;e<c.length;e++){if(e>=u.length){u.push(n),t=e;break}if(u[e]===null){u[e]=n,t=e;break}}if(t===-1)break}const o=c[t];o&&o.connect(n)}}const D=new e,L=new e;function I(e,t,n){D.setFromMatrixPosition(t.matrixWorld),L.setFromMatrixPosition(n.matrixWorld);const d=D.distanceTo(L),s=t.projectionMatrix.elements,l=n.projectionMatrix.elements,i=s[14]/(s[10]-1),a=s[14]/(s[10]+1),p=(s[9]+1)/s[5],h=(s[9]-1)/s[5],c=(s[8]-1)/s[0],u=(l[8]+1)/l[0],f=i*c,m=i*u,o=d/(-c+u),r=o*-c;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(r),e.translateZ(o),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),s[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{const t=i+o,n=a+o,s=f-r,c=m+(d-r),l=p*a/n*t,u=h*a/n*t;e.projectionMatrix.makePerspective(s,c,l,u,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function R(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(s===null)return;let o=e.near,a=e.far;h.texture!==null&&(h.depthNear>0&&(o=h.depthNear),h.depthFar>0&&(a=h.depthFar)),i.near=v.near=f.near=o,i.far=v.far=f.far=a,(S!==i.near||O!==i.far)&&(s.updateRenderState({depthNear:i.near,depthFar:i.far}),S=i.near,O=i.far),f.layers.mask=e.layers.mask|2,v.layers.mask=e.layers.mask|4,i.layers.mask=f.layers.mask|v.layers.mask;const t=e.parent,n=i.cameras;R(i,t);for(let e=0;e<n.length;e++)R(n[e],t);n.length===2?I(i,f,v):i.projectionMatrix.copy(f.projectionMatrix),B(e,i,t)};function B(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Nt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return i},this.getFoveation=function(){return r===null&&a===null?void 0:A},this.setFoveation=function(e){A=e,r!==null&&(r.fixedFoveation=e),a!==null&&a.fixedFoveation!==void 0&&(a.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(i)};let k=null;function V(e,n){if(E=n.getViewerPose(j||y),C=n,E!==null){const e=E.views;a!==null&&(t.setRenderTargetFramebuffer(p,a.framebuffer),t.setRenderTarget(p));let n=!1;e.length!==i.cameras.length&&(i.cameras.length=0,n=!0);for(let o=0;o<e.length;o++){const l=e[o];let c=null;if(a!==null)c=a.getViewport(l);else{const e=g.getViewSubImage(r,l);c=e.viewport,o===0&&(t.setRenderTargetTextures(p,e.colorTexture,e.depthStencilTexture),t.setRenderTarget(p))}let s=P[o];s===void 0&&(s=new N,s.layers.enable(o),s.viewport=new m,P[o]=s),s.matrix.fromArray(l.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.projectionMatrix.fromArray(l.projectionMatrix),s.projectionMatrixInverse.copy(s.projectionMatrix).invert(),s.viewport.set(c.x,c.y,c.width,c.height),o===0&&(i.matrix.copy(s.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale)),n===!0&&i.cameras.push(s)}const o=s.enabledFeatures,c=o&&o.includes("depth-sensing")&&s.depthUsage=="gpu-optimized";if(c&&g){const n=g.getDepthInformation(e[0]);n&&n.isValid&&n.texture&&h.init(t,n,s.renderState)}}for(let e=0;e<c.length;e++){const t=u[e],s=c[e];t!==null&&s!==void 0&&s.update(t,n,j||y)}k&&k(e,n),n.detectedPlanes&&b.dispatchEvent({type:"planesdetected",data:n}),C=null}const _=new Q4;_.setAnimationLoop(V),this.setAnimationLoop=function(e){k=e},this.dispose=function(){}}},tt=new Qe,ah=new i;function F8(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function c(t,n){n.color.getRGB(t.fogColor.value,Ud(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,i,c){t.isMeshBasicMaterial?s(e,t):t.isMeshLambertMaterial?s(e,t):t.isMeshToonMaterial?(s(e,t),u(e,t)):t.isMeshPhongMaterial?(s(e,t),d(e,t)):t.isMeshStandardMaterial?(s(e,t),h(e,t),t.isMeshPhysicalMaterial&&m(e,t,c)):t.isMeshMatcapMaterial?(s(e,t),f(e,t)):t.isMeshDepthMaterial?s(e,t):t.isMeshDistanceMaterial?(s(e,t),p(e,t)):t.isMeshNormalMaterial?s(e,t):t.isLineBasicMaterial?(a(e,t),t.isLineDashedMaterial&&r(e,t)):t.isPointsMaterial?o(e,t,n,i):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function s(e,s){e.opacity.value=s.opacity,s.color&&e.diffuse.value.copy(s.color),s.emissive&&e.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(e.map.value=s.map,n(s.map,e.mapTransform)),s.alphaMap&&(e.alphaMap.value=s.alphaMap,n(s.alphaMap,e.alphaMapTransform)),s.bumpMap&&(e.bumpMap.value=s.bumpMap,n(s.bumpMap,e.bumpMapTransform),e.bumpScale.value=s.bumpScale,s.side===I&&(e.bumpScale.value*=-1)),s.normalMap&&(e.normalMap.value=s.normalMap,n(s.normalMap,e.normalMapTransform),e.normalScale.value.copy(s.normalScale),s.side===I&&e.normalScale.value.negate()),s.displacementMap&&(e.displacementMap.value=s.displacementMap,n(s.displacementMap,e.displacementMapTransform),e.displacementScale.value=s.displacementScale,e.displacementBias.value=s.displacementBias),s.emissiveMap&&(e.emissiveMap.value=s.emissiveMap,n(s.emissiveMap,e.emissiveMapTransform)),s.specularMap&&(e.specularMap.value=s.specularMap,n(s.specularMap,e.specularMapTransform)),s.alphaTest>0&&(e.alphaTest.value=s.alphaTest);const i=t.get(s),o=i.envMap,a=i.envMapRotation;o&&(e.envMap.value=o,tt.copy(a),tt.x*=-1,tt.y*=-1,tt.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(tt.y*=-1,tt.z*=-1),e.envMapRotation.value.setFromMatrix4(ah.makeRotationFromEuler(tt)),e.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=s.reflectivity,e.ior.value=s.ior,e.refractionRatio.value=s.refractionRatio),s.lightMap&&(e.lightMap.value=s.lightMap,e.lightMapIntensity.value=s.lightMapIntensity,n(s.lightMap,e.lightMapTransform)),s.aoMap&&(e.aoMap.value=s.aoMap,e.aoMapIntensity.value=s.aoMapIntensity,n(s.aoMap,e.aoMapTransform))}function a(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function r(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function o(e,t,s,o){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*s,e.scale.value=o*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function d(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function u(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function h(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function m(e,t,s){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===I&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=s.texture,e.transmissionSamplerSize.value.set(s.width,s.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function f(e,t){t.matcap&&(e.matcap.value=t.matcap)}function p(e,n){const s=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(s.matrixWorld),e.nearDistance.value=s.shadow.camera.near,e.farDistance.value=s.shadow.camera.far}return{refreshFogUniforms:c,refreshMaterialUniforms:i}}function T8(e,t,n,s){let o={},a={},i=[];const g=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function p(e,t){const n=t.program;s.uniformBlockBinding(e,n)}function d(e,n){let i=o[e.id];i===void 0&&(f(e),i=l(e),o[e.id]=i,e.addEventListener("dispose",r));const d=n.program;s.updateUBOMapping(e,d);const c=t.render.frame;a[e.id]!==c&&(h(e),a[e.id]=c)}function l(t){const s=u();t.__bindingPointIndex=s;const n=e.createBuffer(),o=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,o,i),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,s,n),n}function u(){for(let e=0;e<g;e++)if(i.indexOf(e)===-1)return i.push(e),e;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(t){const s=o[t.id],n=t.uniforms,i=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,s);for(let t=0,o=n.length;t<o;t++){const s=Array.isArray(n[t])?n[t]:[n[t]];for(let o=0,a=s.length;o<a;o++){const n=s[o];if(m(n,t,o,i)===!0){const s=n.__offset,o=Array.isArray(n.value)?n.value:[n.value];let t=0;for(let a=0;a<o.length;a++){const i=o[a],r=c(i);typeof i=="number"||typeof i=="boolean"?(n.__data[0]=i,e.bufferSubData(e.UNIFORM_BUFFER,s+t,n.__data)):i.isMatrix3?(n.__data[0]=i.elements[0],n.__data[1]=i.elements[1],n.__data[2]=i.elements[2],n.__data[3]=0,n.__data[4]=i.elements[3],n.__data[5]=i.elements[4],n.__data[6]=i.elements[5],n.__data[7]=0,n.__data[8]=i.elements[6],n.__data[9]=i.elements[7],n.__data[10]=i.elements[8],n.__data[11]=0):(i.toArray(n.__data,t),t+=r.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,s,n.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(e,t,n,s){const o=e.value,i=t+"_"+n;if(s[i]===void 0)return typeof o=="number"||typeof o=="boolean"?s[i]=o:s[i]=o.clone(),!0;const a=s[i];if(typeof o=="number"||typeof o=="boolean"){if(a!==o)return s[i]=o,!0}else if(a.equals(o)===!1)return a.copy(o),!0;return!1}function f(e){const s=e.uniforms;let t=0;const n=16;for(let e=0,i=s.length;e<i;e++){const o=Array.isArray(s[e])?s[e]:[s[e]];for(let s=0,a=o.length;s<a;s++){const e=o[s],i=Array.isArray(e.value)?e.value:[e.value];for(let o=0,d=i.length;o<d;o++){const u=i[o],s=c(u),r=t%n,l=r%s.boundary,a=r+l;t+=l,a!==0&&n-a<s.storage&&(t+=n-a),e.__data=new Float32Array(s.storage/Float32Array.BYTES_PER_ELEMENT),e.__offset=t,t+=s.storage}}}const o=t%n;return o>0&&(t+=n-o),e.__size=t,e.__cache={},this}function c(e){const t={boundary:0,storage:0};return typeof e=="number"||typeof e=="boolean"?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",e),t}function r(t){const n=t.target;n.removeEventListener("dispose",r);const s=i.indexOf(n.__bindingPointIndex);i.splice(s,1),e.deleteBuffer(o[n.id]),delete o[n.id],delete a[n.id]}function v(){for(const t in o)e.deleteBuffer(o[t]);i=[],o={},a={}}return{bind:p,update:d,dispose:v}}oh=class{constructor(t={}){const{canvas:f=v6(),context:Y=null,depth:Ge=!0,stencil:Fe=!1,alpha:Ze=!1,antialias:Ue=!1,premultipliedAlpha:Ce=!0,preserveDrawingBuffer:Ke=!1,powerPreference:Xe="default",failIfMajorPerformanceCaveat:Ye=!1,reverseDepthBuffer:Qe=!1}=t;this.isWebGLRenderer=!0;let le;if(Y!==null){if(typeof WebGLRenderingContext!="undefined"&&Y instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");le=Y.getContextAttributes().alpha}else le=Ze;const $=new Uint32Array(4),V=new Int32Array(4);let g=null,c=null;const R=[],C=[];this.domElement=f,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Re,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const o=this;let re=!1;this._outputColorSpace=E;let fe=0,G=0,d=null,U=-1,N=null;const D=new m,te=new m;let de=null;const $e=new s(0);let ce=0,A=f.width,k=f.height,v=1,Ie=null,Te=null;const K=new m(0,0,A,k),q=new m(0,0,A,k);let pe=!1;const be=new Ro;let F=!1,ve=!1;const X=new i,Q=new i,et=new e,M=new m,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let W=!1;function Ee(){return d===null?v:1}let n=Y;function Le(e,t){return f.getContext(e,t)}try{const e={alpha:!0,depth:Ge,stencil:Fe,antialias:Ue,premultipliedAlpha:Ce,preserveDrawingBuffer:Ke,powerPreference:Xe,failIfMajorPerformanceCaveat:Ye};if("setAttribute"in f&&f.setAttribute("data-engine",`three.js r${Po}`),f.addEventListener("webglcontextlost",Ne,!1),f.addEventListener("webglcontextrestored",je,!1),f.addEventListener("webglcontextcreationerror",Pe,!1),n===null){const t="webgl2";if(n=Le(t,e),n===null)throw Le(t)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(e){throw console.error("THREE.WebGLRenderer: "+e.message),e}let h,b,a,_,r,l,P,H,B,ge,L,O,ae,Z,J,j,w,y,ke,Ae,Se,x,T,ee;function ze(){h=new E8(n),h.init(),x=new x8(n,h),b=new I8(n,h,t,x),a=new w8(n,h),b.reverseDepthBuffer&&Qe&&a.buffers.depth.setReversed(!0),_=new j8(n),r=new a8,l=new O8(n,h,a,r,b,x,_),P=new P8(o),H=new k8(o),B=new q8(n),T=new V8(n,B),ge=new C8(n,B,_,T),L=new g8(n,ge,B,_),ke=new b8(n,b,l),j=new H8(r),O=new i8(o,P,H,h,b,T,j),ae=new F8(o,r),Z=new d8,J=new v8(h),y=new $8(o,P,H,a,L,le,Ce),w=new y8(o,L,b),ee=new T8(n,_,b,a),Ae=new B8(n,h,_),Se=new _8(n,h,_),_.programs=O.programs,o.capabilities=b,o.extensions=h,o.properties=r,o.renderLists=Z,o.shadowMap=w,o.state=a,o.info=_}ze();const p=new dh(o,n);this.xr=p,this.getContext=function(){return n},this.getContextAttributes=function(){return n.getContextAttributes()},this.forceContextLoss=function(){const e=h.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){const e=h.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return v},this.setPixelRatio=function(e){if(e===void 0)return;v=e,this.setSize(A,k,!1)},this.getSize=function(e){return e.set(A,k)},this.setSize=function(e,t,n=!0){if(p.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=e,k=t,f.width=Math.floor(e*v),f.height=Math.floor(t*v),n===!0&&(f.style.width=e+"px",f.style.height=t+"px"),this.setViewport(0,0,e,t)},this.getDrawingBufferSize=function(e){return e.set(A*v,k*v).floor()},this.setDrawingBufferSize=function(e,t,n){A=e,k=t,v=n,f.width=Math.floor(e*n),f.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.getCurrentViewport=function(e){return e.copy(D)},this.getViewport=function(e){return e.copy(K)},this.setViewport=function(e,t,n,s){e.isVector4?K.set(e.x,e.y,e.z,e.w):K.set(e,t,n,s),a.viewport(D.copy(K).multiplyScalar(v).round())},this.getScissor=function(e){return e.copy(q)},this.setScissor=function(e,t,n,s){e.isVector4?q.set(e.x,e.y,e.z,e.w):q.set(e,t,n,s),a.scissor(te.copy(q).multiplyScalar(v).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){a.setScissorTest(pe=e)},this.setOpaqueSort=function(e){Ie=e},this.setTransparentSort=function(e){Te=e},this.getClearColor=function(e){return e.copy(y.getClearColor())},this.setClearColor=function(){y.setClearColor(...arguments)},this.getClearAlpha=function(){return y.getClearAlpha()},this.setClearAlpha=function(){y.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,s=!0){let o=0;if(e){let e=!1;if(d!==null){const t=d.texture.format;e=t===oa||t===ca||t===la}if(e){const e=d.texture.type,r=e===me||e===at||e===gn||e===ln||e===da||e===ua,t=y.getClearColor(),s=y.getClearAlpha(),o=t.r,i=t.g,a=t.b;r?($[0]=o,$[1]=i,$[2]=a,$[3]=s,n.clearBufferuiv(n.COLOR,0,$)):(V[0]=o,V[1]=i,V[2]=a,V[3]=s,n.clearBufferiv(n.COLOR,0,V))}else o|=n.COLOR_BUFFER_BIT}t&&(o|=n.DEPTH_BUFFER_BIT),s&&(o|=n.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),n.clear(o)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){f.removeEventListener("webglcontextlost",Ne,!1),f.removeEventListener("webglcontextrestored",je,!1),f.removeEventListener("webglcontextcreationerror",Pe,!1),y.dispose(),Z.dispose(),J.dispose(),r.dispose(),P.dispose(),H.dispose(),L.dispose(),T.dispose(),ee.dispose(),O.dispose(),p.dispose(),p.removeEventListener("sessionstart",We),p.removeEventListener("sessionend",Be),S.stop()};function Ne(e){e.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),re=!0}function je(){console.log("THREE.WebGLRenderer: Context Restored."),re=!1;const e=_.autoReset,t=w.enabled,n=w.autoUpdate,s=w.needsUpdate,o=w.type;ze(),_.autoReset=e,w.enabled=t,w.autoUpdate=n,w.needsUpdate=s,w.type=o}function Pe(e){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function He(e){const t=e.target;t.removeEventListener("dispose",He),qe(t)}function qe(e){Je(e),r.remove(e)}function Je(e){const t=r.get(e).programs;t!==void 0&&(t.forEach(function(e){O.releaseProgram(e)}),e.isShaderMaterial&&O.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,s,o,i,c){t===null&&(t=ie);const j=i.isMesh&&i.matrixWorld.determinant()<0,y=nt(e,t,s,o,i);a.setMaterial(o,j);let u=s.index,f=1;if(o.wireframe===!0){if(u=ge.getWireframeAttribute(s),u===void 0)return;f=2}const g=s.drawRange,v=s.attributes.position;let d=g.start*f,m=(g.start+g.count)*f;c!==null&&(d=Math.max(d,c.start*f),m=Math.min(m,(c.start+c.count)*f)),u!==null?(d=Math.max(d,0),m=Math.min(m,u.count)):v!=null&&(d=Math.max(d,0),m=Math.min(m,v.count));const p=m-d;if(p<0||p===1/0)return;T.setup(i,o,y,s,u);let b,l=Ae;if(u!==null&&(b=B.get(u),l=Se,l.setIndex(b)),i.isMesh)o.wireframe===!0?(a.setLineWidth(o.wireframeLinewidth*Ee()),l.setMode(n.LINES)):l.setMode(n.TRIANGLES);else if(i.isLine){let e=o.linewidth;e===void 0&&(e=1),a.setLineWidth(e*Ee()),i.isLineSegments?l.setMode(n.LINES):i.isLineLoop?l.setMode(n.LINE_LOOP):l.setMode(n.LINE_STRIP)}else i.isPoints?l.setMode(n.POINTS):i.isSprite&&l.setMode(n.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)Do("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),l.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(h.get("WEBGL_multi_draw"))l.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{const e=i._multiDrawStarts,t=i._multiDrawCounts,s=i._multiDrawCount,a=u?B.get(u).bytesPerElement:1,c=r.get(o).currentProgram.getUniforms();for(let o=0;o<s;o++)c.setValue(n,"_gl_DrawID",o),l.render(e[o]/a,t[o])}else if(i.isInstancedMesh)l.renderInstances(d,p,i.count);else if(s.isInstancedBufferGeometry){const e=s._maxInstanceCount!==void 0?s._maxInstanceCount:1/0,t=Math.min(s.instanceCount,e);l.renderInstances(d,p,t)}else l.render(d,p)};function Ve(e,t,n){e.transparent===!0&&e.side===se&&e.forceSinglePass===!1?(e.side=I,e.needsUpdate=!0,oe(e,t,n),e.side=Oe,e.needsUpdate=!0,oe(e,t,n),e.side=se):oe(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),c=J.get(n),c.init(t),C.push(c),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(c.pushLight(e),e.castShadow&&c.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(c.pushLight(e),e.castShadow&&c.pushShadow(e))}),c.setupLights();const s=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;const t=e.material;if(t)if(Array.isArray(t))for(let o=0;o<t.length;o++){const i=t[o];Ve(i,n,e),s.add(i)}else Ve(t,n,e),s.add(t)}),c=C.pop(),s},this.compileAsync=function(e,t,n=null){const s=this.compile(e,t,n);return new Promise(t=>{function n(){if(s.forEach(function(e){const t=r.get(e),n=t.currentProgram;n.isReady()&&s.delete(e)}),s.size===0){t(e);return}setTimeout(n,10)}h.get("KHR_parallel_shader_compile")!==null?n():setTimeout(n,10)})};let he=null;function tt(e){he&&he(e)}function We(){S.stop()}function Be(){S.start()}const S=new Q4;S.setAnimationLoop(tt),typeof self!="undefined"&&S.setContext(self),this.setAnimationLoop=function(e){he=e,p.setAnimationLoop(e),e===null?S.stop():S.start()},p.addEventListener("sessionstart",We),p.addEventListener("sessionend",Be),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(re===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),p.enabled===!0&&p.isPresenting===!0&&(p.cameraAutoUpdate===!0&&p.updateCamera(t),t=p.getCamera()),e.isScene===!0&&e.onBeforeRender(o,e,t,d),c=J.get(e,C.length),c.init(t),C.push(c),Q.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),be.setFromProjectionMatrix(Q),ve=this.localClippingEnabled,F=j.init(this.clippingPlanes,ve),g=Z.get(e,R.length),g.init(),R.push(g),p.enabled===!0&&p.isPresenting===!0){const e=o.xr.getDepthSensingMesh();e!==null&&ue(e,t,-(1/0),o.sortObjects)}ue(e,t,0,o.sortObjects),g.finish(),o.sortObjects===!0&&g.sort(Ie,Te),W=p.enabled===!1||p.isPresenting===!1||p.hasDepthSensing()===!1,W&&y.addToRenderList(g,e),this.info.render.frame++,F===!0&&j.beginShadows();const i=c.state.shadowsArray;w.render(i,e,t),F===!0&&j.endShadows(),this.info.autoReset===!0&&this.info.reset();const s=g.opaque,n=g.transmissive;if(c.setupLights(),t.isArrayCamera){const o=t.cameras;if(n.length>0)for(let t=0,i=o.length;t<i;t++){const a=o[t];ye(s,n,e,a)}W&&y.render(e);for(let t=0,s=o.length;t<s;t++){const n=o[t];De(g,e,n,n.viewport)}}else n.length>0&&ye(s,n,e,t),W&&y.render(e),De(g,e,t);d!==null&&G===0&&(l.updateMultisampleRenderTarget(d),l.updateRenderTargetMipmap(d)),e.isScene===!0&&e.onAfterRender(o,e,t),T.resetDefaultState(),U=-1,N=null,C.pop(),C.length>0?(c=C[C.length-1],F===!0&&j.setGlobalState(o.clippingPlanes,c.state.camera)):c=null,R.pop(),R.length>0?g=R[R.length-1]:g=null};function ue(e,t,n,s){if(e.visible===!1)return;const i=e.layers.test(t.layers);if(i)if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)c.pushLight(e),e.castShadow&&c.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||be.intersectsSprite(e)){s&&M.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Q);const o=L.update(e),t=e.material;t.visible&&g.push(e,o,t,n,M.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||be.intersectsObject(e))){const t=L.update(e),o=e.material;if(s&&(e.boundingSphere!==void 0?(e.boundingSphere===null&&e.computeBoundingSphere(),M.copy(e.boundingSphere.center)):(t.boundingSphere===null&&t.computeBoundingSphere(),M.copy(t.boundingSphere.center)),M.applyMatrix4(e.matrixWorld).applyMatrix4(Q)),Array.isArray(o)){const s=t.groups;for(let i=0,c=s.length;i<c;i++){const r=s[i],a=o[r.materialIndex];a&&a.visible&&g.push(e,t,a,n,M.z,r)}}else o.visible&&g.push(e,t,o,n,M.z,null)}const o=e.children;for(let e=0,i=o.length;e<i;e++)ue(o[e],t,n,s)}function De(e,t,n,s){const i=e.opaque,r=e.transmissive,l=e.transparent;c.setupLightsView(n),F===!0&&j.setGlobalState(o.clippingPlanes,n),s&&a.viewport(D.copy(s)),i.length>0&&ne(i,t,n),r.length>0&&ne(r,t,n),l.length>0&&ne(l,t,n),a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),a.setPolygonOffset(!1)}function ye(e,t,n,s){const d=n.isScene===!0?n.overrideMaterial:null;if(d!==null)return;c.state.transmissionRenderTarget[s.id]===void 0&&(c.state.transmissionRenderTarget[s.id]=new ht(1,1,{generateMipmaps:!0,type:h.has("EXT_color_buffer_half_float")||h.has("EXT_color_buffer_float")?mn:me,minFilter:_e,samples:4,stencilBuffer:Fe,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:u.workingColorSpace}));const i=c.state.transmissionRenderTarget[s.id],a=s.viewport||D;i.setSize(a.z*o.transmissionResolutionScale,a.w*o.transmissionResolutionScale);const m=o.getRenderTarget();o.setRenderTarget(i),o.getClearColor($e),ce=o.getClearAlpha(),ce<1&&o.setClearColor(16777215,.5),o.clear(),W&&y.render(n);const f=o.toneMapping;o.toneMapping=Re;const r=s.viewport;if(s.viewport!==void 0&&(s.viewport=void 0),c.setupLightsView(s),F===!0&&j.setGlobalState(o.clippingPlanes,s),ne(e,n,s),l.updateMultisampleRenderTarget(i),l.updateRenderTargetMipmap(i),h.has("WEBGL_multisampled_render_to_texture")===!1){let e=!1;for(let a=0,c=t.length;a<c;a++){const i=t[a],r=i.object,l=i.geometry,o=i.material,d=i.group;if(o.side===se&&r.layers.test(s.layers)){const t=o.side;o.side=I,o.needsUpdate=!0,Me(r,n,s,l,o,d),o.side=t,o.needsUpdate=!0,e=!0}}e===!0&&(l.updateMultisampleRenderTarget(i),l.updateRenderTargetMipmap(i))}o.setRenderTarget(m),o.setClearColor($e,ce),r!==void 0&&(s.viewport=r),o.toneMapping=f}function ne(e,t,n){const s=t.isScene===!0?t.overrideMaterial:null;for(let i=0,c=e.length;i<c;i++){const o=e[i],r=o.object,l=o.geometry,d=o.group;let a=o.material;a.allowOverride===!0&&s!==null&&(a=s),r.layers.test(n.layers)&&Me(r,t,n,l,a,d)}}function Me(e,t,n,s,i,a){e.onBeforeRender(o,t,n,s,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(o,t,n,s,e,a),i.transparent===!0&&i.side===se&&i.forceSinglePass===!1?(i.side=I,i.needsUpdate=!0,o.renderBufferDirect(n,t,s,i,e,a),i.side=Oe,i.needsUpdate=!0,o.renderBufferDirect(n,t,s,i,e,a),i.side=se):o.renderBufferDirect(n,t,s,i,e,a),e.onAfterRender(o,t,n,s,i,a)}function oe(e,t,n){t.isScene!==!0&&(t=ie);const a=r.get(e),s=c.state.lights,f=c.state.shadowsArray,m=s.state.version,l=O.getParameters(e,s.state,f,t,n),h=O.getProgramCacheKey(l);let u=a.programs;a.environment=e.isMeshStandardMaterial?t.environment:null,a.fog=t.fog,a.envMap=(e.isMeshStandardMaterial?H:P).get(e.envMap||a.environment),a.envMapRotation=a.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,u===void 0&&(e.addEventListener("dispose",He),u=new Map,a.programs=u);let d=u.get(h);if(d!==void 0){if(a.currentProgram===d&&a.lightsStateVersion===m)return we(e,l),d}else l.uniforms=O.getUniforms(e),e.onBeforeCompile(l,o),d=O.acquireProgram(l,h),u.set(h,d),a.uniforms=l.uniforms;const i=a.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(i.clippingPlanes=j.uniform),we(e,l),a.needsLights=ot(e),a.lightsStateVersion=m,a.needsLights&&(i.ambientLightColor.value=s.state.ambient,i.lightProbe.value=s.state.probe,i.directionalLights.value=s.state.directional,i.directionalLightShadows.value=s.state.directionalShadow,i.spotLights.value=s.state.spot,i.spotLightShadows.value=s.state.spotShadow,i.rectAreaLights.value=s.state.rectArea,i.ltc_1.value=s.state.rectAreaLTC1,i.ltc_2.value=s.state.rectAreaLTC2,i.pointLights.value=s.state.point,i.pointLightShadows.value=s.state.pointShadow,i.hemisphereLights.value=s.state.hemi,i.directionalShadowMap.value=s.state.directionalShadowMap,i.directionalShadowMatrix.value=s.state.directionalShadowMatrix,i.spotShadowMap.value=s.state.spotShadowMap,i.spotLightMatrix.value=s.state.spotLightMatrix,i.spotLightMap.value=s.state.spotLightMap,i.pointShadowMap.value=s.state.pointShadowMap,i.pointShadowMatrix.value=s.state.pointShadowMatrix),a.currentProgram=d,a.uniformsList=null,d}function xe(e){if(e.uniformsList===null){const t=e.currentProgram.getUniforms();e.uniformsList=Fs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function we(e,t){const n=r.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function nt(e,t,s,i,u){t.isScene!==!0&&(t=ie),l.resetTextureUnits();const w=t.fog,V=i.isMeshStandardMaterial?t.environment:null,B=d===null?o.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:z,_=(i.isMeshStandardMaterial?H:P).get(i.envMap||V),I=i.vertexColors===!0&&!!s.attributes.color&&s.attributes.color.itemSize===4,R=!!s.attributes.tangent&&(!!i.normalMap||i.anisotropy>0),L=!!s.morphAttributes.position,D=!!s.morphAttributes.normal,T=!!s.morphAttributes.color;let E=Re;i.toneMapped&&(d===null||d.isXRRenderTarget===!0)&&(E=o.toneMapping);const C=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,S=C!==void 0?C.length:0,h=r.get(i),M=c.state.lights;if(F===!0&&(ve===!0||e!==N)){const t=e===N&&i.id===U;j.setState(i,e,t)}let m=!1;i.version===h.__version?h.needsLights&&h.lightsStateVersion!==M.state.version?m=!0:h.outputColorSpace!==B?m=!0:u.isBatchedMesh&&h.batching===!1?m=!0:!u.isBatchedMesh&&h.batching===!0?m=!0:u.isBatchedMesh&&h.batchingColor===!0&&u.colorTexture===null?m=!0:u.isBatchedMesh&&h.batchingColor===!1&&u.colorTexture!==null?m=!0:u.isInstancedMesh&&h.instancing===!1?m=!0:!u.isInstancedMesh&&h.instancing===!0?m=!0:u.isSkinnedMesh&&h.skinning===!1?m=!0:!u.isSkinnedMesh&&h.skinning===!0?m=!0:u.isInstancedMesh&&h.instancingColor===!0&&u.instanceColor===null?m=!0:u.isInstancedMesh&&h.instancingColor===!1&&u.instanceColor!==null?m=!0:u.isInstancedMesh&&h.instancingMorph===!0&&u.morphTexture===null?m=!0:u.isInstancedMesh&&h.instancingMorph===!1&&u.morphTexture!==null?m=!0:h.envMap!==_?m=!0:i.fog===!0&&h.fog!==w?m=!0:h.numClippingPlanes!==void 0&&(h.numClippingPlanes!==j.numPlanes||h.numIntersection!==j.numIntersection)?m=!0:h.vertexAlphas!==I?m=!0:h.vertexTangents!==R?m=!0:h.morphTargets!==L?m=!0:h.morphNormals!==D?m=!0:h.morphColors!==T?m=!0:h.toneMapping!==E?m=!0:h.morphTargetsCount!==S&&(m=!0):(m=!0,h.__version=i.version);let g=h.currentProgram;m===!0&&(g=oe(i,t,u));let A=!1,y=!1,x=!1;const f=g.getUniforms(),p=h.uniforms;if(a.useProgram(g.program)&&(A=!0,y=!0,x=!0),i.id!==U&&(U=i.id,y=!0),A||N!==e){const s=a.buffers.depth.getReversed();s?(X.copy(e.projectionMatrix),N6(X),L6(X),f.setValue(n,"projectionMatrix",X)):f.setValue(n,"projectionMatrix",e.projectionMatrix),f.setValue(n,"viewMatrix",e.matrixWorldInverse);const t=f.map.cameraPosition;t!==void 0&&t.setValue(n,et.setFromMatrixPosition(e.matrixWorld)),b.logarithmicDepthBuffer&&f.setValue(n,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial)&&f.setValue(n,"isOrthographic",e.isOrthographicCamera===!0),N!==e&&(N=e,y=!0,x=!0)}if(u.isSkinnedMesh){f.setOptional(n,u,"bindMatrix"),f.setOptional(n,u,"bindMatrixInverse");const e=u.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),f.setValue(n,"boneTexture",e.boneTexture,l))}u.isBatchedMesh&&(f.setOptional(n,u,"batchingTexture"),f.setValue(n,"batchingTexture",u._matricesTexture,l),f.setOptional(n,u,"batchingIdTexture"),f.setValue(n,"batchingIdTexture",u._indirectTexture,l),f.setOptional(n,u,"batchingColorTexture"),u._colorsTexture!==null&&f.setValue(n,"batchingColorTexture",u._colorsTexture,l));const O=s.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&ke.update(u,s,g),(y||h.receiveShadow!==u.receiveShadow)&&(h.receiveShadow=u.receiveShadow,f.setValue(n,"receiveShadow",u.receiveShadow)),i.isMeshGouraudMaterial&&i.envMap!==null&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1),i.isMeshStandardMaterial&&i.envMap===null&&t.environment!==null&&(p.envMapIntensity.value=t.environmentIntensity),y&&(f.setValue(n,"toneMappingExposure",o.toneMappingExposure),h.needsLights&&st(p,x),w&&i.fog===!0&&ae.refreshFogUniforms(p,w),ae.refreshMaterialUniforms(p,i,v,k,c.state.transmissionRenderTarget[e.id]),Fs.upload(n,xe(h),p,l)),i.isShaderMaterial&&i.uniformsNeedUpdate===!0&&(Fs.upload(n,xe(h),p,l),i.uniformsNeedUpdate=!1),i.isSpriteMaterial&&f.setValue(n,"center",u.center),f.setValue(n,"modelViewMatrix",u.modelViewMatrix),f.setValue(n,"normalMatrix",u.normalMatrix),f.setValue(n,"modelMatrix",u.matrixWorld),i.isShaderMaterial||i.isRawShaderMaterial){const e=i.uniformsGroups;for(let t=0,s=e.length;t<s;t++){const n=e[t];ee.update(n,g),ee.bind(n,g)}}return g}function st(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function ot(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(e,t,n){const s=r.get(e);s.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,s.__autoAllocateDepthBuffer===!1&&(s.__useRenderToTexture=!1),r.get(e.texture).__webglTexture=t,r.get(e.depthTexture).__webglTexture=s.__autoAllocateDepthBuffer?void 0:n,s.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){const n=r.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};const it=n.createFramebuffer();this.setRenderTarget=function(e,t=0,s=0){d=e,fe=t,G=s;let i=!0,o=null,c=!1,u=!1;if(e){const h=r.get(e);if(h.__useDefaultFramebuffer!==void 0)a.bindFramebuffer(n.FRAMEBUFFER,null),i=!1;else if(h.__webglFramebuffer===void 0)l.setupRenderTarget(e);else if(h.__hasExternalTextures)l.rebindTextures(e,r.get(e.texture).__webglTexture,r.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){const t=e.depthTexture;if(h.__boundDepthTexture!==t){if(t!==null&&r.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(e)}}const m=e.texture;(m.isData3DTexture||m.isDataArrayTexture||m.isCompressedArrayTexture)&&(u=!0);const d=r.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(Array.isArray(d[t])?o=d[t][s]:o=d[t],c=!0):e.samples>0&&l.useMultisampledRTT(e)===!1?o=r.get(e).__webglMultisampledFramebuffer:Array.isArray(d)?o=d[s]:o=d,D.copy(e.viewport),te.copy(e.scissor),de=e.scissorTest}else D.copy(K).multiplyScalar(v).floor(),te.copy(q).multiplyScalar(v).floor(),de=pe;s!==0&&(o=it);const h=a.bindFramebuffer(n.FRAMEBUFFER,o);if(h&&i&&a.drawBuffers(e,o),a.viewport(D),a.scissor(te),a.setScissorTest(de),c){const o=r.get(e.texture);n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+t,o.__webglTexture,s)}else if(u){const o=r.get(e.texture),i=t;n.framebufferTextureLayer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,o.__webglTexture,s,i)}else if(e!==null&&s!==0){const t=r.get(e.texture);n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t.__webglTexture,s)}U=-1},this.readRenderTargetPixels=function(e,t,s,o,i,c,l){if(!e||!e.isWebGLRenderTarget){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let u=r.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&l!==void 0&&(u=u[l]),u){a.bindFramebuffer(n.FRAMEBUFFER,u);try{const a=e.texture,r=a.format,l=a.type;if(!b.textureFormatReadable(r)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(l)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}t>=0&&t<=e.width-o&&s>=0&&s<=e.height-i&&n.readPixels(t,s,o,i,x.convert(r),x.convert(l),c)}finally{const e=d!==null?r.get(d).__webglFramebuffer:null;a.bindFramebuffer(n.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,s,o,i,c,l){if(!e||!e.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let u=r.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&l!==void 0&&(u=u[l]),u){if(t>=0&&t<=e.width-o&&s>=0&&s<=e.height-i){a.bindFramebuffer(n.FRAMEBUFFER,u);const h=e.texture,m=h.format,f=h.type;if(!b.textureFormatReadable(m))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(f))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const l=n.createBuffer();n.bindBuffer(n.PIXEL_PACK_BUFFER,l),n.bufferData(n.PIXEL_PACK_BUFFER,c.byteLength,n.STREAM_READ),n.readPixels(t,s,o,i,x.convert(m),x.convert(f),0);const g=d!==null?r.get(d).__webglFramebuffer:null;a.bindFramebuffer(n.FRAMEBUFFER,g);const p=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);return n.flush(),await b6(n,p,4),n.bindBuffer(n.PIXEL_PACK_BUFFER,l),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,c),n.deleteBuffer(l),n.deleteSync(p),c}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(e,t=null,s=0){const o=Math.pow(2,-s),i=Math.floor(e.image.width*o),r=Math.floor(e.image.height*o),c=t!==null?t.x:0,d=t!==null?t.y:0;l.setTexture2D(e,0),n.copyTexSubImage2D(n.TEXTURE_2D,s,0,0,c,d,i,r),a.unbindTexture()};const rt=n.createFramebuffer(),ct=n.createFramebuffer();this.copyTextureToTexture=function(e,t,s=null,o=null,i=0,c=null){c===null&&(i!==0?(Do("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),c=i,i=0):c=0);let h,u,g,b,j,_,m,f,v;const d=e.isCompressedTexture?e.mipmaps[c]:e.image;if(s!==null)h=s.max.x-s.min.x,u=s.max.y-s.min.y,g=s.isBox3?s.max.z-s.min.z:1,b=s.min.x,j=s.min.y,_=s.isBox3?s.min.z:0;else{const t=Math.pow(2,-i);h=Math.floor(d.width*t),u=Math.floor(d.height*t),e.isDataArrayTexture?g=d.depth:e.isData3DTexture?g=Math.floor(d.depth*t):g=1,b=0,j=0,_=0}o!==null?(m=o.x,f=o.y,v=o.z):(m=0,f=0,v=0);const y=x.convert(t.format),w=x.convert(t.type);let p;t.isData3DTexture?(l.setTexture3D(t,0),p=n.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(l.setTexture2DArray(t,0),p=n.TEXTURE_2D_ARRAY):(l.setTexture2D(t,0),p=n.TEXTURE_2D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,t.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,t.unpackAlignment);const E=n.getParameter(n.UNPACK_ROW_LENGTH),k=n.getParameter(n.UNPACK_IMAGE_HEIGHT),A=n.getParameter(n.UNPACK_SKIP_PIXELS),S=n.getParameter(n.UNPACK_SKIP_ROWS),M=n.getParameter(n.UNPACK_SKIP_IMAGES);n.pixelStorei(n.UNPACK_ROW_LENGTH,d.width),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,d.height),n.pixelStorei(n.UNPACK_SKIP_PIXELS,b),n.pixelStorei(n.UNPACK_SKIP_ROWS,j),n.pixelStorei(n.UNPACK_SKIP_IMAGES,_);const C=e.isDataArrayTexture||e.isData3DTexture,O=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){const s=r.get(e),o=r.get(t),l=r.get(s.__renderTarget),d=r.get(o.__renderTarget);a.bindFramebuffer(n.READ_FRAMEBUFFER,l.__webglFramebuffer),a.bindFramebuffer(n.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let s=0;s<g;s++)C&&(n.framebufferTextureLayer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,r.get(e).__webglTexture,i,_+s),n.framebufferTextureLayer(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,r.get(t).__webglTexture,c,v+s)),n.blitFramebuffer(b,j,h,u,m,f,h,u,n.DEPTH_BUFFER_BIT,n.NEAREST);a.bindFramebuffer(n.READ_FRAMEBUFFER,null),a.bindFramebuffer(n.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||r.has(e)){const s=r.get(e),o=r.get(t);a.bindFramebuffer(n.READ_FRAMEBUFFER,rt),a.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct);for(let e=0;e<g;e++)C?n.framebufferTextureLayer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,s.__webglTexture,i,_+e):n.framebufferTexture2D(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.__webglTexture,i),O?n.framebufferTextureLayer(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,o.__webglTexture,c,v+e):n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,o.__webglTexture,c),i!==0?n.blitFramebuffer(b,j,h,u,m,f,h,u,n.COLOR_BUFFER_BIT,n.NEAREST):O?n.copyTexSubImage3D(p,c,m,f,v+e,b,j,h,u):n.copyTexSubImage2D(p,c,m,f,b,j,h,u);a.bindFramebuffer(n.READ_FRAMEBUFFER,null),a.bindFramebuffer(n.DRAW_FRAMEBUFFER,null)}else O?e.isDataTexture||e.isData3DTexture?n.texSubImage3D(p,c,m,f,v,h,u,g,y,w,d.data):t.isCompressedArrayTexture?n.compressedTexSubImage3D(p,c,m,f,v,h,u,g,y,d.data):n.texSubImage3D(p,c,m,f,v,h,u,g,y,w,d):e.isDataTexture?n.texSubImage2D(n.TEXTURE_2D,c,m,f,h,u,y,w,d.data):e.isCompressedTexture?n.compressedTexSubImage2D(n.TEXTURE_2D,c,m,f,d.width,d.height,y,d.data):n.texSubImage2D(n.TEXTURE_2D,c,m,f,h,u,y,w,d);n.pixelStorei(n.UNPACK_ROW_LENGTH,E),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,k),n.pixelStorei(n.UNPACK_SKIP_PIXELS,A),n.pixelStorei(n.UNPACK_SKIP_ROWS,S),n.pixelStorei(n.UNPACK_SKIP_IMAGES,M),c===0&&t.generateMipmaps&&n.generateMipmap(p),a.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,s=null,o=0){return Do('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(e,t,n,s,o)},this.initRenderTarget=function(e){r.get(e).__webglFramebuffer===void 0&&l.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?l.setTextureCube(e,0):e.isData3DTexture?l.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?l.setTexture2DArray(e,0):l.setTexture2D(e,0),a.unbindTexture()},this.resetState=function(){fe=0,G=0,d=null,a.reset(),T.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=u._getDrawingBufferColorSpace(e),t.unpackColorSpace=u._getUnpackColorSpace()}};function X3(e,t){if(t===Fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===ii||t===dr){let n=e.getIndex();if(n===null){const t=[],s=e.getAttribute("position");if(s!==void 0){for(let e=0;e<s.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const o=n.count-2,s=[];if(t===ii)for(let e=1;e<=o;e++)s.push(n.getX(0)),s.push(n.getX(e)),s.push(n.getX(e+1));else for(let e=0;e<o;e++)e%2===0?(s.push(n.getX(e)),s.push(n.getX(e+1)),s.push(n.getX(e+2))):(s.push(n.getX(e+2)),s.push(n.getX(e+1)),s.push(n.getX(e)));s.length/3!==o&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=e.clone();return i.setIndex(s),i.clearGroups(),i}return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}G3=class extends It{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new I3(e)}),this.register(function(e){return new H3(e)}),this.register(function(e){return new W4(e)}),this.register(function(e){return new I4(e)}),this.register(function(e){return new w4(e)}),this.register(function(e){return new N3(e)}),this.register(function(e){return new D3(e)}),this.register(function(e){return new z3(e)}),this.register(function(e){return new Z4(e)}),this.register(function(e){return new B3(e)}),this.register(function(e){return new X4(e)}),this.register(function(e){return new P3(e)}),this.register(function(e){return new Rl(e)}),this.register(function(e){return new K4(e)}),this.register(function(e){return new $3(e)}),this.register(function(e){return new j4(e)}),this.register(function(e){return new b4(e)})}load(e,t,n,s){const i=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const t=bn.extractUrlBase(e);a=bn.resolveURL(t,this.path)}else a=bn.extractUrlBase(e);this.manager.itemStart(e);const r=function(t){s?s(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},o=new Wa(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},r)}catch(e){r(e)}},n,r)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let o;const i={},r={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer){const t=c.decode(new Uint8Array(e,0,4));if(t===Nc){try{i[l.KHR_BINARY_GLTF]=new J1(e)}catch(e){s&&s(e);return}o=JSON.parse(i[l.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e))}else o=e;if(o.asset===void 0||o.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const a=new o1(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});a.fileLoader.setRequestHeader(this.requestHeader);for(let t=0;t<this.pluginCallbacks.length;t++){const e=this.pluginCallbacks[t](a);e.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),r[e.name]=e,i[e.name]=!0}if(o.extensionsUsed)for(let t=0;t<o.extensionsUsed.length;++t){const e=o.extensionsUsed[t],n=o.extensionsRequired||[];switch(e){case l.KHR_MATERIALS_UNLIT:i[e]=new V3;break;case l.KHR_DRACO_MESH_COMPRESSION:i[e]=new q1(o,this.dracoLoader);break;case l.KHR_TEXTURE_TRANSFORM:i[e]=new K1;break;case l.KHR_MESH_QUANTIZATION:i[e]=new W1;break;default:n.indexOf(e)>=0&&r[e]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+e+'".')}}a.setExtensions(i),a.setPlugins(r),a.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,o){n.parse(e,t,s,o)})}};function L8(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}l={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$3=class{constructor(e){this.parser=e,this.name=l.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let s=0,o=e.length;s<o;s++){const n=e[s];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const i=this.parser,r="light:"+e;let o=i.cache.get(r);if(o)return o;const c=i.json,d=c.extensions&&c.extensions[this.name]||{},u=d.lights||[],t=u[e];let n;const a=new s(16777215);t.color!==void 0&&a.setRGB(t.color[0],t.color[1],t.color[2],z);const l=t.range!==void 0?t.range:0;switch(t.type){case"directional":n=new x4(a),n.target.position.set(0,0,-1),n.add(n.target);break;case"point":n=new _4(a),n.distance=l;break;case"spot":n=new g4(a),n.distance=l,t.spot=t.spot||{},t.spot.innerConeAngle=t.spot.innerConeAngle!==void 0?t.spot.innerConeAngle:0,t.spot.outerConeAngle=t.spot.outerConeAngle!==void 0?t.spot.outerConeAngle:Math.PI/4,n.angle=t.spot.outerConeAngle,n.penumbra=1-t.spot.innerConeAngle/t.spot.outerConeAngle,n.target.position.set(0,0,-1),n.add(n.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+t.type)}return n.position.set(0,0,0),Pe(n,t),t.intensity!==void 0&&(n.intensity=t.intensity),n.name=i.createUniqueName(t.name||"light_"+e),o=Promise.resolve(n),i.cache.add(r,o),o}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){const o=this,n=this.parser,i=n.json,s=i.nodes[e],a=s.extensions&&s.extensions[this.name]||{},t=a.light;return t===void 0?null:this._loadLight(t).then(function(e){return n._getNodeRef(o.cache,t,e)})}},V3=class{constructor(){this.name=l.KHR_MATERIALS_UNLIT}getMaterialType(){return qe}extendParams(e,t,n){const i=[];e.color=new s(1,1,1),e.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const t=o.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],z),e.opacity=t[3]}o.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",o.baseColorTexture,E))}return Promise.all(i)}},B3=class{constructor(e){this.parser=e,this.name=l.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const o=this.parser,n=o.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},I3=class{constructor(e){this.parser=e,this.name=l.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser,t=n.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pe}extendMaterialParams(e,t){const s=this.parser,a=s.json.materials[e];if(!a.extensions||!a.extensions[this.name])return Promise.resolve();const i=[],n=a.extensions[this.name];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(s.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(s.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(s.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new o(e,e)}return Promise.all(i)}},H3=class{constructor(e){this.parser=e,this.name=l.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser,t=n.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pe}extendMaterialParams(e,t){const o=this.parser,n=o.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},P3=class{constructor(e){this.parser=e,this.name=l.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser,t=n.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pe}extendMaterialParams(e,t){const s=this.parser,o=s.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const i=[],n=o.extensions[this.name];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(s.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(s.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},N3=class{constructor(e){this.parser=e,this.name=l.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser,t=n.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pe}extendMaterialParams(e,t){const o=this.parser,i=o.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new s(0,0,0),t.sheenRoughness=0,t.sheen=1;const n=i.extensions[this.name];if(n.sheenColorFactor!==void 0){const e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],z)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&a.push(o.assignTexture(t,"sheenColorMap",n.sheenColorTexture,E)),n.sheenRoughnessTexture!==void 0&&a.push(o.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(a)}},D3=class{constructor(e){this.parser=e,this.name=l.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser,t=n.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pe}extendMaterialParams(e,t){const o=this.parser,s=o.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],n=s.extensions[this.name];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(o.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},z3=class{constructor(e){this.parser=e,this.name=l.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser,t=n.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pe}extendMaterialParams(e,t){const a=this.parser,o=a.json.materials[e];if(!o.extensions||!o.extensions[this.name])return Promise.resolve();const r=[],n=o.extensions[this.name];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&r.push(a.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const i=n.attenuationColor||[1,1,1];return t.attenuationColor=(new s).setRGB(i[0],i[1],i[2],z),Promise.all(r)}},Z4=class{constructor(e){this.parser=e,this.name=l.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser,t=n.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pe}extendMaterialParams(e,t){const o=this.parser,n=o.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},X4=class{constructor(e){this.parser=e,this.name=l.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser,t=n.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pe}extendMaterialParams(e,t){const o=this.parser,i=o.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],n=i.extensions[this.name];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&a.push(o.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=(new s).setRGB(r[0],r[1],r[2],z),n.specularColorTexture!==void 0&&a.push(o.assignTexture(t,"specularColorMap",n.specularColorTexture,E)),Promise.all(a)}},K4=class{constructor(e){this.parser=e,this.name=l.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser,t=n.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pe}extendMaterialParams(e,t){const o=this.parser,s=o.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],n=s.extensions[this.name];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(o.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Rl=class{constructor(e){this.parser=e,this.name=l.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser,t=n.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pe}extendMaterialParams(e,t){const o=this.parser,s=o.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],n=s.extensions[this.name];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(o.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},W4=class{constructor(e){this.parser=e,this.name=l.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const i=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,o)}},I4=class{constructor(e){this.parser=e,this.name=l.EXT_TEXTURE_WEBP}loadTexture(e){const s=this.name,t=this.parser,o=t.json,n=o.textures[e];if(!n.extensions||!n.extensions[s])return null;const i=n.extensions[s],a=o.images[i.source];let r=t.textureLoader;if(a.uri){const e=t.options.manager.getHandler(a.uri);e!==null&&(r=e)}return t.loadTextureImage(e,i.source,r)}},w4=class{constructor(e){this.parser=e,this.name=l.EXT_TEXTURE_AVIF}loadTexture(e){const s=this.name,t=this.parser,o=t.json,n=o.textures[e];if(!n.extensions||!n.extensions[s])return null;const i=n.extensions[s],a=o.images[i.source];let r=t.textureLoader;if(a.uri){const e=t.options.manager.getHandler(a.uri);e!==null&&(r=e)}return t.loadTextureImage(e,i.source,r)}},j4=class{constructor(e){this.name=l.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const e=n.extensions[this.name],o=this.parser.getDependency("buffer",e.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(t){const a=e.byteOffset||0,r=e.byteLength||0,n=e.count,o=e.byteStride,i=new Uint8Array(t,a,r);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(n,o,i,e.mode,e.filter).then(function(e){return e.buffer}):s.ready.then(function(){const t=new ArrayBuffer(n*o);return s.decodeGltfBuffer(new Uint8Array(t),n,o,i,e.mode,e.filter),t})})}return null}},b4=class{constructor(e){this.name=l.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(t){const a=this.parser.json,s=a.nodes[t];if(!s.extensions||!s.extensions[this.name]||s.mesh===void 0)return null;const c=a.meshes[s.mesh];for(const e of c.primitives)if(e.mode!==G.TRIANGLES&&e.mode!==G.TRIANGLE_STRIP&&e.mode!==G.TRIANGLE_FAN&&e.mode!==void 0)return null;const l=s.extensions[this.name],r=l.attributes,o=[],n={};for(const e in r)o.push(this.parser.getDependency("accessor",r[e]).then(t=>(n[e]=t,n[e])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(t=>{const s=t.pop(),r=s.isGroup?s.children:[s],a=t[0].count,o=[];for(const s of r){const u=new i,c=new e,l=new Ye,d=new e(1,1,1),t=new Zu(s.geometry,s.material,a);for(let e=0;e<a;e++)n.TRANSLATION&&c.fromBufferAttribute(n.TRANSLATION,e),n.ROTATION&&l.fromBufferAttribute(n.ROTATION,e),n.SCALE&&d.fromBufferAttribute(n.SCALE,e),t.setMatrixAt(e,u.compose(c,l,d));for(const e in n)if(e==="_COLOR_0"){const s=n[e];t.instanceColor=new Ao(s.array,s.itemSize,s.normalized)}else e!=="TRANSLATION"&&e!=="ROTATION"&&e!=="SCALE"&&s.geometry.setAttribute(e,n[e]);j.prototype.copy.call(t,s),this.parser.assignFinalMaterial(t),o.push(t)}return s.isGroup?(s.clear(),s.add(...o),s):o[0]}))}},Nc="glTF",Cn=12,Rc={JSON:1313821514,BIN:5130562},J1=class{constructor(e){this.name=l.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,Cn),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Nc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Cn,o=new DataView(e,Cn);let t=0;for(;t<i;){const n=o.getUint32(t,!0);t+=4;const i=o.getUint32(t,!0);if(t+=4,i===Rc.JSON){const o=new Uint8Array(e,Cn+t,n);this.content=s.decode(o)}else if(i===Rc.BIN){const s=Cn+t;this.body=e.slice(s,s+n)}t+=n}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},q1=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=l.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,s={},o={},i={};for(const e in n){const t=go[e]||e.toLowerCase();s[t]=n[e]}for(const t in e.attributes){const s=go[t]||t.toLowerCase();if(n[t]!==void 0){const n=a.accessors[e.attributes[t]],r=Rt[n.componentType];i[s]=r.name,o[s]=n.normalized===!0}}return t.getDependency("bufferView",c).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(const t in e.attributes){const s=e.attributes[t],n=o[t];n!==void 0&&(s.normalized=n)}t(e)},s,i,z,n)})})}},K1=class{constructor(){this.name=l.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},W1=class{constructor(){this.name=l.KHR_MESH_QUANTIZATION}},Vc=class extends Tn{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const n=this.resultBuffer,s=this.sampleValues,t=this.valueSize,o=e*t*3+t;for(let e=0;e!==t;e++)n[e]=s[o+e];return n}interpolate_(e,t,n,s){const h=this.resultBuffer,a=this.sampleValues,o=this.valueSize,g=o*2,d=o*3,l=s-t,i=(n-t)/l,r=i*i,u=r*i,c=e*d,m=c-d,f=-2*u+3*r,p=u-r,v=1-f,b=p-r+i;for(let e=0;e!==o;e++){const t=a[m+e+o],n=a[m+e+g]*l,s=a[c+e+o],i=a[c+e]*l;h[e]=v*t+b*n+f*s+p*i}return h}},I1=new Ye,R1=class extends Vc{interpolate_(e,t,n,s){const o=super.interpolate_(e,t,n,s);return I1.fromArray(o).normalize().toArray(o),o}},G={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rt={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},qc={9728:M,9729:V,9984:za,9985:ks,9986:On,9987:_e},Yc={33071:Te,33648:fs,10497:qt},vo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},go={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ie={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},p1={CUBICSPLINE:void 0,LINEAR:on,STEP:Dn},fo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Of(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new hi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Oe})),e.DefaultMaterial}function Et(e,t,n){for(const s in n.extensions)e[s]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=n.extensions[s])}function Pe(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Ef(e,t,n){let s=!1,o=!1,i=!1;for(let e=0,a=t.length;e<a;e++){const n=t[e];if(n.POSITION!==void 0&&(s=!0),n.NORMAL!==void 0&&(o=!0),n.COLOR_0!==void 0&&(i=!0),s&&o&&i)break}if(!s&&!o&&!i)return Promise.resolve(e);const a=[],r=[],c=[];for(let d=0,u=t.length;d<u;d++){const l=t[d];if(s){const t=l.POSITION!==void 0?n.getDependency("accessor",l.POSITION):e.attributes.position;a.push(t)}if(o){const t=l.NORMAL!==void 0?n.getDependency("accessor",l.NORMAL):e.attributes.normal;r.push(t)}if(i){const t=l.COLOR_0!==void 0?n.getDependency("accessor",l.COLOR_0):e.attributes.color;c.push(t)}}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(c)]).then(function(t){const n=t[0],a=t[1],r=t[2];return s&&(e.morphAttributes.position=n),o&&(e.morphAttributes.normal=a),i&&(e.morphAttributes.color=r),e.morphTargetsRelative=!0,e})}function kf(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,s=t.weights.length;n<s;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,s=n.length;t<s;t++)e.morphTargetDictionary[n[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Af(e){let t;const n=e.extensions&&e.extensions[l.KHR_DRACO_MESH_COMPRESSION];if(n?t="draco:"+n.bufferView+":"+n.indices+":"+sl(n.attributes):t=e.indices+":"+sl(e.attributes)+":"+e.mode,e.targets!==void 0)for(let n=0,s=e.targets.length;n<s;n++)t+=":"+sl(e.targets[n]);return t}function sl(e){let n="";const t=Object.keys(e).sort();for(let s=0,o=t.length;s<o;s++)n+=t[s]+":"+e[t[s]]+";";return n}function ol(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ff(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data:image\/ktx2/)===0?"image/ktx2":"image/png"}a1=new i,o1=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new L8,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,o=-1,s=!1,i=-1;if(typeof navigator!="undefined"){const e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;const t=e.match(/Version\/(\d+)/);o=n&&t?parseInt(t[1],10):-1,s=e.indexOf("Firefox")>-1,i=s?e.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&o<17||s&&i<98?this.textureLoader=new Ia(this.options.manager):this.textureLoader=new E4(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(t){const i={scene:t[0][s.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:s.asset,parser:n,userData:{}};return Et(o,i,s),Pe(i,s),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(i)})).then(function(){for(const e of i.scenes)e.updateMatrixWorld();e(i)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,o=t.length;n<o;n++){const s=t[n].joints;for(let t=0,n=s.length;t<n;t++)e[s[t]].isBone=!0}for(let s=0,o=e.length;s<o;s++){const t=e[s];t.mesh!==void 0&&(this._addNodeRef(this.meshCache,t.mesh),t.skin!==void 0&&(n[t.mesh].isSkinnedMesh=!0)),t.camera!==void 0&&this._addNodeRef(this.cameraCache,t.camera)}}_addNodeRef(e,t){if(t===void 0)return;e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),o=(e,t)=>{const n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(const[n,s]of e.children.entries())o(s,t.children[n])};return o(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const o=e(t[s]);o&&n.push(o)}return n}getDependency(e,t){const s=e+":"+t;let n=this.cache.get(s);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case"mesh":n=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(s,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(t,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[l.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(e,o){n.load(bn.resolveURL(t.uri,s.path),e,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){const s=t.byteLength||0,n=t.byteOffset||0;return e.slice(n,n+s)})}loadAccessor(e){const s=this,o=this.json,t=this.json.accessors[e];if(t.bufferView===void 0&&t.sparse===void 0){const e=vo[t.type],n=Rt[t.componentType],s=t.normalized===!0,o=new n(t.count*e);return Promise.resolve(new T(o,e,s))}const n=[];return t.bufferView!==void 0?n.push(this.getDependency("bufferView",t.bufferView)):n.push(null),t.sparse!==void 0&&(n.push(this.getDependency("bufferView",t.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",t.sparse.values.bufferView))),Promise.all(n).then(function(e){const l=e[0],n=vo[t.type],r=Rt[t.componentType],d=r.BYTES_PER_ELEMENT,m=d*n,u=t.byteOffset||0,a=t.bufferView!==void 0?o.bufferViews[t.bufferView].byteStride:void 0,h=t.normalized===!0;let c,i;if(a&&a!==m){const o=Math.floor(u/a),m="InterleavedBuffer:"+t.bufferView+":"+t.componentType+":"+o+":"+t.count;let e=s.cache.get(m);e||(c=new r(l,o*a,t.count*a/d),e=new pr(c,a/d),s.cache.add(m,e)),i=new ni(e,n,u%a/d,h)}else l===null?c=new r(t.count*n):c=new r(l,u,t.count*n),i=new T(c,n,h);if(t.sparse!==void 0){const a=vo.SCALAR,c=Rt[t.sparse.indices.componentType],d=t.sparse.indices.byteOffset||0,u=t.sparse.values.byteOffset||0,o=new c(e[1],d,t.sparse.count*a),s=new r(e[2],u,t.sparse.count*n);l!==null&&(i=new T(i.array.slice(),i.itemSize,i.normalized)),i.normalized=!1;for(let e=0,a=o.length;e<a;e++){const t=o[e];if(i.setX(t,s[e*n]),n>=2&&i.setY(t,s[e*n+1]),n>=3&&i.setZ(t,s[e*n+2]),n>=4&&i.setW(t,s[e*n+3]),n>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}i.normalized=h}return i})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e],n=a.source,s=t.images[n];let o=this.textureLoader;if(s.uri){const e=i.manager.getHandler(s.uri);e!==null&&(o=e)}return this.loadTextureImage(e,n,o)}loadTextureImage(e,t,n){const c=this,o=this.json,i=o.textures[e],s=o.images[t],a=(s.uri||s.bufferView)+":"+i.sampler;if(this.textureCache[a])return this.textureCache[a];const r=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=i.name||s.name||"",t.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(t.name=s.uri);const a=o.samplers||{},n=a[i.sampler]||{};return t.magFilter=qc[n.magFilter]||V,t.minFilter=qc[n.minFilter]||_e,t.wrapS=Yc[n.wrapS]||qt,t.wrapT=Yc[n.wrapT]||qt,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==M&&t.minFilter!==V,c.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[a]=r,r}loadImageSource(e,t){const r=this,c=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());const n=c.images[e],o=self.URL||self.webkitURL;let s=n.uri||"",i=!1;if(n.bufferView!==void 0)s=r.getDependency("bufferView",n.bufferView).then(function(e){i=!0;const t=new Blob([e],{type:n.mimeType});return s=o.createObjectURL(t),s});else if(n.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const a=Promise.resolve(s).then(function(e){return new Promise(function(n,s){let o=n;t.isImageBitmapLoader===!0&&(o=function(e){const t=new B(e);t.needsUpdate=!0,n(t)}),t.load(bn.resolveURL(e,l.path),o,void 0,s)})}).then(function(e){return i===!0&&o.revokeObjectURL(s),Pe(e,n),e.userData.mimeType=n.mimeType||Ff(n.uri),e}).catch(function(e){throw console.error("THREE.GLTFLoader: Couldn't load texture",s),e});return this.sourceCache[e]=a,a}assignTexture(e,t,n,s){const o=this;return this.getDependency("texture",n.index).then(function(i){if(!i)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(i=i.clone(),i.channel=n.texCoord),o.extensions[l.KHR_TEXTURE_TRANSFORM]){const e=n.extensions!==void 0?n.extensions[l.KHR_TEXTURE_TRANSFORM]:void 0;if(e){const t=o.associations.get(i);i=o.extensions[l.KHR_TEXTURE_TRANSFORM].extendTexture(i,e),o.associations.set(i,t)}}return s!==void 0&&(i.colorSpace=s),e[t]=i,i})}assignFinalMaterial(e){const n=e.geometry;let t=e.material;const s=n.attributes.tangent===void 0,o=n.attributes.color!==void 0,i=n.attributes.normal===void 0;if(e.isPoints){const n="PointsMaterial:"+t.uuid;let e=this.cache.get(n);e||(e=new Fr,re.prototype.copy.call(e,t),e.color.copy(t.color),e.map=t.map,e.sizeAttenuation=!1,this.cache.add(n,e)),t=e}else if(e.isLine){const n="LineBasicMaterial:"+t.uuid;let e=this.cache.get(n);e||(e=new Ho,re.prototype.copy.call(e,t),e.color.copy(t.color),e.map=t.map,this.cache.add(n,e)),t=e}if(s||o||i){let n="ClonedMaterial:"+t.uuid+":";s&&(n+="derivative-tangents:"),o&&(n+="vertex-colors:"),i&&(n+="flat-shading:");let e=this.cache.get(n);e||(e=t.clone(),o&&(e.vertexColors=!0),i&&(e.flatShading=!0),s&&(e.normalScale&&(e.normalScale.y*=-1),e.clearcoatNormalScale&&(e.clearcoatNormalScale.y*=-1)),this.cache.add(n,e),this.associations.set(e,this.associations.get(t))),t=e}e.material=t}getMaterialType(){return hi}loadMaterial(e){const a=this,u=this.json,c=this.extensions,t=u.materials[e];let r;const n={},h=t.extensions||{},i=[];if(h[l.KHR_MATERIALS_UNLIT]){const e=c[l.KHR_MATERIALS_UNLIT];r=e.getMaterialType(),i.push(e.extendParams(n,t,a))}else{const o=t.pbrMetallicRoughness||{};if(n.color=new s(1,1,1),n.opacity=1,Array.isArray(o.baseColorFactor)){const e=o.baseColorFactor;n.color.setRGB(e[0],e[1],e[2],z),n.opacity=e[3]}o.baseColorTexture!==void 0&&i.push(a.assignTexture(n,"map",o.baseColorTexture,E)),n.metalness=o.metallicFactor!==void 0?o.metallicFactor:1,n.roughness=o.roughnessFactor!==void 0?o.roughnessFactor:1,o.metallicRoughnessTexture!==void 0&&(i.push(a.assignTexture(n,"metalnessMap",o.metallicRoughnessTexture)),i.push(a.assignTexture(n,"roughnessMap",o.metallicRoughnessTexture))),r=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),i.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,n)})))}t.doubleSided===!0&&(n.side=se);const d=t.alphaMode||fo.OPAQUE;if(d===fo.BLEND?(n.transparent=!0,n.depthWrite=!1):(n.transparent=!1,d===fo.MASK&&(n.alphaTest=t.alphaCutoff!==void 0?t.alphaCutoff:.5)),t.normalTexture!==void 0&&r!==qe&&(i.push(a.assignTexture(n,"normalMap",t.normalTexture)),n.normalScale=new o(1,1),t.normalTexture.scale!==void 0)){const e=t.normalTexture.scale;n.normalScale.set(e,e)}if(t.occlusionTexture!==void 0&&r!==qe&&(i.push(a.assignTexture(n,"aoMap",t.occlusionTexture)),t.occlusionTexture.strength!==void 0&&(n.aoMapIntensity=t.occlusionTexture.strength)),t.emissiveFactor!==void 0&&r!==qe){const e=t.emissiveFactor;n.emissive=(new s).setRGB(e[0],e[1],e[2],z)}return t.emissiveTexture!==void 0&&r!==qe&&i.push(a.assignTexture(n,"emissiveMap",t.emissiveTexture,E)),Promise.all(i).then(function(){const s=new r(n);return t.name&&(s.name=t.name),Pe(s,t),a.associations.set(s,{materials:e}),t.extensions&&Et(c,s,t),s})}createUniqueName(e){const t=v.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,o=this.extensions,s=this.primitiveCache;function i(e){return o[l.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return s1(n,e,t)})}const n=[];for(let a=0,d=e.length;a<d;a++){const o=e[a],r=Af(o),c=s[r];if(c)n.push(c.promise);else{let e;o.extensions&&o.extensions[l.KHR_DRACO_MESH_COMPRESSION]?e=i(o):e=s1(new ne,o,t),s[r]={primitive:o,promise:e},n.push(e)}}return Promise.all(n)}loadMesh(e){const n=this,a=this.json,o=this.extensions,t=a.meshes[e],s=t.primitives,i=[];for(let e=0,t=s.length;e<t;e++){const n=s[e].material===void 0?Of(this.cache):this.getDependency("material",s[e].material);i.push(n)}return i.push(n.loadGeometries(s)),Promise.all(i).then(function(i){const l=i.slice(0,i.length-1),c=i[i.length-1],a=[];for(let h=0,m=c.length;h<m;h++){const d=c[h],r=s[h];let i;const u=l[h];if(r.mode===G.TRIANGLES||r.mode===G.TRIANGLE_STRIP||r.mode===G.TRIANGLE_FAN||r.mode===void 0)i=t.isSkinnedMesh===!0?new Pu(d,u):new P(d,u),i.isSkinnedMesh===!0&&i.normalizeSkinWeights(),r.mode===G.TRIANGLE_STRIP?i.geometry=X3(i.geometry,dr):r.mode===G.TRIANGLE_FAN&&(i.geometry=X3(i.geometry,ii));else if(r.mode===G.LINES)i=new b1(d,u);else if(r.mode===G.LINE_STRIP)i=new ws(d,u);else if(r.mode===G.LINE_LOOP)i=new j1(d,u);else if(r.mode===G.POINTS)i=new C1(d,u);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+r.mode);Object.keys(i.geometry.morphAttributes).length>0&&kf(i,t),i.name=n.createUniqueName(t.name||"mesh_"+e),Pe(i,t),r.extensions&&Et(o,i,r),n.assignFinalMaterial(i),a.push(i)}for(let t=0,s=a.length;t<s;t++)n.associations.set(a[t],{meshes:e,primitives:t});if(a.length===1)return t.extensions&&Et(o,a[0],t),a[0];const r=new st;t.extensions&&Et(o,r,t),n.associations.set(r,{meshes:e});for(let e=0,t=a.length;e<t;e++)r.add(a[e]);return r})}loadCamera(e){let s;const n=this.json.cameras[e],t=n[n.type];if(!t){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?s=new N(td.radToDeg(t.yfov),t.aspectRatio||1,t.znear||1,t.zfar||2e6):n.type==="orthographic"&&(s=new ps(-t.xmag,t.xmag,t.ymag,-t.ymag,t.znear,t.zfar)),n.name&&(s.name=this.createUniqueName(n.name)),Pe(s,n),Promise.resolve(s)}loadSkin(e){const t=this.json.skins[e],n=[];for(let e=0,s=t.joints.length;e<s;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(e){const n=e.pop(),s=e,o=[],a=[];for(let e=0,c=s.length;e<c;e++){const r=s[e];if(r){o.push(r);const t=new i;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[e])}return new $u(o,a)})}loadAnimation(e){const r=this.json,c=this,t=r.animations[e],l=t.name?t.name:"animation_"+e,n=[],s=[],o=[],i=[],a=[];for(let r=0,d=t.channels.length;r<d;r++){const l=t.channels[r],e=t.samplers[l.sampler],c=l.target,u=c.node,h=t.parameters!==void 0?t.parameters[e.input]:e.input,m=t.parameters!==void 0?t.parameters[e.output]:e.output;if(c.node===void 0)continue;n.push(this.getDependency("node",u)),s.push(this.getDependency("accessor",h)),o.push(this.getDependency("accessor",m)),i.push(e),a.push(c)}return Promise.all([Promise.all(n),Promise.all(s),Promise.all(o),Promise.all(i),Promise.all(a)]).then(function(e){const t=e[0],s=e[1],o=e[2],i=e[3],a=e[4],n=[];for(let e=0,d=t.length;e<d;e++){const r=t[e],u=s[e],h=o[e],m=i[e],f=a[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();const l=c._createAnimationTracks(r,u,h,m,f);if(l)for(let e=0;e<l.length;e++)n.push(l[e])}return new Z1(l,void 0,n)})}createNodeMesh(e){const s=this.json,n=this,t=s.nodes[e];return t.mesh===void 0?null:n.getDependency("mesh",t.mesh).then(function(e){const s=n._getNodeRef(n.meshCache,t.mesh,e);return t.weights!==void 0&&s.traverse(function(e){if(!e.isMesh)return;for(let n=0,s=t.weights.length;n<s;n++)e.morphTargetInfluences[n]=t.weights[n]}),s})}loadNode(e){const i=this.json,t=this,n=i.nodes[e],a=t._loadNodeShallow(e),s=[],o=n.children||[];for(let e=0,n=o.length;e<n;e++)s.push(t.getDependency("node",o[e]));const r=n.skin===void 0?Promise.resolve(null):t.getDependency("skin",n.skin);return Promise.all([a,Promise.all(s),r]).then(function(e){const t=e[0],n=e[1],s=e[2];s!==null&&t.traverse(function(e){if(!e.isSkinnedMesh)return;e.bind(s,a1)});for(let e=0,s=n.length;e<s;e++)t.add(n[e]);return t})}_loadNodeShallow(e){const a=this.json,r=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const t=a.nodes[e],c=t.name?n.createUniqueName(t.name):"",s=[],o=n._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return o&&s.push(o),t.camera!==void 0&&s.push(n.getDependency("camera",t.camera).then(function(e){return n._getNodeRef(n.cameraCache,t.camera,e)})),n._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){s.push(e)}),this.nodeCache[e]=Promise.all(s).then(function(s){let o;if(t.isBone===!0?o=new vl:s.length>1?o=new st:s.length===1?o=s[0]:o=new j,o!==s[0])for(let e=0,t=s.length;e<t;e++)o.add(s[e]);if(t.name&&(o.userData.name=t.name,o.name=c),Pe(o,t),t.extensions&&Et(r,o,t),t.matrix!==void 0){const e=new i;e.fromArray(t.matrix),o.applyMatrix4(e)}else t.translation!==void 0&&o.position.fromArray(t.translation),t.rotation!==void 0&&o.quaternion.fromArray(t.rotation),t.scale!==void 0&&o.scale.fromArray(t.scale);return n.associations.has(o)||n.associations.set(o,{}),n.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){const a=this.extensions,t=this.json.scenes[e],s=this,n=new st;t.name&&(n.name=s.createUniqueName(t.name)),Pe(n,t),t.extensions&&Et(a,n,t);const o=t.nodes||[],i=[];for(let e=0,t=o.length;e<t;e++)i.push(s.getDependency("node",o[e]));return Promise.all(i).then(function(e){for(let t=0,s=e.length;t<s;t++)n.add(e[t]);const t=e=>{const t=new Map;for(const[e,n]of s.associations)(e instanceof re||e instanceof B)&&t.set(e,n);return e.traverse(e=>{const n=s.associations.get(e);n!=null&&t.set(e,n)}),t};return s.associations=t(n),n})}_createAnimationTracks(e,t,n,s,o){const r=[],c=e.name?e.name:e.uuid,a=[];Ie[o.path]===Ie.weights?e.traverse(function(e){e.morphTargetInfluences&&a.push(e.name?e.name:e.uuid)}):a.push(c);let i;switch(Ie[o.path]){case Ie.weights:i=xt;break;case Ie.rotation:i=Ct;break;case Ie.translation:case Ie.scale:i=vt;break;default:switch(n.itemSize){case 1:i=xt;break;case 2:case 3:default:i=vt;break}break}const l=s.interpolation!==void 0?p1[s.interpolation]:on,d=this._getArrayFromAccessor(n);for(let e=0,c=a.length;e<c;e++){const n=new i(a[e]+"."+Ie[o.path],t.array,d,l);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(n),r.push(n)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ol(t.constructor),e=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)e[s]=t[s]*n;t=e}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const n=this instanceof Ct?R1:Vc;return new n(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Df(t,n,s){const r=n.attributes,o=new ge;if(r.POSITION!==void 0){const t=s.json.accessors[r.POSITION],n=t.min,i=t.max;if(n!==void 0&&i!==void 0){if(o.set(new e(n[0],n[1],n[2]),new e(i[0],i[1],i[2])),t.normalized){const e=ol(Rt[t.componentType]);o.min.multiplyScalar(e),o.max.multiplyScalar(e)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=n.targets;if(i!==void 0){const n=new e,t=new e;for(let e=0,a=i.length;e<a;e++){const o=i[e];if(o.POSITION!==void 0){const e=s.json.accessors[o.POSITION],i=e.min,a=e.max;if(i!==void 0&&a!==void 0){if(t.setX(Math.max(Math.abs(i[0]),Math.abs(a[0]))),t.setY(Math.max(Math.abs(i[1]),Math.abs(a[1]))),t.setZ(Math.max(Math.abs(i[2]),Math.abs(a[2]))),e.normalized){const n=ol(Rt[e.componentType]);t.multiplyScalar(n)}n.max(t)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(n)}t.boundingBox=o;const a=new le;o.getCenter(a.center),a.radius=o.min.distanceTo(o.max)/2,t.boundingSphere=a}function s1(e,t,n){const s=t.attributes,o=[];function i(t,s){return n.getDependency("accessor",t).then(function(t){e.setAttribute(s,t)})}for(const t in s){const n=go[t]||t.toLowerCase();if(n in e.attributes)continue;o.push(i(s[t],n))}if(t.indices!==void 0&&!e.index){const s=n.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});o.push(s)}return u.workingColorSpace!==z&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${u.workingColorSpace}" not supported.`),Pe(e,t),Df(e,t,n),Promise.all(o).then(function(){return t.targets!==void 0?Ef(e,t.targets,n):e})}Z=9,Ju="toggleLight",rl="switchLights",Wu="redrawLights",ll={material:a6("/images/Tile.svg"),height:24,width:24},bu={landscape:{callback:s6,args:[ll,{width:0,height:.8,left:3/4,bottom:0,distance:12,rotateX:35}]},portrait:{callback:o6,args:[ll,{width:.9,height:0,left:0,bottom:3/4,distance:12,rotateX:35}]}},dl={landscape:[{left:0,bottom:0,width:3/4,height:1,name:"GroundView"},{left:3/4,bottom:0,width:1/4,height:1,name:"AllView"}],portrait:[{left:0,bottom:0,width:1,height:2/3,name:"GroundView"},{left:0,bottom:2/3,width:1,height:1/3,name:"AllView"}]};function Vt(){h.clear(),te="portrait",h.domElement.parentNode.clientWidth>h.domElement.parentNode.clientHeight&&(te="landscape");const e=h.domElement.parentNode.clientWidth,t=h.domElement.parentNode.clientHeight;ze.left=-e/2,ze.right=e/2,ze.top=t/2,ze.bottom=-t/2,ze.updateProjectionMatrix();for(let s=0;s<R[te].length;++s){if(R[te][s].camera===void 0)continue;const n=R[te][s],a=Math.floor(e*n.left),r=Math.floor(t*n.bottom),o=Math.floor(e*n.width),i=Math.floor(t*n.height);if(n.pxLeft=a,n.pxBottom=r,n.pxWidth=o,n.pxHeight=i,h.setViewport(a,r,o,i),h.setScissor(a,r,o,i),h.setScissorTest(!0),n.camera.aspect=o/i,n.camera.updateProjectionMatrix(),h.clear(),h.render(we,n.camera),Es!==null&&te in Es&&s+1<R[te].length){const n=Es[te];Jf(n,De,e,t)}}h.clearDepth(),h.setViewport(0,0,e,t),h.setScissor(0,0,e,t),h.setScissorTest(!0),h.render(De,ze)}function Jf(e,t,n,s){for(;De.children.length>0;)De.remove(De.children[0]);if(e.callback!==void 0||e.callback!==null){let t=[];(e.args!==void 0||e.args!==null)&&(t=e.args),js=e.callback(n,s,...t)}else if("sprite"in e)Array.isArray(js)?js=e.sprite:js=[e.sprite];else{console.log("Divider sprite or callback not set!");return}js.forEach(e=>{e!=null?De.add(e):console.log("Sprite is undefined or null!")})}function e6(e,t,n,s,i){e===null&&console.log("Model canvas is null!"),n==null?R=dl:R=n,s==null?Es=null:Es=s;const c=new G3;we=new ur,c.load(t,function(e){const t=e.scene;e.scene.traverse(e=>{e.isMesh&&!e.name.startsWith("Sphere")?(e.castShadow=!0,e.receiveShadow=!0,e.material.side=se):e.isLight&&(e.intensity=100,e.decay=3,e.castShadow=!0,e.shadow.bias=1e-4)}),["portrait","landscape"].forEach(n=>{for(let s=0;s<R[n].length;s++)e.cameras.forEach(e=>{e.name==R[n][s].name&&(h.compile(t,e,we),R[n][s].camera=e,R[n][s].raycaster=new V4,R[n][s].mouse=new o(1,1))})}),we.add(t),Vt(),i!==void 0&&i()},function(){},function(e){console.log("An error happened",e)}),h=new oh({canvas:e,antialias:!0});const l=window.devicePixelRatio||1;h.setPixelRatio(l);const a=h.domElement.parentNode.clientWidth,r=h.domElement.parentNode.clientHeight;h.setSize(a,r),h.toneMapping=$a,h.toneMappingExposure=1,h.shadowMap.enabled=!0,h.shadowMap.type=he,h.autoClear=!1,ze=new ps(-a/2,a/2,r/2,-r/2,1,10),ze.position.z=10,De=new ur,De.background=null,De.add(ze),window.addEventListener("resize",()=>{h.setSize(e.parentNode.clientWidth,e.parentNode.clientHeight),Vt()});function d(e){e.preventDefault();for(let s=0;s<R[te].length;s++){const t=R[te][s],a=t.mouse,o=e.target.getBoundingClientRect(),n={x:e.clientX-o.left,y:e.clientY-o.top};if(n.x<t.pxLeft||n.x>t.pxWidth+t.pxLeft||n.y>o.height-t.pxBottom||n.y<o.height-(t.pxBottom+t.pxHeight))continue;const r={x:n.x-t.pxLeft,y:n.y-(o.height-(t.pxBottom+t.pxHeight))};a.x=r.x/t.pxWidth*2-1,a.y=-(r.y/t.pxHeight)*2+1;const i=R[te][s].raycaster;i.setFromCamera(a,R[te][s].camera),"debug"in t&&t.debug&&(oo!==null&&we.remove(oo),oo=new Y4(i.ray.direction,i.ray.origin,2,16776960),we.add(oo),Vt());for(let e=1;e<Z+1;e++){const t="Sphere"+String(e).padStart(3,"0"),n=we.getObjectByName(t);let s=i.intersectObject(n,!0);s.length>0&&(ud(e),Vt())}}}h.domElement.addEventListener("click",d,!1),h.domElement.addEventListener(Ju,e=>{const t=e.detail;if(t>Z||t<1)return;ud(t),Vt()}),h.domElement.addEventListener(rl,e=>{const t=e.detail;if(!Array.isArray(t)||t.length!=Z)return;for(let e=1;e<Z+1;e++){const n=t[e-1];["Spot","Sphere"].forEach(t=>{const s=t+String(e).padStart(3,"0"),o=we.getObjectByName(s);o.visible=n})}Vt()}),h.domElement.addEventListener(Wu,()=>{Vt()}),e.scene=we}function ud(e){["Spot","Sphere"].forEach(t=>{const s=t+String(e).padStart(3,"0"),n=we.getObjectByName(s);n.visible==!1?n.visible=!0:n.visible=!1})}function n6(e,t){t=Math.round(t);var n=new Array(Z).fill(!1);for(let e=0;e<t;e++)n[e]=!0;e.dispatchEvent(new CustomEvent(rl,{detail:n}))}function s6(e,t,n,s){const i=[];let o;s.rotateX?o=n.height*s.rotateX*(Math.PI/180):o=n.height;const a=Math.floor(t*s.height/(o+s.distance)),r=e*s.left-n.width/2,c=Math.floor((t-t*s.height)/2);for(let d=0;d<a;d++){const l=new cl(n.material),u=d*(o+s.distance)+c;l.center.set(0,-1),l.scale.set(n.width,o,1),l.position.set(...dd(e,t,r,u),1),i.push(l)}return i}function o6(e,t,n,s){const i=[];let o;s.rotateX?o=n.height*s.rotateX*(Math.PI/180):o=n.height;const a=Math.floor(e*s.width/(n.width+s.distance)),r=t*s.bottom-o/2,c=Math.floor((e-e*s.width)/2);for(let d=0;d<a;d++){const l=new cl(n.material),u=d*(o+s.distance)+c;l.center.set(-2,2),l.scale.set(n.width,o,1),l.position.set(...dd(e,t,u,r),1),i.push(l)}return i}function dd(e,t,n,s){return[-(e/2)+n,-(t/2)+s]}function a6(e){var n,t=(new Ia).load(e);return t.colorSpace=E,n=new br({map:t,color:16777215,fog:!0}),n}yl={wheel:{function:u6,args:[]},touch:{function:h6,args:[]}},Ze=Z,no=Z;function d6(e,t,n){(n==null)&&(n=yl),Array.isArray(t)?t.forEach(t=>{n[t].function(e,...n[t].args)}):n[t].function(e,...n[t].args)}function u6(e){e.addEventListener("wheel",function(t){const n=Ze+t.deltaY*-.05;n<=Z&&n>=0&&(Ze=n),id(e,Ze),t.preventDefault()},{passive:!0})}function h6(e,t){function n(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}if(n()){let a=function(){n[0]<s[0]?o[0]=!0:o[0]=!1,n[1]<s[1]?o[1]=!0:o[1]=!1},i=function(e){e.preventDefault(),n=[],t!=null&&t.classList.remove("hide")};t!=null&&t.classList.remove("hide");let n=[],s=[],o=new Array(2);const r=.8;e.addEventListener("touchstart",function(e){e.preventDefault();const o=e.changedTouches[0];n=[parseInt(o.pageX),parseInt(o.pageY)],s=[parseInt(o.pageX),parseInt(o.pageY)],t!=null&&t.classList.add("hide")},{passive:!0}),e.addEventListener("touchcancel",i),e.addEventListener("touchend",i),e.addEventListener("touchmove",function(t){const l=e.clientWidth*r/Z,c=t.changedTouches[0];s=[parseInt(c.pageX),parseInt(c.pageY)];const d=Math.sqrt((s[0]-n[0])**2+(s[1]-n[1])**2);var i;a(),o[0]?i=Ze-d/l:i=Ze+d/l,i<0?i=0:i>Z&&(i=Z),i<=Z&&i>=0&&(Ze=i),no!=Math.round(Ze)&&(n=[parseInt(c.pageX),parseInt(c.pageY)]),id(e,Ze)},{passive:!0}),console.log("Touch events registred")}else t!=null&&t.classList.add("hide")}function id(e,t){const n=Math.round(t);no!=n&&(n6(e,n),no=n)}eo={handjet:"1em Handjet","special-elite":"1em Special Elite"},kl=["left","right","up","down"],Sl=20,Jl=255/100*Sl,document.addEventListener("DOMContentLoaded",function(){Zl=new bd.default(getComputedStyle(document.body).getPropertyValue("--background-color"))});function j6(e,t,n){var s;n===void 0?s=`${e}/${t}`:s=`${e}/${t}/${n}`;const o=document.getElementById(s);return o!==null&&"slug"in o.dataset&&(s=o.dataset.slug),s}function y6(e){for(const t of kl)if(t in e.dataset){const n=()=>{const n=e.dataset[t];console.log(`Scrolling to ${n}`);const s=document.getElementById(n);return s.scrollIntoView({behavior:"smooth"}),!1};document.querySelectorAll(`nav.stack-switcher a:has(.${t})`).forEach(e=>{e.classList.remove("hidden"),e.onclick=n})}else document.querySelectorAll(`nav.stack-switcher a:has(.${t})`).forEach(e=>{e.classList.add("hidden")})}function _6(e){if("jump"in e.dataset){const t=e.dataset.jump,n=document.getElementById(t);n.scrollIntoView({behavior:"smooth"}),console.log(`Jumping to ${t}`)}}function w6(e){function t(e,t){const n=e.lightness();return e.lightness(n+t)}e.forEach(e=>{var s=(1-e.intersectionRatio)*100*(Sl/100);const o=t(Zl,s);if(e.target.classList.contains("__inserted")||(e.target.style.backgroundColor=o),!e.isIntersecting||!e.target.classList.contains("card"))return;let n=1;if(e.rootBounds.height<e.target.offsetHeight||e.rootBounds.width<e.target.offsetWidth){if(e.intersectionRect.width<e.target.parentNode.getBoundingClientRect().width)return;if(e.intersectionRect.height<e.rootBounds.height-e.rootBounds.height/20)return;const t=e.boundingClientRect.width*e.boundingClientRect.height,s=e.intersectionRect.width*e.intersectionRect.height;n=(s/t).toFixed(6),e.target.dataset.ratio=n}e.intersectionRatio.toFixed(6)==n?(e.target.classList.add("active"),window.location.hash=j6(e.target.dataset.col,e.target.dataset.row),y6(e.target),e.target!=null&&e.target.classList.contains("__inserted")?_6(e.target):e.target==null&&console.log("Card intersect got no target!")):e.intersectionRatio<1&&e.target.classList.contains("active")?(e.target.classList.remove("active"),e.target.classList.add("previous")):e.target.classList.contains("previous")&&e.target.classList.remove("previous")})}function O6(e){var t=document.getElementById(e);return t==null&&(t=document.querySelector(`*[data-slug='${e}']`)),t}function x6(e){if(e.target.href===void 0)return;var t=e.target.href.split("#")[1],n=O6(t);e.preventDefault(),document.querySelector(".menu .burger-menu-button").checked=!1,n.scrollIntoView({behavior:"smooth"})}function C6(e){let t=[];for(let n=1;n<=e;n++){let s=n/e;t.push(s)}return t.push(0),t}function E6(e,t,n){function v(e){return Array.from(e.querySelectorAll(".card")).reduce((e,t)=>e+t.getBoundingClientRect().height,0)}var s,o,a,r,l,d,u,h,g,b,j,y,p=document.querySelector(e),f=0,m=0,c=0,i=[];p.querySelectorAll(t).forEach(e=>{var t,s=e.querySelectorAll(n),o=s.length,a=v(e);c++,o>m&&(m=o),a>f&&(f=a),i[c-1]={cards:o,height:a},console.log(`Cards ${o}, Overall height: ${a}`),e.dataset.col=c,e.hasAttribute("id")||e.setAttribute("id",`${c}`);for(t=0;t<s.length;t++)s[t].dataset.row=t+1,s[t].dataset.col=c,s[t].hasAttribute("id")||s[t].setAttribute("id",`${c}/${t+1}`)});for(s=0;s<i.length;s++){let e=function(e){const t=document.getElementById(e);return!(t!=null&&t.classList.contains("__inserted"))&&(t!=null||(console.log(`Next element for id ${e} is null!`),!1))};if(h=p.querySelectorAll(t)[s],i[s].cards<m){const e=m-i[s].cards;for(l=0;l<e;l++)r=document.createElement(n),r.classList.add("__inserted"),r.classList.add("card"),r.dataset.row=i[s].cards+1+l,r.dataset.col=s+1,r.setAttribute("id",`${s+1}/${i[s].cards+1+l}`),i.length>s+1?u=`${s+2}/1`:u="1/1",r.dataset.jump=u,r.dataset.down=u,r.dataset.right=u,h.appendChild(r),i[s].height=v(h)}for(a=h.querySelectorAll(n),o=0;o<a.length;o++){if(a[o].classList.contains("__inserted"))continue;if(o>0){const e=`${s+1}/${o}`;a[o].dataset.up=e}if(o+1<a.length){const t=`${s+1}/${o+2}`;e(t)&&(a[o].dataset.down=t)}else if(o+1==a.length&&s+1<c){const t=`${s+2}/1`;e(t)&&(a[o].dataset.down=t),console.log(`Reached end for ${s}/${o} => ${t}`)}if(s+1<c){const t=`${s+2}/${o+1}`;e(t)&&(a[o].dataset.right=t)}if(s>0){const t=`${s}/${o+1}`;e(t)&&(a[o].dataset.left=t)}}}if(window.getComputedStyle(p).getPropertyValue("display")!="grid")for(d=0;d<i.length;d++)i[d].height<f&&(b=f-i[d].height,g=p.querySelectorAll(t)[d].querySelector(`${n}:last-child`),j=g.getBoundingClientRect().height,y=j+b,g.style.height=`${y}px`)}function k6(e){if(e===void 0){for(const t of kl)e+=`nav.stack-switcher .${t},`;e=e.substring(0,e.length-1)}document.querySelectorAll(e).forEach(e=>{e.classList.add("hidden")}),document.addEventListener("scroll",()=>{document.querySelectorAll(e).forEach(e=>{e.classList.add("hidden")})})}function A6(e,t){(e==null||e=="")&&(e=document.querySelector("html").getAttribute("lang")),t===void 0&&(t="menu.lang-switch");const n=document.querySelector(t),p=n.querySelector(".inactive"),u=1e3,l=1e4;let r=null,c=null,s=null;function f(e){for(var t=(new Date).getTime();t+e>=(new Date).getTime(););}const o=e=>{e.preventDefault(),console.log("Captured click")};function d(){this.removeEventListener("click",o),console.log("removed click blocker")}const a=()=>{clearTimeout(r),clearTimeout(c),n.querySelectorAll(".lang.inactive a").forEach(e=>{e.addEventListener("click",o)}),"ontouchstart"in document.body?n.querySelectorAll(".lang a").forEach(e=>{e.addEventListener("touchstart",i,{once:!0,capture:!0})}):n.querySelectorAll(".lang a").forEach(e=>{e.addEventListener("mousedown",i,{once:!0,capture:!0})})};function h(){n.classList.remove("expanded"),n.classList.remove("pressed"),this!==void 0&&this!==null&&s!==null&&(this.removeEventListener("mouseup",s),this.removeEventListener("touchcancel",s),s=null),a()}const i=e=>{function i(){n.classList.remove("pressed"),console.log("Firing generated event"),e.target.removeEventListener("click",o);const t=new CustomEvent("click");e.target.fireEvent(t)}e.preventDefault(),e.stopImmediatePropagation();let t=e.target;return console.log("Detected press"),n.classList.add("pressed"),s=i.bind(e.target),t.addEventListener("mouseup",s),t.addEventListener("touchcancel",s),r=setTimeout(m.bind(t),u),!1};function m(){this.removeEventListener("mouseup",s),this.removeEventListener("touchcancel",s);const e=d.bind(this),t=()=>{e(),console.log("mouse out")};this.addEventListener("mouseup",t=>{t.preventDefault(),e(),console.log("mouseup")}),this.addEventListener("touchcancel",clickRemover),this.addEventListener("mouseout",t);let o=this;console.log("Detected long press"),n.classList.add("expanded"),n.classList.remove("pressed"),c=setTimeout(h.bind(this),l)}a(),n.querySelectorAll(`li`).forEach(t=>{if(Array.from(t.classList).some(e=>["active","inactive"].includes(e)))return;var n=t.innerText||t.textContent;n.toUpperCase()==e.toUpperCase()?t.classList.add("active"):t.classList.add("inactive")})}function S6(){const e={".card .post-body":{class:"text-focus-in",duration:1e3}};Object.keys(e).forEach(t=>{document.querySelectorAll(t).forEach(n=>{Kf(n,()=>{n.classList.add(e[t].class),setTimeout(()=>{n.classList.remove(e[t].class)},e[t].duration)})})})}function M6(){document.querySelectorAll("#menu a").forEach(e=>{e.addEventListener("click",x6)}),document.querySelector("input.burger-menu-button").addEventListener("click",e=>{if(e.target.checked&&document.querySelector(".card.active")!==null)e.target.dataset.caller=document.querySelector(".card.active").id,e.target.setAttribute("aria-expanded","true"),document.body.classList.add("noscroll");else{e.target.setAttribute("aria-expanded","false"),document.body.classList.remove("noscroll");var t=document.getElementById(e.target.dataset.caller);t!=null?t.scrollIntoView({behavior:"smooth"}):console.log("Last active card is null!")}})}function F6(){var e,t=[];function n(){if(document.fonts)for(const e in eo)document.fonts.check(eo[e])&&document.querySelector("body").classList.add(`${e}-loaded`);e&&clearInterval(e)}for(const e in eo)t.push(setTimeout(()=>{document.querySelector("body").classList.add(`${e}-loaded`)},3e3));e=setInterval(n,200)}function T6(e,t){const n=document.querySelector(e),s=n.querySelectorAll(t).length;if(window.getComputedStyle(n).getPropertyValue("display")=="grid"){const t=window.getComputedStyle(n).getPropertyValue("grid-template-columns");if(t.split(" ").length!=s){const t=`repeat(${s}, calc(100vw - 1rem))`;console.log(`Setting grid-template-column on ${e} to ${t}`),n.style.gridTemplateColumns=t}}return s}function z6(){const e="hdr-notice";if(!ju()){if(console.log("Browser doesn't support HDR images!"),fl.get(e)=="true")return;document.querySelector("#hdr-warning").style.display="block",document.querySelectorAll("#hdr-warning .close, #hdr-warning .button").forEach(t=>{t.addEventListener("click",function(){fl.set(e,"true",{expires:7,path:"",sameSite:"Strict"}),document.getElementById("hdr-warning").classList.add("hidden")})})}}function D6(){window.addEventListener("resize",()=>{console.log(`Resized window to ${window.innerWidth}x${window.innerHeight}`)})}Ql="/gtlf/model-uncompressed.glb",Xl="#renderer",window.checkHDR=ju,document.addEventListener("DOMContentLoaded",function(){F6(),E6(".cards",".stack","section");let n=new IntersectionObserver(w6,{root:null,rootMargin:"0px",threshold:C6(Jl)});if(k6(),M6(),A6(),document.querySelectorAll("section").forEach(e=>{n.observe(e)}),T6(".cards",".stack"),D6(),z6(),Xs=document.querySelector(Xl),Xs!==null){e6(Xs,Ql,dl,bu);const e=yl;e.touch.args=[document.querySelector("#touch-indicator")],d6(Xs,["wheel","touch"],e)}if(S6(),window.location.hash!==""){var e,t=document.querySelector(`*[data-slug='${window.location.hash}']`);t!==null&&"id"in t?e=t.id:e=window.location.hash,console.log(`Init: Moving to ${e}`)}})})()
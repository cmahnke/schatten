/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

js-cookie/dist/js.cookie.mjs:
  (*! js-cookie v3.0.5 | MIT *)
*/"use strict";(()=>{d6=class{static DEFAULT_COLORSPACE="rec2100-hlg";static SDR_MULTIPLIER=2**16-1;static COLORSPACES={"rec2100-hlg":"rec2100hlg","display-p3":"p3",srgb:"sRGB","rec2100-pq":"rec2100pq"};data;height;width;constructor(e,t){this.height=t,this.width=e}static fromImageData(){throw new Error("Method not implemented!")}static fromImageDataArray(){throw new Error("Method not implemented!")}static async loadSDRImageData(e){return fetch(e).then(e=>e.blob()).then(e=>createImageBitmap(e)).then(e=>{const{width:t,height:n}=e,o=new OffscreenCanvas(t,n),s=o.getContext("2d");return s.drawImage(e,0,0),s.getImageData(0,0,t,n)})}getPixel(e,t){const n=(t*this.width+e)*4;return this.data.slice(n,n+4)}setPixel(e,t,n){const s=(t*this.width+e)*4;this.data[s+0]=n[0],this.data[s+1]=n[1],this.data[s+2]=n[2],this.data[s+3]=n[3]}clone(){const e=Object.create(Object.getPrototypeOf(this));return Object.assign(e,this),e}};function _(e,t){let s=e.length;Array.isArray(e[0])||(e=[e]),Array.isArray(t[0])||(t=t.map(e=>[e]));let o=t[0].length,i=t[0].map((e,n)=>t.map(e=>e[n])),n=e.map(e=>i.map(t=>{let n=0;if(!Array.isArray(e)){for(let s of t)n+=e*s;return n}for(let s=0;s<e.length;s++)n+=e[s]*(t[s]||0);return n}));return s===1&&(n=n[0]),o===1?n.map(e=>e[0]):n}function xo(e){return _t(e)==="string"}function _t(e){let t=Object.prototype.toString.call(e);return(t.match(/^\[object\s+(.*?)\]$/)[1]||"").toLowerCase()}function ko(e,{precision:t,unit:n}){return Ot(e)?"none":tu(e,t)+(n??"")}function Ot(e){return Number.isNaN(e)||e instanceof Number&&e?.none}function k(e){return Ot(e)?0:e}function tu(e,t){if(e===0)return 0;let n=~~e,s=0;n&&t&&(s=~~Math.log10(Math.abs(n))+1);const o=10**(t-s);return Math.floor(e*o+.5)/o}ru={deg:1,grad:.9,rad:180/Math.PI,turn:360};function cu(e){if(!e)return;e=e.trim();const n=/^([a-z]+)\((.+?)\)$/i,s=/^-?[\d.]+$/,o=/%|deg|g?rad|turn$/,i=/\/?\s*(none|[-\w.]+(?:%|deg|g?rad|turn)?)/g;let t=e.match(n);if(t){let e=[];return t[2].replace(i,(t,n)=>{let a=n.match(o),i=n;if(a){let e=a[0],t=i.slice(0,-e.length);e==="%"?(i=new Number(t/100),i.type="<percentage>"):(i=new Number(t*ru[e]),i.type="<angle>",i.unit=e)}else s.test(i)?(i=new Number(i),i.type="<number>"):i==="none"&&(i=new Number(NaN),i.none=!0);t.startsWith("/")&&(i=i instanceof Number?i:new Number(i),i.alpha=!0),typeof i=="object"&&i instanceof Number&&(i.raw=n),e.push(i)}),{name:t[1].toLowerCase(),rawName:t[1],rawArgs:t[2],args:e}}}function du(e){return e[e.length-1]}function vo(e,t,n){return isNaN(e)?t:isNaN(t)?e:e+(t-e)*n}function hu(e,t,n){return(n-e)/(t-e)}function Fd(e,t,n){return vo(t[0],t[1],hu(e[0],e[1],n))}function mu(e){return e.map(e=>e.split("|").map(e=>{e=e.trim();let t=e.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);if(t){let e=new String(t[1]);return e.range=[+t[2],+t[3]],e}return e}))}function fu(e,t,n){return Math.max(Math.min(n,t),e)}function No(e,t){return Math.sign(e)===Math.sign(t)?e:-e}function He(e,t){return No((e<0?-e:e)**t,e)}function kd(e,t){return t===0?0:e/t}function bu(e,t,n=0,s=e.length){for(;n<s;){const o=n+s>>1;e[o]<t?n=o+1:s=o}return n}ju=Object.freeze({__proto__:null,bisectLeft:bu,clamp:fu,copySign:No,interpolate:vo,interpolateInv:hu,isNone:Ot,isString:xo,last:du,mapRange:Fd,multiplyMatrices:_,parseCoordGrammar:mu,parseFunction:cu,serializeNumber:ko,skipNone:k,spow:He,toPrecision:tu,type:_t,zdiv:kd}),_u=class{add(e,t,n){if(typeof arguments[0]!="string"){for(var e in arguments[0])this.add(e,arguments[0][e],arguments[1]);return}(Array.isArray(e)?e:[e]).forEach(function(e){this[e]=this[e]||[],t&&this[e][n?"unshift":"push"](t)},this)}run(e,t){this[e]=this[e]||[],this[e].forEach(function(e){e.call(t&&t.context?t.context:t,t)})}},it=new _u,ie={gamut_mapping:"css",precision:5,deltaE:"76",verbose:globalThis?.process?.env?.NODE_ENV?.toLowerCase()!=="test",warn:function(t){this.verbose&&globalThis?.console?.warn?.(t)}},B={D50:[.3457/.3585,1,(1-.3457-.3585)/.3585],D65:[.3127/.329,1,(1-.3127-.329)/.329]};function _d(e){return Array.isArray(e)?e:B[e]}function Po(e,t,n,s={}){if(e=_d(e),t=_d(t),!e||!t)throw new TypeError(`Missing white point to convert ${e?"":"from"}${!e&&!t?"/":""}${t?"":"to"}`);if(e===t)return n;let o={W1:e,W2:t,XYZ:n,options:s};if(it.run("chromatic-adaptation-start",o),o.M||(o.W1===B.D65&&o.W2===B.D50?o.M=[[1.0479297925449969,.022946870601609652,-.05019226628920524],[.02962780877005599,.9904344267538799,-.017073799063418826],[-.009243040646204504,.015055191490298152,.7518742814281371]]:o.W1===B.D50&&o.W2===B.D65&&(o.M=[[.955473421488075,-.02309845494876471,.06325924320057072],[-.0283697093338637,1.0099953980813041,.021041441191917323],[.012314014864481998,-.020507649298898964,1.330365926242124]])),it.run("chromatic-adaptation-end",o),o.M)return _(o.M,o.XYZ);throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.")}xu=new Set(["<number>","<percentage>","<angle>"]);function Cu(e,t,n,s){let o=Object.entries(e.coords).map(([e,o],i)=>{let d=t.coordGrammar[i],r=s[i],c=r?.type,a;if(r.none?a=d.find(e=>xu.has(e)):a=d.find(e=>e==c),!a){let t=o.name||e;throw new TypeError(`${c??r.raw} not allowed for ${t} in ${n}()`)}let l=a.range;c==="<percentage>"&&(l||=[0,1]);let u=o.range||o.refRange;return l&&u&&(s[i]=Fd(l,u,s[i])),a});return o}function ku(e,{meta:t}={}){let n={str:String(e)?.trim()};if(it.run("parse-start",n),n.color)return n.color;if(n.parsed=cu(n.str),n.parsed){{let e=n.parsed.name;if(e==="color"){let e=n.parsed.args.shift(),o=e.startsWith("--")?e.substring(2):`--${e}`,i=[e,o],c=n.parsed.rawArgs.indexOf("/")>0?n.parsed.args.pop():1;for(let a of s.all){let o=a.getFormat("color");if(o&&(i.includes(o.id)||o.ids?.filter(e=>i.includes(e)).length)){const s=Object.keys(a.coords).map((e,t)=>n.parsed.args[t]||0);let i;return o.coordGrammar&&(i=Cu(a,o,"color",s)),t&&Object.assign(t,{formatId:"color",types:i}),o.id.startsWith("--")&&!e.startsWith("--")&&ie.warn(`${a.name} is a non-standard space and not currently supported in the CSS spec. Use prefixed color(${o.id}) instead of color(${e}).`),e.startsWith("--")&&!o.id.startsWith("--")&&ie.warn(`${a.name} is a standard space and supported in the CSS spec. Use color(${o.id}) instead of prefixed color(${e}).`),{spaceId:a.id,coords:s,alpha:c}}}let a="",r=e in s.registry?e:o;if(r in s.registry){let e=s.registry[r].formats?.color?.id;e&&(a=`Did you mean color(${e})?`)}throw new TypeError(`Cannot parse color(${e}). `+(a||"Missing a plugin?"))}for(let i of s.all){let o=i.getFormat(e);if(o&&o.type==="function"){let s=1;(o.lastAlpha||du(n.parsed.args).alpha)&&(s=n.parsed.args.pop());let a=n.parsed.args,r;return o.coordGrammar&&(r=Cu(i,o,e,a)),t&&Object.assign(t,{formatId:o.name,types:r}),{spaceId:i.id,coords:a,alpha:s}}}}}else for(let e of s.all)for(let i in e.formats){let s=e.formats[i];if(s.type!=="custom")continue;if(s.test&&!s.test(n.str))continue;let o=s.parse(n.str);if(o)return o.alpha??=1,t&&(t.formatId=i),o}throw new TypeError(`Could not parse ${e} as a color. Missing a plugin?`)}function l(e){if(Array.isArray(e))return e.map(l);if(!e)throw new TypeError("Empty color reference");xo(e)&&(e=ku(e));let t=e.space||e.spaceId;return t instanceof s||(e.space=s.get(t)),e.alpha===0[0]&&(e.alpha=1),e}l1=75e-6,s=class _ColorSpace{constructor(e){this.id=e.id,this.name=e.name,this.base=e.base?_ColorSpace.get(e.base):null,this.aliases=e.aliases,this.base&&(this.fromBase=e.fromBase,this.toBase=e.toBase);let t=e.coords??this.base.coords;for(let e in t)"name"in t[e]||(t[e].name=e);this.coords=t;let n=e.white??this.base.white??"D65";this.white=_d(n),this.formats=e.formats??{};for(let e in this.formats){let t=this.formats[e];t.type||="function",t.name||=e}this.formats.color?.id||(this.formats.color={...this.formats.color??{},id:e.cssId||this.id}),e.gamutSpace?this.gamutSpace=e.gamutSpace==="self"?this:_ColorSpace.get(e.gamutSpace):this.isPolar?this.gamutSpace=this.base:this.gamutSpace=this,this.gamutSpace.isUnbounded&&(this.inGamut=()=>!0),this.referred=e.referred,Object.defineProperty(this,"path",{value:Sp(this).reverse(),writable:!1,enumerable:!0,configurable:!0}),it.run("colorspace-init-end",this)}inGamut(e,{epsilon:t=l1}={}){if(!this.equals(this.gamutSpace))return e=this.to(this.gamutSpace,e),this.gamutSpace.inGamut(e,{epsilon:t});let n=Object.values(this.coords);return e.every((e,s)=>{let o=n[s];if(o.type!=="angle"&&o.range){if(Number.isNaN(e))return!0;let[n,s]=o.range;return(n===0[0]||e>=n-t)&&(s===0[0]||e<=s+t)}return!0})}get isUnbounded(){return Object.values(this.coords).every(e=>!("range"in e))}get cssId(){return this.formats?.color?.id||this.id}get isPolar(){for(let e in this.coords)if(this.coords[e].type==="angle")return!0;return!1}getFormat(e){if(typeof e=="object")return e=d1(e,this),e;let t;return e==="default"?t=Object.values(this.formats)[0]:t=this.formats[e],t?(t=d1(t,this),t):null}equals(e){return!!e&&(this===e||this.id===e||this.id===e.id)}to(e,t){if(arguments.length===1){const n=l(e);[e,t]=[n.space,n.coords]}if(e=_ColorSpace.get(e),this.equals(e))return t;t=t.map(e=>Number.isNaN(e)?0:e);let n=this.path,s=e.path,i,o;for(let e=0;e<n.length;e++)if(n[e].equals(s[e]))i=n[e],o=e;else break;if(!i)throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);for(let e=n.length-1;e>o;e--)t=n[e].toBase(t);for(let e=o+1;e<s.length;e++)t=s[e].fromBase(t);return t}from(e,t){if(arguments.length===1){const n=l(e);[e,t]=[n.space,n.coords]}return e=_ColorSpace.get(e),e.to(this,t)}toString(){return`${this.name} (${this.id})`}getMinCoords(){let e=[];for(let n in this.coords){let t=this.coords[n],s=t.range||t.refRange;e.push(s?.min??0)}return e}static registry={};static get all(){return[...new Set(Object.values(_ColorSpace.registry))]}static register(e,t){if(arguments.length===1&&(t=arguments[0],e=t.id),t=this.get(t),this.registry[e]&&this.registry[e]!==t)throw new Error(`Duplicate color space registration: '${e}'`);if(this.registry[e]=t,arguments.length===1&&t.aliases)for(let e of t.aliases)this.register(e,t);return t}static get(e,...t){if(!e||e instanceof _ColorSpace)return e;let n=_t(e);if(n==="string"){let t=_ColorSpace.registry[e.toLowerCase()];if(!t)throw new TypeError(`No color space found with id = "${e}"`);return t}if(t.length)return _ColorSpace.get(...t);throw new TypeError(`${e} is not a valid color space`)}static resolveCoord(e,t){let o=_t(e),n,s;if(o==="string"?e.includes(".")?[n,s]=e.split("."):[n,s]=[,e]:Array.isArray(e)?[n,s]=e:(n=e.space,s=e.coordId),n=_ColorSpace.get(n),n||(n=t),!n)throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);if(o=_t(s),o==="number"||o==="string"&&s>=0){let e=Object.entries(n.coords)[s];if(e)return{space:n,id:e[0],index:s,...e[1]}}n=_ColorSpace.get(n);let i=s.toLowerCase(),a=0;for(let e in n.coords){let t=n.coords[e];if(e.toLowerCase()===i||t.name?.toLowerCase()===i)return{space:n,id:e,index:a,...t};a++}throw new TypeError(`No "${s}" coordinate found in ${n.name}. Its coordinates are: ${Object.keys(n.coords).join(", ")}`)}static DEFAULT_FORMAT={type:"functions",name:"color"}};function Sp(e){let t=[e];for(let n=e;n=n.base;)t.push(n);return t}function d1(e,{coords:t}={}){if(e.coords&&!e.coordGrammar){e.type||="function",e.name||="color",e.coordGrammar=mu(e.coords);let n=Object.entries(t).map(([t,n],s)=>{let o=e.coordGrammar[s][0],r=n.range||n.refRange,a=o.range,i="";return o=="<percentage>"?(a=[0,100],i="%"):o=="<angle>"&&(i="deg"),{fromRange:r,toRange:a,suffix:i}});e.serializeCoords=(e,t)=>e.map((e,s)=>{let{fromRange:o,toRange:i,suffix:a}=n[s];return o&&i&&(e=Fd(o,i,e)),e=ko(e,{precision:t,unit:a}),e})}return e}N=new s({id:"xyz-d65",name:"XYZ D65",coords:{x:{name:"X"},y:{name:"Y"},z:{name:"Z"}},white:"D65",formats:{color:{ids:["xyz-d65","xyz"]}},aliases:["xyz"]}),G=class extends s{constructor(e){e.coords||(e.coords={r:{range:[0,1],name:"Red"},g:{range:[0,1],name:"Green"},b:{range:[0,1],name:"Blue"}}),e.base||(e.base=N),e.toXYZ_M&&e.fromXYZ_M&&(e.toBase??=t=>{let n=_(e.toXYZ_M,t);return this.white!==this.base.white&&(n=Po(this.white,this.base.white,n)),n},e.fromBase??=t=>(t=Po(this.base.white,this.white,t),_(e.fromXYZ_M,t))),e.referred??="display",super(e)}};function ao(e,t){return e=l(e),!t||e.space.equals(t)?e.coords.slice():(t=s.get(t),t.from(e))}function he(e,t){e=l(e);let{space:n,index:o}=s.resolveCoord(t,e.space),i=ao(e,n);return i[o]}function gd(e,t,n){return e=l(e),t=s.get(t),e.coords=t.to(e.space,n),e}gd.returns="color";function dt(e,t,n){if(e=l(e),arguments.length===2&&_t(arguments[1])==="object"){let t=arguments[1];for(let n in t)dt(e,n,t[n])}else{typeof n=="function"&&(n=n(he(e,t)));let{space:o,index:a}=s.resolveCoord(t,e.space),i=ao(e,o);i[a]=n,gd(e,o,i)}return e}dt.returns="color",Uo=new s({id:"xyz-d50",name:"XYZ D50",white:"D50",base:N,fromBase:e=>Po(N.white,"D50",e),toBase:e=>Po("D50",N.white,e)}),u1=216/24389,ld=24/116,oo=24389/27,Yo=B.D50,J=new s({id:"lab",name:"Lab",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Yo,base:Uo,fromBase(e){let n=e.map((e,t)=>e/Yo[t]),t=n.map(e=>e>u1?Math.cbrt(e):(oo*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200;let n=[t[0]>ld?t[0]**3:(116*t[0]-16)/oo,e[0]>8?((e[0]+16)/116)**3:e[0]/oo,t[2]>ld?t[2]**3:(116*t[2]-16)/oo];return n.map((e,t)=>e*Yo[t])},formats:{lab:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ie(e){return(e%360+360)%360}function Ep(e,t){if(e==="raw")return t;let[s,o]=t.map(Ie),n=o-s;return e==="increasing"?n<0&&(o+=360):e==="decreasing"?n>0&&(s+=360):e==="longer"?-180<n&&n<180&&(n>0?s+=360:o+=360):e==="shorter"&&(n>180?s+=360:n<-180&&(o+=360)),[s,o]}Gn=new s({id:"lch",name:"LCH",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,150],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:J,fromBase(e){let[i,t,n]=e,s;const o=.02;return(t<0?-t:t)<o&&(n<0?-n:n)<o?s=NaN:s=Math.atan2(n,t)*180/Math.PI,[i,(t**2+n**2)**.5,Ie(s)]},toBase(e){let[s,t,n]=e;return t<0&&(t=0),isNaN(n)&&(n=0),[s,t*Math.cos(n*Math.PI/180),t*Math.sin(n*Math.PI/180)]},formats:{lch:{coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),rd=25**7,Zs=Math.PI,od=180/Zs,on=Zs/180;function h1(e){const t=e*e,n=t*t*t*e;return n}function m1(e,t,{kL:n=1,kC:s=1,kH:o=1}={}){[e,t]=l([e,t]);let[w,A,g]=J.from(e),x=Gn.from(J,[w,A,g])[1],[b,z,v]=J.from(t),O=Gn.from(J,[b,z,v])[1];x<0&&(x=0),O<0&&(O=0);let R=(x+O)/2,C=h1(R),F=.5*(1-(C/(C+rd))**.5),y=(1+F)*A,j=(1+F)*z,r=(y**2+g**2)**.5,f=(j**2+v**2)**.5,m=y===0&&g===0?0:Math.atan2(g,y),h=j===0&&v===0?0:Math.atan2(v,j);m<0&&(m+=2*Zs),h<0&&(h+=2*Zs),m*=od,h*=od;let V=b-w,M=f-r,a=h-m,c=m+h,k=a<0?-a:a,u;r*f===0?u=0:k<=180?u=a:a>180?u=a-360:a<-180?u=a+360:ie.warn("the unthinkable has happened");let S=2*(f*r)**.5*Math.sin(u*on/2),P=(w+b)/2,_=(r+f)/2,T=h1(_),i;r*f===0?i=c:k<=180?i=c/2:c<360?i=(c+360)/2:i=(c-360)/2;let D=(P-50)**2,L=1+.015*D/(20+D)**.5,N=1+.045*_,d=1;d-=.17*Math.cos((i-30)*on),d+=.24*Math.cos(2*i*on),d+=.32*Math.cos((3*i+6)*on),d-=.2*Math.cos((4*i-63)*on);let E=1+.015*_*d,H=30*Math.exp(-1*((i-275)/25)**2),I=2*(T/(T+rd))**.5,B=-1*Math.sin(2*H*on)*I,p=(V/(n*L))**2;return p+=(M/(s*N))**2,p+=(S/(o*E))**2,p+=B*(M/(s*N))*(S/(o*E)),p**.5}p1=[[.819022437996703,.3619062600528904,-.1288737815209879],[.0329836539323885,.9292868615863434,.0361446663506424],[.0481771893596242,.2642395317527308,.6335478284694309]],v1=[[1.2268798758459243,-.5578149944602171,.2813910456659647],[-.0405757452148008,1.112286803280317,-.0717110580655164],[-.0763729366746601,-.4214933324022432,1.5869240198367816]],j1=[[.210454268309314,.7936177747023054,-.0040720430116193],[1.9779985324311684,-2.42859224204858,.450593709617411],[.0259040424655478,.7827717124575296,-.8086757549230774]],E1=[[1,.3963377773761749,.2158037573099136],[1,-.1055613458156586,-.0638541728258133],[1,-.0894841775298119,-1.2914855480194092]],qt=new s({id:"oklab",name:"Oklab",coords:{l:{refRange:[0,1],name:"Lightness"},a:{refRange:[-.4,.4]},b:{refRange:[-.4,.4]}},white:"D65",base:N,fromBase(e){let t=_(p1,e),n=t.map(e=>Math.cbrt(e));return _(j1,n)},toBase(e){let t=_(E1,e),n=t.map(e=>e**3);return _(v1,n)},formats:{oklab:{coords:["<percentage> | <number>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}});function Ul(e,t){[e,t]=l([e,t]);let[n,s,o]=qt.from(e),[i,a,r]=qt.from(t),c=n-i,d=s-a,u=o-r;return(c**2+d**2+u**2)**.5}A1=75e-6;function tn(e,t,{epsilon:n=A1}={}){e=l(e),t||(t=e.space),t=s.get(t);let o=e.coords;return t!==e.space&&(o=t.from(e)),t.inGamut(o,{epsilon:n})}function Xn(e){return{space:e.space,coords:e.coords.slice(),alpha:e.alpha}}function S1(e,t,n="lab"){n=s.get(n);let o=n.from(e),i=n.from(t);return o.reduce((e,t,n)=>{let s=i[n];return isNaN(t)||isNaN(s)?e:e+(s-t)**2},0)**.5}function ap(e,t){return S1(e,t,"lab")}T1=Math.PI,Vl=T1/180;function np(e,t,{l:n=2,c:s=1}={}){[e,t]=l([e,t]);let[a,f,h]=J.from(e),[,o,i]=Gn.from(J,[a,f,h]),[p,m,b]=J.from(t),r=Gn.from(J,[p,m,b])[1];o<0&&(o=0),r<0&&(r=0);let C=a-p,u=o-r,O=f-m,w=h-b,_=O**2+w**2-u**2,j=.511;a>=16&&(j=.040975*a/(1+.01765*a));let y=.0638*o/(1+.0131*o)+.638,d;Number.isNaN(i)&&(i=0),i>=164&&i<=345?d=.56+Math.abs(.2*Math.cos((i+168)*Vl)):d=.36+Math.abs(.4*Math.cos((i+35)*Vl));let v=o**4,g=(v/(v+1900))**.5,x=y*(g*d+1-g),c=(C/(n*j))**2;return c+=(u/(s*y))**2,c+=_/x**2,c**.5}Bl=203,hi=new s({id:"xyz-abs-d65",cssId:"--xyz-abs-d65",name:"Absolute XYZ D65",coords:{x:{refRange:[0,9504.7],name:"Xa"},y:{refRange:[0,1e4],name:"Ya"},z:{refRange:[0,10888.3],name:"Za"}},base:N,fromBase(e){return e.map(e=>Math.max(e*Bl,0))},toBase(e){return e.map(e=>Math.max(e/Bl,0))}}),Us=1.15,Ws=.66,Hl=2610/2**14,N1=2**14/2610,Tl=3424/2**12,Fl=2413/2**7,Ml=2392/2**7,L1=1.7*2523/2**5,Al=2**5/(1.7*2523),$s=-.56,ji=16295499532821565e-27,H1=[[.41478972,.579999,.014648],[-.20151,1.120649,.0531008],[-.0166008,.2648,.6684799]],I1=[[1.9242264357876067,-1.0047923125953657,.037651404030618],[.35031676209499907,.7264811939316552,-.06538442294808501],[-.09098281098284752,-.3127282905230739,1.5227665613052603]],$1=[[.5,.5,0],[3.524,-4.066708,.542708],[.199076,1.096799,-1.295875]],U1=[[1,.1386050432715393,.05804731615611886],[.9999999999999999,-.1386050432715393,-.05804731615611886],[.9999999999999998,-.09601924202631895,-.8118918960560388]],xl=new s({id:"jzazbz",name:"Jzazbz",coords:{jz:{refRange:[0,1],name:"Jz"},az:{refRange:[-.5,.5]},bz:{refRange:[-.5,.5]}},base:hi,fromBase(e){let[t,o,n]=e,i=Us*t-(Us-1)*n,a=Ws*o-(Ws-1)*t,r=_(H1,[i,a,n]),c=r.map(function(e){let t=Tl+Fl*(e/1e4)**Hl,n=1+Ml*(e/1e4)**Hl;return(t/n)**L1}),[s,l,d]=_($1,c),u=(1+$s)*s/(1+$s*s)-ji;return[u,l,d]},toBase(e){let[t,o,i]=e,a=(t+ji)/(1+$s-$s*(t+ji)),r=_(U1,[a,o,i]),c=r.map(function(e){let t=Tl-e**Al,n=Ml*e**Al-Fl,s=1e4*(t/n)**N1;return s}),[l,d,n]=_(I1,c),s=(l+(Us-1)*n)/Us,u=(d+(Ws-1)*s)/Ws;return[s,u,n]},formats:{color:{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),yi=new s({id:"jzczhz",name:"JzCzHz",coords:{jz:{refRange:[0,1],name:"Jz"},cz:{refRange:[0,1],name:"Chroma"},hz:{refRange:[0,360],type:"angle",name:"Hue"}},base:xl,fromBase(e){let[i,t,n]=e,s;const o=2e-4;return(t<0?-t:t)<o&&(n<0?-n:n)<o?s=NaN:s=Math.atan2(n,t)*180/Math.PI,[i,(t**2+n**2)**.5,Ie(s)]},toBase(e){return[e[0],e[1]*Math.cos(e[2]*Math.PI/180),e[1]*Math.sin(e[2]*Math.PI/180)]}});function q6(e,t){[e,t]=l([e,t]);let[a,o,n]=yi.from(e),[r,i,s]=yi.from(t),c=a-r,d=o-i;Number.isNaN(n)&&Number.isNaN(s)?(n=0,s=0):Number.isNaN(n)?n=s:Number.isNaN(s)&&(s=n);let u=n-s,h=2*(o*i)**.5*Math.sin(u/2*(Math.PI/180));return(c**2+d**2+h**2)**.5}_l=3424/4096,yl=2413/128,jl=2392/128,bl=2610/16384,a4=2523/32,r4=16384/2610,gl=32/2523,c4=[[.3592832590121217,.6976051147779502,-.035891593232029],[-.1920808463704993,1.100476797037432,.0753748658519118],[.0070797844607479,.0748396662186362,.8433265453898765]],I4=[[2048/4096,2048/4096,0],[6610/4096,-13613/4096,7003/4096],[17933/4096,-17390/4096,-543/4096]],k0=[[.9999999999999998,.0086090370379328,.111029625003026],[.9999999999999998,-.0086090370379328,-.1110296250030259],[.9999999999999998,.5600313357106791,-.3206271749873188]],F0=[[2.0701522183894223,-1.3263473389671563,.2066510476294053],[.3647385209748072,.6805660249472273,-.0453045459220347],[-.0497472075358123,-.0492609666966131,1.1880659249923042]],_i=new s({id:"ictcp",name:"ICTCP",coords:{i:{refRange:[0,1],name:"I"},ct:{refRange:[-.5,.5],name:"CT"},cp:{refRange:[-.5,.5],name:"CP"}},base:hi,fromBase(e){let t=_(c4,e);return K8(t)},toBase(e){let t=r6(e);return _(F0,t)}});function K8(e){let t=e.map(function(e){let t=_l+yl*(e/1e4)**bl,n=1+jl*(e/1e4)**bl;return(t/n)**a4});return _(I4,t)}function r6(e){let t=_(k0,e),n=t.map(function(e){let t=Math.max(e**gl-_l,0),n=yl-jl*e**gl;return 1e4*(t/n)**r4});return n}function Zf(e,t){[e,t]=l([e,t]);let[n,s,o]=_i.from(e),[i,a,r]=_i.from(t);return 720*((n-i)**2+.25*(s-a)**2+(o-r)**2)**.5}b2=B.D65,cl=.42,rl=1/cl,Oi=2*Math.PI,il=[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],lh=[[1.8620678550872327,-1.0112546305316843,.14918677544445175],[.38752654323613717,.6214474419314753,-.008973985167612518],[-.015841498849333856,-.03412293802851557,1.0499644368778496]],Lm=[[460,451,288],[460,-891,-261],[460,-220,-6300]],Bm={dark:[.8,.525,.8],dim:[.9,.59,.9],average:[1,.69,1]},St={h:[20.14,90,164.25,237.53,380.14],e:[.8,.7,1,1.2,.8],H:[0,100,200,300,400]},Wm=180/Math.PI,el=Math.PI/180;function Zm(e,t){const n=e.map(e=>{const n=He(t*(e<0?-e:e)*.01,cl);return 400*No(n,e)/(n+27.13)});return n}function U8(e,t){const n=100/t*27.13**rl;return e.map(e=>{const t=e<0?-e:e;return No(n*He(t/(400-t),rl),e)})}function V8(e){let t=Ie(e);t<=St.h[0]&&(t+=360);const n=bu(St.h,t)-1,[o,i]=St.h.slice(n,n+2),[a,r]=St.e.slice(n,n+2),c=St.H[n],s=(t-o)/a;return c+100*s/(s+(i-t)/r)}function X8(e){let t=(e%400+400)%400;const n=Math.floor(.01*t);t=t%100;const[o,a]=St.h.slice(n,n+2),[i,s]=St.e.slice(n,n+2);return Ie((t*(s*o-i*a)-100*o*s)/(t*(s-i)-100*s))}function Qm(e,t,n,s,o){const i={};i.discounting=o,i.refWhite=e,i.surround=s;const c=e.map(e=>e*100);i.la=t,i.yb=n;const l=c[1],d=_(il,c);s=Bm[i.surround];const u=s[0];i.c=s[1],i.nc=s[2];const h=1/(5*i.la+1),a=h**4;i.fl=a*i.la+.1*(1-a)*(1-a)*Math.cbrt(5*i.la),i.flRoot=i.fl**.25,i.n=i.yb/l,i.z=1.48+i.n**.5,i.nbb=.725*i.n**-.2,i.ncb=i.nbb;const m=Math.max(Math.min(u*(1-1/3.6*Math.exp((-i.la-42)/92)),1),0);i.dRgb=d.map(e=>vo(1,l/e,m)),i.dRgbInv=i.dRgb.map(e=>1/e);const f=d.map((e,t)=>e*i.dRgb[t]),r=Zm(f,i.fl);return i.aW=i.nbb*(2*r[0]+r[1]+.05*r[2]),i}Yc=Qm(b2,64/Math.PI*.2,20,"average",!1);function Uc(e,t){if(!(e.J!==0[0]^e.Q!==0[0]))throw new Error("Conversion requires one and only one: 'J' or 'Q'");if(!(e.C!==0[0]^e.M!==0[0]^e.s!==0[0]))throw new Error("Conversion requires one and only one: 'C', 'M' or 's'");if(!(e.h!==0[0]^e.H!==0[0]))throw new Error("Conversion requires one and only one: 'h' or 'H'");if(e.J===0||e.Q===0)return[0,0,0];let s=0;e.h!==0[0]?s=Ie(e.h)*el:s=X8(e.H)*el;const c=Math.cos(s),a=Math.sin(s);let n=0;e.J!==0[0]?n=He(e.J,1/2)*.1:e.Q!==0[0]&&(n=.25*t.c*e.Q/((t.aW+4)*t.flRoot));let o=0;e.C!==0[0]?o=e.C/n:e.M!==0[0]?o=e.M/t.flRoot/n:e.s!==0[0]&&(o=4e-4*e.s**2*(t.aW+4)/t.c);const r=He(o*(1.64-.29**t.n)**-.73,10/9),d=.25*(Math.cos(s+2)+3.8),u=t.aW*He(n,2/t.c/t.z),h=5e4/13*t.nc*t.ncb*d,i=u/t.nbb,l=23*(i+.305)*kd(r,23*h+r*(11*c+108*a)),m=l*c,f=l*a,p=U8(_(Lm,[i,m,f]).map(e=>e*1/1403),t.fl);return _(lh,p.map((e,n)=>e*t.dRgbInv[n])).map(e=>e/100)}function Xm(e,t){const f=e.map(e=>e*100),n=Zm(_(il,f).map((e,n)=>e*t.dRgb[n]),t.fl),i=n[0]+(-12*n[1]+n[2])/11,c=(n[0]+n[1]-2*n[2])/9,a=(Math.atan2(c,i)%Oi+Oi)%Oi,g=.25*(Math.cos(a+2)+3.8),d=5e4/13*t.nc*t.ncb*kd(g*(i**2+c**2)**.5,n[0]+n[1]+1.05*n[2]+.305),l=He(d,.9)*(1.64-.29**t.n)**.73,u=t.nbb*(2*n[0]+n[1]+.05*n[2]),s=He(u/t.aW,.5*t.c*t.z),h=100*He(s,2),m=4/t.c*s*(t.aW+4)*t.flRoot,o=l*s,p=o*t.flRoot,r=Ie(a*Wm),v=V8(r),b=50*He(t.c*l/(t.aW+4),1/2);return{J:h,C:o,h:r,s:b,Q:m,M:p,H:v}}Gm=new s({id:"cam16-jmh",cssId:"--cam16-jmh",name:"CAM16-JMh",coords:{j:{refRange:[0,100],name:"J"},m:{refRange:[0,105],name:"Colorfulness"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:N,fromBase(e){const t=Xm(e,Yc);return[t.J,t.M,t.h]},toBase(e){return Uc({J:e[0],M:e[1],h:e[2]},Yc)}}),Ym=B.D65,qm=216/24389,Vc=24389/27;function Z8(e){const t=e>qm?Math.cbrt(e):(Vc*e+16)/116;return 116*t-16}function Lc(e){return e>8?((e+16)/116)**3:e/Vc}function ef(e,t){let[i,a,n]=e,o=[],s=0;if(n===0)return[0,0,0];let r=Lc(n);n>0?s=.00379058511492914*n**2+.608983189401032*n+.9155088574762233:s=9514440756550361e-21*n**2+.08693057439788597*n-21.928975842194614;const d=2e-12,u=15;let c=0,l=1/0;for(;c<=u;){o=Uc({J:s,C:a,h:i},t);const e=Math.abs(o[1]-r);if(e<l){if(e<=d)return o;l=e}s=s-(o[1]-r)*s/(2*o[1]),c+=1}return Uc({J:s,C:a,h:i},t)}function nf(e){const n=Z8(e[1]);if(n===0)return[0,0,0];const s=Xm(e,Li);return[Ie(s.h),s.C,n]}Li=Qm(Ym,200/Math.PI*Lc(50),Lc(50)*100,"average",!1),ds=new s({id:"hct",name:"HCT",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},c:{refRange:[0,145],name:"Colorfulness"},t:{refRange:[0,100],name:"Tone"}},base:N,fromBase(e){return nf(e)},toBase(e){return ef(e,Li)},formats:{color:{id:"--hct",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),$m=Math.PI/180,Sc=[1,.007,.0228];function Vm(e){e[1]<0&&(e=ds.fromBase(ds.toBase(e)));const t=Math.log(Math.max(1+Sc[2]*e[1]*Li.flRoot,1))/Sc[2],n=e[0]*$m,s=t*Math.cos(n),o=t*Math.sin(n);return[e[2],s,o]}function lf(e,t){[e,t]=l([e,t]);let[n,s,o]=Vm(ds.from(e)),[i,a,r]=Vm(ds.from(t));return((n-i)**2+(s-a)**2+(o-r)**2)**.5}Pt={deltaE76:ap,deltaECMC:np,deltaE2000:m1,deltaEJz:q6,deltaEITP:Zf,deltaEOK:Ul,deltaEHCT:lf};function df(e){const t=e?Math.floor(Math.log10(e<0?-e:e)):0;return Math.max(parseFloat(`1e${t-2}`),1e-6)}Cc={hct:{method:"hct.c",jnd:2,deltaEMethod:"hct",blackWhiteClamp:{}},"hct-tonal":{method:"hct.c",jnd:0,deltaEMethod:"hct",blackWhiteClamp:{channel:"hct.t",min:0,max:100}}};function zt(e,{method:t=ie.gamut_mapping,space:n=0[0],deltaEMethod:o="",jnd:i=2,blackWhiteClamp:a={}}={}){if(e=l(e),xo(arguments[1])?n=arguments[1]:n||(n=e.space),n=s.get(n),tn(e,n,{epsilon:0}))return e;let r;if(t==="css")r=uf(e,{space:n});else{if(t!=="clip"&&!tn(e,n)){Object.prototype.hasOwnProperty.call(Cc,t)&&({method:t,jnd:i,deltaEMethod:o,blackWhiteClamp:a}=Cc[t]);let c=m1;if(o!=="")for(let e in Pt)if("deltae"+o.toLowerCase()===e.toLowerCase()){c=Pt[e];break}let l=zt(y(e,n),{method:"clip",space:n});if(c(e,l)>i){if(Object.keys(a).length===3){let n=s.resolveCoord(a.channel),t=he(y(e,n.space),n.id);if(Ot(t)&&(t=0),t>=a.max)return y({space:"xyz-d65",coords:B.D65},e.space);if(t<=a.min)return y({space:"xyz-d65",coords:[0,0,0]},e.space)}let l=s.resolveCoord(t),f=l.space,d=l.id,o=y(e,f);o.coords.forEach((e,t)=>{Ot(e)&&(o.coords[t]=0)});let p=l.range||l.refRange,g=p[0],m=df(i),u=g,h=he(o,d);for(;h-u>m;){let e=Xn(o);e=zt(e,{space:n,method:"clip"});let t=c(o,e);t-i<m?u=he(o,d):h=he(o,d),dt(o,d,(u+h)/2)}r=y(o,n)}else r=l}else r=y(e,n);if(t==="clip"||!tn(r,n,{epsilon:0})){let e=Object.values(n.coords).map(e=>e.range||[]);r.coords=r.coords.map((t,n)=>{let[s,o]=e[n];return s!==0[0]&&(t=Math.max(s,t)),o!==0[0]&&(t=Math.min(t,o)),t})}}return n!==e.space&&(r=y(r,e.space)),e.coords=r.coords,e}zt.returns="color",xc={WHITE:{space:qt,coords:[1,0,0]},BLACK:{space:qt,coords:[0,0,0]}};function uf(e,{space:t}={}){const c=.02,u=1e-4;e=l(e),t||(t=e.space),t=s.get(t);const p=s.get("oklch");if(t.isUnbounded)return y(e,t);const o=y(e,p);let h=o.coords[0];if(h>=1){const n=y(xc.WHITE,t);return n.alpha=e.alpha,y(n,t)}if(h<=0){const n=y(xc.BLACK,t);return n.alpha=e.alpha,y(n,t)}if(tn(o,t,{epsilon:0}))return y(o,t);function m(e){const n=y(e,t),s=Object.values(t.coords);return n.coords=n.coords.map((e,t)=>{if("range"in s[t]){const[n,o]=s[t].range;return fu(n,e,o)}return e}),n}let a=0,d=o.coords[1],f=!0,n=Xn(o),i=m(n),r=Ul(i,n);if(r<c)return i;for(;d-a>u;){const e=(a+d)/2;if(n.coords[1]=e,f&&tn(n,t,{epsilon:0}))a=e;else if(i=m(n),r=Ul(i,n),r<c){if(c-r<u)break;f=!1,a=e}else d=e}return i}function y(e,t,{inGamut:n}={}){e=l(e),t=s.get(t);let i=t.from(e),o={space:t,coords:i,alpha:e.alpha};return n&&(o=zt(o,n===!0?0[0]:n)),o}y.returns="color";function Ms(e,{precision:t=ie.precision,format:n="default",inGamut:o=!0,...i}={}){let r;e=l(e);let c=n;n=e.space.getFormat(n)??e.space.getFormat("default")??s.DEFAULT_FORMAT;let a=e.coords.slice();if(o||=n.toGamut,o&&!tn(e)&&(a=zt(Xn(e),o===!0?0[0]:o).coords),n.type==="custom")if(i.precision=t,n.serialize)r=n.serialize(a,e.alpha,i);else throw new TypeError(`format ${c} can only be used to parse colors, not for serialization`);else{let o=n.name||"color";n.serializeCoords?a=n.serializeCoords(a,t):t!==null&&(a=a.map(e=>ko(e,{precision:t})));let i=[...a];if(o==="color"){let t=n.id||n.ids?.[0]||e.space.id;i.unshift(t)}let s=e.alpha;t!==null&&(s=ko(s,{precision:t}));let c=e.alpha>=1||n.noAlpha?"":`${n.commas?",":" /"} ${s}`;r=`${o}(${i.join(n.commas?", ":" ")}${c})`}return r}if(Sm=[[.6369580483012914,.14461690358620832,.1688809751641721],[.2627002120112671,.6779980715188708,.05930171646986196],[0,.028072693049087428,1.060985057710791]],Am=[[1.716651187971268,-.355670783776392,-.25336628137366],[-.666684351832489,1.616481236634939,.0157685458139111],[.017639857445311,-.042770613257809,.942103121235474]],Ts=new G({id:"rec2020-linear",cssId:"--rec2020-linear",name:"Linear REC.2020",white:"D65",toXYZ_M:Sm,fromXYZ_M:Am}),Ds=1.09929682680944,dc=.018053968510807,Fr=new G({id:"rec2020",name:"REC.2020",base:Ts,toBase(e){return e.map(function(e){return e<dc*4.5?e/4.5:((e+Ds-1)/Ds)**(1/.45)})},fromBase(e){return e.map(function(e){return e>=dc?Ds*e**.45-(Ds-1):4.5*e})}}),Om=[[.4865709486482162,.26566769316909306,.1982172852343625],[.2289745640697488,.6917385218365064,.079286914093745],[0,.04511338185890264,1.043944368900976]],ym=[[2.493496911941425,-.9313836179191239,-.40271078445071684],[-.8294889695615747,1.7626640603183463,.023624685841943577],[.03584583024378447,-.07617238926804182,.9568845240076872]],Sr=new G({id:"p3-linear",cssId:"--display-p3-linear",name:"Linear P3",white:"D65",toXYZ_M:Om,fromXYZ_M:ym}),bm=[[.41239079926595934,.357584339383878,.1804807884018343],[.21263900587151027,.715168678767756,.07219231536073371],[.01933081871559182,.11919477979462598,.9505321522496607]],S=[[3.2409699419045226,-1.537383177570094,-.4986107602930034],[-.9692436362808796,1.8759675015077202,.04155505740717559],[.05563007969699366,-.20397695888897652,1.0569715142428786]],Cr=new G({id:"srgb-linear",name:"Linear sRGB",white:"D65",toXYZ_M:bm,fromXYZ_M:S}),wr={aliceblue:[240/255,248/255,1],antiquewhite:[250/255,235/255,215/255],aqua:[0,1,1],aquamarine:[127/255,1,212/255],azure:[240/255,1,1],beige:[245/255,245/255,220/255],bisque:[1,228/255,196/255],black:[0,0,0],blanchedalmond:[1,235/255,205/255],blue:[0,0,1],blueviolet:[138/255,43/255,226/255],brown:[165/255,42/255,42/255],burlywood:[222/255,184/255,135/255],cadetblue:[95/255,158/255,160/255],chartreuse:[127/255,1,0],chocolate:[210/255,105/255,30/255],coral:[1,127/255,80/255],cornflowerblue:[100/255,149/255,237/255],cornsilk:[1,248/255,220/255],crimson:[220/255,20/255,60/255],cyan:[0,1,1],darkblue:[0,0,139/255],darkcyan:[0,139/255,139/255],darkgoldenrod:[184/255,134/255,11/255],darkgray:[169/255,169/255,169/255],darkgreen:[0,100/255,0],darkgrey:[169/255,169/255,169/255],darkkhaki:[189/255,183/255,107/255],darkmagenta:[139/255,0,139/255],darkolivegreen:[85/255,107/255,47/255],darkorange:[1,140/255,0],darkorchid:[153/255,50/255,204/255],darkred:[139/255,0,0],darksalmon:[233/255,150/255,122/255],darkseagreen:[143/255,188/255,143/255],darkslateblue:[72/255,61/255,139/255],darkslategray:[47/255,79/255,79/255],darkslategrey:[47/255,79/255,79/255],darkturquoise:[0,206/255,209/255],darkviolet:[148/255,0,211/255],deeppink:[1,20/255,147/255],deepskyblue:[0,191/255,1],dimgray:[105/255,105/255,105/255],dimgrey:[105/255,105/255,105/255],dodgerblue:[30/255,144/255,1],firebrick:[178/255,34/255,34/255],floralwhite:[1,250/255,240/255],forestgreen:[34/255,139/255,34/255],fuchsia:[1,0,1],gainsboro:[220/255,220/255,220/255],ghostwhite:[248/255,248/255,1],gold:[1,215/255,0],goldenrod:[218/255,165/255,32/255],gray:[128/255,128/255,128/255],green:[0,128/255,0],greenyellow:[173/255,1,47/255],grey:[128/255,128/255,128/255],honeydew:[240/255,1,240/255],hotpink:[1,105/255,180/255],indianred:[205/255,92/255,92/255],indigo:[75/255,0,130/255],ivory:[1,1,240/255],khaki:[240/255,230/255,140/255],lavender:[230/255,230/255,250/255],lavenderblush:[1,240/255,245/255],lawngreen:[124/255,252/255,0],lemonchiffon:[1,250/255,205/255],lightblue:[173/255,216/255,230/255],lightcoral:[240/255,128/255,128/255],lightcyan:[224/255,1,1],lightgoldenrodyellow:[250/255,250/255,210/255],lightgray:[211/255,211/255,211/255],lightgreen:[144/255,238/255,144/255],lightgrey:[211/255,211/255,211/255],lightpink:[1,182/255,193/255],lightsalmon:[1,160/255,122/255],lightseagreen:[32/255,178/255,170/255],lightskyblue:[135/255,206/255,250/255],lightslategray:[119/255,136/255,153/255],lightslategrey:[119/255,136/255,153/255],lightsteelblue:[176/255,196/255,222/255],lightyellow:[1,1,224/255],lime:[0,1,0],limegreen:[50/255,205/255,50/255],linen:[250/255,240/255,230/255],magenta:[1,0,1],maroon:[128/255,0,0],mediumaquamarine:[102/255,205/255,170/255],mediumblue:[0,0,205/255],mediumorchid:[186/255,85/255,211/255],mediumpurple:[147/255,112/255,219/255],mediumseagreen:[60/255,179/255,113/255],mediumslateblue:[123/255,104/255,238/255],mediumspringgreen:[0,250/255,154/255],mediumturquoise:[72/255,209/255,204/255],mediumvioletred:[199/255,21/255,133/255],midnightblue:[25/255,25/255,112/255],mintcream:[245/255,1,250/255],mistyrose:[1,228/255,225/255],moccasin:[1,228/255,181/255],navajowhite:[1,222/255,173/255],navy:[0,0,128/255],oldlace:[253/255,245/255,230/255],olive:[128/255,128/255,0],olivedrab:[107/255,142/255,35/255],orange:[1,165/255,0],orangered:[1,69/255,0],orchid:[218/255,112/255,214/255],palegoldenrod:[238/255,232/255,170/255],palegreen:[152/255,251/255,152/255],paleturquoise:[175/255,238/255,238/255],palevioletred:[219/255,112/255,147/255],papayawhip:[1,239/255,213/255],peachpuff:[1,218/255,185/255],peru:[205/255,133/255,63/255],pink:[1,192/255,203/255],plum:[221/255,160/255,221/255],powderblue:[176/255,224/255,230/255],purple:[128/255,0,128/255],rebeccapurple:[102/255,51/255,153/255],red:[1,0,0],rosybrown:[188/255,143/255,143/255],royalblue:[65/255,105/255,225/255],saddlebrown:[139/255,69/255,19/255],salmon:[250/255,128/255,114/255],sandybrown:[244/255,164/255,96/255],seagreen:[46/255,139/255,87/255],seashell:[1,245/255,238/255],sienna:[160/255,82/255,45/255],silver:[192/255,192/255,192/255],skyblue:[135/255,206/255,235/255],slateblue:[106/255,90/255,205/255],slategray:[112/255,128/255,144/255],slategrey:[112/255,128/255,144/255],snow:[1,250/255,250/255],springgreen:[0,1,127/255],steelblue:[70/255,130/255,180/255],tan:[210/255,180/255,140/255],teal:[0,128/255,128/255],thistle:[216/255,191/255,216/255],tomato:[1,99/255,71/255],turquoise:[64/255,224/255,208/255],violet:[238/255,130/255,238/255],wheat:[245/255,222/255,179/255],white:[1,1,1],whitesmoke:[245/255,245/255,245/255],yellow:[1,1,0],yellowgreen:[154/255,205/255,50/255]},_r=Array(3).fill("<percentage> | <number>[0, 255]"),yr=Array(3).fill("<number>[0, 255]"),Jt=new G({id:"srgb",name:"sRGB",base:Cr,fromBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n>.0031308?t*(1.055*n**(1/2.4)-.055):12.92*e}),toBase:e=>e.map(e=>{let t=e<0?-1:1,n=e*t;return n<=.04045?e/12.92:t*((n+.055)/1.055)**2.4}),formats:{rgb:{coords:_r},rgb_number:{name:"rgb",commas:!0,coords:yr,noAlpha:!0},color:{},rgba:{coords:_r,commas:!0,lastAlpha:!0},rgba_number:{name:"rgba",commas:!0,coords:yr},hex:{type:"custom",toGamut:!0,test:e=>/^#([a-f0-9]{3,4}){1,2}$/i.test(e),parse(e){e.length<=5&&(e=e.replace(/[a-f0-9]/gi,"$&$&"));let t=[];return e.replace(/[a-f0-9]{2}/gi,e=>{t.push(parseInt(e,16)/255)}),{spaceId:"srgb",coords:t.slice(0,3),alpha:t.slice(3)[0]}},serialize:(e,t,{collapse:n=!0}={})=>{t<1&&e.push(t),e=e.map(e=>Math.round(e*255));let s=n&&e.every(e=>e%17===0),o=e.map(e=>s?(e/17).toString(16):e.toString(16).padStart(2,"0")).join("");return"#"+o}},keyword:{type:"custom",test:e=>/^[a-z]+$/i.test(e),parse(e){e=e.toLowerCase();let t={spaceId:"srgb",coords:null,alpha:1};if(e==="transparent"?(t.coords=wr.black,t.alpha=0):t.coords=wr[e],t.coords)return t}}}}),pr=new G({id:"p3",cssId:"display-p3",name:"P3",base:Sr,fromBase:Jt.fromBase,toBase:Jt.toBase}),ie.display_space=Jt,typeof CSS!="undefined"&&CSS.supports)for(let e of[J,Fr,pr]){let t=e.getMinCoords(),n={space:e,coords:t,alpha:1},s=Ms(n);if(CSS.supports("color",s)){ie.display_space=e;break}}function Tf(e,{space:t=ie.display_space,...n}={}){let s=Ms(e,n);if(typeof CSS=="undefined"||CSS.supports("color",s)||!ie.display_space)s=new String(s),s.color=e;else{let o=e,i=e.coords.some(Ot)||Ot(e.alpha);if(i&&!(Ff??=CSS.supports("color","hsl(none 50% 50%)"))&&(o=Xn(e),o.coords=o.coords.map(k),o.alpha=k(o.alpha),s=Ms(o,n),CSS.supports("color",s)))return s=new String(s),s.color=o,s;o=y(o,t),s=new String(Ms(o,n)),s.color=o}return s}function Lf(e,t){return e=l(e),t=l(t),e.space===t.space&&e.alpha===t.alpha&&e.coords.every((e,n)=>e===t.coords[n])}function Mt(e){return he(e,[N,"y"])}function fm(e,t){dt(e,[N,"y"],t)}function Rf(e){Object.defineProperty(e.prototype,"luminance",{get(){return Mt(this)},set(e){fm(this,e)}})}um=Object.freeze({__proto__:null,getLuminance:Mt,register:Rf,setLuminance:fm});function Bf(e,t){e=l(e),t=l(t);let n=Math.max(Mt(e),0),s=Math.max(Mt(t),0);return s>n&&([n,s]=[s,n]),(n+.05)/(s+.05)}lm=.56,nm=.57,tm=.62,em=.65,mr=.022,Jh=1.414,Zh=.1,m2=5e-4,h2=1.14,Or=.027,u2=1.14;function d2(e){return e>=mr?e:e+(mr-e)**Jh}function Fn(e){let t=e<0?-1:1,n=e<0?-e:e;return t*n**2.4}function o6(e,t){t=l(t),e=l(e);let s,n,o,i,a,r;t=y(t,"srgb"),[i,a,r]=t.coords;let u=Fn(i)*.2126729+Fn(a)*.7151522+Fn(r)*.072175;e=y(e,"srgb"),[i,a,r]=e.coords;let h=Fn(i)*.2126729+Fn(a)*.7151522+Fn(r)*.072175,c=d2(u),d=d2(h),m=d>c;return Math.abs(d-c)<m2?n=0:m?(s=d**lm-c**nm,n=s*h2):(s=d**em-c**tm,n=s*u2),(n<0?-n:n)<Zh?o=0:n>0?o=n-Or:o=n+Or,o*100}function a6(e,t){e=l(e),t=l(t);let n=Math.max(Mt(e),0),s=Math.max(Mt(t),0);s>n&&([n,s]=[s,n]);let o=n+s;return o===0?0:(n-s)/o}X0=5e4;function c6(e,t){e=l(e),t=l(t);let s=Math.max(Mt(e),0),n=Math.max(Mt(t),0);return n>s&&([s,n]=[n,s]),n===0?X0:(s-n)/n}function f6(e,t){e=l(e),t=l(t);let n=he(e,[J,"l"]),s=he(t,[J,"l"]);return Math.abs(n-s)}W0=216/24389,Tr=24/116,_o=24389/27,Ua=B.D65,Da=new s({id:"lab-d65",name:"Lab D65",coords:{l:{refRange:[0,100],name:"Lightness"},a:{refRange:[-125,125]},b:{refRange:[-125,125]}},white:Ua,base:N,fromBase(e){let n=e.map((e,t)=>e/Ua[t]),t=n.map(e=>e>W0?Math.cbrt(e):(_o*e+16)/116);return[116*t[1]-16,500*(t[0]-t[1]),200*(t[1]-t[2])]},toBase(e){let t=[];t[1]=(e[0]+16)/116,t[0]=e[1]/500+t[1],t[2]=t[1]-e[2]/200;let n=[t[0]>Tr?t[0]**3:(116*t[0]-16)/_o,e[0]>8?((e[0]+16)/116)**3:e[0]/_o,t[2]>Tr?t[2]**3:(116*t[2]-16)/_o];return n.map((e,t)=>e*Ua[t])},formats:{"lab-d65":{coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),za=5**.5*.5+.5;function r8(e,t){e=l(e),t=l(t);let s=he(e,[Da,"l"]),o=he(t,[Da,"l"]),i=Math.abs(s**za-o**za),n=i**(1/za)*Math.SQRT2-40;return n<7.5?0:n}go=Object.freeze({__proto__:null,contrastAPCA:o6,contrastDeltaPhi:r8,contrastLstar:f6,contrastMichelson:a6,contrastWCAG21:Bf,contrastWeber:c6});function p6(e,t,n={}){xo(n)&&(n={algorithm:n});let{algorithm:s,...o}=n;if(!s){let e=Object.keys(go).map(e=>e.replace(/^contrast/,"")).join(", ");throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${e}`)}e=l(e),t=l(t);for(let n in go)if("contrast"+s.toLowerCase()===n.toLowerCase())return go[n](e,t,o);throw new TypeError(`Unknown contrast algorithm: ${s}`)}function Ea(e){let[t,n,o]=ao(e,N),s=t+15*n+3*o;return[4*t/s,9*n/s]}function P0(e){let[t,n,o]=ao(e,N),s=t+n+o;return[t/s,n/s]}function v6(e){Object.defineProperty(e.prototype,"uv",{get(){return Ea(this)}}),Object.defineProperty(e.prototype,"xy",{get(){return P0(this)}})}z0=Object.freeze({__proto__:null,register:v6,uv:Ea,xy:P0});function ho(e,t,n={}){xo(n)&&(n={method:n});let{method:s=ie.deltaE,...o}=n;for(let n in Pt)if("deltae"+s.toLowerCase()===n.toLowerCase())return Pt[n](e,t,o);throw new TypeError(`Unknown deltaE method: ${s}`)}function b6(e,t=.25){let n=s.get("oklch","lch"),o=[n,"l"];return dt(e,o,e=>e*(1+t))}function y6(e,t=.25){let n=s.get("oklch","lch"),o=[n,"l"];return dt(e,o,e=>e*(1-t))}M0=Object.freeze({__proto__:null,darken:y6,lighten:b6});function S0(e,t,n=.5,s={}){[e,t]=[l(e),l(t)],_t(n)==="object"&&([n,s]=[.5,n]);let o=ro(e,t,s);return o(n)}function A0(e,t,n={}){let o;Gr(e)&&([o,n]=[e,t],[e,t]=o.rangeArgs.colors);let{maxDeltaE:a,deltaEMethod:d,steps:c=2,maxSteps:r=1e3,...u}=n;o||([e,t]=[l(e),l(t)],o=ro(e,t,u));let h=ho(e,t),i=a>0?Math.max(c,Math.ceil(h/a)+1):c,s=[];if(r!==0[0]&&(i=Math.min(i,r)),i===1)s=[{p:.5,color:o(.5)}];else{let e=1/(i-1);s=Array.from({length:i},(t,n)=>{let s=n*e;return{p:s,color:o(s)}})}if(a>0){let e=s.reduce((e,t,n)=>{if(n===0)return 0;let o=ho(t.color,s[n-1].color,d);return Math.max(e,o)},0);for(;e>a;){e=0;for(let t=1;t<s.length&&s.length<r;t++){let i=s[t-1],a=s[t],n=(a.p+i.p)/2,c=o(n);e=Math.max(e,ho(c,i.color),ho(c,a.color)),s.splice(t,0,{p:n,color:o(n)}),t++}}}return s=s.map(e=>e.color),s}function ro(e,t,n={}){if(Gr(e)){let[n,s]=[e,t];return ro(...n.rangeArgs.colors,{...n.rangeArgs.options,...s})}let{space:o,outputSpace:i,progression:a,premultiplied:r}=n;e=l(e),t=l(t),e=Xn(e),t=Xn(t);let c={colors:[e,t],options:n};if(o?o=s.get(o):o=s.registry[ie.interpolationSpace]||e.space,i=i?s.get(i):o,e=y(e,o),t=y(t,o),e=zt(e),t=zt(t),o.coords.h&&o.coords.h.type==="angle"){let r=n.hue=n.hue||"shorter",a=[o,"h"],[s,i]=[he(e,a),he(t,a)];isNaN(s)&&!isNaN(i)?s=i:isNaN(i)&&!isNaN(s)&&(i=s),[s,i]=Ep(r,[s,i]),dt(e,a,s),dt(t,a,i)}return r&&(e.coords=e.coords.map(t=>t*e.alpha),t.coords=t.coords.map(e=>e*t.alpha)),Object.assign(n=>{n=a?a(n):n;let l=e.coords.map((e,s)=>{let o=t.coords[s];return vo(e,o,n)}),c=vo(e.alpha,t.alpha,n),s={space:o,coords:l,alpha:c};return r&&(s.coords=s.coords.map(e=>e/c)),i!==o&&(s=y(s,i)),s},{rangeArgs:c})}function Gr(e){return _t(e)==="function"&&!!e.rangeArgs}ie.interpolationSpace="lab";function _6(e){e.defineFunction("mix",S0,{returns:"color"}),e.defineFunction("range",ro,{returns:"function<color>"}),e.defineFunction("steps",A0,{returns:"array<color>"})}var w6=Object.freeze({__proto__:null,isRange:Gr,mix:S0,range:ro,register:_6,steps:A0}),C0=new s({id:"hsl",name:"HSL",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:Jt,fromBase:e=>{let o=Math.max(...e),l=Math.min(...e),[c,i,a]=e,[t,s,n]=[NaN,0,(l+o)/2],r=o-l;if(r!==0){switch(s=n===0||n===1?0:(o-n)/Math.min(n,1-n),o){case c:t=(i-a)/r+(i<a?6:0);break;case i:t=(a-c)/r+2;break;case a:t=(c-i)/r+4}t=t*60}return s<0&&(t+=180,s=s<0?-s:s),t>=360&&(t-=360),[t,s*100,n*100]},toBase:e=>{let[t,o,n]=e;t=t%360,t<0&&(t+=360),o/=100,n/=100;function s(e){let s=(e+t/30)%12,i=o*Math.min(n,1-n);return n-i*Math.max(-1,Math.min(s-3,9-s,1))}return[s(0),s(8),s(4)]},formats:{hsl:{coords:["<number> | <angle>","<percentage>","<percentage>"]},hsla:{coords:["<number> | <angle>","<percentage>","<percentage>"],commas:!0,lastAlpha:!0}}}),x0=new s({id:"hsv",name:"HSV",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},v:{range:[0,100],name:"Value"}},base:C0,fromBase(e){let[o,s,t]=e;s/=100,t/=100;let n=t+s*Math.min(t,1-t);return[o,n===0?0:200*(1-t/n),100*n]},toBase(e){let[o,s,n]=e;s/=100,n/=100;let t=n*(1-s/2);return[o,t===0||t===1?0:(n-t)/Math.min(t,1-t)*100,t*100]},formats:{color:{id:"--hsv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),O6=new s({id:"hwb",name:"HWB",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},w:{range:[0,100],name:"Whiteness"},b:{range:[0,100],name:"Blackness"}},base:x0,fromBase(e){let[n,s,t]=e;return[n,t*(100-s)/100,100-t]},toBase(e){let[o,t,n]=e;t/=100,n/=100;let i=t+n;if(i>=1){let e=t/i;return[o,0,e*100]}let s=1-n,a=s===0?0:1-t/s;return[o,a*100,s*100]},formats:{hwb:{coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),x6=[[.5766690429101305,.1855582379065463,.1882286462349947],[.29734497525053605,.6273635662554661,.07529145849399788],[.02703136138641234,.07068885253582723,.9913375368376388]],C6=[[2.0415879038107465,-.5650069742788596,-.34473135077832956],[-.9692436362808795,1.8759675015077202,.04155505740717557],[.013444280632031142,-.11836239223101838,1.0151749943912054]],y0=new G({id:"a98rgb-linear",cssId:"--a98-rgb-linear",name:"Linear Adobe\xAE 98 RGB compatible",white:"D65",toXYZ_M:x6,fromXYZ_M:C6}),E6=new G({id:"a98rgb",cssId:"a98-rgb",name:"Adobe\xAE 98 RGB compatible",base:y0,toBase:e=>e.map(e=>(e<0?-e:e)**(563/256)*Math.sign(e)),fromBase:e=>e.map(e=>(e<0?-e:e)**(256/563)*Math.sign(e))}),k6=[[.7977666449006423,.13518129740053308,.0313477341283922],[.2880748288194013,.711835234241873,8993693872564e-17],[0,0,.8251046025104602]],A6=[[1.3457868816471583,-.25557208737979464,-.05110186497554526],[-.5446307051249019,1.5082477428451468,.02052744743642139],[0,0,1.2119675456389452]],f0=new G({id:"prophoto-linear",cssId:"--prophoto-rgb-linear",name:"Linear ProPhoto",white:"D50",base:Uo,toXYZ_M:k6,fromXYZ_M:A6}),S6=1/512,T6=16/512,z6=new G({id:"prophoto",cssId:"prophoto-rgb",name:"ProPhoto",base:f0,toBase(e){return e.map(e=>e<T6?e/16:e**1.8)},fromBase(e){return e.map(e=>e>=S6?e**(1/1.8):16*e)}}),D6=new s({id:"oklch",name:"Oklch",coords:{l:{refRange:[0,1],name:"Lightness"},c:{refRange:[0,.4],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},white:"D65",base:qt,fromBase(e){let[i,t,n]=e,s;const o=2e-4;return(t<0?-t:t)<o&&(n<0?-n:n)<o?s=NaN:s=Math.atan2(n,t)*180/Math.PI,[i,(t**2+n**2)**.5,Ie(s)]},toBase(e){let[i,o,t]=e,n,s;return isNaN(t)?(n=0,s=0):(n=o*Math.cos(t*Math.PI/180),s=o*Math.sin(t*Math.PI/180)),[i,n,s]},formats:{oklch:{coords:["<percentage> | <number>","<number> | <percentage>[0,1]","<number> | <angle>"]}}}),n0=B.D65,N6=216/24389,e0=24389/27,[J4,Y4]=Ea({space:N,coords:n0}),W4=new s({id:"luv",name:"Luv",coords:{l:{refRange:[0,100],name:"Lightness"},u:{refRange:[-215,215]},v:{refRange:[-215,215]}},white:n0,base:N,fromBase(e){let s=[k(e[0]),k(e[1]),k(e[2])],t=s[1],[o,i]=Ea({space:N,coords:s});if(!Number.isFinite(o)||!Number.isFinite(i))return[0,0,0];let n=t<=N6?e0*t:116*Math.cbrt(t)-16;return[n,13*n*(o-J4),13*n*(i-Y4)]},toBase(e){let[t,n,s]=e;if(t===0||Ot(t))return[0,0,0];n=k(n),s=k(s);let a=n/(13*t)+J4,o=s/(13*t)+Y4,i=t<=8?t/e0:((t+16)/116)**3;return[i*(9*a/(4*o)),i,i*((12-3*a-20*o)/(4*o))]},formats:{color:{id:"--luv",coords:["<number> | <percentage>","<number> | <percentage>[-1,1]","<number> | <percentage>[-1,1]"]}}}),rc=new s({id:"lchuv",name:"LChuv",coords:{l:{refRange:[0,100],name:"Lightness"},c:{refRange:[0,220],name:"Chroma"},h:{refRange:[0,360],type:"angle",name:"Hue"}},base:W4,fromBase(e){let[i,t,n]=e,s;const o=.02;return(t<0?-t:t)<o&&(n<0?-n:n)<o?s=NaN:s=Math.atan2(n,t)*180/Math.PI,[i,(t**2+n**2)**.5,Ie(s)]},toBase(e){let[s,t,n]=e;return t<0&&(t=0),isNaN(n)&&(n=0),[s,t*Math.cos(n*Math.PI/180),t*Math.sin(n*Math.PI/180)]},formats:{color:{id:"--lchuv",coords:["<number> | <percentage>","<number> | <percentage>","<number> | <angle>"]}}}),R6=216/24389,P6=24389/27,P4=S[0][0],T4=S[0][1],cc=S[0][2],F4=S[1][0],M4=S[1][1],uc=S[1][2],k4=S[2][0],E4=S[2][1],Ec=S[2][2];function cs(e,t,n){const s=t/(Math.sin(n)-e*Math.cos(n));return s<0?1/0:s}function Ri(e){const i=(e+16)**3/1560896,t=i>R6?i:e/P6,a=t*(284517*P4-94839*cc),r=t*(838422*cc+769860*T4+731718*P4),n=t*(632260*cc-126452*T4),c=t*(284517*F4-94839*uc),l=t*(838422*uc+769860*M4+731718*F4),s=t*(632260*uc-126452*M4),d=t*(284517*k4-94839*Ec),u=t*(838422*Ec+769860*E4+731718*k4),o=t*(632260*Ec-126452*E4);return{r0s:a/n,r0i:r*e/n,r1s:a/(n+126452),r1i:(r-769860)*e/(n+126452),g0s:c/s,g0i:l*e/s,g1s:c/(s+126452),g1i:(l-769860)*e/(s+126452),b0s:d/o,b0i:u*e/o,b1s:d/(o+126452),b1i:(u-769860)*e/(o+126452)}}function x4(e,t){const n=t/360*Math.PI*2,s=cs(e.r0s,e.r0i,n),o=cs(e.r1s,e.r1i,n),i=cs(e.g0s,e.g0i,n),a=cs(e.g1s,e.g1i,n),r=cs(e.b0s,e.b0i,n),c=cs(e.b1s,e.b1i,n);return Math.min(s,o,i,a,r,c)}O4=new s({id:"hsluv",name:"HSLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:rc,gamutSpace:Jt,fromBase(e){let[t,o,s]=[k(e[0]),k(e[1]),k(e[2])],n;if(t>99.9999999)n=0,t=100;else if(t<1e-8)n=0,t=0;else{let e=Ri(t),i=x4(e,s);n=o/i*100}return[s,n,t]},toBase(e){let[s,o,t]=[k(e[0]),k(e[1]),k(e[2])],n;if(t>99.9999999)t=100,n=0;else if(t<1e-8)t=0,n=0;else{let e=Ri(t),i=x4(e,s);n=i/100*o}return[t,n,s]},formats:{color:{id:"--hsluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),S[0][0],S[0][1],S[0][2],S[1][0],S[1][1],S[1][2],S[2][0],S[2][1],S[2][2];function is(e,t){return(t<0?-t:t)/(e**2+1)**.5}function y4(e){let t=is(e.r0s,e.r0i),n=is(e.r1s,e.r1i),s=is(e.g0s,e.g0i),o=is(e.g1s,e.g1i),i=is(e.b0s,e.b0i),a=is(e.b1s,e.b1i);return Math.min(t,n,s,o,i,a)}j4=new s({id:"hpluv",name:"HPLuv",coords:{h:{refRange:[0,360],type:"angle",name:"Hue"},s:{range:[0,100],name:"Saturation"},l:{range:[0,100],name:"Lightness"}},base:rc,gamutSpace:"self",fromBase(e){let[t,s,o]=[k(e[0]),k(e[1]),k(e[2])],n;if(t>99.9999999)n=0,t=100;else if(t<1e-8)n=0,t=0;else{let e=Ri(t),o=y4(e);n=s/o*100}return[o,n,t]},toBase(e){let[s,o,t]=[k(e[0]),k(e[1]),k(e[2])],n;if(t>99.9999999)t=100,n=0;else if(t<1e-8)t=0,n=0;else{let e=Ri(t),s=y4(e);n=s/100*o}return[t,n,s]},formats:{color:{id:"--hpluv",coords:["<number> | <angle>","<percentage> | <number>","<percentage> | <number>"]}}}),Rc=203,Pc=2610/2**14,b4=2**14/2610,v4=2523/2**5,Gc=2**5/2523,ul=3424/2**12,hl=2413/2**7,Sl=2392/2**7,g4=new G({id:"rec2100pq",cssId:"rec2100-pq",name:"REC.2100-PQ",base:Ts,toBase(e){return e.map(function(e){let t=(Math.max(e**Gc-ul,0)/(hl-Sl*e**Gc))**b4;return t*1e4/Rc})},fromBase(e){return e.map(function(e){let t=Math.max(e*Rc/1e4,0),n=ul+hl*t**Pc,s=1+Sl*t**Pc;return(n/s)**v4})}}),Il=.17883277,$l=.28466892,Zl=.55991073,ni=3.7743,m4=new G({id:"rec2100hlg",cssId:"rec2100-hlg",name:"REC.2100-HLG",referred:"scene",base:Ts,toBase(e){return e.map(function(e){return e<=.5?e**2/3*ni:(Math.exp((e-Zl)/Il)+$l)/12*ni})},fromBase(e){return e.map(function(e){return e/=ni,e<=1/12?(3*e)**.5:Il*Math.log(12*e-$l)+Zl})}}),nd={},it.add("chromatic-adaptation-start",e=>{e.options.method&&(e.M=h4(e.W1,e.W2,e.options.method))}),it.add("chromatic-adaptation-end",e=>{e.M||(e.M=h4(e.W1,e.W2,e.options.method))});function Jo({id:e,toCone_M:t,fromCone_M:n}){nd[e]=arguments[0]}function h4(e,t,n="Bradford"){let s=nd[n],[o,i,a]=_(s.toCone_M,e),[r,c,l]=_(s.toCone_M,t),d=[[r/o,0,0],[0,c/i,0],[0,0,l/a]],u=_(d,s.toCone_M),h=_(s.fromCone_M,u);return h}Jo({id:"von Kries",toCone_M:[[.40024,.7076,-.08081],[-.2263,1.16532,.0457],[0,0,.91822]],fromCone_M:[[1.8599363874558397,-1.1293816185800916,.21989740959619328],[.3611914362417676,.6388124632850422,-6370596838649899e-21],[0,0,1.0890636230968613]]}),Jo({id:"Bradford",toCone_M:[[.8951,.2664,-.1614],[-.7502,1.7135,.0367],[.0389,-.0685,1.0296]],fromCone_M:[[.9869929054667121,-.14705425642099013,.15996265166373122],[.4323052697233945,.5183602715367774,.049291228212855594],[-.00852866457517732,.04004282165408486,.96848669578755]]}),Jo({id:"CAT02",toCone_M:[[.7328,.4296,-.1624],[-.7036,1.6975,.0061],[.003,.0136,.9834]],fromCone_M:[[1.0961238208355142,-.27886900021828726,.18274517938277307],[.4543690419753592,.4735331543074117,.07209780371722911],[-.009627608738429355,-.00569803121611342,1.0153256399545427]]}),Jo({id:"CAT16",toCone_M:[[.401288,.650173,-.051461],[-.250268,1.204414,.045854],[-.002079,.048952,.953127]],fromCone_M:[[1.862067855087233,-1.0112546305316845,.14918677544445172],[.3875265432361372,.6214474419314753,-.008973985167612521],[-.01584149884933386,-.03412293802851557,1.0499644368778496]]}),Object.assign(B,{A:[1.0985,1,.35585],C:[.98074,1,1.18232],D55:[.95682,1,.92149],D75:[.94972,1,1.22638],E:[1,1,1],F2:[.99186,1,.67393],F7:[.95041,1,1.08747],F11:[1.00962,1,.6435]}),B.ACES=[.32168/.33767,1,(1-.32168-.33767)/.33767],u4=[[.6624541811085053,.13400420645643313,.1561876870049078],[.27222871678091454,.6740817658111484,.05368951740793705],[-.005574649490394108,.004060733528982826,1.0103391003129971]],d4=[[1.6410233796943257,-.32480329418479,-.23642469523761225],[-.6636628587229829,1.6153315916573379,.016756347685530137],[.011721894328375376,-.008284441996237409,.9883948585390215]],cd=new G({id:"acescg",cssId:"--acescg",name:"ACEScg",coords:{r:{range:[0,65504],name:"Red"},g:{range:[0,65504],name:"Green"},b:{range:[0,65504],name:"Blue"}},referred:"scene",white:B.ACES,toXYZ_M:u4,fromXYZ_M:d4}),so=2**-16,Ko=-.35828683,io=(Math.log2(65504)+9.72)/17.52,l4=new G({id:"acescc",cssId:"--acescc",name:"ACEScc",coords:{r:{range:[Ko,io],name:"Red"},g:{range:[Ko,io],name:"Green"},b:{range:[Ko,io],name:"Blue"}},referred:"scene",base:cd,toBase(e){const t=(9.72-15)/17.52;return e.map(function(e){return e<=t?(2**(e*17.52-9.72)-so)*2:e<io?2**(e*17.52-9.72):65504})},fromBase(e){return e.map(function(e){return e<=0?(Math.log2(so)+9.72)/17.52:e<so?(Math.log2(so+e*.5)+9.72)/17.52:(Math.log2(e)+9.72)/17.52})}}),fd=Object.freeze({__proto__:null,A98RGB:E6,A98RGB_Linear:y0,ACEScc:l4,ACEScg:cd,CAM16_JMh:Gm,HCT:ds,HPLuv:j4,HSL:C0,HSLuv:O4,HSV:x0,HWB:O6,ICTCP:_i,JzCzHz:yi,Jzazbz:xl,LCH:Gn,LCHuv:rc,Lab:J,Lab_D65:Da,Luv:W4,OKLCH:D6,OKLab:qt,P3:pr,P3_Linear:Sr,ProPhoto:z6,ProPhoto_Linear:f0,REC_2020:Fr,REC_2020_Linear:Ts,REC_2100_HLG:m4,REC_2100_PQ:g4,XYZ_ABS_D65:hi,XYZ_D50:Uo,XYZ_D65:N,sRGB:Jt,sRGB_Linear:Cr}),me=class _Color{constructor(...o){let e;o.length===1&&(e=l(o[0]));let i,n,t;e?(i=e.space||e.spaceId,n=e.coords,t=e.alpha):[i,n,t]=o,Object.defineProperty(this,"space",{value:s.get(i),writable:!1,enumerable:!0,configurable:!0}),this.coords=n?n.slice():[0,0,0],this.alpha=t>1||t===0[0]?1:t<0?0:t;for(let e=0;e<this.coords.length;e++)this.coords[e]==="NaN"&&(this.coords[e]=NaN);for(let e in this.space.coords)Object.defineProperty(this,e,{get:()=>this.get(e),set:t=>this.set(e,t)})}get spaceId(){return this.space.id}clone(){return new _Color(this.space,this.coords,this.alpha)}toJSON(){return{spaceId:this.spaceId,coords:this.coords,alpha:this.alpha}}display(...t){let e=Tf(this,...t);return e.color=new _Color(e.color),e}static get(e,...t){return e instanceof _Color?e:new _Color(e,...t)}static defineFunction(e,t,n=t){let{instance:i=!0,returns:s}=n,o=function(...n){let e=t(...n);if(s==="color")e=_Color.get(e);else if(s==="function<color>"){let t=e;e=function(...e){let n=t(...e);return _Color.get(n)},Object.assign(e,t)}else s==="array<color>"&&(e=e.map(e=>_Color.get(e)));return e};e in _Color||(_Color[e]=o),i&&(_Color.prototype[e]=function(...e){return o(this,...e)})}static defineFunctions(e){for(let t in e)_Color.defineFunction(t,e[t],e[t])}static extend(e){if(e.register)e.register(_Color);else for(let t in e)_Color.defineFunction(t,e[t])}},me.defineFunctions({get:he,getAll:ao,set:dt,setAll:gd,to:y,equals:Lf,inGamut:tn,toGamut:zt,distance:S1,toString:Ms}),Object.assign(me,{util:ju,hooks:it,WHITES:B,Space:s,spaces:s.registry,parse:ku,defaults:ie});for(let e of Object.keys(fd))s.register(fd[e]);for(let e in s.registry)bd(e,s.registry[e]);it.add("colorspace-init-end",e=>{bd(e.id,e),e.aliases?.forEach(t=>{bd(t,e)})});function bd(e,t){let n=e.replace(/-/g,"_");Object.defineProperty(me.prototype,n,{get(){let n=this.getAll(e);return typeof Proxy=="undefined"?n:new Proxy(n,{has:(e,n)=>{try{return s.resolveCoord([t,n]),!0}catch{}return Reflect.has(e,n)},get:(e,n,o)=>{if(n&&typeof n!="symbol"&&!(n in e)){let{index:o}=s.resolveCoord([t,n]);if(o>=0)return e[o]}return Reflect.get(e,n,o)},set:(n,o,i,a)=>{if(o&&typeof o!="symbol"&&!(o in n)||o>=0){let{index:a}=s.resolveCoord([t,o]);if(a>=0)return n[a]=i,this.setAll(e,n),!0}return Reflect.set(n,o,i,a)}})},set(t){this.setAll(e,t)},configurable:!0,enumerable:!0})}me.extend(Pt),me.extend({deltaE:ho}),Object.assign(me,{deltaEMethods:Pt}),me.extend(M0),me.extend({contrast:p6}),me.extend(z0),me.extend(um),me.extend(w6),me.extend(go);function re(e){return(t,...n)=>I6(e,t,n)}function Bn(e,t){return re(B6(e,t).get)}var{apply:I6,getOwnPropertyDescriptor:B6,getPrototypeOf:Ed}=Reflect,ru,ju,_u,it,ie,B,xu,l1,s,N,G,Uo,u1,ld,oo,Yo,J,Gn,rd,Zs,od,on,p1,v1,j1,E1,qt,A1,T1,Vl,Bl,hi,Us,Ws,Hl,N1,Tl,Fl,Ml,L1,Al,$s,ji,H1,I1,$1,U1,xl,yi,_l,yl,jl,bl,a4,r4,gl,c4,I4,k0,F0,_i,b2,cl,rl,Oi,il,lh,Lm,Bm,St,Wm,el,Yc,Gm,Ym,qm,Vc,Li,ds,$m,Sc,Pt,Cc,xc,Sm,Am,Ts,Ds,dc,Fr,Om,ym,Sr,bm,S,Cr,wr,_r,yr,Jt,pr,Ff,um,lm,nm,tm,em,mr,Jh,Zh,m2,h2,Or,u2,X0,W0,Tr,_o,Ua,Da,za,go,z0,M0,O4,j4,Rc,Pc,b4,v4,Gc,ul,hl,Sl,g4,Il,$l,Zl,ni,m4,nd,u4,d4,cd,so,Ko,io,l4,fd,me,d6,Bd,Dr,U,Q1,Id,Nd,Dd,Y1,K1,Td,X6,Q6,Ne,Fe,jd,In,V1,Vo,qn,md,Y,Kt,Go,Yn,ad,n,jt,qe,F1,yn,M1,ee,zl,gi,vi,O1,lr,Xc,_1,y1,Bi,c1,hc,r1,Es,a1,nn,Qe,X,be,Ve,Vt,oc,sc,nc,i1,Lt,o1,s1,n1,t1,e1,Ju,Zu,Qu,ha,ma,Xu,Gu,Yu,qu,Ku,Uu,Wu,$u,Vu,Oa,xa,Ca,jn,ka,Aa,Sa,Ma,$r,Bu,Iu,De,Vr,Br,Ir,Pa,Hr,Pr,Rr,Lr,Hu,zr,wt,En,qa,Ya,Ys,Cn,xe,yo,E,xr,Rn,A,po,Pe,se,ur,Zc,$n,cr,Ee,ue,Ge,or,sr,Wn,gr,vr,br,jr,le,We,Dt,tr,er,Gt,Ja,Za,uo,Gs,js,Bs,Ka,Wa,Eo,$a,Va,Ba,Ia,Ha,Ra,La,Na,Fa,wa,Co,ya,ja,ba,va,pa,fa,da,la,ra,sa,ta,ea,Ji,Zi,Qi,Gi,qi,Ki,os,An,$i,mc,fc,pc,gc,Pu,Lu,jc,Hi,Nu,wc,Du,et,ks,p,M,H,un,Mc,zu,Tu,Fu,Ni,Mu,Su,Di,Au,Mi,Ic,Ce,hs,qc,Yt,yu,gn,R,ol,Sn,cn,nu,r,Je,e,pi,Dl,u,mi,Rl,Pl,f,es,eu,Jd,li,Zd,ii,b,Z,Qd,Te,ed,Xd,d,Wt,fe,Gd,Yd,gt,no,oe,dd,ud,mt,Wo,qd,pd,Zt,Ke,co,Kn,Kd,Ud,wd,Od,xd,Cd,Wd,fn,Lo,O,Et,th,zo,zd,nt,Oo,a,P,Hd,je,Re,_a,Xe,hn,sn,yd,$o,Qo,Zo,ti,si,ri,Qt,$e,Ze,ge,Vs,xn,Ht,Bt,ht,ut,Tt,ss,Ss,As,At,x,ws,vu,V,dl,dr,I,wu,ps,Si,_e,Eu,de,zi,On,te,us,T,ne,Qc,W,Ii,Ru,pe,Jc,zn,Dn,vn,rn,an,Un,Yr,eo,Qn,Xs,Qr,ua,Zr,Jr,Be,aa,bs,ft,na,Cs,Wi,ls,rt,yc,Ft,Fs,Tc,zs,Rs,Ps,Ti,Hs,Hc,Is,K,al,Ol,kl,k1,Ll,Ks,ui,Kl,ci,z1,Yl,ai,Gl,R1,P1,oi,pn,vd,lo,Sd,W1,Tn,Mn,q1,Fo,G1,X1,yt,xt,J1,wo,To,Do,jo,bo,Ad,Nn,fo,Ho,hd,to,id,td,f4,p4,Nl,Kc,Fi,Ls,Ns,_4,Dc,rs,C4,bc,Vi,A4,S4,lc,N4,L4,R4,Me,H4,Yi,ke,V4,$4,en,G4,X4,Q4,Z4,ye,Ut,ac,Xt,s0,_n,bn,ln,r0,Ue,h0,m0,It,Le,g0,ic,$t,j0,tc,oa,ia,ec,Xr,ga,Qs,Js,ze,qr,lt,Kr,Ur,$,D0,Wr,L0,R0,Pn,H0,I0,Ln,Ta,$0,Rt,kn,K0,q0,Ga,G0,Xa,Q0,Z0,J0,e2,t2,n2,s2,o2,j,i6,Ar,c2,Er,nr,fr,f2,j2,y2,_2,w2,O2,x2,C2,E2,k2,A2,S2,M2,F2,T2,z2,D2,N2,L2,R2,P2,H2,I2,B2,V2,$2,W2,U2,K2,q2,Y2,G2,X2,Q2,Z2,J2,e3,t3,n3,s3,o3,i3,a3,r3,c3,l3,d3,u3,h3,m3,f3,p3,g3,v3,b3,j3,y3,_3,w3,O3,x3,C3,E3,k3,A3,S3,M3,F3,T3,z3,D3,N3,L3,R3,P3,H3,I3,B3,V3,$3,W3,U3,K3,q3,Y3,G3,X3,Q3,Z3,J3,eh,$d,nh,sh,oh,ih,ah,rh,ch,Vd,dh,uh,hh,mh,fh,ph,gh,vh,bh,jh,yh,_h,wh,Oh,xh,Ch,Eh,kh,Ah,Sh,Mh,Fh,Th,zh,Dh,Nh,Lh,Rh,Ph,Hh,Ih,Bh,Vh,$h,Wh,Uh,Kh,qh,Yh,Gh,Xh,Qh,t,c,we,mo,kt,sm,ot,hr,bt,hm,Vn,Oc,rr,ar,ir,Qa,jm,Mr,vc,Rm,_c,Pi,kc,Ac,Fc,zc,Nc,Bc,$c,Wc,i8,o8,s8,Ei,Os,e8,Jm,tl,Um,ys,Pm,Nm,Dm,Fm,Mm,Cm,xm,_m,vm,gm,dm,rm,am,im,om,sl,vs,wi,g2,r2,a2,i2,Ct,Y0,U0,Se,V0,T0,h,E0,O0,w0,_0,b0,v0,p0,d0,l0,c0,a0,i0,o0,t0,U4,B4,ml,z4,fl,gs,vl,i4,o4,n4,t4,wl,e4,Z1,ae,wn,Cl,El,bi,fi,vt,D1,di,C1,x1,ce,b1,Ql,g1,Jl,f1,sd,pt,v,q,Bo,Io,ct,at,ve,Ro,Hn,Md,st,Mo,lu,Pd,au,iu,ou,su,Ao,{EPSILON:V6,isFinite:fg,isNaN:hg}=Number,{iterator:s4,toStringTag:U6}=Symbol,{abs:ug}=Math,Y6=ArrayBuffer,G6=Y6.prototype;Bn(G6,"byteLength"),Bd=typeof SharedArrayBuffer!="undefined"?SharedArrayBuffer:null,Bd&&Bn(Bd.prototype,"byteLength"),Dr=Ed(Uint8Array),Dr.from,U=Dr.prototype,U[s4],re(U.keys),re(U.values),re(U.entries),re(U.set),re(U.reverse),re(U.fill),re(U.copyWithin),re(U.sort),re(U.slice),re(U.subarray),Bn(U,"buffer"),Bn(U,"byteOffset"),Bn(U,"length"),Bn(U,U6),Q1=Uint8Array,Id=Uint16Array,Nd=Uint32Array,Dd=Ed([][s4]()),re(Dd.next),re(function*(){}().next),Ed(Dd),Y1=1/V6,K1=6103515625e-14,Td=.0009765625,X6=Td*K1,Q6=Td*Y1,Ne=new Id(512),Fe=new Q1(512);for(let e=0;e<256;++e){const t=e-127;t<-24?(Ne[e]=0,Ne[e|256]=32768,Fe[e]=24,Fe[e|256]=24):t<-14?(Ne[e]=1024>>-t-14,Ne[e|256]=1024>>-t-14|32768,Fe[e]=-t-1,Fe[e|256]=-t-1):t<=15?(Ne[e]=t+15<<10,Ne[e|256]=t+15<<10|32768,Fe[e]=13,Fe[e|256]=13):t<128?(Ne[e]=31744,Ne[e|256]=64512,Fe[e]=24,Fe[e|256]=24):(Ne[e]=31744,Ne[e|256]=64512,Fe[e]=13,Fe[e|256]=13)}jd=new Nd(2048);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;(t&8388608)===0;)t<<=1,n-=8388608;t&=-8388609,n+=947912704,jd[e]=t|n}for(let e=1024;e<2048;++e)jd[e]=939524096+(e-1024<<13);In=new Nd(64);for(let e=1;e<31;++e)In[e]=e<<23;In[31]=1199570944,In[32]=2147483648;for(let e=33;e<63;++e)In[e]=2147483648+(e-32<<23);In[63]=3347054592,V1=new Id(64);for(let e=1;e<64;++e)e!==32&&(V1[e]=1024);function B1(){try{const e=screen.colorDepth/3,t=e>8,n=window.matchMedia("(dynamic-range: high)").matches,s=window.matchMedia("(color-gamut: rec2020)").matches||window.matchMedia("(color-gamut: p3)").matches;return!!(s&&n)&&e===Math.round(e)&&!!t}catch(e){return console.error("Exception during check for HDR",e),!1}}Vo={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in Vo)Object.freeze(Vo[e]);qn=Object.freeze(Vo),md=Object.create(null);for(const e in qn)Object.hasOwn(qn,e)&&(md[qn[e]]=e);Y={to:{},get:{}},Y.get=function(e){const s=e.slice(0,3).toLowerCase();let t,n;switch(s){case"hsl":{t=Y.get.hsl(e),n="hsl";break}case"hwb":{t=Y.get.hwb(e),n="hwb";break}default:{t=Y.get.rgb(e),n="rgb";break}}return t?{model:n,value:t}:null},Y.get.rgb=function(e){if(!e)return null;const i=/^#([a-f\d]{3,4})$/i,a=/^#([a-f\d]{6})([a-f\d]{2})?$/i,r=/^rgba?\(\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)(?=[\s,])\s*(?:,\s*)?([+-]?(?:\d*\.)?\d+(?:e\d+)?)\s*(?:[\s,|/]\s*([+-]?(?:\d*\.)?\d+(?:e\d+)?)(%?)\s*)?\)$/i,c=/^rgba?\(\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[\s,|/]\s*([+-]?[\d.]+)(%?)\s*)?\)$/i,l=/^(\w+)$/;let s=[0,0,0,1],t,n,o;if(t=e.match(a)){o=t[2],t=t[1];for(n=0;n<3;n++){const e=n*2;s[n]=Number.parseInt(t.slice(e,e+2),16)}o&&(s[3]=Number.parseInt(o,16)/255)}else if(t=e.match(i)){t=t[1],o=t[3];for(n=0;n<3;n++)s[n]=Number.parseInt(t[n]+t[n],16);o&&(s[3]=Number.parseInt(o+o,16)/255)}else if(t=e.match(r)){for(n=0;n<3;n++)s[n]=Number.parseFloat(t[n+1]);t[4]&&(s[3]=t[5]?Number.parseFloat(t[4])*.01:Number.parseFloat(t[4]))}else if(t=e.match(c)){for(n=0;n<3;n++)s[n]=Math.round(Number.parseFloat(t[n+1])*2.55);t[4]&&(s[3]=t[5]?Number.parseFloat(t[4])*.01:Number.parseFloat(t[4]))}else return(t=e.toLowerCase().match(l))?t[1]==="transparent"?[0,0,0,0]:Object.hasOwn(qn,t[1])?(s=qn[t[1]].slice(),s[3]=1,s):null:null;for(n=0;n<3;n++)s[n]=Nt(s[n],0,255);return s[3]=Nt(s[3],0,1),s},Y.get.hsl=function(e){if(!e)return null;const n=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d.]+)%\s*,?\s*([+-]?[\d.]+)%\s*(?:[,|/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i,t=e.match(n);if(t){const e=Number.parseFloat(t[4]),n=(Number.parseFloat(t[1])%360+360)%360,s=Nt(Number.parseFloat(t[2]),0,100),o=Nt(Number.parseFloat(t[3]),0,100),i=Nt(Number.isNaN(e)?1:e,0,1);return[n,s,o,i]}return null},Y.get.hwb=function(e){if(!e)return null;const n=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*[\s,]\s*([+-]?[\d.]+)%\s*[\s,]\s*([+-]?[\d.]+)%\s*(?:[\s,]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:e[+-]?\d+)?)\s*)?\)$/i,t=e.match(n);if(t){const e=Number.parseFloat(t[4]),n=(Number.parseFloat(t[1])%360+360)%360,s=Nt(Number.parseFloat(t[2]),0,100),o=Nt(Number.parseFloat(t[3]),0,100),i=Nt(Number.isNaN(e)?1:e,0,1);return[n,s,o,i]}return null},Y.to.hex=function(...e){return"#"+qo(e[0])+qo(e[1])+qo(e[2])+(e[3]<1?qo(Math.round(e[3]*255)):"")},Y.to.rgb=function(...e){return e.length<4||e[3]===1?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},Y.to.rgb.percent=function(...e){const t=Math.round(e[0]/255*100),n=Math.round(e[1]/255*100),s=Math.round(e[2]/255*100);return e.length<4||e[3]===1?"rgb("+t+"%, "+n+"%, "+s+"%)":"rgba("+t+"%, "+n+"%, "+s+"%, "+e[3]+")"},Y.to.hsl=function(...e){return e.length<4||e[3]===1?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},Y.to.hwb=function(...e){let t="";return e.length>=4&&e[3]!==1&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},Y.to.keyword=function(...e){return md[e.slice(0,3)]};function Nt(e,t,n){return Math.min(Math.max(t,e),n)}function qo(e){const t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}Kt=Y,Go={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};for(const e in Go)Object.freeze(Go[e]);Yn=Object.freeze(Go),ad={};for(const e of Object.keys(Yn))ad[Yn[e]]=e;n={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},oklab:{channels:3,labels:["okl","oka","okb"]},lch:{channels:3,labels:"lch"},oklch:{channels:3,labels:["okl","okc","okh"]},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},jt=n,qe=(6/29)**3;function Zn(e){const t=e>.0031308?1.055*e**(1/2.4)-.055:e*12.92;return Math.min(Math.max(0,t),1)}function Jn(e){return e>.04045?((e+.055)/1.055)**2.4:e/12.92}for(const e of Object.keys(n)){if(!("channels"in n[e]))throw new Error("missing channels property: "+e);if(!("labels"in n[e]))throw new Error("missing channel labels property: "+e);if(n[e].labels.length!==n[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:s}=n[e];delete n[e].channels,delete n[e].labels,Object.defineProperty(n[e],"channels",{value:t}),Object.defineProperty(n[e],"labels",{value:s})}n.rgb.hsl=function(e){const o=e[0]/255,i=e[1]/255,a=e[2]/255,n=Math.min(o,i,a),s=Math.max(o,i,a),r=s-n;let t,c;switch(s){case n:{t=0;break}case o:{t=(i-a)/r;break}case i:{t=2+(a-o)/r;break}case a:{t=4+(o-i)/r;break}}t=Math.min(t*60,360),t<0&&(t+=360);const l=(n+s)/2;return s===n?c=0:l<=.5?c=r/(s+n):c=r/(2-s-n),[t,c*100,l*100]},n.rgb.hsv=function(e){let a,r,c,t,l;const s=e[0]/255,o=e[1]/255,i=e[2]/255,n=Math.max(s,o,i),d=n-Math.min(s,o,i),u=function(e){return(n-e)/6/d+1/2};if(d===0)t=0,l=0;else{switch(l=d/n,a=u(s),r=u(o),c=u(i),n){case s:{t=c-r;break}case o:{t=1/3+a-c;break}case i:{t=2/3+r-a;break}}t<0?t+=1:t>1&&(t-=1)}return[t*360,l*100,n*100]},n.rgb.hwb=function(e){const s=e[0],o=e[1];let t=e[2];const i=n.rgb.hsl(e)[0],a=1/255*Math.min(s,Math.min(o,t));return t=1-1/255*Math.max(s,Math.max(o,t)),[i,a*100,t*100]},n.rgb.oklab=function(e){const t=Jn(e[0]/255),n=Jn(e[1]/255),s=Jn(e[2]/255),o=Math.cbrt(.4122214708*t+.5363325363*n+.0514459929*s),i=Math.cbrt(.2119034982*t+.6806995451*n+.1073969566*s),a=Math.cbrt(.0883024619*t+.2817188376*n+.6299787005*s),r=.2104542553*o+.793617785*i-.0040720468*a,c=1.9779984951*o-2.428592205*i+.4505937099*a,l=.0259040371*o+.7827717662*i-.808675766*a;return[r*100,c*100,l*100]},n.rgb.cmyk=function(e){const n=e[0]/255,s=e[1]/255,o=e[2]/255,t=Math.min(1-n,1-s,1-o),i=(1-n-t)/(1-t)||0,a=(1-s-t)/(1-t)||0,r=(1-o-t)/(1-t)||0;return[i*100,a*100,r*100,t*100]};function Z6(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}n.rgb.keyword=function(e){const t=ad[e];if(t)return t;let n=Number.POSITIVE_INFINITY,s;for(const t of Object.keys(Yn)){const i=Yn[t],o=Z6(e,i);o<n&&(n=o,s=t)}return s},n.keyword.rgb=function(e){return[...Yn[e]]},n.rgb.xyz=function(e){const t=Jn(e[0]/255),n=Jn(e[1]/255),s=Jn(e[2]/255),o=t*.4124564+n*.3575761+s*.1804375,i=t*.2126729+n*.7151522+s*.072175,a=t*.0193339+n*.119192+s*.9503041;return[o*100,i*100,a*100]},n.rgb.lab=function(e){const i=n.rgb.xyz(e);let s=i[0],t=i[1],o=i[2];s/=95.047,t/=100,o/=108.883,s=s>qe?s**(1/3):7.787*s+16/116,t=t>qe?t**(1/3):7.787*t+16/116,o=o>qe?o**(1/3):7.787*o+16/116;const a=116*t-16,r=500*(s-t),c=200*(t-o);return[a,r,c]},n.hsl.rgb=function(e){const c=e[0]/360,i=e[1]/100,s=e[2]/100;let t,n;if(i===0)return n=s*255,[n,n,n];const a=s<.5?s*(1+i):s+i-s*i,o=2*s-a,r=[0,0,0];for(let e=0;e<3;e++)t=c+1/3*-(e-1),t<0&&t++,t>1&&t--,6*t<1?n=o+(a-o)*6*t:2*t<1?n=a:3*t<2?n=o+(a-o)*(2/3-t)*6:n=o,r[e]=n*255;return r},n.hsl.hsv=function(e){const i=e[0];let n=e[1]/100,t=e[2]/100,o=n;const s=Math.max(t,.01);t*=2,n*=t<=1?t:2-t,o*=s<=1?s:2-s;const a=(t+n)/2,r=t===0?2*o/(s+o):2*n/(t+n);return[i,r*100,a*100]},n.hsv.rgb=function(e){const s=e[0]/60,o=e[1]/100;let t=e[2]/100;const c=Math.floor(s)%6,r=s-Math.floor(s),n=255*t*(1-o),i=255*t*(1-o*r),a=255*t*(1-o*(1-r));switch(t*=255,c){case 0:return[t,a,n];case 1:return[i,t,n];case 2:return[n,t,a];case 3:return[n,i,t];case 4:return[a,n,t];case 5:return[t,n,i]}},n.hsv.hsl=function(e){const r=e[0],n=e[1]/100,i=e[2]/100,a=Math.max(i,.01);let t,s;s=(2-n)*i;const o=(2-n)*a;return t=n*a,t/=o<=1?o:2-o,t=t||0,s/=2,[r,t*100,s*100]},n.hwb.rgb=function(e){const u=e[0]/360;let t=e[1]/100,c=e[2]/100;const l=t+c;let r;l>1&&(t/=l,c/=l);const d=Math.floor(6*u),n=1-c;r=6*u-d,(d&1)!==0&&(r=1-r);const a=t+r*(n-t);let s,o,i;switch(d){default:case 6:case 0:{s=n,o=a,i=t;break}case 1:{s=a,o=n,i=t;break}case 2:{s=t,o=n,i=a;break}case 3:{s=t,o=a,i=n;break}case 4:{s=a,o=t,i=n;break}case 5:{s=n,o=t,i=a;break}}return[s*255,o*255,i*255]},n.cmyk.rgb=function(e){const n=e[0]/100,s=e[1]/100,o=e[2]/100,t=e[3]/100,i=1-Math.min(1,n*(1-t)+t),a=1-Math.min(1,s*(1-t)+t),r=1-Math.min(1,o*(1-t)+t);return[i*255,a*255,r*255]},n.xyz.rgb=function(e){const o=e[0]/100,i=e[1]/100,a=e[2]/100;let t,n,s;return t=o*3.2404542+i*-1.5371385+a*-.4985314,n=o*-.969266+i*1.8760108+a*.041556,s=o*.0556434+i*-.2040259+a*1.0572252,t=Zn(t),n=Zn(n),s=Zn(s),[t*255,n*255,s*255]},n.xyz.lab=function(e){let n=e[0],t=e[1],s=e[2];n/=95.047,t/=100,s/=108.883,n=n>qe?n**(1/3):7.787*n+16/116,t=t>qe?t**(1/3):7.787*t+16/116,s=s>qe?s**(1/3):7.787*s+16/116;const o=116*t-16,i=500*(n-t),a=200*(t-s);return[o,i,a]},n.xyz.oklab=function(e){const t=e[0]/100,n=e[1]/100,s=e[2]/100,o=Math.cbrt(.8189330101*t+.3618667424*n-.1288597137*s),i=Math.cbrt(.0329845436*t+.9293118715*n+.0361456387*s),a=Math.cbrt(.0482003018*t+.2643662691*n+.633851707*s),r=.2104542553*o+.793617785*i-.0040720468*a,c=1.9779984951*o-2.428592205*i+.4505937099*a,l=.0259040371*o+.7827717662*i-.808675766*a;return[r*100,c*100,l*100]},n.oklab.oklch=function(e){return n.lab.lch(e)},n.oklab.xyz=function(e){const t=e[0]/100,n=e[1]/100,s=e[2]/100,o=(.999999998*t+.396337792*n+.215803758*s)**3,i=(1.000000008*t-.105561342*n-.063854175*s)**3,a=(1.000000055*t-.089484182*n-1.291485538*s)**3,r=1.227013851*o-.55779998*i+.281256149*a,c=-.040580178*o+1.11225687*i-.071676679*a,l=-.076381285*o-.421481978*i+1.58616322*a;return[r*100,c*100,l*100]},n.oklab.rgb=function(e){const t=e[0]/100,n=e[1]/100,s=e[2]/100,o=(t+.3963377774*n+.2158037573*s)**3,i=(t-.1055613458*n-.0638541728*s)**3,a=(t-.0894841775*n-1.291485548*s)**3,r=Zn(4.0767416621*o-3.3077115913*i+.2309699292*a),c=Zn(-1.2684380046*o+2.6097574011*i-.3413193965*a),l=Zn(-.0041960863*o-.7034186147*i+1.707614701*a);return[r*255,c*255,l*255]},n.oklch.oklab=function(e){return n.lch.lab(e)},n.lab.xyz=function(e){const r=e[0],c=e[1],l=e[2];let n,t,s;t=(r+16)/116,n=c/500+t,s=t-l/200;const o=t**3,i=n**3,a=s**3;return t=o>qe?o:(t-16/116)/7.787,n=i>qe?i:(n-16/116)/7.787,s=a>qe?a:(s-16/116)/7.787,n*=95.047,t*=100,s*=108.883,[n,t,s]},n.lab.lch=function(e){const o=e[0],n=e[1],s=e[2];let t;const i=Math.atan2(s,n);t=i*360/2/Math.PI,t<0&&(t+=360);const a=(n*n+s*s)**.5;return[o,a,t]},n.lch.lab=function(e){const s=e[0],t=e[1],o=e[2],n=o/360*2*Math.PI,i=t*Math.cos(n),a=t*Math.sin(n);return[s,i,a]},n.rgb.ansi16=function(e,t=null){const[i,a,r]=e;let s=t===null?n.rgb.hsv(e)[2]:t;if(s=Math.round(s/50),s===0)return 30;let o=30+(Math.round(r/255)<<2|Math.round(a/255)<<1|Math.round(i/255));return s===2&&(o+=60),o},n.hsv.ansi16=function(e){return n.rgb.ansi16(n.hsv.rgb(e),e[2])},n.rgb.ansi256=function(e){const t=e[0],n=e[1],s=e[2];if(t>>4===n>>4&&n>>4===s>>4)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;const o=16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(s/255*5);return o},n.ansi16.rgb=function(e){e=e[0];let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=((e>50|0)+1)*.5,s=(t&1)*n*255,o=(t>>1&1)*n*255,i=(t>>2&1)*n*255;return[s,o,i]},n.ansi256.rgb=function(e){if(e=e[0],e>=232){const t=(e-232)*10+8;return[t,t,t]}e-=16;let t;const n=Math.floor(e/36)/5*255,s=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,s,o]},n.rgb.hex=function(e){const n=((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255),t=n.toString(16).toUpperCase();return"000000".slice(t.length)+t},n.hex.rgb=function(e){const t=e.toString(16).match(/[a-f\d]{6}|[a-f\d]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=[...n].map(e=>e+e).join(""));const s=Number.parseInt(n,16),o=s>>16&255,i=s>>8&255,a=s&255;return[o,i,a]},n.rgb.hcg=function(e){const s=e[0]/255,o=e[1]/255,i=e[2]/255,a=Math.max(Math.max(s,o),i),r=Math.min(Math.min(s,o),i),t=a-r;let n;const c=t<1?r/(1-t):0;return t<=0?n=0:a===s?n=(o-i)/t%6:a===o?n=2+(i-s)/t:n=4+(s-o)/t,n/=6,n%=1,[n*360,t*100,c*100]},n.hsl.hcg=function(e){const s=e[1]/100,t=e[2]/100,n=t<.5?2*s*t:2*s*(1-t);let o=0;return n<1&&(o=(t-.5*n)/(1-n)),[e[0],n*100,o*100]},n.hsv.hcg=function(e){const o=e[1]/100,n=e[2]/100,t=o*n;let s=0;return t<1&&(s=(n-t)/(1-t)),[e[0],t*100,s*100]},n.hcg.rgb=function(e){const c=e[0]/360,n=e[1]/100,s=e[2]/100;if(n===0)return[s*255,s*255,s*255];const t=[0,0,0],r=c%1*6,o=r%1,a=1-o;let i=0;switch(Math.floor(r)){case 0:{t[0]=1,t[1]=o,t[2]=0;break}case 1:{t[0]=a,t[1]=1,t[2]=0;break}case 2:{t[0]=0,t[1]=1,t[2]=o;break}case 3:{t[0]=0,t[1]=a,t[2]=1;break}case 4:{t[0]=o,t[1]=0,t[2]=1;break}default:t[0]=1,t[1]=0,t[2]=a}return i=(1-n)*s,[(n*t[0]+i)*255,(n*t[1]+i)*255,(n*t[2]+i)*255]},n.hcg.hsv=function(e){const t=e[1]/100,o=e[2]/100,n=t+o*(1-t);let s=0;return n>0&&(s=t/n),[e[0],s*100,n*100]},n.hcg.hsl=function(e){const n=e[1]/100,o=e[2]/100,t=o*(1-n)+.5*n;let s=0;return t>0&&t<.5?s=n/(2*t):t>=.5&&t<1&&(s=n/(2*(1-t))),[e[0],s*100,t*100]},n.hcg.hwb=function(e){const t=e[1]/100,s=e[2]/100,n=t+s*(1-t);return[e[0],(n-t)*100,(1-n)*100]},n.hwb.hcg=function(e){const o=e[1]/100,i=e[2]/100,n=1-i,t=n-o;let s=0;return t<1&&(s=(n-t)/(1-t)),[e[0],t*100,s*100]},n.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},n.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},n.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},n.gray.hsl=function(e){return[0,0,e[0]]},n.gray.hsv=n.gray.hsl,n.gray.hwb=function(e){return[0,100,e[0]]},n.gray.cmyk=function(e){return[0,0,0,e[0]]},n.gray.lab=function(e){return[e[0],0,0]},n.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,s=(t<<16)+(t<<8)+t,n=s.toString(16).toUpperCase();return"000000".slice(n.length)+n},n.rgb.gray=function(e){const t=(e[0]+e[1]+e[2])/3;return[t/255*100]};function J6(){const e={},t=Object.keys(jt);for(let{length:s}=t,n=0;n<s;n++)e[t[n]]={distance:-1,parent:null};return e}function ep(e){const t=J6(),n=[e];for(t[e].distance=0;n.length>0;){const e=n.pop(),s=Object.keys(jt[e]);for(let{length:r}=s,o=0;o<r;o++){const a=s[o],i=t[a];i.distance===-1&&(i.distance=t[e].distance+1,i.parent=e,n.unshift(a))}}return t}function tp(e,t){return function(n){return t(e(n))}}function sp(e,t){const o=[t[e].parent,e];let s=jt[t[e].parent][e],n=t[e].parent;for(;t[n].parent;)o.unshift(t[n].parent),s=tp(jt[t[n].parent][n],s),n=t[n].parent;return s.conversion=o,s}function op(e){const t=ep(e),n={},s=Object.keys(t);for(let{length:i}=s,e=0;e<i;e++){const o=s[e],a=t[o];if(a.parent===null)continue;n[o]=sp(o,t)}return n}F1=op,yn={},M1=Object.keys(jt);function rp(e){const t=function(...n){const t=n[0];return t==null?t:(t.length>1&&(n=t),e(n))};return"conversion"in e&&(t.conversion=e.conversion),t}function up(e){const t=function(...s){const t=s[0];if(t==null)return t;t.length>1&&(s=t);const n=e(s);if(typeof n=="object")for(let{length:t}=n,e=0;e<t;e++)n[e]=Math.round(n[e]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}for(const e of M1){yn[e]={},Object.defineProperty(yn[e],"channels",{value:jt[e].channels}),Object.defineProperty(yn[e],"labels",{value:jt[e].labels});const t=F1(e),n=Object.keys(t);for(const s of n){const o=t[s];yn[e][s]=up(o),yn[e][s].raw=rp(o)}}ee=yn,zl=["keyword","gray","hex"],gi={};for(const e of Object.keys(ee))gi[[...ee[e].labels].sort().join("")]=e;vi={};function L(e,t){if(!(this instanceof L))return new L(e,t);if(t&&t in zl&&(t=null),t&&!(t in ee))throw new Error("Unknown model: "+t);let s,n;if(e==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof L)this.model=e.model,this.color=[...e.color],this.valpha=e.valpha;else if(typeof e=="string"){const t=Kt.get(e);if(t===null)throw new Error("Unable to parse color from string: "+e);this.model=t.model,n=ee[this.model].channels,this.color=t.value.slice(0,n),this.valpha=typeof t.value[n]=="number"?t.value[n]:1}else if(e.length>0){this.model=t||"rgb",n=ee[this.model].channels;const s=Array.prototype.slice.call(e,0,n);this.color=Nr(s,n),this.valpha=typeof e[n]=="number"?e[n]:1}else if(typeof e=="number")this.model="rgb",this.color=[e>>16&255,e>>8&255,e&255],this.valpha=1;else{this.valpha=1;const t=Object.keys(e);"alpha"in e&&(t.splice(t.indexOf("alpha"),1),this.valpha=typeof e.alpha=="number"?e.alpha:0);const n=t.sort().join("");if(!(n in gi))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=gi[n];const{labels:o}=ee[this.model],i=[];for(s=0;s<o.length;s++)i.push(e[o[s]]);this.color=Nr(i)}if(vi[this.model]){n=ee[this.model].channels;for(s=0;s<n;s++){const e=vi[this.model][s];e&&(this.color[s]=e(this.color[s]))}}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}L.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in Kt.to?this:this.rgb();t=t.round(typeof e=="number"?e:1);const n=t.valpha===1?t.color:[...t.color,this.valpha];return Kt.to[t.model](...n)},percentString(e){const t=this.rgb().round(typeof e=="number"?e:1),n=t.valpha===1?t.color:[...t.color,this.valpha];return Kt.to.rgb.percent(...n)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const e={},{channels:t}=ee[this.model],{labels:n}=ee[this.model];for(let s=0;s<t;s++)e[n[s]]=this.color[s];return this.valpha!==1&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,this.valpha!==1&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,this.valpha!==1&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new L([...this.color.map(fp(e)),this.valpha],this.model)},alpha(e){return e!==0[0]?new L([...this.color,Math.max(0,Math.min(1,e))],this.model):this.valpha},red:w("rgb",0,F(255)),green:w("rgb",1,F(255)),blue:w("rgb",2,F(255)),hue:w(["hsl","hsv","hsl","hwb","hcg"],0,e=>(e%360+360)%360),saturationl:w("hsl",1,F(100)),lightness:w("hsl",2,F(100)),saturationv:w("hsv",1,F(100)),value:w("hsv",2,F(100)),chroma:w("hcg",1,F(100)),gray:w("hcg",2,F(100)),white:w("hwb",1,F(100)),wblack:w("hwb",2,F(100)),cyan:w("cmyk",0,F(100)),magenta:w("cmyk",1,F(100)),yellow:w("cmyk",2,F(100)),black:w("cmyk",3,F(100)),x:w("xyz",0,F(95.047)),y:w("xyz",1,F(100)),z:w("xyz",2,F(108.833)),l:w("lab",0,F(100)),a:w("lab",1),b:w("lab",2),keyword(e){return e!==0[0]?new L(e):ee[this.model].keyword(this.color)},hex(e){return e!==0[0]?new L(e):Kt.to.hex(...this.rgb().round().color)},hexa(e){if(e!==0[0])return new L(e);const n=this.rgb().round().color;let t=Math.round(this.valpha*255).toString(16).toUpperCase();return t.length===1&&(t="0"+t),Kt.to.hex(...n)+t},rgbNumber(){const e=this.rgb().color;return(e[0]&255)<<16|(e[1]&255)<<8|e[2]&255},luminosity(){const t=this.rgb().color,e=[];for(const[s,o]of t.entries()){const n=o/255;e[s]=n<=.04045?n/12.92:((n+.055)/1.055)**2.4}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast(e){const t=this.luminosity(),n=e.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level(e){const t=this.contrast(e);return t>=7?"AAA":t>=4.5?"AA":""},isDark(){const e=this.rgb().color,t=(e[0]*2126+e[1]*7152+e[2]*722)/1e4;return t<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){const t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){const t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){const t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){const t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){const t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){const t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){const e=this.rgb().color,t=e[0]*.3+e[1]*.59+e[2]*.11;return L.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const n=this.hsl();let t=n.color[0];return t=(t+e)%360,t=t<0?360+t:t,n.color[0]=t,n},mix(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const n=e.rgb(),s=this.rgb(),a=t===0[0]?.5:t,o=2*a-1,r=n.alpha()-s.alpha(),i=((o*r===-1?o:(o+r)/(1+o*r))+1)/2,c=1-i;return L.rgb(i*n.red()+c*s.red(),i*n.green()+c*s.green(),i*n.blue()+c*s.blue(),n.alpha()*a+s.alpha()*(1-a))}};for(const e of Object.keys(ee)){if(zl.includes(e))continue;const{channels:t}=ee[e];L.prototype[e]=function(...t){return this.model===e?new L(this):t.length>0?new L(t,e):new L([...pp(ee[this.model][e].raw(this.color)),this.valpha],e)},L[e]=function(...s){let n=s[0];return typeof n=="number"&&(n=Nr(s,t)),new L(n,e)}}function hp(e,t){return Number(e.toFixed(t))}function fp(e){return function(t){return hp(t,e)}}function w(e,t,n){e=Array.isArray(e)?e:[e];for(const s of e)(vi[s]||=[])[t]=n;return e=e[0],function(s){let o;return s!==0[0]?(n&&(s=n(s)),o=this[e](),o.color[t]=s,o):(o=this[e]().color[t],n&&(o=n(o)),o)}}function F(e){return function(t){return Math.max(0,Math.min(e,t))}}function pp(e){return Array.isArray(e)?e:[e]}function Nr(e,t){for(let n=0;n<t;n++)typeof e[n]!="number"&&(e[n]=0);return e}O1=L,lr=["left","right","up","down"],Xc=20,_1=255/100*Xc,document.addEventListener("DOMContentLoaded",function(){y1=new O1(getComputedStyle(document.body).getPropertyValue("--background-color"))});function bp(e){let t=document.getElementById(e);return t||(t=document.querySelector(`*[data-slug='${e}']`)),t}function jp(e,t,n){let s;if(e===0[0]||t===0[0])return 0[0];n===0[0]?s=`${e}/${t}`:s=`${e}/${t}/${n}`;const o=document.getElementById(s);return o!=null&&"slug"in o.dataset&&(s=o.dataset.slug),s}function yp(e){for(const t of lr)if(t in e.dataset){const n=()=>{const n=e.dataset[t];if(n!==0[0]){console.log(`Scrolling to ${n}`);const e=document.getElementById(n);e?e.scrollIntoView({behavior:"smooth"}):console.error(`Target element '${n}' not found.`)}return!1};document.querySelectorAll(`nav.stack-switcher a:has(.${t})`).forEach(e=>{e instanceof HTMLAnchorElement&&(e.classList.remove("hidden"),e.onclick=n)})}else document.querySelectorAll(`nav.stack-switcher a:has(.${t})`).forEach(e=>{e instanceof HTMLAnchorElement&&e.classList.add("hidden")})}function _p(e){if("jump"in e.dataset){const t=e.dataset.jump;if(t!==0[0]){const e=document.getElementById(t);e?(e.scrollIntoView({behavior:"smooth"}),console.log(`Jumping to ${t}`)):console.error(`Target element '${t}' not found.`)}}}function wp(e){function t(e,t){const n=e.lightness();return e.lightness(n+t)}e.forEach(e=>{let n;if(e.target instanceof HTMLDivElement)n=e.target;else return;const o=(1-e.intersectionRatio)*100*(Xc/100),i=t(y1,o);if(e.target.classList.contains("__inserted")||(n.style.backgroundColor=i.hex()),!e.isIntersecting||!e.target.classList.contains("card"))return;let s="1";if(e.rootBounds===null||n.parentNode===null)return;if(e.rootBounds.height<n.offsetHeight||e.rootBounds.width<n.offsetWidth){if(e.intersectionRect.width<n.parentNode.getBoundingClientRect().width)return;if(e.intersectionRect.height<e.rootBounds.height-e.rootBounds.height/20)return;const t=e.boundingClientRect.width*e.boundingClientRect.height,o=e.intersectionRect.width*e.intersectionRect.height;s=(o/t).toFixed(6),n.dataset.ratio=s}if(e.intersectionRatio.toFixed(6)==s){e.target.classList.add("active");const t=jp(n.dataset.col,n.dataset.row);t!==0[0]&&(window.location.hash=t),yp(e.target),e.target!=null&&e.target.classList.contains("__inserted")?_p(e.target):e.target==null&&console.log("Card intersect got no target!")}else e.intersectionRatio<1&&e.target.classList.contains("active")?(e.target.classList.remove("active"),e.target.classList.add("previous")):e.target.classList.contains("previous")&&e.target.classList.remove("previous")})}function Op(e){if(e.target instanceof HTMLAnchorElement&&e.target.href!==0[0]){e.preventDefault();const t=e.target.href.split("#")[1],n=bp(t);n?n.scrollIntoView({behavior:"smooth"}):console.error(`Target element '${t}' not found`);const s=document.querySelector(".menu .burger-menu-button");s&&(s.checked=!1)}}function xp(e){const t=[];for(let n=1;n<=e;n++){const s=n/e;t.push(s)}return t.push(0),t}function Cp(e,t,n){function c(e){return Array.from(e.querySelectorAll(".card")).reduce((e,t)=>e+t.getBoundingClientRect().height,0)}const l=document.querySelector(e);if(l===null)return;const i=l;let a=0,r=0,o=0;const s=[],d=Array.from(i.querySelectorAll(t));d.forEach(e=>{const t=Array.from(e.querySelectorAll(n)),i=t.length,l=c(e);o++,i>r&&(r=i),l>a&&(a=l),s[o-1]={cards:i,height:l},console.log(`Cards ${i}, Overall height: ${l}`),e.dataset.col=o.toString(),e.hasAttribute("id")||e.setAttribute("id",`${o}`);for(let e=0;e<t.length;e++)t[e].dataset.row=(e+1).toString(),t[e].dataset.col=o.toString(),t[e].hasAttribute("id")||t[e].setAttribute("id",`${o}/${e+1}`)});for(let e=0;e<s.length;e++){const d=i.querySelectorAll(t)[e];if(s[e].cards<r){const t=r-s[e].cards;for(let i=0;i<t;i++){const o=document.createElement(n);o.classList.add("__inserted"),o.classList.add("card"),o.dataset.row=(s[e].cards+1+i).toString(),o.dataset.col=(e+1).toString(),o.setAttribute("id",`${e+1}/${s[e].cards+1+i}`);let a;s.length>e+1?a=`${e+2}/1`:a="1/1",o.dataset.jump=a,o.dataset.down=a,o.dataset.right=a,d.appendChild(o),s[e].height=c(d)}}const l=e=>{const t=document.getElementById(e);return!(t!=null&&t.classList.contains("__inserted"))&&(t!=null||(console.log(`Next element for id ${e} is null!`),!1))},a=Array.from(d.querySelectorAll(n));for(let t=0;t<a.length;t++){if(a[t].classList.contains("__inserted"))continue;if(t>0){const n=`${e+1}/${t}`;a[t].dataset.up=n}if(t+1<a.length){const n=`${e+1}/${t+2}`;l(n)&&(a[t].dataset.down=n)}else if(t+1==a.length&&e+1<o){const n=`${e+2}/1`;l(n)&&(a[t].dataset.down=n),console.log(`Reached end for ${e}/${t} => ${n}`)}if(e+1<o){const n=`${e+2}/${t+1}`;l(n)&&(a[t].dataset.right=n)}if(e>0){const n=`${e}/${t+1}`;l(n)&&(a[t].dataset.left=n)}}}if(window.getComputedStyle(i).getPropertyValue("display")!="grid")for(let e=0;e<s.length;e++)if(s[e].height<a){const r=a-s[e].height,o=i.querySelectorAll(t)[e].querySelector(`${n}:last-child`);if(o!==null){const e=o.getBoundingClientRect().height,t=e+r;o.style.height=`${t}px`}}}function kp(e){e||(e=lr.map(e=>`nav.stack-switcher .${e}`).join(",")),document.querySelectorAll(e).forEach(e=>{e.classList.add("hidden")});const t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?e.target.classList.remove("hidden"):e.target.classList.add("hidden")})},{threshold:1});document.querySelectorAll(e).forEach(e=>{t.observe(e)})}function Ap(e,t){const n=document.querySelector(e);if(!n)throw new Error(`Element with selector "${e}" not found`);const s=n.querySelectorAll(t).length;if(window.getComputedStyle(n).display==="grid"){const t=window.getComputedStyle(n).gridTemplateColumns,o=t.split(" ").length;if(o!==s){const t=`repeat(${s}, calc(100vw - 1rem))`;console.log(`Setting grid-template-column on ${e} to ${t}`),n.style.gridTemplateColumns=t}}return s}function Mp(){window.addEventListener("resize",()=>{console.log(`Resized window to ${window.innerWidth}x${window.innerHeight}`)})}Bi="183",c1=0,hc=1,r1=2,Es=1,a1=2,nn=3,Qe=0,X=1,be=2,Ve=0,Vt=1,oc=2,sc=3,nc=4,i1=5,Lt=100,o1=101,s1=102,n1=103,t1=104,e1=200,Ju=201,Zu=202,Qu=203,ha=204,ma=205,Xu=206,Gu=207,Yu=208,qu=209,Ku=210,Uu=211,Wu=212,$u=213,Vu=214,Oa=0,xa=1,Ca=2,jn=3,ka=4,Aa=5,Sa=6,Ma=7,$r=0,Bu=1,Iu=2,De=0,Vr=1,Br=2,Ir=3,Pa=4,Hr=5,Pr=6,Rr=7,Lr="attached",Hu="detached",zr=300,wt=301,En=302,qa=303,Ya=304,Ys=306,Cn=1e3,xe=1001,yo=1002,E=1003,xr=1004,Rn=1005,A=1006,po=1007,Pe=1008,se=1009,ur=1010,Zc=1011,$n=1012,cr=1013,Ee=1014,ue=1015,Ge=1016,or=1017,sr=1018,Wn=1020,gr=35902,vr=35899,br=1021,jr=1022,le=1023,We=1026,Dt=1027,tr=1028,er=1029,Gt=1030,Ja=1031,Za=1033,uo=33776,Gs=33777,js=33778,Bs=33779,Ka=35840,Wa=35841,Eo=35842,$a=35843,Va=36196,Ba=37492,Ia=37496,Ha=37488,Ra=37489,La=37490,Na=37491,Fa=37808,wa=37809,Co=37810,ya=37811,ja=37812,ba=37813,va=37814,pa=37815,fa=37816,da=37817,la=37818,ra=37819,sa=37820,ta=37821,ea=36492,Ji=36494,Zi=36495,Qi=36283,Gi=36284,qi=36285,Ki=36286,os=2300,An=2301,$i=2302,mc=2303,fc=2400,pc=2401,gc=2402,Pu=2500,Lu=0,jc=1,Hi=2,Nu=3200,wc=0,Du=1,et="",M="srgb",H="srgb-linear",ks="linear",p="srgb",un=7680,Mc=519,zu=512,Tu=513,Fu=514,Ni=515,Mu=516,Su=517,Di=518,Au=519,Mi=35044,Ic="300 es",Ce=2e3,hs=2001;function Fp(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Tp(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function xs(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function zp(){const e=xs("canvas");return e.style.display="block",e}qc={},Yt=null;function Ai(...e){const t="THREE."+e.shift();Yt?Yt("log",t,...e):console.log(t,...e)}function Ou(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const t=e[1];t&&t.isStackTrace?e[0]+=" "+t.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function o(...e){e=Ou(e);const t="THREE."+e.shift();if(Yt)Yt("warn",t,...e);else{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function i(...e){e=Ou(e);const t="THREE."+e.shift();if(Yt)Yt("error",t,...e);else{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function xi(...e){const t=e.join(" ");if(t in qc)return;qc[t]=!0,o(...e)}function Dp(e,t,n){return new Promise(function(s,o){function i(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:o();break;case e.TIMEOUT_EXPIRED:setTimeout(i,n);break;default:s()}}setTimeout(i,n)})}yu={[Oa]:xa,[Ca]:Sa,[ka]:Ma,[jn]:Aa,[xa]:Oa,[Sa]:Ca,[Ma]:ka,[Aa]:jn},gn=class{addEventListener(e,t){this._listeners===0[0]&&(this._listeners={});const n=this._listeners;n[e]===0[0]&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n!==0[0]&&n[e]!==0[0]&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===0[0])return;const n=s[e];if(n!==0[0]){const e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){const t=this._listeners;if(t===0[0])return;const n=t[e.type];if(n!==0[0]){e.target=this;const t=n.slice(0);for(let n=0,s=t.length;n<s;n++)t[n].call(this,e);e.target=null}}},R=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=1234567,Sn=Math.PI/180,cn=180/Math.PI;function Oe(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0,o=R[e&255]+R[e>>8&255]+R[e>>16&255]+R[e>>24&255]+"-"+R[t&255]+R[t>>8&255]+"-"+R[t>>16&15|64]+R[t>>24&255]+"-"+R[n&63|128]+R[n>>8&255]+"-"+R[n>>16&255]+R[n>>24&255]+R[s&255]+R[s>>8&255]+R[s>>16&255]+R[s>>24&255];return o.toLowerCase()}function m(e,t,n){return Math.max(t,Math.min(n,e))}function ll(e,t){return(e%t+t)%t}function Np(e,t,n,s,o){return s+(e-t)*(o-s)/(n-t)}function Lp(e,t,n){return e!==t?(n-e)/(t-e):0}function _s(e,t,n){return(1-n)*e+n*t}function Hp(e,t,n,s){return _s(e,t,1-Math.exp(-n*s))}function $p(e,t=1){return t-Math.abs(ll(e,t*2)-t)}function Up(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Kp(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function qp(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Qp(e,t){return e+Math.random()*(t-e)}function eg(e){return e*(.5-Math.random())}function tg(e){e!==0[0]&&(ol=e);let t=ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ng(e){return e*Sn}function sg(e){return e*cn}function ag(e){return(e&e-1)===0&&e!==0}function lg(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function dg(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function K6(e,t,n,s,i){const d=Math.cos,u=Math.sin,a=d(n/2),r=u(n/2),c=d((t+s)/2),l=u((t+s)/2),h=d((t-s)/2),m=u((t-s)/2),f=d((s-t)/2),p=u((s-t)/2);switch(i){case"XYX":e.set(a*l,r*h,r*m,a*c);break;case"YZY":e.set(r*m,a*l,r*h,a*c);break;case"ZXZ":e.set(r*h,r*m,a*l,a*c);break;case"XZX":e.set(a*l,r*p,r*f,a*c);break;case"YXY":e.set(r*f,a*l,r*p,a*c);break;case"ZYZ":e.set(r*p,r*f,a*l,a*c);break;default:o("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ae(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function g(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}nu={DEG2RAD:Sn,RAD2DEG:cn,generateUUID:Oe,clamp:m,euclideanModulo:ll,mapLinear:Np,inverseLerp:Lp,lerp:_s,damp:Hp,pingpong:$p,smoothstep:Up,smootherstep:Kp,randInt:qp,randFloat:Qp,randFloatSpread:eg,seededRandom:tg,degToRad:ng,radToDeg:sg,isPowerOfTwo:ag,ceilPowerOfTwo:lg,floorPowerOfTwo:dg,setQuaternionFromProperEuler:K6,normalize:g,denormalize:Ae},r=class _Vector2{constructor(e=0,t=0){_Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6],this.y=t[1]*n+t[4]*s+t[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=m(this.x,e.x,t.x),this.y=m(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=m(this.x,e,t),this.y=m(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(m(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x|0,this.y=this.y|0,this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return(this.x*this.x+this.y*this.y)**.5}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){const e=Math.atan2(-this.y,-this.x)+Math.PI;return e}angleTo(e){const t=(this.lengthSq()*e.lengthSq())**.5;if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(m(n,-1,1))}distanceTo(e){return this.distanceToSquared(e)**.5}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,i=this.y-e.y;return this.x=o*n-i*s+e.x,this.y=o*s+i*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,i,a){let r=n[s+0],c=n[s+1],l=n[s+2],d=n[s+3],u=o[i+0],h=o[i+1],m=o[i+2],f=o[i+3];if(d!==f||r!==u||c!==h||l!==m){let t=r*u+c*h+l*m+d*f;t<0&&(u=-u,h=-h,m=-m,f=-f,t=-t);let e=1-a;if(t<.9995){const n=Math.acos(t),s=Math.sin(n);e=Math.sin(e*n)/s,a=Math.sin(a*n)/s,r=r*e+u*a,c=c*e+h*a,l=l*e+m*a,d=d*e+f*a}else{r=r*e+u*a,c=c*e+h*a,l=l*e+m*a,d=d*e+f*a;const t=1/(r*r+c*c+l*l+d*d)**.5;r*=t,c*=t,l*=t,d*=t}}e[t]=r,e[t+1]=c,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,o,i){const a=n[s],r=n[s+1],c=n[s+2],l=n[s+3],d=o[i],u=o[i+1],h=o[i+2],m=o[i+3];return e[t]=a*m+l*d+r*h-c*u,e[t+1]=r*m+l*u+c*d-a*h,e[t+2]=c*m+l*h+a*u-r*d,e[t+3]=l*m-a*d-r*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const u=e._x,h=e._y,m=e._z,f=e._order,l=Math.cos,d=Math.sin,n=l(u/2),s=l(h/2),i=l(m/2),a=d(u/2),r=d(h/2),c=d(m/2);switch(f){case"XYZ":this._x=a*s*i+n*r*c,this._y=n*r*i-a*s*c,this._z=n*s*c+a*r*i,this._w=n*s*i-a*r*c;break;case"YXZ":this._x=a*s*i+n*r*c,this._y=n*r*i-a*s*c,this._z=n*s*c-a*r*i,this._w=n*s*i+a*r*c;break;case"ZXY":this._x=a*s*i-n*r*c,this._y=n*r*i+a*s*c,this._z=n*s*c+a*r*i,this._w=n*s*i-a*r*c;break;case"ZYX":this._x=a*s*i-n*r*c,this._y=n*r*i+a*s*c,this._z=n*s*c-a*r*i,this._w=n*s*i+a*r*c;break;case"YZX":this._x=a*s*i+n*r*c,this._y=n*r*i+a*s*c,this._z=n*s*c-a*r*i,this._w=n*s*i-a*r*c;break;case"XZY":this._x=a*s*i-n*r*c,this._y=n*r*i-a*s*c,this._z=n*s*c+a*r*i,this._w=n*s*i+a*r*c;break;default:o("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,n=Math.sin(s);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],r=t[1],s=t[5],c=t[9],l=t[2],d=t[6],o=t[10],u=n+s+o;if(u>0){const e=.5/(u+1)**.5;this._w=.25/e,this._x=(d-c)*e,this._y=(a-l)*e,this._z=(r-i)*e}else if(n>s&&n>o){const e=2*(1+n-s-o)**.5;this._w=(d-c)/e,this._x=.25*e,this._y=(i+r)/e,this._z=(a+l)/e}else if(s>o){const e=2*(1+s-n-o)**.5;this._w=(a-l)/e,this._x=(i+r)/e,this._y=.25*e,this._z=(c+d)/e}else{const e=2*(1+o-n-s)**.5;this._w=(r-i)/e,this._x=(a+l)/e,this._y=(c+d)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(m(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)**.5}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,i=e._w,a=t._x,r=t._y,c=t._z,l=t._w;return this._x=n*l+i*a+s*c-o*r,this._y=s*l+i*r+o*a-n*c,this._z=o*l+i*c+n*r-s*a,this._w=i*l-n*a-s*r-o*c,this._onChangeCallback(),this}slerp(e,t){let o=e._x,i=e._y,a=e._z,r=e._w,s=this.dot(e);s<0&&(o=-o,i=-i,a=-a,r=-r,s=-s);let n=1-t;if(s<.9995){const e=Math.acos(s),c=Math.sin(e);n=Math.sin(n*e)/c,t=Math.sin(t*e)/c,this._x=this._x*n+o*t,this._y=this._y*n+i*t,this._z=this._z*n+a*t,this._w=this._w*n+r*t,this._onChangeCallback()}else this._x=this._x*n+o*t,this._y=this._y*n+i*t,this._z=this._z*n+a*t,this._w=this._w*n+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=(1-n)**.5,o=n**.5;return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},e=class _Vector3{constructor(e=0,t=0,n=0){_Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===0[0]&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[3]*s+t[6]*o,this.y=t[1]*n+t[4]*s+t[7]*o,this.z=t[2]*n+t[5]*s+t[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,t=e.elements,i=1/(t[3]*n+t[7]*s+t[11]*o+t[15]);return this.x=(t[0]*n+t[4]*s+t[8]*o+t[12])*i,this.y=(t[1]*n+t[5]*s+t[9]*o+t[13])*i,this.z=(t[2]*n+t[6]*s+t[10]*o+t[14])*i,this}applyQuaternion(e){const o=this.x,i=this.y,a=this.z,t=e.x,n=e.y,s=e.z,r=e.w,c=2*(n*a-s*i),l=2*(s*o-t*a),d=2*(t*i-n*o);return this.x=o+r*c+n*d-s*l,this.y=i+r*l+s*c-t*d,this.z=a+r*d+t*l-n*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o,this.y=t[1]*n+t[5]*s+t[9]*o,this.z=t[2]*n+t[6]*s+t[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=m(this.x,e.x,t.x),this.y=m(this.y,e.y,t.y),this.z=m(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=m(this.x,e,t),this.y=m(this.y,e,t),this.z=m(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(m(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x|0,this.y=this.y|0,this.z=this.z|0,this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return(this.x*this.x+this.y*this.y+this.z*this.z)**.5}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,i=t.x,a=t.y,r=t.z;return this.x=s*r-o*a,this.y=o*i-n*r,this.z=n*a-s*i,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pi.copy(this).projectOnVector(e),this.sub(pi)}reflect(e){return this.sub(pi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=(this.lengthSq()*e.lengthSq())**.5;if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(m(n,-1,1))}distanceTo(e){return this.distanceToSquared(e)**.5}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=(1-e*e)**.5;return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pi=new e,Dl=new Je,u=class _Matrix3{constructor(e,t,n,s,o,i,a,r,c){_Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==0[0]&&this.set(e,t,n,s,o,i,a,r,c)}set(e,t,n,s,o,i,a,r,c){const l=this.elements;return l[0]=e,l[1]=s,l[2]=a,l[3]=t,l[4]=o,l[5]=r,l[6]=n,l[7]=i,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[3],r=n[6],c=n[1],l=n[4],d=n[7],u=n[2],h=n[5],m=n[8],f=s[0],p=s[3],g=s[6],v=s[1],b=s[4],j=s[7],y=s[2],_=s[5],w=s[8];return o[0]=i*f+a*v+r*y,o[3]=i*p+a*b+r*_,o[6]=i*g+a*j+r*w,o[1]=c*f+l*v+d*y,o[4]=c*p+l*b+d*_,o[7]=c*g+l*j+d*w,o[2]=u*f+h*v+m*y,o[5]=u*p+h*b+m*_,o[8]=u*g+h*j+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],i=e[4],a=e[5],r=e[6],c=e[7],l=e[8];return t*i*l-t*a*c-n*o*l+n*a*r+s*o*c-s*i*r}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],d=e[3],a=e[4],i=e[5],r=e[6],c=e[7],l=e[8],u=l*a-i*c,h=i*r-l*d,m=c*d-a*r,f=n*u+s*h+o*m;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const t=1/f;return e[0]=u*t,e[1]=(o*c-l*s)*t,e[2]=(i*s-o*a)*t,e[3]=h*t,e[4]=(l*n-o*r)*t,e[5]=(o*d-i*n)*t,e[6]=m*t,e[7]=(s*r-c*n)*t,e[8]=(a*n-s*d)*t,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,i,a){const r=Math.cos(o),c=Math.sin(o);return this.set(n*r,n*c,-n*(r*i+c*a)+i+e,-s*c,s*r,-s*(-c*i+r*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mi.makeScale(e,t)),this}rotate(e){return this.premultiply(mi.makeRotation(-e)),this}translate(e,t){return this.premultiply(mi.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return(new this.constructor).fromArray(this.elements)}},mi=new u,Rl=(new u).set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pl=(new u).set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function W6(){const e={enabled:!0,workingColorSpace:H,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===p&&(e.r=tt(e.r),e.g=tt(e.g),e.b=tt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===p&&(e.r=ts(e.r),e.g=ts(e.g),e.b=ts(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===et?ks:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return e.define({[H]:{primaries:t,whitePoint:s,transfer:ks,toXYZ:Rl,fromXYZ:Pl,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:M},outputColorSpaceConfig:{drawingBufferColorSpace:M}},[M]:{primaries:t,whitePoint:s,transfer:p,toXYZ:Rl,fromXYZ:Pl,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:M}}}),e}f=W6();function tt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function ts(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}eu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===0[0]&&(es=xs("canvas")),es.width=e.width,es.height=e.height;const t=es.getContext("2d");e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const o=n.getImageData(0,0,e.width,e.height),s=o.data;for(let e=0;e<s.length;e++)s[e]=tt(s[e]/255)*255;return n.putImageData(o,0,0),t}if(e.data){const t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(tt(t[e]/255)*255):t[e]=tt(t[e]);return{data:t,width:e.width,height:e.height}}return o("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jd=0,li=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Oe(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame!="undefined"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const s=e===0[0]||typeof e=="string";if(!s&&e.images[this.uuid]!==0[0])return e.images[this.uuid];const n={uuid:this.uuid,url:""},t=this.data;if(t!==null){let e;if(Array.isArray(t)){e=[];for(let n=0,s=t.length;n<s;n++)t[n].isDataTexture?e.push(ql(t[n].image)):e.push(ql(t[n]))}else e=ql(t);n.url=e}return s||(e.images[this.uuid]=n),n}};function ql(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap?eu.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(o("Texture: Unable to serialize Texture."),{})}Zd=0,ii=new e,Z=class _Texture extends gn{constructor(e=_Texture.DEFAULT_IMAGE,t=_Texture.DEFAULT_MAPPING,n=xe,s=xe,o=A,i=Pe,a=le,c=se,l=_Texture.DEFAULT_ANISOTROPY,d=et){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Oe(),this.name="",this.source=new li(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=i,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new r(0,0),this.repeat=new r(1,1),this.center=new r(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new u,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ii).x}get height(){return this.source.getSize(ii).y}get depth(){return this.source.getSize(ii).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return(new this.constructor).copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const s in e){const t=e[s];if(t===0[0]){o(`Texture.setValues(): parameter '${s}' has value of undefined.`);continue}const n=this[s];if(n===0[0]){o(`Texture.setValues(): property '${s}' does not exist.`);continue}n&&t&&n.isVector2&&t.isVector2?n.copy(t):n&&t&&n.isVector3&&t.isVector3?n.copy(t):n&&t&&n.isMatrix3&&t.isMatrix3?n.copy(t):this[s]=t}}toJSON(e){const n=e===0[0]||typeof e=="string";if(!n&&e.textures[this.uuid]!==0[0])return e.textures[this.uuid];const t={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),n||(e.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zr)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case xe:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case xe:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}},Z.DEFAULT_IMAGE=null,Z.DEFAULT_MAPPING=zr,Z.DEFAULT_ANISOTROPY=1,b=class _Vector4{constructor(e=0,t=0,n=0,s=1){_Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==0[0]?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,i=this.w,t=e.elements;return this.x=t[0]*n+t[4]*s+t[8]*o+t[12]*i,this.y=t[1]*n+t[5]*s+t[9]*o+t[13]*i,this.z=t[2]*n+t[6]*s+t[10]*o+t[14]*i,this.w=t[3]*n+t[7]*s+t[11]*o+t[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=(1-e.w*e.w)**.5;return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let v,n,s,o;const a=.01,m=.1,t=e.elements,f=t[0],i=t[4],r=t[8],c=t[1],p=t[5],l=t[9],d=t[2],u=t[6],g=t[10];if(Math.abs(i-c)<a&&Math.abs(r-d)<a&&Math.abs(l-u)<a){if(Math.abs(i+c)<m&&Math.abs(r+d)<m&&Math.abs(l+u)<m&&Math.abs(f+p+g-3)<m)return this.set(1,0,0,0),this;v=Math.PI;const e=(f+1)/2,t=(p+1)/2,h=(g+1)/2,b=(i+c)/4,j=(r+d)/4,y=(l+u)/4;return e>t&&e>h?e<a?(n=0,s=.707106781,o=.707106781):(n=e**.5,s=b/n,o=j/n):t>h?t<a?(n=.707106781,s=0,o=.707106781):(s=t**.5,n=b/s,o=y/s):h<a?(n=.707106781,s=.707106781,o=0):(o=h**.5,n=j/o,s=y/o),this.set(n,s,o,v),this}let h=((u-l)*(u-l)+(r-d)*(r-d)+(c-i)*(c-i))**.5;return(h<0?-h:h)<.001&&(h=1),this.x=(u-l)/h,this.y=(r-d)/h,this.z=(c-i)/h,this.w=Math.acos((f+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=m(this.x,e.x,t.x),this.y=m(this.y,e.y,t.y),this.z=m(this.z,e.z,t.z),this.w=m(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=m(this.x,e,t),this.y=m(this.y,e,t),this.z=m(this.z,e,t),this.w=m(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(m(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x|0,this.y=this.y|0,this.z=this.z|0,this.w=this.w|0,this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)**.5}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qd=class extends gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:A,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new b(0,0,e,t),this.scissorTest=!1,this.viewport=new b(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},o=new Z(s),i=n.count;for(let e=0;e<i;e++)this.textures[e]=o.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:A,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==0[0]&&(t.mapping=e.mapping),e.wrapS!==0[0]&&(t.wrapS=e.wrapS),e.wrapT!==0[0]&&(t.wrapT=e.wrapT),e.wrapR!==0[0]&&(t.wrapR=e.wrapR),e.magFilter!==0[0]&&(t.magFilter=e.magFilter),e.minFilter!==0[0]&&(t.minFilter=e.minFilter),e.format!==0[0]&&(t.format=e.format),e.type!==0[0]&&(t.type=e.type),e.anisotropy!==0[0]&&(t.anisotropy=e.anisotropy),e.colorSpace!==0[0]&&(t.colorSpace=e.colorSpace),e.flipY!==0[0]&&(t.flipY=e.flipY),e.generateMipmaps!==0[0]&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==0[0]&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++){const n=this.textures[e];n.setValues(t)}}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return(new this.constructor).copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new li(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Te=class extends Qd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ed=class extends Z{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=E,this.minFilter=E,this.wrapR=xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Xd=class extends Z{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=E,this.minFilter=E,this.wrapR=xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},d=class _Matrix4{constructor(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p){_Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==0[0]&&this.set(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p)}set(e,t,n,s,o,i,a,r,c,l,d,u,h,m,f,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=o,g[5]=i,g[9]=a,g[13]=r,g[2]=c,g[6]=l,g[10]=d,g[14]=u,g[3]=h,g[7]=m,g[11]=f,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new _Matrix4).fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Wt.setFromMatrixColumn(e,0).length(),o=1/Wt.setFromMatrixColumn(e,1).length(),i=1/Wt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*i,t[9]=n[9]*i,t[10]=n[10]*i,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,c=e.x,l=e.y,d=e.z,i=Math.cos(c),n=Math.sin(c),a=Math.cos(l),s=Math.sin(l),r=Math.cos(d),o=Math.sin(d);if(e.order==="XYZ"){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=-a*o,t[8]=s,t[1]=c+l*s,t[5]=e-d*s,t[9]=-n*a,t[2]=d-e*s,t[6]=l+c*s,t[10]=i*a}else if(e.order==="YXZ"){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e+d*n,t[4]=l*n-c,t[8]=i*s,t[1]=i*o,t[5]=i*r,t[9]=-n,t[2]=c*n-l,t[6]=d+e*n,t[10]=i*a}else if(e.order==="ZXY"){const e=a*r,c=a*o,l=s*r,d=s*o;t[0]=e-d*n,t[4]=-i*o,t[8]=l+c*n,t[1]=c+l*n,t[5]=i*r,t[9]=d-e*n,t[2]=-i*s,t[6]=n,t[10]=i*a}else if(e.order==="ZYX"){const e=i*r,c=i*o,l=n*r,d=n*o;t[0]=a*r,t[4]=l*s-c,t[8]=e*s+d,t[1]=a*o,t[5]=d*s+e,t[9]=c*s-l,t[2]=-s,t[6]=n*a,t[10]=i*a}else if(e.order==="YZX"){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=d-e*o,t[8]=l*o+c,t[1]=o,t[5]=i*r,t[9]=-n*r,t[2]=-s*r,t[6]=c*o+l,t[10]=e-d*o}else if(e.order==="XZY"){const e=i*a,c=i*s,l=n*a,d=n*s;t[0]=a*r,t[4]=-o,t[8]=s*r,t[1]=e*o+d,t[5]=i*r,t[9]=c*o-l,t[2]=l*o-c,t[6]=n*r,t[10]=d*o+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gd,e,Yd)}lookAt(e,t,n){const s=this.elements;return oe.subVectors(e,t),oe.lengthSq()===0&&(oe.z=1),oe.normalize(),gt.crossVectors(n,oe),gt.lengthSq()===0&&(Math.abs(n.z)===1?oe.x+=1e-4:oe.z+=1e-4,oe.normalize(),gt.crossVectors(n,oe)),gt.normalize(),no.crossVectors(oe,gt),s[0]=gt.x,s[4]=no.x,s[8]=oe.x,s[1]=gt.y,s[5]=no.y,s[9]=oe.y,s[2]=gt.z,s[6]=no.z,s[10]=oe.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,i=n[0],a=n[4],r=n[8],c=n[12],l=n[1],d=n[5],u=n[9],h=n[13],m=n[2],f=n[6],p=n[10],g=n[14],v=n[3],b=n[7],j=n[11],y=n[15],_=s[0],w=s[4],O=s[8],x=s[12],C=s[1],E=s[5],k=s[9],A=s[13],S=s[2],M=s[6],F=s[10],T=s[14],z=s[3],D=s[7],N=s[11],L=s[15];return o[0]=i*_+a*C+r*S+c*z,o[4]=i*w+a*E+r*M+c*D,o[8]=i*O+a*k+r*F+c*N,o[12]=i*x+a*A+r*T+c*L,o[1]=l*_+d*C+u*S+h*z,o[5]=l*w+d*E+u*M+h*D,o[9]=l*O+d*k+u*F+h*N,o[13]=l*x+d*A+u*T+h*L,o[2]=m*_+f*C+p*S+g*z,o[6]=m*w+f*E+p*M+g*D,o[10]=m*O+f*k+p*F+g*N,o[14]=m*x+f*A+p*T+g*L,o[3]=v*_+b*C+j*S+y*z,o[7]=v*w+b*E+j*M+y*D,o[11]=v*O+b*k+j*F+y*N,o[15]=v*x+b*A+j*T+y*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,j=e[0],y=e[4],w=e[8],_=e[12],i=e[1],a=e[5],r=e[9],c=e[13],l=e[2],t=e[6],h=e[10],n=e[14],d=e[3],u=e[7],o=e[11],s=e[15],m=r*n-c*h,f=a*n-c*t,p=a*h-r*t,g=i*n-c*l,v=i*h-r*l,b=i*t-a*l;return j*(u*m-o*f+s*p)-y*(d*m-o*g+s*v)+w*(d*f-u*g+s*b)-_*(d*p-u*v+o*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,v=e[0],f=e[1],g=e[2],o=e[3],i=e[4],a=e[5],r=e[6],c=e[7],s=e[8],d=e[9],u=e[10],h=e[11],m=e[12],n=e[13],p=e[14],l=e[15],_=v*a-f*i,S=v*r-g*i,j=v*c-o*i,y=f*r-g*a,b=f*c-o*a,w=g*c-o*r,O=s*n-d*m,x=s*p-u*m,C=s*l-h*m,E=d*p-u*n,k=d*l-h*n,A=u*l-h*p,M=_*A-S*k+j*E+y*C-b*x+w*O;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const t=1/M;return e[0]=(a*A-r*k+c*E)*t,e[1]=(g*k-f*A-o*E)*t,e[2]=(n*w-p*b+l*y)*t,e[3]=(u*b-d*w-h*y)*t,e[4]=(r*C-i*A-c*x)*t,e[5]=(v*A-g*C+o*x)*t,e[6]=(p*j-m*w-l*S)*t,e[7]=(s*w-u*j+h*S)*t,e[8]=(i*k-a*C+c*O)*t,e[9]=(f*C-v*k-o*O)*t,e[10]=(m*b-n*j+l*_)*t,e[11]=(d*j-s*b-h*_)*t,e[12]=(a*x-i*E-r*O)*t,e[13]=(v*E-f*x+g*O)*t,e[14]=(n*S-m*y-p*_)*t,e[15]=(s*y-d*S+u*_)*t,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.max(t,n,s)**.5}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),c=1-a,r=e.x,o=e.y,n=e.z,i=c*r,l=c*o;return this.set(i*r+a,i*o-s*n,i*n+s*o,0,i*o+s*n,l*o+a,l*n-s*r,0,i*n-s*o,l*n+s*r,c*n*n+a,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,i){return this.set(1,n,o,0,e,1,i,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,i=t._y,r=t._z,c=t._w,w=o+o,d=i+i,a=r+r,_=o*w,y=o*d,m=o*a,f=i*d,p=i*a,g=r*a,v=c*w,b=c*d,j=c*a,h=n.x,u=n.y,l=n.z;return s[0]=(1-(f+g))*h,s[1]=(y+j)*h,s[2]=(m-b)*h,s[3]=0,s[4]=(y-j)*u,s[5]=(1-(_+g))*u,s[6]=(p+v)*u,s[7]=0,s[8]=(m+b)*l,s[9]=(p-v)*l,s[10]=(1-(_+f))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const c=this.determinant();if(c===0)return n.set(1,1,1),t.identity(),this;let o=Wt.set(s[0],s[1],s[2]).length();const l=Wt.set(s[4],s[5],s[6]).length(),d=Wt.set(s[8],s[9],s[10]).length();c<0&&(o=-o),fe.copy(this);const i=1/o,a=1/l,r=1/d;return fe.elements[0]*=i,fe.elements[1]*=i,fe.elements[2]*=i,fe.elements[4]*=a,fe.elements[5]*=a,fe.elements[6]*=a,fe.elements[8]*=r,fe.elements[9]*=r,fe.elements[10]*=r,t.setFromRotationMatrix(fe),n.x=o,n.y=l,n.z=d,this}makePerspective(e,t,n,s,o,i,a=Ce,r=!1){const c=this.elements,u=2*o/(t-e),h=2*o/(n-s),m=(t+e)/(t-e),f=(n+s)/(n-s);let l,d;if(r)l=o/(i-o),d=i*o/(i-o);else if(a===Ce)l=-(i+o)/(i-o),d=-2*i*o/(i-o);else if(a===hs)l=-i/(i-o),d=-i*o/(i-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=l,c[14]=d,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,o,i,a=Ce,r=!1){const c=this.elements,u=2/(t-e),h=2/(n-s),m=-(t+e)/(t-e),f=-(n+s)/(n-s);let l,d;if(r)l=1/(i-o),d=i/(i-o);else if(a===Ce)l=-2/(i-o),d=-(i+o)/(i-o);else if(a===hs)l=-1/(i-o),d=-o/(i-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=l,c[14]=d,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Wt=new e,fe=new d,Gd=new e(0,0,0),Yd=new e(1,1,1),gt=new e,no=new e,oe=new e,dd=new d,ud=new Je,mt=class _Euler{constructor(e=0,t=0,n=0,s=_Euler.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,i=s[0],c=s[4],l=s[8],d=s[1],a=s[5],u=s[9],h=s[2],f=s[6],r=s[10];switch(t){case"XYZ":this._y=Math.asin(m(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,r),this._z=Math.atan2(-c,i)):(this._x=Math.atan2(f,a),this._z=0);break;case"YXZ":this._x=Math.asin(-m(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,r),this._z=Math.atan2(d,a)):(this._y=Math.atan2(-h,i),this._z=0);break;case"ZXY":this._x=Math.asin(m(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,r),this._z=Math.atan2(-c,a)):(this._y=0,this._z=Math.atan2(d,i));break;case"ZYX":this._y=Math.asin(-m(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,r),this._z=Math.atan2(d,i)):(this._x=0,this._z=Math.atan2(-c,a));break;case"YZX":this._z=Math.asin(m(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-u,a),this._y=Math.atan2(-h,i)):(this._x=0,this._y=Math.atan2(l,r));break;case"XZY":this._z=Math.asin(-m(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,a),this._y=Math.atan2(l,i)):(this._x=Math.atan2(-u,r),this._y=0);break;default:o("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==0[0]&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},mt.DEFAULT_ORDER="XYZ",Wo=class{constructor(){this.mask=1|0}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qd=0,pd=new e,Zt=new Je,Ke=new d,co=new e,Kn=new e,Kd=new e,Ud=new Je,wd=new e(1,0,0),Od=new e(0,1,0),xd=new e(0,0,1),Cd={type:"added"},Wd={type:"removed"},fn={type:"childadded",child:null},Lo={type:"childremoved",child:null},O=class _Object3D extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Oe(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_Object3D.DEFAULT_UP.clone();const s=new e,t=new mt,n=new Je,o=new e(1,1,1);function i(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,0[0],!1)}t._onChange(i),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:s},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new d},normalMatrix:{value:new u}}),this.matrix=new d,this.matrixWorld=new d,this.matrixAutoUpdate=_Object3D.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=0[0],this.customDistanceMaterial=0[0],this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zt.setFromAxisAngle(e,t),this.quaternion.multiply(Zt),this}rotateOnWorldAxis(e,t){return Zt.setFromAxisAngle(e,t),this.quaternion.premultiply(Zt),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return pd.copy(e).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ke.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?co.copy(e):co.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Kn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ke.lookAt(Kn,co,this.up):Ke.lookAt(co,Kn,this.up),this.quaternion.setFromRotationMatrix(Ke),s&&(Ke.extractRotation(s.matrixWorld),Zt.setFromRotationMatrix(Ke),this.quaternion.premultiply(Zt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(i("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cd),fn.child=e,this.dispatchEvent(fn),fn.child=null):i("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wd),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ke.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ke.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ke),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cd),fn.child=e,this.dispatchEvent(fn),fn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,o=this.children.length;n<o;n++){const i=this.children[n],s=i.getObjectByProperty(e,t);if(s!==0[0])return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,i=s.length;o<i;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,e,Kd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kn,Ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,s=e.y,o=e.z,t=this.matrix.elements;t[12]+=n-t[0]*n-t[4]*s-t[8]*o,t[13]+=s-t[1]*n-t[5]*s-t[9]*o,t[14]+=o-t[2]*n-t[6]*s-t[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const e=this.children;for(let t=0,n=e.length;t<n;t++){const s=e[t];s.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===0[0]||typeof e=="string",n={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const t={};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.castShadow===!0&&(t.castShadow=!0),this.receiveShadow===!0&&(t.receiveShadow=!0),this.visible===!1&&(t.visible=!1),this.frustumCulled===!1&&(t.frustumCulled=!1),this.renderOrder!==0&&(t.renderOrder=this.renderOrder),this.static!==!1&&(t.static=this.static),Object.keys(this.userData).length>0&&(t.userData=this.userData),t.layers=this.layers.mask,t.matrix=this.matrix.toArray(),t.up=this.up.toArray(),this.pivot!==null&&(t.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(t.matrixAutoUpdate=!1),this.morphTargetDictionary!==0[0]&&(t.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==0[0]&&(t.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(t.type="InstancedMesh",t.count=this.count,t.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(t.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(t.type="BatchedMesh",t.perObjectFrustumCulled=this.perObjectFrustumCulled,t.sortObjects=this.sortObjects,t.drawRanges=this._drawRanges,t.reservedRanges=this._reservedRanges,t.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():0[0],boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():0[0]})),t.instanceInfo=this._instanceInfo.map(e=>({...e})),t.availableInstanceIds=this._availableInstanceIds.slice(),t.availableGeometryIds=this._availableGeometryIds.slice(),t.nextIndexStart=this._nextIndexStart,t.nextVertexStart=this._nextVertexStart,t.geometryCount=this._geometryCount,t.maxInstanceCount=this._maxInstanceCount,t.maxVertexCount=this._maxVertexCount,t.maxIndexCount=this._maxIndexCount,t.geometryInitialized=this._geometryInitialized,t.matricesTexture=this._matricesTexture.toJSON(e),t.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(t.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(t.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(t.boundingBox=this.boundingBox.toJSON()));function o(t,n){return t[n.uuid]===0[0]&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?t.background=this.background.toJSON():this.background.isTexture&&(t.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(t.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){t.geometry=o(e.geometries,this.geometry);const n=this.geometry.parameters;if(n!==0[0]&&n.shapes!==0[0]){const t=n.shapes;if(Array.isArray(t))for(let n=0,s=t.length;n<s;n++){const i=t[n];o(e.shapes,i)}else o(e.shapes,t)}}if(this.isSkinnedMesh&&(t.bindMode=this.bindMode,t.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==0[0]&&(o(e.skeletons,this.skeleton),t.skeleton=this.skeleton.uuid)),this.material!==0[0])if(Array.isArray(this.material)){const n=[];for(let t=0,s=this.material.length;t<s;t++)n.push(o(e.materials,this.material[t]));t.material=n}else t.material=o(e.materials,this.material);if(this.children.length>0){t.children=[];for(let n=0;n<this.children.length;n++)t.children.push(this.children[n].toJSON(e).object)}if(this.animations.length>0){t.animations=[];for(let n=0;n<this.animations.length;n++){const s=this.animations[n];t.animations.push(o(e.animations,s))}}if(i){const t=s(e.geometries),o=s(e.materials),i=s(e.textures),a=s(e.images),r=s(e.shapes),c=s(e.skeletons),l=s(e.animations),d=s(e.nodes);t.length>0&&(n.geometries=t),o.length>0&&(n.materials=o),i.length>0&&(n.textures=i),a.length>0&&(n.images=a),r.length>0&&(n.shapes=r),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),d.length>0&&(n.nodes=d)}return n.object=t,n;function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}}clone(e){return(new this.constructor).copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){const n=e.children[t];this.add(n.clone())}return this}},O.DEFAULT_UP=new e(0,1,0),O.DEFAULT_MATRIX_AUTO_UPDATE=!0,O.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,Et=class extends O{constructor(){super(),this.isGroup=!0,this.type="Group"}},th={type:"move"},zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new e),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new e),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,c=null;const s=this._targetRay,o=this._grip,r=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(r&&e.hand){c=!0;for(const i of e.hand.values()){const o=t.getJointPose(i,n),s=this._getHandJoint(r,i);o!==null&&(s.matrix.fromArray(o.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,s.jointRadius=o.radius),s.visible=o!==null}const a=r.joints["index-finger-tip"],l=r.joints["thumb-tip"],s=a.position.distanceTo(l.position),o=.02,i=.005;r.inputState.pinching&&s>o+i?(r.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!r.inputState.pinching&&s<=o-i&&(r.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(th)))}return s!==null&&(s.visible=i!==null),o!==null&&(o.visible=a!==null),r!==null&&(r.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===0[0]){const n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nt={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Ld(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}a=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===0[0]&&n===0[0]){const t=e;t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=M){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,f.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=f.workingColorSpace){return this.r=e,this.g=t,this.b=n,f.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=f.workingColorSpace){if(e=ll(e,1),t=m(t,0,1),n=m(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ld(o,s,e+1/3),this.g=Ld(o,s,e),this.b=Ld(o,s,e-1/3)}return f.colorSpaceToWorking(this,s),this}setStyle(e,t=M){function s(t){if(t===0[0])return;parseFloat(t)<1&&o("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^)]*)\)/.exec(e)){let i;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return s(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return s(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)%\s*,\s*(\d*\.?\d+)%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return s(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:o("Color: Unknown color model "+e)}}else if(n=/^#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],i=s.length;if(i===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(s,16),t);o("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=M){const n=zd[e.toLowerCase()];return n!==0[0]?this.setHex(n,t):o("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tt(e.r),this.g=tt(e.g),this.b=tt(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=M){return f.workingToColorSpace(P.copy(this),e),Math.round(m(P.r*255,0,255))*65536+Math.round(m(P.g*255,0,255))*256+Math.round(m(P.b*255,0,255))}getHexString(e=M){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=f.workingColorSpace){f.workingToColorSpace(P.copy(this),t);const a=P.r,n=P.g,s=P.b,o=Math.max(a,n,s),r=Math.min(a,n,s);let i,c;const l=(r+o)/2;if(r===o)i=0,c=0;else{const e=o-r;switch(c=l<=.5?e/(o+r):e/(2-o-r),o){case a:i=(n-s)/e+(n<s?6:0);break;case n:i=(s-a)/e+2;break;case s:i=(a-n)/e+4;break}i/=6}return e.h=i,e.s=c,e.l=l,e}getRGB(e,t=f.workingColorSpace){return f.workingToColorSpace(P.copy(this),t),e.r=P.r,e.g=P.g,e.b=P.b,e}getStyle(e=M){f.workingToColorSpace(P.copy(this),e);const t=P.r,n=P.g,s=P.b;return e!==M?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(nt),this.setHSL(nt.h+e,nt.s+t,nt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nt),e.getHSL(Oo);const n=_s(nt.h,Oo.h,t),s=_s(nt.s,Oo.s,t),o=_s(nt.l,Oo.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,o=this.b,t=e.elements;return this.r=t[0]*n+t[3]*s+t[6]*o,this.g=t[1]*n+t[4]*s+t[7]*o,this.b=t[2]*n+t[5]*s+t[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},P=new a,a.NAMES=zd,Hd=class extends O{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mt,this.environmentIntensity=1,this.environmentRotation=new mt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},je=new e,Re=new e,_a=new e,Xe=new e,hn=new e,sn=new e,yd=new e,$o=new e,Qo=new e,Zo=new e,ti=new b,si=new b,ri=new b,Qt=class _Triangle{constructor(t=new e,n=new e,s=new e){this.a=t,this.b=n,this.c=s}static getNormal(e,t,n,s){s.subVectors(n,t),je.subVectors(e,t),s.cross(je);const o=s.lengthSq();return o>0?s.multiplyScalar(1/o**.5):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){je.subVectors(s,t),Re.subVectors(n,t),_a.subVectors(e,t);const a=je.dot(je),i=je.dot(Re),r=je.dot(_a),c=Re.dot(Re),l=Re.dot(_a),d=a*c-i*i;if(d===0)return o.set(0,0,0),null;const u=1/d,h=(c*r-i*l)*u,m=(a*l-i*r)*u;return o.set(1-h-m,m,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xe)!==null&&Xe.x>=0&&Xe.y>=0&&Xe.x+Xe.y<=1}static getInterpolation(e,t,n,s,o,i,a,r){return this.getBarycoord(e,t,n,s,Xe)===null?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(o,Xe.x),r.addScaledVector(i,Xe.y),r.addScaledVector(a,Xe.z),r)}static getInterpolatedAttribute(e,t,n,s,o,i){return ti.setScalar(0),si.setScalar(0),ri.setScalar(0),ti.fromBufferAttribute(e,t),si.fromBufferAttribute(e,n),ri.fromBufferAttribute(e,s),i.setScalar(0),i.addScaledVector(ti,o.x),i.addScaledVector(si,o.y),i.addScaledVector(ri,o.z),i}static isFrontFacing(e,t,n,s){return je.subVectors(n,t),Re.subVectors(e,t),je.cross(Re).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return(new this.constructor).copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return je.subVectors(this.c,this.b),Re.subVectors(this.a,this.b),je.cross(Re).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return _Triangle.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return _Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const o=this.a,d=this.b,h=this.c;let u,i;hn.subVectors(d,o),sn.subVectors(h,o),$o.subVectors(e,o);const a=hn.dot($o),r=sn.dot($o);if(a<=0&&r<=0)return t.copy(o);Qo.subVectors(e,d);const n=hn.dot(Qo),c=sn.dot(Qo);if(n>=0&&c<=n)return t.copy(d);const m=a*c-n*r;if(m<=0&&a>=0&&n<=0)return u=a/(a-n),t.copy(o).addScaledVector(hn,u);Zo.subVectors(e,h);const l=hn.dot(Zo),s=sn.dot(Zo);if(s>=0&&l<=s)return t.copy(h);const f=l*r-a*s;if(f<=0&&r>=0&&s<=0)return i=r/(r-s),t.copy(o).addScaledVector(sn,i);const p=n*s-l*c;if(p<=0&&c-n>=0&&l-s>=0)return yd.subVectors(h,d),i=(c-n)/(c-n+(l-s)),t.copy(d).addScaledVector(yd,i);const g=1/(p+f+m);return u=f*g,i=m*g,t.copy(o).addScaledVector(hn,u).addScaledVector(sn,i)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$e=class{constructor(t=new e(1/0,1/0,1/0),n=new e(-(1/0),-(1/0),-(1/0))){this.isBox3=!0,this.min=t,this.max=n}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ge.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ge.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ge.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return(new this.constructor).copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-(1/0),this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==0[0]){const s=n.getAttribute("position");if(t===!0&&s!==0[0]&&e.isInstancedMesh!==!0)for(let t=0,n=s.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ge):ge.fromBufferAttribute(s,t),ge.applyMatrix4(e.matrixWorld),this.expandByPoint(ge);else e.boundingBox!==0[0]?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const s=e.children;for(let e=0,n=s.length;e<n;e++)this.expandByObject(s[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ge),ge.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Ss.subVectors(this.max,ss),xn.subVectors(e.a,ss),Ht.subVectors(e.b,ss),Bt.subVectors(e.c,ss),ht.subVectors(Ht,xn),ut.subVectors(Bt,Ht),Tt.subVectors(xn,Bt);let t=[0,-ht.z,ht.y,0,-ut.z,ut.y,0,-Tt.z,Tt.y,ht.z,0,-ht.x,ut.z,0,-ut.x,Tt.z,0,-Tt.x,-ht.y,ht.x,0,-ut.y,ut.x,0,-Tt.y,Tt.x,0];return!!pl(t,xn,Ht,Bt,Ss)&&(t=[1,0,0,0,1,0,0,0,1],!!pl(t,xn,Ht,Bt,Ss)&&(As.crossVectors(ht,ut),t=[As.x,As.y,As.z],pl(t,xn,Ht,Bt,Ss)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ge).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ge).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ze[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ze[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ze[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ze[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ze[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ze[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ze[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ze[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ze),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ze=[new e,new e,new e,new e,new e,new e,new e,new e],ge=new e,Vs=new $e,xn=new e,Ht=new e,Bt=new e,ht=new e,ut=new e,Tt=new e,ss=new e,Ss=new e,As=new e,At=new e;function pl(e,t,n,s,o){for(let i=0,l=e.length-3;i<=l;i+=3){At.fromArray(e,i);const d=o.x*Math.abs(At.x)+o.y*Math.abs(At.y)+o.z*Math.abs(At.z),a=t.dot(At),r=n.dot(At),c=s.dot(At);if(Math.max(-Math.max(a,r,c),Math.min(a,r,c))>d)return!1}return!0}x=new e,ws=new r,vu=0,V=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==0[0]?e.length/t:0,this.normalized=n,this.usage=Mi,this.updateRanges=[],this.gpuType=ue,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)x.fromBufferAttribute(this,t),x.applyMatrix3(e),this.setXYZ(t,x.x,x.y,x.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)x.fromBufferAttribute(this,t),x.applyMatrix4(e),this.setXYZ(t,x.x,x.y,x.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)x.fromBufferAttribute(this,t),x.applyNormalMatrix(e),this.setXYZ(t,x.x,x.y,x.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)x.fromBufferAttribute(this,t),x.transformDirection(e),this.setXYZ(t,x.x,x.y,x.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ae(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=g(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ae(t,this.array)),t}setX(e,t){return this.normalized&&(t=g(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ae(t,this.array)),t}setY(e,t){return this.normalized&&(t=g(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ae(t,this.array)),t}setZ(e,t){return this.normalized&&(t=g(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ae(t,this.array)),t}setW(e,t){return this.normalized&&(t=g(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=g(t,this.array),n=g(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=g(t,this.array),n=g(n,this.array),s=g(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=g(t,this.array),n=g(n,this.array),s=g(s,this.array),o=g(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mi&&(e.usage=this.usage),e}},dl=class extends V{constructor(e,t,n){super(new Uint16Array(e),t,n)}},dr=class extends V{constructor(e,t,n){super(new Uint32Array(e),t,n)}},I=class extends V{constructor(e,t,n){super(new Float32Array(e),t,n)}},wu=new $e,ps=new e,Si=new e,_e=class{constructor(t=new e,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==0[0]?n.copy(t):wu.setFromPoints(e).getCenter(n);let s=0;for(let t=0,o=e.length;t<o;t++)s=Math.max(s,n.distanceToSquared(e[t]));return this.radius=s**.5,this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const e=t**.5,n=(e-this.radius)*.5;this.center.addScaledVector(ps,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Si.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(Si)),this.expandByPoint(ps.copy(e.center).sub(Si))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return(new this.constructor).copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Eu=0,de=new d,zi=new O,On=new e,te=new $e,us=new $e,T=new e,ne=class _BufferGeometry extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Oe(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fp(e)?dr:dl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==0[0]}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==0[0]&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==0[0]){const t=(new u).getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==0[0]&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return de.makeRotationFromQuaternion(e),this.applyMatrix4(de),this}rotateX(e){return de.makeRotationX(e),this.applyMatrix4(de),this}rotateY(e){return de.makeRotationY(e),this.applyMatrix4(de),this}rotateZ(e){return de.makeRotationZ(e),this.applyMatrix4(de),this}translate(e,t,n){return de.makeTranslation(e,t,n),this.applyMatrix4(de),this}scale(e,t,n){return de.makeScale(e,t,n),this.applyMatrix4(de),this}lookAt(e){return zi.lookAt(e),zi.updateMatrix(),this.applyMatrix4(zi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===0[0]){const t=[];for(let n=0,o=e.length;n<o;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}this.setAttribute("position",new I(t,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&o("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){i("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new e(-(1/0),-(1/0),-(1/0)),new e(1/0,1/0,1/0));return}if(t!==0[0]){if(this.boundingBox.setFromBufferAttribute(t),n)for(let e=0,t=n.length;e<t;e++){const s=n[e];te.setFromBufferAttribute(s),this.morphTargetsRelative?(T.addVectors(this.boundingBox.min,te.min),this.boundingBox.expandByPoint(T),T.addVectors(this.boundingBox.max,te.max),this.boundingBox.expandByPoint(T)):(this.boundingBox.expandByPoint(te.min),this.boundingBox.expandByPoint(te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&i('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _e);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){i("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new e,1/0);return}if(t){const s=this.boundingSphere.center;if(te.setFromBufferAttribute(t),n)for(let e=0,t=n.length;e<t;e++){const s=n[e];us.setFromBufferAttribute(s),this.morphTargetsRelative?(T.addVectors(te.min,us.min),te.expandByPoint(T),T.addVectors(te.max,us.max),te.expandByPoint(T)):(te.expandByPoint(us.min),te.expandByPoint(us.max))}te.getCenter(s);let e=0;for(let n=0,o=t.count;n<o;n++)T.fromBufferAttribute(t,n),e=Math.max(e,s.distanceToSquared(T));if(n)for(let o=0,a=n.length;o<a;o++){const i=n[o],r=this.morphTargetsRelative;for(let n=0,o=i.count;n<o;n++)T.fromBufferAttribute(i,n),r&&(On.fromBufferAttribute(t,n),T.add(On)),e=Math.max(e,s.distanceToSquared(T))}this.boundingSphere.radius=e**.5,isNaN(this.boundingSphere.radius)&&i('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,s=this.attributes;if(t===null||s.position===0[0]||s.normal===0[0]||s.uv===0[0]){i("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const c=s.position,O=s.normal,y=s.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new V(new Float32Array(4*c.count),4));const C=this.getAttribute("tangent"),d=[],u=[];for(let t=0;t<c.count;t++)d[t]=new e,u[t]=new e;const b=new e,f=new e,m=new e,v=new r,n=new r,a=new r,p=new e,h=new e;function x(e,t,s){b.fromBufferAttribute(c,e),f.fromBufferAttribute(c,t),m.fromBufferAttribute(c,s),v.fromBufferAttribute(y,e),n.fromBufferAttribute(y,t),a.fromBufferAttribute(y,s),f.sub(b),m.sub(b),n.sub(v),a.sub(v);const o=1/(n.x*a.y-a.x*n.y);if(!isFinite(o))return;p.copy(f).multiplyScalar(a.y).addScaledVector(m,-n.y).multiplyScalar(o),h.copy(m).multiplyScalar(n.x).addScaledVector(f,-a.x).multiplyScalar(o),d[e].add(p),d[t].add(p),d[s].add(p),u[e].add(h),u[t].add(h),u[s].add(h)}let o=this.groups;o.length===0&&(o=[{start:0,count:t.count}]);for(let e=0,i=o.length;e<i;++e){const n=o[e],s=n.start,a=n.count;for(let e=s,n=s+a;e<n;e+=3)x(t.getX(e+0),t.getX(e+1),t.getX(e+2))}const l=new e,_=new e,g=new e,w=new e;function j(e){g.fromBufferAttribute(O,e),w.copy(g);const t=d[e];l.copy(t),l.sub(g.multiplyScalar(g.dot(t))).normalize(),_.crossVectors(w,t);const n=_.dot(u[e]),s=n<0?-1:1;C.setXYZW(e,l.x,l.y,l.z,s)}for(let e=0,i=o.length;e<i;++e){const n=o[e],s=n.start,a=n.count;for(let e=s,n=s+a;e<n;e+=3)j(t.getX(e+0)),j(t.getX(e+1)),j(t.getX(e+2))}}computeVertexNormals(){const n=this.index,t=this.getAttribute("position");if(t!==0[0]){let o=this.getAttribute("normal");if(o===0[0])o=new V(new Float32Array(t.count*3),3),this.setAttribute("normal",o);else for(let e=0,t=o.count;e<t;e++)o.setXYZ(e,0,0,0);const l=new e,i=new e,d=new e,a=new e,r=new e,c=new e,s=new e,u=new e;if(n)for(let e=0,p=n.count;e<p;e+=3){const h=n.getX(e+0),m=n.getX(e+1),f=n.getX(e+2);l.fromBufferAttribute(t,h),i.fromBufferAttribute(t,m),d.fromBufferAttribute(t,f),s.subVectors(d,i),u.subVectors(l,i),s.cross(u),a.fromBufferAttribute(o,h),r.fromBufferAttribute(o,m),c.fromBufferAttribute(o,f),a.add(s),r.add(s),c.add(s),o.setXYZ(h,a.x,a.y,a.z),o.setXYZ(m,r.x,r.y,r.z),o.setXYZ(f,c.x,c.y,c.z)}else for(let e=0,n=t.count;e<n;e+=3)l.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),d.fromBufferAttribute(t,e+2),s.subVectors(d,i),u.subVectors(l,i),s.cross(u),o.setXYZ(e+0,s.x,s.y,s.z),o.setXYZ(e+1,s.x,s.y,s.z),o.setXYZ(e+2,s.x,s.y,s.z);this.normalizeNormals(),o.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)T.fromBufferAttribute(e,t),T.normalize(),e.setXYZ(t,T.x,T.y,T.z)}toNonIndexed(){function t(e,t){const o=e.array,n=e.itemSize,a=e.normalized,i=new o.constructor(t.length*n);let s=0,r=0;for(let a=0,c=t.length;a<c;a++){e.isInterleavedBufferAttribute?s=t[a]*e.data.stride+e.offset:s=t[a]*n;for(let e=0;e<n;e++)i[r++]=o[s++]}return new V(i,n,a)}if(this.index===null)return o("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _BufferGeometry,n=this.index.array,s=this.attributes;for(const o in s){const i=s[o],a=t(i,n);e.setAttribute(o,a)}const i=this.morphAttributes;for(const s in i){const o=[],a=i[s];for(let e=0,s=a.length;e<s;e++){const i=a[e],r=t(i,n);o.push(r)}e.morphAttributes[s]=o}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let t=0,s=a.length;t<s;t++){const n=a[t];e.addGroup(n.start,n.count,n.materialIndex)}return e}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==0[0]){const t=this.parameters;for(const n in t)t[n]!==0[0]&&(e[n]=t[n]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const t in n){const s=n[t];e.data.attributes[t]=s.toJSON(e.data)}const s={};let o=!1;for(const n in this.morphAttributes){const i=this.morphAttributes[n],t=[];for(let n=0,s=i.length;n<s;n++){const o=i[n];t.push(o.toJSON(e.data))}t.length>0&&(s[n]=t,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const i=this.groups;i.length>0&&(e.data.groups=JSON.parse(JSON.stringify(i)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return(new this.constructor).copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const e in s){const n=s[e];this.setAttribute(e,n.clone(t))}const o=e.morphAttributes;for(const e in o){const n=[],s=o[e];for(let e=0,o=s.length;e<o;e++)n.push(s[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;const i=e.groups;for(let e=0,n=i.length;e<n;e++){const t=i[e];this.addGroup(t.start,t.count,t.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const r=e.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==0[0]?e.length/t:0,this.usage=Mi,this.updateRanges=[],this.version=0,this.uuid=Oe()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,o=this.stride;s<o;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===0[0]&&(e.arrayBuffers={}),this.array.buffer._uuid===0[0]&&(this.array.buffer._uuid=Oe()),e.arrayBuffers[this.array.buffer._uuid]===0[0]&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),t=new this.constructor(n,this.stride);return t.setUsage(this.usage),t}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===0[0]&&(e.arrayBuffers={}),this.array.buffer._uuid===0[0]&&(this.array.buffer._uuid=Oe()),e.arrayBuffers[this.array.buffer._uuid]===0[0]&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},W=new e,Ii=class _InterleavedBufferAttribute{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)W.fromBufferAttribute(this,t),W.applyMatrix4(e),this.setXYZ(t,W.x,W.y,W.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)W.fromBufferAttribute(this,t),W.applyNormalMatrix(e),this.setXYZ(t,W.x,W.y,W.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)W.fromBufferAttribute(this,t),W.transformDirection(e),this.setXYZ(t,W.x,W.y,W.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ae(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=g(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=g(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=g(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=g(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=g(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ae(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ae(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ae(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ae(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=g(t,this.array),n=g(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=g(t,this.array),n=g(n,this.array),s=g(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=g(t,this.array),n=g(n,this.array),s=g(s,this.array),o=g(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=o,this}clone(e){if(e===0[0]){Ai("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new V(new this.array.constructor(e),this.itemSize,this.normalized)}return e.interleavedBuffers===0[0]&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===0[0]&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _InterleavedBufferAttribute(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===0[0]){Ai("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let t=0;t<this.count;t++){const n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===0[0]&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===0[0]&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ru=0,pe=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Oe(),this.name="",this.type="Material",this.blending=Vt,this.side=Qe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ma,this.blendEquation=Lt,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new a(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=un,this.stencilZFail=un,this.stencilZPass=un,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!==e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===0[0])return;for(const s in e){const n=e[s];if(n===0[0]){o(`Material: parameter '${s}' has value of undefined.`);continue}const t=this[s];if(t===0[0]){o(`Material: '${s}' is not a property of THREE.${this.type}.`);continue}t&&t.isColor?t.set(n):t&&t.isVector3&&n&&n.isVector3?t.copy(n):this[s]=n}}toJSON(e){const n=e===0[0]||typeof e=="string";n&&(e={textures:{},images:{}});const t={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==0[0]&&(t.roughness=this.roughness),this.metalness!==0[0]&&(t.metalness=this.metalness),this.sheen!==0[0]&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==0[0]&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==0[0]&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==0[0]&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==0[0]&&(t.shininess=this.shininess),this.clearcoat!==0[0]&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==0[0]&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(t.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(t.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==0[0]&&(t.dispersion=this.dispersion),this.iridescence!==0[0]&&(t.iridescence=this.iridescence),this.iridescenceIOR!==0[0]&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==0[0]&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==0[0]&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==0[0]&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(e).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(e).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(e).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(e).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(e).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(e).uuid,this.combine!==0[0]&&(t.combine=this.combine)),this.envMapRotation!==0[0]&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==0[0]&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==0[0]&&(t.reflectivity=this.reflectivity),this.refractionRatio!==0[0]&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==0[0]&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==0[0]&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==0[0]&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==0[0]&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==0[0]&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==0[0]&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==Vt&&(t.blending=this.blending),this.side!==Qe&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==ha&&(t.blendSrc=this.blendSrc),this.blendDst!==ma&&(t.blendDst=this.blendDst),this.blendEquation!==Lt&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mc&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==un&&(t.stencilFail=this.stencilFail),this.stencilZFail!==un&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==un&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==0[0]&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==0[0]&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==0[0]&&(t.dashSize=this.dashSize),this.gapSize!==0[0]&&(t.gapSize=this.gapSize),this.scale!==0[0]&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.allowOverride===!1&&(t.allowOverride=!1),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function s(e){const t=[];for(const s in e){const n=e[s];delete n.metadata,t.push(n)}return t}if(n){const n=s(e.textures),o=s(e.images);n.length>0&&(t.textures=n),o.length>0&&(t.images=o)}return t}clone(){return(new this.constructor).copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const e=t.length;n=new Array(e);for(let s=0;s!==e;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jc=class extends pe{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new a(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dn=new e,vn=new e,rn=new e,an=new r,Un=new r,Yr=new d,eo=new e,Qn=new e,Xs=new e,Qr=new r,ua=new r,Zr=new r,Jr=class extends O{constructor(e=new Jc){if(super(),this.isSprite=!0,this.type="Sprite",zn===0[0]){zn=new ne;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),e=new Qc(t,5);zn.setIndex([0,1,2,0,2,3]),zn.setAttribute("position",new Ii(e,3,0,!1)),zn.setAttribute("uv",new Ii(e,2,3,!1))}this.geometry=zn,this.material=e,this.center=new r(.5,.5),this.count=1}raycast(e,t){e.camera===null&&i('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vn.setFromMatrixScale(this.matrixWorld),Yr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vn.multiplyScalar(-rn.z);const a=this.material.rotation;let n,s;a!==0&&(s=Math.cos(a),n=Math.sin(a));const o=this.center;ca(eo.set(-.5,-.5,0),rn,o,vn,n,s),ca(Qn.set(.5,-.5,0),rn,o,vn,n,s),ca(Xs.set(.5,.5,0),rn,o,vn,n,s),Qr.set(0,0),ua.set(1,0),Zr.set(1,1);let c=e.ray.intersectTriangle(eo,Qn,Xs,!1,Dn);if(c===null&&(ca(Qn.set(-.5,.5,0),rn,o,vn,n,s),ua.set(0,1),c=e.ray.intersectTriangle(eo,Xs,Qn,!1,Dn),c===null))return;const l=e.ray.origin.distanceTo(Dn);if(l<e.near||l>e.far)return;t.push({distance:l,point:Dn.clone(),uv:Qt.getInterpolation(Dn,eo,Qn,Xs,Qr,ua,Zr,new r),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==0[0]&&this.center.copy(e.center),this.material=e.material,this}};function ca(e,t,n,s,o,i){an.subVectors(e,n).addScalar(.5).multiply(s),o!==0[0]?(Un.x=i*an.x-o*an.y,Un.y=o*an.x+i*an.y):Un.copy(an),e.copy(t),e.x+=Un.x,e.y+=Un.y,e.applyMatrix4(Yr)}Be=new e,aa=new e,bs=new e,ft=new e,na=new e,Cs=new e,Wi=new e,ls=class{constructor(t=new e,n=new e(0,0,-1)){this.origin=t,this.direction=n}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Be)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return this.distanceSqToPoint(e)**.5}distanceSqToPoint(e){const t=Be.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Be.copy(this.origin).addScaledVector(this.direction,t),Be.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){aa.copy(e).add(t).multiplyScalar(.5),bs.copy(t).sub(e).normalize(),ft.copy(this.origin).sub(aa);const a=e.distanceTo(t)*.5,r=-this.direction.dot(bs),l=ft.dot(this.direction),c=-ft.dot(bs),u=ft.lengthSq(),m=Math.abs(1-r*r);let i,o,d,h;if(m>0)if(i=r*c-l,o=r*l-c,h=a*m,i>=0)if(o>=-h)if(o<=h){const e=1/m;i*=e,o*=e,d=i*(i+r*o+2*l)+o*(r*i+o+2*c)+u}else o=a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o=-a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;else o<=-h?(i=Math.max(0,-(-r*a+l)),o=i>0?-a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u):o<=h?(i=0,o=Math.min(Math.max(-a,-c),a),d=o*(o+2*c)+u):(i=Math.max(0,-(r*a+l)),o=i>0?a:Math.min(Math.max(-a,-c),a),d=-i*i+o*(o+2*c)+u);else o=r>0?-a:a,i=Math.max(0,-(r*o+l)),d=-i*i+o*(o+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,i),s&&s.copy(aa).addScaledVector(bs,o),d}intersectSphere(e,t){Be.subVectors(e.center,this.origin);const n=Be.dot(this.direction),s=Be.dot(Be)-n*n,o=e.radius*e.radius;if(s>o)return null;const i=(o-s)**.5,a=n-i,r=n+i;return r<0?null:a<0?this.at(r,t):this.at(a,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);if(t===0)return!0;const n=e.normal.dot(this.direction);return n*t<0}intersectBox(e,t){let n,s,i,a,r,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,o=this.origin;return l>=0?(n=(e.min.x-o.x)*l,s=(e.max.x-o.x)*l):(n=(e.max.x-o.x)*l,s=(e.min.x-o.x)*l),d>=0?(i=(e.min.y-o.y)*d,a=(e.max.y-o.y)*d):(i=(e.max.y-o.y)*d,a=(e.min.y-o.y)*d),n>a||i>s?null:((i>n||isNaN(n))&&(n=i),(a<s||isNaN(s))&&(s=a),u>=0?(r=(e.min.z-o.z)*u,c=(e.max.z-o.z)*u):(r=(e.max.z-o.z)*u,c=(e.min.z-o.z)*u),n>c||r>s?null:((r>n||n!==n)&&(n=r),(c<s||s!==s)&&(s=c),s<0?null:this.at(n>=0?n:s,t)))}intersectsBox(e){return this.intersectBox(e,Be)!==null}intersectTriangle(e,t,n,s,o){na.subVectors(t,e),Cs.subVectors(n,e),Wi.crossVectors(na,Cs);let i=this.direction.dot(Wi),a;if(i>0){if(s)return null;a=1}else if(i<0)a=-1,i=-i;else return null;ft.subVectors(this.origin,e);const r=a*this.direction.dot(Cs.crossVectors(ft,Cs));if(r<0)return null;const c=a*this.direction.dot(na.cross(ft));if(c<0)return null;if(r+c>i)return null;const l=-a*ft.dot(Wi);return l<0?null:this.at(l/i,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return(new this.constructor).copy(this)}},rt=class extends pe{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new a(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mt,this.combine=$r,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yc=new d,Ft=new ls,Fs=new _e,Tc=new e,zs=new e,Rs=new e,Ps=new e,Ti=new e,Hs=new e,Hc=new e,Is=new e,K=class extends O{constructor(e=new ne,t=new rt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=0[0],this.morphTargetInfluences=0[0],this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==0[0]&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==0[0]&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry,e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==0[0]){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Hs.set(0,0,0);for(let n=0,r=s.length;n<r;n++){const i=o[n],c=s[n];if(i===0)continue;Ti.fromBufferAttribute(c,e),a?Hs.addScaledVector(Ti,i):Hs.addScaledVector(Ti.sub(t),i)}t.add(Hs)}return t}raycast(e,t){const n=this.geometry,o=this.material,s=this.matrixWorld;if(o===0[0])return;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(s),Ft.copy(e.ray).recast(e.near),Fs.containsPoint(Ft.origin)===!1){if(Ft.intersectSphere(Fs,Tc)===null)return;if(Ft.origin.distanceToSquared(Tc)>(e.far-e.near)**2)return}if(yc.copy(s).invert(),Ft.copy(e.ray).applyMatrix4(yc),n.boundingBox!==null&&Ft.intersectsBox(n.boundingBox)===!1)return;this._computeIntersections(e,t,Ft)}_computeIntersections(e,t,n){let s;const a=this.geometry,r=this.material,i=a.index,h=a.attributes.position,c=a.attributes.uv,l=a.attributes.uv1,d=a.attributes.normal,u=a.groups,o=a.drawRange;if(i!==null)if(Array.isArray(r))for(let h=0,m=u.length;h<m;h++){const a=u[h],f=r[a.materialIndex],p=Math.max(a.start,o.start),g=Math.min(i.count,Math.min(a.start+a.count,o.start+o.count));for(let o=p,r=g;o<r;o+=3){const u=i.getX(o),h=i.getX(o+1),m=i.getX(o+2);s=Ci(this,f,e,n,c,l,d,u,h,m),s&&(s.faceIndex=Math.floor(o/3),s.face.materialIndex=a.materialIndex,t.push(s))}}else{const a=Math.max(0,o.start),u=Math.min(i.count,o.start+o.count);for(let o=a,h=u;o<h;o+=3){const m=i.getX(o),f=i.getX(o+1),p=i.getX(o+2);s=Ci(this,r,e,n,c,l,d,m,f,p),s&&(s.faceIndex=Math.floor(o/3),t.push(s))}}else if(h!==0[0])if(Array.isArray(r))for(let a=0,m=u.length;a<m;a++){const i=u[a],f=r[i.materialIndex],p=Math.max(i.start,o.start),g=Math.min(h.count,Math.min(i.start+i.count,o.start+o.count));for(let o=p,a=g;o<a;o+=3){const r=o,u=o+1,h=o+2;s=Ci(this,f,e,n,c,l,d,r,u,h),s&&(s.faceIndex=Math.floor(o/3),s.face.materialIndex=i.materialIndex,t.push(s))}}else{const i=Math.max(0,o.start),a=Math.min(h.count,o.start+o.count);for(let o=i,u=a;o<u;o+=3){const h=o,m=o+1,f=o+2;s=Ci(this,r,e,n,c,l,d,h,m,f),s&&(s.faceIndex=Math.floor(o/3),t.push(s))}}}};function vp(e,t,n,s,o,i,a,r){let c;if(t.side===X?c=s.intersectTriangle(a,i,o,!0,r):c=s.intersectTriangle(o,i,a,t.side===Qe,r),c===null)return null;Is.copy(r),Is.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Is);return l<n.near||l>n.far?null:{distance:l,point:Is.clone(),object:e}}function Ci(t,n,s,o,i,a,c,l,d,u){t.getVertexPosition(l,zs),t.getVertexPosition(d,Rs),t.getVertexPosition(u,Ps);const h=vp(t,n,s,o,zs,Rs,Ps,Hc);if(h){const t=new e;Qt.getBarycoord(Hc,zs,Rs,Ps,t),i&&(h.uv=Qt.getInterpolatedAttribute(i,l,d,u,t,new r)),a&&(h.uv1=Qt.getInterpolatedAttribute(a,l,d,u,t,new r)),c&&(h.normal=Qt.getInterpolatedAttribute(c,l,d,u,t,new e),h.normal.dot(o.direction)>0&&h.normal.multiplyScalar(-1));const n={a:l,b:d,c:u,normal:new e,materialIndex:0};Qt.getNormal(zs,Rs,Ps,n.normal),h.face=n,h.barycoord=t}return h}al=new e,Ol=new b,kl=new b,k1=new e,Ll=new d,Ks=new e,ui=new _e,Kl=new d,ci=new ls,z1=class extends K{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Lr,this.bindMatrix=new d,this.bindMatrixInverse=new d,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $e),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ks),this.boundingBox.expandByPoint(Ks)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _e),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ks),this.boundingSphere.expandByPoint(Ks)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const s=this.material,n=this.matrixWorld;if(s===0[0])return;if(this.boundingSphere===null&&this.computeBoundingSphere(),ui.copy(this.boundingSphere),ui.applyMatrix4(n),e.ray.intersectsSphere(ui)===!1)return;if(Kl.copy(n).invert(),ci.copy(e.ray).applyMatrix4(Kl),this.boundingBox!==null&&ci.intersectsBox(this.boundingBox)===!1)return;this._computeIntersections(e,t,ci)}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===0[0]&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new b,t=this.geometry.attributes.skinWeight;for(let n=0,o=t.count;n<o;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Lr?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hu?this.bindMatrixInverse.copy(this.bindMatrix).invert():o("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Ol.fromBufferAttribute(s.attributes.skinIndex,e),kl.fromBufferAttribute(s.attributes.skinWeight,e),al.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){const s=kl.getComponent(e);if(s!==0){const o=Ol.getComponent(e);Ll.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(k1.copy(al).applyMatrix4(Ll),s)}}return t.applyMatrix4(this.bindMatrixInverse)}},Yl=class extends O{constructor(){super(),this.isBone=!0,this.type="Bone"}},ai=class extends Z{constructor(e=null,t=1,n=1,s,o,i,a,r,c=E,l=E,d,u){super(null,i,a,r,c,l,s,o,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gl=new d,R1=new d,P1=class _Skeleton{constructor(e=[],t=[]){this.uuid=Oe(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){o("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new d)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const t=new d;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const e=this.bones[t];e&&(e.parent&&e.parent.isBone?(e.matrix.copy(e.parent.matrixWorld).invert(),e.matrix.multiply(e.matrixWorld)):e.matrix.copy(e.matrixWorld),e.matrix.decompose(e.position,e.quaternion,e.scale))}}update(){const e=this.bones,n=this.boneInverses,s=this.boneMatrices,t=this.boneTexture;for(let t=0,o=e.length;t<o;t++){const i=e[t]?e[t].matrixWorld:R1;Gl.multiplyMatrices(i,n[t]),Gl.toArray(s,t*16)}t!==null&&(t.needsUpdate=!0)}clone(){return new _Skeleton(this.bones,this.boneInverses)}computeBoneTexture(){let e=(this.bones.length*4)**.5;e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ai(t,e,e,le,ue);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,s=this.bones.length;t<s;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,a=e.bones.length;n<a;n++){const i=e.bones[n];let s=t[i];s===0[0]&&(o("Skeleton: No bone found with UUID:",i),s=new Yl),this.bones.push(s),this.boneInverses.push((new d).fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,o=t.length;s<o;s++){const i=t[s];e.bones.push(i.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}},oi=class extends V{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pn=new d,vd=new d,lo=[],Sd=new $e,W1=new d,Tn=new K,Mn=new _e,q1=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,W1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $e),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pn),Sd.copy(e.boundingBox).applyMatrix4(pn),this.boundingBox.union(Sd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _e),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pn),Mn.copy(e.boundingSphere).applyMatrix4(pn),this.boundingSphere.union(Mn)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,i=e*o+1;for(let e=0;e<n.length;e++)n[e]=s[i+e]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Tn.geometry=this.geometry,Tn.material=this.material,Tn.material===0[0])return;if(this.boundingSphere===null&&this.computeBoundingSphere(),Mn.copy(this.boundingSphere),Mn.applyMatrix4(n),e.ray.intersectsSphere(Mn)===!1)return;for(let o=0;o<s;o++){this.getMatrixAt(o,pn),vd.multiplyMatrices(n,pn),Tn.matrixWorld=vd,Tn.raycast(e,lo);for(let e=0,s=lo.length;e<s;e++){const n=lo[e];n.instanceId=o,n.object=this,t.push(n)}lo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ai(new Float32Array(s*this.count),s,this.count,tr,ue));const o=this.morphTexture.source.data.data;let i=0;for(let e=0;e<n.length;e++)i+=n[e];const r=this.geometry.morphTargetsRelative?1:1-i,a=s*e;o[a]=r,o.set(n,a+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fo=new e,G1=new e,X1=new u,yt=class{constructor(t=new e(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Fo.subVectors(n,t).cross(G1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Fo),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/o;return n<0||n>1?null:t.copy(e.start).addScaledVector(s,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||X1.getNormalMatrix(e),s=this.coplanarPoint(Fo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return(new this.constructor).copy(this)}},xt=new _e,J1=new r(.5,.5),wo=new e,To=class{constructor(e=new yt,t=new yt,n=new yt,s=new yt,o=new yt,i=new yt){this.planes=[e,t,n,s,o,i]}set(e,t,n,s,o,i){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(i),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ce,n=!1){const o=this.planes,s=e.elements,y=s[0],v=s[1],d=s[2],c=s[3],f=s[4],m=s[5],l=s[6],r=s[7],p=s[8],g=s[9],u=s[10],a=s[11],b=s[12],j=s[13],h=s[14],i=s[15];if(o[0].setComponents(c-y,r-f,a-p,i-b).normalize(),o[1].setComponents(c+y,r+f,a+p,i+b).normalize(),o[2].setComponents(c+v,r+m,a+g,i+j).normalize(),o[3].setComponents(c-v,r-m,a-g,i-j).normalize(),n)o[4].setComponents(d,l,u,h).normalize(),o[5].setComponents(c-d,r-l,a-u,i-h).normalize();else if(o[4].setComponents(c-d,r-l,a-u,i-h).normalize(),t===Ce)o[5].setComponents(c+d,r+l,a+u,i+h).normalize();else if(t===hs)o[5].setComponents(d,l,u,h).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==0[0])e.boundingSphere===null&&e.computeBoundingSphere(),xt.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xt.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xt)}intersectsSprite(e){xt.center.set(0,0,0);const t=J1.distanceTo(e.center);return xt.radius=.7071067811865476+t,xt.applyMatrix4(e.matrixWorld),this.intersectsSphere(xt)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let e=0;e<6;e++){const o=t[e].distanceToPoint(n);if(o<s)return!1}return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const n=t[s];if(wo.x=n.normal.x>0?e.max.x:e.min.x,wo.y=n.normal.y>0?e.max.y:e.min.y,wo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return(new this.constructor).copy(this)}},Do=class extends pe{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new a(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},jo=new e,bo=new e,Ad=new d,Nn=new ls,fo=new _e,Ho=new e,hd=new e,to=class extends O{constructor(e=new ne,t=new Do){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=0[0],this.morphTargetInfluences=0[0],this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,t=[0];for(let e=1,s=n.count;e<s;e++)jo.fromBufferAttribute(n,e-1),bo.fromBufferAttribute(n,e),t[e]=t[e-1],t[e]+=jo.distanceTo(bo);e.setAttribute("lineDistance",new I(t,1))}else o("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(a),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;Ad.copy(a).invert(),Nn.copy(e.ray).applyMatrix4(Ad);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),i=c*c,l=this.isLineSegments?2:1,o=n.index,d=n.attributes,u=d.position;if(o!==null){{const a=Math.max(0,s.start),n=Math.min(o.count,s.start+s.count);for(let s=a,c=n-1;s<c;s+=l){const d=o.getX(s),u=o.getX(s+1),r=Xo(this,e,Nn,i,d,u,s);r&&t.push(r)}if(this.isLineLoop){const r=o.getX(n-1),c=o.getX(a),s=Xo(this,e,Nn,i,r,c,n-1);s&&t.push(s)}}}else{const o=Math.max(0,s.start),n=Math.min(u.count,s.start+s.count);for(let s=o,r=n-1;s<r;s+=l){const a=Xo(this,e,Nn,i,s,s+1,s);a&&t.push(a)}if(this.isLineLoop){const s=Xo(this,e,Nn,i,n-1,o,n-1);s&&t.push(s)}}}updateMorphTargets(){const n=this.geometry,e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==0[0]){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}};function Xo(e,t,n,s,o,i,a){const c=e.geometry.attributes.position;jo.fromBufferAttribute(c,o),bo.fromBufferAttribute(c,i);const l=n.distanceSqToSegment(jo,bo,Ho,hd);if(l>s)return;Ho.applyMatrix4(e.matrixWorld);const r=t.ray.origin.distanceTo(Ho);if(r<t.near||r>t.far)return;return{distance:r,point:hd.clone().applyMatrix4(e.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:e}}id=new e,td=new e,f4=class extends to{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,t=[];for(let e=0,s=n.count;e<s;e+=2)id.fromBufferAttribute(n,e),td.fromBufferAttribute(n,e+1),t[e]=e===0?0:t[e-1],t[e+1]=t[e]+id.distanceTo(td);e.setAttribute("lineDistance",new I(t,1))}else o("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},p4=class extends to{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Nl=class extends pe{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new a(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kc=new d,Fi=new ls,Ls=new _e,Ns=new e,_4=class extends O{constructor(e=new ne,t=new Nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=0[0],this.morphTargetInfluences=0[0],this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,o=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(o),Ls.radius+=r,e.ray.intersectsSphere(Ls)===!1)return;Kc.copy(o).invert(),Fi.copy(e.ray).applyMatrix4(Kc);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,i=n.index,d=n.attributes,a=d.position;if(i!==null){const n=Math.max(0,s.start),r=Math.min(i.count,s.start+s.count);for(let s=n,d=r;s<d;s++){const c=i.getX(s);Ns.fromBufferAttribute(a,c),w4(Ns,c,l,o,e,t,this)}}else{const n=Math.max(0,s.start),i=Math.min(a.count,s.start+s.count);for(let s=n,r=i;s<r;s++)Ns.fromBufferAttribute(a,s),w4(Ns,s,l,o,e,t,this)}}updateMorphTargets(){const n=this.geometry,e=n.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==0[0]){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){const s=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=e}}}}};function w4(t,n,s,o,i,a,r){const c=Fi.distanceSqToPoint(t);if(c<s){const s=new e;Fi.closestPointToPoint(t,s),s.applyMatrix4(o);const l=i.ray.origin.distanceTo(s);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:c**.5,point:s,index:n,face:null,faceIndex:null,barycoord:null,object:r})}}Dc=class extends Z{constructor(e=[],t=wt,n,s,o,i,a,r,c,l){super(e,t,n,s,o,i,a,r,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rs=class extends Z{constructor(e,t,n=Ee,s,o,i,a=E,r=E,c,l=We,d=1){if(l!==We&&l!==Dt)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,o,i,a,r,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new li(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},C4=class extends rs{constructor(e,t=Ee,n=wt,s,o,i=E,a=E,r,c=We){const l={width:e,height:e,depth:1},d=[l,l,l,l,l,l];super(e,e,t,n,s,o,i,a,r,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},bc=class extends Z{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Vi=class _BoxGeometry extends ne{constructor(t=1,n=1,s=1,o=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:i,depthSegments:a};const f=this;o=Math.floor(o),i=Math.floor(i),a=Math.floor(a);const l=[],u=[],h=[],d=[];let c=0,m=0;r("z","y","x",-1,-1,s,n,t,a,i,0),r("z","y","x",1,-1,s,n,-t,a,i,1),r("x","z","y",1,1,t,s,n,o,a,2),r("x","z","y",1,-1,t,s,-n,o,a,3),r("x","y","z",1,-1,t,n,s,o,i,4),r("x","y","z",-1,-1,t,n,-s,o,i,5),this.setIndex(l),this.setAttribute("position",new I(u,3)),this.setAttribute("normal",new I(h,3)),this.setAttribute("uv",new I(d,2));function r(t,n,s,o,i,a,r,p,g,v,b){const O=a/g,x=r/v,C=a/2,E=r/2,k=p/2,y=g+1,A=v+1;let w=0,_=0;const j=new e;for(let e=0;e<A;e++){const a=e*x-E;for(let r=0;r<y;r++){const c=r*O-C;j[t]=c*o,j[n]=a*i,j[s]=k,u.push(j.x,j.y,j.z),j[t]=0,j[n]=0,j[s]=p>0?1:-1,h.push(j.x,j.y,j.z),d.push(r/g),d.push(1-e/v),w+=1}}for(let e=0;e<v;e++)for(let t=0;t<g;t++){const o=c+t+y*e,n=c+t+y*(e+1),i=c+(t+1)+y*(e+1),s=c+(t+1)+y*e;l.push(o,n,s),l.push(n,i,s),_+=6}f.addGroup(m,_,b),m+=_,c+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},A4=class _CylinderGeometry extends ne{constructor(t=1,n=1,s=1,o=32,i=1,a=!1,c=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:s,radialSegments:o,heightSegments:i,openEnded:a,thetaStart:c,thetaLength:l};const b=this;o=Math.floor(o),i=Math.floor(i);const d=[],m=[],f=[],p=[];let u=0;const h=[],v=s/2;let g=0;y(),a===!1&&(t>0&&j(!0),n>0&&j(!1)),this.setIndex(d),this.setAttribute("position",new I(m,3)),this.setAttribute("normal",new I(f,3)),this.setAttribute("uv",new I(p,2));function y(){const r=new e,a=new e;let j=0;const y=(n-t)/s;for(let e=0;e<=i;e++){const g=[],d=e/i,b=d*(n-t)+t;for(let e=0;e<=o;e++){const t=e/o,n=t*l+c,i=Math.sin(n),h=Math.cos(n);a.x=b*i,a.y=-d*s+v,a.z=b*h,m.push(a.x,a.y,a.z),r.set(i,y,h).normalize(),f.push(r.x,r.y,r.z),p.push(t,1-d),g.push(u++)}h.push(g)}for(let e=0;e<o;e++)for(let s=0;s<i;s++){const r=h[s][e],o=h[s+1][e],c=h[s+1][e+1],a=h[s][e+1];(t>0||s!==0)&&(d.push(r,o,a),j+=3),(n>0||s!==i-1)&&(d.push(o,c,a),j+=3)}b.addGroup(g,j,0),g+=j}function j(s){const _=u,h=new r,i=new e;let j=0;const y=s===!0?t:n,a=s===!0?1:-1;for(let e=1;e<=o;e++)m.push(0,v*a,0),f.push(0,a,0),p.push(.5,.5),u++;const w=u;for(let e=0;e<=o;e++){const r=e/o,t=r*l+c,n=Math.cos(t),s=Math.sin(t);i.x=y*s,i.y=v*a,i.z=y*n,m.push(i.x,i.y,i.z),f.push(0,a,0),h.x=n*.5+.5,h.y=s*.5*a+.5,p.push(h.x,h.y),u++}for(let e=0;e<o;e++){const n=_+e,t=w+e;s===!0?d.push(t,t+1,n):d.push(t+1,t,n),j+=3}b.addGroup(g,j,s===!0?1:2),g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _CylinderGeometry(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},S4=class _ConeGeometry extends A4{constructor(e=1,t=1,n=32,s=1,o=!1,i=0,a=Math.PI*2){super(0,e,t,n,s,o,i,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:i,thetaLength:a}}static fromJSON(e){return new _ConeGeometry(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lc=class _PlaneGeometry extends ne{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const u=e/2,h=t/2,i=Math.floor(n),a=Math.floor(s),o=i+1,m=a+1,f=e/i,p=t/a,r=[],l=[],d=[],c=[];for(let e=0;e<m;e++){const t=e*p-h;for(let n=0;n<o;n++){const s=n*f-u;l.push(s,-t,0),d.push(0,0,1),c.push(n/i),c.push(1-e/a)}}for(let e=0;e<a;e++)for(let t=0;t<i;t++){const a=t+o*e,n=t+o*(e+1),c=t+1+o*(e+1),s=t+1+o*e;r.push(a,n,s),r.push(n,c,s)}this.setIndex(r),this.setAttribute("position",new I(l,3)),this.setAttribute("normal",new I(d,3)),this.setAttribute("uv",new I(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}};function fs(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(o("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function Q(e){const t={};for(let n=0;n<e.length;n++){const s=fs(e[n]);for(const e in s)t[e]=s[e]}return t}function H6(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function D4(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:f.workingColorSpace}N4={clone:fs,merge:Q},L4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Me=class extends pe{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L4,this.fragmentShader=R4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=0[0],this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==0[0]&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=H6(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s],n=o.value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},H4=class extends Me{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yi=class extends pe{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new a(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new a(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new r(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ke=class extends Yi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new r(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return m(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new a(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new a(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new a(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!==e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!==e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!==e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!==e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!==e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!==e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},V4=class extends pe{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},$4=class extends pe{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xi(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function L6(e){function s(t,n){return e[t]-e[n]}const n=e.length,t=new Array(n);for(let e=0;e!==n;++e)t[e]=e;return t.sort(s),t}function K4(e,t,n){const s=e.length,o=new e.constructor(s);for(let i=0,a=0;a!==s;++i){const r=n[i]*t;for(let n=0;n!==t;++n)o[a++]=e[r+n]}return o}function q4(e,t,n,s){let a=1,o=e[0];for(;o!==0[0]&&o[s]===0[0];)o=e[a++];if(o===0[0])return;let i=o[s];if(i===0[0])return;if(Array.isArray(i))do i=o[s],i!==0[0]&&(t.push(o.time),n.push(...i)),o=e[a++];while(o!==0[0])else if(i.toArray!==0[0])do i=o[s],i!==0[0]&&(t.push(o.time),i.toArray(n,n.length)),o=e[a++];while(o!==0[0])else do i=o[s],i!==0[0]&&(t.push(o.time),n.push(i)),o=e[a++];while(o!==0[0])}en=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==0[0]?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const s=this.parameterPositions;let t=this._cachedIndex,o=s[t],n=s[t-1];validate_interval:{seek:{let i;linear_scan:{forward_scan:if(!(e<o)){for(let i=t+2;;){if(o===0[0]){if(e<n)break forward_scan;return t=s.length,this._cachedIndex=t,this.copySampleValue_(t-1)}if(t===i)break;if(n=o,o=s[++t],e<o)break seek}i=s.length;break linear_scan}if(!(e>=n)){const a=s[1];e<a&&(t=2,n=a);for(let i=t-2;;){if(n===0[0])return this._cachedIndex=0,this.copySampleValue_(0);if(t===i)break;if(o=n,n=s[--t-1],e>=n)break seek}i=t,t=0;break linear_scan}break validate_interval}for(;t<i;){const n=t+i>>>1;e<s[n]?i=n:t=n+1}if(o=s[t],n=s[t-1],n===0[0])return this._cachedIndex=0,this.copySampleValue_(0);if(o===0[0])return t=s.length,this._cachedIndex=t,this.copySampleValue_(t-1)}this._cachedIndex=t,this.intervalChanged_(t,n,o)}return this.interpolate_(t,n,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,s=this.sampleValues,n=this.valueSize,o=e*n;for(let e=0;e!==n;++e)t[e]=s[o+e];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},G4=class extends en{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(e,t,n){const s=this.parameterPositions;let o=e-2,i=e+1,a=s[o],r=s[i];if(a===0[0])switch(this.getSettings_().endingStart){case pc:o=e,a=2*t-n;break;case gc:o=s.length-2,a=t+s[o]-s[o+1];break;default:o=e,a=n}if(r===0[0])switch(this.getSettings_().endingEnd){case pc:i=e,r=2*n-t;break;case gc:i=1,r=n+s[1]-s[0];break;default:i=e-1,r=t}const c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(r-n),this._offsetPrev=o*l,this._offsetNext=i*l}interpolate_(e,t,n,s){const h=this.resultBuffer,r=this.sampleValues,d=this.valueSize,u=e*d,m=u-d,p=this._offsetPrev,f=this._offsetNext,i=this._weightPrev,l=this._weightNext,o=(n-t)/(s-t),a=o*o,c=a*o,g=-i*c+2*i*a-i*o,v=(1+i)*c+(-1.5-2*i)*a+(-.5+i)*o+1,b=(-1-l)*c+(1.5+l)*a+.5*o,j=l*c-l*a;for(let e=0;e!==d;++e)h[e]=g*r[p+e]+v*r[m+e]+b*r[u+e]+j*r[f+e];return h}},X4=class extends en{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,r=e*o,l=r-o,c=(n-t)/(s-t),d=1-c;for(let e=0;e!==o;++e)i[e]=a[l+e]*d+a[r+e]*c;return i}},Q4=class extends en{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Z4=class extends en{interpolate_(e,t,n,s){const i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,r=e*o,d=r-o,u=this.settings||this.DefaultSettings_,c=u.inTangents,l=u.outTangents;if(!c||!l){const e=(n-t)/(s-t),c=1-e;for(let t=0;t!==o;++t)i[t]=a[d+t]*c+a[r+t]*e;return i}const h=o*2,m=e-1;for(let f=0;f!==o;++f){const k=a[d+f],E=a[r+f],w=m*h+f*2,j=l[w],C=l[w+1],O=e*h+f*2,_=c[O],x=c[O+1];let u=(n-t)/(s-t),v,y,p,g,b;for(let e=0;e<8;e++){v=u*u,y=v*u,p=1-u,g=p*p,b=g*p;const a=b*t+3*g*u*j+3*p*v*_+y*s,o=a-n;if((o<0?-o:o)<1e-10)break;const i=3*g*(j-t)+6*p*u*(_-j)+3*v*(s-_);if((i<0?-i:i)<1e-10)break;u=u-o/i,u=Math.max(0,Math.min(1,u))}i[f]=b*k+3*g*u*C+3*p*v*x+y*E}return i}},ye=class{constructor(e,t,n,s){if(e===0[0])throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===0[0]||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xi(t,this.TimeBufferType),this.values=Xi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let t;if(n.toJSON!==this.toJSON)t=n.toJSON(e);else{t={name:e.name,times:Xi(e.times,Array),values:Xi(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(t.interpolation=n)}return t.type=e.ValueTypeName,t}InterpolantFactoryMethodDiscrete(e){return new Q4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new X4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new G4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Z4(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case os:t=this.InterpolantFactoryMethodDiscrete;break;case An:t=this.InterpolantFactoryMethodLinear;break;case $i:t=this.InterpolantFactoryMethodSmooth;break;case mc:t=this.InterpolantFactoryMethodBezier;break}if(t===0[0]){const t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===0[0])if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(t);return o("KeyframeTrack:",t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return An;case this.InterpolantFactoryMethodSmooth:return $i;case this.InterpolantFactoryMethodBezier:return mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const o=this.times,i=o.length;let s=0,n=i-1;for(;s!==i&&o[s]<e;)++s;for(;n!==-1&&o[n]>t;)--n;if(++n,s!==0||n!==i){s>=n&&(n=Math.max(n,1),s=n-1);const e=this.getValueSize();this.times=o.slice(s,n),this.values=this.values.slice(s*e,n*e)}return this}validate(){let e=!0;const s=this.getValueSize();s-Math.floor(s)!==0&&(i("KeyframeTrack: Invalid value size in track.",this),e=!1);const o=this.times,t=this.values,a=o.length;a===0&&(i("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){const t=o[s];if(typeof t=="number"&&isNaN(t)){i("KeyframeTrack: Time is not a valid number.",this,s,t),e=!1;break}if(n!==null&&n>t){i("KeyframeTrack: Out of order keys.",this,s,t,n),e=!1;break}n=t}if(t!==0[0]&&Tp(t))for(let n=0,o=t.length;n!==o;++n){const s=t[n];if(isNaN(s)){i("KeyframeTrack: Value is not a valid number.",this,n,s),e=!1;break}}return e}optimize(){const e=this.times.slice(),s=this.values.slice(),t=this.getValueSize(),i=this.getInterpolation()===$i,o=e.length-1;let n=1;for(let a=1;a<o;++a){let r=!1;const c=e[a],l=e[a+1];if(c!==l&&(a!==1||c!==e[0]))if(i)r=!0;else{const e=a*t,n=e-t,o=e+t;for(let i=0;i!==t;++i){const a=s[e+i];if(a!==s[n+i]||a!==s[o+i]){r=!0;break}}}if(r){if(a!==n){e[n]=e[a];const o=a*t,i=n*t;for(let e=0;e!==t;++e)s[i+e]=s[o+e]}++n}}if(o>0){e[n]=e[o];for(let i=o*t,a=n*t,e=0;e!==t;++e)s[a+e]=s[i+e];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=s.slice(0,n*t)):(this.times=e,this.values=s),this}clone(){const t=this.times.slice(),n=this.values.slice(),s=this.constructor,e=new s(this.name,t,n);return e.createInterpolant=this.createInterpolant,e}},ye.prototype.ValueTypeName="",ye.prototype.TimeBufferType=Float32Array,ye.prototype.ValueBufferType=Float32Array,ye.prototype.DefaultInterpolation=An,Ut=class extends ye{constructor(e,t,n){super(e,t,n)}},Ut.prototype.ValueTypeName="bool",Ut.prototype.ValueBufferType=Array,Ut.prototype.DefaultInterpolation=os,Ut.prototype.InterpolantFactoryMethodLinear=0[0],Ut.prototype.InterpolantFactoryMethodSmooth=0[0],ac=class extends ye{constructor(e,t,n,s){super(e,t,n,s)}},ac.prototype.ValueTypeName="color",Xt=class extends ye{constructor(e,t,n,s){super(e,t,n,s)}},Xt.prototype.ValueTypeName="number",s0=class extends en{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const a=this.resultBuffer,r=this.sampleValues,i=this.valueSize,c=(n-t)/(s-t);let o=e*i;for(let e=o+i;o!==e;o+=4)Je.slerpFlat(a,0,r,o-i,r,o,c);return a}},_n=class extends ye{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new s0(this.times,this.values,this.getValueSize(),e)}},_n.prototype.ValueTypeName="quaternion",_n.prototype.InterpolantFactoryMethodSmooth=0[0],bn=class extends ye{constructor(e,t,n){super(e,t,n)}},bn.prototype.ValueTypeName="string",bn.prototype.ValueBufferType=Array,bn.prototype.DefaultInterpolation=os,bn.prototype.InterpolantFactoryMethodLinear=0[0],bn.prototype.InterpolantFactoryMethodSmooth=0[0],ln=class extends ye{constructor(e,t,n,s){super(e,t,n,s)}},ln.prototype.ValueTypeName="vector",r0=class{constructor(e="",t=-1,n=[],s=Pu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Oe(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const n=[],s=e.tracks,o=1/(e.fps||1);for(let e=0,t=s.length;e!==t;++e)n.push(M6(s[e]).scale(o));const t=new this(e.name,e.duration,n,e.blendMode);return t.uuid=e.uuid,t.userData=JSON.parse(e.userData||"{}"),t}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,s=n.length;e!==s;++e)t.push(ye.toJSON(n[e]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const o=t.length,i=[];for(let a=0;a<o;a++){let e=[],r=[];e.push((a+o-1)%o,a,(a+1)%o),r.push(0,1,0);const c=L6(e);e=K4(e,1,c),r=K4(r,1,c),!s&&e[0]===0&&(e.push(o),r.push(r[0])),i.push(new Xt(".morphTargetInfluences["+t[a].name+"]",e,r).scale(1/n))}return new this(e,-1,i)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,a=e.length;t<a;t++){const o=e[t],n=o.name.match(i);if(n&&n.length>1){const t=n[1];let e=s[t];e||(s[t]=e=[]),e.push(o)}}const o=[];for(const e in s)o.push(this.CreateFromMorphTargetSequence(e,s[e],t,n));return o}static parseAnimation(e,t){if(o("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return i("AnimationClip: No animation in JSONLoader data."),null;const s=function(e,t,n,s,o){if(n.length!==0){const i=[],a=[];q4(n,i,a,s),i.length!==0&&o.push(new e(t,i,a))}},n=[],c=e.name||"default",l=e.fps||30,d=e.blendMode;let a=e.length||-1;const r=e.hierarchy||[];for(let o=0;o<r.length;o++){const e=r[o].keys;if(!e||e.length===0)continue;if(e[0].morphTargets){const s={};let t;for(t=0;t<e.length;t++)if(e[t].morphTargets)for(let n=0;n<e[t].morphTargets.length;n++)s[e[t].morphTargets[n]]=-1;for(const o in s){const i=[],a=[];for(let n=0;n!==e[t].morphTargets.length;++n){const s=e[t];i.push(s.time),a.push(s.morphTarget===o?1:0)}n.push(new Xt(".morphTargetInfluence["+o+"]",i,a))}a=s.length*l}else{const i=".bones["+t[o].name+"]";s(ln,i+".position",e,"pos",n),s(_n,i+".quaternion",e,"rot",n),s(ln,i+".scale",e,"scl",n)}}if(n.length===0)return null;const u=new this(c,a,n,d);return u}resetDuration(){const t=this.tracks;let e=0;for(let n=0,o=t.length;n!==o;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function F6(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Xt;case"vector":case"vector2":case"vector3":case"vector4":return ln;case"color":return ac;case"quaternion":return _n;case"bool":case"boolean":return Ut;case"string":return bn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function M6(e){if(e.type===0[0])throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=F6(e.type);if(e.times===0[0]){const t=[],n=[];q4(e.keys,t,n,"value"),e.times=t,e.values=n}return t.parse!==0[0]?t.parse(e):new t(e.name,e.times,e.values,e.interpolation)}Ue={enabled:!1,files:{},add:function(e,t){if(this.enabled===!1)return;if(u0(e))return;this.files[e]=t},get:function(e){if(this.enabled===!1)return;if(u0(e))return;return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function u0(e){try{const t=e.slice(e.indexOf(":")+1),n=new URL(t);return n.protocol==="blob:"}catch{return!1}}h0=class{constructor(e,t,n){const s=this;let r=!1,i=0,a=0,c=0[0];const o=[];this.onStart=0[0],this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){a++,r===!1&&s.onStart!==0[0]&&s.onStart(e,i,a),r=!0},this.itemEnd=function(e){i++,s.onProgress!==0[0]&&s.onProgress(e,i,a),i===a&&(r=!1,s.onLoad!==0[0]&&s.onLoad())},this.itemError=function(e){s.onError!==0[0]&&s.onError(e)},this.resolveURL=function(e){return c?c(e):e},this.setURLModifier=function(e){return c=e,this},this.addHandler=function(e,t){return o.push(e,t),this},this.removeHandler=function(e){const t=o.indexOf(e);return t!==-1&&o.splice(t,2),this},this.getHandler=function(e){for(let t=0,s=o.length;t<s;t+=2){const n=o[t],i=o[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return i}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},m0=new h0,It=class{constructor(e){this.manager=e!==0[0]?e:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,o){n.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}},It.DEFAULT_MATERIAL_NAME="__DEFAULT",Le={},g0=class extends Error{constructor(e,t){super(e),this.response=t}},ic=class extends It{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===0[0]&&(e=""),this.path!==0[0]&&(e=this.path+e),e=this.manager.resolveURL(e);const i=Ue.get(`file:${e}`);if(i!==0[0])return this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0),i;if(Le[e]!==0[0]){Le[e].push({onLoad:t,onProgress:n,onError:s});return}Le[e]=[],Le[e].push({onLoad:t,onProgress:n,onError:s});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(r).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&o("FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||t.body===0[0]||t.body.getReader===0[0])return t;const n=Le[e],r=t.body.getReader(),s=t.headers.get("X-File-Size")||t.headers.get("Content-Length"),i=s?parseInt(s):0,c=i!==0;let a=0;const l=new ReadableStream({start(e){t();function t(){r.read().then(({done:s,value:o})=>{if(s)e.close();else{a+=o.byteLength;const s=new ProgressEvent("progress",{lengthComputable:c,loaded:a,total:i});for(let e=0,o=n.length;e<o;e++){const t=n[e];t.onProgress&&t.onProgress(s)}e.enqueue(o),t()}},t=>{e.error(t)})}}});return new Response(l)}throw new g0(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(c){case"arraybuffer":return e.arrayBuffer();case"blob":return e.blob();case"document":return e.text().then(e=>{const t=new DOMParser;return t.parseFromString(e,a)});case"json":return e.json();default:if(a==="")return e.text();const n=/charset="?([^;"\s]*)"?/i,t=n.exec(a),s=t&&t[1]?t[1].toLowerCase():0[0],o=new TextDecoder(s);return e.arrayBuffer().then(e=>o.decode(e))}}).then(t=>{Ue.add(`file:${e}`,t);const n=Le[e];delete Le[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onLoad&&s.onLoad(t)}}).catch(t=>{const n=Le[e];if(n===0[0])throw this.manager.itemError(e),t;delete Le[e];for(let e=0,o=n.length;e<o;e++){const s=n[e];s.onError&&s.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},$t=new WeakMap,j0=class extends It{constructor(e){super(e)}load(e,t,n,s){this.path!==0[0]&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,a=Ue.get(`image:${e}`);if(a!==0[0]){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=$t.get(a);e===0[0]&&(e=[],$t.set(a,e)),e.push({onLoad:t,onError:s})}return a}const o=xs("img");function r(){l(),t&&t(this);const n=$t.get(this)||[];for(let e=0;e<n.length;e++){const t=n[e];t.onLoad&&t.onLoad(this)}$t.delete(this),i.manager.itemEnd(e)}function c(t){l(),s&&s(t),Ue.remove(`image:${e}`);const n=$t.get(this)||[];for(let e=0;e<n.length;e++){const s=n[e];s.onError&&s.onError(t)}$t.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener("load",r,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",r,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==0[0]&&(o.crossOrigin=this.crossOrigin),Ue.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},tc=class extends It{constructor(e){super(e)}load(e,t,n,s){const o=new Z,i=new j0(this.manager);return i.setCrossOrigin(this.crossOrigin),i.setPath(this.path),i.load(e,function(e){o.image=e,o.needsUpdate=!0,t!==0[0]&&t(o)},n,s),o}},oa=class extends O{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new a(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ia=new d,ec=new e,Xr=new e,ga=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new r(512,512),this.mapType=se,this.map=null,this.mapPass=null,this.matrix=new d,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new r(1,1),this._viewportCount=1,this._viewports=[new b(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ec.setFromMatrixPosition(e.matrixWorld),t.position.copy(ec),Xr.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xr),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===hs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return(new this.constructor).copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qs=new e,Js=new Je,ze=new e,qr=class extends O{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new d,this.projectionMatrix=new d,this.projectionMatrixInverse=new d,this.coordinateSystem=Ce,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qs,Js,ze),ze.x===1&&ze.y===1&&ze.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qs,Js,ze.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Qs,Js,ze),ze.x===1&&ze.y===1&&ze.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qs,Js,ze.set(1,1,1)).invert()}clone(){return(new this.constructor).copy(this)}},lt=new e,Kr=new r,Ur=new r,$=class extends qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sn*.5*this.fov);return.5*this.getFilmHeight()/e}getEffectiveFOV(){return cn*2*Math.atan(Math.tan(Sn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){lt.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lt.x,lt.y).multiplyScalar(-e/lt.z),lt.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lt.x,lt.y).multiplyScalar(-e/lt.z)}getViewSize(e,t){return this.getViewBounds(e,Kr,Ur),t.subVectors(Ur,Kr)}setViewOffset(e,t,n,s,o,i){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const i=this.near;let t=i*Math.tan(Sn*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const e=this.view;if(this.view!==null&&this.view.enabled){const i=e.fullWidth,a=e.fullHeight;o+=e.offsetX*s/i,t-=e.offsetY*n/a,s*=e.width/i,n*=e.height/a}const a=this.filmOffset;a!==0&&(o+=i*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,i,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},D0=class extends ga{constructor(){super(new $(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=cn*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,o=e.distance||t.far;(n!==t.fov||s!==t.aspect||o!==t.far)&&(t.fov=n,t.aspect=s,t.far=o,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Wr=class extends oa{constructor(e,t,n=0,s=Math.PI/3,o=0,i=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(O.DEFAULT_UP),this.updateMatrix(),this.target=new O,this.distance=n,this.angle=s,this.penumbra=o,this.decay=i,this.map=null,this.shadow=new D0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},L0=class extends ga{constructor(){super(new $(90,1,.5,500)),this.isPointLightShadow=!0}},R0=class extends oa{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new L0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Pn=class extends qr{constructor(e=-1,t=1,n=1,s=-1,o=.1,i=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=i,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,i){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=i,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const n=(this.right-this.left)/(2*this.zoom),s=(this.top-this.bottom)/(2*this.zoom),o=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let e=o-n,a=o+n,t=i+s,r=i-s;if(this.view!==null&&this.view.enabled){const n=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;e+=n*this.view.offsetX,a=e+n*this.view.width,t-=s*this.view.offsetY,r=t-s*this.view.height}this.projectionMatrix.makeOrthographic(e,a,t,r,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},H0=class extends ga{constructor(){super(new Pn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},I0=class extends oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(O.DEFAULT_UP),this.updateMatrix(),this.target=new O,this.shadow=new H0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ln=class{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)?e:/^data:.*,.*$/i.test(e)?e:/^blob:.*$/i.test(e)?e:t+e)}},Ta=new WeakMap,$0=class extends It{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&o("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&o("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===0[0]&&(e=""),this.path!==0[0]&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,i=Ue.get(`image-bitmap:${e}`);if(i!==0[0]){if(o.manager.itemStart(e),i.then){i.then(n=>{if(Ta.has(i)===!0)s&&s(Ta.get(i)),o.manager.itemError(e),o.manager.itemEnd(e);else return t&&t(n),o.manager.itemEnd(e),n});return}return setTimeout(function(){t&&t(i),o.manager.itemEnd(e)},0),i}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const r=fetch(e,a).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(n){return Ue.add(`image-bitmap:${e}`,n),t&&t(n),o.manager.itemEnd(e),n}).catch(function(t){s&&s(t),Ta.set(r,t),Ue.remove(`image-bitmap:${e}`),o.manager.itemError(e),o.manager.itemEnd(e)});Ue.add(`image-bitmap:${e}`,r),o.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Rt=-90,kn=1,K0=class extends O{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $(Rt,kn,e,t);s.layers=this.layers,this.add(s);const o=new $(Rt,kn,e,t);o.layers=this.layers,this.add(o);const i=new $(Rt,kn,e,t);i.layers=this.layers,this.add(i);const a=new $(Rt,kn,e,t);a.layers=this.layers,this.add(a);const r=new $(Rt,kn,e,t);r.layers=this.layers,this.add(r);const c=new $(Rt,kn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const a=this.coordinateSystem,r=this.children.concat(),[e,t,n,s,o,i]=r;for(const e of r)this.remove(e);if(a===Ce)e.up.set(0,1,0),e.lookAt(1,0,0),t.up.set(0,1,0),t.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),i.up.set(0,1,0),i.lookAt(0,0,-1);else if(a===hs)e.up.set(0,-1,0),e.lookAt(-1,0,0),t.up.set(0,-1,0),t.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),i.up.set(0,-1,0),i.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);for(const e of r)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[p,c,a,r,i,l]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let s=!1;e.isWebGLRenderer===!0?s=e.state.buffers.depth.getReversed():s=e.reversedDepthBuffer,e.setRenderTarget(n,0,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(n,1,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,2,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,4,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),n.texture.generateMipmaps=f,e.setRenderTarget(n,5,o),s&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(d,u,h),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},q0=class extends ${constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ga="\\[\\]\\.:\\/",G0=new RegExp("["+Ga+"]","g"),Xa="[^"+Ga+"]",Q0="[^"+Ga.replace("\\.","")+"]",Z0=/((?:WC+[/:])*)/.source.replace("WC",Xa),J0=/(WCOD+)?/.source.replace("WCOD",Q0),e2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xa),t2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xa),n2=new RegExp("^"+Z0+J0+e2+t2+"$"),s2=["material","materials","bones","map"],o2=class{constructor(e,t,n){const s=n||j.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const s=this._targetGroup.nCachedObjects_,n=this._bindings[s];n!==0[0]&&n.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,o=n.length;s!==o;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},j=class _PropertyBinding{constructor(e,t,n){this.path=t,this.parsedPath=n||_PropertyBinding.parseTrackName(t),this.node=_PropertyBinding.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _PropertyBinding.Composite(e,t,n):new _PropertyBinding(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(G0,"")}static parseTrackName(e){const n=n2.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const t={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=t.nodeName&&t.nodeName.lastIndexOf(".");if(s!==0[0]&&s!==-1){const e=t.nodeName.substring(s+1);s2.indexOf(e)!==-1&&(t.nodeName=t.nodeName.substring(0,s),t.objectName=e)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return t}static findNode(e,t){if(t===0[0]||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==0[0])return n}if(e.children){const n=function(e){for(let o=0;o<e.length;o++){const s=e[o];if(s.name===t||s.uuid===t)return s;const i=n(s.children);if(i)return i}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,o=n.length;s!==o;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const n=this.parsedPath,r=n.objectName,c=n.propertyName;let s=n.propertyIndex;if(e||(e=_PropertyBinding.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){o("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let t=n.objectIndex;switch(r){case"materials":if(!e.material){i("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){i("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){i("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let n=0;n<e.length;n++)if(e[n].name===t){t=n;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){i("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){i("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===0[0]){i("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(t!==0[0]){if(e[t]===0[0]){i("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[t]}}const t=e[c];if(t===0[0]){const t=n.nodeName;i("PropertyBinding: Trying to update property for track: "+t+"."+c+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==0[0]){if(c==="morphTargetInfluences"){if(!e.geometry){i("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){i("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==0[0]&&(s=e.morphTargetDictionary[s])}a=this.BindingType.ArrayElement,this.resolvedProperty=t,this.propertyIndex=s}else t.fromArray!==0[0]&&t.toArray!==0[0]?(a=this.BindingType.HasFromToArray,this.resolvedProperty=t):Array.isArray(t)?(a=this.BindingType.EntireArray,this.resolvedProperty=t):this.propertyName=c;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},j.Composite=o2,j.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},j.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},j.prototype.GetterByBindingType=[j.prototype._getValue_direct,j.prototype._getValue_array,j.prototype._getValue_arrayElement,j.prototype._getValue_toArray],j.prototype.SetterByBindingTypeAndVersioning=[[j.prototype._setValue_direct,j.prototype._setValue_direct_setNeedsUpdate,j.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[j.prototype._setValue_array,j.prototype._setValue_array_setNeedsUpdate,j.prototype._setValue_array_setMatrixWorldNeedsUpdate],[j.prototype._setValue_arrayElement,j.prototype._setValue_arrayElement_setNeedsUpdate,j.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[j.prototype._setValue_fromArray,j.prototype._setValue_fromArray_setNeedsUpdate,j.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],i6=new Float32Array(1),Ar=new d,c2=class{constructor(e,t,n=0,s=1/0){this.ray=new ls(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):i("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ar.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ar),this}intersectObject(e,t=!0,n=[]){return kr(e,this,n,t),n.sort(l2),n}intersectObjects(e,t=!0,n=[]){for(let s=0,o=e.length;s<o;s++)kr(e[s],this,n,t);return n.sort(l2),n}};function l2(e,t){return e.distance-t.distance}function kr(e,t,n,s){let o=!0;if(e.layers.test(t.layers)){const s=e.raycast(t,n);s===!1&&(o=!1)}if(o===!0&&s===!0){const s=e.children;for(let e=0,o=s.length;e<o;e++)kr(s[e],t,n,!0)}}Er=new e,f2=class extends O{constructor(t=new e(0,0,1),n=new e(0,0,0),s=1,o=16776960,i=s*.2,a=i*.2){super(),this.type="ArrowHelper",nr===0[0]&&(nr=new ne,nr.setAttribute("position",new I([0,0,0,0,1,0],3)),fr=new S4(.5,1,5,1),fr.translate(0,-.5,0)),this.position.copy(n),this.line=new to(nr,new Do({color:o,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new K(fr,new rt({color:o,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,i,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Er.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Er,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};function p2(e,t,n,s){const o=s6(s);switch(n){case br:return e*t;case tr:return e*t/o.components*o.byteLength;case er:return e*t/o.components*o.byteLength;case Gt:return e*t*2/o.components*o.byteLength;case Ja:return e*t*2/o.components*o.byteLength;case jr:return e*t*3/o.components*o.byteLength;case le:return e*t*4/o.components*o.byteLength;case Za:return e*t*4/o.components*o.byteLength;case uo:case Gs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case js:case Bs:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wa:case $a:return Math.max(e,16)*Math.max(t,8)/4;case Ka:case Eo:return Math.max(e,8)*Math.max(t,8)/2;case Va:case Ba:case Ha:case Ra:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ia:case La:case Na:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case wa:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Co:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ya:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ja:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ba:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case va:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case pa:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fa:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case la:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case sa:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ta:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ea:case Ji:case Zi:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Qi:case Gi:return Math.ceil(e/4)*Math.ceil(t/4)*8;case qi:case Ki:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function s6(e){switch(e){case se:case ur:return{byteLength:1,components:1};case $n:case Zc:case Ge:return{byteLength:2,components:1};case or:case sr:return{byteLength:2,components:4};case Ee:case cr:case ue:return{byteLength:4,components:1};case gr:case vr:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bi}})),typeof window!="undefined"&&(window.__THREE__?o("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bi);function v2(){let e=null,t=!1,n=null,s=null;function o(t,i){n(t,i),s=e.requestAnimationFrame(o)}return{start:function(){if(t===!0)return;if(n===null)return;s=e.requestAnimationFrame(o),t=!0},stop:function(){e.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Qf(e){const t=new WeakMap;function n(t,n){const s=t.array,a=t.usage,r=s.byteLength,i=e.createBuffer();e.bindBuffer(n,i),e.bufferData(n,s,a),t.onUploadCallback();let o;if(s instanceof Float32Array)o=e.FLOAT;else if(typeof Float16Array!="undefined"&&s instanceof Float16Array)o=e.HALF_FLOAT;else if(s instanceof Uint16Array)t.isFloat16BufferAttribute?o=e.HALF_FLOAT:o=e.UNSIGNED_SHORT;else if(s instanceof Int16Array)o=e.SHORT;else if(s instanceof Uint32Array)o=e.UNSIGNED_INT;else if(s instanceof Int32Array)o=e.INT;else if(s instanceof Int8Array)o=e.BYTE;else if(s instanceof Uint8Array)o=e.UNSIGNED_BYTE;else if(s instanceof Uint8ClampedArray)o=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:i,type:o,bytesPerElement:s.BYTES_PER_ELEMENT,version:t.version,size:r}}function s(t,n,s){const i=n.array,o=n.updateRanges;if(e.bindBuffer(s,t),o.length===0)e.bufferSubData(s,0,i);else{o.sort((e,t)=>e.start-t.start);let t=0;for(let s=1;s<o.length;s++){const e=o[t],n=o[s];n.start<=e.start+e.count+1?e.count=Math.max(e.count,n.start+n.count-e.start):(++t,o[t]=n)}o.length=t+1;for(let t=0,a=o.length;t<a;t++){const n=o[t];e.bufferSubData(s,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function i(n){n.isInterleavedBufferAttribute&&(n=n.data);const s=t.get(n);s&&(e.deleteBuffer(s.buffer),t.delete(n))}function a(e,o){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){const n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}const i=t.get(e);if(i===0[0])t.set(e,n(e,o));else if(i.version<e.version){if(i.size!==e.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(i.buffer,e,o),i.version=e.version}}return{get:o,remove:i,update:a}}j2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y2=`#ifdef USE_ALPHAHASH
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
#endif`,_2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C2=`#ifdef USE_AOMAP
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
#endif`,E2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,k2=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,A2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T2=`#ifdef USE_IRIDESCENCE
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
#endif`,z2=`#ifdef USE_BUMPMAP
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
#endif`,D2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,L2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,B2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,V2=`#define PI 3.141592653589793
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
} // validated`,$2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W2=`vec3 transformedNormal = objectNormal;
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
#endif`,U2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G2="gl_FragColor = linearToOutputTexel( gl_FragColor );",X2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q2=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Z2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,J2=`#ifdef USE_ENVMAP
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
#endif`,e3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t3=`#ifdef USE_ENVMAP
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
#endif`,n3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a3=`#ifdef USE_GRADIENTMAP
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
}`,r3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d3=`uniform bool receiveShadow;
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
#endif`,u3=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,h3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,v3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,b3=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,j3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,y3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A3=`#if defined( USE_POINTS_UV )
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
#endif`,S3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D3=`#ifdef USE_MORPHTARGETS
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
#endif`,N3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B3=`#ifdef USE_NORMALMAP
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
#endif`,V3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Y3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sh=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ih=`#ifdef USE_SKINNING
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
#endif`,ah=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rh=`#ifdef USE_SKINNING
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
#endif`,ch=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hh=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mh=`#ifdef USE_TRANSMISSION
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
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jh=`uniform sampler2D t2D;
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
}`,yh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_h=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xh=`#include <common>
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
}`,Ch=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Eh=`#define DISTANCE
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
}`,kh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mh=`uniform float scale;
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
}`,Fh=`uniform vec3 diffuse;
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
}`,Th=`#include <common>
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
}`,zh=`uniform vec3 diffuse;
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
}`,Dh=`#define LAMBERT
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
}`,Nh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Lh=`#define MATCAP
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
}`,Rh=`#define MATCAP
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
}`,Ph=`#define NORMAL
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
}`,Hh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ih=`#define PHONG
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
}`,Bh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Vh=`#define STANDARD
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
}`,$h=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Wh=`#define TOON
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
}`,Uh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Kh=`uniform float size;
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
}`,qh=`uniform vec3 diffuse;
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
}`,Yh=`#include <common>
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
}`,Gh=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Xh=`uniform float rotation;
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
}`,Qh=`uniform vec3 diffuse;
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
}`,c={alphahash_fragment:j2,alphahash_pars_fragment:y2,alphamap_fragment:_2,alphamap_pars_fragment:w2,alphatest_fragment:O2,alphatest_pars_fragment:x2,aomap_fragment:C2,aomap_pars_fragment:E2,batching_pars_vertex:k2,batching_vertex:A2,begin_vertex:S2,beginnormal_vertex:M2,bsdfs:F2,iridescence_fragment:T2,bumpmap_pars_fragment:z2,clipping_planes_fragment:D2,clipping_planes_pars_fragment:N2,clipping_planes_pars_vertex:L2,clipping_planes_vertex:R2,color_fragment:P2,color_pars_fragment:H2,color_pars_vertex:I2,color_vertex:B2,common:V2,cube_uv_reflection_fragment:$2,defaultnormal_vertex:W2,displacementmap_pars_vertex:U2,displacementmap_vertex:K2,emissivemap_fragment:q2,emissivemap_pars_fragment:Y2,colorspace_fragment:G2,colorspace_pars_fragment:X2,envmap_fragment:Q2,envmap_common_pars_fragment:Z2,envmap_pars_fragment:J2,envmap_pars_vertex:e3,envmap_physical_pars_fragment:u3,envmap_vertex:t3,fog_vertex:n3,fog_pars_vertex:s3,fog_fragment:o3,fog_pars_fragment:i3,gradientmap_pars_fragment:a3,lightmap_pars_fragment:r3,lights_lambert_fragment:c3,lights_lambert_pars_fragment:l3,lights_pars_begin:d3,lights_toon_fragment:h3,lights_toon_pars_fragment:m3,lights_phong_fragment:f3,lights_phong_pars_fragment:p3,lights_physical_fragment:g3,lights_physical_pars_fragment:v3,lights_fragment_begin:b3,lights_fragment_maps:j3,lights_fragment_end:y3,logdepthbuf_fragment:_3,logdepthbuf_pars_fragment:w3,logdepthbuf_pars_vertex:O3,logdepthbuf_vertex:x3,map_fragment:C3,map_pars_fragment:E3,map_particle_fragment:k3,map_particle_pars_fragment:A3,metalnessmap_fragment:S3,metalnessmap_pars_fragment:M3,morphinstance_vertex:F3,morphcolor_vertex:T3,morphnormal_vertex:z3,morphtarget_pars_vertex:D3,morphtarget_vertex:N3,normal_fragment_begin:L3,normal_fragment_maps:R3,normal_pars_fragment:P3,normal_pars_vertex:H3,normal_vertex:I3,normalmap_pars_fragment:B3,clearcoat_normal_fragment_begin:V3,clearcoat_normal_fragment_maps:$3,clearcoat_pars_fragment:W3,iridescence_pars_fragment:U3,opaque_fragment:K3,packing:q3,premultiplied_alpha_fragment:Y3,project_vertex:G3,dithering_fragment:X3,dithering_pars_fragment:Q3,roughnessmap_fragment:Z3,roughnessmap_pars_fragment:J3,shadowmap_pars_fragment:eh,shadowmap_pars_vertex:$d,shadowmap_vertex:nh,shadowmask_pars_fragment:sh,skinbase_vertex:oh,skinning_pars_vertex:ih,skinning_vertex:ah,skinnormal_vertex:rh,specularmap_fragment:ch,specularmap_pars_fragment:Vd,tonemapping_fragment:dh,tonemapping_pars_fragment:uh,transmission_fragment:hh,transmission_pars_fragment:mh,uv_pars_fragment:fh,uv_pars_vertex:ph,uv_vertex:gh,worldpos_vertex:vh,background_vert:bh,background_frag:jh,backgroundCube_vert:yh,backgroundCube_frag:_h,cube_vert:wh,cube_frag:Oh,depth_vert:xh,depth_frag:Ch,distance_vert:Eh,distance_frag:kh,equirect_vert:Ah,equirect_frag:Sh,linedashed_vert:Mh,linedashed_frag:Fh,meshbasic_vert:Th,meshbasic_frag:zh,meshlambert_vert:Dh,meshlambert_frag:Nh,meshmatcap_vert:Lh,meshmatcap_frag:Rh,meshnormal_vert:Ph,meshnormal_frag:Hh,meshphong_vert:Ih,meshphong_frag:Bh,meshphysical_vert:Vh,meshphysical_frag:$h,meshtoon_vert:Wh,meshtoon_frag:Uh,points_vert:Kh,points_frag:qh,shadow_vert:Yh,shadow_frag:Gh,sprite_vert:Xh,sprite_frag:Qh},t={common:{diffuse:{value:new a(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new u},alphaMap:{value:null},alphaMapTransform:{value:new u},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new u}},envmap:{envMap:{value:null},envMapRotation:{value:new u},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new u}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new u}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new u},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new u},normalScale:{value:new r(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new u},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new u}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new u}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new u}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new a(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new a(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new u},alphaTest:{value:0},uvTransform:{value:new u}},sprite:{diffuse:{value:new a(16777215)},opacity:{value:1},center:{value:new r(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new u},alphaMap:{value:null},alphaMapTransform:{value:new u},alphaTest:{value:0}}},we={basic:{uniforms:Q([t.common,t.specularmap,t.envmap,t.aomap,t.lightmap,t.fog]),vertexShader:c.meshbasic_vert,fragmentShader:c.meshbasic_frag},lambert:{uniforms:Q([t.common,t.specularmap,t.envmap,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.fog,t.lights,{emissive:{value:new a(0)},envMapIntensity:{value:1}}]),vertexShader:c.meshlambert_vert,fragmentShader:c.meshlambert_frag},phong:{uniforms:Q([t.common,t.specularmap,t.envmap,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.fog,t.lights,{emissive:{value:new a(0)},specular:{value:new a(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:c.meshphong_vert,fragmentShader:c.meshphong_frag},standard:{uniforms:Q([t.common,t.envmap,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.roughnessmap,t.metalnessmap,t.fog,t.lights,{emissive:{value:new a(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:c.meshphysical_vert,fragmentShader:c.meshphysical_frag},toon:{uniforms:Q([t.common,t.aomap,t.lightmap,t.emissivemap,t.bumpmap,t.normalmap,t.displacementmap,t.gradientmap,t.fog,t.lights,{emissive:{value:new a(0)}}]),vertexShader:c.meshtoon_vert,fragmentShader:c.meshtoon_frag},matcap:{uniforms:Q([t.common,t.bumpmap,t.normalmap,t.displacementmap,t.fog,{matcap:{value:null}}]),vertexShader:c.meshmatcap_vert,fragmentShader:c.meshmatcap_frag},points:{uniforms:Q([t.points,t.fog]),vertexShader:c.points_vert,fragmentShader:c.points_frag},dashed:{uniforms:Q([t.common,t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:c.linedashed_vert,fragmentShader:c.linedashed_frag},depth:{uniforms:Q([t.common,t.displacementmap]),vertexShader:c.depth_vert,fragmentShader:c.depth_frag},normal:{uniforms:Q([t.common,t.bumpmap,t.normalmap,t.displacementmap,{opacity:{value:1}}]),vertexShader:c.meshnormal_vert,fragmentShader:c.meshnormal_frag},sprite:{uniforms:Q([t.sprite,t.fog]),vertexShader:c.sprite_vert,fragmentShader:c.sprite_frag},background:{uniforms:{uvTransform:{value:new u},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:c.background_vert,fragmentShader:c.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new u}},vertexShader:c.backgroundCube_vert,fragmentShader:c.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:c.cube_vert,fragmentShader:c.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:c.equirect_vert,fragmentShader:c.equirect_frag},distance:{uniforms:Q([t.common,t.displacementmap,{referencePosition:{value:new e},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:c.distance_vert,fragmentShader:c.distance_frag},shadow:{uniforms:Q([t.lights,t.fog,{color:{value:new a(0)},opacity:{value:1}}]),vertexShader:c.shadow_vert,fragmentShader:c.shadow_frag}},we.physical={uniforms:Q([we.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new u},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new u},clearcoatNormalScale:{value:new r(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new u},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new u},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new u},sheen:{value:0},sheenColor:{value:new a(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new u},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new u},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new u},transmissionSamplerSize:{value:new r},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new u},attenuationDistance:{value:0},attenuationColor:{value:new a(0)},specularColor:{value:new a(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new u},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new u},anisotropyVector:{value:new r},anisotropyMap:{value:null},anisotropyMapTransform:{value:new u}}]),vertexShader:c.meshphysical_vert,fragmentShader:c.meshphysical_frag},mo={r:0,b:0,g:0},kt=new mt,sm=new d;function Gf(e,t,n,s,o,i){const d=new a(0);let l=o===!0?0:1,c,r,u=null,h=0,m=null;function v(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){const s=e.backgroundBlurriness>0;n=t.get(n,s)}return n}function b(t){let o=!1;const s=v(t);s===null?g(d,l):s&&s.isColor&&(g(s,1),o=!0);const a=e.xr.getEnvironmentBlendMode();a==="additive"?n.buffers.color.setClear(0,0,0,1,i):a==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,i),(e.autoClear||o)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function j(t,n){const o=v(n);o&&(o.isCubeTexture||o.mapping===Ys)?(r===0[0]&&(r=new K(new Vi(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:fs(we.backgroundCube.uniforms),vertexShader:we.backgroundCube.vertexShader,fragmentShader:we.backgroundCube.fragmentShader,side:X,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),r.geometry.deleteAttribute("normal"),r.geometry.deleteAttribute("uv"),r.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(r.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(r)),kt.copy(n.backgroundRotation),kt.x*=-1,kt.y*=-1,kt.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(kt.y*=-1,kt.z*=-1),r.material.uniforms.envMap.value=o,r.material.uniforms.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,r.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,r.material.uniforms.backgroundRotation.value.setFromMatrix4(sm.makeRotationFromEuler(kt)),r.material.toneMapped=f.getTransfer(o.colorSpace)!==p,(u!==o||h!==o.version||m!==e.toneMapping)&&(r.material.needsUpdate=!0,u=o,h=o.version,m=e.toneMapping),r.layers.enableAll(),t.unshift(r,r.geometry,r.material,0,0,null)):o&&o.isTexture&&(c===0[0]&&(c=new K(new lc(2,2),new Me({name:"BackgroundMaterial",uniforms:fs(we.background.uniforms),vertexShader:we.background.vertexShader,fragmentShader:we.background.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=o,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=f.getTransfer(o.colorSpace)!==p,o.matrixAutoUpdate===!0&&o.updateMatrix(),c.material.uniforms.uvTransform.value.copy(o.matrix),(u!==o||h!==o.version||m!==e.toneMapping)&&(c.material.needsUpdate=!0,u=o,h=o.version,m=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,s){t.getRGB(mo,D4(e)),n.buffers.color.setClear(mo.r,mo.g,mo.b,s,i)}function y(){r!==0[0]&&(r.geometry.dispose(),r.material.dispose(),r=0[0]),c!==0[0]&&(c.geometry.dispose(),c.material.dispose(),c=0[0])}return{getClearColor:function(){return d},setClearColor:function(e,t=1){d.set(e),l=t,g(d,l)},getClearAlpha:function(){return l},setClearAlpha:function(e){l=e,g(d,l)},render:b,addToRenderList:j,dispose:y}}function Yf(e,t){const v=e.getParameter(e.MAX_VERTEX_ATTRIBS),s={},o=h(null);let n=o,a=!1;function E(s,o,i,r,c){let l=!1;const u=j(s,r,i,o);n!==u&&(n=u,d(n.object)),l=b(s,r,i,c),l&&g(s,r,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(l||a)&&(a=!1,y(s,o,i,r),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function C(){return e.createVertexArray()}function d(t){return e.bindVertexArray(t)}function i(t){return e.deleteVertexArray(t)}function j(e,t,n,o){const l=o.wireframe===!0;let i=s[t.id];i===0[0]&&(i={},s[t.id]=i);const d=e.isInstancedMesh===!0?e.id:0;let a=i[d];a===0[0]&&(a={},i[d]=a);let r=a[n.id];r===0[0]&&(r={},a[n.id]=r);let c=r[l];return c===0[0]&&(c=h(C()),r[l]=c),c}function h(e){const t=[],n=[],s=[];for(let e=0;e<v;e++)t[e]=0,n[e]=0,s[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:s,object:e,attributes:{},index:null}}function b(e,t,s,o){const r=n.attributes,c=t.attributes;let i=0;const a=s.getAttributes();for(const t in a){const n=a[t];if(n.location>=0){const s=r[t];let n=c[t];if(n===0[0]&&(t==="instanceMatrix"&&e.instanceMatrix&&(n=e.instanceMatrix),t==="instanceColor"&&e.instanceColor&&(n=e.instanceColor)),s===0[0])return!0;if(s.attribute!==n)return!0;if(n&&s.data!==n.data)return!0;i++}}return n.attributesNum!==i||n.index!==o}function g(e,t,s,o){const i={},c=t.attributes;let a=0;const r=s.getAttributes();for(const t in r){const n=r[t];if(n.location>=0){let n=c[t];n===0[0]&&(t==="instanceMatrix"&&e.instanceMatrix&&(n=e.instanceMatrix),t==="instanceColor"&&e.instanceColor&&(n=e.instanceColor));const s={};s.attribute=n,n&&n.data&&(s.data=n.data),i[t]=s,a++}}n.attributes=i,n.attributesNum=a,n.index=o}function p(){const e=n.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function c(e){r(e,0)}function r(t,s){const a=n.newAttributes,o=n.enabledAttributes,i=n.attributeDivisors;a[t]=1,o[t]===0&&(e.enableVertexAttribArray(t),o[t]=1),i[t]!==s&&(e.vertexAttribDivisor(t,s),i[t]=s)}function m(){const s=n.newAttributes,t=n.enabledAttributes;for(let n=0,o=t.length;n<o;n++)t[n]!==s[n]&&(e.disableVertexAttribArray(n),t[n]=0)}function u(t,n,s,o,i,a,r){r===!0?e.vertexAttribIPointer(t,n,s,i,a):e.vertexAttribPointer(t,n,s,o,i,a)}function y(n,s,o,i){p();const d=i.attributes,a=o.getAttributes(),l=s.defaultAttributeValues;for(const o in a){const s=a[o];if(s.location>=0){let a=d[o];if(a===0[0]&&(o==="instanceMatrix"&&n.instanceMatrix&&(a=n.instanceMatrix),o==="instanceColor"&&n.instanceColor&&(a=n.instanceColor)),a!==0[0]){const m=a.normalized,o=a.itemSize,l=t.get(a);if(l===0[0])continue;const f=l.buffer,d=l.type,h=l.bytesPerElement,p=d===e.INT||d===e.UNSIGNED_INT||a.gpuType===cr;if(a.isInterleavedBufferAttribute){const t=a.data,l=t.stride,g=a.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<s.locationSize;e++)r(s.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&i._maxInstanceCount===0[0]&&(i._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<s.locationSize;e++)c(s.location+e);e.bindBuffer(e.ARRAY_BUFFER,f);for(let e=0;e<s.locationSize;e++)u(s.location+e,o/s.locationSize,d,m,l*h,(g+o/s.locationSize*e)*h,p)}else{if(a.isInstancedBufferAttribute){for(let e=0;e<s.locationSize;e++)r(s.location+e,a.meshPerAttribute);n.isInstancedMesh!==!0&&i._maxInstanceCount===0[0]&&(i._maxInstanceCount=a.meshPerAttribute*a.count)}else for(let e=0;e<s.locationSize;e++)c(s.location+e);e.bindBuffer(e.ARRAY_BUFFER,f);for(let e=0;e<s.locationSize;e++)u(s.location+e,o/s.locationSize,d,m,o*h,o/s.locationSize*e*h,p)}}else if(l!==0[0]){const t=l[o];if(t!==0[0])switch(t.length){case 2:e.vertexAttrib2fv(s.location,t);break;case 3:e.vertexAttrib3fv(s.location,t);break;case 4:e.vertexAttrib4fv(s.location,t);break;default:e.vertexAttrib1fv(s.location,t)}}}}m()}function _(){l();for(const e in s){const t=s[e];for(const n in t){const e=t[n];for(const n in e){const t=e[n];for(const e in t)i(t[e].object),delete t[e];delete e[n]}}delete s[e]}}function w(e){if(s[e.id]===0[0])return;const t=s[e.id];for(const n in t){const e=t[n];for(const n in e){const t=e[n];for(const e in t)i(t[e].object),delete t[e];delete e[n]}}delete s[e.id]}function O(e){for(const n in s){const t=s[n];for(const o in t){const n=t[o];if(n[e.id]===0[0])continue;const s=n[e.id];for(const e in s)i(s[e].object),delete s[e];delete n[e.id]}}}function x(e){for(const o in s){const n=s[o],a=e.isInstancedMesh===!0?e.id:0,t=n[a];if(t===0[0])continue;for(const n in t){const e=t[n];for(const t in e)i(e[t].object),delete e[t];delete t[n]}delete n[a],Object.keys(n).length===0&&delete s[o]}}function l(){if(f(),a=!0,n===o)return;n=o,d(n.object)}function f(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:E,reset:l,resetDefaultState:f,dispose:_,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:O,initAttributes:p,enableAttribute:c,disableUnusedAttributes:m}}function qf(e,t,n){let s;function i(e){s=e}function a(t,o){e.drawArrays(s,t,o),n.update(o,s,1)}function o(t,o,i){if(i===0)return;e.drawArraysInstanced(s,t,o,i),n.update(o,s,i)}function r(e,o,i){if(i===0)return;const r=t.get("WEBGL_multi_draw");r.multiDrawArraysWEBGL(s,e,0,o,0,i);let a=0;for(let e=0;e<i;e++)a+=o[e];n.update(a,s,1)}function c(e,i,a,r){if(a===0)return;const c=t.get("WEBGL_multi_draw");if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],r[t]);else{c.multiDrawArraysInstancedWEBGL(s,e,0,i,0,r,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*r[e];n.update(t,s,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=r,this.renderMultiDrawInstances=c}function Kf(e,t,n,s){let i;function m(){if(i!==0[0])return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const n=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function u(t){return t===le||s.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function g(n){const o=n===Ge&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(n!==se&&s.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==ue&&!o)}function c(t){if(t==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";t="mediump"}return t==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=n.precision!==0[0]?n.precision:"highp";const r=c(a);r!==a&&(o("WebGLRenderer:",a,"not supported, using",r,"instead."),a=r);const h=n.logarithmicDepthBuffer===!0,l=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),b=e.getParameter(e.MAX_VERTEX_ATTRIBS),j=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),O=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:m,getMaxPrecision:c,textureFormatReadable:u,textureTypeReadable:g,precision:a,logarithmicDepthBuffer:h,reversedDepthBuffer:l,maxTextures:f,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:v,maxAttributes:b,maxVertexUniforms:j,maxVaryings:y,maxFragmentUniforms:_,maxSamples:w,samples:O}}function Wf(e){const o=this;let i=null,n=0,r=!1,s=!1;const c=new yt,l=new u,t={value:null,needsUpdate:!1};this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){const s=e.length!==0||t||n!==0||r;return r=t,n=e.length,s},this.beginShadows=function(){s=!0,a(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(e,t){i=a(e,t,0)},this.setState=function(o,c,l){const u=o.clippingPlanes,m=o.clipIntersection,f=o.clipShadows,h=e.get(o);if(!r||u===null||u.length===0||s&&!f)s?a(null):d();else{const o=s?0:n,r=o*4;let e=h.clippingState||null;t.value=e,e=a(u,c,r,l);for(let t=0;t!==r;++t)e[t]=i[t];h.clippingState=e,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=o}};function d(){t.value!==i&&(t.value=i,t.needsUpdate=n>0),o.numPlanes=n,o.numIntersection=0}function a(e,n,s,i){const r=e!==null?e.length:0;let a=null;if(r!==0){if(a=t.value,i!==!0||a===null){const t=s+r*4,o=n.matrixWorldInverse;l.getNormalMatrix(o),(a===null||a.length<t)&&(a=new Float32Array(t));for(let t=0,n=s;t!==r;++t,n+=4)c.copy(e[t]).applyMatrix4(o,l),c.normal.toArray(a,n),a[n+3]=c.constant}t.value=a,t.needsUpdate=!0}return o.numPlanes=r,o.numIntersection=0,a}}ot=4,hr=[.125,.215,.35,.446,.526,.582],bt=20,hm=256,Vn=new Pn,Oc=new a,rr=null,ar=0,ir=0,Qa=!1,jm=new e,Mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,o={}){const{size:a=256,position:r=jm}=o;rr=this._renderer.getRenderTarget(),ar=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,s,i,r),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rr,ar,ir),this._renderer.xr.enabled=Qa,e.scissorTest=!1,ns(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wt||e.mapping===En?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rr=this._renderer.getRenderTarget(),ar=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),Qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,16*7),t=4*this._cubeSize,n={magFilter:A,minFilter:A,generateMipmaps:!1,type:Ge,format:le,colorSpace:H,depthBuffer:!1},s=wm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mf(s),this._blurMaterial=xf(s,e,t),this._ggxMaterial=Ef(s,e,t))}return s}_compileMaterial(e){const t=new K(new ne,e);this._renderer.compile(t,Vn)}_sceneToCubeUV(e,t,n,s,o){const p=90,v=1,a=new $(p,v,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],i=this._renderer,g=i.autoClear,m=i.toneMapping;i.getClearColor(Oc),i.toneMapping=De,i.autoClear=!1;const f=i.state.buffers.depth.getReversed();f&&(i.setRenderTarget(s),i.clearDepth(),i.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new Vi,new rt({name:"PMREM.Background",side:X,depthWrite:!1,depthTest:!1})));const u=this._backgroundBox,h=u.material;let c=!1;const r=e.background;r?r.isColor&&(h.color.copy(r),e.background=null,c=!0):(h.color.copy(Oc),c=!0);for(let t=0;t<6;t++){const r=t%3;r===0?(a.up.set(0,l[t],0),a.position.set(o.x,o.y,o.z),a.lookAt(o.x+d[t],o.y,o.z)):r===1?(a.up.set(0,0,l[t]),a.position.set(o.x,o.y,o.z),a.lookAt(o.x,o.y+d[t],o.z)):(a.up.set(0,l[t],0),a.position.set(o.x,o.y,o.z),a.lookAt(o.x,o.y,o.z+d[t]));const n=this._cubeSize;ns(s,r*n,t>2?n:0,n,n),i.setRenderTarget(s),c&&i.render(u,a),i.render(e,a)}i.toneMapping=m,i.autoClear=g,e.background=r}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===wt||e.mapping===En;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const o=s?this._cubemapMaterial:this._equirectMaterial,i=this._lodMeshes[0];i.material=o;const r=o.uniforms;r.envMap.value=e;const a=this._cubeSize;ns(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(i,Vn)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let t=1;t<s;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){const a=this._renderer,r=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[n];c.material=u;const o=u.uniforms,l=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),g=(l*l-d*d)**.5,f=0+l*1.25,p=g*f,{_lodMax:i}=this,s=this._sizeLods[n],h=3*s*(n>i-ot?n-i+ot:0),m=4*(this._cubeSize-s);o.envMap.value=e.texture,o.roughness.value=p,o.mipInt.value=i-t,ns(r,h,m,3*s,2*s),a.setRenderTarget(r),a.render(c,Vn),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=i-n,ns(e,h,m,3*s,2*s),a.setRenderTarget(e),a.render(c,Vn)}_blur(e,t,n,s,o){const i=this._pingPongRenderTarget;this._halfBlur(e,i,t,n,s,"latitudinal",o),this._halfBlur(i,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,a,r,c){const b=this._renderer,j=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&i("blur direction must be either latitudinal or longitudinal!");const _=3,p=this._lodMeshes[s];p.material=j;const l=j.uniforms,y=this._sizeLods[n]-1,v=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*bt-1),g=a/v,u=isFinite(a)?1+Math.floor(_*g):bt;u>bt&&o(`sigmaRadians, ${a}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${bt}`);const d=[];let f=0;for(let e=0;e<bt;++e){const n=e/g,t=Math.exp(-n*n/2);d.push(t),e===0?f+=t:e<u&&(f+=2*t)}for(let e=0;e<d.length;e++)d[e]=d[e]/f;l.envMap.value=e.texture,l.samples.value=u,l.weights.value=d,l.latitudinal.value=r==="latitudinal",c&&(l.poleAxis.value=c);const{_lodMax:m}=this;l.dTheta.value=v,l.mipInt.value=m-n;const h=this._sizeLods[s],w=3*h*(s>m-ot?s-m+ot:0),O=4*(this._cubeSize-h);ns(t,w,O,3*h,2*h),b.setRenderTarget(t),b.render(p,Vn)}};function Mf(e){const n=[],s=[],o=[];let t=e;const i=e-ot+1+hr.length;for(let l=0;l<i;l++){const m=2**t;n.push(m);let g=1/m;l>e-ot?g=hr[l-e+ot-1]:l===0&&(g=0),s.push(g);const v=1/(m-2),r=-v,c=1+v,_=[r,r,c,r,c,c,r,r,c,c,r,c],u=6,a=6,h=3,f=2,p=1,b=new Float32Array(h*a*u),j=new Float32Array(f*a*u),y=new Float32Array(p*a*u);for(let e=0;e<u;e++){const t=e%3*2/3-1,n=e>2?0:-1,s=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];b.set(s,h*a*e),j.set(_,f*a*e);const o=[e,e,e,e,e,e];y.set(o,p*a*e)}const d=new ne;d.setAttribute("position",new V(b,h)),d.setAttribute("uv",new V(j,f)),d.setAttribute("faceIndex",new V(y,p)),o.push(new K(d,null)),t>ot&&t--}return{lodMeshes:o,sizeLods:n,sigmas:s}}function wm(e,t,n){const s=new Te(e,t,n);return s.texture.mapping=Ys,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ns(e,t,n,s,o){e.viewport.set(t,n,s,o),e.scissor.set(t,n,s,o)}function Ef(e,t,n){const s=new Me({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ui(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ve,depthTest:!1,depthWrite:!1});return s}function xf(t,n,s){const o=new Float32Array(bt),i=new e(0,1,0),a=new Me({name:"SphericalGaussianBlur",defines:{n:bt,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/s,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ui(),fragmentShader:`

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
		`,blending:Ve,depthTest:!1,depthWrite:!1});return a}function Em(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ui(),fragmentShader:`

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
		`,blending:Ve,depthTest:!1,depthWrite:!1})}function km(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ui(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ve,depthTest:!1,depthWrite:!1})}function Ui(){return`

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
	`}vc=class extends Te{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Dc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vi(5,5,5),o=new Me({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:X,blending:Ve});o.uniforms.tEquirect.value=t;const s=new K(i,o),a=t.minFilter;t.minFilter===Pe&&(t.minFilter=A);const r=new K0(1,10,this);return r.update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const o=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(o)}};function wf(e){let n=new WeakMap,s=new WeakMap,t=null;function r(e,t=!1){return e==null?null:t?l(e):c(e)}function c(t){if(t&&t.isTexture){const s=t.mapping;if(s===qa||s===Ya){if(n.has(t)){const e=n.get(t).texture;return o(e,t.mapping)}const s=t.image;if(s&&s.height>0){const a=new vc(s.height);return a.fromEquirectangularTexture(e,t),n.set(t,a),t.addEventListener("dispose",i),o(a.texture,t.mapping)}return null}}return t}function l(n){if(n&&n.isTexture){const o=n.mapping,i=o===qa||o===Ya,r=o===wt||o===En;if(i||r){let o=s.get(n);const c=o!==0[0]?o.texture.pmremVersion:0;if(n.isRenderTargetTexture&&n.pmremVersion!==c)return t===null&&(t=new Mr(e)),o=i?t.fromEquirectangular(n,o):t.fromCubemap(n,o),o.texture.pmremVersion=n.pmremVersion,s.set(n,o),o.texture;if(o!==0[0])return o.texture;const image=n.image;return i&&image&&image.height>0||r&&image&&d(image)?(t===null&&(t=new Mr(e)),o=i?t.fromEquirectangular(n):t.fromCubemap(n),o.texture.pmremVersion=n.pmremVersion,s.set(n,o),n.addEventListener("dispose",a),o.texture):null}}return n}function o(e,t){return t===qa?e.mapping=wt:t===Ya&&(e.mapping=En),e}function d(e){let t=0;const n=6;for(let s=0;s<n;s++)e[s]!==0[0]&&t++;return t===n}function i(e){const t=e.target;t.removeEventListener("dispose",i);const s=n.get(t);s!==0[0]&&(n.delete(t),s.dispose())}function a(e){const t=e.target;t.removeEventListener("dispose",a);const n=s.get(t);n!==0[0]&&(s.delete(t),n.dispose())}function u(){n=new WeakMap,s=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function yf(e){const n={};function t(t){if(n[t]!==0[0])return n[t];const s=e.getExtension(t);return n[t]=s,s}return{has:function(e){return t(e)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(e){const n=t(e);return n===null&&xi("WebGLRenderer: "+e+" extension not supported."),n}}}function jf(e,t,n,s){const i={},o=new WeakMap;function a(e){const r=e.target;r.index!==null&&t.remove(r.index);for(const e in r.attributes)t.remove(r.attributes[e]);r.removeEventListener("dispose",a),delete i[r.id];const c=o.get(r);c&&(t.remove(c),o.delete(r)),s.releaseStatesOfGeometry(r),r.isInstancedBufferGeometry===!0&&delete r._maxInstanceCount,n.memory.geometries--}function c(e,t){return i[t.id]===!0?t:(t.addEventListener("dispose",a),i[t.id]=!0,n.memory.geometries++,t)}function l(n){const s=n.attributes;for(const n in s)t.update(s[n],e.ARRAY_BUFFER)}function r(e){const s=[],i=e.index,n=e.attributes.position;let a=0;if(n===0[0])return;if(i!==null){const e=i.array;a=i.version;for(let t=0,a=e.length;t<a;t+=3){const n=e[t+0],o=e[t+1],i=e[t+2];s.push(n,o,o,i,i,n)}}else{const e=n.array;a=n.version;for(let t=0,a=e.length/3-1;t<a;t+=3){const n=t+0,o=t+1,i=t+2;s.push(n,o,o,i,i,n)}}const r=new(n.count>=65535?dr:dl)(s,1);r.version=a;const c=o.get(e);c&&t.remove(c),o.set(e,r)}function d(e){const t=o.get(e);if(t){const n=e.index;n!==null&&t.version<n.version&&r(e)}else r(e);return o.get(e)}return{get:c,update:l,getWireframeAttribute:d}}function vf(e,t,n){let s;function r(e){s=e}let o,i;function c(e){o=e.type,i=e.bytesPerElement}function l(t,a){e.drawElements(s,a,o,t*i),n.update(a,s,1)}function a(t,a,r){if(r===0)return;e.drawElementsInstanced(s,a,o,t*i,r),n.update(a,s,r)}function d(e,i,a){if(a===0)return;const c=t.get("WEBGL_multi_draw");c.multiDrawElementsWEBGL(s,i,0,o,e,0,a);let r=0;for(let e=0;e<a;e++)r+=i[e];n.update(r,s,1)}function u(e,r,c,l){if(c===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let t=0;t<e.length;t++)a(e[t]/i,r[t],l[t]);else{d.multiDrawElementsInstancedWEBGL(s,r,0,o,e,0,l,0,c);let t=0;for(let e=0;e<c;e++)t+=r[e]*l[e];n.update(t,s,1)}}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=a,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function gf(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(n,s,o){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=o*(n/3);break;case e.LINES:t.lines+=o*(n/2);break;case e.LINE_STRIP:t.lines+=o*(n-1);break;case e.LINE_LOOP:t.lines+=o*n;break;case e.POINTS:t.points+=o*n;break;default:i("WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:o,update:s}}function ff(e,t,n){const o=new WeakMap,s=new b;function i(i,a,c){const u=i.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==0[0]?h.length:0;let l=o.get(a);if(l===0[0]||l.count!==d){let h=function(){u.dispose(),o.delete(a),a.removeEventListener("dispose",h)};var m=h;l!==0[0]&&l.texture.dispose();const g=a.morphAttributes.position!==0[0],p=a.morphAttributes.normal!==0[0],f=a.morphAttributes.color!==0[0],j=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let i=0;g===!0&&(i=1),p===!0&&(i=2),f===!0&&(i=3);let n=a.attributes.position.count*i,c=1;n>t.maxTextureSize&&(c=Math.ceil(n/t.maxTextureSize),n=t.maxTextureSize);const e=new Float32Array(n*c*4*d),u=new ed(e,n,c,d);u.type=ue,u.needsUpdate=!0;const y=i*4;for(let o=0;o<d;o++){const i=j[o],r=b[o],a=v[o],t=n*c*4*o;for(let o=0;o<i.count;o++){const n=o*y;g===!0&&(s.fromBufferAttribute(i,o),e[t+n+0]=s.x,e[t+n+1]=s.y,e[t+n+2]=s.z,e[t+n+3]=0),p===!0&&(s.fromBufferAttribute(r,o),e[t+n+4]=s.x,e[t+n+5]=s.y,e[t+n+6]=s.z,e[t+n+7]=0),f===!0&&(s.fromBufferAttribute(a,o),e[t+n+8]=s.x,e[t+n+9]=s.y,e[t+n+10]=s.z,e[t+n+11]=a.itemSize===4?s.w:1)}}l={count:d,texture:u,size:new r(n,c)},o.set(a,l),a.addEventListener("dispose",h)}if(i.isInstancedMesh===!0&&i.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",i.morphTexture,n);else{let t=0;for(let e=0;e<u.length;e++)t+=u[e];const n=a.morphTargetsRelative?1:1-t;c.getUniforms().setValue(e,"morphTargetBaseInfluence",n),c.getUniforms().setValue(e,"morphTargetInfluences",u)}c.getUniforms().setValue(e,"morphTargetsTexture",l.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",l.size)}return{update:i}}function mf(e,t,n,s,o){let i=new WeakMap;function r(s){const r=o.render.frame,l=s.geometry,c=t.get(s,l);if(i.get(c)!==r&&(t.update(c),i.set(c,r)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),i.get(s)!==r&&(n.update(s.instanceMatrix,e.ARRAY_BUFFER),s.instanceColor!==null&&n.update(s.instanceColor,e.ARRAY_BUFFER),i.set(s,r))),s.isSkinnedMesh){const e=s.skeleton;i.get(e)!==r&&(e.update(),i.set(e,r))}return c}function c(){i=new WeakMap}function a(e){const t=e.target;t.removeEventListener("dispose",a),s.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:r,dispose:c}}Rm={[Vr]:"LINEAR_TONE_MAPPING",[Br]:"REINHARD_TONE_MAPPING",[Ir]:"CINEON_TONE_MAPPING",[Pa]:"ACES_FILMIC_TONE_MAPPING",[Pr]:"AGX_TONE_MAPPING",[Rr]:"NEUTRAL_TONE_MAPPING",[Hr]:"CUSTOM_TONE_MAPPING"};function hf(e,t,n,s,o){const a=new Te(t,n,{type:e,depthBuffer:s,stencilBuffer:o}),m=new Te(t,n,{type:Ge,depthBuffer:!1,stencilBuffer:!1}),c=new ne;c.setAttribute("position",new I([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new I([0,2,0,0,2,0],2));const r=new H4({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),j=new K(c,r),b=new Pn(-1,1,1,-1,0,1);let d=null,u=null,l=!1,v,h=null,i=[],g=!1;this.setSize=function(e,t){a.setSize(e,t),m.setSize(e,t);for(let n=0;n<i.length;n++){const s=i[n];s.setSize&&s.setSize(e,t)}},this.setEffects=function(e){i=e,g=i.length>0&&i[0].isRenderPass===!0;const t=a.width,n=a.height;for(let e=0;e<i.length;e++){const s=i[e];s.setSize&&s.setSize(t,n)}},this.begin=function(e,t){if(l)return!1;if(e.toneMapping===De&&i.length===0)return!1;if(h=t,t!==null){const e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return g===!1&&e.setRenderTarget(a),v=e.toneMapping,e.toneMapping=De,!0},this.hasRenderPass=function(){return g},this.end=function(e,t){e.toneMapping=v,l=!0;let n=a,s=m;for(let o=0;o<i.length;o++){const a=i[o];if(a.enabled===!1)continue;if(a.render(e,s,n,t),a.needsSwap!==!1){const e=n;n=s,s=e}}if(d!==e.outputColorSpace||u!==e.toneMapping){d=e.outputColorSpace,u=e.toneMapping,r.defines={},f.getTransfer(d)===p&&(r.defines.SRGB_TRANSFER="");const t=Rm[u];t&&(r.defines[t]=""),r.needsUpdate=!0}r.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(j,b),h=null,l=!1},this.isCompositing=function(){return l},this.dispose=function(){a.dispose(),m.dispose(),c.dispose(),r.dispose()}}_c=new Z,Pi=new rs(1,1),kc=new ed,Ac=new Xd,Fc=new Dc,zc=[],Nc=[],Bc=new Float32Array(16),$c=new Float32Array(9),Wc=new Float32Array(4);function ms(e,t,n){const o=e[0];if(o<=0||o>0)return e;const i=t*n;let s=zc[i];if(s===0[0]&&(s=new Float32Array(i),zc[i]=s),t!==0){o.toArray(s,0);for(let o=1,i=0;o!==t;++o)i+=n,e[o].toArray(s,i)}return s}function z(e,t){if(e.length!==t.length)return!1;for(let n=0,s=e.length;n<s;n++)if(e[n]!==t[n])return!1;return!0}function D(e,t){for(let n=0,s=t.length;n<s;n++)e[n]=t[n]}function ki(e,t){let n=Nc[t];n===0[0]&&(n=new Int32Array(t),Nc[t]=n);for(let s=0;s!==t;++s)n[s]=e.allocateTextureUnit();return n}function Y8(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function q8(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(z(n,t))return;e.uniform2fv(this.addr,t),D(n,t)}}function h6(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==0[0])(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(z(n,t))return;e.uniform3fv(this.addr,t),D(n,t)}}function $8(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(z(n,t))return;e.uniform4fv(this.addr,t),D(n,t)}}function B8(e,t){const n=this.cache,s=t.elements;if(s===0[0]){if(z(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),D(n,t)}else{if(z(n,s))return;Wc.set(s),e.uniformMatrix2fv(this.addr,!1,Wc),D(n,s)}}function I8(e,t){const n=this.cache,s=t.elements;if(s===0[0]){if(z(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),D(n,t)}else{if(z(n,s))return;$c.set(s),e.uniformMatrix3fv(this.addr,!1,$c),D(n,s)}}function H8(e,t){const n=this.cache,s=t.elements;if(s===0[0]){if(z(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),D(n,t)}else{if(z(n,s))return;Bc.set(s),e.uniformMatrix4fv(this.addr,!1,Bc),D(n,s)}}function Xf(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function u6(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(z(n,t))return;e.uniform2iv(this.addr,t),D(n,t)}}function c8(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(z(n,t))return;e.uniform3iv(this.addr,t),D(n,t)}}function l8(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(z(n,t))return;e.uniform4iv(this.addr,t),D(n,t)}}function d8(e,t){const n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function u8(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(z(n,t))return;e.uniform2uiv(this.addr,t),D(n,t)}}function h8(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(z(n,t))return;e.uniform3uiv(this.addr,t),D(n,t)}}function m8(e,t){const n=this.cache;if(t.x!==0[0])(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(z(n,t))return;e.uniform4uiv(this.addr,t),D(n,t)}}function f8(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let o;this.type===e.SAMPLER_2D_SHADOW?(Pi.compareFunction=n.isReversedDepthBuffer()?Di:Ni,o=Pi):o=_c,n.setTexture2D(t||o,s)}function p8(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture3D(t||Ac,s)}function g8(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTextureCube(t||Fc,s)}function v8(e,t,n){const o=this.cache,s=n.allocateTextureUnit();o[0]!==s&&(e.uniform1i(this.addr,s),o[0]=s),n.setTexture2DArray(t||kc,s)}function b8(e){switch(e){case 5126:return Y8;case 35664:return q8;case 35665:return h6;case 35666:return $8;case 35674:return B8;case 35675:return I8;case 35676:return H8;case 5124:case 35670:return Xf;case 35667:case 35671:return u6;case 35668:case 35672:return c8;case 35669:case 35673:return l8;case 5125:return d8;case 36294:return u8;case 36295:return h8;case 36296:return m8;case 35678:case 36198:case 36298:case 36306:case 35682:return f8;case 35679:case 36299:case 36307:return p8;case 35680:case 36300:case 36308:case 36293:return g8;case 36289:case 36303:case 36311:case 36292:return v8}}function j8(e,t){e.uniform1fv(this.addr,t)}function y8(e,t){const n=ms(t,this.size,2);e.uniform2fv(this.addr,n)}function _8(e,t){const n=ms(t,this.size,3);e.uniform3fv(this.addr,n)}function w8(e,t){const n=ms(t,this.size,4);e.uniform4fv(this.addr,n)}function O8(e,t){const n=ms(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function x8(e,t){const n=ms(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function C8(e,t){const n=ms(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function E8(e,t){e.uniform1iv(this.addr,t)}function k8(e,t){e.uniform2iv(this.addr,t)}function A8(e,t){e.uniform3iv(this.addr,t)}function S8(e,t){e.uniform4iv(this.addr,t)}function M8(e,t){e.uniform1uiv(this.addr,t)}function F8(e,t){e.uniform2uiv(this.addr,t)}function T8(e,t){e.uniform3uiv(this.addr,t)}function z8(e,t){e.uniform4uiv(this.addr,t)}function D8(e,t,n){const i=this.cache,a=t.length,s=ki(n,a);z(i,s)||(e.uniform1iv(this.addr,s),D(i,s));let o;this.type===e.SAMPLER_2D_SHADOW?o=Pi:o=_c;for(let e=0;e!==a;++e)n.setTexture2D(t[e]||o,s[e])}function N8(e,t,n){const o=this.cache,i=t.length,s=ki(n,i);z(o,s)||(e.uniform1iv(this.addr,s),D(o,s));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ac,s[e])}function L8(e,t,n){const o=this.cache,i=t.length,s=ki(n,i);z(o,s)||(e.uniform1iv(this.addr,s),D(o,s));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Fc,s[e])}function R8(e,t,n){const o=this.cache,i=t.length,s=ki(n,i);z(o,s)||(e.uniform1iv(this.addr,s),D(o,s));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||kc,s[e])}function P8(e){switch(e){case 5126:return j8;case 35664:return y8;case 35665:return _8;case 35666:return w8;case 35674:return O8;case 35675:return x8;case 35676:return C8;case 5124:case 35670:return E8;case 35667:case 35671:return k8;case 35668:case 35672:return A8;case 35669:case 35673:return S8;case 5125:return M8;case 36294:return F8;case 36295:return T8;case 36296:return z8;case 35678:case 36198:case 36298:case 36306:case 35682:return D8;case 35679:case 36299:case 36307:return N8;case 35680:case 36300:case 36308:case 36293:return L8;case 36289:case 36303:case 36311:case 36292:return R8}}i8=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b8(t.type)}},o8=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P8(t.type)}},s8=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const i=s[o];i.setValue(e,t[i.id],n)}}},Ei=/(\w+)(\])?(\[|\.)?/g;function n8(e,t){e.seq.push(t),e.map[t.id]=t}function W8(e,t,n){const s=e.name,o=s.length;for(Ei.lastIndex=0;!0;){const r=Ei.exec(s),l=Ei.lastIndex;let i=r[1];const d=r[2]==="]",c=r[3];if(d&&(i=i|0),c===0[0]||c==="["&&l+2===o){n8(n,c===0[0]?new i8(i,e,t):new o8(i,e,t));break}const u=n.map;let a=u[i];a===0[0]&&(a=new s8(i),n8(n,a)),n=a}}Os=class{constructor(e,t){this.seq=[],this.map={};const o=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<o;++n){const s=e.getActiveUniform(t,n),i=e.getUniformLocation(t,s.name);W8(s,i,this)}const n=[],s=[];for(const t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(t):s.push(t);n.length>0&&(this.seq=n.concat(s))}setValue(e,t,n,s){const o=this.map[t];o!==0[0]&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==0[0]&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,r=t.length;o!==r;++o){const i=t[o],a=n[i.id];a.needsUpdate!==!1&&i.setValue(e,a.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,i=e.length;s!==i;++s){const o=e[s];o.id in t&&n.push(o)}return n}};function t8(e,t,n){const s=e.createShader(t);return e.shaderSource(s,n),e.compileShader(s),s}e8=37297,Jm=0;function G8(e,t){const n=e.split(`
`),s=[],o=Math.max(t-6,0),i=Math.min(t+6,n.length);for(let e=o;e<i;e++){const a=e+1;s.push(`${a===t?">":" "} ${a}: ${n[e]}`)}return s.join(`
`)}tl=new u;function Q8(e){f._getMatrix(tl,f.workingColorSpace,e);const t=`mat3( ${tl.elements.map(e=>e.toFixed(4))} )`;switch(f.getTransfer(e)){case ks:return[t,"LinearTransferOETF"];case p:return[t,"sRGBTransferOETF"];default:return o("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Km(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),a=e.getShaderInfoLog(t)||"",s=a.trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const i=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+G8(e.getShaderSource(t),i)}return s}function J8(e,t){const n=Q8(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}Um={[Vr]:"Linear",[Br]:"Reinhard",[Ir]:"Cineon",[Pa]:"ACESFilmic",[Pr]:"AgX",[Rr]:"Neutral",[Hr]:"Custom"};function tf(e,t){const n=Um[t];return n===0[0]?(o("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}ys=new e;function sf(){f.getLuminanceCoefficients(ys);const e=ys.x.toFixed(4),t=ys.y.toFixed(4),n=ys.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function af(e){const t=[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""];return t.filter(qs).join(`
`)}function rf(e){const t=[];for(const n in e){const s=e[n];if(s===!1)continue;t.push("#define "+n+" "+s)}return t.join(`
`)}function cf(e,t){const n={},s=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const o=e.getActiveAttrib(t,a),r=o.name;let i=1;o.type===e.FLOAT_MAT2&&(i=2),o.type===e.FLOAT_MAT3&&(i=3),o.type===e.FLOAT_MAT4&&(i=4),n[r]={type:o.type,location:e.getAttribLocation(t,r),locationSize:i}}return n}function qs(e){return e!==""}function Im(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}Pm=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(e){return e.replace(Pm,pf)}Nm=new Map;function pf(e,t){let n=c[t];if(n===0[0]){const e=Nm.get(t);if(e!==0[0])n=c[e],o('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,e);else throw new Error("Can not resolve #include <"+t+">")}return nl(n)}Dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(e){return e.replace(Dm,bf)}function bf(e,t,n,s){let o="";for(let e=parseInt(t);e<parseInt(n);e++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+e+" ]").replace(/UNROLLED_LOOP_INDEX/g,e);return o}function Tm(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}Fm={[Es]:"SHADOWMAP_TYPE_PCF",[nn]:"SHADOWMAP_TYPE_VSM"};function _f(e){return Fm[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}Mm={[wt]:"ENVMAP_TYPE_CUBE",[En]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE_UV"};function Of(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Mm[e.envMapMode]||"ENVMAP_TYPE_CUBE"}Cm={[En]:"ENVMAP_MODE_REFRACTION"};function Cf(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Cm[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}xm={[$r]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[Iu]:"ENVMAP_BLENDING_ADD"};function kf(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":xm[e.combine]||"ENVMAP_BLENDING_NONE"}function Af(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t,o=1/(3*Math.max(2**n,7*16));return{texelWidth:o,texelHeight:s,maxMip:n}}function Sf(e,t,n,s){const a=e.getContext(),S=n.defines;let l=n.vertexShader,d=n.fragmentShader;const w=_f(n),x=Of(n),_=Cf(n),A=kf(n),m=Af(n),k=af(n),g=rf(S),r=a.createProgram();let h,u,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(qs).join(`
`),h.length>0&&(h+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(qs).join(`
`),u.length>0&&(u+=`
`)):(h=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+w:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),u=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.envMap?"#define "+_:"",n.envMap?"#define "+A:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+w:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==De?"#define TONE_MAPPING":"",n.toneMapping!==De?c.tonemapping_pars_fragment:"",n.toneMapping!==De?tf("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",c.colorspace_pars_fragment,J8("linearToOutputTexel",n.outputColorSpace),sf(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(qs).join(`
`)),l=nl(l),l=Im(l,n),l=Hm(l,n),d=nl(d),d=Im(d,n),d=Hm(d,n),l=zm(l),d=zm(d),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[k,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,u=["#define varying in",n.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=y+h+l,C=y+u+d,f=t8(a,a.VERTEX_SHADER,E),p=t8(a,a.FRAGMENT_SHADER,C);a.attachShader(r,f),a.attachShader(r,p),n.index0AttributeName!==0[0]?a.bindAttribLocation(r,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(r,0,"position"),a.linkProgram(r);function O(t){if(e.debug.checkShaderErrors){const m=a.getProgramInfoLog(r)||"",g=a.getShaderInfoLog(f)||"",v=a.getShaderInfoLog(p)||"",n=m.trim(),s=g.trim(),c=v.trim();let l=!0,d=!0;if(a.getProgramParameter(r,a.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,r,f,p);else{const e=Km(a,f,"vertex"),s=Km(a,p,"fragment");i("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(r,a.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+s)}else n!==""?o("WebGLProgram: Program Info Log:",n):(s===""||c==="")&&(d=!1);d&&(t.diagnostics={runnable:l,programLog:n,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:u}})}a.deleteShader(f),a.deleteShader(p),b=new Os(a,r),v=cf(a,r)}let b;this.getUniforms=function(){return b===0[0]&&O(this),b};let v;this.getAttributes=function(){return v===0[0]&&O(this),v};let j=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=a.getProgramParameter(r,e8)),j},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(r),this.program=0[0]},this.type=n.shaderType,this.name=n.shaderName,this.id=Jm++,this.cacheKey=t,this.usedTimes=1,this.program=r,this.vertexShader=f,this.fragmentShader=p,this}_m=0,vm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const o=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(o),s=this._getShaderStage(i),t=this._getShaderCacheForMaterial(e);return t.has(n)===!1&&(t.add(n),n.usedTimes++),t.has(s)===!1&&(t.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let t=n.get(e);return t===0[0]&&(t=new Set,n.set(e,t)),t}_getShaderStage(e){const n=this.shaderCache;let t=n.get(e);return t===0[0]&&(t=new gm(e),n.set(e,t)),t}},gm=class{constructor(e){this.id=_m++,this.code=e,this.usedTimes=0}};function zf(e,t,n,s,i,a){const r=new Wo,d=new vm,u=new Set,l=[],m=new Map,v=s.logarithmicDepthBuffer;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function c(e){return u.add(e),e===0?"uv":`uv${e}`}function b(i,r,l,m,b){const P=m.fog,j=b.geometry,Oe=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?m.environment:null,ge=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,_=t.get(i.envMap||Oe,ge),he=!!_&&_.mapping===Ys?_.image.height:null,F=g[i.type];i.precision!==null&&(h=s.getMaxPrecision(i.precision),h!==i.precision&&o("WebGLProgram.getParameters:",i.precision,"not supported, using",h,"instead."));const ee=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,me=ee!==0[0]?ee.length:0;let O=0;j.morphAttributes.position!==0[0]&&(O=1),j.morphAttributes.normal!==0[0]&&(O=2),j.morphAttributes.color!==0[0]&&(O=3);let k,M,Q,G;if(F){const e=we[F];k=e.vertexShader,M=e.fragmentShader}else k=i.vertexShader,M=i.fragmentShader,d.update(i),Q=d.getVertexShaderID(i),G=d.getFragmentShaderID(i);const w=e.getRenderTarget(),ye=e.state.buffers.depth.getReversed(),N=b.isInstancedMesh===!0,L=b.isBatchedMesh===!0,C=!!i.map,_e=!!i.matcap,W=!!_,oe=!!i.aoMap,V=!!i.lightMap,$=!!i.bumpMap,y=!!i.normalMap,I=!!i.displacementMap,D=!!i.emissiveMap,q=!!i.metalnessMap,Y=!!i.roughnessMap,T=i.anisotropy>0,E=i.clearcoat>0,fe=i.dispersion>0,A=i.iridescence>0,S=i.sheen>0,z=i.transmission>0,ne=T&&!!i.anisotropyMap,se=E&&!!i.clearcoatMap,B=E&&!!i.clearcoatNormalMap,ie=E&&!!i.clearcoatRoughnessMap,ae=A&&!!i.iridescenceMap,re=A&&!!i.iridescenceThicknessMap,ce=S&&!!i.sheenColorMap,le=S&&!!i.sheenRoughnessMap,de=!!i.specularMap,ue=!!i.specularColorMap,te=!!i.specularIntensityMap,J=z&&!!i.transmissionMap,Z=z&&!!i.thicknessMap,pe=!!i.gradientMap,R=!!i.alphaMap,ve=i.alphaTest>0,je=!!i.alphaHash,K=!!i.extensions;let U=De;i.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(U=e.toneMapping);const x={shaderID:F,shaderType:i.type,shaderName:i.name,vertexShader:k,fragmentShader:M,defines:i.defines,customVertexShaderID:Q,customFragmentShaderID:G,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:h,batching:L,batchingColor:L&&b._colorsTexture!==null,instancing:N,instancingColor:N&&b.instanceColor!==null,instancingMorph:N&&b.morphTexture!==null,outputColorSpace:w===null?e.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:H,alphaToCoverage:!!i.alphaToCoverage,map:C,matcap:_e,envMap:W,envMapMode:W&&_.mapping,envMapCubeUVHeight:he,aoMap:oe,lightMap:V,bumpMap:$,normalMap:y,displacementMap:I,emissiveMap:D,normalMapObjectSpace:y&&i.normalMapType===Du,normalMapTangentSpace:y&&i.normalMapType===wc,metalnessMap:q,roughnessMap:Y,anisotropy:T,anisotropyMap:ne,clearcoat:E,clearcoatMap:se,clearcoatNormalMap:B,clearcoatRoughnessMap:ie,dispersion:fe,iridescence:A,iridescenceMap:ae,iridescenceThicknessMap:re,sheen:S,sheenColorMap:ce,sheenRoughnessMap:le,specularMap:de,specularColorMap:ue,specularIntensityMap:te,transmission:z,transmissionMap:J,thicknessMap:Z,gradientMap:pe,opaque:i.transparent===!1&&i.blending===Vt&&i.alphaToCoverage===!1,alphaMap:R,alphaTest:ve,alphaHash:je,combine:i.combine,mapUv:C&&c(i.map.channel),aoMapUv:oe&&c(i.aoMap.channel),lightMapUv:V&&c(i.lightMap.channel),bumpMapUv:$&&c(i.bumpMap.channel),normalMapUv:y&&c(i.normalMap.channel),displacementMapUv:I&&c(i.displacementMap.channel),emissiveMapUv:D&&c(i.emissiveMap.channel),metalnessMapUv:q&&c(i.metalnessMap.channel),roughnessMapUv:Y&&c(i.roughnessMap.channel),anisotropyMapUv:ne&&c(i.anisotropyMap.channel),clearcoatMapUv:se&&c(i.clearcoatMap.channel),clearcoatNormalMapUv:B&&c(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&c(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&c(i.iridescenceMap.channel),iridescenceThicknessMapUv:re&&c(i.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&c(i.sheenColorMap.channel),sheenRoughnessMapUv:le&&c(i.sheenRoughnessMap.channel),specularMapUv:de&&c(i.specularMap.channel),specularColorMapUv:ue&&c(i.specularColorMap.channel),specularIntensityMapUv:te&&c(i.specularIntensityMap.channel),transmissionMapUv:J&&c(i.transmissionMap.channel),thicknessMapUv:Z&&c(i.thicknessMap.channel),alphaMapUv:R&&c(i.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(y||T),vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!j.attributes.uv&&(C||R),fog:!!P,useFog:i.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||j.attributes.normal===0[0]&&y===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ye,skinning:b.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==0[0],morphNormals:j.morphAttributes.normal!==0[0],morphColors:j.morphAttributes.color!==0[0],morphTargetsCount:me,morphTextureStride:O,numDirLights:r.directional.length,numPointLights:r.point.length,numSpotLights:r.spot.length,numSpotLightMaps:r.spotLightMap.length,numRectAreaLights:r.rectArea.length,numHemiLights:r.hemi.length,numDirLightShadows:r.directionalShadowMap.length,numPointLightShadows:r.pointShadowMap.length,numSpotLightShadows:r.spotShadowMap.length,numSpotLightShadowsWithMaps:r.numSpotLightShadowsWithMaps,numLightProbes:r.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:U,decodeVideoTexture:C&&i.map.isVideoTexture===!0&&f.getTransfer(i.map.colorSpace)===p,decodeVideoTextureEmissive:D&&i.emissiveMap.isVideoTexture===!0&&f.getTransfer(i.emissiveMap.colorSpace)===p,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===be,flipSided:i.side===X,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:K&&i.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(K&&i.extensions.multiDraw===!0||L)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:i.customProgramCacheKey()};return x.vertexUv1s=u.has(1),x.vertexUv2s=u.has(2),x.vertexUv3s=u.has(3),u.clear(),x}function j(t){const n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==0[0])for(const e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(y(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function y(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){r.disableAll(),t.instancing&&r.enable(0),t.instancingColor&&r.enable(1),t.instancingMorph&&r.enable(2),t.matcap&&r.enable(3),t.envMap&&r.enable(4),t.normalMapObjectSpace&&r.enable(5),t.normalMapTangentSpace&&r.enable(6),t.clearcoat&&r.enable(7),t.iridescence&&r.enable(8),t.alphaTest&&r.enable(9),t.vertexColors&&r.enable(10),t.vertexAlphas&&r.enable(11),t.vertexUv1s&&r.enable(12),t.vertexUv2s&&r.enable(13),t.vertexUv3s&&r.enable(14),t.vertexTangents&&r.enable(15),t.anisotropy&&r.enable(16),t.alphaHash&&r.enable(17),t.batching&&r.enable(18),t.dispersion&&r.enable(19),t.batchingColor&&r.enable(20),t.gradientMap&&r.enable(21),e.push(r.mask),r.disableAll(),t.fog&&r.enable(0),t.useFog&&r.enable(1),t.flatShading&&r.enable(2),t.logarithmicDepthBuffer&&r.enable(3),t.reversedDepthBuffer&&r.enable(4),t.skinning&&r.enable(5),t.morphTargets&&r.enable(6),t.morphNormals&&r.enable(7),t.morphColors&&r.enable(8),t.premultipliedAlpha&&r.enable(9),t.shadowMapEnabled&&r.enable(10),t.doubleSided&&r.enable(11),t.flipSided&&r.enable(12),t.useDepthPacking&&r.enable(13),t.dithering&&r.enable(14),t.transmission&&r.enable(15),t.sheen&&r.enable(16),t.opaque&&r.enable(17),t.pointsUvs&&r.enable(18),t.decodeVideoTexture&&r.enable(19),t.decodeVideoTextureEmissive&&r.enable(20),t.alphaToCoverage&&r.enable(21),e.push(r.mask)}function w(e){const n=g[e.type];let t;if(n){const e=we[n];t=N4.clone(e.uniforms)}else t=e.uniforms;return t}function O(t,n){let s=m.get(n);return s!==0[0]?++s.usedTimes:(s=new Sf(e,n,t,i),l.push(s),m.set(n,s)),s}function x(e){if(--e.usedTimes===0){const t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),m.delete(e.cacheKey),e.destroy()}}function C(e){d.remove(e)}function E(){d.dispose()}return{getParameters:b,getProgramCacheKey:j,getUniforms:w,acquireProgram:O,releaseProgram:x,releaseShaderCache:C,programs:l,dispose:E}}function Df(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===0[0]&&(n={},e.set(t,n)),n}function s(t){e.delete(t)}function o(t,n,s){e.get(t)[n]=s}function i(){e=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:i}}function Nf(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function pm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function mm(){const o=[];let s=0;const e=[],t=[],n=[];function r(){s=0,e.length=0,t.length=0,n.length=0}function i(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function a(e,t,n,a,r,c){let l=o[s];return l===0[0]?(l={id:e.id,object:e,geometry:t,material:n,materialVariant:i(e),groupOrder:a,renderOrder:e.renderOrder,z:r,group:c},o[s]=l):(l.id=e.id,l.object=e,l.geometry=t,l.material=n,l.materialVariant=i(e),l.groupOrder=a,l.renderOrder=e.renderOrder,l.z=r,l.group=c),s++,l}function c(s,o,i,r,c,l){const d=a(s,o,i,r,c,l);i.transmission>0?t.push(d):i.transparent===!0?n.push(d):e.push(d)}function l(s,o,i,r,c,l){const d=a(s,o,i,r,c,l);i.transmission>0?t.unshift(d):i.transparent===!0?n.unshift(d):e.unshift(d)}function d(s,o){e.length>1&&e.sort(s||Nf),t.length>1&&t.sort(o||pm),n.length>1&&n.sort(o||pm)}function u(){for(let t=s,n=o.length;t<n;t++){const e=o[t];if(e.id===null)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null}}return{opaque:e,transmissive:t,transparent:n,init:r,push:c,unshift:l,finish:u,sort:d}}function Pf(){let e=new WeakMap;function t(t,n){const o=e.get(t);let s;return o===0[0]?(s=new mm,e.set(t,[s])):n>=o.length?(s=new mm,o.push(s)):s=o[n],s}function n(){e=new WeakMap}return{get:t,dispose:n}}function Hf(){const t={};return{get:function(n){if(t[n.id]!==0[0])return t[n.id];let s;switch(n.type){case"DirectionalLight":s={direction:new e,color:new a};break;case"SpotLight":s={position:new e,direction:new e,color:new a,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":s={position:new e,color:new a,distance:0,decay:0};break;case"HemisphereLight":s={direction:new e,skyColor:new a,groundColor:new a};break;case"RectAreaLight":s={color:new a,position:new e,halfWidth:new e,halfHeight:new e};break}return t[n.id]=s,s}}}function If(){const e={};return{get:function(t){if(e[t.id]!==0[0])return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new r,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}dm=0;function Vf(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function $f(n){const o=new Hf,r=If(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let t=0;t<9;t++)s.probe.push(new e);const i=new e,c=new d,a=new d;function l(e){let j=0,y=0,b=0;for(let e=0;e<9;e++)s.probe[e].set(0,0,0);let l=0,a=0,c=0,d=0,p=0,u=0,h=0,m=0,f=0,v=0,g=0;e.sort(Vf);for(let w=0,O=e.length;w<O;w++){const t=e[w],i=t.color,n=t.intensity,x=t.distance;let _=null;if(t.shadow&&t.shadow.map&&(t.shadow.map.texture.format===Gt?_=t.shadow.map.texture:_=t.shadow.map.depthTexture||t.shadow.map.texture),t.isAmbientLight)j+=i.r*n,y+=i.g*n,b+=i.b*n;else if(t.isLightProbe){for(let e=0;e<9;e++)s.probe[e].addScaledVector(t.sh.coefficients[e],n);g++}else if(t.isDirectionalLight){const e=o.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity),t.castShadow){const n=t.shadow,e=r.get(t);e.shadowIntensity=n.intensity,e.shadowBias=n.bias,e.shadowNormalBias=n.normalBias,e.shadowRadius=n.radius,e.shadowMapSize=n.mapSize,s.directionalShadow[l]=e,s.directionalShadowMap[l]=_,s.directionalShadowMatrix[l]=t.shadow.matrix,u++}s.directional[l]=e,l++}else if(t.isSpotLight){const e=o.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(i).multiplyScalar(n),e.distance=x,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,s.spot[c]=e;const a=t.shadow;if(t.map&&(s.spotLightMap[f]=t.map,f++,a.updateMatrices(t),t.castShadow&&v++),s.spotLightMatrix[c]=a.matrix,t.castShadow){const e=r.get(t);e.shadowIntensity=a.intensity,e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,s.spotShadow[c]=e,s.spotShadowMap[c]=_,m++}c++}else if(t.isRectAreaLight){const e=o.get(t);e.color.copy(i).multiplyScalar(n),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),s.rectArea[d]=e,d++}else if(t.isPointLight){const e=o.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity),e.distance=t.distance,e.decay=t.decay,t.castShadow){const n=t.shadow,e=r.get(t);e.shadowIntensity=n.intensity,e.shadowBias=n.bias,e.shadowNormalBias=n.normalBias,e.shadowRadius=n.radius,e.shadowMapSize=n.mapSize,e.shadowCameraNear=n.camera.near,e.shadowCameraFar=n.camera.far,s.pointShadow[a]=e,s.pointShadowMap[a]=_,s.pointShadowMatrix[a]=t.shadow.matrix,h++}s.point[a]=e,a++}else if(t.isHemisphereLight){const e=o.get(t);e.skyColor.copy(t.color).multiplyScalar(n),e.groundColor.copy(t.groundColor).multiplyScalar(n),s.hemi[p]=e,p++}}d>0&&(n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=t.LTC_FLOAT_1,s.rectAreaLTC2=t.LTC_FLOAT_2):(s.rectAreaLTC1=t.LTC_HALF_1,s.rectAreaLTC2=t.LTC_HALF_2)),s.ambient[0]=j,s.ambient[1]=y,s.ambient[2]=b;const i=s.hash;(i.directionalLength!==l||i.pointLength!==a||i.spotLength!==c||i.rectAreaLength!==d||i.hemiLength!==p||i.numDirectionalShadows!==u||i.numPointShadows!==h||i.numSpotShadows!==m||i.numSpotMaps!==f||i.numLightProbes!==g)&&(s.directional.length=l,s.spot.length=c,s.rectArea.length=d,s.point.length=a,s.hemi.length=p,s.directionalShadow.length=u,s.directionalShadowMap.length=u,s.pointShadow.length=h,s.pointShadowMap.length=h,s.spotShadow.length=m,s.spotShadowMap.length=m,s.directionalShadowMatrix.length=u,s.pointShadowMatrix.length=h,s.spotLightMatrix.length=m+f-v,s.spotLightMap.length=f,s.numSpotLightShadowsWithMaps=v,s.numLightProbes=g,i.directionalLength=l,i.pointLength=a,i.spotLength=c,i.rectAreaLength=d,i.hemiLength=p,i.numDirectionalShadows=u,i.numPointShadows=h,i.numSpotShadows=m,i.numSpotMaps=f,i.numLightProbes=g,s.version=dm++)}function u(e,t){let o=0,r=0,l=0,d=0,u=0;const n=t.matrixWorldInverse;for(let h=0,m=e.length;h<m;h++){const t=e[h];if(t.isDirectionalLight){const e=s.directional[o];e.direction.setFromMatrixPosition(t.matrixWorld),i.setFromMatrixPosition(t.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(n),o++}else if(t.isSpotLight){const e=s.spot[l];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),e.direction.setFromMatrixPosition(t.matrixWorld),i.setFromMatrixPosition(t.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(n),l++}else if(t.isRectAreaLight){const e=s.rectArea[d];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),a.identity(),c.copy(t.matrixWorld),c.premultiply(n),a.extractRotation(c),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),e.halfWidth.applyMatrix4(a),e.halfHeight.applyMatrix4(a),d++}else if(t.isPointLight){const e=s.point[r];e.position.setFromMatrixPosition(t.matrixWorld),e.position.applyMatrix4(n),r++}else if(t.isHemisphereLight){const e=s.hemi[u];e.direction.setFromMatrixPosition(t.matrixWorld),e.direction.transformDirection(n),u++}}}return{setup:l,setupView:u,state:s}}function cm(e){const n=new $f(e),t=[],s=[];function i(e){o.camera=e,t.length=0,s.length=0}function a(e){t.push(e)}function r(e){s.push(e)}function c(){n.setup(t)}function l(e){n.setupView(t,e)}const o={lightsArray:t,shadowsArray:s,camera:null,lights:n,transmissionRenderTarget:{}};return{init:i,state:o,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:r}}function Uf(e){let t=new WeakMap;function n(n,s=0){const i=t.get(n);let o;return i===0[0]?(o=new cm(e),t.set(n,[o])):s>=i.length?(o=new cm(e),i.push(o)):o=i[s],o}function s(){t=new WeakMap}return{get:n,dispose:s}}rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,im=[new e(1,0,0),new e(-1,0,0),new e(0,1,0),new e(0,-1,0),new e(0,0,1),new e(0,0,-1)],om=[new e(0,-1,0),new e(0,-1,0),new e(0,0,1),new e(0,0,-1),new e(0,-1,0),new e(0,-1,0)],sl=new d,vs=new e,wi=new e;function Jf(e,t,n){let g=new To;const s=new r,i=new r,v=new b,_=new V4,x=new $4,d={},l=n.maxTextureSize,O={[Qe]:X,[X]:Qe,[be]:be},a=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new r},radius:{value:4}},vertexShader:rm,fragmentShader:am}),c=a.clone();c.defines.HORIZONTAL_PASS=1;const j=new ne;j.setAttribute("position",new V(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new K(j,a),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let y=this.type;this.render=function(t,n,a){if(u.enabled===!1)return;if(u.autoUpdate===!1&&u.needsUpdate===!1)return;if(t.length===0)return;this.type===a1&&(o("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Es);const d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),r=e.state;r.setBlending(Ve),r.buffers.depth.getReversed()===!0?r.buffers.color.setClear(0,0,0,0):r.buffers.color.setClear(1,1,1,1),r.buffers.depth.setTest(!0),r.setScissorTest(!1);const c=y!==this.type;c&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let m=0,b=t.length;m<b;m++){const u=t[m],d=u.shadow;if(d===0[0]){o("WebGLShadowMap:",u,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;s.copy(d.mapSize);const h=d.getFrameExtents();s.multiply(h),i.copy(d.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(i.x=Math.floor(l/h.x),s.x=i.x*h.x,d.mapSize.x=i.x),s.y>l&&(i.y=Math.floor(l/h.y),s.y=i.y*h.y,d.mapSize.y=i.y));const f=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=f,d.map===null||c===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===nn){if(u.isPointLight){o("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}d.map=new Te(s.x,s.y,{format:Gt,type:Ge,minFilter:A,magFilter:A,generateMipmaps:!1}),d.map.texture.name=u.name+".shadowMap",d.map.depthTexture=new rs(s.x,s.y,ue),d.map.depthTexture.name=u.name+".shadowMapDepth",d.map.depthTexture.format=We,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=E,d.map.depthTexture.magFilter=E}else u.isPointLight?(d.map=new vc(s.x),d.map.depthTexture=new C4(s.x,Ee)):(d.map=new Te(s.x,s.y),d.map.depthTexture=new rs(s.x,s.y,Ee)),d.map.depthTexture.name=u.name+".shadowMap",d.map.depthTexture.format=We,this.type===Es?(d.map.depthTexture.compareFunction=f?Di:Ni,d.map.depthTexture.minFilter=A,d.map.depthTexture.magFilter=A):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=E,d.map.depthTexture.magFilter=E);d.camera.updateProjectionMatrix()}const j=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<j;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());const n=d.getViewport(t);v.set(i.x*n.x,i.y*n.y,i.x*n.z,i.y*n.w),r.viewport(v)}if(u.isPointLight){const e=d.camera,s=d.matrix,n=u.distance||e.far;n!==e.far&&(e.far=n,e.updateProjectionMatrix()),vs.setFromMatrixPosition(u.matrixWorld),e.position.copy(vs),wi.copy(e.position),wi.add(im[t]),e.up.copy(om[t]),e.lookAt(wi),e.updateMatrixWorld(),s.makeTranslation(-vs.x,-vs.y,-vs.z),sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(sl,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(u);g=d.getFrustum(),p(n,a,d.camera,u,this.type)}d.isPointLightShadow!==!0&&this.type===nn&&w(d,a),d.needsUpdate=!1}y=this.type,u.needsUpdate=!1,e.setRenderTarget(d,h,m)};function w(n,o){const i=t.update(h);a.defines.VSM_SAMPLES!==n.blurSamples&&(a.defines.VSM_SAMPLES=n.blurSamples,c.defines.VSM_SAMPLES=n.blurSamples,a.needsUpdate=!0,c.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Te(s.x,s.y,{format:Gt,type:Ge})),a.uniforms.shadow_pass.value=n.map.depthTexture,a.uniforms.resolution.value=n.mapSize,a.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(o,null,i,a,h,null),c.uniforms.shadow_pass.value=n.mapPass.texture,c.uniforms.resolution.value=n.mapSize,c.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(o,null,i,c,h,null)}function m(t,n,s,o){let i=null;const a=s.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(a!==0[0])i=a;else if(i=s.isPointLight===!0?x:_,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){const s=i.uuid,o=n.uuid;let e=d[s];e===0[0]&&(e={},d[s]=e);let t=e[o];t===0[0]&&(t=i.clone(),e[o]=t,n.addEventListener("dispose",f)),i=t}if(i.visible=n.visible,i.wireframe=n.wireframe,o===nn?i.side=n.shadowSide!==null?n.shadowSide:n.side:i.side=n.shadowSide!==null?n.shadowSide:O[n.side],i.alphaMap=n.alphaMap,i.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,i.map=n.map,i.clipShadows=n.clipShadows,i.clippingPlanes=n.clippingPlanes,i.clipIntersection=n.clipIntersection,i.displacementMap=n.displacementMap,i.displacementScale=n.displacementScale,i.displacementBias=n.displacementBias,i.wireframeLinewidth=n.wireframeLinewidth,i.linewidth=n.linewidth,s.isPointLight===!0&&i.isMeshDistanceMaterial===!0){const t=e.properties.get(i);t.light=s}return i}function p(n,s,o,i,a){if(n.visible===!1)return;const c=n.layers.test(s.layers);if(c&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&a===nn)&&(!n.frustumCulled||g.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(o.matrixWorldInverse,n.matrixWorld);const r=t.update(n),c=n.material;if(Array.isArray(c)){{const t=r.groups;for(let d=0,h=t.length;d<h;d++){const l=t[d],u=c[l.materialIndex];if(u&&u.visible){const t=m(n,u,i,a);n.onBeforeShadow(e,n,s,o,r,t,l),e.renderBufferDirect(o,null,r,t,n,l),n.onAfterShadow(e,n,s,o,r,t,l)}}}}else if(c.visible){const t=m(n,c,i,a);n.onBeforeShadow(e,n,s,o,r,t,null),e.renderBufferDirect(o,null,r,t,n,null),n.onAfterShadow(e,n,s,o,r,t,null)}}const r=n.children;for(let e=0,t=r.length;e<t;e++)p(r[e],s,o,i,a)}function f(e){const t=e.target;t.removeEventListener("dispose",f);for(const s in d){const t=d[s],n=e.target.uuid;if(n in t){const e=t[n];e.dispose(),delete t[n]}}}}function e6(e,t){function ne(){let t=!1;const n=new b;let s=null;const o=new b(0,0,0,0);return{setMask:function(n){s!==n&&!t&&(e.colorMask(n,n,n,n),s=n)},setLocked:function(e){t=e},setClear:function(t,s,i,a,r){r===!0&&(t*=a,s*=a,i*=a),n.set(t,s,i,a),o.equals(n)===!1&&(e.clearColor(t,s,i,a),o.copy(n))},reset:function(){t=!1,s=null,o.set(-1,0,0,0)}}}function ie(){let a=!1,o=!1,r=null,c=null,i=null;return{setReversed:function(e){if(o!==e){const n=t.get("EXT_clip_control");e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),o=e;const s=i;i=null,this.setClear(s)}},getReversed:function(){return o},setTest:function(t){t?n(e.DEPTH_TEST):s(e.DEPTH_TEST)},setMask:function(t){r!==t&&!a&&(e.depthMask(t),r=t)},setFunc:function(t){if(o&&(t=yu[t]),c!==t){switch(t){case Oa:e.depthFunc(e.NEVER);break;case xa:e.depthFunc(e.ALWAYS);break;case Ca:e.depthFunc(e.LESS);break;case jn:e.depthFunc(e.LEQUAL);break;case ka:e.depthFunc(e.EQUAL);break;case Aa:e.depthFunc(e.GEQUAL);break;case Sa:e.depthFunc(e.GREATER);break;case Ma:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}c=t}},setLocked:function(e){a=e},setClear:function(t){i!==t&&(i=t,o&&(t=1-t),e.clearDepth(t))},reset:function(){a=!1,r=null,c=null,i=null,o=!1}}}function se(){let t=!1,o=null,i=null,a=null,r=null,c=null,l=null,d=null,u=null;return{setTest:function(o){t||(o?n(e.STENCIL_TEST):s(e.STENCIL_TEST))},setMask:function(n){o!==n&&!t&&(e.stencilMask(n),o=n)},setFunc:function(t,n,s){(i!==t||a!==n||r!==s)&&(e.stencilFunc(t,n,s),i=t,a=n,r=s)},setOp:function(t,n,s){(c!==t||l!==n||d!==s)&&(e.stencilOp(t,n,s),c=t,l=n,d=s)},setLocked:function(e){t=e},setClear:function(t){u!==t&&(e.clearStencil(t),u=t)},reset:function(){t=!1,o=null,i=null,a=null,r=null,c=null,l=null,d=null,u=null}}}const y=new ne,o=new ie,c=new se,W=new WeakMap,P=new WeakMap;let h={},m={},D=new WeakMap,Y=[],z=null,l=!1,j=null,f=null,_=null,w=null,u=null,x=null,C=null,E=new a(0,0,0),p=0,A=!1,H=null,R=null,L=null,V=null,I=null;const U=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,F=0;const M=e.getParameter(e.VERSION);M.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(M)[1]),N=F>=1):M.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),N=F>=2);let r=null,S={};const G=e.getParameter(e.SCISSOR_BOX),ee=e.getParameter(e.VIEWPORT),B=(new b).fromArray(G),$=(new b).fromArray(ee);function O(t,n,s,o){const i=new Uint8Array(4),a=e.createTexture();e.bindTexture(t,a),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let a=0;a<s;a++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,o,0,e.RGBA,e.UNSIGNED_BYTE,i):e.texImage2D(n+a,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,i);return a}const d={};d[e.TEXTURE_2D]=O(e.TEXTURE_2D,e.TEXTURE_2D,1),d[e.TEXTURE_CUBE_MAP]=O(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),d[e.TEXTURE_2D_ARRAY]=O(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),d[e.TEXTURE_3D]=O(e.TEXTURE_3D,e.TEXTURE_3D,1,1),y.setClear(0,0,0,1),o.setClear(1),c.setClear(0),n(e.DEPTH_TEST),o.setFunc(jn),T(!1),K(hc),n(e.CULL_FACE),g(Ve);function n(t){h[t]!==!0&&(e.enable(t),h[t]=!0)}function s(t){h[t]!==!1&&(e.disable(t),h[t]=!1)}function J(t,n){return m[t]!==n&&(e.bindFramebuffer(t,n),m[t]=n,t===e.DRAW_FRAMEBUFFER&&(m[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(m[e.DRAW_FRAMEBUFFER]=n),!0)}function Z(t,n){let s=Y,o=!1;if(t){{s=D.get(n),s===0[0]&&(s=[],D.set(n,s));const i=t.textures;if(s.length!==i.length||s[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=i.length;t<n;t++)s[t]=e.COLOR_ATTACHMENT0+t;s.length=i.length,o=!0}}}else s[0]!==e.BACK&&(s[0]=e.BACK,o=!0);o&&e.drawBuffers(s)}function Q(t){return z!==t&&(e.useProgram(t),z=t,!0)}const k={[Lt]:e.FUNC_ADD,[o1]:e.FUNC_SUBTRACT,[s1]:e.FUNC_REVERSE_SUBTRACT};k[n1]=e.MIN,k[t1]=e.MAX;const v={[e1]:e.ZERO,[Ju]:e.ONE,[Zu]:e.SRC_COLOR,[ha]:e.SRC_ALPHA,[Ku]:e.SRC_ALPHA_SATURATE,[Yu]:e.DST_COLOR,[Xu]:e.DST_ALPHA,[Qu]:e.ONE_MINUS_SRC_COLOR,[ma]:e.ONE_MINUS_SRC_ALPHA,[qu]:e.ONE_MINUS_DST_COLOR,[Gu]:e.ONE_MINUS_DST_ALPHA,[Uu]:e.CONSTANT_COLOR,[Wu]:e.ONE_MINUS_CONSTANT_COLOR,[$u]:e.CONSTANT_ALPHA,[Vu]:e.ONE_MINUS_CONSTANT_ALPHA};function g(t,o,a,r,c,d,h,m,g,b){if(t===Ve){l===!0&&(s(e.BLEND),l=!1);return}if(l===!1&&(n(e.BLEND),l=!0),t!==i1){if(t!==j||b!==A){if((f!==Lt||u!==Lt)&&(e.blendEquation(e.FUNC_ADD),f=Lt,u=Lt),b)switch(t){case Vt:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case oc:e.blendFunc(e.ONE,e.ONE);break;case sc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case nc:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:i("WebGLState: Invalid blending: ",t);break}else switch(t){case Vt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case oc:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case sc:i("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nc:i("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:i("WebGLState: Invalid blending: ",t);break}_=null,w=null,x=null,C=null,E.set(0,0,0),p=0,j=t,A=b}return}c=c||o,d=d||a,h=h||r,(o!==f||c!==u)&&(e.blendEquationSeparate(k[o],k[c]),f=o,u=c),(a!==_||r!==w||d!==x||h!==C)&&(e.blendFuncSeparate(v[a],v[r],v[d],v[h]),_=a,w=r,x=d,C=h),(m.equals(E)===!1||g!==p)&&(e.blendColor(m.r,m.g,m.b,g),E.copy(m),p=g),j=t,A=!1}function te(t,i){t.side===be?s(e.CULL_FACE):n(e.CULL_FACE);let a=t.side===X;i&&(a=!a),T(a),t.blending===Vt&&t.transparent===!1?g(Ve):g(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),y.setMask(t.colorWrite);const r=t.stencilWrite;c.setTest(r),r&&(c.setMask(t.stencilWriteMask),c.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),c.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),q(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?n(e.SAMPLE_ALPHA_TO_COVERAGE):s(e.SAMPLE_ALPHA_TO_COVERAGE)}function T(t){H!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),H=t)}function K(t){t!==c1?(n(e.CULL_FACE),t!==R&&(t===hc?e.cullFace(e.BACK):t===r1?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):s(e.CULL_FACE),R=t}function oe(t){t!==L&&(N&&e.lineWidth(t),L=t)}function q(t,i,a){t?(n(e.POLYGON_OFFSET_FILL),(V!==i||I!==a)&&(V=i,I=a,o.getReversed()&&(i=-i),e.polygonOffset(i,a))):s(e.POLYGON_OFFSET_FILL)}function ae(t){t?n(e.SCISSOR_TEST):s(e.SCISSOR_TEST)}function re(t){t===0[0]&&(t=e.TEXTURE0+U-1),r!==t&&(e.activeTexture(t),r=t)}function ce(t,n,s){s===0[0]&&(r===null?s=e.TEXTURE0+U-1:s=r);let o=S[s];o===0[0]&&(o={type:0[0],texture:0[0]},S[s]=o),(o.type!==t||o.texture!==n)&&(r!==s&&(e.activeTexture(s),r=s),e.bindTexture(t,n||d[t]),o.type=t,o.texture=n)}function le(){const t=S[r];t!==0[0]&&t.type!==0[0]&&(e.bindTexture(t.type,null),t.type=0[0],t.texture=0[0])}function de(){try{e.compressedTexImage2D(...arguments)}catch(e){i("WebGLState:",e)}}function ue(){try{e.compressedTexImage3D(...arguments)}catch(e){i("WebGLState:",e)}}function he(){try{e.texSubImage2D(...arguments)}catch(e){i("WebGLState:",e)}}function me(){try{e.texSubImage3D(...arguments)}catch(e){i("WebGLState:",e)}}function fe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){i("WebGLState:",e)}}function pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){i("WebGLState:",e)}}function ge(){try{e.texStorage2D(...arguments)}catch(e){i("WebGLState:",e)}}function ve(){try{e.texStorage3D(...arguments)}catch(e){i("WebGLState:",e)}}function je(){try{e.texImage2D(...arguments)}catch(e){i("WebGLState:",e)}}function ye(){try{e.texImage3D(...arguments)}catch(e){i("WebGLState:",e)}}function _e(t){B.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),B.copy(t))}function we(t){$.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),$.copy(t))}function Oe(t,n){let s=P.get(n);s===0[0]&&(s=new WeakMap,P.set(n,s));let o=s.get(t);o===0[0]&&(o=e.getUniformBlockIndex(n,t.name),s.set(t,o))}function xe(t,n){const o=P.get(n),s=o.get(t);W.get(n)!==s&&(e.uniformBlockBinding(n,s,t.__bindingPointIndex),W.set(n,s))}function Ce(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},r=null,S={},m={},D=new WeakMap,Y=[],z=null,l=!1,j=null,f=null,_=null,w=null,u=null,x=null,C=null,E=new a(0,0,0),p=0,A=!1,H=null,R=null,L=null,V=null,I=null,B.set(0,0,e.canvas.width,e.canvas.height),$.set(0,0,e.canvas.width,e.canvas.height),y.reset(),o.reset(),c.reset()}return{buffers:{color:y,depth:o,stencil:c},enable:n,disable:s,bindFramebuffer:J,drawBuffers:Z,useProgram:Q,setBlending:g,setMaterial:te,setFlipSided:T,setCullFace:K,setLineWidth:oe,setPolygonOffset:q,setScissorTest:ae,activeTexture:re,bindTexture:ce,unbindTexture:le,compressedTexImage2D:de,compressedTexImage3D:ue,texImage2D:je,texImage3D:ye,updateUBOMapping:Oe,uniformBlockBinding:xe,texStorage2D:ge,texStorage3D:ve,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:fe,compressedTexSubImage3D:pe,scissor:_e,viewport:we,reset:Ce}}function t6(e,t,n,s,a,c,l){const _=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,I=typeof navigator!="undefined"&&/OculusBrowser/g.test(navigator.userAgent),h=new r,T=new WeakMap;let C;const j=new WeakMap;let V=!1;try{V=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function $(e,t){return V?new OffscreenCanvas(e,t):xs("canvas")}function U(e,t,n){let i=1;const s=w(e);if((s.width>n||s.height>n)&&(i=n/Math.max(s.width,s.height)),i<1){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap||typeof VideoFrame!="undefined"&&e instanceof VideoFrame){const n=Math.floor(i*s.width),a=Math.floor(i*s.height);C===0[0]&&(C=$(n,a));const r=t?$(n,a):C;r.width=n,r.height=a;const c=r.getContext("2d");return c.drawImage(e,0,0,n,a),o("WebGLRenderer: Texture has been resized from ("+s.width+"x"+s.height+") to ("+n+"x"+a+")."),r}return"data"in e&&o("WebGLRenderer: Image in DataTexture is too big ("+s.width+"x"+s.height+")."),e}return e}function g(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function Q(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function y(n,s,i,a,r=!1){if(n!==null){if(e[n]!==0[0])return e[n];o("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+n+"'")}let c=s;if(s===e.RED&&(i===e.FLOAT&&(c=e.R32F),i===e.HALF_FLOAT&&(c=e.R16F),i===e.UNSIGNED_BYTE&&(c=e.R8)),s===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(c=e.R8UI),i===e.UNSIGNED_SHORT&&(c=e.R16UI),i===e.UNSIGNED_INT&&(c=e.R32UI),i===e.BYTE&&(c=e.R8I),i===e.SHORT&&(c=e.R16I),i===e.INT&&(c=e.R32I)),s===e.RG&&(i===e.FLOAT&&(c=e.RG32F),i===e.HALF_FLOAT&&(c=e.RG16F),i===e.UNSIGNED_BYTE&&(c=e.RG8)),s===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(c=e.RG8UI),i===e.UNSIGNED_SHORT&&(c=e.RG16UI),i===e.UNSIGNED_INT&&(c=e.RG32UI),i===e.BYTE&&(c=e.RG8I),i===e.SHORT&&(c=e.RG16I),i===e.INT&&(c=e.RG32I)),s===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(c=e.RGB8UI),i===e.UNSIGNED_SHORT&&(c=e.RGB16UI),i===e.UNSIGNED_INT&&(c=e.RGB32UI),i===e.BYTE&&(c=e.RGB8I),i===e.SHORT&&(c=e.RGB16I),i===e.INT&&(c=e.RGB32I)),s===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),i===e.UNSIGNED_INT&&(c=e.RGBA32UI),i===e.BYTE&&(c=e.RGBA8I),i===e.SHORT&&(c=e.RGBA16I),i===e.INT&&(c=e.RGBA32I)),s===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),s===e.RGBA){const t=r?ks:f.getTransfer(a);i===e.FLOAT&&(c=e.RGBA32F),i===e.HALF_FLOAT&&(c=e.RGBA16F),i===e.UNSIGNED_BYTE&&(c=t===p?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&t.get("EXT_color_buffer_float"),c}function R(t,n){let s;return t?n===null||n===Ee||n===Wn?s=e.DEPTH24_STENCIL8:n===ue?s=e.DEPTH32F_STENCIL8:n===$n&&(s=e.DEPTH24_STENCIL8,o("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):n===null||n===Ee||n===Wn?s=e.DEPTH_COMPONENT24:n===ue?s=e.DEPTH_COMPONENT32F:n===$n&&(s=e.DEPTH_COMPONENT16),s}function Y(e,t){return g(e)===!0||e.isFramebufferTexture&&e.minFilter!==E&&e.minFilter!==A?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==0[0]&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function S(e){const t=e.target;t.removeEventListener("dispose",S),J(t),t.isVideoTexture&&T.delete(t)}function G(e){const t=e.target;t.removeEventListener("dispose",G),Z(t)}function J(e){const n=s.get(e);if(n.__webglInit===0[0])return;const o=e.source,t=j.get(o);if(t){const s=t[n.__cacheKey];s.usedTimes--,s.usedTimes===0&&P(e),Object.keys(t).length===0&&j.delete(o)}s.remove(e)}function P(t){const n=s.get(t);e.deleteTexture(n.__webglTexture);const o=t.source,i=j.get(o);delete i[n.__cacheKey],l.memory.textures--}function Z(t){const n=s.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),s.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let s=0;s<n.__webglFramebuffer[t].length;s++)e.deleteFramebuffer(n.__webglFramebuffer[t][s]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}const o=t.textures;for(let t=0,i=o.length;t<i;t++){const n=s.get(o[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),l.memory.textures--),s.remove(o[t])}s.remove(t)}let D=0;function te(){D=0}function X(){const e=D;return e>=a.maxTextures&&o("WebGLTextures: Trying to use "+e+" texture units while this GPU supports only "+a.maxTextures),D+=1,e}function de(e){const t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function K(t,i){const a=s.get(t);if(t.isVideoTexture&&me(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){const e=t.image;if(e===null)o("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)o("WebGLRenderer: Texture marked for update but image is incomplete");else{z(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,o){const i=s.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version){z(i,t,o);return}t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+o)}function fe(t,o){const i=s.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version){z(i,t,o);return}n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+o)}function he(t,o){const i=s.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&i.__version!==t.version){ae(i,t,o);return}n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+o)}const L={[Cn]:e.REPEAT,[xe]:e.CLAMP_TO_EDGE,[yo]:e.MIRRORED_REPEAT},W={[E]:e.NEAREST,[xr]:e.NEAREST_MIPMAP_NEAREST,[Rn]:e.NEAREST_MIPMAP_LINEAR,[A]:e.LINEAR,[po]:e.LINEAR_MIPMAP_NEAREST,[Pe]:e.LINEAR_MIPMAP_LINEAR},re={[zu]:e.NEVER,[Au]:e.ALWAYS,[Tu]:e.LESS,[Ni]:e.LEQUAL,[Fu]:e.EQUAL,[Di]:e.GEQUAL,[Mu]:e.GREATER,[Su]:e.NOTEQUAL};function v(n,i){if(i.type===ue&&t.has("OES_texture_float_linear")===!1&&(i.magFilter===A||i.magFilter===po||i.magFilter===Rn||i.magFilter===Pe||i.minFilter===A||i.minFilter===po||i.minFilter===Rn||i.minFilter===Pe)&&o("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(n,e.TEXTURE_WRAP_S,L[i.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,L[i.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,L[i.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,W[i.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,W[i.minFilter]),i.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,re[i.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(i.magFilter===E)return;if(i.minFilter!==Rn&&i.minFilter!==Pe)return;if(i.type===ue&&t.has("OES_texture_float_linear")===!1)return;if(i.anisotropy>1||s.get(i).__currentAnisotropy){const o=t.get("EXT_texture_filter_anisotropic");e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(i.anisotropy,a.getMaxAnisotropy())),s.get(i).__currentAnisotropy=i.anisotropy}}}function q(t,n){let i=!1;t.__webglInit===0[0]&&(t.__webglInit=!0,n.addEventListener("dispose",S));const a=n.source;let s=j.get(a);s===0[0]&&(s={},j.set(a,s));const o=de(n);if(o!==t.__cacheKey){s[o]===0[0]&&(s[o]={texture:e.createTexture(),usedTimes:0},l.memory.textures++,i=!0),s[o].usedTimes++;const a=s[t.__cacheKey];a!==0[0]&&(s[t.__cacheKey].usedTimes--,a.usedTimes===0&&P(n)),t.__cacheKey=o,t.__webglTexture=s[o].texture}return i}function N(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ee(t,s,o,i){const r=4,a=t.updateRanges;if(a.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,o,i,s.data);else{a.sort((e,t)=>e.start-t.start);let c=0;for(let n=1;n<a.length;n++){const t=a[c],e=a[n],i=t.start+t.count,o=N(e.start,s.width,r),l=N(t.start,s.width,r);e.start<=i+1&&o===l&&N(e.start+e.count-1,s.width,r)===o?t.count=Math.max(t.count,e.start+e.count-t.start):(++c,a[c]=e)}a.length=c+1;const l=e.getParameter(e.UNPACK_ROW_LENGTH),d=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let t=0,h=a.length;t<h;t++){const c=a[t],l=Math.floor(c.start/r),m=Math.ceil(c.count/r),d=l%s.width,u=Math.floor(l/s.width),f=m,p=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,d),e.pixelStorei(e.UNPACK_SKIP_ROWS,u),n.texSubImage2D(e.TEXTURE_2D,0,d,u,f,p,o,i,s.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,l),e.pixelStorei(e.UNPACK_SKIP_PIXELS,d),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function z(t,i,r){let l=e.TEXTURE_2D;(i.isDataArrayTexture||i.isCompressedArrayTexture)&&(l=e.TEXTURE_2D_ARRAY),i.isData3DTexture&&(l=e.TEXTURE_3D);const h=q(t,i),d=i.source;n.bindTexture(l,t.__webglTexture,e.TEXTURE0+r);const u=s.get(d);if(d.version!==u.__version||h===!0){n.activeTexture(e.TEXTURE0+r);const A=f.getPrimaries(f.workingColorSpace),S=i.colorSpace===et?null:f.getPrimaries(i.colorSpace),k=i.colorSpace===et||A===S?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let t=U(i.image,!1,a.maxTextureSize);t=B(i,t);const m=c.convert(i.format,i.colorSpace),j=c.convert(i.type);let p=y(i.internalFormat,m,j,i.colorSpace,i.isVideoTexture);v(l,i);let s;const _=i.mipmaps,O=i.isVideoTexture!==!0,x=u.__version===0[0]||h===!0,C=d.dataReady,E=Y(i,t);if(i.isDepthTexture)p=R(i.format===Dt,i.type),x&&(O?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,m,j,null));else if(i.isDataTexture)if(_.length>0){O&&x&&n.texStorage2D(e.TEXTURE_2D,E,p,_[0].width,_[0].height);for(let t=0,o=_.length;t<o;t++)s=_[t],O?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,m,j,s.data):n.texImage2D(e.TEXTURE_2D,t,p,s.width,s.height,0,m,j,s.data);i.generateMipmaps=!1}else O?(x&&n.texStorage2D(e.TEXTURE_2D,E,p,t.width,t.height),C&&ee(i,t,m,j)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,m,j,t.data);else if(i.isCompressedTexture)if(i.isCompressedArrayTexture){O&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,p,_[0].width,_[0].height,t.depth);for(let a=0,r=_.length;a<r;a++)if(s=_[a],i.format!==le)if(m!==null)if(O){if(C)if(i.layerUpdates.size>0){const t=p2(s.width,s.height,i.format,i.type);for(const o of i.layerUpdates){const r=s.data.subarray(o*t/s.data.BYTES_PER_ELEMENT,(o+1)*t/s.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,o,s.width,s.height,1,m,r)}i.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,s.width,s.height,t.depth,m,s.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,a,p,s.width,s.height,t.depth,0,s.data,0,0);else o("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?C&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,a,0,0,0,s.width,s.height,t.depth,m,j,s.data):n.texImage3D(e.TEXTURE_2D_ARRAY,a,p,s.width,s.height,t.depth,0,m,j,s.data)}else{O&&x&&n.texStorage2D(e.TEXTURE_2D,E,p,_[0].width,_[0].height);for(let t=0,a=_.length;t<a;t++)s=_[t],i.format!==le?m!==null?O?C&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,m,s.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,s.width,s.height,0,s.data):o("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,s.width,s.height,m,j,s.data):n.texImage2D(e.TEXTURE_2D,t,p,s.width,s.height,0,m,j,s.data)}else if(i.isDataArrayTexture)if(O){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,p,t.width,t.height,t.depth),C)if(i.layerUpdates.size>0){const s=p2(t.width,t.height,i.format,i.type);for(const o of i.layerUpdates){const a=t.data.subarray(o*s/t.data.BYTES_PER_ELEMENT,(o+1)*s/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,o,t.width,t.height,1,m,j,a)}i.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,m,j,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,m,j,t.data);else if(i.isData3DTexture)O?(x&&n.texStorage3D(e.TEXTURE_3D,E,p,t.width,t.height,t.depth),C&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,m,j,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,m,j,t.data);else if(i.isFramebufferTexture){if(x)if(O)n.texStorage2D(e.TEXTURE_2D,E,p,t.width,t.height);else{let s=t.width,o=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,p,s,o,0,m,j,null),s>>=1,o>>=1}}else if(_.length>0){if(O&&x){const t=w(_[0]);n.texStorage2D(e.TEXTURE_2D,E,p,t.width,t.height)}for(let t=0,o=_.length;t<o;t++)s=_[t],O?C&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,j,s):n.texImage2D(e.TEXTURE_2D,t,p,m,j,s);i.generateMipmaps=!1}else if(O){if(x){const s=w(t);n.texStorage2D(e.TEXTURE_2D,E,p,s.width,s.height)}C&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,j,t)}else n.texImage2D(e.TEXTURE_2D,0,p,m,j,t);g(i)&&b(l),u.__version=d.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function ae(t,i,r){if(i.image.length!==6)return;const u=q(t,i),l=i.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);const d=s.get(l);if(l.version!==d.__version||u===!0){n.activeTexture(e.TEXTURE0+r);const A=f.getPrimaries(f.workingColorSpace),M=i.colorSpace===et?null:f.getPrimaries(i.colorSpace),S=i.colorSpace===et||A===M?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,i.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,i.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);const E=i.isCompressedTexture||i.image[0].isCompressedTexture,x=i.image[0]&&i.image[0].isDataTexture,t=[];for(let e=0;e<6;e++)!E&&!x?t[e]=U(i.image[e],!0,a.maxCubemapSize):t[e]=x?i.image[e].image:i.image[e],t[e]=B(i,t[e]);const O=t[0],s=c.convert(i.format,i.colorSpace),h=c.convert(i.type),j=y(i.internalFormat,s,h,i.colorSpace),p=i.isVideoTexture!==!0,k=d.__version===0[0]||u===!0,_=l.dataReady;let C=Y(i,O);v(e.TEXTURE_CUBE_MAP,i);let m;if(E){p&&k&&n.texStorage2D(e.TEXTURE_CUBE_MAP,C,j,O.width,O.height);for(let a=0;a<6;a++){m=t[a].mipmaps;for(let r=0;r<m.length;r++){const t=m[r];i.format!==le?s!==null?p?_&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,r,0,0,t.width,t.height,s,t.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,r,j,t.width,t.height,0,t.data):o("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):p?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,r,0,0,t.width,t.height,s,h,t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+a,r,j,t.width,t.height,0,s,h,t.data)}}}else{if(m=i.mipmaps,p&&k){m.length>0&&C++;const s=w(t[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,C,j,s.width,s.height)}for(let o=0;o<6;o++)if(x){p?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,t[o].width,t[o].height,s,h,t[o].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,j,t[o].width,t[o].height,0,s,h,t[o].data);for(let i=0;i<m.length;i++){const a=m[i],t=a.image[o].image;p?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i+1,0,0,t.width,t.height,s,h,t.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,i+1,j,t.width,t.height,0,s,h,t.data)}}else{p?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,0,0,s,h,t[o]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,0,j,s,h,t[o]);for(let t=0;t<m.length;t++){const i=m[t];p?_&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,t+1,0,0,s,h,i.image[o]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+o,t+1,j,s,h,i.image[o])}}}g(i)&&b(e.TEXTURE_CUBE_MAP),d.__version=l.version,i.onUpdate&&i.onUpdate(i)}t.__version=i.version}function m(t,o,i,a,r,l){const h=c.convert(i.format,i.colorSpace),m=c.convert(i.type),p=y(i.internalFormat,h,m,i.colorSpace),g=s.get(o),f=s.get(i);if(f.__renderTarget=o,!g.__hasExternalTextures){const t=Math.max(1,o.width>>l),s=Math.max(1,o.height>>l);r===e.TEXTURE_3D||r===e.TEXTURE_2D_ARRAY?n.texImage3D(r,l,p,t,s,o.depth,0,h,m,null):n.texImage2D(r,l,p,t,s,0,h,m,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),d(o)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,r,f.__webglTexture,0,u(o)):(r===e.TEXTURE_2D||r>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&r<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,r,f.__webglTexture,l),n.bindFramebuffer(e.FRAMEBUFFER,null)}function F(t,n,s){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){const o=n.depthTexture,a=o&&o.isDepthTexture?o.type:null,i=R(n.stencilBuffer,a),r=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;d(n)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,u(n),i,n.width,n.height):s?e.renderbufferStorageMultisample(e.RENDERBUFFER,u(n),i,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,i,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,t)}else{const t=n.textures;for(let i=0;i<t.length;i++){const o=t[i],r=c.convert(o.format,o.colorSpace),l=c.convert(o.type),a=y(o.internalFormat,r,l,o.colorSpace);d(n)?_.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,u(n),a,n.width,n.height):s?e.renderbufferStorageMultisample(e.RENDERBUFFER,u(n),a,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,a,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function M(t,o,i){const m=o.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!o.depthTexture||!o.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const a=s.get(o.depthTexture);if(a.__renderTarget=o,(!a.__webglTexture||o.depthTexture.image.width!==o.width||o.depthTexture.image.height!==o.height)&&(o.depthTexture.image.width=o.width,o.depthTexture.image.height=o.height,o.depthTexture.needsUpdate=!0),m){if(a.__webglInit===0[0]&&(a.__webglInit=!0,o.depthTexture.addEventListener("dispose",S)),a.__webglTexture===0[0]){a.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),v(e.TEXTURE_CUBE_MAP,o.depthTexture);const s=c.convert(o.depthTexture.format),i=c.convert(o.depthTexture.type);let t;o.depthTexture.format===We?t=e.DEPTH_COMPONENT24:o.depthTexture.format===Dt&&(t=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,t,o.width,o.height,0,s,i,null)}}else K(o.depthTexture,0);const r=a.__webglTexture,f=u(o),l=m?e.TEXTURE_CUBE_MAP_POSITIVE_X+i:e.TEXTURE_2D,h=o.depthTexture.format===Dt?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(o.depthTexture.format===We)d(o)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,h,l,r,0,f):e.framebufferTexture2D(e.FRAMEBUFFER,h,l,r,0);else if(o.depthTexture.format===Dt)d(o)?_.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,h,l,r,0,f):e.framebufferTexture2D(e.FRAMEBUFFER,h,l,r,0);else throw new Error("Unknown depthTexture format")}function x(t){const o=s.get(t),i=t.isWebGLCubeRenderTarget===!0;if(o.__boundDepthTexture!==t.depthTexture){const e=t.depthTexture;if(o.__depthDisposeCallback&&o.__depthDisposeCallback(),e){const t=()=>{delete o.__boundDepthTexture,delete o.__depthDisposeCallback,e.removeEventListener("dispose",t)};e.addEventListener("dispose",t),o.__depthDisposeCallback=t}o.__boundDepthTexture=e}if(t.depthTexture&&!o.__autoAllocateDepthBuffer)if(i)for(let e=0;e<6;e++)M(o.__webglFramebuffer[e],t,e);else{const e=t.texture.mipmaps;e&&e.length>0?M(o.__webglFramebuffer[0],t,0):M(o.__webglFramebuffer,t,0)}else if(i){o.__webglDepthbuffer=[];for(let s=0;s<6;s++)if(n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer[s]),o.__webglDepthbuffer[s]===0[0])o.__webglDepthbuffer[s]=e.createRenderbuffer(),F(o.__webglDepthbuffer[s],t,!1);else{const i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,n=o.__webglDepthbuffer[s];e.bindRenderbuffer(e.RENDERBUFFER,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,n)}}else{const s=t.texture.mipmaps;if(s&&s.length>0?n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),o.__webglDepthbuffer===0[0])o.__webglDepthbuffer=e.createRenderbuffer(),F(o.__webglDepthbuffer,t,!1);else{const s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,n=o.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,n)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ne(t,n,o){const i=s.get(t);n!==0[0]&&m(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),o!==0[0]&&x(t)}function oe(t){const o=t.texture,i=s.get(t),r=s.get(o);t.addEventListener("dispose",G);const a=t.textures,f=t.isWebGLCubeRenderTarget===!0,h=a.length>1;if(h||(r.__webglTexture===0[0]&&(r.__webglTexture=e.createTexture()),r.__version=o.version,l.memory.textures++),f){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(o.mipmaps&&o.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<o.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(o.mipmaps&&o.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<o.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(h)for(let t=0,o=a.length;t<o;t++){const n=s.get(a[t]);n.__webglTexture===0[0]&&(n.__webglTexture=e.createTexture(),l.memory.textures++)}if(t.samples>0&&d(t)===!1){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){const s=a[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);const o=c.convert(s.format,s.colorSpace),r=c.convert(s.type),l=y(s.internalFormat,o,r,s.colorSpace,t.isXRRenderTarget===!0),d=u(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,d,l,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),F(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(f){n.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture),v(e.TEXTURE_CUBE_MAP,o);for(let n=0;n<6;n++)if(o.mipmaps&&o.mipmaps.length>0)for(let s=0;s<o.mipmaps.length;s++)m(i.__webglFramebuffer[n][s],t,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,s);else m(i.__webglFramebuffer[n],t,o,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);g(o)&&b(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(h){for(let r=0,l=a.length;r<l;r++){const c=a[r],d=s.get(c);let o=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,d.__webglTexture),v(o,c),m(i.__webglFramebuffer,t,c,e.COLOR_ATTACHMENT0+r,o,0),g(c)&&b(o)}n.unbindTexture()}else{let s=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(s,r.__webglTexture),v(s,o),o.mipmaps&&o.mipmaps.length>0)for(let n=0;n<o.mipmaps.length;n++)m(i.__webglFramebuffer[n],t,o,e.COLOR_ATTACHMENT0,s,n);else m(i.__webglFramebuffer,t,o,e.COLOR_ATTACHMENT0,s,0);g(o)&&b(s),n.unbindTexture()}t.depthBuffer&&x(t)}function ie(e){const t=e.textures;for(let o=0,a=t.length;o<a;o++){const i=t[o];if(g(i)){const t=Q(e),o=s.get(i).__webglTexture;n.bindTexture(t,o),b(t),n.unbindTexture()}}}const O=[],k=[];function ce(t){if(t.samples>0)if(d(t)===!1){const i=t.textures,c=t.width,l=t.height;let a=e.COLOR_BUFFER_BIT;const d=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,o=s.get(t),r=i.length>1;if(r)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);const u=t.texture.mipmaps;u&&u.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),r){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,o.__webglColorRenderbuffer[n]);const t=s.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,c,l,0,0,c,l,a,e.NEAREST),I===!0&&(O.length=0,k.length=0,O.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(O.push(d),k.push(d),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,k)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,O))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),r)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,o.__webglColorRenderbuffer[t]);const a=s.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,o.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&I){const n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}function u(e){return Math.min(a.maxSamples,e.samples)}function d(e){const n=s.get(e);return e.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&n.__useRenderToTexture!==!1}function me(e){const t=l.render.frame;T.get(e)!==t&&(T.set(e,t),e.update())}function B(e,t){const n=e.colorSpace,s=e.format,a=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0?t:(n!==H&&n!==et&&(f.getTransfer(n)===p?(s!==le||a!==se)&&o("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):i("WebGLTextures: Unsupported texture color space:",n)),t)}function w(e){return typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement?(h.width=e.naturalWidth||e.width,h.height=e.naturalHeight||e.height):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?(h.width=e.displayWidth,h.height=e.displayHeight):(h.width=e.width,h.height=e.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=te,this.setTexture2D=K,this.setTexture2DArray=pe,this.setTexture3D=fe,this.setTextureCube=he,this.rebindTextures=ne,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=x,this.setupFrameBufferTexture=m,this.useMultisampledRTT=d,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function n6(e,t){function n(n,s=et){let o;const i=f.getTransfer(s);if(n===se)return e.UNSIGNED_BYTE;if(n===or)return e.UNSIGNED_SHORT_4_4_4_4;if(n===sr)return e.UNSIGNED_SHORT_5_5_5_1;if(n===gr)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===vr)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===ur)return e.BYTE;if(n===Zc)return e.SHORT;if(n===$n)return e.UNSIGNED_SHORT;if(n===cr)return e.INT;if(n===Ee)return e.UNSIGNED_INT;if(n===ue)return e.FLOAT;if(n===Ge)return e.HALF_FLOAT;if(n===br)return e.ALPHA;if(n===jr)return e.RGB;if(n===le)return e.RGBA;if(n===We)return e.DEPTH_COMPONENT;if(n===Dt)return e.DEPTH_STENCIL;if(n===tr)return e.RED;if(n===er)return e.RED_INTEGER;if(n===Gt)return e.RG;if(n===Ja)return e.RG_INTEGER;if(n===Za)return e.RGBA_INTEGER;if(n===uo||n===Gs||n===js||n===Bs)if(i===p)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){{if(n===uo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){{if(n===uo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}}else return null;if(n===Ka||n===Wa||n===Eo||n===$a)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){{if(n===Ka)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}}else return null;if(n===Va||n===Ba||n===Ia||n===Ha||n===Ra||n===La||n===Na)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){{if(n===Va||n===Ba)return i===p?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ia)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ha)return o.COMPRESSED_R11_EAC;if(n===Ra)return o.COMPRESSED_SIGNED_R11_EAC;if(n===La)return o.COMPRESSED_RG11_EAC;if(n===Na)return o.COMPRESSED_SIGNED_RG11_EAC}}else return null;if(n===Fa||n===wa||n===Co||n===ya||n===ja||n===ba||n===va||n===pa||n===fa||n===da||n===la||n===ra||n===sa||n===ta)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){{if(n===Fa)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wa)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ya)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ja)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ba)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===va)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pa)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===la)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sa)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ta)return i===p?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}}else return null;if(n===ea||n===Ji||n===Zi)if(o=t.get("EXT_texture_compression_bptc"),o!==null){{if(n===ea)return i===p?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ji)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zi)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}}else return null;if(n===Qi||n===Gi||n===qi||n===Ki)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){{if(n===Qi)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Gi)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qi)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ki)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}}else return null;return n===Wn?e.UNSIGNED_INT_24_8:e[n]!==0[0]?e[n]:null}return{convert:n}}g2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r2=`
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

}`,a2=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new bc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Me({vertexShader:g2,fragmentShader:r2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new lc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},i2=class extends gn{constructor(t,n){super();const p=this;let s=null,F=1,_=null,B="local-floor",A=1,j=null,M=null,h=null,c=null,a=null,E=null;const O=typeof XRWebGLBinding!="undefined",f=new a2,w={},u=n.getContextAttributes();let I=null,g=null;const l=[],m=[],k=new r;let z=null;const v=new $;v.viewport=new b;const y=new $;y.viewport=new b;const D=[v,y],i=new q0;let T=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=l[e];return t===0[0]&&(t=new zo,l[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=l[e];return t===0[0]&&(t=new zo,l[e]=t),t.getGripSpace()},this.getHand=function(e){let t=l[e];return t===0[0]&&(t=new zo,l[e]=t),t.getHandSpace()};function d(e){const n=m.indexOf(e.inputSource);if(n===-1)return;const t=l[n];t!==0[0]&&(t.update(e.inputSource,e.frame,j||_),t.dispatchEvent({type:e.type,data:e.inputSource}))}function N(){s.removeEventListener("select",d),s.removeEventListener("selectstart",d),s.removeEventListener("selectend",d),s.removeEventListener("squeeze",d),s.removeEventListener("squeezestart",d),s.removeEventListener("squeezeend",d),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",L);for(let e=0;e<l.length;e++){const t=m[e];if(t===null)continue;m[e]=null,l[e].disconnect(t)}T=null,S=null,f.reset();for(const e in w)delete w[e];t.setRenderTarget(I),a=null,c=null,h=null,s=null,g=null,x.stop(),p.isPresenting=!1,t.setPixelRatio(z),t.setSize(k.width,k.height,!1),p.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(e){F=e,p.isPresenting===!0&&o("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(e){B=e,p.isPresenting===!0&&o("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return j||_},this.setReferenceSpace=function(e){j=e},this.getBaseLayer=function(){return c!==null?c:a},this.getBinding=function(){return h===null&&O&&(h=new XRWebGLBinding(s,n)),h},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(e){if(s=e,s!==null){I=t.getRenderTarget(),s.addEventListener("select",d),s.addEventListener("selectstart",d),s.addEventListener("selectend",d),s.addEventListener("squeeze",d),s.addEventListener("squeezestart",d),s.addEventListener("squeezeend",d),s.addEventListener("end",N),s.addEventListener("inputsourceschange",L),u.xrCompatible!==!0&&await n.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(k);const e=O&&"createProjectionLayer"in XRWebGLBinding.prototype;if(e){let e=null,o=null,i=null;u.depth&&(i=u.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,e=u.stencil?Dt:We,o=u.stencil?Wn:Ee);const a={colorFormat:n.RGBA8,depthFormat:i,scaleFactor:F};h=this.getBinding(),c=h.createProjectionLayer(a),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),g=new Te(c.textureWidth,c.textureHeight,{format:le,type:se,depthTexture:new rs(c.textureWidth,c.textureHeight,o,0[0],0[0],0[0],0[0],0[0],0[0],e),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const e={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:F};a=new XRWebGLLayer(s,n,e),s.updateRenderState({baseLayer:a}),t.setPixelRatio(1),t.setSize(a.framebufferWidth,a.framebufferHeight,!1),g=new Te(a.framebufferWidth,a.framebufferHeight,{format:le,type:se,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil,resolveDepthBuffer:a.ignoreDepthValues===!1,resolveStencilBuffer:a.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(A),j=null,_=await s.requestReferenceSpace(B),x.setContext(s),x.start(),p.isPresenting=!0,p.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function L(e){for(let t=0;t<e.removed.length;t++){const s=e.removed[t],n=m.indexOf(s);n>=0&&(m[n]=null,l[n].disconnect(s))}for(let s=0;s<e.added.length;s++){const n=e.added[s];let t=m.indexOf(n);if(t===-1){for(let e=0;e<l.length;e++){if(e>=m.length){m.push(n),t=e;break}if(m[e]===null){m[e]=n,t=e;break}}if(t===-1)break}const o=l[t];o&&o.connect(n)}}const R=new e,P=new e;function V(e,t,n){R.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);const d=R.distanceTo(P),s=t.projectionMatrix.elements,l=n.projectionMatrix.elements,i=s[14]/(s[10]-1),a=s[14]/(s[10]+1),p=(s[9]+1)/s[5],h=(s[9]-1)/s[5],c=(s[8]-1)/s[0],u=(l[8]+1)/l[0],f=i*c,m=i*u,o=d/(-c+u),r=o*-c;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(r),e.translateZ(o),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),s[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{const t=i+o,n=a+o,s=f-r,c=m+(d-r),l=p*a/n*t,u=h*a/n*t;e.projectionMatrix.makePerspective(s,c,l,u,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function H(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(s===null)return;let o=e.near,a=e.far;f.texture!==null&&(f.depthNear>0&&(o=f.depthNear),f.depthFar>0&&(a=f.depthFar)),i.near=y.near=v.near=o,i.far=y.far=v.far=a,(T!==i.near||S!==i.far)&&(s.updateRenderState({depthNear:i.near,depthFar:i.far}),T=i.near,S=i.far),i.layers.mask=e.layers.mask|6,v.layers.mask=i.layers.mask&-5,y.layers.mask=i.layers.mask&-3;const t=e.parent,n=i.cameras;H(i,t);for(let e=0;e<n.length;e++)H(n[e],t);n.length===2?V(i,v,y):i.projectionMatrix.copy(v.projectionMatrix),W(e,i,t)};function W(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=cn*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return i},this.getFoveation=function(){return c===null&&a===null?0[0]:A},this.setFoveation=function(e){A=e,c!==null&&(c.fixedFoveation=e),a!==null&&a.fixedFoveation!==0[0]&&(a.fixedFoveation=e)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(i)},this.getCameraTexture=function(e){return w[e]};let C=null;function U(e,n){if(M=n.getViewerPose(j||_),E=n,M!==null){const e=M.views;a!==null&&(t.setRenderTargetFramebuffer(g,a.framebuffer),t.setRenderTarget(g));let o=!1;e.length!==i.cameras.length&&(i.cameras.length=0,o=!0);for(let s=0;s<e.length;s++){const l=e[s];let r=null;if(a!==null)r=a.getViewport(l);else{const e=h.getViewSubImage(c,l);r=e.viewport,s===0&&(t.setRenderTargetTextures(g,e.colorTexture,e.depthStencilTexture),t.setRenderTarget(g))}let n=D[s];n===0[0]&&(n=new $,n.layers.enable(s),n.viewport=new b,D[s]=n),n.matrix.fromArray(l.transform.matrix),n.matrix.decompose(n.position,n.quaternion,n.scale),n.projectionMatrix.fromArray(l.projectionMatrix),n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),n.viewport.set(r.x,r.y,r.width,r.height),s===0&&(i.matrix.copy(n.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale)),o===!0&&i.cameras.push(n)}const n=s.enabledFeatures,r=n&&n.includes("depth-sensing")&&s.depthUsage=="gpu-optimized";if(r&&O){h=p.getBinding();const t=h.getDepthInformation(e[0]);t&&t.isValid&&t.texture&&f.init(t,s.renderState)}const l=n&&n.includes("camera-access");if(l&&O){t.state.unbindTexture(),h=p.getBinding();for(let n=0;n<e.length;n++){const t=e[n].camera;if(t){let e=w[t];e||(e=new bc,w[t]=e);const n=h.getCameraImage(t);e.sourceTexture=n}}}}for(let e=0;e<l.length;e++){const t=m[e],s=l[e];t!==null&&s!==0[0]&&s.update(t,n,j||_)}C&&C(e,n),n.detectedPlanes&&p.dispatchEvent({type:"planesdetected",data:n}),E=null}const x=new v2;x.setAnimationLoop(U),this.setAnimationLoop=function(e){C=e},this.dispose=function(){}}},Ct=new mt,Y0=new d;function l6(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function c(t,n){n.color.getRGB(t.fogColor.value,D4(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,i,c){t.isMeshBasicMaterial?s(e,t):t.isMeshLambertMaterial?(s(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(s(e,t),u(e,t)):t.isMeshPhongMaterial?(s(e,t),d(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(s(e,t),h(e,t),t.isMeshPhysicalMaterial&&m(e,t,c)):t.isMeshMatcapMaterial?(s(e,t),f(e,t)):t.isMeshDepthMaterial?s(e,t):t.isMeshDistanceMaterial?(s(e,t),p(e,t)):t.isMeshNormalMaterial?s(e,t):t.isLineBasicMaterial?(a(e,t),t.isLineDashedMaterial&&r(e,t)):t.isPointsMaterial?o(e,t,n,i):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function s(e,s){e.opacity.value=s.opacity,s.color&&e.diffuse.value.copy(s.color),s.emissive&&e.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(e.map.value=s.map,n(s.map,e.mapTransform)),s.alphaMap&&(e.alphaMap.value=s.alphaMap,n(s.alphaMap,e.alphaMapTransform)),s.bumpMap&&(e.bumpMap.value=s.bumpMap,n(s.bumpMap,e.bumpMapTransform),e.bumpScale.value=s.bumpScale,s.side===X&&(e.bumpScale.value*=-1)),s.normalMap&&(e.normalMap.value=s.normalMap,n(s.normalMap,e.normalMapTransform),e.normalScale.value.copy(s.normalScale),s.side===X&&e.normalScale.value.negate()),s.displacementMap&&(e.displacementMap.value=s.displacementMap,n(s.displacementMap,e.displacementMapTransform),e.displacementScale.value=s.displacementScale,e.displacementBias.value=s.displacementBias),s.emissiveMap&&(e.emissiveMap.value=s.emissiveMap,n(s.emissiveMap,e.emissiveMapTransform)),s.specularMap&&(e.specularMap.value=s.specularMap,n(s.specularMap,e.specularMapTransform)),s.alphaTest>0&&(e.alphaTest.value=s.alphaTest);const i=t.get(s),o=i.envMap,a=i.envMapRotation;o&&(e.envMap.value=o,Ct.copy(a),Ct.x*=-1,Ct.y*=-1,Ct.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Ct.y*=-1,Ct.z*=-1),e.envMapRotation.value.setFromMatrix4(Y0.makeRotationFromEuler(Ct)),e.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=s.reflectivity,e.ior.value=s.ior,e.refractionRatio.value=s.refractionRatio),s.lightMap&&(e.lightMap.value=s.lightMap,e.lightMapIntensity.value=s.lightMapIntensity,n(s.lightMap,e.lightMapTransform)),s.aoMap&&(e.aoMap.value=s.aoMap,e.aoMapIntensity.value=s.aoMapIntensity,n(s.aoMap,e.aoMapTransform))}function a(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function r(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function o(e,t,s,o){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*s,e.scale.value=o*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function d(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function u(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function h(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function m(e,t,s){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===X&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=s.texture,e.transmissionSamplerSize.value.set(s.width,s.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function f(e,t){t.matcap&&(e.matcap.value=t.matcap)}function p(e,n){const s=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(s.matrixWorld),e.nearDistance.value=s.shadow.camera.near,e.farDistance.value=s.shadow.camera.far}return{refreshFogUniforms:c,refreshMaterialUniforms:i}}function a8(e,t,n,s){let a={},c={},r=[];const b=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function v(e,t){const n=t.program;s.uniformBlockBinding(e,n)}function h(e,n){let o=a[e.id];o===0[0]&&(g(e),o=u(e),a[e.id]=o,e.addEventListener("dispose",l));const r=n.program;s.updateUBOMapping(e,r);const i=t.render.frame;c[e.id]!==i&&(f(e),c[e.id]=i)}function u(t){const s=m();t.__bindingPointIndex=s;const n=e.createBuffer(),o=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,o,i),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,s,n),n}function m(){for(let e=0;e<b;e++)if(r.indexOf(e)===-1)return r.push(e),e;return i("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(t){const s=a[t.id],n=t.uniforms,o=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,s);for(let t=0,i=n.length;t<i;t++){const s=Array.isArray(n[t])?n[t]:[n[t]];for(let i=0,a=s.length;i<a;i++){const n=s[i];if(p(n,t,i,o)===!0){const s=n.__offset,o=Array.isArray(n.value)?n.value:[n.value];let t=0;for(let a=0;a<o.length;a++){const i=o[a],r=d(i);typeof i=="number"||typeof i=="boolean"?(n.__data[0]=i,e.bufferSubData(e.UNIFORM_BUFFER,s+t,n.__data)):i.isMatrix3?(n.__data[0]=i.elements[0],n.__data[1]=i.elements[1],n.__data[2]=i.elements[2],n.__data[3]=0,n.__data[4]=i.elements[3],n.__data[5]=i.elements[4],n.__data[6]=i.elements[5],n.__data[7]=0,n.__data[8]=i.elements[6],n.__data[9]=i.elements[7],n.__data[10]=i.elements[8],n.__data[11]=0):(i.toArray(n.__data,t),t+=r.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,s,n.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,s){const o=e.value,i=t+"_"+n;if(s[i]===0[0])return typeof o=="number"||typeof o=="boolean"?s[i]=o:s[i]=o.clone(),!0;const a=s[i];if(typeof o=="number"||typeof o=="boolean"){if(a!==o)return s[i]=o,!0}else if(a.equals(o)===!1)return a.copy(o),!0;return!1}function g(e){const s=e.uniforms;let t=0;const n=16;for(let e=0,i=s.length;e<i;e++){const o=Array.isArray(s[e])?s[e]:[s[e]];for(let s=0,a=o.length;s<a;s++){const e=o[s],i=Array.isArray(e.value)?e.value:[e.value];for(let o=0,l=i.length;o<l;o++){const u=i[o],s=d(u),r=t%n,c=r%s.boundary,a=r+c;t+=c,a!==0&&n-a<s.storage&&(t+=n-a),e.__data=new Float32Array(s.storage/Float32Array.BYTES_PER_ELEMENT),e.__offset=t,t+=s.storage}}}const o=t%n;return o>0&&(t+=n-o),e.__size=t,e.__cache={},this}function d(e){const t={boundary:0,storage:0};return typeof e=="number"||typeof e=="boolean"?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?o("WebGLRenderer: Texture samplers can not be part of an uniforms group."):o("WebGLRenderer: Unsupported uniform value type.",e),t}function l(t){const n=t.target;n.removeEventListener("dispose",l);const s=r.indexOf(n.__bindingPointIndex);r.splice(s,1),e.deleteBuffer(a[n.id]),delete a[n.id],delete c[n.id]}function j(){for(const t in a)e.deleteBuffer(a[t]);r=[],a={},c={}}return{bind:v,update:h,dispose:j}}U0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Se=null;function m6(){return Se===null&&(Se=new ai(U0,16,16,Gt,Ge),Se.name="DFG_LUT",Se.minFilter=A,Se.magFilter=A,Se.wrapS=xe,Se.wrapT=xe,Se.generateMipmaps=!1,Se.needsUpdate=!0),Se}V0=class{constructor(t={}){const{canvas:m=zp(),context:ne=null,depth:Fe=!0,stencil:pe=!1,alpha:at=!1,antialias:st=!1,premultipliedAlpha:Ve=!0,preserveDrawingBuffer:et=!1,powerPreference:nt="default",failIfMajorPerformanceCaveat:ot=!1,reversedDepthBuffer:it=!1,outputBufferType:rt=se}=t;this.isWebGLRenderer=!0;let re;if(ne!==null){if(typeof WebGLRenderingContext!="undefined"&&ne instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");re=ne.getContextAttributes().alpha}else re=at;const le=rt,ct=new Set([Za,Ja,er]),lt=new Set([se,Ee,$n,Wn,or,sr]),Y=new Uint32Array(4),G=new Int32Array(4);let v=null,u=null;const W=[],T=[];let C=null;this.domElement=m,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=De,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const s=this;let fe=!1;this._outputColorSpace=M;let ue=0,ee=0,h=null,P=-1,R=null;const E=new b,I=new b;let K=null;const Se=new a(0);let je=0,D=m.width,S=m.height,y=1,Ae=null,ke=null;const Q=new b(0,0,D,S),U=new b(0,0,D,S);let de=!1;const ye=new To;let z=!1,ve=!1;const oe=new d,dt=new e,L=new b,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let q=!1;function we(){return h===null?y:1}let n=ne;function Ye(e,t){return m.getContext(e,t)}try{const e={alpha:!0,depth:Fe,stencil:pe,antialias:st,premultipliedAlpha:Ve,preserveDrawingBuffer:et,powerPreference:nt,failIfMajorPerformanceCaveat:ot};if("setAttribute"in m&&m.setAttribute("data-engine",`three.js r${Bi}`),m.addEventListener("webglcontextlost",$e,!1),m.addEventListener("webglcontextrestored",We,!1),m.addEventListener("webglcontextcreationerror",Ue,!1),n===null){const t="webgl2";if(n=Ye(t,e),n===null)throw Ye(t)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(e){throw i("WebGLRenderer: "+e.message),e}let g,j,r,x,c,l,V,B,_e,$,A,ge,te,ae,w,O,_,ze,Ne,Le,k,F,Z;function Be(){g=new yf(n),g.init(),k=new n6(n,g),j=new Kf(n,g,t,k),r=new e6(n,g),j.reversedDepthBuffer&&it&&r.buffers.depth.setReversed(!0),x=new gf(n),c=new Df,l=new t6(n,g,r,c,j,k,x),V=new wf(s),B=new Qf(n),F=new Yf(n,B),_e=new jf(n,B,x,F),$=new mf(n,_e,B,F,x),ze=new ff(n,j,l),w=new Wf(c),A=new zf(s,V,g,j,F,w),ge=new l6(s,c),te=new Pf,ae=new Uf(g),_=new Gf(s,V,r,$,re,Ve),O=new Jf(s,$,j),Z=new a8(n,x,j,r),Ne=new qf(n,g,x),Le=new vf(n,g,x),x.programs=A.programs,s.capabilities=j,s.extensions=g,s.properties=c,s.renderLists=te,s.shadowMap=O,s.state=r,s.info=x}Be(),le!==se&&(C=new hf(le,m.width,m.height,Fe,pe));const p=new i2(s,n);this.xr=p,this.getContext=function(){return n},this.getContextAttributes=function(){return n.getContextAttributes()},this.forceContextLoss=function(){const e=g.get("WEBGL_lose_context");e&&e.loseContext()},this.forceContextRestore=function(){const e=g.get("WEBGL_lose_context");e&&e.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(e){if(e===0[0])return;y=e,this.setSize(D,S,!1)},this.getSize=function(e){return e.set(D,S)},this.setSize=function(e,t,n=!0){if(p.isPresenting){o("WebGLRenderer: Can't change size while VR device is presenting.");return}D=e,S=t,m.width=Math.floor(e*y),m.height=Math.floor(t*y),n===!0&&(m.style.width=e+"px",m.style.height=t+"px"),C!==null&&C.setSize(m.width,m.height),this.setViewport(0,0,e,t)},this.getDrawingBufferSize=function(e){return e.set(D*y,S*y).floor()},this.setDrawingBufferSize=function(e,t,n){D=e,S=t,y=n,m.width=Math.floor(e*n),m.height=Math.floor(t*n),this.setViewport(0,0,e,t)},this.setEffects=function(e){if(le===se){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(e)for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}C.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(E)},this.getViewport=function(e){return e.copy(Q)},this.setViewport=function(e,t,n,s){e.isVector4?Q.set(e.x,e.y,e.z,e.w):Q.set(e,t,n,s),r.viewport(E.copy(Q).multiplyScalar(y).round())},this.getScissor=function(e){return e.copy(U)},this.setScissor=function(e,t,n,s){e.isVector4?U.set(e.x,e.y,e.z,e.w):U.set(e,t,n,s),r.scissor(I.copy(U).multiplyScalar(y).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(e){r.setScissorTest(de=e)},this.setOpaqueSort=function(e){Ae=e},this.setTransparentSort=function(e){ke=e},this.getClearColor=function(e){return e.copy(_.getClearColor())},this.setClearColor=function(){_.setClearColor(...arguments)},this.getClearAlpha=function(){return _.getClearAlpha()},this.setClearAlpha=function(){_.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,s=!0){let o=0;if(e){let e=!1;if(h!==null){const t=h.texture.format;e=ct.has(t)}if(e){const a=h.texture.type,r=lt.has(a),e=_.getClearColor(),t=_.getClearAlpha(),s=e.r,o=e.g,i=e.b;r?(Y[0]=s,Y[1]=o,Y[2]=i,Y[3]=t,n.clearBufferuiv(n.COLOR,0,Y)):(G[0]=s,G[1]=o,G[2]=i,G[3]=t,n.clearBufferiv(n.COLOR,0,G))}else o|=n.COLOR_BUFFER_BIT}t&&(o|=n.DEPTH_BUFFER_BIT),s&&(o|=n.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),o!==0&&n.clear(o)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){m.removeEventListener("webglcontextlost",$e,!1),m.removeEventListener("webglcontextrestored",We,!1),m.removeEventListener("webglcontextcreationerror",Ue,!1),_.dispose(),te.dispose(),ae.dispose(),c.dispose(),V.dispose(),$.dispose(),F.dispose(),Z.dispose(),A.dispose(),p.dispose(),p.removeEventListener("sessionstart",Re),p.removeEventListener("sessionend",qe),N.stop()};function $e(e){e.preventDefault(),Ai("WebGLRenderer: Context Lost."),fe=!0}function We(){Ai("WebGLRenderer: Context Restored."),fe=!1;const e=x.autoReset,t=O.enabled,n=O.autoUpdate,s=O.needsUpdate,o=O.type;Be(),x.autoReset=e,O.enabled=t,O.autoUpdate=n,O.needsUpdate=s,O.type=o}function Ue(e){i("WebGLRenderer: A WebGL context could not be created. Reason: ",e.statusMessage)}function Ke(e){const t=e.target;t.removeEventListener("dispose",Ke),tt(t)}function tt(e){Ze(e),c.remove(e)}function Ze(e){const t=c.get(e).programs;t!==0[0]&&(t.forEach(function(e){A.releaseProgram(e)}),e.isShaderMaterial&&A.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,s,o,i,a){t===null&&(t=ce);const j=i.isMesh&&i.matrixWorld.determinant()<0,y=ut(e,t,s,o,i);r.setMaterial(o,j);let u=s.index,m=1;if(o.wireframe===!0){if(u=_e.getWireframeAttribute(s),u===0[0])return;m=2}const p=s.drawRange,v=s.attributes.position;let d=p.start*m,h=(p.start+p.count)*m;a!==null&&(d=Math.max(d,a.start*m),h=Math.min(h,(a.start+a.count)*m)),u!==null?(d=Math.max(d,0),h=Math.min(h,u.count)):v!=null&&(d=Math.max(d,0),h=Math.min(h,v.count));const f=h-d;if(f<0||f===1/0)return;F.setup(i,o,y,s,u);let b,l=Ne;if(u!==null&&(b=B.get(u),l=Le,l.setIndex(b)),i.isMesh)o.wireframe===!0?(r.setLineWidth(o.wireframeLinewidth*we()),l.setMode(n.LINES)):l.setMode(n.TRIANGLES);else if(i.isLine){let e=o.linewidth;e===0[0]&&(e=1),r.setLineWidth(e*we()),i.isLineSegments?l.setMode(n.LINES):i.isLineLoop?l.setMode(n.LINE_LOOP):l.setMode(n.LINE_STRIP)}else i.isPoints?l.setMode(n.POINTS):i.isSprite&&l.setMode(n.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)xi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),l.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(g.get("WEBGL_multi_draw"))l.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{const e=i._multiDrawStarts,t=i._multiDrawCounts,s=i._multiDrawCount,a=u?B.get(u).bytesPerElement:1,r=c.get(o).currentProgram.getUniforms();for(let o=0;o<s;o++)r.setValue(n,"_gl_DrawID",o),l.render(e[o]/a,t[o])}else if(i.isInstancedMesh)l.renderInstances(d,f,i.count);else if(s.isInstancedBufferGeometry){const e=s._maxInstanceCount!==0[0]?s._maxInstanceCount:1/0,t=Math.min(s.instanceCount,e);l.renderInstances(d,f,t)}else l.render(d,f)};function Xe(e,t,n){e.transparent===!0&&e.side===be&&e.forceSinglePass===!1?(e.side=X,e.needsUpdate=!0,ie(e,t,n),e.side=Qe,e.needsUpdate=!0,ie(e,t,n),e.side=be):ie(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),u=ae.get(n),u.init(t),T.push(u),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(u.pushLight(e),e.castShadow&&u.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(u.pushLight(e),e.castShadow&&u.pushShadow(e))}),u.setupLights();const s=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;const t=e.material;if(t)if(Array.isArray(t))for(let o=0;o<t.length;o++){const i=t[o];Xe(i,n,e),s.add(i)}else Xe(t,n,e),s.add(t)}),u=T.pop(),s},this.compileAsync=function(e,t,n=null){const s=this.compile(e,t,n);return new Promise(t=>{function n(){if(s.forEach(function(e){const t=c.get(e),n=t.currentProgram;n.isReady()&&s.delete(e)}),s.size===0){t(e);return}setTimeout(n,10)}g.get("KHR_parallel_shader_compile")!==null?n():setTimeout(n,10)})};let he=null;function Je(e){he&&he(e)}function Re(){N.stop()}function qe(){N.start()}const N=new v2;N.setAnimationLoop(Je),typeof self!="undefined"&&N.setContext(self),this.setAnimationLoop=function(e){he=e,p.setAnimationLoop(e),e===null?N.stop():N.start()},p.addEventListener("sessionstart",Re),p.addEventListener("sessionend",qe),this.render=function(e,t){if(t!==0[0]&&t.isCamera!==!0){i("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(fe===!0)return;const o=p.enabled===!0&&p.isPresenting===!0,n=C!==null&&(h===null||o)&&C.begin(s,h);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),p.enabled===!0&&p.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(p.cameraAutoUpdate===!0&&p.updateCamera(t),t=p.getCamera()),e.isScene===!0&&e.onBeforeRender(s,e,t,h),u=ae.get(e,T.length),u.init(t),T.push(u),oe.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ye.setFromProjectionMatrix(oe,Ce,t.reversedDepth),ve=this.localClippingEnabled,z=w.init(this.clippingPlanes,ve),v=te.get(e,W.length),v.init(),W.push(v),p.enabled===!0&&p.isPresenting===!0){const e=s.xr.getDepthSensingMesh();e!==null&&me(e,t,-(1/0),s.sortObjects)}me(e,t,0,s.sortObjects),v.finish(),s.sortObjects===!0&&v.sort(Ae,ke),q=p.enabled===!1||p.isPresenting===!1||p.hasDepthSensing()===!1,q&&_.addToRenderList(v,e),this.info.render.frame++,z===!0&&w.beginShadows();const a=u.state.shadowsArray;O.render(a,e,t),z===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset();const r=n&&C.hasRenderPass();if(r===!1){const s=v.opaque,n=v.transmissive;if(u.setupLights(),t.isArrayCamera){const o=t.cameras;if(n.length>0)for(let t=0,i=o.length;t<i;t++){const a=o[t];He(s,n,e,a)}q&&_.render(e);for(let t=0,s=o.length;t<s;t++){const n=o[t];Ie(v,e,n,n.viewport)}}else n.length>0&&He(s,n,e,t),q&&_.render(e),Ie(v,e,t)}h!==null&&ee===0&&(l.updateMultisampleRenderTarget(h),l.updateRenderTargetMipmap(h)),n&&C.end(s),e.isScene===!0&&e.onAfterRender(s,e,t),F.resetDefaultState(),P=-1,R=null,T.pop(),T.length>0?(u=T[T.length-1],z===!0&&w.setGlobalState(s.clippingPlanes,u.state.camera)):u=null,W.pop(),W.length>0?v=W[W.length-1]:v=null};function me(e,t,n,s){if(e.visible===!1)return;const i=e.layers.test(t.layers);if(i)if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)u.pushLight(e),e.castShadow&&u.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ye.intersectsSprite(e)){s&&L.setFromMatrixPosition(e.matrixWorld).applyMatrix4(oe);const o=$.update(e),t=e.material;t.visible&&v.push(e,o,t,n,L.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ye.intersectsObject(e))){const t=$.update(e),o=e.material;if(s&&(e.boundingSphere!==0[0]?(e.boundingSphere===null&&e.computeBoundingSphere(),L.copy(e.boundingSphere.center)):(t.boundingSphere===null&&t.computeBoundingSphere(),L.copy(t.boundingSphere.center)),L.applyMatrix4(e.matrixWorld).applyMatrix4(oe)),Array.isArray(o)){const s=t.groups;for(let i=0,c=s.length;i<c;i++){const r=s[i],a=o[r.materialIndex];a&&a.visible&&v.push(e,t,a,n,L.z,r)}}else o.visible&&v.push(e,t,o,n,L.z,null)}const o=e.children;for(let e=0,i=o.length;e<i;e++)me(o[e],t,n,s)}function Ie(e,t,n,o){const{opaque:i,transmissive:a,transparent:c}=e;u.setupLightsView(n),z===!0&&w.setGlobalState(s.clippingPlanes,n),o&&r.viewport(E.copy(o)),i.length>0&&J(i,t,n),a.length>0&&J(a,t,n),c.length>0&&J(c,t,n),r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),r.setPolygonOffset(!1)}function He(e,t,n,o){const c=n.isScene===!0?n.overrideMaterial:null;if(c!==null)return;if(u.state.transmissionRenderTarget[o.id]===0[0]){const e=g.has("EXT_color_buffer_half_float")||g.has("EXT_color_buffer_float");u.state.transmissionRenderTarget[o.id]=new Te(1,1,{generateMipmaps:!0,type:e?Ge:se,minFilter:Pe,samples:j.samples,stencilBuffer:pe,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:f.workingColorSpace})}const i=u.state.transmissionRenderTarget[o.id],a=o.viewport||E;i.setSize(a.z*s.transmissionResolutionScale,a.w*s.transmissionResolutionScale);const d=s.getRenderTarget(),h=s.getActiveCubeFace(),m=s.getActiveMipmapLevel();s.setRenderTarget(i),s.getClearColor(Se),je=s.getClearAlpha(),je<1&&s.setClearColor(16777215,.5),s.clear(),q&&_.render(n);const p=s.toneMapping;s.toneMapping=De;const r=o.viewport;if(o.viewport!==0[0]&&(o.viewport=0[0]),u.setupLightsView(o),z===!0&&w.setGlobalState(s.clippingPlanes,o),J(e,n,o),l.updateMultisampleRenderTarget(i),l.updateRenderTargetMipmap(i),g.has("WEBGL_multisampled_render_to_texture")===!1){let e=!1;for(let i=0,r=t.length;i<r;i++){const c=t[i],{object:a,geometry:l,material:s,group:d}=c;if(s.side===be&&a.layers.test(o.layers)){const t=s.side;s.side=X,s.needsUpdate=!0,Oe(a,n,o,l,s,d),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(l.updateMultisampleRenderTarget(i),l.updateRenderTargetMipmap(i))}s.setRenderTarget(d,h,m),s.setClearColor(Se,je),r!==0[0]&&(o.viewport=r),s.toneMapping=p}function J(e,t,n){const s=t.isScene===!0?t.overrideMaterial:null;for(let o=0,c=e.length;o<c;o++){const a=e[o],{object:r,geometry:l,group:d}=a;let i=a.material;i.allowOverride===!0&&s!==null&&(i=s),r.layers.test(n.layers)&&Oe(r,t,n,l,i,d)}}function Oe(e,t,n,o,i,a){e.onBeforeRender(s,t,n,o,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(s,t,n,o,e,a),i.transparent===!0&&i.side===be&&i.forceSinglePass===!1?(i.side=X,i.needsUpdate=!0,s.renderBufferDirect(n,t,o,i,e,a),i.side=Qe,i.needsUpdate=!0,s.renderBufferDirect(n,t,o,i,e,a),i.side=be):s.renderBufferDirect(n,t,o,i,e,a),e.onAfterRender(s,t,n,o,i,a)}function ie(e,t,n){t.isScene!==!0&&(t=ce);const i=c.get(e),o=u.state.lights,f=u.state.shadowsArray,m=o.state.version,r=A.getParameters(e,o.state,f,t,n),h=A.getProgramCacheKey(r);let d=i.programs;i.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,i.fog=t.fog;const p=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;i.envMap=V.get(e.envMap||i.environment,p),i.envMapRotation=i.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,d===0[0]&&(e.addEventListener("dispose",Ke),d=new Map,i.programs=d);let l=d.get(h);if(l!==0[0]){if(i.currentProgram===l&&i.lightsStateVersion===m)return xe(e,r),l}else r.uniforms=A.getUniforms(e),e.onBeforeCompile(r,s),l=A.acquireProgram(r,h),d.set(h,l),i.uniforms=r.uniforms;const a=i.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(a.clippingPlanes=w.uniform),xe(e,r),i.needsLights=mt(e),i.lightsStateVersion=m,i.needsLights&&(a.ambientLightColor.value=o.state.ambient,a.lightProbe.value=o.state.probe,a.directionalLights.value=o.state.directional,a.directionalLightShadows.value=o.state.directionalShadow,a.spotLights.value=o.state.spot,a.spotLightShadows.value=o.state.spotShadow,a.rectAreaLights.value=o.state.rectArea,a.ltc_1.value=o.state.rectAreaLTC1,a.ltc_2.value=o.state.rectAreaLTC2,a.pointLights.value=o.state.point,a.pointLightShadows.value=o.state.pointShadow,a.hemisphereLights.value=o.state.hemi,a.directionalShadowMatrix.value=o.state.directionalShadowMatrix,a.spotLightMatrix.value=o.state.spotLightMatrix,a.spotLightMap.value=o.state.spotLightMap,a.pointShadowMatrix.value=o.state.pointShadowMatrix),i.currentProgram=l,i.uniformsList=null,l}function Me(e){if(e.uniformsList===null){const t=e.currentProgram.getUniforms();e.uniformsList=Os.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function xe(e,t){const n=c.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ut(e,t,o,i,a){t.isScene!==!0&&(t=ce),l.resetTextureUnits();const _=t.fog,$=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?t.environment:null,B=h===null?s.outputColorSpace:h.isXRRenderTarget===!0?h.texture.colorSpace:H,I=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,L=V.get(i.envMap||$,I),N=i.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,D=!!o.attributes.tangent&&(!!i.normalMap||i.anisotropy>0),T=!!o.morphAttributes.position,F=!!o.morphAttributes.normal,M=!!o.morphAttributes.color;let C=De;i.toneMapped&&(h===null||h.isXRRenderTarget===!0)&&(C=s.toneMapping);const E=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,A=E!==0[0]?E.length:0,d=c.get(i),v=u.state.lights;if(z===!0&&(ve===!0||e!==R)){const t=e===R&&i.id===P;w.setState(i,e,t)}let m=!1;i.version===d.__version?d.needsLights&&d.lightsStateVersion!==v.state.version?m=!0:d.outputColorSpace!==B?m=!0:a.isBatchedMesh&&d.batching===!1?m=!0:!a.isBatchedMesh&&d.batching===!0?m=!0:a.isBatchedMesh&&d.batchingColor===!0&&a.colorTexture===null?m=!0:a.isBatchedMesh&&d.batchingColor===!1&&a.colorTexture!==null?m=!0:a.isInstancedMesh&&d.instancing===!1?m=!0:!a.isInstancedMesh&&d.instancing===!0?m=!0:a.isSkinnedMesh&&d.skinning===!1?m=!0:!a.isSkinnedMesh&&d.skinning===!0?m=!0:a.isInstancedMesh&&d.instancingColor===!0&&a.instanceColor===null?m=!0:a.isInstancedMesh&&d.instancingColor===!1&&a.instanceColor!==null?m=!0:a.isInstancedMesh&&d.instancingMorph===!0&&a.morphTexture===null?m=!0:a.isInstancedMesh&&d.instancingMorph===!1&&a.morphTexture!==null?m=!0:d.envMap!==L?m=!0:i.fog===!0&&d.fog!==_?m=!0:d.numClippingPlanes!==0[0]&&(d.numClippingPlanes!==w.numPlanes||d.numIntersection!==w.numIntersection)?m=!0:d.vertexAlphas!==N?m=!0:d.vertexTangents!==D?m=!0:d.morphTargets!==T?m=!0:d.morphNormals!==F?m=!0:d.morphColors!==M?m=!0:d.toneMapping!==C?m=!0:d.morphTargetsCount!==A&&(m=!0):(m=!0,d.__version=i.version);let g=d.currentProgram;m===!0&&(g=ie(i,t,a));let k=!1,b=!1,x=!1;const f=g.getUniforms(),p=d.uniforms;if(r.useProgram(g.program)&&(k=!0,b=!0,x=!0),i.id!==P&&(P=i.id,b=!0),k||R!==e){const s=r.buffers.depth.getReversed();s&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),f.setValue(n,"projectionMatrix",e.projectionMatrix),f.setValue(n,"viewMatrix",e.matrixWorldInverse);const t=f.map.cameraPosition;t!==0[0]&&t.setValue(n,dt.setFromMatrixPosition(e.matrixWorld)),j.logarithmicDepthBuffer&&f.setValue(n,"logDepthBufFC",2/(Math.log(e.far+1)/Math.LN2)),(i.isMeshPhongMaterial||i.isMeshToonMaterial||i.isMeshLambertMaterial||i.isMeshBasicMaterial||i.isMeshStandardMaterial||i.isShaderMaterial)&&f.setValue(n,"isOrthographic",e.isOrthographicCamera===!0),R!==e&&(R=e,b=!0,x=!0)}if(d.needsLights&&(v.state.directionalShadowMap.length>0&&f.setValue(n,"directionalShadowMap",v.state.directionalShadowMap,l),v.state.spotShadowMap.length>0&&f.setValue(n,"spotShadowMap",v.state.spotShadowMap,l),v.state.pointShadowMap.length>0&&f.setValue(n,"pointShadowMap",v.state.pointShadowMap,l)),a.isSkinnedMesh){f.setOptional(n,a,"bindMatrix"),f.setOptional(n,a,"bindMatrixInverse");const e=a.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),f.setValue(n,"boneTexture",e.boneTexture,l))}a.isBatchedMesh&&(f.setOptional(n,a,"batchingTexture"),f.setValue(n,"batchingTexture",a._matricesTexture,l),f.setOptional(n,a,"batchingIdTexture"),f.setValue(n,"batchingIdTexture",a._indirectTexture,l),f.setOptional(n,a,"batchingColorTexture"),a._colorsTexture!==null&&f.setValue(n,"batchingColorTexture",a._colorsTexture,l));const O=o.morphAttributes;if((O.position!==0[0]||O.normal!==0[0]||O.color!==0[0])&&ze.update(a,o,g),(b||d.receiveShadow!==a.receiveShadow)&&(d.receiveShadow=a.receiveShadow,f.setValue(n,"receiveShadow",a.receiveShadow)),(i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial)&&i.envMap===null&&t.environment!==null&&(p.envMapIntensity.value=t.environmentIntensity),p.dfgLUT!==0[0]&&(p.dfgLUT.value=m6()),b&&(f.setValue(n,"toneMappingExposure",s.toneMappingExposure),d.needsLights&&ht(p,x),_&&i.fog===!0&&ge.refreshFogUniforms(p,_),ge.refreshMaterialUniforms(p,i,y,S,u.state.transmissionRenderTarget[e.id]),Os.upload(n,Me(d),p,l)),i.isShaderMaterial&&i.uniformsNeedUpdate===!0&&(Os.upload(n,Me(d),p,l),i.uniformsNeedUpdate=!1),i.isSpriteMaterial&&f.setValue(n,"center",a.center),f.setValue(n,"modelViewMatrix",a.modelViewMatrix),f.setValue(n,"normalMatrix",a.normalMatrix),f.setValue(n,"modelMatrix",a.matrixWorld),i.isShaderMaterial||i.isRawShaderMaterial){const e=i.uniformsGroups;for(let t=0,s=e.length;t<s;t++){const n=e[t];Z.update(n,g),Z.bind(n,g)}}return g}function ht(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return h},this.setRenderTargetTextures=function(e,t,n){const s=c.get(e);s.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,s.__autoAllocateDepthBuffer===!1&&(s.__useRenderToTexture=!1),c.get(e.texture).__webglTexture=t,c.get(e.depthTexture).__webglTexture=s.__autoAllocateDepthBuffer?0[0]:n,s.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){const n=c.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===0[0]};const ft=n.createFramebuffer();this.setRenderTarget=function(e,t=0,s=0){h=e,ue=t,ee=s;let o=null,i=!1,a=!1;if(e){const u=c.get(e);if(u.__useDefaultFramebuffer!==0[0]){r.bindFramebuffer(n.FRAMEBUFFER,u.__webglFramebuffer),E.copy(e.viewport),I.copy(e.scissor),K=e.scissorTest,r.viewport(E),r.scissor(I),r.setScissorTest(K),P=-1;return}if(u.__webglFramebuffer===0[0])l.setupRenderTarget(e);else if(u.__hasExternalTextures)l.rebindTextures(e,c.get(e.texture).__webglTexture,c.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){const t=e.depthTexture;if(u.__boundDepthTexture!==t){if(t!==null&&c.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(e)}}const h=e.texture;(h.isData3DTexture||h.isDataArrayTexture||h.isCompressedArrayTexture)&&(a=!0);const d=c.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(Array.isArray(d[t])?o=d[t][s]:o=d[t],i=!0):e.samples>0&&l.useMultisampledRTT(e)===!1?o=c.get(e).__webglMultisampledFramebuffer:Array.isArray(d)?o=d[s]:o=d,E.copy(e.viewport),I.copy(e.scissor),K=e.scissorTest}else E.copy(Q).multiplyScalar(y).floor(),I.copy(U).multiplyScalar(y).floor(),K=de;s!==0&&(o=ft);const d=r.bindFramebuffer(n.FRAMEBUFFER,o);if(d&&r.drawBuffers(e,o),r.viewport(E),r.scissor(I),r.setScissorTest(K),i){const o=c.get(e.texture);n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+t,o.__webglTexture,s)}else if(a){const o=t;for(let t=0;t<e.textures.length;t++){const i=c.get(e.textures[t]);n.framebufferTextureLayer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+t,i.__webglTexture,s,o)}}else if(e!==null&&s!==0){const t=c.get(e.texture);n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,t.__webglTexture,s)}P=-1},this.readRenderTargetPixels=function(e,t,s,o,a,l,d,u=0){if(!e||!e.isWebGLRenderTarget){i("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let m=c.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&d!==0[0]&&(m=m[d]),m){r.bindFramebuffer(n.FRAMEBUFFER,m);try{const r=e.textures[u],c=r.format,d=r.type;if(e.textures.length>1&&n.readBuffer(n.COLOR_ATTACHMENT0+u),!j.textureFormatReadable(c)){i("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(d)){i("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}t>=0&&t<=e.width-o&&s>=0&&s<=e.height-a&&n.readPixels(t,s,o,a,k.convert(c),k.convert(d),l)}finally{const e=h!==null?c.get(h).__webglFramebuffer:null;r.bindFramebuffer(n.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,s,o,i,a,l,d=0){if(!e||!e.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let u=c.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&l!==0[0]&&(u=u[l]),u){if(t>=0&&t<=e.width-o&&s>=0&&s<=e.height-i){r.bindFramebuffer(n.FRAMEBUFFER,u);const m=e.textures[d],f=m.format,p=m.type;if(e.textures.length>1&&n.readBuffer(n.COLOR_ATTACHMENT0+d),!j.textureFormatReadable(f))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(p))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const l=n.createBuffer();n.bindBuffer(n.PIXEL_PACK_BUFFER,l),n.bufferData(n.PIXEL_PACK_BUFFER,a.byteLength,n.STREAM_READ),n.readPixels(t,s,o,i,k.convert(f),k.convert(p),0);const v=h!==null?c.get(h).__webglFramebuffer:null;r.bindFramebuffer(n.FRAMEBUFFER,v);const g=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);return n.flush(),await Dp(n,g,4),n.bindBuffer(n.PIXEL_PACK_BUFFER,l),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,a),n.deleteBuffer(l),n.deleteSync(g),a}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(e,t=null,s=0){const o=2**-s,i=Math.floor(e.image.width*o),a=Math.floor(e.image.height*o),c=t!==null?t.x:0,d=t!==null?t.y:0;l.setTexture2D(e,0),n.copyTexSubImage2D(n.TEXTURE_2D,s,0,0,c,d,i,a),r.unbindTexture()};const pt=n.createFramebuffer(),gt=n.createFramebuffer();this.copyTextureToTexture=function(e,t,s=null,o=null,i=0,a=0){let h,u,g,b,j,_,m,f,v;const d=e.isCompressedTexture?e.mipmaps[a]:e.image;if(s!==null)h=s.max.x-s.min.x,u=s.max.y-s.min.y,g=s.isBox3?s.max.z-s.min.z:1,b=s.min.x,j=s.min.y,_=s.isBox3?s.min.z:0;else{const t=2**-i;h=Math.floor(d.width*t),u=Math.floor(d.height*t),e.isDataArrayTexture?g=d.depth:e.isData3DTexture?g=Math.floor(d.depth*t):g=1,b=0,j=0,_=0}o!==null?(m=o.x,f=o.y,v=o.z):(m=0,f=0,v=0);const y=k.convert(t.format),w=k.convert(t.type);let p;t.isData3DTexture?(l.setTexture3D(t,0),p=n.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(l.setTexture2DArray(t,0),p=n.TEXTURE_2D_ARRAY):(l.setTexture2D(t,0),p=n.TEXTURE_2D),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,t.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,t.unpackAlignment);const C=n.getParameter(n.UNPACK_ROW_LENGTH),E=n.getParameter(n.UNPACK_IMAGE_HEIGHT),A=n.getParameter(n.UNPACK_SKIP_PIXELS),S=n.getParameter(n.UNPACK_SKIP_ROWS),M=n.getParameter(n.UNPACK_SKIP_IMAGES);n.pixelStorei(n.UNPACK_ROW_LENGTH,d.width),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,d.height),n.pixelStorei(n.UNPACK_SKIP_PIXELS,b),n.pixelStorei(n.UNPACK_SKIP_ROWS,j),n.pixelStorei(n.UNPACK_SKIP_IMAGES,_);const x=e.isDataArrayTexture||e.isData3DTexture,O=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){const s=c.get(e),o=c.get(t),l=c.get(s.__renderTarget),d=c.get(o.__renderTarget);r.bindFramebuffer(n.READ_FRAMEBUFFER,l.__webglFramebuffer),r.bindFramebuffer(n.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let s=0;s<g;s++)x&&(n.framebufferTextureLayer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,c.get(e).__webglTexture,i,_+s),n.framebufferTextureLayer(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,c.get(t).__webglTexture,a,v+s)),n.blitFramebuffer(b,j,h,u,m,f,h,u,n.DEPTH_BUFFER_BIT,n.NEAREST);r.bindFramebuffer(n.READ_FRAMEBUFFER,null),r.bindFramebuffer(n.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||c.has(e)){const s=c.get(e),o=c.get(t);r.bindFramebuffer(n.READ_FRAMEBUFFER,pt),r.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt);for(let e=0;e<g;e++)x?n.framebufferTextureLayer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,s.__webglTexture,i,_+e):n.framebufferTexture2D(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,s.__webglTexture,i),O?n.framebufferTextureLayer(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,o.__webglTexture,a,v+e):n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,o.__webglTexture,a),i!==0?n.blitFramebuffer(b,j,h,u,m,f,h,u,n.COLOR_BUFFER_BIT,n.NEAREST):O?n.copyTexSubImage3D(p,a,m,f,v+e,b,j,h,u):n.copyTexSubImage2D(p,a,m,f,b,j,h,u);r.bindFramebuffer(n.READ_FRAMEBUFFER,null),r.bindFramebuffer(n.DRAW_FRAMEBUFFER,null)}else O?e.isDataTexture||e.isData3DTexture?n.texSubImage3D(p,a,m,f,v,h,u,g,y,w,d.data):t.isCompressedArrayTexture?n.compressedTexSubImage3D(p,a,m,f,v,h,u,g,y,d.data):n.texSubImage3D(p,a,m,f,v,h,u,g,y,w,d):e.isDataTexture?n.texSubImage2D(n.TEXTURE_2D,a,m,f,h,u,y,w,d.data):e.isCompressedTexture?n.compressedTexSubImage2D(n.TEXTURE_2D,a,m,f,d.width,d.height,y,d.data):n.texSubImage2D(n.TEXTURE_2D,a,m,f,h,u,y,w,d);n.pixelStorei(n.UNPACK_ROW_LENGTH,C),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,E),n.pixelStorei(n.UNPACK_SKIP_PIXELS,A),n.pixelStorei(n.UNPACK_SKIP_ROWS,S),n.pixelStorei(n.UNPACK_SKIP_IMAGES,M),a===0&&t.generateMipmaps&&n.generateMipmap(p),r.unbindTexture()},this.initRenderTarget=function(e){c.get(e).__webglFramebuffer===0[0]&&l.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?l.setTextureCube(e,0):e.isData3DTexture?l.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?l.setTexture2DArray(e,0):l.setTexture2D(e,0),r.unbindTexture()},this.resetState=function(){ue=0,ee=0,h=null,r.reset(),F.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ce}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=f._getDrawingBufferColorSpace(e),t.unpackColorSpace=f._getUnpackColorSpace()}};function B0(e,t){if(t===Lu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Hi||t===jc){let n=e.getIndex();if(n===null){const t=[],s=e.getAttribute("position");if(s!==0[0]){for(let e=0;e<s.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const o=n.count-2,s=[];if(t===Hi)for(let e=1;e<=o;e++)s.push(n.getX(0)),s.push(n.getX(e)),s.push(n.getX(e+1));else for(let e=0;e<o;e++)e%2===0?(s.push(n.getX(e)),s.push(n.getX(e+1)),s.push(n.getX(e+2))):(s.push(n.getX(e+2)),s.push(n.getX(e+1)),s.push(n.getX(e)));s.length/3!==o&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=e.clone();return i.setIndex(s),i.clearGroups(),i}return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function g6(e){const n=new Map,s=new Map,t=e.clone();return N0(e,t,function(e,t){n.set(t,e),s.set(e,t)}),t.traverse(function(e){if(!e.isSkinnedMesh)return;const t=e,o=n.get(e),i=o.skeleton.bones;t.skeleton=o.skeleton.clone(),t.bindMatrix.copy(o.bindMatrix),t.skeleton.bones=i.map(function(e){return s.get(e)}),t.bind(t.skeleton,t.bindMatrix)}),t}function N0(e,t,n){n(e,t);for(let s=0;s<e.children.length;s++)N0(e.children[s],t.children[s],n)}T0=class extends It{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new _0(e)}),this.register(function(e){return new b0(e)}),this.register(function(e){return new t0(e)}),this.register(function(e){return new U4(e)}),this.register(function(e){return new B4(e)}),this.register(function(e){return new p0(e)}),this.register(function(e){return new d0(e)}),this.register(function(e){return new l0(e)}),this.register(function(e){return new c0(e)}),this.register(function(e){return new w0(e)}),this.register(function(e){return new a0(e)}),this.register(function(e){return new v0(e)}),this.register(function(e){return new o0(e)}),this.register(function(e){return new i0(e)}),this.register(function(e){return new E0(e)}),this.register(function(e){return new ml(e,h.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new ml(e,h.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new z4(e)})}load(e,t,n,s){const i=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const t=Ln.extractUrlBase(e);a=Ln.resolveURL(t,this.path)}else a=Ln.extractUrlBase(e);this.manager.itemStart(e);const r=function(t){s?s(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},o=new ic(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},r)}catch(e){r(e)}},n,r)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let o;const i={},r={},c=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer){const t=c.decode(new Uint8Array(e,0,4));if(t===fl){try{i[h.KHR_BINARY_GLTF]=new i4(e)}catch(e){s&&s(e);return}o=JSON.parse(i[h.KHR_BINARY_GLTF].content)}else o=JSON.parse(c.decode(e))}else o=e;if(o.asset===0[0]||o.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const a=new x1(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});a.fileLoader.setRequestHeader(this.requestHeader);for(let t=0;t<this.pluginCallbacks.length;t++){const e=this.pluginCallbacks[t](a);e.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),r[e.name]=e,i[e.name]=!0}if(o.extensionsUsed)for(let t=0;t<o.extensionsUsed.length;++t){const e=o.extensionsUsed[t],n=o.extensionsRequired||[];switch(e){case h.KHR_MATERIALS_UNLIT:i[e]=new O0;break;case h.KHR_DRACO_MESH_COMPRESSION:i[e]=new o4(o,this.dracoLoader);break;case h.KHR_TEXTURE_TRANSFORM:i[e]=new n4;break;case h.KHR_MESH_QUANTIZATION:i[e]=new t4;break;default:n.indexOf(e)>=0&&r[e]===0[0]&&console.warn('THREE.GLTFLoader: Unknown extension "'+e+'".')}}a.setExtensions(i),a.setPlugins(r),a.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,o){n.parse(e,t,s,o)})}};function j6(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function C(e,t,n){const s=e.json.materials[t];return s.extensions&&s.extensions[n]?s.extensions[n]:null}h={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},E0=class{constructor(e){this.parser=e,this.name=h.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let s=0,o=e.length;s<o;s++){const n=e[s];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==0[0]&&t._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const o=this.parser,r="light:"+e;let s=o.cache.get(r);if(s)return s;const c=o.json,d=c.extensions&&c.extensions[this.name]||{},u=d.lights||[],t=u[e];let n;const i=new a(16777215);t.color!==0[0]&&i.setRGB(t.color[0],t.color[1],t.color[2],H);const l=t.range!==0[0]?t.range:0;switch(t.type){case"directional":n=new I0(i),n.target.position.set(0,0,-1),n.add(n.target);break;case"point":n=new R0(i),n.distance=l;break;case"spot":n=new Wr(i),n.distance=l,t.spot=t.spot||{},t.spot.innerConeAngle=t.spot.innerConeAngle!==0[0]?t.spot.innerConeAngle:0,t.spot.outerConeAngle=t.spot.outerConeAngle!==0[0]?t.spot.outerConeAngle:Math.PI/4,n.angle=t.spot.outerConeAngle,n.penumbra=1-t.spot.innerConeAngle/t.spot.outerConeAngle,n.target.position.set(0,0,-1),n.add(n.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+t.type)}return n.position.set(0,0,0),Ye(n,t),t.intensity!==0[0]&&(n.intensity=t.intensity),n.name=o.createUniqueName(t.name||"light_"+e),s=Promise.resolve(n),o.cache.add(r,s),s}getDependency(e,t){if(e!=="light")return;return this._loadLight(t)}createNodeAttachment(e){const o=this,n=this.parser,i=n.json,s=i.nodes[e],a=s.extensions&&s.extensions[this.name]||{},t=a.light;return t===0[0]?null:this._loadLight(t).then(function(e){return n._getNodeRef(o.cache,t,e)})}},O0=class{constructor(){this.name=h.KHR_MATERIALS_UNLIT}getMaterialType(){return rt}extendParams(e,t,n){const o=[];e.color=new a(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const t=s.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],H),e.opacity=t[3]}s.baseColorTexture!==0[0]&&o.push(n.assignTexture(e,"map",s.baseColorTexture,M))}return Promise.all(o)}},w0=class{constructor(e){this.parser=e,this.name=h.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);return n===null?Promise.resolve():(n.emissiveStrength!==0[0]&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve())}},_0=class{constructor(e){this.parser=e,this.name=h.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=C(this.parser,e,this.name);return t!==null?ke:null}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==0[0]&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==0[0]&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==0[0]&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==0[0]&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==0[0]&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==0[0])){const e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new r(e,e)}return Promise.all(s)}},b0=class{constructor(e){this.parser=e,this.name=h.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=C(this.parser,e,this.name);return t!==null?ke:null}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);return n===null?Promise.resolve():(t.dispersion=n.dispersion!==0[0]?n.dispersion:0,Promise.resolve())}},v0=class{constructor(e){this.parser=e,this.name=h.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=C(this.parser,e,this.name);return t!==null?ke:null}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==0[0]&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==0[0]&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==0[0]&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===0[0]&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==0[0]&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==0[0]&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==0[0]&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},p0=class{constructor(e){this.parser=e,this.name=h.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=C(this.parser,e,this.name);return t!==null?ke:null}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new a(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==0[0]){const e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],H)}return n.sheenRoughnessFactor!==0[0]&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==0[0]&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,M)),n.sheenRoughnessTexture!==0[0]&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},d0=class{constructor(e){this.parser=e,this.name=h.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=C(this.parser,e,this.name);return t!==null?ke:null}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==0[0]&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==0[0]&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},l0=class{constructor(e){this.parser=e,this.name=h.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=C(this.parser,e,this.name);return t!==null?ke:null}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);if(n===null)return Promise.resolve();const o=[];t.thickness=n.thicknessFactor!==0[0]?n.thicknessFactor:0,n.thicknessTexture!==0[0]&&o.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=(new a).setRGB(s[0],s[1],s[2],H),Promise.all(o)}},c0=class{constructor(e){this.parser=e,this.name=h.KHR_MATERIALS_IOR}getMaterialType(e){const t=C(this.parser,e,this.name);return t!==null?ke:null}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior!==0[0]?n.ior:1.5,Promise.resolve())}},a0=class{constructor(e){this.parser=e,this.name=h.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=C(this.parser,e,this.name);return t!==null?ke:null}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==0[0]?n.specularFactor:1,n.specularTexture!==0[0]&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const o=n.specularColorFactor||[1,1,1];return t.specularColor=(new a).setRGB(o[0],o[1],o[2],H),n.specularColorTexture!==0[0]&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,M)),Promise.all(s)}},i0=class{constructor(e){this.parser=e,this.name=h.EXT_MATERIALS_BUMP}getMaterialType(e){const t=C(this.parser,e,this.name);return t!==null?ke:null}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==0[0]?n.bumpFactor:1,n.bumpTexture!==0[0]&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},o0=class{constructor(e){this.parser=e,this.name=h.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=C(this.parser,e,this.name);return t!==null?ke:null}extendMaterialParams(e,t){const n=C(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==0[0]&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==0[0]&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==0[0]&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},t0=class{constructor(e){this.parser=e,this.name=h.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const i=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,i.source,o)}},U4=class{constructor(e){this.parser=e,this.name=h.EXT_TEXTURE_WEBP}loadTexture(e){const s=this.name,t=this.parser,o=t.json,n=o.textures[e];if(!n.extensions||!n.extensions[s])return null;const i=n.extensions[s],a=o.images[i.source];let r=t.textureLoader;if(a.uri){const e=t.options.manager.getHandler(a.uri);e!==null&&(r=e)}return t.loadTextureImage(e,i.source,r)}},B4=class{constructor(e){this.parser=e,this.name=h.EXT_TEXTURE_AVIF}loadTexture(e){const s=this.name,t=this.parser,o=t.json,n=o.textures[e];if(!n.extensions||!n.extensions[s])return null;const i=n.extensions[s],a=o.images[i.source];let r=t.textureLoader;if(a.uri){const e=t.options.manager.getHandler(a.uri);e!==null&&(r=e)}return t.loadTextureImage(e,i.source,r)}},ml=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const e=n.extensions[this.name],o=this.parser.getDependency("buffer",e.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(t){const a=e.byteOffset||0,r=e.byteLength||0,n=e.count,o=e.byteStride,i=new Uint8Array(t,a,r);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(n,o,i,e.mode,e.filter).then(function(e){return e.buffer}):s.ready.then(function(){const t=new ArrayBuffer(n*o);return s.decodeGltfBuffer(new Uint8Array(t),n,o,i,e.mode,e.filter),t})})}return null}},z4=class{constructor(e){this.name=h.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(t){const i=this.parser.json,s=i.nodes[t];if(!s.extensions||!s.extensions[this.name]||s.mesh===0[0])return null;const r=i.meshes[s.mesh];for(const e of r.primitives)if(e.mode!==ae.TRIANGLES&&e.mode!==ae.TRIANGLE_STRIP&&e.mode!==ae.TRIANGLE_FAN&&e.mode!==0[0])return null;const c=s.extensions[this.name],a=c.attributes,o=[],n={};for(const e in a)o.push(this.parser.getDependency("accessor",a[e]).then(t=>(n[e]=t,n[e])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(t=>{const s=t.pop(),a=s.isGroup?s.children:[s],i=t[0].count,o=[];for(const s of a){const u=new d,r=new e,c=new Je,l=new e(1,1,1),t=new q1(s.geometry,s.material,i);for(let e=0;e<i;e++)n.TRANSLATION&&r.fromBufferAttribute(n.TRANSLATION,e),n.ROTATION&&c.fromBufferAttribute(n.ROTATION,e),n.SCALE&&l.fromBufferAttribute(n.SCALE,e),t.setMatrixAt(e,u.compose(r,c,l));for(const e in n)if(e==="_COLOR_0"){const s=n[e];t.instanceColor=new oi(s.array,s.itemSize,s.normalized)}else e!=="TRANSLATION"&&e!=="ROTATION"&&e!=="SCALE"&&s.geometry.setAttribute(e,n[e]);O.prototype.copy.call(t,s),this.parser.assignFinalMaterial(t),o.push(t)}return s.isGroup?(s.clear(),s.add(...o),s):o[0]}))}},fl="glTF",gs=12,vl={JSON:1313821514,BIN:5130562},i4=class{constructor(e){this.name=h.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,gs),s=new TextDecoder;if(this.header={magic:s.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==fl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-gs,o=new DataView(e,gs);let t=0;for(;t<i;){const n=o.getUint32(t,!0);t+=4;const i=o.getUint32(t,!0);if(t+=4,i===vl.JSON){const o=new Uint8Array(e,gs+t,n);this.content=s.decode(o)}else if(i===vl.BIN){const s=gs+t;this.body=e.slice(s,s+n)}t+=n}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},o4=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=h.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const a=this.json,r=this.dracoLoader,c=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,s={},o={},i={};for(const e in n){const t=fi[e]||e.toLowerCase();s[t]=n[e]}for(const t in e.attributes){const s=fi[t]||t.toLowerCase();if(n[t]!==0[0]){const n=a.accessors[e.attributes[t]],r=wn[n.componentType];i[s]=r.name,o[s]=n.normalized===!0}}return t.getDependency("bufferView",c).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(const t in e.attributes){const s=e.attributes[t],n=o[t];n!==0[0]&&(s.normalized=n)}t(e)},s,i,H,n)})})}},n4=class{constructor(){this.name=h.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===0[0]||t.texCoord===e.channel)&&t.offset===0[0]&&t.rotation===0[0]&&t.scale===0[0]?e:(e=e.clone(),t.texCoord!==0[0]&&(e.channel=t.texCoord),t.offset!==0[0]&&e.offset.fromArray(t.offset),t.rotation!==0[0]&&(e.rotation=t.rotation),t.scale!==0[0]&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},t4=class{constructor(){this.name=h.KHR_MESH_QUANTIZATION}},wl=class extends en{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const n=this.resultBuffer,s=this.sampleValues,t=this.valueSize,o=e*t*3+t;for(let e=0;e!==t;e++)n[e]=s[o+e];return n}interpolate_(e,t,n,s){const h=this.resultBuffer,a=this.sampleValues,o=this.valueSize,g=o*2,d=o*3,l=s-t,i=(n-t)/l,r=i*i,u=r*i,c=e*d,m=c-d,f=-2*u+3*r,p=u-r,v=1-f,b=p-r+i;for(let e=0;e!==o;e++){const t=a[m+e+o],n=a[m+e+g]*l,s=a[c+e+o],i=a[c+e]*l;h[e]=v*t+b*n+f*s+p*i}return h}},e4=new Je,Z1=class extends wl{interpolate_(e,t,n,s){const o=super.interpolate_(e,t,n,s);return e4.fromArray(o).normalize().toArray(o),o}},ae={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},wn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cl={9728:E,9729:A,9984:xr,9985:po,9986:Rn,9987:Pe},El={33071:xe,33648:yo,10497:Cn},bi={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fi={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vt={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},D1={CUBICSPLINE:0[0],LINEAR:An,STEP:os},di={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ip(e){return e.DefaultMaterial===0[0]&&(e.DefaultMaterial=new Yi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Qe})),e.DefaultMaterial}function dn(e,t,n){for(const s in n.extensions)e[s]===0[0]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=n.extensions[s])}function Ye(e,t){t.extras!==0[0]&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function cp(e,t,n){let s=!1,o=!1,i=!1;for(let e=0,a=t.length;e<a;e++){const n=t[e];if(n.POSITION!==0[0]&&(s=!0),n.NORMAL!==0[0]&&(o=!0),n.COLOR_0!==0[0]&&(i=!0),s&&o&&i)break}if(!s&&!o&&!i)return Promise.resolve(e);const a=[],r=[],c=[];for(let d=0,u=t.length;d<u;d++){const l=t[d];if(s){const t=l.POSITION!==0[0]?n.getDependency("accessor",l.POSITION):e.attributes.position;a.push(t)}if(o){const t=l.NORMAL!==0[0]?n.getDependency("accessor",l.NORMAL):e.attributes.normal;r.push(t)}if(i){const t=l.COLOR_0!==0[0]?n.getDependency("accessor",l.COLOR_0):e.attributes.color;c.push(t)}}return Promise.all([Promise.all(a),Promise.all(r),Promise.all(c)]).then(function(t){const n=t[0],a=t[1],r=t[2];return s&&(e.morphAttributes.position=n),o&&(e.morphAttributes.normal=a),i&&(e.morphAttributes.color=r),e.morphTargetsRelative=!0,e})}function lp(e,t){if(e.updateMorphTargets(),t.weights!==0[0])for(let n=0,s=t.weights.length;n<s;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,s=n.length;t<s;t++)e.morphTargetDictionary[n[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dp(e){let t;const n=e.extensions&&e.extensions[h.KHR_DRACO_MESH_COMPRESSION];if(n?t="draco:"+n.bufferView+":"+n.indices+":"+Wl(n.attributes):t=e.indices+":"+Wl(e.attributes)+":"+e.mode,e.targets!==0[0])for(let n=0,s=e.targets.length;n<s;n++)t+=":"+Wl(e.targets[n]);return t}function Wl(e){let n="";const t=Object.keys(e).sort();for(let s=0,o=t.length;s<o;s++)n+=t[s]+":"+e[t[s]]+";";return n}function Xl(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mp(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data:image\/ktx2/)===0?"image/ktx2":"image/png"}C1=new d,x1=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new j6,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,o=-1,s=!1,i=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){const e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;const t=e.match(/Version\/(\d+)/);o=n&&t?parseInt(t[1],10):-1,s=e.indexOf("Firefox")>-1,i=s?e.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||n&&o<17||s&&i<98?this.textureLoader=new tc(this.options.manager):this.textureLoader=new $0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ic(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(t){const i={scene:t[0][s.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:s.asset,parser:n,userData:{}};return dn(o,i,s),Ye(i,s),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(i)})).then(function(){for(const e of i.scenes)e.updateMatrixWorld();e(i)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,o=t.length;n<o;n++){const s=t[n].joints;for(let t=0,n=s.length;t<n;t++)e[s[t]].isBone=!0}for(let s=0,o=e.length;s<o;s++){const t=e[s];t.mesh!==0[0]&&(this._addNodeRef(this.meshCache,t.mesh),t.skin!==0[0]&&(n[t.mesh].isSkinnedMesh=!0)),t.camera!==0[0]&&this._addNodeRef(this.cameraCache,t.camera)}}_addNodeRef(e,t){if(t===0[0])return;e.refs[t]===0[0]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),o=(e,t)=>{const n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(const[n,s]of e.children.entries())o(s,t.children[n])};return o(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const o=e(t[s]);o&&n.push(o)}return n}getDependency(e,t){const s=e+":"+t;let n=this.cache.get(s);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case"mesh":n=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(s,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(t,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===0[0]&&e===0)return Promise.resolve(this.extensions[h.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(e,o){n.load(Ln.resolveURL(t.uri,s.path),e,0[0],function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){const s=t.byteLength||0,n=t.byteOffset||0;return e.slice(n,n+s)})}loadAccessor(e){const s=this,o=this.json,t=this.json.accessors[e];if(t.bufferView===0[0]&&t.sparse===0[0]){const e=bi[t.type],n=wn[t.componentType],s=t.normalized===!0,o=new n(t.count*e);return Promise.resolve(new V(o,e,s))}const n=[];return t.bufferView!==0[0]?n.push(this.getDependency("bufferView",t.bufferView)):n.push(null),t.sparse!==0[0]&&(n.push(this.getDependency("bufferView",t.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",t.sparse.values.bufferView))),Promise.all(n).then(function(e){const l=e[0],n=bi[t.type],r=wn[t.componentType],d=r.BYTES_PER_ELEMENT,m=d*n,u=t.byteOffset||0,a=t.bufferView!==0[0]?o.bufferViews[t.bufferView].byteStride:0[0],h=t.normalized===!0;let c,i;if(a&&a!==m){const o=Math.floor(u/a),m="InterleavedBuffer:"+t.bufferView+":"+t.componentType+":"+o+":"+t.count;let e=s.cache.get(m);e||(c=new r(l,o*a,t.count*a/d),e=new Qc(c,a/d),s.cache.add(m,e)),i=new Ii(e,n,u%a/d,h)}else l===null?c=new r(t.count*n):c=new r(l,u,t.count*n),i=new V(c,n,h);if(t.sparse!==0[0]){const a=bi.SCALAR,c=wn[t.sparse.indices.componentType],d=t.sparse.indices.byteOffset||0,u=t.sparse.values.byteOffset||0,o=new c(e[1],d,t.sparse.count*a),s=new r(e[2],u,t.sparse.count*n);l!==null&&(i=new V(i.array.slice(),i.itemSize,i.normalized)),i.normalized=!1;for(let e=0,a=o.length;e<a;e++){const t=o[e];if(i.setX(t,s[e*n]),n>=2&&i.setY(t,s[e*n+1]),n>=3&&i.setZ(t,s[e*n+2]),n>=4&&i.setW(t,s[e*n+3]),n>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}i.normalized=h}return i})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e],n=a.source,s=t.images[n];let o=this.textureLoader;if(s.uri){const e=i.manager.getHandler(s.uri);e!==null&&(o=e)}return this.loadTextureImage(e,n,o)}loadTextureImage(e,t,n){const c=this,o=this.json,i=o.textures[e],s=o.images[t],a=(s.uri||s.bufferView)+":"+i.sampler;if(this.textureCache[a])return this.textureCache[a];const r=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=i.name||s.name||"",t.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(t.name=s.uri);const a=o.samplers||{},n=a[i.sampler]||{};return t.magFilter=Cl[n.magFilter]||A,t.minFilter=Cl[n.minFilter]||Pe,t.wrapS=El[n.wrapS]||Cn,t.wrapT=El[n.wrapT]||Cn,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==E&&t.minFilter!==A,c.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[a]=r,r}loadImageSource(e,t){const r=this,c=this.json,l=this.options;if(this.sourceCache[e]!==0[0])return this.sourceCache[e].then(e=>e.clone());const n=c.images[e],o=self.URL||self.webkitURL;let s=n.uri||"",i=!1;if(n.bufferView!==0[0])s=r.getDependency("bufferView",n.bufferView).then(function(e){i=!0;const t=new Blob([e],{type:n.mimeType});return s=o.createObjectURL(t),s});else if(n.uri===0[0])throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const a=Promise.resolve(s).then(function(e){return new Promise(function(n,s){let o=n;t.isImageBitmapLoader===!0&&(o=function(e){const t=new Z(e);t.needsUpdate=!0,n(t)}),t.load(Ln.resolveURL(e,l.path),o,0[0],s)})}).then(function(e){return i===!0&&o.revokeObjectURL(s),Ye(e,n),e.userData.mimeType=n.mimeType||mp(n.uri),e}).catch(function(e){throw console.error("THREE.GLTFLoader: Couldn't load texture",s),e});return this.sourceCache[e]=a,a}assignTexture(e,t,n,s){const o=this;return this.getDependency("texture",n.index).then(function(i){if(!i)return null;if(n.texCoord!==0[0]&&n.texCoord>0&&(i=i.clone(),i.channel=n.texCoord),o.extensions[h.KHR_TEXTURE_TRANSFORM]){const e=n.extensions!==0[0]?n.extensions[h.KHR_TEXTURE_TRANSFORM]:0[0];if(e){const t=o.associations.get(i);i=o.extensions[h.KHR_TEXTURE_TRANSFORM].extendTexture(i,e),o.associations.set(i,t)}}return s!==0[0]&&(i.colorSpace=s),e[t]=i,i})}assignFinalMaterial(e){const n=e.geometry;let t=e.material;const s=n.attributes.tangent===0[0],o=n.attributes.color!==0[0],i=n.attributes.normal===0[0];if(e.isPoints){const n="PointsMaterial:"+t.uuid;let e=this.cache.get(n);e||(e=new Nl,pe.prototype.copy.call(e,t),e.color.copy(t.color),e.map=t.map,e.sizeAttenuation=!1,this.cache.add(n,e)),t=e}else if(e.isLine){const n="LineBasicMaterial:"+t.uuid;let e=this.cache.get(n);e||(e=new Do,pe.prototype.copy.call(e,t),e.color.copy(t.color),e.map=t.map,this.cache.add(n,e)),t=e}if(s||o||i){let n="ClonedMaterial:"+t.uuid+":";s&&(n+="derivative-tangents:"),o&&(n+="vertex-colors:"),i&&(n+="flat-shading:");let e=this.cache.get(n);e||(e=t.clone(),o&&(e.vertexColors=!0),i&&(e.flatShading=!0),s&&(e.normalScale&&(e.normalScale.y*=-1),e.clearcoatNormalScale&&(e.clearcoatNormalScale.y*=-1)),this.cache.add(n,e),this.associations.set(e,this.associations.get(t))),t=e}e.material=t}getMaterialType(){return Yi}loadMaterial(e){const o=this,d=this.json,c=this.extensions,t=d.materials[e];let i;const n={},u=t.extensions||{},s=[];if(u[h.KHR_MATERIALS_UNLIT]){const e=c[h.KHR_MATERIALS_UNLIT];i=e.getMaterialType(),s.push(e.extendParams(n,t,o))}else{const r=t.pbrMetallicRoughness||{};if(n.color=new a(1,1,1),n.opacity=1,Array.isArray(r.baseColorFactor)){const e=r.baseColorFactor;n.color.setRGB(e[0],e[1],e[2],H),n.opacity=e[3]}r.baseColorTexture!==0[0]&&s.push(o.assignTexture(n,"map",r.baseColorTexture,M)),n.metalness=r.metallicFactor!==0[0]?r.metallicFactor:1,n.roughness=r.roughnessFactor!==0[0]?r.roughnessFactor:1,r.metallicRoughnessTexture!==0[0]&&(s.push(o.assignTexture(n,"metalnessMap",r.metallicRoughnessTexture)),s.push(o.assignTexture(n,"roughnessMap",r.metallicRoughnessTexture))),i=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),s.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,n)})))}t.doubleSided===!0&&(n.side=be);const l=t.alphaMode||di.OPAQUE;if(l===di.BLEND?(n.transparent=!0,n.depthWrite=!1):(n.transparent=!1,l===di.MASK&&(n.alphaTest=t.alphaCutoff!==0[0]?t.alphaCutoff:.5)),t.normalTexture!==0[0]&&i!==rt&&(s.push(o.assignTexture(n,"normalMap",t.normalTexture)),n.normalScale=new r(1,1),t.normalTexture.scale!==0[0])){const e=t.normalTexture.scale;n.normalScale.set(e,e)}if(t.occlusionTexture!==0[0]&&i!==rt&&(s.push(o.assignTexture(n,"aoMap",t.occlusionTexture)),t.occlusionTexture.strength!==0[0]&&(n.aoMapIntensity=t.occlusionTexture.strength)),t.emissiveFactor!==0[0]&&i!==rt){const e=t.emissiveFactor;n.emissive=(new a).setRGB(e[0],e[1],e[2],H)}return t.emissiveTexture!==0[0]&&i!==rt&&s.push(o.assignTexture(n,"emissiveMap",t.emissiveTexture,M)),Promise.all(s).then(function(){const s=new i(n);return t.name&&(s.name=t.name),Ye(s,t),o.associations.set(s,{materials:e}),t.extensions&&dn(c,s,t),s})}createUniqueName(e){const t=j.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,o=this.extensions,s=this.primitiveCache;function i(e){return o[h.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return w1(n,e,t)})}const n=[];for(let a=0,l=e.length;a<l;a++){const o=e[a],r=dp(o),c=s[r];if(c)n.push(c.promise);else{let e;o.extensions&&o.extensions[h.KHR_DRACO_MESH_COMPRESSION]?e=i(o):e=w1(new ne,o,t),s[r]={primitive:o,promise:e},n.push(e)}}return Promise.all(n)}loadMesh(e){const n=this,a=this.json,o=this.extensions,t=a.meshes[e],s=t.primitives,i=[];for(let e=0,t=s.length;e<t;e++){const n=s[e].material===0[0]?ip(this.cache):this.getDependency("material",s[e].material);i.push(n)}return i.push(n.loadGeometries(s)),Promise.all(i).then(function(i){const l=i.slice(0,i.length-1),c=i[i.length-1],a=[];for(let h=0,m=c.length;h<m;h++){const d=c[h],r=s[h];let i;const u=l[h];if(r.mode===ae.TRIANGLES||r.mode===ae.TRIANGLE_STRIP||r.mode===ae.TRIANGLE_FAN||r.mode===0[0])i=t.isSkinnedMesh===!0?new z1(d,u):new K(d,u),i.isSkinnedMesh===!0&&i.normalizeSkinWeights(),r.mode===ae.TRIANGLE_STRIP?i.geometry=B0(i.geometry,jc):r.mode===ae.TRIANGLE_FAN&&(i.geometry=B0(i.geometry,Hi));else if(r.mode===ae.LINES)i=new f4(d,u);else if(r.mode===ae.LINE_STRIP)i=new to(d,u);else if(r.mode===ae.LINE_LOOP)i=new p4(d,u);else if(r.mode===ae.POINTS)i=new _4(d,u);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+r.mode);Object.keys(i.geometry.morphAttributes).length>0&&lp(i,t),i.name=n.createUniqueName(t.name||"mesh_"+e),Ye(i,t),r.extensions&&dn(o,i,r),n.assignFinalMaterial(i),a.push(i)}for(let t=0,s=a.length;t<s;t++)n.associations.set(a[t],{meshes:e,primitives:t});if(a.length===1)return t.extensions&&dn(o,a[0],t),a[0];const r=new Et;t.extensions&&dn(o,r,t),n.associations.set(r,{meshes:e});for(let e=0,t=a.length;e<t;e++)r.add(a[e]);return r})}loadCamera(e){let s;const n=this.json.cameras[e],t=n[n.type];if(!t){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?s=new $(nu.radToDeg(t.yfov),t.aspectRatio||1,t.znear||1,t.zfar||2e6):n.type==="orthographic"&&(s=new Pn(-t.xmag,t.xmag,t.ymag,-t.ymag,t.znear,t.zfar)),n.name&&(s.name=this.createUniqueName(n.name)),Ye(s,n),Promise.resolve(s)}loadSkin(e){const t=this.json.skins[e],n=[];for(let e=0,s=t.joints.length;e<s;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices!==0[0]?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(e){const n=e.pop(),s=e,o=[],i=[];for(let e=0,r=s.length;e<r;e++){const a=s[e];if(a){o.push(a);const t=new d;n!==null&&t.fromArray(n.array,e*16),i.push(t)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[e])}return new P1(o,i)})}loadAnimation(e){const r=this.json,c=this,t=r.animations[e],l=t.name?t.name:"animation_"+e,n=[],s=[],o=[],i=[],a=[];for(let r=0,d=t.channels.length;r<d;r++){const l=t.channels[r],e=t.samplers[l.sampler],c=l.target,u=c.node,h=t.parameters!==0[0]?t.parameters[e.input]:e.input,m=t.parameters!==0[0]?t.parameters[e.output]:e.output;if(c.node===0[0])continue;n.push(this.getDependency("node",u)),s.push(this.getDependency("accessor",h)),o.push(this.getDependency("accessor",m)),i.push(e),a.push(c)}return Promise.all([Promise.all(n),Promise.all(s),Promise.all(o),Promise.all(i),Promise.all(a)]).then(function(e){const n=e[0],i=e[1],a=e[2],r=e[3],d=e[4],s=[];for(let e=0,l=n.length;e<l;e++){const t=n[e],u=i[e],h=a[e],m=r[e],f=d[e];if(t===0[0])continue;t.updateMatrix&&t.updateMatrix();const o=c._createAnimationTracks(t,u,h,m,f);if(o)for(let e=0;e<o.length;e++)s.push(o[e])}const o=new r0(l,0[0],s);return Ye(o,t),o})}createNodeMesh(e){const s=this.json,n=this,t=s.nodes[e];return t.mesh===0[0]?null:n.getDependency("mesh",t.mesh).then(function(e){const s=n._getNodeRef(n.meshCache,t.mesh,e);return t.weights!==0[0]&&s.traverse(function(e){if(!e.isMesh)return;for(let n=0,s=t.weights.length;n<s;n++)e.morphTargetInfluences[n]=t.weights[n]}),s})}loadNode(t){const a=this.json,n=this,s=a.nodes[t],r=n._loadNodeShallow(t),o=[],i=s.children||[];for(let e=0,t=i.length;e<t;e++)o.push(n.getDependency("node",i[e]));const c=s.skin===0[0]?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(t){const n=t[0],s=t[1],o=t[2];o!==null&&n.traverse(function(e){if(!e.isSkinnedMesh)return;e.bind(o,C1)});for(let e=0,t=s.length;e<t;e++)n.add(s[e]);if(n.userData.pivot!==0[0]&&s.length>0){const t=n.userData.pivot,o=s[0];n.pivot=(new e).fromArray(t),n.position.x-=t[0],n.position.y-=t[1],n.position.z-=t[2],o.position.set(0,0,0),delete n.userData.pivot}return n})}_loadNodeShallow(e){const i=this.json,a=this.extensions,n=this;if(this.nodeCache[e]!==0[0])return this.nodeCache[e];const t=i.nodes[e],r=t.name?n.createUniqueName(t.name):"",s=[],o=n._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return o&&s.push(o),t.camera!==0[0]&&s.push(n.getDependency("camera",t.camera).then(function(e){return n._getNodeRef(n.cameraCache,t.camera,e)})),n._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){s.push(e)}),this.nodeCache[e]=Promise.all(s).then(function(s){let o;if(t.isBone===!0?o=new Yl:s.length>1?o=new Et:s.length===1?o=s[0]:o=new O,o!==s[0])for(let e=0,t=s.length;e<t;e++)o.add(s[e]);if(t.name&&(o.userData.name=t.name,o.name=r),Ye(o,t),t.extensions&&dn(a,o,t),t.matrix!==0[0]){const e=new d;e.fromArray(t.matrix),o.applyMatrix4(e)}else t.translation!==0[0]&&o.position.fromArray(t.translation),t.rotation!==0[0]&&o.quaternion.fromArray(t.rotation),t.scale!==0[0]&&o.scale.fromArray(t.scale);if(n.associations.has(o)){if(t.mesh!==0[0]&&n.meshCache.refs[t.mesh]>1){const e=n.associations.get(o);n.associations.set(o,{...e})}}else n.associations.set(o,{});return n.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){const a=this.extensions,n=this.json.scenes[e],s=this,t=new Et;n.name&&(t.name=s.createUniqueName(n.name)),Ye(t,n),n.extensions&&dn(a,t,n);const o=n.nodes||[],i=[];for(let e=0,t=o.length;e<t;e++)i.push(s.getDependency("node",o[e]));return Promise.all(i).then(function(e){for(let n=0,o=e.length;n<o;n++){const s=e[n];s.parent!==null?t.add(g6(s)):t.add(s)}const n=e=>{const t=new Map;for(const[e,n]of s.associations)(e instanceof pe||e instanceof Z)&&t.set(e,n);return e.traverse(e=>{const n=s.associations.get(e);n!=null&&t.set(e,n)}),t};return s.associations=n(t),t})}_createAnimationTracks(e,t,n,s,o){const r=[],c=e.name?e.name:e.uuid,a=[];vt[o.path]===vt.weights?e.traverse(function(e){e.morphTargetInfluences&&a.push(e.name?e.name:e.uuid)}):a.push(c);let i;switch(vt[o.path]){case vt.weights:i=Xt;break;case vt.rotation:i=_n;break;case vt.translation:case vt.scale:i=ln;break;default:switch(n.itemSize){case 1:i=Xt;break;case 2:case 3:default:i=ln;break}break}const l=s.interpolation!==0[0]?D1[s.interpolation]:An,d=this._getArrayFromAccessor(n);for(let e=0,c=a.length;e<c;e++){const n=new i(a[e]+"."+vt[o.path],t.array,d,l);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(n),r.push(n)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Xl(t.constructor),e=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)e[s]=t[s]*n;t=e}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const n=this instanceof _n?Z1:wl;return new n(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function gp(t,n,s){const r=n.attributes,o=new $e;if(r.POSITION!==0[0]){const t=s.json.accessors[r.POSITION],n=t.min,i=t.max;if(n!==0[0]&&i!==0[0]){if(o.set(new e(n[0],n[1],n[2]),new e(i[0],i[1],i[2])),t.normalized){const e=Xl(wn[t.componentType]);o.min.multiplyScalar(e),o.max.multiplyScalar(e)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=n.targets;if(i!==0[0]){const n=new e,t=new e;for(let e=0,a=i.length;e<a;e++){const o=i[e];if(o.POSITION!==0[0]){const e=s.json.accessors[o.POSITION],i=e.min,a=e.max;if(i!==0[0]&&a!==0[0]){if(t.setX(Math.max(Math.abs(i[0]),Math.abs(a[0]))),t.setY(Math.max(Math.abs(i[1]),Math.abs(a[1]))),t.setZ(Math.max(Math.abs(i[2]),Math.abs(a[2]))),e.normalized){const n=Xl(wn[e.componentType]);t.multiplyScalar(n)}n.max(t)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}o.expandByVector(n)}t.boundingBox=o;const a=new _e;o.getCenter(a.center),a.radius=o.min.distanceTo(o.max)/2,t.boundingSphere=a}function w1(e,t,n){const s=t.attributes,o=[];function i(t,s){return n.getDependency("accessor",t).then(function(t){e.setAttribute(s,t)})}for(const t in s){const n=fi[t]||t.toLowerCase();if(n in e.attributes)continue;o.push(i(s[t],n))}if(t.indices!==0[0]&&!e.index){const s=n.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});o.push(s)}return f.workingColorSpace!==H&&"COLOR_0"in s&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${f.workingColorSpace}" not supported.`),Ye(e,t),gp(e,t,n),Promise.all(o).then(function(){return t.targets!==0[0]?cp(e,t.targets,n):e})}ce=9,b1="toggleLight",Ql="switchLights",g1="redrawLights",Jl={material:Wp("/images/Tile.svg"),height:24,width:24},f1={landscape:{callback:Bp,args:[Jl,{width:0,height:.8,left:3/4,bottom:0,distance:12,rotateX:35}],sprite:0[0]},portrait:{callback:Vp,args:[Jl,{width:.9,height:0,left:0,bottom:3/4,distance:12,rotateX:35}],sprite:0[0]}};function ei(e=0,t=0,n=0,s=0,o="GroundView"){return{left:e,bottom:t,width:n,height:s,name:o,pxLeft:0,pxBottom:0,pxWidth:0,pxHeight:0,camera:0[0],raycaster:0[0],mouse:0[0]}}sd={landscape:[ei(0,0,3/4,1,"GroundView"),ei(3/4,0,1/4,1,"AllView")],portrait:[ei(0,0,1,2/3,"GroundView"),ei(0,2/3,1,1/3,"AllView")]};function mn(){v.clear(),ve="portrait",Hn=v.domElement.parentElement;const e=Hn.clientWidth,t=Hn.clientHeight;e>t&&(ve="landscape"),ct.left=-e/2,ct.right=e/2,ct.top=t/2,ct.bottom=-t/2,ct.updateProjectionMatrix();for(let s=0;s<q[ve].length;++s){if(q[ve][s].camera===0[0])continue;const n=q[ve][s],a=Math.floor(e*n.left),r=Math.floor(t*n.bottom),o=Math.floor(e*n.width),i=Math.floor(t*n.height);if(n.pxLeft=a,n.pxBottom=r,n.pxWidth=o,n.pxHeight=i,v.setViewport(a,r,o,i),v.setScissor(a,r,o,i),v.setScissorTest(!0),n.camera!==0[0]&&n.camera instanceof $&&(n.camera.aspect=o/i,n.camera.updateProjectionMatrix(),v.clear(),v.render(pt,n.camera)),Bo!==null&&ve in Bo&&s+1<q[ve].length){const n=Bo[ve];Rp(n,at,e,t)}}v.clearDepth(),v.setViewport(0,0,e,t),v.setScissor(0,0,e,t),v.setScissorTest(!0),v.render(at,ct)}function Rp(e,t,n,s){for(;at.children.length>0;)at.remove(at.children[0]);if(e.callback!==0[0]||e.callback!==null)e.args!==0[0]||e.args!==null?Io=e.callback(n,s,...e.args):Io=e.callback(n,s);else if("sprite"in e&&e.sprite!==0[0])Io=e.sprite;else{console.log("Divider sprite or callback not set!");return}Io.forEach(e=>{e!=null?at.add(e):console.log("Sprite is undefined or null!")})}function Pp(e,t,n,s,o){e===null&&console.log("Model canvas is null!"),n==null?q=sd:q=n,(s!==0[0]||s!==null)&&(Bo=s);const c=new T0;pt=new Hd,c.load(t,function(e){const t=e.scene;e.scene.traverse(e=>{e instanceof K&&e.isMesh&&!e.name.startsWith("Sphere")?(e.castShadow=!0,e.receiveShadow=!0,e.material.side=be):e instanceof Wr&&e.isLight&&(e.intensity=100,e.decay=3,e.castShadow=!0,e.shadow.bias=1e-4)}),["portrait","landscape"].forEach(n=>{for(let s=0;s<q[n].length;s++)e.cameras.forEach(e=>{e.name==q[n][s].name&&(v.compile(t,e,pt),q[n][s].camera=e,q[n][s].raycaster=new c2,q[n][s].mouse=new r(1,1))})}),pt.add(t),mn(),o!==0[0]&&o()},function(){},function(e){console.log("An error happened",e)}),v=new V0({canvas:e,antialias:!0});const l=window.devicePixelRatio||1;v.setPixelRatio(l),v.domElement.parentElement instanceof HTMLElement&&(Hn=v.domElement.parentElement);const i=Hn.clientWidth,a=Hn.clientHeight;v.setSize(i,a),v.toneMapping=Pa,v.toneMappingExposure=1,v.shadowMap.enabled=!0,v.shadowMap.type=nn,v.autoClear=!1,ct=new Pn(-i/2,i/2,a/2,-a/2,1,10),ct.position.z=10,at=new Hd,at.background=null,at.add(ct),window.addEventListener("resize",()=>{e.parentElement!=null&&v.setSize(e.parentElement.clientWidth,e.parentElement.clientHeight),mn()});function d(e){e.preventDefault();const t=e.target;for(let o=0;o<q[ve].length;o++){const n=q[ve][o];if(n.mouse===0[0])return;const r=n.mouse,i=t.getBoundingClientRect(),s={x:e.clientX-i.left,y:e.clientY-i.top};if(s.x<n.pxLeft||s.x>n.pxWidth+n.pxLeft||s.y>i.height-n.pxBottom||s.y<i.height-(n.pxBottom+n.pxHeight))continue;const c={x:s.x-n.pxLeft,y:s.y-(i.height-(n.pxBottom+n.pxHeight))};r.x=c.x/n.pxWidth*2-1,r.y=-(c.y/n.pxHeight)*2+1;const a=q[ve][o].raycaster;a?.setFromCamera(r,q[ve][o].camera),"debug"in n&&n.debug&&(Ro!==null&&pt.remove(Ro),Ro=new f2(a?.ray.direction,a?.ray.origin,2,16776960),pt.add(Ro),mn());for(let e=1;e<ce+1;e++){const n="Sphere"+String(e).padStart(3,"0"),t=pt.getObjectByName(n);if(t!==0[0]){const n=a?.intersectObject(t,!0);n!==0[0]&&n.length>0&&(gu(e),mn())}}}}v.domElement.addEventListener("click",d,!1),v.domElement.addEventListener(b1,e=>{const t=e.detail;if(t>ce||t<1)return;gu(t),mn()}),v.domElement.addEventListener(Ql,e=>{const t=e.detail;if(!Array.isArray(t)||t.length!=ce)return;for(let e=1;e<ce+1;e++){const n=t[e-1];["Spot","Sphere"].forEach(t=>{const o=t+String(e).padStart(3,"0"),s=pt.getObjectByName(o);s!==0[0]&&(s.visible=n)})}mn()}),v.domElement.addEventListener(g1,()=>{mn()})}function gu(e){["Spot","Sphere"].forEach(t=>{const s=t+String(e).padStart(3,"0"),n=pt.getObjectByName(s);n!==0[0]&&(n.visible==!1?n.visible=!0:n.visible=!1)})}function Ip(e,t){t=Math.round(t);const n=new Array(ce).fill(!1);for(let e=0;e<t;e++)n[e]=!0;e.dispatchEvent(new CustomEvent(Ql,{detail:n}))}function Bp(e,t,n,s){const i=[];let o;s.rotateX?o=n.height*s.rotateX*(Math.PI/180):o=n.height;const a=Math.floor(t*s.height/(o+s.distance)),r=e*s.left-n.width/2,c=Math.floor((t-t*s.height)/2);for(let d=0;d<a;d++){const l=new Jr(n.material),u=d*(o+s.distance)+c;l.center.set(0,-1),l.scale.set(n.width,o,1),l.position.set(...pu(e,t,r,u),1),i.push(l)}return i}function Vp(e,t,n,s){const i=[];let o;s.rotateX?o=n.height*s.rotateX*(Math.PI/180):o=n.height;const a=Math.floor(e*s.width/(n.width+s.distance)),r=t*s.bottom-o/2,c=Math.floor((e-e*s.width)/2);for(let d=0;d<a;d++){const l=new Jr(n.material),u=d*(o+s.distance)+c;l.center.set(-2,2),l.scale.set(n.width,o,1),l.position.set(...pu(e,t,u,r),1),i.push(l)}return i}function pu(e,t,n,s){return[-(e/2)+n,-(t/2)+s]}function Wp(e){const t=(new tc).load(e);t.colorSpace=M;const n=new Jc({map:t,color:16777215,fog:!0});return n}Md={wheel:{function:Gp,args:[]},touch:{function:Xp,args:[]}},st=ce,Mo=ce;function Yp(e,t,n){n||(n=Md),Array.isArray(t)?t.forEach(t=>{n[t].function(e,...n[t].args)}):n[t].function(e,...n[t].args)}function Gp(e){e.addEventListener("wheel",t=>{const n=st+t.deltaY*-.05;n<=ce&&n>=0&&(st=n),uu(e,st),t.preventDefault()},{passive:!1})}function Xp(e,t){function n(){return"ontouchstart"in window||navigator.maxTouchPoints>0}if(n()){let c=function(e){n[0]<e.pageX?i[0]=!0:i[0]=!1,n[1]<e.pageY?i[1]=!0:i[1]=!1},r=function(e){e.preventDefault(),n=[NaN,NaN],t&&t.classList.remove("hide")};var s=c,o=r;t&&t.classList.remove("hide");let n,a;const i=[!1,!1],l=.8;e.addEventListener("touchstart",e=>{e.preventDefault();const s=e.changedTouches[0];n=[s.pageX,s.pageY],a=[s.pageX,s.pageY],t&&t.classList.add("hide")},{passive:!0}),e.addEventListener("touchcancel",r),e.addEventListener("touchend",r),e.addEventListener("touchmove",t=>{const r=e.clientWidth*l/ce,o=t.changedTouches[0];a=[o.pageX,o.pageY];const d=((a[0]-n[0])**2+(a[1]-n[1])**2)**.5;let s;c(o),i[0]?s=st-d/r:s=st+d/r,s<0?s=0:s>ce&&(s=ce),s<=ce&&s>=0&&(st=s),Mo!=Math.round(st)&&(n=[o.pageX,o.pageY]),uu(e,st)},{passive:!0}),console.log("Touch events registered")}else t&&t.classList.add("hide")}function uu(e,t){const n=Math.round(t);Mo!=n&&(Ip(e,n),Mo=n)}function Zp(e,t){const n={root:null,rootMargin:"0px",threshold:1},s=new IntersectionObserver(t,n);s.observe(e)}function Jp(){const e={".card .post-body":{class:"text-focus-in",duration:1e3}};Object.keys(e).forEach(t=>{document.querySelectorAll(t).forEach(n=>{Zp(n,()=>{n.classList.add(e[t].class),setTimeout(()=>{n.classList.remove(e[t].class)},e[t].duration)})})})}function So(e){for(var n,s,t=1;t<arguments.length;t++){n=arguments[t];for(s in n)e[s]=n[s]}return e}lu={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function Rd(e,t){function n(n,s,o){if(typeof document=="undefined")return;o=So({},t,o),typeof o.expires=="number"&&(o.expires=new Date(Date.now()+o.expires*864e5)),o.expires&&(o.expires=o.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i,a="";for(i in o){if(!o[i])continue;if(a+="; "+i,o[i]===!0)continue;a+="="+o[i].split(";")[0]}return document.cookie=n+"="+e.write(s,n)+a}function s(t){if(typeof document=="undefined"||arguments.length&&!t)return;for(var n,i,r,a=document.cookie?document.cookie.split("; "):[],s={},o=0;o<a.length;o++){i=a[o].split("="),r=i.slice(1).join("=");try{if(n=decodeURIComponent(i[0]),s[n]=e.read(r,n),t===n)break}catch{}}return t?s[t]:s}return Object.create({set:n,get:s,remove:function(e,t){n(e,"",So({},t,{expires:-1}))},withAttributes:function(e){return Rd(this.converter,So({},this.attributes,e))},withConverter:function(e){return Rd(So({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}Pd=Rd(lu,{path:"/"});function og(){const e="hdr-notice";if(!B1()){if(console.warn("Browser doesn't support HDR images!"),Pd.get(e)==="true")return;const t=document.querySelector("#hdr-warning");t?(t.style.display="block",t.querySelectorAll(".close, .button").forEach(n=>{n instanceof HTMLButtonElement&&n.addEventListener("click",()=>{Pd.set(e,"true",{expires:7,path:"",sameSite:"Strict"}),t.classList.add("hidden")})})):console.error("HDR warning element not found.")}}function ig(e){document.querySelectorAll("#menu a").forEach(t=>{t instanceof HTMLAnchorElement&&t.addEventListener("click",e)});const t=document.querySelector("input.burger-menu-button");t?t.addEventListener("click",e=>{if(e.target instanceof HTMLInputElement)if(e.target.checked){const t=document.querySelector(".card.active");t&&(e.target.dataset.caller=t.id,e.target.setAttribute("aria-expanded","true"),document.body.classList.add("noscroll"))}else{e.target.setAttribute("aria-expanded","false"),document.body.classList.remove("noscroll");const t=e.target?.dataset.caller;if(t){const e=document.getElementById(t);e?e.scrollIntoView({behavior:"smooth"}):console.log("Last active card is null!")}}}):console.error("Burger menu button not found!")}au="en";function rg(e,t,n){if(t==null||t==""){const e=document.querySelector("html")?.getAttribute("lang");e!=null?t=e:t=au}n===0[0]&&(n="menu.lang-switch");let s;const a=document.querySelector(n);if(a!==null)s=a;else{console.error(`Can't find element for ${n}`);return}s.querySelectorAll(".lang a")?.forEach(t=>{if(t instanceof HTMLAnchorElement){const n=t.getAttribute("href");e!==0[0]&&!n?.startsWith("/")&&t.setAttribute("href",e+"/"+n)}});const f=1e3,u=1e4;let c,l,o=null;function g(e){const t=(new Date).getTime();for(;t+e>=(new Date).getTime();)console.log("Waiting")}const i=e=>{e.preventDefault(),console.log("Captured click")};function h(){this.removeEventListener("click",i),console.log("removed click blocker")}const d=()=>{clearTimeout(c),clearTimeout(l),s.querySelectorAll(".lang.inactive a").forEach(e=>{e.addEventListener("click",i)}),"ontouchstart"in document.body?s.querySelectorAll(".lang a").forEach(e=>{e.addEventListener("touchstart",r,{once:!0,capture:!0})}):s.querySelectorAll(".lang a").forEach(e=>{e.addEventListener("mousedown",r,{once:!0,capture:!0})})};function m(){s.classList.remove("expanded"),s.classList.remove("pressed"),this!==0[0]&&this!==null&&o!==null&&(this.removeEventListener("mouseup",o),this.removeEventListener("touchcancel",o),o=null),d()}const r=e=>{function t(){s.classList.remove("pressed"),console.log("Firing generated event"),e.target?.removeEventListener("click",i);const t=new CustomEvent("click");e.target?.dispatchEvent(t)}if(e.preventDefault(),e.stopImmediatePropagation(),e.target!==null&&e.target instanceof HTMLAnchorElement){const n=e.target;console.log("Detected press"),s.classList.add("pressed"),o=t.bind(e.target),o!==null&&(n.addEventListener("mouseup",o),n.addEventListener("touchcancel",o)),c=setTimeout(p.bind(n),f)}return!1};function p(){o!==null&&(this.removeEventListener("mouseup",o),this.removeEventListener("touchcancel",o));const e=h.bind(this),t=()=>{e(),console.log("mouse out")},n=()=>{console.warn("Unimplemented method clickRemover")};this.addEventListener("mouseup",t=>{t.preventDefault(),e(),console.log("mouseup")}),this.addEventListener("touchcancel",n),this.addEventListener("mouseout",t),console.log("Detected long press"),s.classList.add("expanded"),s.classList.remove("pressed"),l=setTimeout(m.bind(this),u)}d(),s.querySelectorAll(`li`).forEach(e=>{if(Array.from(e.classList).some(e=>["active","inactive"].includes(e)))return;if(e.innerText!=null){const n=e.innerText;n.toUpperCase()==t.toUpperCase()?e.classList.add("active"):e.classList.add("inactive")}})}function cg(e){let t=null;const n=[];function s(){if(document.fonts)for(const t in e)document.fonts.check(e[t])&&document.querySelector("body")?.classList.add(`${t}-loaded`);t&&clearInterval(t)}for(const t in e)n.push(setTimeout(()=>{document.querySelector("body")?.classList.add(`${t}-loaded`)},3e3));t=setInterval(s,200)}iu={handjet:"1em Handjet","special-elite":"1em Special Elite"},ou="/gtlf/model-uncompressed.glb",su="#renderer",window.checkHDR=B1||{},document.addEventListener("DOMContentLoaded",function(){cg(iu),Cp(".cards",".stack","section");const e=new IntersectionObserver(wp,{root:null,rootMargin:"0px",threshold:xp(_1)});if(kp(),ig(Op),rg(window.location.href),document.querySelectorAll("section").forEach(t=>{e.observe(t)}),Ap(".cards",".stack"),Mp(),og(),Ao=document.querySelector(su),Ao!==null){Pp(Ao,ou,sd,f1);const e=Md,t=document.querySelector("#touch-indicator");t!==null&&(e.touch.args=[t]),Yp(Ao,["wheel","touch"],e)}if(Jp(),window.location.hash!==""){let e;const t=document.querySelector(`*[data-slug='${window.location.hash}']`);t!==null&&"id"in t?e=t.id:e=window.location.hash,console.log(`Init: Moving to ${e}`)}});function mg(){const e=document.querySelectorAll("a");e.forEach(e=>{const t=e.getAttribute("href");t&&t.startsWith("#")?console.log(t):t||console.warn("Link is missing href attribute:",e)})}function $6(){const e=document.querySelectorAll(".section.column.inactive");e.forEach(e=>{e.addEventListener("click",e=>{const t=document.querySelector(".section.column.active");t?(e.currentTarget!=null&&e.currentTarget instanceof HTMLElement&&(e.currentTarget.classList.remove("inactive"),e.currentTarget.classList.add("active")),t.classList.remove("active"),t.classList.add("inactive"),$6()):console.error("No active section found.")},{once:!0})})}})()
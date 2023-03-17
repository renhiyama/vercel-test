var m=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var y=(e=>typeof m<"u"?m:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof m<"u"?m:t)[r]}):e)(function(e){if(typeof m<"u")return m.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});async function X(e){let t={},r=e.headers.get("Content-Type");if(r&&(r.startsWith("multipart/form-data")||r==="application/x-www-form-urlencoded")){let s={};(await e.formData()).forEach((i,n)=>{s[n]=i}),t=s}return t}var Z=e=>{let t=e.split(/;\s*/g),r={};for(let s=0,i=t.length;s<i;s++){let n=t[s].split(/\s*=\s*([^\s]+)/);r[n[0]]=decodeURIComponent(n[1])}return r},ee=(e,t,r={})=>{t=encodeURIComponent(t);let s=`${e}=${t}`;return r.maxAge&&(s+=`; Max-Age=${Math.floor(r.maxAge)}`),r.domain&&(s+="; Domain="+r.domain),r.path&&(s+="; Path="+r.path),r.expires&&(s+="; Expires="+r.expires.toUTCString()),r.httpOnly&&(s+="; HttpOnly"),r.secure&&(s+="; Secure"),r.sameSite&&(s+=`; SameSite=${r.sameSite}`),s},te=e=>{let t=e.split("/");return t[0]===""&&t.shift(),t},re=e=>{let t=[];for(let s=0;;){let i=!1;if(e=e.replace(/\{[^}]+\}/g,n=>{let o=`@\\${s}`;return t[s]=[o,n],s++,i=!0,o}),!i)break}let r=e.split("/");r[0]===""&&r.shift();for(let s=t.length-1;s>=0;s--){let[i]=t[s];for(let n=r.length-1;n>=0;n--)if(r[n].indexOf(i)!==-1){r[n]=r[n].replace(i,t[s][1]);break}}return r},H={},se=e=>{if(e==="*")return"*";let t=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);return t?(H[e]||(t[2]?H[e]=[e,t[1],new RegExp("^"+t[2]+"$")]:H[e]=[e,t[1],!0]),H[e]):null},ie=(e,t=!0)=>{let r=e.indexOf("?",8),s=e.substring(e.indexOf("/",8),r===-1?e.length:r);return t===!1&&s.endsWith("/")?s.slice(0,-1):s},I=e=>{let t=e.indexOf("?",8);return t!==-1?e.slice(t+1):""},k=(...e)=>{let t="",r=!1;for(let s of e)t.endsWith("/")&&(t=t.slice(0,-1),r=!0),s.startsWith("/")||(s=`/${s}`),s==="/"&&r?t=`${t}/`:s!=="/"&&(t=`${t}${s}`),s==="/"&&t===""&&(t="/");return t},B=e=>{let t=e.match(/(^.+)(\/\:[^\/]+)\?$/);if(!t)return null;let r=t[1],s=r+t[2];return[r,s]},L=e=>{let t=e.indexOf("#");return t!==-1&&(e=e.slice(0,t)),e},ne=(e,t)=>{e=L(e);let r={};for(;;){let s=e.indexOf("&"),i="";s===-1?i=e:i=e.substring(0,s);let n=i.indexOf("=");if(n!==-1){let o=i.substring(n+1),h=i.substring(0,n);if(t===h)return/\%/.test(o)?decodeURI(o):o;r[h]||(r[h]=o)}else if(i===t)return"";if(s===-1)break;e=e.substring(s+1,e.length)}return t?null:r},ae=(e,t)=>{e=L(e);let r={};for(let s of e.split("&")){let[i,n]=s.split("=");n===void 0&&(n=""),r[i]||(r[i]=[]),r[i].push(n.indexOf("%")!==-1?decodeURI(n):n)}return t?r[t]?r[t]:null:r},he=class{constructor(e,t){this.raw=e,this.paramData=t,this.validatedData={}}param(e){if(this.paramData)if(e){let t=this.paramData[e];return t?/\%/.test(t)?decodeURIComponent(t):t:void 0}else{let t={};for(let[r,s]of Object.entries(this.paramData))s&&typeof s=="string"&&(t[r]=/\%/.test(s)?decodeURIComponent(s):s);return t}return null}query(e){let t=I(this.url),r=ne(t,e);if(r!==null)return r}queries(e){let t=I(this.url),r=ae(t,e);if(r!==null)return r}header(e){let t={};return this.raw.headers.forEach((r,s)=>{t[s]=r}),e?t[e.toLowerCase()]||void 0:t}cookie(e){let t=this.raw.headers.get("Cookie");if(!t)return;let r=Z(t);return e?r[e]:r}async parseBody(){return await X(this.raw)}json(){return this.raw.json()}text(){return this.raw.text()}arrayBuffer(){return this.raw.arrayBuffer()}blob(){return this.raw.blob()}formData(){return this.raw.formData()}addValidatedData(e,t){this.validatedData[e]=t}valid(e){if(e)return this.validatedData[e]}get url(){return this.raw.url}get method(){return this.raw.method}get headers(){return this.raw.headers}get redirect(){return this.raw.redirect}get body(){return this.raw.body}get bodyUsed(){return this.raw.bodyUsed}get cache(){return this.raw.cache}get credentials(){return this.raw.credentials}get integrity(){return this.raw.integrity}get keepalive(){return this.raw.keepalive}get mode(){return this.raw.mode}get referrer(){return this.raw.referrer}get refererPolicy(){return this.raw.referrerPolicy}get signal(){return this.raw.signal}},oe=(e=>typeof y<"u"?y:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof y<"u"?y:t)[r]}):e)(function(e){if(typeof y<"u")return y.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')}),O=class{constructor(e,t){this.env={},this.finalized=!1,this.error=void 0,this._status=200,this._pretty=!1,this._prettySpace=2,this._headers=void 0,this._preparedHeaders=void 0,this.notFoundHandler=()=>new Response,this.header=(r,s,i)=>{i?.append?(this._headers||(this._headers=new Headers(this._preparedHeaders)),this._headers.append(r,s)):this._headers?this._headers.set(r,s):(this._preparedHeaders??(this._preparedHeaders={}),this._preparedHeaders[r.toLowerCase()]=s),this.finalized&&(i?.append?this.res.headers.append(r,s):this.res.headers.set(r,s))},this.status=r=>{this._status=r},this.set=(r,s)=>{this._map||(this._map={}),this._map[r]=s},this.get=r=>this._map?.[r],this.pretty=(r,s=2)=>{this._pretty=r,this._prettySpace=s},this.newResponse=(r,s,i)=>{if(!i&&!this._headers&&!this._res&&!s)return new Response(r,{headers:this._preparedHeaders});if(this._preparedHeaders??(this._preparedHeaders={}),!this._headers){this._headers=new Headers;for(let[n,o]of Object.entries(this._preparedHeaders))this._headers.set(n,o)}if(this._res){this._res.headers.forEach((n,o)=>{this._headers?.set(o,n)});for(let[n,o]of Object.entries(this._preparedHeaders))this._headers.set(n,o)}i??(i={});for(let[n,o]of Object.entries(i))if(typeof o=="string")this._headers.set(n,o);else{this._headers.delete(n);for(let h of o)this._headers.append(n,h)}return new Response(r,{status:s,headers:this._headers})},this.body=(r,s=this._status,i)=>this.newResponse(r,s,i),this.text=(r,s,i)=>{if(!this._preparedHeaders){if(!i&&!this._res&&!this._headers&&!s)return new Response(r);this._preparedHeaders={}}return this._preparedHeaders["content-type"]&&(this._preparedHeaders["content-type"]="text/plain; charset=UTF8"),this.newResponse(r,s,i)},this.json=(r,s=this._status,i)=>{let n=this._pretty?JSON.stringify(r,null,this._prettySpace):JSON.stringify(r);return this._preparedHeaders??(this._preparedHeaders={}),this._preparedHeaders["content-type"]="application/json; charset=UTF-8",this.newResponse(n,s,i)},this.jsonT=(r,s=this._status,i)=>({response:this.json(r,s,i),data:r,format:"json"}),this.html=(r,s=this._status,i)=>(this._preparedHeaders??(this._preparedHeaders={}),this._preparedHeaders["content-type"]="text/html; charset=UTF-8",this.newResponse(r,s,i)),this.redirect=(r,s=302)=>(this._headers??(this._headers=new Headers),this._headers.set("Location",r),this.newResponse(null,s)),this.cookie=(r,s,i)=>{let n=ee(r,s,i);this.header("set-cookie",n,{append:!0})},this.notFound=()=>this.notFoundHandler(this),this.rawRequest=e,t&&(this._executionCtx=t.executionCtx,this._paramData=t.paramData,this.env=t.env,t.notFoundHandler&&(this.notFoundHandler=t.notFoundHandler))}get req(){return this._req?this._req:(this._req=new he(this.rawRequest,this._paramData),this.rawRequest=void 0,this._paramData=void 0,this._req)}get event(){if(this._executionCtx instanceof FetchEvent)return this._executionCtx;throw Error("This context has no FetchEvent")}get executionCtx(){if(this._executionCtx)return this._executionCtx;throw Error("This context has no ExecutionContext")}get res(){return this._res||(this._res=new Response("404 Not Found",{status:404}))}set res(e){this._res&&(this._res.headers.delete("content-type"),this._res.headers.forEach((t,r)=>{e.headers.set(r,t)})),this._res=e,this.finalized=!0}get runtime(){let e=globalThis;if(e?.Deno!==void 0)return"deno";if(e?.Bun!==void 0)return"bun";if(typeof e?.WebSocketPair=="function")return"workerd";if(typeof e?.EdgeRuntime=="string")return"edge-light";let t=!1;try{let{env:r}=oe("fastly:env");r instanceof Function&&(t=!0)}catch{}return t?"fastly":e?.__lagon__!==void 0?"lagon":e?.process?.release?.name==="node"?"node":"other"}},N=(e,t,r)=>{let s=e.length;return(i,n)=>{let o=-1;return h(0);function h(a){if(a<=o)throw new Error("next() called multiple times");let l=e[a];o=a,a===s&&n&&(l=n);let c,u=!1;if(!l)i instanceof O&&i.finalized===!1&&r&&(c=r(i));else try{c=l(i,()=>{let d=h(a+1);return d instanceof Promise?d:Promise.resolve(d)})}catch(d){if(d instanceof Error&&i instanceof O&&t)i.error=d,c=t(d,i),u=!0;else throw d}return c instanceof Promise?c.then(d=>(d!==void 0&&"response"in d&&(d=d.response),d&&i.finalized===!1&&(i.res=d),i)).catch(d=>{if(d instanceof Error&&i instanceof O&&t)return i.error=d,i.res=t(d,i),i;throw d}):(c!==void 0&&"response"in c&&(c=c.response),c&&(i.finalized===!1||u)&&(i.res=c),i)}}},M=e=>le[e],le={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",204:"No Content",206:"Partial Content",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Not Allowed",406:"Not Acceptable",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",421:"Misdirected Request",429:"Too Many Requests",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Temporarily Unavailable",504:"Gateway Time-out",505:"HTTP Version Not Supported",507:"Insufficient Storage"},de=class extends Error{constructor(e=500,t){super(t?.message||M(e)),this.res=t?.res,this.status=e}getResponse(){return this.res?this.res:new Response(this.message,{status:this.status,statusText:M(this.status)})}},p="ALL",ue="all",W=["get","post","put","delete","head","options","patch"],G=class extends Error{},C="[^/]+",v=".*",R="(?:|/.*)",$=Symbol();function ce(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===v||e===R?1:t===v||t===R?-1:e===C?1:t===C?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var P=class{constructor(){this.children={}}insert(e,t,r,s,i){if(e.length===0){if(this.index!==void 0)throw $;if(i)return;this.index=t;return}let[n,...o]=e,h=n==="*"?o.length===0?["","",v]:["","",C]:n==="/*"?["","",R]:n.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/),a;if(h){let l=h[1],c=h[2]||C;if(a=this.children[c],!a){if(Object.keys(this.children).some(u=>u!==v&&u!==R))throw $;if(i)return;a=this.children[c]=new P,l!==""&&(a.varIndex=s.varIndex++)}if(!i&&l!==""){if(r.some(u=>u[0]===l))throw new Error("Duplicate param name");r.push([l,a.varIndex])}}else if(a=this.children[n],!a){if(Object.keys(this.children).some(l=>l.length>1&&l!==v&&l!==R))throw $;if(i)return;a=this.children[n]=new P}a.insert(o,t,r,s,i)}buildRegExpStr(){let e=Object.keys(this.children).sort(ce).map(t=>{let r=this.children[t];return(typeof r.varIndex=="number"?`(${t})@${r.varIndex}`:t)+r.buildRegExpStr()});return typeof this.index=="number"&&e.unshift(`#${this.index}`),e.length===0?"":e.length===1?e[0]:"(?:"+e.join("|")+")"}},pe=class{constructor(){this.context={varIndex:0},this.root=new P}insert(e,t,r){let s=[],i=[];for(let o=0;;){let h=!1;if(e=e.replace(/\{[^}]+\}/g,a=>{let l=`@\\${o}`;return i[o]=[l,a],o++,h=!0,l}),!h)break}let n=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let o=i.length-1;o>=0;o--){let[h]=i[o];for(let a=n.length-1;a>=0;a--)if(n[a].indexOf(h)!==-1){n[a]=n[a].replace(h,i[o][1]);break}}return this.root.insert(n,t,s,this.context,r),s}buildRegExp(){let e=this.root.buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0,r=[],s=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,n,o)=>typeof n<"u"?(r[++t]=Number(n),"$()"):(typeof o<"u"&&(s[Number(o)]=++t),"")),[new RegExp(`^${e}`),r,s]}},F=[p,...W].map(e=>e.toUpperCase()),z={},fe=[/^$/,[],{}],D={};function J(e){return D[e]??(D[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*/,"(?:|/.*)")}$`))}function ge(){D={}}function me(e){let t=new pe,r=[];if(e.length===0)return fe;e=e.sort(([a],[l])=>a.length-l.length);let s={};for(let a=0,l=-1,c=e.length;a<c;a++){let u=e[a][0],d=!1;/\*|\/:/.test(u)?l++:(d=!0,s[e[a][0]]={handlers:e[a][1],params:z});let f;try{f=t.insert(u,l,d)}catch(w){throw w===$?new G(u):w}d||(r[l]=f.length===0?[{handlers:e[a][1],params:z},null]:[e[a][1],f])}let[i,n,o]=t.buildRegExp();for(let a=0,l=r.length;a<l;a++){let c=r[a][1];if(c)for(let u=0,d=c.length;u<d;u++)c[u][1]=o[c[u][1]]}let h=[];for(let a in n)h[a]=r[n[a]];return[i,h,s]}function _(e,t){if(e){for(let r of Object.keys(e).sort((s,i)=>i.length-s.length))if(J(r).test(t))return[...e[r]]}}var we=class{constructor(){this.middleware={[p]:{}},this.routes={[p]:{}}}add(e,t,r){var s;let{middleware:i,routes:n}=this;if(!i||!n)throw new Error("Can not add a route since the matcher is already built.");if(F.includes(e)||F.push(e),i[e]||[i,n].forEach(h=>{h[e]={},Object.keys(h[p]).forEach(a=>{h[e][a]=[...h[p][a]]})}),t==="/*"&&(t="*"),/\*$/.test(t)){let h=J(t);e===p?Object.keys(i).forEach(a=>{var l;(l=i[a])[t]||(l[t]=_(i[a],t)||_(i[p],t)||[])}):(s=i[e])[t]||(s[t]=_(i[e],t)||_(i[p],t)||[]),Object.keys(i).forEach(a=>{(e===p||e===a)&&Object.keys(i[a]).forEach(l=>{h.test(l)&&i[a][l].push(r)})}),Object.keys(n).forEach(a=>{(e===p||e===a)&&Object.keys(n[a]).forEach(l=>h.test(l)&&n[a][l].push(r))});return}let o=B(t)||[t];for(let h=0,a=o.length;h<a;h++){let l=o[h];Object.keys(n).forEach(c=>{var u;(e===p||e===c)&&((u=n[c])[l]||(u[l]=[..._(i[c],l)||_(i[p],l)||[]]),n[c][l].push(r))})}}match(e,t){ge();let r=this.buildAllMatchers();return this.match=(s,i)=>{let n=r[s],o=n[2][i];if(o)return o;let h=i.match(n[0]);if(!h)return null;let a=h.indexOf("",1),[l,c]=n[1][a];if(!c)return l;let u={};for(let d=0,f=c.length;d<f;d++)u[c[d][0]]=h[c[d][1]];return{handlers:l,params:u}},this.match(e,t)}buildAllMatchers(){let e={};return F.forEach(t=>{e[t]=this.buildMatcher(t)||e[p]}),this.middleware=this.routes=void 0,e}buildMatcher(e){let t=[],r=e===p;return[this.middleware,this.routes].forEach(s=>{let i=s[e]?Object.keys(s[e]).map(n=>[n,s[e][n]]):[];i.length!==0?(r||(r=!0),t.push(...i)):e!==p&&t.push(...Object.keys(s[p]).map(n=>[n,s[p][n]]))}),r?me(t):null}},ye=class{constructor(e){this.routers=[],this.routes=[],Object.assign(this,e)}add(e,t,r){if(!this.routes)throw new Error("Can not add a route since the matcher is already built.");this.routes.push([e,t,r])}match(e,t){if(!this.routes)throw new Error("Fatal error");let{routers:r,routes:s}=this,i=r.length,n=0,o;for(;n<i;n++){let h=r[n];try{s.forEach(a=>{h.add(...a)}),o=h.match(e,t)}catch(a){if(a instanceof G)continue;throw a}this.match=h.match.bind(h),this.routers=[h],this.routes=void 0;break}if(n===i)throw new Error("Fatal error");return o||null}get activeRouter(){if(this.routes||this.routers.length!==1)throw new Error("No active router has been determined yet.");return this.routers[0]}};function V(e,t){for(let s=0,i=e.patterns.length;s<i;s++)if(typeof e.patterns[s]=="object"&&e.patterns[s][1]===t)return!0;let r=Object.values(e.children);for(let s=0,i=r.length;s<i;s++)if(V(r[s],t))return!0;return!1}var K=class{constructor(e,t,r){if(this.order=0,this.shouldCapture=!1,this.children=r||{},this.methods=[],this.name="",e&&t){let s={};s[e]={handler:t,score:0,name:this.name},this.methods=[s]}this.patterns=[],this.handlerSetCache={}}insert(e,t,r){this.name=`${e} ${t}`,this.order=++this.order;let s=this,i=re(t),n=[],o=l=>`Duplicate param name, use another name instead of '${l}' - ${e} ${t} <--- '${l}'`;for(let l=0,c=i.length;l<c;l++){let u=i[l];if(Object.keys(s.children).includes(u)){n.push(...s.patterns),s=s.children[u];continue}s.children[u]=new K;let d=se(u);if(d){if(typeof d=="object"){this.shouldCapture=!0;for(let f=0,w=n.length;f<w;f++)if(typeof n[f]=="object"&&n[f][1]===d[1])throw new Error(o(d[1]));if(Object.values(s.children).some(f=>V(f,d[1])))throw new Error(o(d[1]))}s.patterns.push(d),n.push(...s.patterns)}n.push(...s.patterns),s=s.children[u],s.shouldCapture=this.shouldCapture}s.methods.length||(s.methods=[]);let h={},a={handler:r,name:this.name,score:this.order};return h[e]=a,s.methods.push(h),s}getHandlerSets(e,t,r){var s,i;return(s=e.handlerSetCache)[i=`${t}:${r?"1":"0"}`]||(s[i]=(()=>{let n=[];for(let o=0,h=e.methods.length;o<h;o++){let a=e.methods[o],l=a[t]||a[p];l!==void 0&&n.push(l)}return n})())}search(e,t){let r=[],s={},i=[this],n=te(t);for(let h=0,a=n.length;h<a;h++){let l=n[h],c=h===a-1,u=[],d=!1;for(let f=0,w=i.length;f<w;f++){let g=i[f],x=g.children[l];x&&(c===!0?(x.children["*"]&&r.push(...this.getHandlerSets(x.children["*"],e,!0)),r.push(...this.getHandlerSets(x,e)),d=!0):u.push(x));for(let j=0,Q=g.patterns.length;j<Q;j++){let T=g.patterns[j];if(T==="*"){let q=g.children["*"];q&&(r.push(...this.getHandlerSets(q,e)),u.push(q));continue}if(l==="")continue;let[E,S,b]=T,U=n.slice(h).join("/");if(b instanceof RegExp&&b.test(U)){r.push(...this.getHandlerSets(g.children[E],e)),s[S]=U;continue}(b===!0||b instanceof RegExp&&b.test(l))&&(typeof E=="string"&&(c===!0?r.push(...this.getHandlerSets(g.children[E],e)):u.push(g.children[E])),(typeof S=="string"&&!d||g.children[l]&&g.children[l].shouldCapture)&&(s[S]=l))}}i=u}let o=r.length;return o===0?null:o===1?{handlers:[r[0].handler],params:s}:{handlers:r.sort((h,a)=>h.score-a.score).map(h=>h.handler),params:s}}},_e=class{constructor(){this.node=new K}add(e,t,r){let s=B(t);if(s){for(let i of s)this.node.insert(e,i,r);return}this.node.insert(e,t,r)}match(e,t){return this.node.search(e,t)}};function xe(){return class{}}var be=e=>e.text("404 Not Found",404),A=(e,t)=>{if(e instanceof de)return e.getResponse();console.trace(e);let r="Internal Server Error";return t.text(r,500)},Y=class extends xe(){constructor(e={}){super(),this.router=new ye({routers:[new we,new _e]}),this.strict=!0,this.basePath="",this.path="*",this.routes=[],this.notFoundHandler=be,this.errorHandler=A,this.handleEvent=t=>this.dispatch(t.request,t),this.fetch=(t,r,s)=>this.dispatch(t,s,r),this.request=async(t,r)=>{if(t instanceof Request)return r!==void 0&&(t=new Request(t,r)),await this.fetch(t);t=t.toString();let s=/^https?:\/\//.test(t)?t:`http://localhost${k("/",t)}`,i=new Request(s,r);return await this.fetch(i)},[...W,ue].map(t=>{this[t]=(r,...s)=>(typeof r=="string"?this.path=r:this.addRoute(t,this.path,r),s.map(i=>{typeof i!="string"&&this.addRoute(t,this.path,i)}),this)}),this.on=(t,r,...s)=>{if(!t)return this;this.path=r;for(let i of[t].flat())s.map(n=>{this.addRoute(i.toUpperCase(),this.path,n)});return this},this.use=(t,...r)=>(typeof t=="string"?this.path=t:r.unshift(t),r.map(s=>{this.addRoute(p,this.path,s)}),this),Object.assign(this,e)}clone(){let e=new Y({router:this.router,strict:this.strict});return e.routes=this.routes,e}route(e,t){let r=this.clone();return r.basePath=k(this.basePath,e),t&&t.routes.map(s=>{let i=t.errorHandler===A?s.handler:async(n,o)=>(await N([s.handler],t.errorHandler)(n,o)).res;r.addRoute(s.method,s.path,i)}),r}onError(e){return this.errorHandler=e,this}notFound(e){return this.notFoundHandler=e,this}showRoutes(){this.routes.map(e=>{console.log(`\x1B[32m${e.method}\x1B[0m ${" ".repeat(8-e.method.length)} ${e.path}`)})}addRoute(e,t,r){e=e.toUpperCase(),this.basePath&&(t=k(this.basePath,t)),this.router.add(e,t,r);let s={path:t,method:e,handler:r};this.routes.push(s)}matchRoute(e,t){return this.router.match(e,t)}handleError(e,t){if(e instanceof Error)return this.errorHandler(e,t);throw e}dispatch(e,t,r){let s=ie(e.url,this.strict),i=e.method,n=this.matchRoute(i,s),o=n?.params,h=new O(e,{env:r,executionCtx:t,notFoundHandler:this.notFoundHandler,paramData:o});if(n?.handlers.length===1){let c=n.handlers[0],u;try{if(u=c(h,async()=>{}),!u)return this.notFoundHandler(h)}catch(d){return this.handleError(d,h)}return u instanceof Response||("response"in u&&(u=u.response),u instanceof Response)?u:(async()=>{let d;try{if(d=await u,d!==void 0&&"response"in d&&(d=d.response),!d)return this.notFoundHandler(h)}catch(f){return this.handleError(f,h)}return d})()}let a=n?n.handlers:[this.notFoundHandler],l=N(a,this.errorHandler,this.notFoundHandler);return(async()=>{try{let c=l(h),u=c instanceof Promise?await c:c;if(!u.finalized)throw new Error("Context is not finalized. You may forget returning Response object or `await next()`");return u.res}catch(c){return this.handleError(c,h)}})()}},Re=(e,t)=>r=>(t?new Y().route(t,e):e).fetch(r);export{Re as handle};
//# sourceMappingURL=nextjs.bundle.js.map
import{Fragment as z,options as c,h as se}from"./8d3055a3fedf2a1556f950ea1dea26b8e543e141ae6ac190de25a030e2ab1602.js";var de=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,le=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,E=/[\s\n\\/='"\0<>]/,fe=/^xlink:?./,_e=/["&<]/;function W(e){if(_e.test(e+="")===!1)return e;for(var t=0,r=0,l="",v="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:v="&quot;";break;case 38:v="&amp;";break;case 60:v="&lt;";break;default:continue}r!==t&&(l+=e.slice(t,r)),l+=v,t=r+1}return r!==t&&(l+=e.slice(t,r)),l}var ee=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"	"))},te=function(e,t,r){return String(e).length>(t||40)||!r&&String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},re={},ve=/([A-Z])/g;function ue(e){var t="";for(var r in e){var l=e[r];l!=null&&l!==""&&(t&&(t+=" "),t+=r[0]=="-"?r:re[r]||(re[r]=r.replace(ve,"-$1").toLowerCase()),t=typeof l=="number"&&de.test(r)===!1?t+": "+l+"px;":t+": "+l+";")}return t||void 0}function G(e,t){return Array.isArray(t)?t.reduce(G,e):t!=null&&t!==!1&&e.push(t),e}function ne(){this.__d=!0}function ce(e,t){return{__v:e,context:t,props:e.props,setState:ne,forceUpdate:ne,__d:!0,__h:[]}}function Z(e,t){var r=e.contextType,l=r&&t[r.__c];return r!=null?l?l.props.value:r.__:t}var V=[];function D(e,t,r,l,v,m){if(e==null||typeof e=="boolean")return"";if(typeof e!="object")return typeof e=="function"?"":W(e);var _=r.pretty,p=_&&typeof _=="string"?_:"	";if(Array.isArray(e)){for(var b="",y=0;y<e.length;y++)_&&y>0&&(b+=`
`),b+=D(e[y],t,r,l,v,m);return b}if(e.constructor!==void 0)return"";var j,f=e.type,u=e.props,A=!1;if(typeof f=="function"){if(A=!0,!r.shallow||!l&&r.renderRootComponent!==!1){if(f===z){var h=[];return G(h,e.props.children),D(h,t,r,r.shallowHighOrder!==!1,v,m)}var d,n=e.__c=ce(e,t);c.__b&&c.__b(e);var H=c.__r;if(f.prototype&&typeof f.prototype.render=="function"){var O=Z(f,t);(n=e.__c=new f(u,O)).__v=e,n._dirty=n.__d=!0,n.props=u,n.state==null&&(n.state={}),n._nextState==null&&n.__s==null&&(n._nextState=n.__s=n.state),n.context=O,f.getDerivedStateFromProps?n.state=Object.assign({},n.state,f.getDerivedStateFromProps(n.props,n.state)):n.componentWillMount&&(n.componentWillMount(),n.state=n._nextState!==n.state?n._nextState:n.__s!==n.state?n.__s:n.state),H&&H(e),d=n.render(n.props,n.state,n.context)}else for(var F=Z(f,t),T=0;n.__d&&T++<25;)n.__d=!1,H&&H(e),d=f.call(e.__c,u,F);return n.getChildContext&&(t=Object.assign({},t,n.getChildContext())),c.diffed&&c.diffed(e),D(d,t,r,r.shallowHighOrder!==!1,v,m)}f=(j=f).displayName||j!==Function&&j.name||function(Q){var Y=(Function.prototype.toString.call(Q).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!Y){for(var q=-1,U=V.length;U--;)if(V[U]===Q){q=U;break}q<0&&(q=V.push(Q)-1),Y="UnnamedComponent"+q}return Y}(j)}var k,x,s="<"+f;if(u){var g=Object.keys(u);r&&r.sortAttributes===!0&&g.sort();for(var C=0;C<g.length;C++){var i=g[C],a=u[i];if(i!=="children"){if(!E.test(i)&&(r&&r.allAttributes||i!=="key"&&i!=="ref"&&i!=="__self"&&i!=="__source")){if(i==="defaultValue")i="value";else if(i==="defaultChecked")i="checked";else if(i==="defaultSelected")i="selected";else if(i==="className"){if(u.class!==void 0)continue;i="class"}else v&&fe.test(i)&&(i=i.toLowerCase().replace(/^xlink:?/,"xlink:"));if(i==="htmlFor"){if(u.for)continue;i="for"}i==="style"&&a&&typeof a=="object"&&(a=ue(a)),i[0]==="a"&&i[1]==="r"&&typeof a=="boolean"&&(a=String(a));var o=r.attributeHook&&r.attributeHook(i,a,t,r,A);if(o||o==="")s+=o;else if(i==="dangerouslySetInnerHTML")x=a&&a.__html;else if(f==="textarea"&&i==="value")k=a;else if((a||a===0||a==="")&&typeof a!="function"){if(!(a!==!0&&a!==""||(a=i,r&&r.xml))){s=s+" "+i;continue}if(i==="value"){if(f==="select"){m=a;continue}f==="option"&&m==a&&u.selected===void 0&&(s+=" selected")}s=s+" "+i+'="'+W(a)+'"'}}}else k=a}}if(_){var S=s.replace(/\n\s*/," ");S===s||~S.indexOf(`
`)?_&&~s.indexOf(`
`)&&(s+=`
`):s=S}if(s+=">",E.test(f))throw new Error(f+" is not a valid HTML tag name in "+s);var $,pe=le.test(f)||r.voidElements&&r.voidElements.test(f),w=[];if(x)_&&te(x)&&(x=`
`+p+ee(x,p)),s+=x;else if(k!=null&&G($=[],k).length){for(var I=_&&~s.indexOf(`
`),K=!1,J=0;J<$.length;J++){var L=$[J];if(L!=null&&L!==!1){var M=D(L,t,r,!0,f==="svg"||f!=="foreignObject"&&v,m);if(_&&!I&&te(M)&&(I=!0),M)if(_){var X=M.length>0&&M[0]!="<";K&&X?w[w.length-1]+=M:w.push(M),K=X}else w.push(M)}}if(_&&I)for(var N=w.length;N--;)w[N]=`
`+p+ee(w[N],p)}if(w.length||x)s+=w.join("");else if(r&&r.xml)return s.substring(0,s.length-1)+" />";return!pe||$||x?(_&&~s.indexOf(`
`)&&(s+=`
`),s=s+"</"+f+">"):s=s.replace(/>$/," />"),s}var ge={shallow:!0};R.render=R;var he=function(e,t){return R(e,t,ge)},ie=[];function R(e,t,r){t=t||{};var l=c.__s;c.__s=!0;var v,m=se(z,null);return m.__k=[e],v=r&&(r.pretty||r.voidElements||r.sortAttributes||r.shallow||r.allAttributes||r.xml||r.attributeHook)?D(e,t,r):P(e,t,!1,void 0,m),c.__c&&c.__c(e,ie),c.__s=l,ie.length=0,v}function B(e){return e==null||typeof e=="boolean"?null:typeof e=="string"||typeof e=="number"||typeof e=="bigint"?se(null,null,e):e}function ye(e,t){return e==="className"?"class":e==="htmlFor"?"for":e==="defaultValue"?"value":e==="defaultChecked"?"checked":e==="defaultSelected"?"selected":t&&fe.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function me(e,t){return e==="style"&&t!=null&&typeof t=="object"?ue(t):e[0]==="a"&&e[1]==="r"&&typeof t=="boolean"?String(t):t}var oe=Array.isArray,ae=Object.assign;function P(e,t,r,l,v){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":W(e);if(oe(e)){var m="";v.__k=e;for(var _=0;_<e.length;_++)m+=P(e[_],t,r,l,v),e[_]=B(e[_]);return m}if(e.constructor!==void 0)return"";e.__=v,c.__b&&c.__b(e);var p=e.type,b=e.props;if(typeof p=="function"){var y;if(p===z)y=b.children;else{y=p.prototype&&typeof p.prototype.render=="function"?function(g,C){var i=g.type,a=Z(i,C),o=new i(g.props,a);g.__c=o,o.__v=g,o.__d=!0,o.props=g.props,o.state==null&&(o.state={}),o.__s==null&&(o.__s=o.state),o.context=a,i.getDerivedStateFromProps?o.state=ae({},o.state,i.getDerivedStateFromProps(o.props,o.state)):o.componentWillMount&&(o.componentWillMount(),o.state=o.__s!==o.state?o.__s:o.state);var S=c.__r;return S&&S(g),o.render(o.props,o.state,o.context)}(e,t):function(g,C){var i,a=ce(g,C),o=Z(g.type,C);g.__c=a;for(var S=c.__r,$=0;a.__d&&$++<25;)a.__d=!1,S&&S(g),i=g.type.call(a,g.props,o);return i}(e,t);var j=e.__c;j.getChildContext&&(t=ae({},t,j.getChildContext()))}var f=P(y=y!=null&&y.type===z&&y.key==null?y.props.children:y,t,r,l,e);return c.diffed&&c.diffed(e),e.__=void 0,c.unmount&&c.unmount(e),f}var u,A,h="<";if(h+=p,b)for(var d in u=b.children,b){var n=b[d];if(!(d==="key"||d==="ref"||d==="__self"||d==="__source"||d==="children"||d==="className"&&"class"in b||d==="htmlFor"&&"for"in b||E.test(d))){if(n=me(d=ye(d,r),n),d==="dangerouslySetInnerHTML")A=n&&n.__html;else if(p==="textarea"&&d==="value")u=n;else if((n||n===0||n==="")&&typeof n!="function"){if(n===!0||n===""){n=d,h=h+" "+d;continue}if(d==="value"){if(p==="select"){l=n;continue}p!=="option"||l!=n||"selected"in b||(h+=" selected")}h=h+" "+d+'="'+W(n)+'"'}}}var H=h;if(h+=">",E.test(p))throw new Error(p+" is not a valid HTML tag name in "+h);var O="",F=!1;if(A)O+=A,F=!0;else if(typeof u=="string")O+=W(u),F=!0;else if(oe(u)){e.__k=u;for(var T=0;T<u.length;T++){var k=u[T];if(u[T]=B(k),k!=null&&k!==!1){var x=P(k,t,p==="svg"||p!=="foreignObject"&&r,l,e);x&&(O+=x,F=!0)}}}else if(u!=null&&u!==!1&&u!==!0){e.__k=[B(u)];var s=P(u,t,p==="svg"||p!=="foreignObject"&&r,l,e);s&&(O+=s,F=!0)}if(c.diffed&&c.diffed(e),e.__=void 0,c.unmount&&c.unmount(e),F)h+=O;else if(le.test(p))return H+" />";return h+"</"+p+">"}R.shallowRender=he;var xe=R;export{xe as default,R as render,R as renderToStaticMarkup,R as renderToString,he as shallowRender};
//# sourceMappingURL=preact-render-to-string.bundle.js.map
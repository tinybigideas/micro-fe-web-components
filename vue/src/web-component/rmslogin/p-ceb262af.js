const e=window,t=document,n={t:0,s:"",raf:e=>requestAnimationFrame(e),ael:(e,t,n,s)=>e.addEventListener(t,n,s),rel:(e,t,n,s)=>e.removeEventListener(t,n,s)},s=!!t.documentElement.attachShadow,l=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),o=new WeakMap,i=e=>o.get(e),r=(e,t)=>o.set(t.l=e,t),c=(e,t)=>t in e,a=e=>console.error(e),f=new Map,u=e.__stencil_cssshim;let $=0,m=!1;const p=[],y=[],d=[],h=e=>t=>{e.push(t),m||(m=!0,n.raf(b))},w=(e,t)=>{let n=0,s=0;for(;n<e.length&&(s=performance.now())<t;)try{e[n++](s)}catch(e){a(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},b=()=>{$++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){a(e)}e.length=0})(p);const e=2==(6&n.t)?performance.now()+7*Math.ceil($*(1/22)):1/0;w(y,e),w(d,e),y.length>0&&(d.push(...y),y.length=0),(m=p.length+y.length+d.length>0)?n.raf(b):$=0},g=h(y),_={},v=e=>null!=e,j=e=>e.toLowerCase(),S=()=>e.CSS&&e.CSS.supports&&e.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_rmslogin("./p-229ebf7a.js"),k=async()=>{{const e=Array.from(t.querySelectorAll("script")),n=e.find(e=>e.hasAttribute(R))||e.find(e=>e.src.includes("/rmslogin.esm.js")),s=new URL(".",new URL(n.getAttribute(R)||n.src,t.baseURI));return M(s.href),window.customElements||await __sc_import_rmslogin("./p-7eb7509a.js"),s.pathname}},M=n=>{const s=`__sc_import_${"rmslogin".replace(/\s|-/g,"_")}`;try{e[s]=new Function("w","return import(w);")}catch(l){const o=new Map;e[s]=(l=>{const i=new URL(l,n).href;let r=o.get(i);if(!r){const n=t.createElement("script");n.type="module",n.src=URL.createObjectURL(new Blob([`import * as m from '${i}'; window.${s}.m = m;`],{type:"application/javascript"})),r=new Promise(t=>{n.onload=(()=>{t(e[s].m),n.remove()})}),o.set(i,r),t.head.appendChild(n)}return r})}},R="data-resources-url",U=new WeakMap,x=e=>"sc-"+e,L=[];function C(e,t){let n,s=null,l=!1,o=!1,i=arguments.length;for(;i-- >2;)L.push(arguments[i]);for(;L.length>0;){let t=L.pop();if(t&&void 0!==t.pop)for(i=t.length;i--;)L.push(t[i]);else"boolean"==typeof t&&(t=null),(o="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(o=!1)),o&&l?s[s.length-1].o+=t:null===s?s=[o?{t:0,o:t}:t]:s.push(o?{t:0,o:t}:t),l=o}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(i in t.class)t.class[i]&&L.push(i);t.class=L.join(" "),L.length=0}null!=t.key&&(n=t.key)}if("function"==typeof e)return e(t,s||[],E);const r={i:e,u:s,$:void 0,t:0};return r.p=t,r.o=void 0,r.h=n,r}const O={},E={forEach:(e,t)=>e.map(F).forEach(t),map:(e,t)=>e.map(F).map(t).map(P)},F=e=>({vattrs:e.p,vchildren:e.u,vkey:e.h,vname:e.g,vtag:e.i,vtext:e.o}),P=e=>({t:0,p:e.vattrs,u:e.vchildren,h:e.vkey,g:e.vname,i:e.vtag,o:e.vtext}),A=(e,t,s,l,o,i)=>{if(s!==l)if("class"!==t||o)if("style"===t){for(const t in s)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)s&&l[t]===s[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(t.startsWith("on")&&!c(e,t))t=c(e,j(t))?j(t.substring(2)):j(t[2])+t.substring(3),s&&n.rel(e,t,s,!1),l&&n.ael(e,t,l,!1);else{const n=c(e,t),s=["object","function"].includes(typeof l);if((n||s&&null!==l)&&!o)try{e[t]=null==l&&-1===e.tagName.indexOf("-")?"":l}catch(e){}null==l||!1===l?e.removeAttribute(t):(!n||4&i||o)&&!s&&(l=!0===l?"":l.toString(),e.setAttribute(t,l))}else{const t=T(s),n=T(e.className).filter(e=>!t.includes(e));e.className=n.concat(T(l).filter(e=>!n.includes(e))).join(" ")}},T=e=>e?e.split(" "):[],W=(e,t,n,s)=>{const l=11===t.$.nodeType&&t.$.host?t.$.host:t.$,o=e&&e.p||_,i=t.p||_;for(s in o)null==i[s]&&null!=o[s]&&A(l,s,o[s],void 0,n,t.t);for(s in i)A(l,s,o[s],i[s],n,t.t)};let q,B;const H=(e,n,s)=>{const l=n.u[s];let o,i,r=0;if(v(l.o))l.$=t.createTextNode(l.o);else if(o=l.$=t.createElement(l.i),W(null,l,!1),v(q)&&o["s-si"]!==q&&o.classList.add(o["s-si"]=q),l.u)for(r=0;r<l.u.length;++r)(i=H(e,l,r,o))&&o.appendChild(i);return l.$},N=(e,t,n,s,l,o)=>{let i,r=e;for(r.shadowRoot&&j(r.tagName)===B&&(r=r.shadowRoot);l<=o;++l)s[l]&&(i=H(null,n,l,e))&&(s[l].$=i,r.insertBefore(i,t))},z=(e,t,n,s)=>{for(;t<=n;++t)v(e[t])&&(s=e[t].$,I(e[t],!0),s.remove())},D=(e,t)=>e.i===t.i&&e.h===t.h,G=(e,t)=>{const n=t.$=e.$,s=e.u,l=t.u;v(t.o)?e.o!==t.o&&(n.textContent=t.o):(W(e,t,!1),v(s)&&v(l)?((e,t,n,s)=>{let l,o,i=0,r=0,c=0,a=0,f=t.length-1,u=t[0],$=t[f],m=s.length-1,p=s[0],y=s[m];for(;i<=f&&r<=m;)if(null==u)u=t[++i];else if(null==$)$=t[--f];else if(null==p)p=s[++r];else if(null==y)y=s[--m];else if(D(u,p))G(u,p),u=t[++i],p=s[++r];else if(D($,y))G($,y),$=t[--f],y=s[--m];else if(D(u,y))G(u,y),e.insertBefore(u.$,$.$.nextSibling),u=t[++i],y=s[--m];else if(D($,p))G($,p),e.insertBefore($.$,u.$),$=t[--f],p=s[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&v(t[a].h)&&t[a].h===p.h){c=a;break}c>=0?((o=t[c]).i!==p.i?l=H(t&&t[r],n,c,e):(G(o,p),t[c]=void 0,l=o.$),p=s[++r]):(l=H(t&&t[r],n,r,e),p=s[++r]),l&&u.$.parentNode.insertBefore(l,u.$)}i>f?N(e,null==s[m+1]?null:s[m+1].$,n,s,r,m):r>m&&z(t,i,f)})(n,s,t,l):v(l)?(v(e.o)&&(n.textContent=""),N(n,null,t,l,0,l.length-1)):v(s)&&z(s,0,s.length-1))},I=(e,t)=>{e&&(e.p&&e.p.ref&&e.p.ref(t?null:e.$),e.u&&e.u.forEach(e=>{I(e,t)}))},J=async(e,t,n,s)=>{t.t|=16;const l=t.l;g(()=>K(e,t,n,s,l))},K=(e,n,l,o,i)=>{n.t&=-17,o&&((e,n)=>{const l=((e,s,l,o)=>{let i=x(n._),r=f.get(i);if(e=11===e.nodeType?e:t,r)if("string"==typeof r){let n,s=U.get(e=e.head||e);if(s||U.set(e,s=new Set),!s.has(i)){if(u){const e=(n=u.createHostStyle(o,i,r))["s-sc"];e&&(i=e,s=null)}else(n=t.createElement("style")).innerHTML=r;e.appendChild(n),s&&s.add(i)}}else e.adoptedStyleSheets.includes(r)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,r]);return i})(s&&e.shadowRoot?e.shadowRoot:e.getRootNode(),0,0,e);10&n.t&&(e["s-sc"]=l,e.classList.add(l+"-h"))})(e,l),n.t|=4;try{((e,t,n,s)=>{const l=t.v||{t:0};B=j(e.tagName),(e=>e&&e.i===O)(s)?s.i=null:s=C(null,null,s),s.t|=4,t.v=s,s.$=l.$=e.shadowRoot||e,q=e["s-sc"],G(l,s)})(e,n,0,i.render())}catch(e){a(e)}n.t&=-5,u&&u.updateHost(e),n.t|=2,Q(e,n)},Q=(e,s)=>{if(!e["s-al"]){const l=s.j;512&s.t||(s.t|=512,e.classList.add("hydrated"),s.S(e),l||(t.documentElement.classList.add("hydrated"),setTimeout(()=>n.t|=2,999)))}},V=(e,t,n)=>{if(t.k){const s=Object.entries(t.k);if(s.forEach(([n,[s]])=>{31&s&&Object.defineProperty(e.prototype,n,{get(){return((e,t)=>i(e).M.get(t))(this,n)},set(e){((e,t,n,s)=>{const l=i(this),o=l.R,r=l.M.get(t),c=l.t;(n=((e,t)=>null!=e&&"object"!=typeof e&&"function"!=typeof e?4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e:e)(n,s.k[t][0]))===r||8&c&&void 0!==r||(l.M.set(t,n),l.l&&2==(22&c)&&J(o,l,s,!1))})(0,n,e,t)},configurable:!0,enumerable:!0})}),n){const t=new Map;e.prototype.attributeChangedCallback=function(e,n,s){const l=t.get(e);this[l]=(null!==s||"boolean"!=typeof this[l])&&s},e.observedAttributes=s.filter(([e,t])=>15&t[0]).map(([e,n])=>{const s=n[1]||e;return t.set(s,e),s})}}return e},X=(r,c={})=>{const $=[],m=c.exclude||[],p=t.head,y=e.customElements,d=p.querySelector("meta[charset]"),h=t.createElement("style");Object.assign(n,c),n.s=new URL(c.resourcesUrl||"/",t.baseURI).href,c.syncQueue&&(n.t|=4),r.forEach(e=>e[1].forEach(t=>{const r={t:t[0],_:t[1],k:t[2],U:t[3]};!s&&1&r.t&&(r.t|=8);const c=r._;r.L=e[0],m.includes(c)||y.get(c)||($.push(c),y.define(c,V(class extends HTMLElement{constructor(e){super(e),(e=>{{const t={t:0,R:e};t.C=new Promise(e=>t.S=e),t.M=new Map,o.set(e,t)}})(e=this),1&r.t&&(s?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){((e,t)=>{if(0==(1&n.t)){const n=i(e);1&n.t||(n.t|=1,t.k&&Object.entries(t.k).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,s,o)=>{if(0==(256&t.t)){t.t|=256,(o=await(e=>__sc_import_rmslogin(`./${e.L}.entry.js`).then(t=>t[e._.replace(/-/g,"_")],a))(n)).isProxied||(V(o,n,0),o.isProxied=!0),t.t|=8;try{new o(t)}catch(e){a(e)}if(t.t&=-9,!o.isStyleRegistered&&o.style){let e=o.style,t=x(n._);8&n.t&&(e=await __sc_import_rmslogin("./p-549b16dd.js").then(n=>n.scopeCss(e,t,!1))),((e,t)=>{let n=f.get(e);l?(n=n||new CSSStyleSheet).replace(t):n=t,f.set(e,n)})(t,e),o.isStyleRegistered=!0}}J(e,t,n,!0)})(e,n,t))}})(this,r)}disconnectedCallback(){0==(1&n.t)&&u&&u.removeHost(this)}"s-init"(){const e=i(this);e.l&&Q(this,e)}"s-hmr"(e){}forceUpdate(){J(this,i(this),r,!1)}componentOnReady(){return i(this).C}},r,1)))})),h.innerHTML=$+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),p.insertBefore(h,d?d.nextSibling:p.firstChild)},Y=(e,t,n)=>{const s=Z(e);return{emit:e=>s.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},Z=e=>i(e).R;export{k as a,X as b,S as c,r as d,Y as e,C as f};
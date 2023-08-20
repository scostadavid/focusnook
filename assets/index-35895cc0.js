(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function b(){}function de(e,t){for(const n in t)e[n]=t[n];return e}function ue(e){return e()}function oe(){return Object.create(null)}function Q(e){e.forEach(ue)}function te(e){return typeof e=="function"}function P(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function me(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function j(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e){return document.createElement(e)}function L(e){return document.createTextNode(e)}function T(){return L(" ")}function _e(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function Y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let U;function B(e){U=e}function ce(){if(!U)throw new Error("Function called outside component initialization");return U}function ge(e){ce().$$.on_mount.push(e)}function he(e){ce().$$.after_update.push(e)}const I=[],se=[],G=[],le=[],$e=Promise.resolve();let Z=!1;function be(){Z||(Z=!0,$e.then(fe))}function ee(e){G.push(e)}const W=new Set;let D=0;function fe(){const e=U;do{for(;D<I.length;){const t=I[D];D++,B(t),ye(t.$$)}for(B(null),I.length=0,D=0;se.length;)se.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];W.has(n)||(W.add(n),n())}G.length=0}while(I.length);for(;le.length;)le.pop()();Z=!1,W.clear(),B(e)}function ye(e){if(e.fragment!==null){e.update(),Q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ee)}}const J=new Set;let we;function S(e,t){e&&e.i&&(J.delete(e),e.i(t))}function F(e,t,n,s){if(e&&e.o){if(J.has(e))return;J.add(e),we.c.push(()=>{J.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function ke(e,t){const n={},s={},o={$$scope:1};let r=e.length;for(;r--;){const l=e[r],f=t[r];if(f){for(const c in l)c in f||(s[c]=1);for(const c in f)o[c]||(n[c]=f[c],o[c]=1);e[r]=f}else for(const c in l)o[c]=1}for(const l in s)l in n||(n[l]=void 0);return n}function N(e){e&&e.c()}function C(e,t,n,s){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),s||ee(()=>{const l=e.$$.on_mount.map(ue).filter(te);e.$$.on_destroy?e.$$.on_destroy.push(...l):Q(l),e.$$.on_mount=[]}),r.forEach(ee)}function E(e,t){const n=e.$$;n.fragment!==null&&(Q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ve(e,t){e.$$.dirty[0]===-1&&(I.push(e),be(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,n,s,o,r,l,f=[-1]){const c=U;B(e);const i=e.$$={fragment:null,ctx:[],props:r,update:b,not_equal:o,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:oe(),dirty:f,skip_bound:!1,root:t.target||c.$$.root};l&&l(i.root);let d=!1;if(i.ctx=n?n(e,t.props||{},(_,y,...h)=>{const $=h.length?h[0]:y;return i.ctx&&o(i.ctx[_],i.ctx[_]=$)&&(!i.skip_bound&&i.bound[_]&&i.bound[_]($),d&&ve(e,_)),y}):[],i.update(),d=!0,Q(i.before_update),i.fragment=s?s(i.ctx):!1,t.target){if(t.hydrate){const _=pe(t.target);i.fragment&&i.fragment.l(_),_.forEach(M)}else i.fragment&&i.fragment.c();t.intro&&S(e.$$.fragment),C(e,t.target,t.anchor,t.customElement),fe()}B(c)}class K{$destroy(){E(this,1),this.$destroy=b}$on(t,n){if(!te(n))return b;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}$set(t){this.$$set&&!me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Se(e){let t,n,s,o;return{c(){t=g("button"),n=L(e[0]),m(t,"class","svelte-aqa64u")},m(r,l){j(r,t,l),a(t,n),s||(o=_e(t,"click",function(){te(e[1])&&e[1].apply(this,arguments)}),s=!0)},p(r,[l]){e=r,l&1&&Y(n,e[0])},i:b,o:b,d(r){r&&M(t),s=!1,o()}}}function Ce(e,t,n){let{label:s}=t,{onClick:o}=t;return e.$$set=r=>{"label"in r&&n(0,s=r.label),"onClick"in r&&n(1,o=r.onClick)},[s,o]}class x extends K{constructor(t){super(),H(this,t,Ce,Se,P,{label:0,onClick:1})}}function Ee(e){let t,n,s,o,r,l,f,c;return{c(){t=g("footer"),n=g("p"),s=L("Focus Nook© by "),o=g("a"),o.textContent="scostadavid",r=L(`
    check out `),l=g("a"),l.textContent="github",f=L(` and
    `),c=g("a"),c.textContent="support the project 😊",m(o,"href","https://scostadavid.github.io"),m(o,"target","_blank"),m(o,"rel","noreferrer noopener"),m(l,"href","https://github.com/scostadavid/focus-nook.git"),m(l,"target","_blank"),m(l,"rel","noreferrer noopener"),m(c,"href","https://www.buymeacoffee.com/scostadavid"),m(c,"target","_blank"),m(c,"rel","noreferrer noopener"),m(t,"class","app__footer svelte-1x5xl13")},m(i,d){j(i,t,d),a(t,n),a(n,s),a(n,o),a(n,r),a(n,l),a(n,f),a(n,c)},p:b,i:b,o:b,d(i){i&&M(t)}}}class Le extends K{constructor(t){super(),H(this,t,null,Ee,P,{})}}function Fe(e){let t;return{c(){t=g("header"),t.innerHTML='<h1 class="svelte-byli7e">🎯 Focus Nook</h1>',m(t,"class","header svelte-byli7e")},m(n,s){j(n,t,s)},p:b,i:b,o:b,d(n){n&&M(t)}}}class Ne extends K{constructor(t){super(),H(this,t,null,Fe,P,{})}}function Te(e){let t,n,s,o,r,l,f,c;return{c(){t=g("div"),n=g("p"),s=L(e[0]),o=T(),r=g("p"),l=L("It's "),f=L(e[1]),c=L(" time"),m(n,"class","timer__label svelte-y21wcw"),m(r,"class","timer__mode-label svelte-y21wcw"),m(t,"class","timer svelte-y21wcw")},m(i,d){j(i,t,d),a(t,n),a(n,s),a(t,o),a(t,r),a(r,l),a(r,f),a(r,c)},p(i,[d]){d&1&&Y(s,i[0]),d&2&&Y(f,i[1])},i:b,o:b,d(i){i&&M(t)}}}function Oe(e,t,n){let{time:s}=t,{currentModeLabel:o}=t;return e.$$set=r=>{"time"in r&&n(0,s=r.time),"currentModeLabel"in r&&n(1,o=r.currentModeLabel)},[s,o]}class Me extends K{constructor(t){super(),H(this,t,Oe,Te,P,{time:0,currentModeLabel:1})}}function Ae(e){let t,n,s,o,r,l,f,c,i,d,_,y,h,$,k,w,q,v,V,O,A;n=new Ne({}),f=new x({props:{label:"Pomodoro",onClick:e[9]}}),i=new x({props:{label:"Short break",onClick:e[10]}}),_=new x({props:{label:"Long break",onClick:e[11]}});const z=[{currentModeLabel:e[5][e[0]],time:e[1]}];let p={};for(let u=0;u<z.length;u+=1)p=de(p,z[u]);return h=new Me({props:p}),w=new x({props:{label:e[3],onClick:e[8]}}),v=new x({props:{label:"Reset",onClick:e[12]}}),O=new Le({}),{c(){t=g("main"),N(n.$$.fragment),s=T(),o=g("section"),r=g("div"),l=g("div"),N(f.$$.fragment),c=T(),N(i.$$.fragment),d=T(),N(_.$$.fragment),y=T(),N(h.$$.fragment),$=T(),k=g("div"),N(w.$$.fragment),q=T(),N(v.$$.fragment),V=T(),N(O.$$.fragment),m(l,"class","clock--modes svelte-17wshuu"),m(k,"class","clock--options svelte-17wshuu"),m(r,"class","clock svelte-17wshuu"),m(o,"class","pomodoro svelte-17wshuu"),m(t,"class","app svelte-17wshuu")},m(u,R){j(u,t,R),C(n,t,null),a(t,s),a(t,o),a(o,r),a(r,l),C(f,l,null),a(l,c),C(i,l,null),a(l,d),C(_,l,null),a(r,y),C(h,r,null),a(r,$),a(r,k),C(w,k,null),a(k,q),C(v,k,null),a(t,V),C(O,t,null),A=!0},p(u,[R]){const ae=R&35?ke(z,[{currentModeLabel:u[5][u[0]],time:u[1]}]):{};h.$set(ae);const ne={};R&8&&(ne.label=u[3]),w.$set(ne);const re={};R&4&&(re.onClick=u[12]),v.$set(re)},i(u){A||(S(n.$$.fragment,u),S(f.$$.fragment,u),S(i.$$.fragment,u),S(_.$$.fragment,u),S(h.$$.fragment,u),S(w.$$.fragment,u),S(v.$$.fragment,u),S(O.$$.fragment,u),A=!0)},o(u){F(n.$$.fragment,u),F(f.$$.fragment,u),F(i.$$.fragment,u),F(_.$$.fragment,u),F(h.$$.fragment,u),F(w.$$.fragment,u),F(v.$$.fragment,u),F(O.$$.fragment,u),A=!1},d(u){u&&M(t),E(n),E(f),E(i),E(_),E(h),E(w),E(v),E(O)}}}const ie=5,Re=15,X=25;function xe(e,t,n){var s=(p=>(p[p.FOCUS=0]="FOCUS",p[p.REST=1]="REST",p))(s||{});let o=null,r=0,l="25:00",f=null,c=25,i,d=0;const _={[0]:"Start",[1]:"Pause",[2]:"Resume"},y={[0]:"Focus 🎯",[1]:"Rest 😴"},h=new Audio("/random.wav"),$=(p,u)=>{clearInterval(o),n(1,l=`${p.toString().padStart(2,"0")}:00`),d=0,n(3,i=_[d]),n(0,r=u),f=p*60,n(2,c=p)},k=p=>{$(p,r)},w=()=>{switch(d){case 0:o=setInterval(v,1e3),h.play(),d=1;break;case 1:d=2;break;case 2:h.play(),d=1;break}n(3,i=_[d])},q=()=>{if(h.play(),r===0){n(0,r=1),$(ie,r),document.title=`(${l}) Focus Nook - ${y[r]}`,w();return}n(0,r=0),document.title=`(${l}) Focus Nook - ${y[r]}`,$(X,r)},v=()=>{if(f<=0){q();return}if(d===2)return;f--;const p=Math.floor(f/60),u=f-p*60;n(3,i=_[d]),n(1,l=`${p.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`)};return ge(()=>{document.title=`(${l}) Focus Nook - ${y[r]}`,$(X,r)}),he(()=>{document.title=`(${l}) Focus Nook - ${y[r]}`}),[r,l,c,i,s,y,$,k,w,()=>$(X,s.FOCUS),()=>$(ie,s.REST),()=>$(Re,s.REST),()=>k(c)]}class Ie extends K{constructor(t){super(),H(this,t,xe,Ae,P,{})}}new Ie({target:document.getElementById("app")});
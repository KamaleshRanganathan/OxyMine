var On=Array.isArray,In=Array.from,kn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Kt=Object.getOwnPropertyDescriptors,Nn=Object.prototype,Cn=Array.prototype,$t=Object.getPrototypeOf;const Pn=()=>{};function bn(t){return t()}function Zt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,dt=4,j=8,lt=16,m=32,z=64,tt=128,O=256,G=512,h=1024,R=2048,H=4096,P=8192,b=16384,zt=32768,Et=65536,Fn=1<<17,Wt=1<<19,yt=1<<20,ct=Symbol("$state"),qn=Symbol("legacy props"),Ln=Symbol("");function wt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Xt(t,this.v)}function Jt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Qt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function tn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function nn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Mn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Yn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Hn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function rn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Bn(){W=!0}function at(t){return{f:0,v:t,reactions:null,equals:wt,version:0}}function Un(t){return sn(at(t))}function Vn(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function sn(t){return o!==null&&o.f&y&&(T===null?Tn([t]):T.push(t)),t}function Gn(t,n){return o!==null&&it()&&o.f&(y|lt)&&(T===null||!T.includes(t))&&en(),ln(t,n)}function ln(t,n){return t.equals(n)||(t.v=n,t.version=jt(),mt(t,R),it()&&u!==null&&u.f&h&&!(u.f&m)&&(v!==null&&v.includes(t)?(A(u,R),Q(u)):g===null?mn([t]):g.push(t))),n}function mt(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,l=0;l<s;l++){var a=r[l],i=a.f;i&R||!e&&a===u||(A(a,n),i&(h|O)&&(i&y?mt(a,H):Q(a)))}}function At(t){console.warn("https://svelte.dev/e/hydration_mismatch")}const Kn=1,$n=2,Zn=16,zn=1,Wn=2,Xn=4,Jn=8,Qn=16,tr=1,nr=2,an="[",un="[!",on="]",gt={},rr=Symbol();let S=!1;function er(t){S=t}let w;function q(t){if(t===null)throw At(),gt;return w=t}function sr(){return q(I(w))}function lr(t){if(S){if(I(w)!==null)throw At(),gt;w=t}}function ar(t=1){if(S){for(var n=t,r=w;n--;)r=I(r);w=r}}function ur(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===an||r===un)&&(t+=1)}var e=I(n);n.remove(),n=e}}var vt,Rt,xt;function or(){if(vt===void 0){vt=window;var t=Element.prototype,n=Node.prototype;Rt=_t(n,"firstChild").get,xt=_t(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Rt.call(t)}function I(t){return xt.call(t)}function ir(t,n){if(!S)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function fr(t,n){if(!S){var r=rt(t);return r instanceof Comment&&r.data===""?I(r):r}return w}function _r(t,n=1,r=!1){let e=S?w:t;for(var s;n--;)s=e,e=I(e);if(!S)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=nt();return e===null?s==null||s.after(a):e.before(a),q(a),a}return q(e),e}function cr(t){t.textContent=""}function fn(t){var n=y|R;u===null?n|=O:u.f|=yt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:wt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function vr(t){const n=fn(t);return n.equals=Tt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ut(e):D(e)}}}function _n(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Dt(t){var n,r=u;Z(_n(t));try{St(t),n=Ht(t)}finally{Z(r)}return n}function Ot(t){var n=Dt(t),r=(k||t.f&O)&&t.deps!==null?H:h;A(t,r),t.equals(n)||(t.v=n,t.version=jt())}function ut(t){St(t),Y(t,0),A(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){u===null&&o===null&&tn(),o!==null&&o.f&O&&Qt(),ot&&Jt()}function cn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&z)!==0,l=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{pt(!0),J(a),a.f|=zt}catch(_){throw D(a),_}finally{pt(i)}}else n!==null&&Q(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&yt)===0;if(!p&&!s&&e&&(l!==null&&cn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function pr(t){const n=F(j,null,!1);return A(n,h),n.teardown=t,n}function hr(t){It();var n=u!==null&&(u.f&m)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=kt(t);return e}}function dr(t){return It(),vn(t)}function Er(t){const n=F(z,t,!0);return(r={})=>new Promise(e=>{r.outro?dn(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function kt(t){return F(dt,t,!1)}function vn(t){return F(j,t,!0)}function yr(t){return pn(t)}function pn(t,n=0){return F(j|lt|n,t,!0)}function wr(t,n=!0){return F(j|m,t,!0,n)}function Nt(t){var n=t.teardown;if(n!==null){const r=ot,e=o;ht(!0),$(null);try{n.call(null)}finally{ht(r),$(e)}}}function Ct(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ut(n[r])}}function Pt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;D(r,n),r=e}}function hn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&m||D(n),n=r}}function D(t,n=!0){var r=!1;if((n||t.f&Wt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:I(e);e.remove(),e=l}r=!0}Pt(t,n&&!r),Ct(t),Y(t,0),A(t,b);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Nt(t);var i=t.parent;i!==null&&i.first!==null&&bt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function bt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function dn(t,n){var r=[];Ft(t,r,!0),En(r,()=>{D(t),n&&n()})}function En(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&Et)!==0||(e.f&m)!==0;Ft(e,n,l?r:!1),e=s}}}function Tr(t){qt(t,!0)}function qt(t,n){if(t.f&P){B(t)&&J(t),t.f^=P;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&Et)!==0||(r.f&m)!==0;qt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let K=!1,et=[];function Lt(){K=!1;const t=et.slice();et=[],Zt(t)}function mr(t){K||(K=!0,queueMicrotask(Lt)),et.push(t)}function yn(){K&&Lt()}const Mt=0,wn=1;let U=!1,V=Mt,L=!1,M=null,N=!1,ot=!1;function pt(t){N=t}function ht(t){ot=t}let x=[],C=0;let o=null;function $(t){o=t}let u=null;function Z(t){u=t}let T=null;function Tn(t){T=t}let v=null,E=0,g=null;function mn(t){g=t}let Yt=0,k=!1,f=null;function jt(){return++Yt}function it(){return!W||f!==null&&f.l===null}function B(t){var a,i;var n=t.f;if(n&R)return!0;if(n&H){var r=t.deps,e=(n&O)!==0;if(r!==null){var s;if(n&G){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=G}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&Ot(l),e&&u!==null&&!k&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||A(t,h)}return!1}function An(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw U=!1,t}function gn(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(U){if(r===null&&(U=!1),gn(n))throw t;return}r!==null&&(U=!0);{An(t,n);return}}function Ht(t){var ft;var n=v,r=E,e=g,s=o,l=k,a=T,i=f,p=t.f;v=null,E=0,g=null,o=p&(m|z)?null:t,k=!N&&(p&O)!==0,T=null,f=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(Y(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!k)for(c=E;c<_.length;c++)((ft=_[c]).reactions??(ft.reactions=[])).push(t)}else _!==null&&E<_.length&&(Y(t,E),_.length=E);return d}finally{v=n,E=r,g=e,o=s,k=l,T=a,f=i}}function Rn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(A(n,H),n.f&(O|G)||(n.f^=G),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Rn(t,r[e])}function J(t){var n=t.f;if(!(n&b)){A(t,h);var r=u,e=f;u=t;try{n&lt?hn(t):Pt(t),Ct(t),Nt(t);var s=Ht(t);t.teardown=typeof s=="function"?s:null,t.version=Yt}catch(l){X(l,t,r,e||t.ctx)}finally{u=r}}}function Bt(){if(C>1e3){C=0;try{nn()}catch(t){if(M!==null)X(t,M,null);else throw t}}C++}function Ut(t){var n=t.length;if(n!==0){Bt();var r=N;N=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Vt(s,l),xn(l)}}finally{N=r}}}function xn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|P)))try{B(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?bt(e):e.fn=null))}catch(s){X(s,e,null,e.ctx)}}}function Sn(){if(L=!1,C>1001)return;const t=x;x=[],Ut(t),L||(C=0,M=null)}function Q(t){V===Mt&&(L||(L=!0,queueMicrotask(Sn))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|m)){if(!(r&h))return;n.f^=h}}x.push(n)}function Vt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&h)!==0,i=r.next;if(!a&&!(s&P))if(s&j){if(l)r.f^=h;else try{B(r)&&J(r)}catch(c){X(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&dt&&e.push(r);if(i===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=i}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Vt(p,n)}function Gt(t){var n=V,r=x;try{Bt();const s=[];V=wn,x=s,L=!1,Ut(r);var e=t==null?void 0:t();return yn(),(x.length>0||s.length>0)&&Gt(),C=0,M=null,e}finally{V=n,x=r}}async function Ar(){await Promise.resolve(),Gt()}function gr(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&b){var e=Dt(t);return ut(t),e}if(o!==null){T!==null&&T.includes(t)&&rn();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),g!==null&&u!==null&&u.f&h&&!(u.f&m)&&g.includes(t)&&(A(u,R),Q(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,i=l;a!==null;)if(a.f&y){var p=a;i=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(i)||(d.deriveds??(d.deriveds=[])).push(i);break}return r&&(l=t,B(l)&&Ot(l)),t.v}function Rr(t){const n=o;try{return o=null,t()}finally{o=n}}const Dn=~(R|H|h);function A(t,n){t.f=t.f&Dn|n}function xr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function Sr(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];Z(l.effect),$(l.reaction),kt(l.fn)}}finally{Z(r),$(e)}}f=n.p,n.m=!0}return{}}function Dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Kt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{or as $,zn as A,m as B,Qn as C,Vn as D,Pn as E,pr as F,dr as G,hr as H,f as I,Zt as J,bn as K,Ln as L,Dr as M,xr as N,fr as O,Wn as P,yr as Q,z as R,ct as S,Sr as T,rr as U,ir as V,lr as W,_r as X,kn as Y,$ as Z,o as _,Kt as a,rt as a0,an as a1,I as a2,gt as a3,er as a4,q as a5,sr as a6,w as a7,on as a8,At as a9,Ar as aA,Un as aB,Xt as aC,Mn as aa,cr as ab,In as ac,Er as ad,nt as ae,wr as af,pn as ag,un as ah,ur as ai,P as aj,Tr as ak,dn as al,ln as am,Ft as an,En as ao,D as ap,$n as aq,Kn as ar,Zn as as,tr as at,nr as au,Et as av,kt as aw,vn as ax,mr as ay,Gt as az,Cn as b,jn as c,Gn as d,Bn as e,_t as f,$t as g,S as h,gr as i,u as j,Hn as k,On as l,Fn as m,ar as n,Nn as o,Yn as p,Z as q,W as r,at as s,Jn as t,qn as u,Rr as v,fn as w,vr as x,Xn as y,Tt as z};

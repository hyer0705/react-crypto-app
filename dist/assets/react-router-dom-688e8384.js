import{r as i,a as U}from"./react-7c714f5d.js";import{m as O,D,a as j,R as I,u as F,N as z,b as B,c as V,d as H,e as K}from"./react-router-5e081434.js";import{c as N,d as A,E as M,s as W,e as _}from"./@remix-run-f7b0bfad.js";/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S(){return S=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},S.apply(this,arguments)}function G(e,n){if(e==null)return{};var t={},a=Object.keys(e),r,s;for(s=0;s<a.length;s++)r=a[s],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function X(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function q(e,n){return e.button===0&&(!n||n==="_self")&&!X(e)}const J=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function ue(e,n){return N({basename:n==null?void 0:n.basename,future:S({},n==null?void 0:n.future,{v7_prependBasename:!0}),history:A({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||Q(),routes:e,mapRouteProperties:O,window:n==null?void 0:n.window}).initialize()}function Q(){var e;let n=(e=window)==null?void 0:e.__staticRouterHydrationData;return n&&n.errors&&(n=S({},n,{errors:Y(n.errors)})),n}function Y(e){if(!e)return null;let n=Object.entries(e),t={};for(let[a,r]of n)if(r&&r.__type==="RouteErrorResponse")t[a]=new M(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let s=window[r.__subType];if(typeof s=="function")try{let o=new s(r.message);o.stack="",t[a]=o}catch{}}if(t[a]==null){let s=new Error(r.message);s.stack="",t[a]=s}}else t[a]=r;return t}const Z=i.createContext({isTransitioning:!1}),$="startTransition",C=U[$];function ee(e){C?C(e):e()}class te{constructor(){this.status="pending",this.promise=new Promise((n,t)=>{this.resolve=a=>{this.status==="pending"&&(this.status="resolved",n(a))},this.reject=a=>{this.status==="pending"&&(this.status="rejected",t(a))}})}}function ce(e){let{fallbackElement:n,router:t,future:a}=e,[r,s]=i.useState(t.state),[o,w]=i.useState(),[d,l]=i.useState({isTransitioning:!1}),[u,g]=i.useState(),[v,b]=i.useState(),[m,y]=i.useState(),{v7_startTransition:E}=a||{},T=i.useCallback(c=>{E?ee(c):c()},[E]),L=i.useCallback((c,R)=>{let{unstable_viewTransitionOpts:f}=R;!f||t.window==null||typeof t.window.document.startViewTransition!="function"?T(()=>s(c)):v&&u?(u.resolve(),v.skipTransition(),y({state:c,currentLocation:f.currentLocation,nextLocation:f.nextLocation})):(w(c),l({isTransitioning:!0,currentLocation:f.currentLocation,nextLocation:f.nextLocation}))},[T,v,u,t.window]);i.useLayoutEffect(()=>t.subscribe(L),[t,L]),i.useEffect(()=>{d.isTransitioning&&g(new te)},[d.isTransitioning]),i.useEffect(()=>{if(u&&o&&t.window){let c=o,R=u.promise,f=t.window.document.startViewTransition(async()=>{T(()=>s(c)),await R});f.finished.finally(()=>{g(void 0),b(void 0),w(void 0),l({isTransitioning:!1})}),b(f)}},[T,o,u,t.window]),i.useEffect(()=>{u&&o&&r.location.key===o.location.key&&u.resolve()},[u,v,r.location,o]),i.useEffect(()=>{!d.isTransitioning&&m&&(w(m.state),l({isTransitioning:!0,currentLocation:m.currentLocation,nextLocation:m.nextLocation}),y(void 0))},[d.isTransitioning,m]);let p=i.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:c=>t.navigate(c),push:(c,R,f)=>t.navigate(c,{state:R,preventScrollReset:f==null?void 0:f.preventScrollReset}),replace:(c,R,f)=>t.navigate(c,{replace:!0,state:R,preventScrollReset:f==null?void 0:f.preventScrollReset})}),[t]),h=t.basename||"/",x=i.useMemo(()=>({router:t,navigator:p,static:!1,basename:h}),[t,p,h]);return i.createElement(i.Fragment,null,i.createElement(D.Provider,{value:x},i.createElement(j.Provider,{value:r},i.createElement(Z.Provider,{value:d},i.createElement(I,{basename:h,location:r.location,navigationType:r.historyAction,navigator:p},r.initialized?i.createElement(ne,{routes:t.routes,state:r}):n)))),null)}function ne(e){let{routes:n,state:t}=e;return F(n,void 0,t)}const re=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ie=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=i.forwardRef(function(n,t){let{onClick:a,relative:r,reloadDocument:s,replace:o,state:w,target:d,to:l,preventScrollReset:u,unstable_viewTransition:g}=n,v=G(n,J),{basename:b}=i.useContext(z),m,y=!1;if(typeof l=="string"&&ie.test(l)&&(m=l,re))try{let p=new URL(window.location.href),h=l.startsWith("//")?new URL(p.protocol+l):new URL(l),x=W(h.pathname,b);h.origin===p.origin&&x!=null?l=x+h.search+h.hash:y=!0}catch{}let E=B(l,{relative:r}),T=ae(l,{replace:o,state:w,target:d,preventScrollReset:u,relative:r,unstable_viewTransition:g});function L(p){a&&a(p),p.defaultPrevented||T(p)}return i.createElement("a",S({},v,{href:m||E,onClick:y||s?a:L,ref:t,target:d}))});var k;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(k||(k={}));var P;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(P||(P={}));function ae(e,n){let{target:t,replace:a,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:w}=n===void 0?{}:n,d=V(),l=H(),u=K(e,{relative:o});return i.useCallback(g=>{if(q(g,t)){g.preventDefault();let v=a!==void 0?a:_(l)===_(u);d(e,{replace:v,state:r,preventScrollReset:s,relative:o,unstable_viewTransition:w})}},[l,d,u,a,r,t,e,s,o,w])}export{fe as L,ce as R,ue as c};
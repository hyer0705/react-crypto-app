import{j as e,R as L}from"./react-7c714f5d.js";import{c as F}from"./react-dom-e1f750fa.js";import{L as h,c as _,R as M}from"./react-router-dom-688e8384.js";import{u as m,Q as P,a as R}from"./@tanstack-bf7db75e.js";import{R as q,a as A,b as B,c as H}from"./recoil-f1ca5b05.js";import{s,a as z,X as N}from"./styled-components-74fa154a.js";import{H as b}from"./react-helmet-ce90b1a4.js";import{r as O}from"./styled-reset-c4d640f9.js";import{O as y,d as k,f as g,g as j}from"./react-router-5e081434.js";import{_ as S}from"./react-apexcharts-de1521e5.js";import"./apexcharts-31190f74.js";import"./scheduler-765c72db.js";import"./@remix-run-f7b0bfad.js";import"./tslib-ce936417.js";import"./@emotion-019a61c4.js";import"./stylis-bbc0ab72.js";import"./prop-types-22953a06.js";import"./react-side-effect-efca1a9f.js";import"./react-fast-compare-cb71bd50.js";import"./object-assign-3bccc760.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();function v(r){return`https://coinicons-api.vercel.app/api/icon/${r}`}const w="https://api.coinpaprika.com/v1";function W(){return fetch(`${w}/tickers`).then(r=>r.json()).then(r=>r.slice(0,100))}function C(r){return fetch(`${w}/tickers/${r}`).then(o=>o.json())}function E(r){return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${r}`).then(o=>o.json())}function $(r){return`${r} | Crypto Tracker`}const K=s.header``,V=s.h1`
  text-align: center;
  font-size: 56px;
`,Q=s.main``,U=s.ul`
  margin-top: 3rem;
`,G=s.li`
  font-size: 24px;
  margin-bottom: 1.5rem;
  background-color: ${r=>r.theme.colors.card};
  border-radius: 0.5rem;
  overflow: hidden;
  a {
    width: 100%;
    padding: 1.5rem 3rem;
    display: block;
    display: flex;
    align-items: center;
  }
`,X=s.img`
  width: 36px;
  margin-right: 1.5rem;
  background-color: inherit;
`,D=s.span`
  background-color: inherit;
`;function I(){const{data:r,isLoading:o}=m({queryKey:["allCoins"],queryFn:W});return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx("title",{children:$("Home")})}),e.jsx(K,{children:e.jsx(V,{children:"Coins"})}),e.jsx(Q,{children:o?e.jsx("h3",{children:"Loading..."}):e.jsx(U,{children:r==null?void 0:r.map(i=>e.jsx(G,{children:e.jsxs(h,{to:`/${i.id}`,state:{coinName:i.name},children:[e.jsx(X,{src:v(i.symbol.toLowerCase())}),e.jsx(D,{children:i.name})]})},i.id))})})]})}const J={colors:{bg:"#23262F",card:"#393C44",text:"#F0F0F1",subText:"#7B7D82",activeTab:"#58BC7C",activeText:"#000",hoverTab:"#94CA75"}},Y={colors:{bg:"#F6F6F6",card:"#FFFFFF",text:"#23262F",subText:"#919297",activeTab:"#58BC7C",activeText:"#000",hoverTab:"#94CA75"}},T=q({key:"isDark",default:!0}),Z=z`
  ${O}
  * {
    box-sizing: border-box;
    color: ${r=>r.theme.colors.text};
  }
  body {
    background-color: ${r=>r.theme.colors.bg};
  }
  a {
    text-decoration: none;
    background-color: inherit;
  }
`,ee=s.div`
  position: relative;
  width: 100%;
  max-width: 576px;
  margin: 0 auto;
  padding: 3rem 0;
`,re=s.button`
  z-index: 2;
  position: absolute;
  right: 0;
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: ${r=>r.theme.colors.activeTab};
  color: ${r=>r.theme.colors.activeText};
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${r=>r.theme.colors.hoverTab};
  }
`;function te(){const[r,o]=A(T),i=()=>o(c=>!c);return e.jsxs(N,{theme:r?J:Y,children:[e.jsxs(ee,{children:[e.jsxs(re,{onClick:i,children:[r?e.jsx("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}):null,r?null:e.jsx("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})]}),e.jsx(y,{})]}),e.jsx(Z,{})]})}const oe=s.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,se=s.h1`
  text-align: center;
  font-size: 2rem;
`,ne=s.span`
  display: inline-block;
  padding: 0.5rem;
  background-color: ${r=>r.theme.colors.card};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: 0;

  svg {
    width: 28px;
    background-color: inherit;
  }
`,ie=s.main`
  margin: 3rem 0;
`,ce=s.div`
  background: ${r=>r.theme.colors.card};
  padding: 1rem 3rem;
  border-radius: 0.5rem;
`,x=s.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 52px;
    margin-right: 1rem;
  }
`,ae=s.span`
  color: ${r=>r.theme.colors.subText};
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 1rem;
`,le=s.span`
  background-color: ${r=>r.theme.colors.activeTab};
  color: ${r=>r.theme.colors.activeText};
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
`,de=s.span`
  font-size: 2rem;
  font-weight: 700;
`,d=s.span`
  font-weight: 700;
  margin-right: 0.5rem;

  &:nth-child(odd) {
    color: ${r=>r.theme.colors.subText};
  }
  &:nth-child(2) {
    margin-right: 1rem;
  }
`,he=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,f=s.div`
  background-color: ${r=>r.$isActive?r.theme.colors.activeTab:r.theme.colors.card};

  overflow: hidden;
  border-radius: 0.5rem;
  width: 48%;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${r=>r.theme.colors.activeTab};
    a {
      color: ${r=>r.theme.colors.activeText};
    }
  }
  a {
    width: 100%;
    padding: 1rem 1.5rem;
    text-align: center;
    color: ${r=>r.$isActive?r.theme.colors.activeText:r.theme.colors.text};
  }
`;function me(){var a;const{state:r}=k(),{coinId:o}=g(),i=j("/:coinId/price"),c=j("/:coinId/chart"),{data:t,isLoading:n}=m({queryKey:["fetchCoin",o],queryFn:()=>C(o||"")});return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx("title",{children:$(r?r.coinName:n?"Loading...":t==null?void 0:t.name)})}),e.jsxs(oe,{children:[e.jsx(ne,{children:e.jsx(h,{to:"/",children:e.jsx("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})})}),e.jsx(se,{children:n?"Loading...":r?r.coinName:t==null?void 0:t.name})]}),e.jsx(ie,{children:n?"Loading...":e.jsxs(ce,{children:[e.jsxs(x,{children:[e.jsx("img",{src:v((t==null?void 0:t.symbol.toLowerCase())||""),alt:t==null?void 0:t.name}),e.jsxs(ae,{children:[t==null?void 0:t.name," Price"]}),e.jsxs(le,{children:["Rank ",t==null?void 0:t.rank]})]}),e.jsx(x,{children:e.jsxs(de,{children:["$",(a=t==null?void 0:t.quotes.USD.price)==null?void 0:a.toFixed(2)]})}),e.jsxs(x,{children:[e.jsx(d,{children:"total supply: "}),e.jsxs(d,{children:["$",t==null?void 0:t.total_supply]}),e.jsx(d,{children:"max supply: "}),e.jsxs(d,{children:["$",t==null?void 0:t.max_supply]})]})]})}),e.jsxs(he,{children:[e.jsx(f,{$isActive:c!==null,children:e.jsx(h,{to:`/${o}/chart`,state:{coinName:r?r.coinName:t==null?void 0:t.name},children:"Chart"})}),e.jsx(f,{$isActive:i!==null,children:e.jsx(h,{to:`/${o}/price`,state:{coinName:r?r.coinName:t==null?void 0:t.name,priceData:t==null?void 0:t.quotes.USD},children:"Price"})})]}),e.jsx(y,{})]})}function xe(){return e.jsxs("div",{children:[e.jsx("h1",{children:"Oops..."}),e.jsx("p",{children:"Sorry, an unexpected error has occurred."}),e.jsx("p",{children:"test"})]})}const ue=s.main`
  margin-top: 3rem;
`,u=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,l=s.div`
  width: 48%;
  padding: 1rem 2rem;
  background-color: ${r=>r.theme.colors.card};
  border-radius: 0.5rem;
  h1 {
    font-size: 16px;
    margin-bottom: 0.8rem;
  }
  span {
    font-size: 20px;
    font-weight: 700;
  }
`,p=s.h1`
  font-weight: 700;
  border-bottom: 3px solid ${r=>r.theme.colors.card};
  padding: 1rem 0;
  margin-bottom: 1rem;
`;function pe(){const{state:r}=k(),{coinId:o}=g(),{data:i,isLoading:c}=m({queryKey:["fetchCoinPrice",o],queryFn:()=>C(o||"")}),t=r?r.priceData:i==null?void 0:i.quotes.USD;return e.jsx(ue,{children:c?"Loading...":e.jsxs(e.Fragment,{children:[e.jsx(p,{children:"Volume"}),e.jsxs(u,{children:[e.jsxs(l,{children:[e.jsx("h1",{children:"Volume (24h)"}),e.jsx("span",{children:t==null?void 0:t.volume_24h.toFixed(2)})]}),e.jsxs(l,{children:[e.jsx("h1",{children:"% Change (24h)"}),e.jsxs("span",{children:[t==null?void 0:t.volume_24h_change_24h," %"]})]})]}),e.jsx(p,{children:"Market Cap"}),e.jsxs(u,{children:[e.jsxs(l,{children:[e.jsx("h1",{children:"Market Cap"}),e.jsx("span",{children:t==null?void 0:t.market_cap})]}),e.jsxs(l,{children:[e.jsx("h1",{children:"% Change (24h)"}),e.jsxs("span",{children:[t==null?void 0:t.market_cap_change_24h," %"]})]})]}),e.jsx(p,{children:"ATH Price"}),e.jsxs(u,{children:[e.jsxs(l,{children:[e.jsx("h1",{children:"ATH"}),e.jsxs("span",{children:["$ ",`${t==null?void 0:t.ath_price.toFixed(2)}`]})]}),e.jsxs(l,{children:[e.jsx("h1",{children:"% Change"}),e.jsxs("span",{children:[t==null?void 0:t.percent_from_price_ath," %"]})]})]})]})})}const ge=s.div`
  margin-top: 3rem;
`;function je(){const{coinId:r}=g(),{data:o,isLoading:i}=m({queryKey:["fetchCoinOHLCV",r],queryFn:()=>E(r||"")}),c=B(T),t=[{name:"candle",data:o==null?void 0:o.map(n=>({x:new Date(n.time_close),y:[parseFloat(n.open),parseFloat(n.high),parseFloat(n.low),parseFloat(n.close)]}))}];return e.jsx(ge,{children:i?"Loading chart...":e.jsx(S,{series:t,options:{theme:{mode:c?"dark":"light"},chart:{type:"candlestick",height:400,id:"candlestick",toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1},type:"datetime",categories:o==null?void 0:o.map(n=>n.time_close)},yaxis:{show:!1}},type:"candlestick",height:400})})}const fe=_([{path:"/",element:e.jsx(te,{}),errorElement:e.jsx(xe,{}),children:[{path:"",element:e.jsx(I,{})},{path:":coinId",element:e.jsx(me,{}),children:[{path:"price",element:e.jsx(pe,{})},{path:"chart",element:e.jsx(je,{})}]}]}],{basename:"/react-crypto-app"}),be=new P;F.createRoot(document.getElementById("root")).render(e.jsx(L.StrictMode,{children:e.jsx(H,{children:e.jsx(R,{client:be,children:e.jsx(M,{router:fe})})})}));

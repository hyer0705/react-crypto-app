import{j as e,R as T}from"./react-7c714f5d.js";import{c as L}from"./react-dom-e1f750fa.js";import{L as h,c as F,R as _}from"./react-router-dom-688e8384.js";import{u as m,Q as M,a as P}from"./@tanstack-bf7db75e.js";import{R,a as q,b as A}from"./recoil-ba089209.js";import{s,a as B,X as H}from"./styled-components-74fa154a.js";import{H as b}from"./react-helmet-ce90b1a4.js";import{r as z}from"./styled-reset-c4d640f9.js";import{O as y,d as k,f as p,g}from"./react-router-5e081434.js";import{_ as N}from"./react-apexcharts-de1521e5.js";import"./apexcharts-31190f74.js";import"./scheduler-765c72db.js";import"./@remix-run-f7b0bfad.js";import"./tslib-ce936417.js";import"./@emotion-019a61c4.js";import"./stylis-bbc0ab72.js";import"./prop-types-22953a06.js";import"./react-side-effect-efca1a9f.js";import"./react-fast-compare-cb71bd50.js";import"./object-assign-3bccc760.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function v(t){return`https://coinicons-api.vercel.app/api/icon/${t}`}const w="https://api.coinpaprika.com/v1";function O(){return fetch(`${w}/tickers`).then(t=>t.json()).then(t=>t.slice(0,100))}function C(t){return fetch(`${w}/tickers/${t}`).then(o=>o.json())}function S(t){return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${t}`).then(o=>o.json())}function $(t){return`${t} | Crypto Tracker`}const W=s.header``,E=s.h1`
  text-align: center;
  font-size: 56px;
`,K=s.main``,Q=s.ul`
  margin-top: 3rem;
`,U=s.li`
  font-size: 24px;
  margin-bottom: 1.5rem;
  background-color: ${t=>t.theme.colors.card};
  border-radius: 0.5rem;
  overflow: hidden;
  a {
    width: 100%;
    padding: 1.5rem 3rem;
    display: block;
    display: flex;
    align-items: center;
  }
`,V=s.img`
  width: 36px;
  margin-right: 1.5rem;
  background-color: inherit;
`,G=s.span`
  background-color: inherit;
`;function X(){const{data:t,isLoading:o}=m({queryKey:["allCoins"],queryFn:O});return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx("title",{children:$("Home")})}),e.jsx(W,{children:e.jsx(E,{children:"Coins"})}),e.jsx(K,{children:o?e.jsx("h3",{children:"Loading..."}):e.jsx(Q,{children:t==null?void 0:t.map(n=>e.jsx(U,{children:e.jsxs(h,{to:`/${n.id}`,state:{coinName:n.name},children:[e.jsx(V,{src:v(n.symbol.toLowerCase())}),e.jsx(G,{children:n.name})]})},n.id))})})]})}const D={colors:{bg:"#23262F",card:"#393C44",text:"#F0F0F1",subText:"#7B7D82",activeTab:"#58BC7C",activeText:"#000",hoverTab:"#94CA75"}},I={colors:{bg:"#F6F6F6",card:"#FFFFFF",text:"#23262F",subText:"#919297",activeTab:"#58BC7C",activeText:"#000",hoverTab:"#94CA75"}},J=R({key:"isDark",default:!0}),Y=B`
  ${z}
  * {
    box-sizing: border-box;
    color: ${t=>t.theme.colors.text};
  }
  body {
    background-color: ${t=>t.theme.colors.bg};
  }
  a {
    text-decoration: none;
    background-color: inherit;
  }
`,Z=s.div`
  position: relative;
  width: 100%;
  max-width: 576px;
  margin: 0 auto;
  padding: 3rem 0;
`,ee=s.button`
  z-index: 2;
  position: absolute;
  right: 0;
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: ${t=>t.theme.colors.activeTab};
  color: ${t=>t.theme.colors.activeText};
  border-radius: 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${t=>t.theme.colors.hoverTab};
  }
`;function re(){const[t,o]=q(J),n=()=>o(c=>!c);return e.jsxs(H,{theme:t?D:I,children:[e.jsxs(Z,{children:[e.jsxs(ee,{onClick:n,children:[t?e.jsx("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})}):null,t?null:e.jsx("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"})})]}),e.jsx(y,{})]}),e.jsx(Y,{})]})}const te=s.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,oe=s.h1`
  text-align: center;
  font-size: 2rem;
`,se=s.span`
  display: inline-block;
  padding: 0.5rem;
  background-color: ${t=>t.theme.colors.card};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: 0;

  svg {
    width: 28px;
    background-color: inherit;
  }
`,ne=s.main`
  margin: 3rem 0;
`,ie=s.div`
  background: ${t=>t.theme.colors.card};
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
`,ce=s.span`
  color: ${t=>t.theme.colors.subText};
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 1rem;
`,ae=s.span`
  background-color: ${t=>t.theme.colors.activeTab};
  color: ${t=>t.theme.colors.activeText};
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 1rem;
`,le=s.span`
  font-size: 2rem;
  font-weight: 700;
`,d=s.span`
  font-weight: 700;
  margin-right: 0.5rem;

  &:nth-child(odd) {
    color: ${t=>t.theme.colors.subText};
  }
  &:nth-child(2) {
    margin-right: 1rem;
  }
`,de=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,j=s.div`
  background-color: ${t=>t.$isActive?t.theme.colors.activeTab:t.theme.colors.card};

  overflow: hidden;
  border-radius: 0.5rem;
  width: 48%;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${t=>t.theme.colors.activeTab};
    a {
      color: ${t=>t.theme.colors.activeText};
    }
  }
  a {
    width: 100%;
    padding: 1rem 1.5rem;
    text-align: center;
    color: ${t=>t.$isActive?t.theme.colors.activeText:t.theme.colors.text};
  }
`;function he(){var a;const{state:t}=k(),{coinId:o}=p(),n=g("/:coinId/price"),c=g("/:coinId/chart"),{data:r,isLoading:i}=m({queryKey:["fetchCoin",o],queryFn:()=>C(o||"")});return e.jsxs(e.Fragment,{children:[e.jsx(b,{children:e.jsx("title",{children:$(t?t.coinName:i?"Loading...":r==null?void 0:r.name)})}),e.jsxs(te,{children:[e.jsx(se,{children:e.jsx(h,{to:"/",children:e.jsx("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})})})}),e.jsx(oe,{children:i?"Loading...":t?t.coinName:r==null?void 0:r.name})]}),e.jsx(ne,{children:i?"Loading...":e.jsxs(ie,{children:[e.jsxs(x,{children:[e.jsx("img",{src:v((r==null?void 0:r.symbol.toLowerCase())||""),alt:r==null?void 0:r.name}),e.jsxs(ce,{children:[r==null?void 0:r.name," Price"]}),e.jsxs(ae,{children:["Rank ",r==null?void 0:r.rank]})]}),e.jsx(x,{children:e.jsxs(le,{children:["$",(a=r==null?void 0:r.quotes.USD.price)==null?void 0:a.toFixed(2)]})}),e.jsxs(x,{children:[e.jsx(d,{children:"total supply: "}),e.jsxs(d,{children:["$",r==null?void 0:r.total_supply]}),e.jsx(d,{children:"max supply: "}),e.jsxs(d,{children:["$",r==null?void 0:r.max_supply]})]})]})}),e.jsxs(de,{children:[e.jsx(j,{$isActive:c!==null,children:e.jsx(h,{to:`/${o}/chart`,state:{coinName:t?t.coinName:r==null?void 0:r.name},children:"Chart"})}),e.jsx(j,{$isActive:n!==null,children:e.jsx(h,{to:`/${o}/price`,state:{coinName:t?t.coinName:r==null?void 0:r.name,priceData:r==null?void 0:r.quotes.USD},children:"Price"})})]}),e.jsx(y,{})]})}function me(){return e.jsxs("div",{children:[e.jsx("h1",{children:"Oops..."}),e.jsx("p",{children:"Sorry, an unexpected error has occurred."})]})}const xe=s.main`
  margin-top: 3rem;
`,u=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,l=s.div`
  width: 48%;
  padding: 1rem 2rem;
  background-color: ${t=>t.theme.colors.card};
  border-radius: 0.5rem;
  h1 {
    font-size: 16px;
    margin-bottom: 0.8rem;
  }
  span {
    font-size: 20px;
    font-weight: 700;
  }
`,f=s.h1`
  font-weight: 700;
  border-bottom: 3px solid ${t=>t.theme.colors.card};
  padding: 1rem 0;
  margin-bottom: 1rem;
`;function ue(){const{state:t}=k(),{coinId:o}=p(),{data:n,isLoading:c}=m({queryKey:["fetchCoinPrice",o],queryFn:()=>C(o||"")}),r=t?t.priceData:n==null?void 0:n.quotes.USD;return e.jsx(xe,{children:c?"Loading...":e.jsxs(e.Fragment,{children:[e.jsxs(u,{children:[e.jsxs(l,{children:[e.jsx("h1",{children:"Volume (24h)"}),e.jsx("span",{children:r==null?void 0:r.volume_24h.toFixed(2)})]}),e.jsxs(l,{children:[e.jsx("h1",{children:"% Change (24h)"}),e.jsxs("span",{children:[r==null?void 0:r.volume_24h_change_24h," %"]})]})]}),e.jsx(f,{children:"Market Cap"}),e.jsxs(u,{children:[e.jsxs(l,{children:[e.jsx("h1",{children:"Market Cap"}),e.jsx("span",{children:r==null?void 0:r.market_cap})]}),e.jsxs(l,{children:[e.jsx("h1",{children:"% Change (24h)"}),e.jsxs("span",{children:[r==null?void 0:r.market_cap_change_24h," %"]})]})]}),e.jsx(f,{children:"ATH Price"}),e.jsxs(u,{children:[e.jsxs(l,{children:[e.jsx("h1",{children:"ATH"}),e.jsxs("span",{children:["$ ",`${r==null?void 0:r.ath_price.toFixed(2)}`]})]}),e.jsxs(l,{children:[e.jsx("h1",{children:"% Change"}),e.jsxs("span",{children:[r==null?void 0:r.percent_from_price_ath," %"]})]})]})]})})}const pe=s.div`
  margin-top: 3rem;
`;function ge(){const{coinId:t}=p(),{data:o,isLoading:n}=m({queryKey:["fetchCoinOHLCV",t],queryFn:()=>S(t||"")}),c=[{name:"candle",data:o==null?void 0:o.map(r=>({x:new Date(r.time_close),y:[parseFloat(r.open),parseFloat(r.high),parseFloat(r.low),parseFloat(r.close)]}))}];return e.jsx(pe,{children:n?"Loading chart...":e.jsx(N,{series:c,options:{theme:{mode:"dark"},chart:{type:"candlestick",height:400,id:"candlestick",toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1},type:"datetime",categories:o==null?void 0:o.map(r=>r.time_close)},yaxis:{show:!1}},type:"candlestick",height:400})})}const je=F([{path:"/",element:e.jsx(re,{}),errorElement:e.jsx(me,{}),children:[{path:"",element:e.jsx(X,{})},{path:":coinId",element:e.jsx(he,{}),children:[{path:"price",element:e.jsx(ue,{})},{path:"chart",element:e.jsx(ge,{})}]}]}]),fe=new M;L.createRoot(document.getElementById("root")).render(e.jsx(T.StrictMode,{children:e.jsx(A,{children:e.jsx(P,{client:fe,children:e.jsx(_,{router:je})})})}));

import{i as m,_ as S,c as a,d as f}from"./jsx-runtime-OCY4npO0.js";import{a as c}from"./index-l2PZgWEW.js";function w(n,s,t,e=m){const i=e();function r(o){const{dir:y,renderer:_}=o,l=y==="ltr"?n:s||n;return i(_,Array.isArray(t)?{r:t}:t),l}return r}function p(){return typeof window<"u"&&!!(window.document&&window.document.createElement)}const u=c.useInsertionEffect?c.useInsertionEffect:void 0,d=()=>{const n={};return function(t,e){if(u&&p()){u(()=>{t.insertCSSRules(e)},[t,e]);return}n[t.id]===void 0&&(t.insertCSSRules(e),n[t.id]=!0)}};function I(n,s){const t=S(n,s,d);return function(){const i=a(),r=f();return t({dir:i,renderer:r})}}function $(n,s,t){const e=w(n,s,t,d);return function(){const r=a(),o=f();return e({dir:r,renderer:o})}}export{$ as _,I as a,d as i};
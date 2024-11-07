import{f as H}from"./index-DcZGqPg1.js";import{j as _}from"./jsx-runtime-zcDWdWrk.js";import{r as b}from"./index-l2PZgWEW.js";import{a as P,j as y,o as C,b as I,g as R,m as x,u as G}from"./jsx-runtime-OCY4npO0.js";import{E as B,S as p}from"./keys-BStMjYrg.js";import{u as W}from"./useIsomorphicLayoutEffect-IN2RP6gP.js";import{_ as N,a as h}from"./__resetStyles.esm-CJV68e8C.js";const w=o=>{const t=b.useRef(()=>{throw new Error("Cannot call an event handler while rendering")});return W(()=>{t.current=o},[o]),b.useCallback((...e)=>{const a=t.current;return a(...e)},[t])};function O(o,t){const{disabled:e,disabledFocusable:a=!1,["aria-disabled"]:n,onClick:d,onKeyDown:v,onKeyUp:s,...f}=t??{},u=typeof n=="string"?n==="true":n,l=e||a||u,i=w(r=>{l?(r.preventDefault(),r.stopPropagation()):d==null||d(r)}),m=w(r=>{if(v==null||v(r),r.isDefaultPrevented())return;const c=r.key;if(l&&(c===B||c===p)){r.preventDefault(),r.stopPropagation();return}if(c===p){r.preventDefault();return}else c===B&&(r.preventDefault(),r.currentTarget.click())}),k=w(r=>{if(s==null||s(r),r.isDefaultPrevented())return;const c=r.key;if(l&&(c===B||c===p)){r.preventDefault(),r.stopPropagation();return}c===p&&(r.preventDefault(),r.currentTarget.click())});if(o==="button"||o===void 0)return{...f,disabled:e&&!a,"aria-disabled":a?!0:u,onClick:a?void 0:i,onKeyUp:a?void 0:s,onKeyDown:a?void 0:v};{const r={role:"button",tabIndex:e&&!a?void 0:0,...f,onClick:i,onKeyUp:k,onKeyDown:m,"aria-disabled":e||a||u};return o==="a"&&l&&(r.href=void 0),r}}const E=o=>{const{iconOnly:t,iconPosition:e}=o;return P(o.root,{children:[e!=="after"&&o.icon&&y(o.icon,{}),!t&&o.root.children,e==="after"&&o.icon&&y(o.icon,{})]})},T=b.createContext(void 0),J={};T.Provider;const K=()=>{var o;return(o=b.useContext(T))!==null&&o!==void 0?o:J},M=(o,t)=>{const{size:e}=K(),{appearance:a="secondary",as:n="button",disabled:d=!1,disabledFocusable:v=!1,icon:s,iconPosition:f="before",shape:u="rounded",size:l=e??"medium"}=o,i=C(s,{elementType:"span"});return{appearance:a,disabled:d,disabledFocusable:v,iconPosition:f,shape:u,size:l,iconOnly:!!(i!=null&&i.children&&!o.children),components:{root:"button",icon:"span"},root:I(R(n,O(o.as,o)),{elementType:"button",defaultProps:{ref:t,type:"button"}}),icon:i}},z={root:"fui-Button",icon:"fui-Button__icon"},U=N("r1alrhcs",null,{r:[".r1alrhcs{align-items:center;box-sizing:border-box;display:inline-flex;justify-content:center;text-decoration-line:none;vertical-align:middle;margin:0;overflow:hidden;background-color:var(--colorNeutralBackground1);color:var(--colorNeutralForeground1);border:var(--strokeWidthThin) solid var(--colorNeutralStroke1);font-family:var(--fontFamilyBase);outline-style:none;padding:5px var(--spacingHorizontalM);min-width:96px;border-radius:var(--borderRadiusMedium);font-size:var(--fontSizeBase300);font-weight:var(--fontWeightSemibold);line-height:var(--lineHeightBase300);transition-duration:var(--durationFaster);transition-property:background,border,color;transition-timing-function:var(--curveEasyEase);}",".r1alrhcs:hover{background-color:var(--colorNeutralBackground1Hover);border-color:var(--colorNeutralStroke1Hover);color:var(--colorNeutralForeground1Hover);cursor:pointer;}",".r1alrhcs:hover:active{background-color:var(--colorNeutralBackground1Pressed);border-color:var(--colorNeutralStroke1Pressed);color:var(--colorNeutralForeground1Pressed);outline-style:none;}",".r1alrhcs[data-fui-focus-visible]{border-color:var(--colorStrokeFocus2);border-radius:var(--borderRadiusMedium);border-width:1px;outline:var(--strokeWidthThick) solid var(--colorTransparentStroke);box-shadow:0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;z-index:1;}"],s:["@media screen and (prefers-reduced-motion: reduce){.r1alrhcs{transition-duration:0.01ms;}}","@media (forced-colors: active){.r1alrhcs:focus{border-color:ButtonText;}.r1alrhcs:hover{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}.r1alrhcs:hover:active{background-color:HighlightText;border-color:Highlight;color:Highlight;forced-color-adjust:none;}}","@supports (-moz-appearance:button){.r1alrhcs[data-fui-focus-visible]{box-shadow:0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]}),A=N("rywnvv2",null,[".rywnvv2{align-items:center;display:inline-flex;justify-content:center;font-size:20px;height:20px;width:20px;--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}"]),L=h({outline:{De3pzq:"f1c21dwh",Jwef8y:"fjxutwb",iro3zm:"fwiml72"},primary:{De3pzq:"ffp7eso",g2u3we:"f1p3nwhy",h3c5rm:["f11589ue","f1pdflbu"],B9xav0g:"f1q5o8ev",zhjwy3:["f1pdflbu","f11589ue"],sj55zd:"f1phragk",Jwef8y:"f15wkkf3",Bgoe8wy:"f1s2uweq",Bwzppfd:["fr80ssc","fecsdlb"],oetu4i:"f1ukrpxl",gg5e9n:["fecsdlb","fr80ssc"],Bi91k9c:"f1rq72xc",iro3zm:"fnp9lpt",b661bw:"f1h0usnq",Bk6r4ia:["fs4ktlq","fx2bmrt"],B9zn80p:"f16h9ulv",Bpld233:["fx2bmrt","fs4ktlq"],B2d53fq:"f1d6v5y2",Bsw6fvg:"f1rirnrt",Bjwas2f:"f1uu00uk",Bn1d65q:["fkvaka8","f9a0qzu"],Bxeuatn:"f1ux7til",n51gp8:["f9a0qzu","fkvaka8"],Bbusuzp:"f1lkg8j3",ycbfsm:"fkc42ay",Bqrx1nm:"fq7113v",pgvf35:"ff1wgvm",Bh7lczh:["fiob0tu","f1x4h75k"],dpv3f4:"f1j6scgf",Bpnjhaq:["f1x4h75k","fiob0tu"],ze5xyy:"f4xjyn1",g2kj27:"fbgcvur",Bf756sw:"f1ks1yx8",Bow2dr7:["f1o6qegi","fmxjhhp"],Bvhedfk:"fcnxywj",Gye4lf:["fmxjhhp","f1o6qegi"],pc6evw:"f9ddjv3"},secondary:{},subtle:{De3pzq:"fhovq9v",g2u3we:"f1p3nwhy",h3c5rm:["f11589ue","f1pdflbu"],B9xav0g:"f1q5o8ev",zhjwy3:["f1pdflbu","f11589ue"],sj55zd:"fkfq4zb",Jwef8y:"f1t94bn6",Bgoe8wy:"f1s2uweq",Bwzppfd:["fr80ssc","fecsdlb"],oetu4i:"f1ukrpxl",gg5e9n:["fecsdlb","fr80ssc"],Bi91k9c:"fnwyq0v",Bk3fhr4:"ft1hn21",Bmfj8id:"fuxngvv",Bbdnnc7:"fy5bs14",iro3zm:"fsv2rcd",b661bw:"f1h0usnq",Bk6r4ia:["fs4ktlq","fx2bmrt"],B9zn80p:"f16h9ulv",Bpld233:["fx2bmrt","fs4ktlq"],B2d53fq:"f1omzyqd",em6i61:"f1dfjoow",vm6p8p:"f1j98vj9",x3br3k:"fj8yq94",ze5xyy:"f4xjyn1",Bx3q9su:"f1et0tmh",pc6evw:"f9ddjv3",xd2cci:"f1wi8ngl"},transparent:{De3pzq:"f1c21dwh",g2u3we:"f1p3nwhy",h3c5rm:["f11589ue","f1pdflbu"],B9xav0g:"f1q5o8ev",zhjwy3:["f1pdflbu","f11589ue"],sj55zd:"fkfq4zb",Jwef8y:"fjxutwb",Bgoe8wy:"f1s2uweq",Bwzppfd:["fr80ssc","fecsdlb"],oetu4i:"f1ukrpxl",gg5e9n:["fecsdlb","fr80ssc"],Bi91k9c:"f139oj5f",Bk3fhr4:"ft1hn21",Bmfj8id:"fuxngvv",iro3zm:"fwiml72",b661bw:"f1h0usnq",Bk6r4ia:["fs4ktlq","fx2bmrt"],B9zn80p:"f16h9ulv",Bpld233:["fx2bmrt","fs4ktlq"],B2d53fq:"f1fg1p5m",em6i61:"f1dfjoow",vm6p8p:"f1j98vj9",Bqrx1nm:"f1tme0vf",ze5xyy:"f4xjyn1",g2kj27:"f18onu3q",pc6evw:"f9ddjv3"},circular:{Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"f44lkw9"},rounded:{},square:{Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"f1fabniw"},small:{Bf4jedk:"fh7ncta",Byoj8tv:0,uwmqm3:0,z189sj:0,z8tnut:0,B0ocmuz:"fneth5b",Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"ft85np5",Be2twd7:"fy9rknc",Bhrd7zp:"figsok6",Bg96gwp:"fwrc4pm"},smallWithIcon:{Byoj8tv:"f1brlhvm",z8tnut:"f1sl3k7w"},medium:{},large:{Bf4jedk:"f14es27b",Byoj8tv:0,uwmqm3:0,z189sj:0,z8tnut:0,B0ocmuz:"f4db1ww",Beyfa6y:0,Bbmb7ep:0,Btl43ni:0,B7oj6ja:0,Dimara:"ft85np5",Be2twd7:"fod5ikn",Bhrd7zp:"fl43uef",Bg96gwp:"faaz57k"},largeWithIcon:{Byoj8tv:"fy7v416",z8tnut:"f1a1bwwz"}},{d:[".f1c21dwh{background-color:var(--colorTransparentBackground);}",".ffp7eso{background-color:var(--colorBrandBackground);}",".f1p3nwhy{border-top-color:transparent;}",".f11589ue{border-right-color:transparent;}",".f1pdflbu{border-left-color:transparent;}",".f1q5o8ev{border-bottom-color:transparent;}",".f1phragk{color:var(--colorNeutralForegroundOnBrand);}",".fhovq9v{background-color:var(--colorSubtleBackground);}",".fkfq4zb{color:var(--colorNeutralForeground2);}",[".f44lkw9{border-radius:var(--borderRadiusCircular);}",{p:-1}],[".f1fabniw{border-radius:var(--borderRadiusNone);}",{p:-1}],".fh7ncta{min-width:64px;}",[".fneth5b{padding:3px var(--spacingHorizontalS);}",{p:-1}],[".ft85np5{border-radius:var(--borderRadiusMedium);}",{p:-1}],".fy9rknc{font-size:var(--fontSizeBase200);}",".figsok6{font-weight:var(--fontWeightRegular);}",".fwrc4pm{line-height:var(--lineHeightBase200);}",".f1brlhvm{padding-bottom:1px;}",".f1sl3k7w{padding-top:1px;}",".f14es27b{min-width:96px;}",[".f4db1ww{padding:8px var(--spacingHorizontalL);}",{p:-1}],[".ft85np5{border-radius:var(--borderRadiusMedium);}",{p:-1}],".fod5ikn{font-size:var(--fontSizeBase400);}",".fl43uef{font-weight:var(--fontWeightSemibold);}",".faaz57k{line-height:var(--lineHeightBase400);}",".fy7v416{padding-bottom:7px;}",".f1a1bwwz{padding-top:7px;}"],h:[".fjxutwb:hover{background-color:var(--colorTransparentBackgroundHover);}",".fwiml72:hover:active{background-color:var(--colorTransparentBackgroundPressed);}",".f15wkkf3:hover{background-color:var(--colorBrandBackgroundHover);}",".f1s2uweq:hover{border-top-color:transparent;}",".fr80ssc:hover{border-right-color:transparent;}",".fecsdlb:hover{border-left-color:transparent;}",".f1ukrpxl:hover{border-bottom-color:transparent;}",".f1rq72xc:hover{color:var(--colorNeutralForegroundOnBrand);}",".fnp9lpt:hover:active{background-color:var(--colorBrandBackgroundPressed);}",".f1h0usnq:hover:active{border-top-color:transparent;}",".fs4ktlq:hover:active{border-right-color:transparent;}",".fx2bmrt:hover:active{border-left-color:transparent;}",".f16h9ulv:hover:active{border-bottom-color:transparent;}",".f1d6v5y2:hover:active{color:var(--colorNeutralForegroundOnBrand);}",".f1t94bn6:hover{background-color:var(--colorSubtleBackgroundHover);}",".fnwyq0v:hover{color:var(--colorNeutralForeground2Hover);}",".ft1hn21:hover .fui-Icon-filled{display:inline;}",".fuxngvv:hover .fui-Icon-regular{display:none;}",".fy5bs14:hover .fui-Button__icon{color:var(--colorNeutralForeground2BrandHover);}",".fsv2rcd:hover:active{background-color:var(--colorSubtleBackgroundPressed);}",".f1omzyqd:hover:active{color:var(--colorNeutralForeground2Pressed);}",".f1dfjoow:hover:active .fui-Icon-filled{display:inline;}",".f1j98vj9:hover:active .fui-Icon-regular{display:none;}",".fj8yq94:hover:active .fui-Button__icon{color:var(--colorNeutralForeground2BrandPressed);}",".f139oj5f:hover{color:var(--colorNeutralForeground2BrandHover);}",".f1fg1p5m:hover:active{color:var(--colorNeutralForeground2BrandPressed);}"],m:[["@media (forced-colors: active){.f1rirnrt{background-color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1uu00uk{border-top-color:HighlightText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f9a0qzu{border-left-color:HighlightText;}.fkvaka8{border-right-color:HighlightText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1ux7til{border-bottom-color:HighlightText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1lkg8j3{color:HighlightText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fkc42ay{forced-color-adjust:none;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fq7113v:hover{background-color:HighlightText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.ff1wgvm:hover{border-top-color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1x4h75k:hover{border-left-color:Highlight;}.fiob0tu:hover{border-right-color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1j6scgf:hover{border-bottom-color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f4xjyn1:hover{color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fbgcvur:hover:active{background-color:HighlightText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1ks1yx8:hover:active{border-top-color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1o6qegi:hover:active{border-right-color:Highlight;}.fmxjhhp:hover:active{border-left-color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fcnxywj:hover:active{border-bottom-color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f9ddjv3:hover:active{color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1et0tmh:hover .fui-Button__icon{color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1wi8ngl:hover:active .fui-Button__icon{color:Highlight;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1tme0vf:hover{background-color:var(--colorTransparentBackground);}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f18onu3q:hover:active{background-color:var(--colorTransparentBackground);}}",{m:"(forced-colors: active)"}]]}),V=h({base:{De3pzq:"f1bg9a2p",g2u3we:"f1jj8ep1",h3c5rm:["f15xbau","fy0fskl"],B9xav0g:"f4ikngz",zhjwy3:["fy0fskl","f15xbau"],sj55zd:"f1s2aq7o",Bceei9c:"fdrzuqr",Bfinmwp:"f15x8b5r",Jwef8y:"f1falr9n",Bgoe8wy:"f12mpcsy",Bwzppfd:["f1gwvigk","f18rmfxp"],oetu4i:"f1jnshp0",gg5e9n:["f18rmfxp","f1gwvigk"],Bi91k9c:"fvgxktp",eoavqd:"fphbwmw",Bk3fhr4:"f19vpps7",Bmfj8id:"fv5swzo",Bbdnnc7:"f1al02dq",iro3zm:"f1t6o4dc",b661bw:"f10ztigi",Bk6r4ia:["f1ft5sdu","f1gzf82w"],B9zn80p:"f12zbtn2",Bpld233:["f1gzf82w","f1ft5sdu"],B2d53fq:"fcvwxyo",c3iz72:"f8w4c43",em6i61:"f1ol4fw6",vm6p8p:"f1q1lw4e",x3br3k:"f1dwjv2g"},highContrast:{Bsw6fvg:"f4lkoma",Bjwas2f:"fg455y9",Bn1d65q:["f1rvyvqg","f14g86mu"],Bxeuatn:"f1cwzwz",n51gp8:["f14g86mu","f1rvyvqg"],Bbusuzp:"f1dcs8yz",G867l3:"fjwq6ea",gdbnj:["f1lr3nhc","f1mbxvi6"],mxns5l:"fn5gmvv",o3nasb:["f1mbxvi6","f1lr3nhc"],Bqrx1nm:"f1vmkb5g",pgvf35:"f53ppgq",Bh7lczh:["f1663y11","f80fkiy"],dpv3f4:"f18v5270",Bpnjhaq:["f80fkiy","f1663y11"],ze5xyy:"f1kc2mi9",g2kj27:"f1y0svfh",Bf756sw:"fihuait",Bow2dr7:["fnxhupq","fyd6l6x"],Bvhedfk:"fx507ft",Gye4lf:["fyd6l6x","fnxhupq"],pc6evw:"fb3rf2x"},outline:{De3pzq:"f1c21dwh",Jwef8y:"f9ql6rf",iro3zm:"f3h1zc4"},primary:{g2u3we:"f1p3nwhy",h3c5rm:["f11589ue","f1pdflbu"],B9xav0g:"f1q5o8ev",zhjwy3:["f1pdflbu","f11589ue"],Bgoe8wy:"f1s2uweq",Bwzppfd:["fr80ssc","fecsdlb"],oetu4i:"f1ukrpxl",gg5e9n:["fecsdlb","fr80ssc"],b661bw:"f1h0usnq",Bk6r4ia:["fs4ktlq","fx2bmrt"],B9zn80p:"f16h9ulv",Bpld233:["fx2bmrt","fs4ktlq"]},secondary:{},subtle:{De3pzq:"f1c21dwh",g2u3we:"f1p3nwhy",h3c5rm:["f11589ue","f1pdflbu"],B9xav0g:"f1q5o8ev",zhjwy3:["f1pdflbu","f11589ue"],Jwef8y:"f9ql6rf",Bgoe8wy:"f1s2uweq",Bwzppfd:["fr80ssc","fecsdlb"],oetu4i:"f1ukrpxl",gg5e9n:["fecsdlb","fr80ssc"],iro3zm:"f3h1zc4",b661bw:"f1h0usnq",Bk6r4ia:["fs4ktlq","fx2bmrt"],B9zn80p:"f16h9ulv",Bpld233:["fx2bmrt","fs4ktlq"]},transparent:{De3pzq:"f1c21dwh",g2u3we:"f1p3nwhy",h3c5rm:["f11589ue","f1pdflbu"],B9xav0g:"f1q5o8ev",zhjwy3:["f1pdflbu","f11589ue"],Jwef8y:"f9ql6rf",Bgoe8wy:"f1s2uweq",Bwzppfd:["fr80ssc","fecsdlb"],oetu4i:"f1ukrpxl",gg5e9n:["fecsdlb","fr80ssc"],iro3zm:"f3h1zc4",b661bw:"f1h0usnq",Bk6r4ia:["fs4ktlq","fx2bmrt"],B9zn80p:"f16h9ulv",Bpld233:["fx2bmrt","fs4ktlq"]}},{d:[".f1bg9a2p{background-color:var(--colorNeutralBackgroundDisabled);}",".f1jj8ep1{border-top-color:var(--colorNeutralStrokeDisabled);}",".f15xbau{border-right-color:var(--colorNeutralStrokeDisabled);}",".fy0fskl{border-left-color:var(--colorNeutralStrokeDisabled);}",".f4ikngz{border-bottom-color:var(--colorNeutralStrokeDisabled);}",".f1s2aq7o{color:var(--colorNeutralForegroundDisabled);}",".fdrzuqr{cursor:not-allowed;}",".f15x8b5r .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}",".f1c21dwh{background-color:var(--colorTransparentBackground);}",".f1p3nwhy{border-top-color:transparent;}",".f11589ue{border-right-color:transparent;}",".f1pdflbu{border-left-color:transparent;}",".f1q5o8ev{border-bottom-color:transparent;}"],h:[".f1falr9n:hover{background-color:var(--colorNeutralBackgroundDisabled);}",".f12mpcsy:hover{border-top-color:var(--colorNeutralStrokeDisabled);}",".f1gwvigk:hover{border-right-color:var(--colorNeutralStrokeDisabled);}",".f18rmfxp:hover{border-left-color:var(--colorNeutralStrokeDisabled);}",".f1jnshp0:hover{border-bottom-color:var(--colorNeutralStrokeDisabled);}",".fvgxktp:hover{color:var(--colorNeutralForegroundDisabled);}",".fphbwmw:hover{cursor:not-allowed;}",".f19vpps7:hover .fui-Icon-filled{display:none;}",".fv5swzo:hover .fui-Icon-regular{display:inline;}",".f1al02dq:hover .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}",".f1t6o4dc:hover:active{background-color:var(--colorNeutralBackgroundDisabled);}",".f10ztigi:hover:active{border-top-color:var(--colorNeutralStrokeDisabled);}",".f1ft5sdu:hover:active{border-right-color:var(--colorNeutralStrokeDisabled);}",".f1gzf82w:hover:active{border-left-color:var(--colorNeutralStrokeDisabled);}",".f12zbtn2:hover:active{border-bottom-color:var(--colorNeutralStrokeDisabled);}",".fcvwxyo:hover:active{color:var(--colorNeutralForegroundDisabled);}",".f8w4c43:hover:active{cursor:not-allowed;}",".f1ol4fw6:hover:active .fui-Icon-filled{display:none;}",".f1q1lw4e:hover:active .fui-Icon-regular{display:inline;}",".f1dwjv2g:hover:active .fui-Button__icon{color:var(--colorNeutralForegroundDisabled);}",".f9ql6rf:hover{background-color:var(--colorTransparentBackground);}",".f3h1zc4:hover:active{background-color:var(--colorTransparentBackground);}",".f1s2uweq:hover{border-top-color:transparent;}",".fr80ssc:hover{border-right-color:transparent;}",".fecsdlb:hover{border-left-color:transparent;}",".f1ukrpxl:hover{border-bottom-color:transparent;}",".f1h0usnq:hover:active{border-top-color:transparent;}",".fs4ktlq:hover:active{border-right-color:transparent;}",".fx2bmrt:hover:active{border-left-color:transparent;}",".f16h9ulv:hover:active{border-bottom-color:transparent;}"],m:[["@media (forced-colors: active){.f4lkoma{background-color:ButtonFace;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fg455y9{border-top-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f14g86mu{border-left-color:GrayText;}.f1rvyvqg{border-right-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1cwzwz{border-bottom-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1dcs8yz{color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fjwq6ea:focus{border-top-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1lr3nhc:focus{border-right-color:GrayText;}.f1mbxvi6:focus{border-left-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fn5gmvv:focus{border-bottom-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1vmkb5g:hover{background-color:ButtonFace;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f53ppgq:hover{border-top-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1663y11:hover{border-right-color:GrayText;}.f80fkiy:hover{border-left-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f18v5270:hover{border-bottom-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1kc2mi9:hover{color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.f1y0svfh:hover:active{background-color:ButtonFace;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fihuait:hover:active{border-top-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fnxhupq:hover:active{border-right-color:GrayText;}.fyd6l6x:hover:active{border-left-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fx507ft:hover:active{border-bottom-color:GrayText;}}",{m:"(forced-colors: active)"}],["@media (forced-colors: active){.fb3rf2x:hover:active{color:GrayText;}}",{m:"(forced-colors: active)"}]]}),X=h({circular:{Bw81rd7:0,kdpuga:0,dm238s:0,B6xbmo0:0,B3whbx2:"f1062rbf"},rounded:{},square:{Bw81rd7:0,kdpuga:0,dm238s:0,B6xbmo0:0,B3whbx2:"fj0ryk1"},primary:{B8q5s1w:"f17t0x8g",Bci5o5g:["f194v5ow","fk7jm04"],n8qw10:"f1qgg65p",Bdrgwmp:["fk7jm04","f194v5ow"],j6ew2k:["fhgccpy","fjo7pq6"],he4mth:"f32wu9k",Byr4aka:"fu5nqqq",lks7q5:["f13prjl2","f1nl83rv"],Bnan3qt:"f1czftr5",k1dn9:["f1nl83rv","f13prjl2"],Boium3a:["f12k37oa","fdnykm2"],tm8e47:"fr96u23"},small:{Bw81rd7:0,kdpuga:0,dm238s:0,B6xbmo0:0,B3whbx2:"fazmxh"},medium:{},large:{Bw81rd7:0,kdpuga:0,dm238s:0,B6xbmo0:0,B3whbx2:"f1b6alqh"}},{d:[[".f1062rbf[data-fui-focus-visible]{border-radius:var(--borderRadiusCircular);}",{p:-1}],[".fj0ryk1[data-fui-focus-visible]{border-radius:var(--borderRadiusNone);}",{p:-1}],".f17t0x8g[data-fui-focus-visible]{border-top-color:var(--colorStrokeFocus2);}",".f194v5ow[data-fui-focus-visible]{border-right-color:var(--colorStrokeFocus2);}",".fk7jm04[data-fui-focus-visible]{border-left-color:var(--colorStrokeFocus2);}",".f1qgg65p[data-fui-focus-visible]{border-bottom-color:var(--colorStrokeFocus2);}",".fhgccpy[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}",".fjo7pq6[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}",".f32wu9k[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 var(--strokeWidthThin) var(--colorStrokeFocus2) inset;}",".fu5nqqq[data-fui-focus-visible]:hover{border-top-color:var(--colorStrokeFocus2);}",".f13prjl2[data-fui-focus-visible]:hover{border-right-color:var(--colorStrokeFocus2);}",".f1nl83rv[data-fui-focus-visible]:hover{border-left-color:var(--colorStrokeFocus2);}",".f1czftr5[data-fui-focus-visible]:hover{border-bottom-color:var(--colorStrokeFocus2);}",[".fazmxh[data-fui-focus-visible]{border-radius:var(--borderRadiusSmall);}",{p:-1}],[".f1b6alqh[data-fui-focus-visible]{border-radius:var(--borderRadiusLarge);}",{p:-1}]],t:["@supports (-moz-appearance:button){.f12k37oa[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}.fdnykm2[data-fui-focus-visible]{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset,0 0 0 var(--strokeWidthThick) var(--colorNeutralForegroundOnBrand) inset;}}","@supports (-moz-appearance:button){.fr96u23[data-fui-focus-visible]:hover{box-shadow:var(--shadow2),0 0 0 calc(var(--strokeWidthThin) + 0.25px) var(--colorStrokeFocus2) inset;}}"]}),Q=h({small:{Byoj8tv:0,uwmqm3:0,z189sj:0,z8tnut:0,B0ocmuz:"fu97m5z",Bf4jedk:"f17fgpbq",B2u0y6b:"f1jt17bm"},medium:{Byoj8tv:0,uwmqm3:0,z189sj:0,z8tnut:0,B0ocmuz:"f18ktai2",Bf4jedk:"fwbmr0d",B2u0y6b:"f44c6la"},large:{Byoj8tv:0,uwmqm3:0,z189sj:0,z8tnut:0,B0ocmuz:"f1hbd1aw",Bf4jedk:"f12clzc2",B2u0y6b:"fjy1crr"}},{d:[[".fu97m5z{padding:1px;}",{p:-1}],".f17fgpbq{min-width:24px;}",".f1jt17bm{max-width:24px;}",[".f18ktai2{padding:5px;}",{p:-1}],".fwbmr0d{min-width:32px;}",".f44c6la{max-width:32px;}",[".f1hbd1aw{padding:7px;}",{p:-1}],".f12clzc2{min-width:40px;}",".fjy1crr{max-width:40px;}"]}),Y=h({small:{Be2twd7:"fe5j1ua",Bqenvij:"fjamq6b",a9b677:"f64fuq3",Bqrlyyl:"fbaiahx"},medium:{},large:{Be2twd7:"f1rt2boy",Bqenvij:"frvgh55",a9b677:"fq4mcun",Bqrlyyl:"f1exjqw5"},before:{t21cq0:["f1nizpg2","f1a695kz"]},after:{Frg6f3:["f1a695kz","f1nizpg2"]}},{d:[".fe5j1ua{font-size:20px;}",".fjamq6b{height:20px;}",".f64fuq3{width:20px;}",".fbaiahx{--fui-Button__icon--spacing:var(--spacingHorizontalXS);}",".f1rt2boy{font-size:24px;}",".frvgh55{height:24px;}",".fq4mcun{width:24px;}",".f1exjqw5{--fui-Button__icon--spacing:var(--spacingHorizontalSNudge);}",".f1nizpg2{margin-right:var(--fui-Button__icon--spacing);}",".f1a695kz{margin-left:var(--fui-Button__icon--spacing);}"]}),Z=o=>{"use no memo";const t=U(),e=A(),a=L(),n=V(),d=X(),v=Q(),s=Y(),{appearance:f,disabled:u,disabledFocusable:l,icon:i,iconOnly:m,iconPosition:k,shape:r,size:c}=o;return o.root.className=x(z.root,t,f&&a[f],a[c],i&&c==="small"&&a.smallWithIcon,i&&c==="large"&&a.largeWithIcon,a[r],(u||l)&&n.base,(u||l)&&n.highContrast,f&&(u||l)&&n[f],f==="primary"&&d.primary,d[c],d[r],m&&v[c],o.root.className),o.icon&&(o.icon.className=x(z.icon,e,!!o.root.children&&s[k],s[c],o.icon.className)),o},D=b.forwardRef((o,t)=>{const e=M(o,t);return Z(e),G("useButtonStyles_unstable")(e),E(e)});D.displayName="Button";const F=o=>_.jsx(D,{...o,appearance:"primary",children:"label"});F.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"SPOButton"};const fo={component:F,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{onClick:H()}},g={args:{label:"Button"}};var q,j,S;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(S=(j=g.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const lo=["SPOPrimary"];export{g as SPOPrimary,lo as __namedExportsOrder,fo as default};
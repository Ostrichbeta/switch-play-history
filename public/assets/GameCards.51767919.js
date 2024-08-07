import{l as mt,r as L,c as T,w as j,p as I,G as N,A as B,h as G,ab as ht,g as gt,m as ft,H as pt,_ as vt,W as yt,d as wt,U as k,Y as bt,Z as y,a0 as a,a4 as c,j as d,a5 as S,$ as Tt,V as Q,a2 as St,F as xt,a1 as E,a3 as _t}from"./index.704e14c9.js";import{Q as Ct,a as kt}from"./QImg.6df8ec25.js";import{u as qt,v as V,e as Mt,f as Pt,g as Dt,r as A,s as Ht,c as U,p as z,h as Ot,Q as Lt}from"./QSelect.4b844f90.js";import{f as jt,w as $,s as It,h as Nt,x as Bt,i as Gt,y as Qt,j as Et,z as Vt,g as At,N as Ut,n as zt}from"./user-info.83a50de3.js";import{Q as Ft,a as Wt}from"./QCard.fe20af72.js";import{Q as Rt}from"./QPage.947fd868.js";import"./i18n.72124940.js";var F=mt({name:"QTooltip",inheritAttrs:!1,props:{...qt,...jt,...$,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...$.transitionShow,default:"jump-down"},transitionHide:{...$.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:V},self:{type:String,default:"top middle",validator:V},offset:{type:Array,default:()=>[14,14],validator:Mt},scrollTarget:It,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Nt],setup(t,{slots:e,emit:n,attrs:r}){let o,l;const s=gt(),{proxy:{$q:u}}=s,f=L(null),w=L(!1),W=T(()=>z(t.anchor,u.lang.rtl)),R=T(()=>z(t.self,u.lang.rtl)),J=T(()=>t.persistent!==!0),{registerTick:Y,removeTick:Z}=Bt(),{registerTimeout:b}=Gt(),{transitionProps:K,transitionStyle:X}=Qt(t),{localScrollTarget:q,changeScrollEvent:tt,unconfigureScrollTarget:et}=Pt(t,H),{anchorEl:m,canShow:st,anchorEvents:p}=Dt({showing:w,configureAnchorEl:dt}),{show:at,hide:_}=Et({showing:w,canShow:st,handleShow:it,handleHide:nt,hideOnRouteChange:J,processOnMount:!0});Object.assign(p,{delayShow:lt,delayHide:rt});const{showPortal:M,hidePortal:P,renderPortal:ot}=Vt(s,f,ut,"tooltip");if(u.platform.is.mobile===!0){const i={anchorEl:m,innerRef:f,onClickOutside(h){return _(h),h.target.classList.contains("q-dialog__backdrop")&&pt(h),!0}},C=T(()=>t.modelValue===null&&t.persistent!==!0&&w.value===!0);j(C,h=>{(h===!0?Ot:A)(i)}),I(()=>{A(i)})}function it(i){M(),Y(()=>{l=new MutationObserver(()=>v()),l.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),v(),H()}),o===void 0&&(o=j(()=>u.screen.width+"|"+u.screen.height+"|"+t.self+"|"+t.anchor+"|"+u.lang.rtl,v)),b(()=>{M(!0),n("show",i)},t.transitionDuration)}function nt(i){Z(),P(),D(),b(()=>{P(!0),n("hide",i)},t.transitionDuration)}function D(){l!==void 0&&(l.disconnect(),l=void 0),o!==void 0&&(o(),o=void 0),et(),N(p,"tooltipTemp")}function v(){Ht({targetEl:f.value,offset:t.offset,anchorEl:m.value,anchorOrigin:W.value,selfOrigin:R.value,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function lt(i){if(u.platform.is.mobile===!0){U(),document.body.classList.add("non-selectable");const C=m.value,h=["touchmove","touchcancel","touchend","click"].map(O=>[C,O,"delayHide","passiveCapture"]);B(p,"tooltipTemp",h)}b(()=>{at(i)},t.delay)}function rt(i){u.platform.is.mobile===!0&&(N(p,"tooltipTemp"),U(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),b(()=>{_(i)},t.hideDelay)}function dt(){if(t.noParentEvent===!0||m.value===null)return;const i=u.platform.is.mobile===!0?[[m.value,"touchstart","delayShow","passive"]]:[[m.value,"mouseenter","delayShow","passive"],[m.value,"mouseleave","delayHide","passive"]];B(p,"anchor",i)}function H(){if(m.value!==null||t.scrollTarget!==void 0){q.value=At(m.value,t.scrollTarget);const i=t.noParentEvent===!0?v:_;tt(q.value,i)}}function ct(){return w.value===!0?G("div",{...r,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",r.class],style:[r.style,X.value],role:"tooltip"},ft(e.default)):null}function ut(){return G(ht,K.value,ct)}return I(D),Object.assign(s.proxy,{updatePosition:v}),ot}});const x=Ut(),g=zt(),{list:Jt}=yt(x),Yt=wt({name:"GameCard",data:()=>({apple:114514,sortedList:[],sortOptions:[{label:"Game Time",value:"time"},{label:"Last Played",value:"last"},{label:"Japanese Name",value:"jpname"}],currentSortOption:{label:"Game Time",value:"time"},gameHistoryList:Jt,totalMinute:0}),methods:{timeIntervalFromNow(t){const e=new Date,n=new Date(t),r=(e-n)/1e3,o=Math.abs(r);let l;if(o<3600)l=$t("gameCards.timeInterval.withinOneHour");else if(o<86400){const s=Math.floor(o/3600);l=this.$tc(`gameCards.timeInterval.hour${r>0?"ago":"after"}`,s)}else if(o<2592e3){const s=Math.floor(o/86400);l=this.$tc(`gameCards.timeInterval.day${r>0?"ago":"after"}`,s)}else if(o<31104e3){const s=Math.floor(o/2592e3);l=this.$tc(`gameCards.timeInterval.month${r>0?"ago":"after"}`,s)}else{const s=Math.floor(o/2592e3);l=this.$tc(`gameCards.timeInterval.month${r>0?"ago":"after"}`,s)}return l},minutesToHHmm(t){const e=Math.floor(t/60),n=t%60,r=String(e).padStart(1,"0"),o=String(n).padStart(2,"0");return`${r} h ${o} m`},findEnglishName(t){try{for(const e of Object.keys(enTitleDB))if(enTitleDB[e].id==t)return enTitleDB[e].name?enTitleDB[e].name:"";return""}catch(e){return console.log(e),""}},findChineseName(t){try{for(const e of Object.keys(hkTitleDB))if(hkTitleDB[e].id==t)return hkTitleDB[e].name?hkTitleDB[e].name:"";return""}catch(e){return console.log(e),""}},onSortMethodChanged(t){switch(this.sortedList=[],t.value){case"time":this.sortedList=[...this.gameHistoryList].sort((e,n)=>n.totalPlayedMinutes-e.totalPlayedMinutes);break;case"last":this.sortedList=[...this.gameHistoryList].sort((e,n)=>new Date(n.lastPlayedAt).getTime()-new Date(e.lastPlayedAt).getTime);break;case"jpname":this.sortedList=[...this.gameHistoryList].sort((e,n)=>e.titleName.localeCompare(n.titleName,"ja"));break;default:this.sortedList=[];break}},async refreshList(){this.totalMinute=0,await g.getHistory(),this.totalMinute=g.getTotalGameTime(),g.isLogin||this.$router.push("/login")},getGameDetail(t){return x.gameDetail[t]!==void 0?x.gameDetail[t]:{lang:"ja",name:"",bannerUrl:""}}},computed:{},async mounted(){this.onSortMethodChanged(this.currentSortOption),g.isLogin?(x.list.length==0&&(await g.getHistory(),g.isLogin||this.$router.push("/login")),this.totalMinute=g.getTotalGameTime(),this.onSortMethodChanged(this.currentSortOption)):this.$router.push("/login")},watch:{gameHistoryList(t,e){this.onSortMethodChanged(this.currentSortOption)}}}),Zt=["lang"],Kt=["lang"],Xt={class:"row full-width justify-around no-wrap",style:{"max-width":"400px"}},te={class:"row no-wrap items-end"},ee={class:"text-h6"},se={class:"text-h4 q-pl-sm"},ae={class:"row no-wrap items-end"},oe={class:"text-h6"},ie={class:"text-h4 q-pl-sm"},ne=a("div",{class:"text-h5 q-pl-sm"},"h",-1),le={class:"text-h4 q-pl-sm"},re=a("div",{class:"text-h5 q-pl-sm"},"m",-1),de={class:"row full-width justify-start q-px-md q-pt-md",style:{"max-width":"1200px"}},ce={class:"row full-width q-px-md q-pt-sm",style:{"max-width":"1200px"}},ue={class:"flex no-wrap full-height"},me={style:{width:"80px"},class:"column justify-center"},he={class:"column q-pl-md justify-center",style:{width:"calc(100% - 80px)"}},ge=["lang"],fe=["lang"],pe={lang:"ja"},ve={class:"row no-wrap items-center q-pt-xs"},ye=["lang"],we={class:"row no-wrap items-center q-pt-xs"},be={class:"text-body2 ellipsis q-pl-xs"};function Te(t,e,n,r,o,l){return k(),bt(Rt,{class:"column content-center items-center"},{default:y(()=>[a("div",{class:"text-h5 xs text-dark q-pt-md text-center q-pb-md",lang:t.$i18n.locale},c(t.$t("gameCards.mygames")),9,Zt),a("div",{class:"text-h3 gt-xs text-dark q-pt-lg text-center q-pb-lg",lang:t.$i18n.locale},c(t.$t("gameCards.mygames")),9,Kt),a("div",Xt,[a("div",te,[a("div",ee,[d(S,{name:"mdi-gamepad-variant-outline",size:"sm"})]),a("div",se,c(t.gameHistoryList.length),1)]),a("div",ae,[a("div",oe,[d(S,{name:"mdi-clock-outline",size:"sm"})]),a("div",ie,c(Math.floor(t.totalMinute/60)),1),ne,a("div",le,c(String(t.totalMinute%60).padStart(2,"0")),1),re])]),a("div",de,[d(Tt,{round:"",flat:"",icon:"mdi-refresh",onClick:e[0]||(e[0]=async()=>await t.refreshList())}),d(Ct),d(Lt,{class:"q-px-xs",style:{width:"200px"},outlined:"",dense:"",modelValue:t.currentSortOption,"onUpdate:modelValue":[e[1]||(e[1]=s=>t.currentSortOption=s),t.onSortMethodChanged],options:t.sortOptions,label:t.$t("gameCards.sortby"),"option-label":s=>t.$t(`gameCards.${s.value}`)},null,8,["modelValue","options","label","onUpdate:modelValue","option-label"])]),a("div",ce,[(k(!0),Q(xt,null,St(t.sortedList,s=>(k(),Q("div",{class:"col-12 col-sm-6 q-px-xs q-pb-sm",key:s},[d(Ft,{class:"my-card",style:{height:"125px"}},{default:y(()=>[d(Wt,{class:"full-height"},{default:y(()=>[a("div",ue,[a("div",me,[d(kt,{src:s.imageUrl,height:"80px",width:"80px"},null,8,["src"])]),a("div",he,[a("div",{class:"text-body1 ellipsis full-width",lang:t.getGameDetail(s.titleId).lang},[E(c(t.getGameDetail(s.titleId).name)+" ",1),d(F,null,{default:y(()=>[a("span",{lang:t.getGameDetail(s.titleId).lang},c(t.getGameDetail(s.titleId).name),9,fe)]),_:2},1024)],8,ge),a("div",{class:_t(["text-body2 ellipsis text-grey-6 full-width q-pt-none",{invisible:t.getGameDetail(s.titleId).name==s.titleName}]),lang:"ja"},[E(c(s.titleName)+" ",1),d(F,null,{default:y(()=>[a("span",pe,c(s.titleName),1)]),_:2},1024)],2),a("div",ve,[d(S,{name:"mdi-play-box-outline",size:"xs"}),a("div",{class:"text-body2 ellipsis q-pl-xs",lang:t.$i18n.locale},c(t.timeIntervalFromNow(s.lastPlayedAt)),9,ye)]),a("div",we,[d(S,{name:"mdi-clock-outline",size:"xs"}),a("div",be,c(t.minutesToHHmm(s.totalPlayedMinutes)),1)])])])]),_:2},1024)]),_:2},1024)]))),128))])]),_:1})}var Me=vt(Yt,[["render",Te]]);export{Me as default};

import{h as D,l as R,r as I,c as T,w as B,p as j,G,A as N,ao as ht,g as gt,m as ft,H as pt,_ as vt,Z as yt,d as wt,X as k,a0 as bt,a1 as y,a3 as a,a8 as c,j as d,a7 as S,a2 as Tt,Y as E,a5 as St,F as xt,a4 as Q,a6 as Ct}from"./index.20bb2650.js";import{t as _t,u as kt,v as q,w as A,x as qt,s as Dt,h as Mt,y as Pt,i as Ht,z as Ot,A as Lt,B as It,j as Bt,C as jt,D as V,E as Gt,c as z,g as Nt,F as U,G as Et,p as Qt}from"./QSelect.6c6abc74.js";import{Q as At}from"./QImg.99f84e96.js";import{Q as Vt,a as zt}from"./QCard.4436dbe9.js";import{Q as Ut}from"./QPage.b38f4455.js";import{n as Ft,b as Rt}from"./user-info.6d9e66ba.js";const Wt=D("div",{class:"q-space"});var Jt=R({name:"QSpace",setup(){return()=>Wt}}),F=R({name:"QTooltip",inheritAttrs:!1,props:{..._t,...kt,...q,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...q.transitionShow,default:"jump-down"},transitionHide:{...q.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:A},self:{type:String,default:"top middle",validator:A},offset:{type:Array,default:()=>[14,14],validator:qt},scrollTarget:Dt,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Mt],setup(t,{slots:e,emit:i,attrs:r}){let o,l;const s=gt(),{proxy:{$q:u}}=s,f=I(null),w=I(!1),W=T(()=>U(t.anchor,u.lang.rtl)),J=T(()=>U(t.self,u.lang.rtl)),X=T(()=>t.persistent!==!0),{registerTick:Y,removeTick:Z}=Pt(),{registerTimeout:b}=Ht(),{transitionProps:K,transitionStyle:tt}=Ot(t),{localScrollTarget:M,changeScrollEvent:et,unconfigureScrollTarget:st}=Lt(t,O),{anchorEl:m,canShow:at,anchorEvents:p}=It({showing:w,configureAnchorEl:ct}),{show:ot,hide:C}=Bt({showing:w,canShow:at,handleShow:it,handleHide:lt,hideOnRouteChange:X,processOnMount:!0});Object.assign(p,{delayShow:rt,delayHide:dt});const{showPortal:P,hidePortal:$,renderPortal:nt}=jt(s,f,mt,"tooltip");if(u.platform.is.mobile===!0){const n={anchorEl:m,innerRef:f,onClickOutside(h){return C(h),h.target.classList.contains("q-dialog__backdrop")&&pt(h),!0}},_=T(()=>t.modelValue===null&&t.persistent!==!0&&w.value===!0);B(_,h=>{(h===!0?Et:V)(n)}),j(()=>{V(n)})}function it(n){P(),Y(()=>{l=new MutationObserver(()=>v()),l.observe(f.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),v(),O()}),o===void 0&&(o=B(()=>u.screen.width+"|"+u.screen.height+"|"+t.self+"|"+t.anchor+"|"+u.lang.rtl,v)),b(()=>{P(!0),i("show",n)},t.transitionDuration)}function lt(n){Z(),$(),H(),b(()=>{$(!0),i("hide",n)},t.transitionDuration)}function H(){l!==void 0&&(l.disconnect(),l=void 0),o!==void 0&&(o(),o=void 0),st(),G(p,"tooltipTemp")}function v(){Gt({targetEl:f.value,offset:t.offset,anchorEl:m.value,anchorOrigin:W.value,selfOrigin:J.value,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function rt(n){if(u.platform.is.mobile===!0){z(),document.body.classList.add("non-selectable");const _=m.value,h=["touchmove","touchcancel","touchend","click"].map(L=>[_,L,"delayHide","passiveCapture"]);N(p,"tooltipTemp",h)}b(()=>{ot(n)},t.delay)}function dt(n){u.platform.is.mobile===!0&&(G(p,"tooltipTemp"),z(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),b(()=>{C(n)},t.hideDelay)}function ct(){if(t.noParentEvent===!0||m.value===null)return;const n=u.platform.is.mobile===!0?[[m.value,"touchstart","delayShow","passive"]]:[[m.value,"mouseenter","delayShow","passive"],[m.value,"mouseleave","delayHide","passive"]];N(p,"anchor",n)}function O(){if(m.value!==null||t.scrollTarget!==void 0){M.value=Nt(m.value,t.scrollTarget);const n=t.noParentEvent===!0?v:C;et(M.value,n)}}function ut(){return w.value===!0?D("div",{...r,ref:f,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",r.class],style:[r.style,tt.value],role:"tooltip"},ft(e.default)):null}function mt(){return D(ht,K.value,ut)}return j(H),Object.assign(s.proxy,{updatePosition:v}),nt}});const x=Ft(),g=Rt(),{list:Xt}=yt(x),Yt=wt({name:"GameCard",data:()=>({apple:114514,sortedList:[],sortOptions:[{label:"Game Time",value:"time"},{label:"Last Played",value:"last"},{label:"Japanese Name",value:"jpname"}],currentSortOption:{label:"Game Time",value:"time"},gameHistoryList:Xt,totalMinute:0}),methods:{timeIntervalFromNow(t){const e=new Date,i=new Date(t),r=(e-i)/1e3,o=Math.abs(r);let l;if(o<3600)l=$t("gameCards.timeInterval.withinOneHour");else if(o<86400){const s=Math.floor(o/3600);l=this.$tc(`gameCards.timeInterval.hour${r>0?"ago":"after"}`,s)}else if(o<2592e3){const s=Math.floor(o/86400);l=this.$tc(`gameCards.timeInterval.day${r>0?"ago":"after"}`,s)}else if(o<31104e3){const s=Math.floor(o/2592e3);l=this.$tc(`gameCards.timeInterval.month${r>0?"ago":"after"}`,s)}else{const s=Math.floor(o/2592e3);l=this.$tc(`gameCards.timeInterval.month${r>0?"ago":"after"}`,s)}return l},minutesToHHmm(t){const e=Math.floor(t/60),i=t%60,r=String(e).padStart(1,"0"),o=String(i).padStart(2,"0");return`${r} h ${o} m`},findEnglishName(t){try{for(const e of Object.keys(enTitleDB))if(enTitleDB[e].id==t)return enTitleDB[e].name?enTitleDB[e].name:"";return""}catch(e){return console.log(e),""}},findChineseName(t){try{for(const e of Object.keys(hkTitleDB))if(hkTitleDB[e].id==t)return hkTitleDB[e].name?hkTitleDB[e].name:"";return""}catch(e){return console.log(e),""}},onSortMethodChanged(t){switch(this.sortedList=[],t.value){case"time":this.sortedList=[...this.gameHistoryList].sort((e,i)=>i.totalPlayedMinutes-e.totalPlayedMinutes);break;case"last":this.sortedList=[...this.gameHistoryList].sort((e,i)=>new Date(i.lastPlayedAt).getTime()-new Date(e.lastPlayedAt).getTime);break;case"jpname":this.sortedList=[...this.gameHistoryList].sort((e,i)=>e.titleName.localeCompare(i.titleName,"ja"));break;default:this.sortedList=[];break}},async refreshList(){this.totalMinute=0,await g.getHistory(),this.totalMinute=g.getTotalGameTime(),g.isLogin||this.$router.push("/login")},getGameDetail(t){return x.gameDetail[t]!==void 0?x.gameDetail[t]:{lang:"ja",name:"",bannerUrl:""}}},computed:{},async mounted(){this.onSortMethodChanged(this.currentSortOption),g.isLogin?(x.list.length==0&&(await g.getHistory(),g.isLogin||this.$router.push("/login")),this.totalMinute=g.getTotalGameTime(),this.onSortMethodChanged(this.currentSortOption)):this.$router.push("/login")},watch:{gameHistoryList(t,e){this.onSortMethodChanged(this.currentSortOption)}}}),Zt=["lang"],Kt=["lang"],te={class:"row full-width justify-around no-wrap",style:{"max-width":"400px"}},ee={class:"row no-wrap items-end"},se={class:"text-h6"},ae={class:"text-h4 q-pl-sm"},oe={class:"row no-wrap items-end"},ne={class:"text-h6"},ie={class:"text-h4 q-pl-sm"},le=a("div",{class:"text-h5 q-pl-sm"},"h",-1),re={class:"text-h4 q-pl-sm"},de=a("div",{class:"text-h5 q-pl-sm"},"m",-1),ce={class:"row full-width justify-start q-px-md q-pt-md",style:{"max-width":"1200px"}},ue={class:"row full-width q-px-md q-pt-sm",style:{"max-width":"1200px"}},me={class:"flex no-wrap"},he={style:{width:"80px"},class:"col content-center"},ge={class:"column q-pl-md justify-center",style:{width:"calc(100% - 80px)"}},fe=["lang"],pe=["lang"],ve={class:"row no-wrap items-center q-pt-xs"},ye=["lang"],we={class:"row no-wrap items-center q-pt-xs"},be={class:"text-body2 ellipsis q-pl-xs"};function Te(t,e,i,r,o,l){return k(),bt(Ut,{class:"column content-center items-center"},{default:y(()=>[a("div",{class:"text-h5 xs text-dark q-pt-md text-center q-pb-md",lang:t.$i18n.locale},c(t.$t("gameCards.mygames")),9,Zt),a("div",{class:"text-h3 gt-xs text-dark q-pt-lg text-center q-pb-lg",lang:t.$i18n.locale},c(t.$t("gameCards.mygames")),9,Kt),a("div",te,[a("div",ee,[a("div",se,[d(S,{name:"mdi-gamepad-variant-outline",size:"sm"})]),a("div",ae,c(t.gameHistoryList.length),1)]),a("div",oe,[a("div",ne,[d(S,{name:"mdi-clock-outline",size:"sm"})]),a("div",ie,c(Math.floor(t.totalMinute/60)),1),le,a("div",re,c(String(t.totalMinute%60).padStart(2,"0")),1),de])]),a("div",ce,[d(Tt,{round:"",flat:"",icon:"mdi-refresh",onClick:e[0]||(e[0]=async()=>await t.refreshList())}),d(Jt),d(Qt,{class:"q-px-xs",style:{width:"200px"},outlined:"",dense:"",modelValue:t.currentSortOption,"onUpdate:modelValue":[e[1]||(e[1]=s=>t.currentSortOption=s),t.onSortMethodChanged],options:t.sortOptions,label:t.$t("gameCards.sortby"),"option-label":s=>t.$t(`gameCards.${s.value}`)},null,8,["modelValue","options","label","onUpdate:modelValue","option-label"])]),a("div",ue,[(k(!0),E(xt,null,St(t.sortedList,s=>(k(),E("div",{class:"col-12 col-sm-6 q-px-xs q-pb-sm",key:s},[d(Vt,{class:"my-card full-width",style:{height:"125px"}},{default:y(()=>[d(zt,null,{default:y(()=>[a("div",me,[a("div",he,[d(At,{src:s.imageUrl,height:"80px",width:"80px"},null,8,["src"])]),a("div",ge,[a("div",{class:"text-body1 ellipsis full-width",lang:t.getGameDetail(s.titleId).lang},[Q(c(t.getGameDetail(s.titleId).name)+" ",1),d(F,null,{default:y(()=>[a("span",{lang:t.getGameDetail(s.titleId).lang},c(t.getGameDetail(s.titleId).name),9,pe)]),_:2},1024)],8,fe),a("div",{class:Ct(["text-body2 ellipsis text-grey-6 full-width q-pt-none",{invisible:t.getGameDetail(s.titleId).name==s.titleName}])},[Q(c(s.titleName)+" ",1),d(F,null,{default:y(()=>[a("span",null,c(s.titleName),1)]),_:2},1024)],2),a("div",ve,[d(S,{name:"mdi-play-box-outline",size:"xs"}),a("div",{class:"text-body2 ellipsis q-pl-xs",lang:t.$i18n.locale},c(t.timeIntervalFromNow(s.lastPlayedAt)),9,ye)]),a("div",we,[d(S,{name:"mdi-clock-outline",size:"xs"}),a("div",be,c(t.minutesToHHmm(s.totalPlayedMinutes)),1)])])])]),_:2},1024)]),_:2},1024)]))),128))])]),_:1})}var De=vt(Yt,[["render",Te]]);export{De as default};

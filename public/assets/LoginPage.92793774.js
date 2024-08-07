import{a as H,Q as de}from"./QCard.fe20af72.js";import{u as pe,a as Ce,p as $e,G as _e,q as be,H as Se,t as Te,r as Pe,I as ce,D as Ve,K as Re,N as Fe,n as Ae,o as Ee,O as se,J as fe,Q as Le}from"./user-info.83a50de3.js";import{l as ye,c as P,h as W,g as Me,r as ue,w as O,N as Y,ag as qe,p as Ne,o as De,ao as Be,D as ge,ax as Oe,ay as Ie,_ as je,d as Ue,U as ze,Y as Qe,Z as S,a0 as M,a4 as b,j as $,a1 as z,$ as ee,M as he}from"./index.704e14c9.js";import{Q as Ke,C as me}from"./ClosePopup.4ef7f76a.js";import{Q as Ze}from"./QPage.947fd868.js";import"./i18n.72124940.js";const He={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},oe={xs:2,sm:4,md:8,lg:16,xl:24};var Ye=ye({name:"QSeparator",props:{...pe,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const s=Me(),f=Ce(e,s.proxy.$q),w=P(()=>e.vertical===!0?"vertical":"horizontal"),u=P(()=>` q-separator--${w.value}`),g=P(()=>e.inset!==!1?`${u.value}-${He[e.inset]}`:""),p=P(()=>`q-separator${u.value}${g.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(f.value===!0?" q-separator--dark":"")),R=P(()=>{const F={};if(e.size!==void 0&&(F[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const y=e.spaced===!0?`${oe.md}px`:e.spaced in oe?`${oe[e.spaced]}px`:e.spaced,_=e.vertical===!0?["Left","Right"]:["Top","Bottom"];F[`margin${_[0]}`]=F[`margin${_[1]}`]=y}return F});return()=>W("hr",{class:p.value,style:R.value,"aria-orientation":w.value})}});const ve={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},ae={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},xe=Object.keys(ae);xe.forEach(e=>{ae[e].regex=new RegExp(ae[e].pattern)});const Ge=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+xe.join("")+"])|(.)","g"),ke=/[.*+?^${}()|[\]\\]/g,x=String.fromCharCode(1),We={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Je(e,s,f,w){let u,g,p,R,F,y;const _=ue(null),h=ue(A());function ne(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}O(()=>e.type+e.autogrow,Q),O(()=>e.mask,l=>{if(l!==void 0)j(h.value,!0);else{const a=E(h.value);Q(),e.modelValue!==a&&s("update:modelValue",a)}}),O(()=>e.fillMask+e.reverseFillMask,()=>{_.value===!0&&j(h.value,!0)}),O(()=>e.unmaskedValue,()=>{_.value===!0&&j(h.value)});function A(){if(Q(),_.value===!0){const l=K(E(e.modelValue));return e.fillMask!==!1?X(l):l}return e.modelValue}function I(l){if(l<u.length)return u.slice(-l);let a="",i=u;const n=i.indexOf(x);if(n!==-1){for(let r=l-i.length;r>0;r--)a+=x;i=i.slice(0,n)+a+i.slice(n)}return i}function Q(){if(_.value=e.mask!==void 0&&e.mask.length!==0&&ne(),_.value===!1){R=void 0,u="",g="";return}const l=ve[e.mask]===void 0?e.mask:ve[e.mask],a=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",i=a.replace(ke,"\\$&"),n=[],r=[],o=[];let k=e.reverseFillMask===!0,d="",c="";l.replace(Ge,(C,t,v,q,L)=>{if(q!==void 0){const T=ae[q];o.push(T),c=T.negate,k===!0&&(r.push("(?:"+c+"+)?("+T.pattern+"+)?(?:"+c+"+)?("+T.pattern+"+)?"),k=!1),r.push("(?:"+c+"+)?("+T.pattern+")?")}else if(v!==void 0)d="\\"+(v==="\\"?"":v),o.push(v),n.push("([^"+d+"]+)?"+d+"?");else{const T=t!==void 0?t:L;d=T==="\\"?"\\\\\\\\":T.replace(ke,"\\\\$&"),o.push(T),n.push("([^"+d+"]+)?"+d+"?")}});const U=new RegExp("^"+n.join("")+"("+(d===""?".":"[^"+d+"]")+"+)?"+(d===""?"":"["+d+"]*")+"$"),B=r.length-1,m=r.map((C,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+i+"*"+C):t===B?new RegExp("^"+C+"("+(c===""?".":c)+"+)?"+(e.reverseFillMask===!0?"$":i+"*")):new RegExp("^"+C));p=o,R=C=>{const t=U.exec(e.reverseFillMask===!0?C:C.slice(0,o.length+1));t!==null&&(C=t.slice(1).join(""));const v=[],q=m.length;for(let L=0,T=C;L<q;L++){const Z=m[L].exec(T);if(Z===null)break;T=T.slice(Z.shift().length),v.push(...Z)}return v.length!==0?v.join(""):C},u=o.map(C=>typeof C=="string"?C:x).join(""),g=u.split(x).join(a)}function j(l,a,i){const n=w.value,r=n.selectionEnd,o=n.value.length-r,k=E(l);a===!0&&Q();const d=K(k),c=e.fillMask!==!1?X(d):d,U=h.value!==c;n.value!==c&&(n.value=c),U===!0&&(h.value=c),document.activeElement===n&&Y(()=>{if(c===g){const m=e.reverseFillMask===!0?g.length:0;n.setSelectionRange(m,m,"forward");return}if(i==="insertFromPaste"&&e.reverseFillMask!==!0){const m=n.selectionEnd;let C=r-1;for(let t=F;t<=C&&t<m;t++)u[t]!==x&&C++;V.right(n,C);return}if(["deleteContentBackward","deleteContentForward"].indexOf(i)!==-1){const m=e.reverseFillMask===!0?r===0?c.length>d.length?1:0:Math.max(0,c.length-(c===g?0:Math.min(d.length,o)+1))+1:r;n.setSelectionRange(m,m,"forward");return}if(e.reverseFillMask===!0)if(U===!0){const m=Math.max(0,c.length-(c===g?0:Math.min(d.length,o+1)));m===1&&r===1?n.setSelectionRange(m,m,"forward"):V.rightReverse(n,m)}else{const m=c.length-o;n.setSelectionRange(m,m,"backward")}else if(U===!0){const m=Math.max(0,u.indexOf(x),Math.min(d.length,r)-1);V.right(n,m)}else{const m=r-1;V.right(n,m)}});const B=e.unmaskedValue===!0?E(c):c;String(e.modelValue)!==B&&(e.modelValue!==null||B!=="")&&f(B,!0)}function le(l,a,i){const n=K(E(l.value));a=Math.max(0,u.indexOf(x),Math.min(n.length,a)),F=a,l.setSelectionRange(a,i,"forward")}const V={left(l,a){const i=u.slice(a-1).indexOf(x)===-1;let n=Math.max(0,a-1);for(;n>=0;n--)if(u[n]===x){a=n,i===!0&&a++;break}if(n<0&&u[a]!==void 0&&u[a]!==x)return V.right(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},right(l,a){const i=l.value.length;let n=Math.min(i,a+1);for(;n<=i;n++)if(u[n]===x){a=n;break}else u[n-1]===x&&(a=n);if(n>i&&u[a-1]!==void 0&&u[a-1]!==x)return V.left(l,i);l.setSelectionRange(a,a,"forward")},leftReverse(l,a){const i=I(l.value.length);let n=Math.max(0,a-1);for(;n>=0;n--)if(i[n-1]===x){a=n;break}else if(i[n]===x&&(a=n,n===0))break;if(n<0&&i[a]!==void 0&&i[a]!==x)return V.rightReverse(l,0);a>=0&&l.setSelectionRange(a,a,"backward")},rightReverse(l,a){const i=l.value.length,n=I(i),r=n.slice(0,a+1).indexOf(x)===-1;let o=Math.min(i,a+1);for(;o<=i;o++)if(n[o-1]===x){a=o,a>0&&r===!0&&a--;break}if(o>i&&n[a-1]!==void 0&&n[a-1]!==x)return V.leftReverse(l,i);l.setSelectionRange(a,a,"forward")}};function ie(l){s("click",l),y=void 0}function J(l){if(s("keydown",l),qe(l)===!0||l.altKey===!0)return;const a=w.value,i=a.selectionStart,n=a.selectionEnd;if(l.shiftKey||(y=void 0),l.keyCode===37||l.keyCode===39){l.shiftKey&&y===void 0&&(y=a.selectionDirection==="forward"?i:n);const r=V[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(l.preventDefault(),r(a,y===i?n:i),l.shiftKey){const o=a.selectionStart;a.setSelectionRange(Math.min(y,o),Math.max(y,o),"forward")}}else l.keyCode===8&&e.reverseFillMask!==!0&&i===n?(V.left(a,i),a.setSelectionRange(a.selectionStart,n,"backward")):l.keyCode===46&&e.reverseFillMask===!0&&i===n&&(V.rightReverse(a,n),a.setSelectionRange(i,a.selectionEnd,"forward"))}function K(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return D(l);const a=p;let i=0,n="";for(let r=0;r<a.length;r++){const o=l[i],k=a[r];if(typeof k=="string")n+=k,o===k&&i++;else if(o!==void 0&&k.regex.test(o))n+=k.transform!==void 0?k.transform(o):o,i++;else return n}return n}function D(l){const a=p,i=u.indexOf(x);let n=l.length-1,r="";for(let o=a.length-1;o>=0&&n!==-1;o--){const k=a[o];let d=l[n];if(typeof k=="string")r=k+r,d===k&&n--;else if(d!==void 0&&k.regex.test(d))do r=(k.transform!==void 0?k.transform(d):d)+r,n--,d=l[n];while(i===o&&d!==void 0&&k.regex.test(d));else return r}return r}function E(l){return typeof l!="string"||R===void 0?typeof l=="number"?R(""+l):l:R(l)}function X(l){return g.length-l.length<=0?l:e.reverseFillMask===!0&&l.length!==0?g.slice(0,-l.length)+l:l+g.slice(l.length)}return{innerValue:h,hasMask:_,moveCursorForPaste:le,updateMaskValue:j,onMaskedKeydown:J,onMaskedClick:ie}}function Xe(e,s){function f(){const w=e.modelValue;try{const u="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(w)===w&&("length"in w?Array.from(w):[w]).forEach(g=>{u.items.add(g)}),{files:u.files}}catch{return{files:void 0}}}return s===!0?P(()=>{if(e.type==="file")return f()}):P(f)}var we=ye({name:"QInput",inheritAttrs:!1,props:{...$e,...We,..._e,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...be,"paste","change","keydown","click","animationend"],setup(e,{emit:s,attrs:f}){const{proxy:w}=Me(),{$q:u}=w,g={};let p=NaN,R,F,y=null,_;const h=ue(null),ne=Se(e),{innerValue:A,hasMask:I,moveCursorForPaste:Q,updateMaskValue:j,onMaskedKeydown:le,onMaskedClick:V}=Je(e,s,d,h),ie=Xe(e,!0),J=P(()=>ce(A.value)),K=Re(o),D=Te({changeEvent:!0}),E=P(()=>e.type==="textarea"||e.autogrow===!0),X=P(()=>E.value===!0||["text","search","url","tel","password"].includes(e.type)),l=P(()=>{const t={...D.splitAttrs.listeners.value,onInput:o,onPaste:r,onChange:U,onBlur:B,onFocus:ge};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=K,I.value===!0&&(t.onKeydown=le,t.onClick=V),e.autogrow===!0&&(t.onAnimationend=k),t}),a=P(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:ne.value,...D.splitAttrs.attributes.value,id:D.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return E.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});O(()=>e.type,()=>{h.value&&(h.value.value=e.modelValue)}),O(()=>e.modelValue,t=>{if(I.value===!0){if(F===!0&&(F=!1,String(t)===p))return;j(t)}else A.value!==t&&(A.value=t,e.type==="number"&&g.hasOwnProperty("value")===!0&&(R===!0?R=!1:delete g.value));e.autogrow===!0&&Y(c)}),O(()=>e.autogrow,t=>{t===!0?Y(c):h.value!==null&&f.rows>0&&(h.value.style.height="auto")}),O(()=>e.dense,()=>{e.autogrow===!0&&Y(c)});function i(){Ve(()=>{const t=document.activeElement;h.value!==null&&h.value!==t&&(t===null||t.id!==D.targetUid.value)&&h.value.focus({preventScroll:!0})})}function n(){h.value!==null&&h.value.select()}function r(t){if(I.value===!0&&e.reverseFillMask!==!0){const v=t.target;Q(v,v.selectionStart,v.selectionEnd)}s("paste",t)}function o(t){if(!t||!t.target)return;if(e.type==="file"){s("update:modelValue",t.target.files);return}const v=t.target.value;if(t.target.qComposing===!0){g.value=v;return}if(I.value===!0)j(v,!1,t.inputType);else if(d(v),X.value===!0&&t.target===document.activeElement){const{selectionStart:q,selectionEnd:L}=t.target;q!==void 0&&L!==void 0&&Y(()=>{t.target===document.activeElement&&v.indexOf(t.target.value)===0&&t.target.setSelectionRange(q,L)})}e.autogrow===!0&&c()}function k(t){s("animationend",t),c()}function d(t,v){_=()=>{y=null,e.type!=="number"&&g.hasOwnProperty("value")===!0&&delete g.value,e.modelValue!==t&&p!==t&&(p=t,v===!0&&(F=!0),s("update:modelValue",t),Y(()=>{p===t&&(p=NaN)})),_=void 0},e.type==="number"&&(R=!0,g.value=t),e.debounce!==void 0?(y!==null&&clearTimeout(y),g.value=t,y=setTimeout(_,e.debounce)):_()}function c(){requestAnimationFrame(()=>{const t=h.value;if(t!==null){const v=t.parentNode.style,{scrollTop:q}=t,{overflowY:L,maxHeight:T}=u.platform.is.firefox===!0?{}:window.getComputedStyle(t),Z=L!==void 0&&L!=="scroll";Z===!0&&(t.style.overflowY="hidden"),v.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.height=t.scrollHeight+"px",Z===!0&&(t.style.overflowY=parseInt(T,10)<t.scrollHeight?"auto":"hidden"),v.marginBottom="",t.scrollTop=q}})}function U(t){K(t),y!==null&&(clearTimeout(y),y=null),_!==void 0&&_(),s("change",t.target.value)}function B(t){t!==void 0&&ge(t),y!==null&&(clearTimeout(y),y=null),_!==void 0&&_(),R=!1,F=!1,delete g.value,e.type!=="file"&&setTimeout(()=>{h.value!==null&&(h.value.value=A.value!==void 0?A.value:"")})}function m(){return g.hasOwnProperty("value")===!0?g.value:A.value!==void 0?A.value:""}Ne(()=>{B()}),De(()=>{e.autogrow===!0&&c()}),Object.assign(D,{innerValue:A,fieldClass:P(()=>`q-${E.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:P(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:h,emitValue:d,hasValue:J,floatingLabel:P(()=>J.value===!0&&(e.type!=="number"||isNaN(A.value)===!1)||ce(e.displayValue)),getControl:()=>W(E.value===!0?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...a.value,...l.value,...e.type!=="file"?{value:m()}:ie.value}),getShadowControl:()=>W("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(E.value===!0?"":" text-no-wrap")},[W("span",{class:"invisible"},m()),W("span",e.shadowText)])});const C=Pe(D);return Object.assign(w,{focus:i,select:n,getNativeElement:()=>h.value}),Be(w,"nativeEl",()=>h.value),C}});const et=Oe("lodingNotify",{state:()=>({notif:null}),actions:{create(e,s="",f=""){this.notif=Ie.create({message:e,group:!1,color:s==""?null:s,timeout:0,caption:f==""?null:f,spinner:!0})},update(e,s="",f=""){this.notif==null?this.create(e,s,f):this.notif({message:e,group:!1,color:s==""?null:s,timeout:0,caption:f==""?null:f,spinner:!0})},end(e,s="",f="",w=2e3){this.notif({message:e,group:!1,color:s==""?null:s,timeout:w,caption:f==""?null:f,spinner:!1})},close(){this.notif==null}}});const tt="production",re=tt.toLowerCase()=="development"?"http://localhost:3000":"";Fe();const G=Ae(),N=et(),te=Ee(),at=Ue({name:"LoginPage",data:()=>({auth_link:"",auth_verifier:"",redirect_link:"",turnstileToken:"",turnstileTokenUsed:!0,turnstileState:te,showLinkDlg:!1}),computed:{},directives:{},methods:{randomandomString(e){let s="";const f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",w=f.length;for(let u=0;u<e;u++)s+=f.charAt(Math.floor(Math.random()*w));return s},async getAuthLink(){try{let e=await se.get(re+"/api/getlink",{withCredentials:!0});return e.status==200&&e.data.status=="success"?(this.auth_link=e.data.link,this.auth_verifier=e.data.verifier,!0):!1}catch(e){return e.response&&(e.response.data.reason==="Verification needed"||this.$q.notify({message:`${e.response.data.reason}`,color:"negative"})),!1}},async getSessionToken(){try{if(this.$refs.redirectLinkEdit.validate()){N.update(this.$i18n.t("loginPage.getSessionToken"),void 0,"0%");let e=Object.fromEntries(new URLSearchParams(this.redirect_link.replace("#","?"))),s=e["npf5c38e31cd085304b://auth?session_token_code"]!==void 0?e["npf5c38e31cd085304b://auth?session_token_code"]:"",f=await se.get(re+"/api/getsessiontoken",{params:{session_token_code:s,session_token_code_verifier:this.auth_verifier},withCredentials:!0});f.status==200&&f.data.status=="success"&&await this.getAccessToken(f.data.session_token)}}catch(e){e.response&&(e.response.data.reason==="Verification needed"?(N.update(this.$i18n.t("loginPage.verifingCaptcha"),void 0,"0%"),await te.turnstileRouter(this.getSessionToken)):N.end(`${e.response.data.reason}`,"negative"))}},async getAccessToken(e){try{N.update(this.$i18n.t("loginPage.getAccessToken"),void 0,"33%");let s=await se.get(re+"/api/getaccesstoken",{params:{session_token:e},withCredentials:!0});if(s.status==200&&s.data.status=="success"){if(G.access_token=s.data.access_token,N.update(this.$i18n.t("loginPage.fetchingUserData"),void 0,"67%"),!await G.getMe()){N.end(this.$i18n.t("loginPage.captchaError"),"negative");return}G.isLogin&&(N.end(this.$i18n.t("loginPage.helloUser",[G.userName])),this.$router.push("/games"))}}catch(s){s.response.data.reason==="Verification needed"?(N.update(this.$i18n.t("loginPage.verifingCaptcha"),void 0,"0%"),await te.turnstileRouter(this.getAccessToken,e)):N.end(`${s.response.data.reason}`,"negative")}},async onAuthBtnCLick(){await this.getAuthLink()==!0?(window.open(this.auth_link,"_blank"),this.showLinkDlg=!0):await te.turnstileRouter(this.onAuthBtnCLick)},copyLink(){navigator.clipboard.writeText(this.auth_link)}},async mounted(){this.isMounted=!0,G.isLogin&&this.$router.push("/games")},updated(){},watch:{}}),nt=["lang"],lt=["lang"],it={class:"column full-width q-px-md q-pb-md",style:{"max-width":"600px"}},st=["lang"],ot={class:"text-body2"},rt=["lang"],ut={class:"text-primary"},dt=["lang"],ct={class:"text-body2"},ft=["innerHTML","lang"],gt={class:"column full-width q-px-md",style:{"max-width":"600px"}},ht=["lang"],mt={class:"row no-wrap full-width q-pt-md"},vt={class:"row full-height items-center"},kt=["lang"],wt={class:"text-h6"},yt={class:"text-body2 q-pb-sm"};function Mt(e,s,f,w,u,g){return ze(),Qe(Ze,{class:"column content-center items-center"},{default:S(()=>[M("div",{class:"text-h5 xs text-dark q-pt-md text-center q-pb-md",lang:e.$i18n.locale},b(e.$t("loginPage.login")),9,nt),M("div",{class:"text-h3 gt-xs text-dark q-pt-lg text-center q-pb-lg",lang:e.$i18n.locale},b(e.$t("loginPage.login")),9,lt),M("div",it,[$(de,{class:"my-card"},{default:S(()=>[$(H,null,{default:S(()=>[M("div",{class:"text-h6",lang:e.$i18n.locale},b(e.$t("loginPage.tutorial")),9,st)]),_:1}),$(H,{class:"q-pt-none"},{default:S(()=>[M("div",ot,[M("ul",{class:"q-my-none q-pl-lg",style:{"line-height":"1.5rem"},lang:e.$i18n.locale},[M("li",null,b(e.$t("loginPage.tutorialText.0")),1),M("li",null,[z(b(e.$t("loginPage.tutorialText.1"))+" ",1),$(fe,{dense:"",color:"primary",class:"text-white"},{default:S(()=>[z(b(e.$t("loginPage.tutorialText.2")),1)]),_:1}),z(b(e.$t("loginPage.tutorialText.3"))+" ",1),M("span",ut,b(e.$t("loginPage.tutorialText.4")),1),z(" "+b(e.$t("loginPage.tutorialText.5")),1)]),M("li",null,[z(b(e.$t("loginPage.tutorialText.6"))+" ",1),$(fe,{dense:"",color:"primary",class:"text-white"},{default:S(()=>[z(b(e.$t("loginPage.tutorialText.7")),1)]),_:1}),z(b(e.$t("loginPage.tutorialText.8")),1)])],8,rt)])]),_:1}),$(Ye,{inset:""}),$(H,null,{default:S(()=>[M("div",{class:"text-h6",lang:e.$i18n.locale},b(e.$t("loginPage.disclaimerTitle")),9,dt)]),_:1}),$(H,{class:"q-pt-none"},{default:S(()=>[M("div",ct,[M("ul",{class:"q-my-none q-pl-lg",style:{"line-height":"1.5rem"},innerHTML:e.$t("loginPage.disclaimerText"),lang:e.$i18n.locale},null,8,ft)])]),_:1})]),_:1})]),M("div",gt,[$(ee,{class:"full-width",color:"primary","no-caps":"",onClick:e.onAuthBtnCLick},{default:S(()=>[M("span",{lang:e.$i18n.locale},b(e.$t("loginPage.authorizeFromNintendo")),9,ht)]),_:1},8,["onClick"]),M("div",mt,[$(we,{outlined:"",class:"full-width",dense:"",modelValue:e.redirect_link,"onUpdate:modelValue":s[0]||(s[0]=p=>e.redirect_link=p),label:e.$t("loginPage.redirectLink"),rules:[p=>!!p||"Field Required"],ref:"redirectLinkEdit"},{after:S(()=>[M("div",vt,[$(ee,{color:"primary","no-caps":"",onClick:e.getSessionToken},{default:S(()=>[M("span",{lang:e.$i18n.locale},b(e.$t("loginPage.getToken")),9,kt)]),_:1},8,["onClick"])])]),_:1},8,["modelValue","label","rules"])])]),$(Le,{modelValue:e.showLinkDlg,"onUpdate:modelValue":s[2]||(s[2]=p=>e.showLinkDlg=p)},{default:S(()=>[$(de,{style:{width:"300px"}},{default:S(()=>[$(H,null,{default:S(()=>[M("div",wt,b(e.$t("loginPage.linkCreated")),1)]),_:1}),$(H,{class:"q-pt-none"},{default:S(()=>[M("div",yt,b(e.$t("loginPage.linkDlgText")),1),$(we,{class:"full-width bg-orange-1",outlined:"",dense:"",modelValue:e.auth_link,"onUpdate:modelValue":s[1]||(s[1]=p=>e.auth_link=p),readonly:""},null,8,["modelValue"])]),_:1}),$(Ke,{align:"right",class:"q-pt-none text-primary"},{default:S(()=>[he($(ee,{flat:"",label:"Cancel"},null,512),[[me]]),he($(ee,{flat:"",label:"Copy",onClick:e.copyLink},null,8,["onClick"]),[[me]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}var St=je(at,[["render",Mt]]);export{St as default};

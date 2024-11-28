(function(){"use strict";const e=window.Vue;function b(){return window.panel}const k=e.computed;e.customRef,e.defineAsyncComponent,e.defineComponent,e.effectScope,e.getCurrentInstance;const x=e.getCurrentScope;e.h,e.inject,e.isProxy,e.isReactive,e.isReadonly,e.isRef,e.isShallow,e.markRaw,e.nextTick,e.onActivated,e.onBeforeMount,e.onBeforeUnmount,e.onBeforeUpdate,e.onDeactivated,e.onErrorCaptured;const R=e.onMounted;e.onRenderTracked,e.onRenderTriggered;const A=e.onScopeDispose;e.onServerPrefetch,e.onUnmounted,e.onUpdated,e.provide,e.proxyRefs,e.reactive,e.readonly;const w=e.ref;e.shallowReactive,e.shallowReadonly,e.shallowRef,e.toRaw,e.toRef,e.toRefs,e.triggerRef;const T=e.unref;e.useAttrs,e.useCssModule,e.useCssVars,e.useListeners,e.useSlots;const B=e.watch;e.watchEffect,e.watchPostEffect,e.watchSyncEffect;function E(o){return Object.prototype.toString.call(o)==="[object Object]"}function v(o,t,r,a,c,l,_,u){var i=typeof o=="function"?o.options:o;return t&&(i.render=t,i.staticRenderFns=r,i._compiled=!0),l&&(i._scopeId="data-v-"+l),{exports:o,options:i}}const I={__name:"CharacterSelector",props:{characters:{type:Array,required:!0},languageCode:{type:String,required:!0},type:{type:String,required:!0,default:"dropdown"}},emits:["close"],setup(o,{emit:t}){const r=o,a=b(),c=k(()=>r.characters.map(n=>{let s;return E(n.label)?s=n.label[a.user.language]||n.label.en:s=n.label,m(),{...n,label:s}}));function l(n){navigator.clipboard.writeText(n),r.type==="dialog"?a.dialog.close():t("close"),a.notification.info({message:a.t("philippoehrlein.typo-and-paste.copiedMessage",{character:n}),icon:void 0})}const _=r.type==="dialog"?12:8;function u(n){n.key!=="Enter"&&n.stopPropagation();const s=Array.from(document.querySelectorAll(".tap-characters__section")),f=Array.from(n.currentTarget.querySelectorAll(".tap-characters__item")),h=f.findIndex(y=>y===document.activeElement),C=s.findIndex(y=>y.contains(document.activeElement));if(h===-1&&C===-1)return;let d,p;switch(n.key){case"ArrowRight":d=h+1,d<f.length&&f[d].focus(),n.preventDefault();break;case"ArrowLeft":d=h-1,d>=0&&f[d].focus(),n.preventDefault();break;case"ArrowDown":if(d=h+_,d>=f.length){if(p=C+1,p<s.length){i(s[p]),n.preventDefault();return}}else f[d].focus();n.preventDefault();break;case"ArrowUp":if(d=h-_,d<0){if(p=C-1,p>=0){g(s[p]),n.preventDefault();return}}else f[d].focus();n.preventDefault();break;case"Enter":case" ":if(n.preventDefault(),h!==-1){const y=f[h].textContent.trim();l(y)}break;case"Tab":n.preventDefault(),n.shiftKey?(p=C-1,p>=0&&i(s[p])):(p=C+1,p<s.length&&i(s[p]));break;case"Escape":t("close");break}}function i(n){const s=n.querySelector(".tap-characters__item");s&&s.focus()}function g(n){const s=Array.from(n.querySelectorAll(".tap-characters__item")),f=s[s.length-1];f&&f.focus()}function m(){setTimeout(()=>{const n=document.querySelector(".tap-characters__item");n&&n.focus()},0)}return R(()=>{m()}),{__sfc:!0,props:r,emit:t,panel:a,resolvedCharacters:c,copyToClipboard:l,GRID_COLUMNS:_,handleKeyNavigation:u,focusFirstButtonInSection:i,focusLastButtonInSection:g,focusFirstButton:m}}};var M=function(){var c;var t=this,r=t._self._c,a=t._self._setupProxy;return(c=t.characters)!=null&&c.length?r("div",{staticClass:"tap-characters",class:{"tap-characters--dialog":t.type==="dialog"},attrs:{tabindex:"-1"}},[t._l(a.resolvedCharacters,function(l,_){return[!l.lang||l.lang===t.languageCode?r("section",{key:_,staticClass:"tap-characters__section"},[l.label?r("h3",[t._v(" "+t._s(l.label)+" ")]):t._e(),r("div",{staticClass:"tap-characters__items",on:{keydown:a.handleKeyNavigation}},t._l(l.characters,function(u){return r("k-button",{key:u,staticClass:"tap-characters__item",attrs:{tabindex:"0"},on:{click:function(i){return a.copyToClipboard(u)}}},[t._v(" "+t._s(u)+" ")])}),1)]):t._e()]})],2):t._e()},V=[],q=v(I,M,V,!1,null,"0668ad33");const $=q.exports,L={__name:"DropdownButton",setup(o){const t=b(),r=w(),a=w(),c=w([]),l=k(()=>{var u,i;return((u=t.language)==null?void 0:u.code)||((i=t.user)==null?void 0:i.language)||"en"});return(async()=>{try{c.value=await t.api.get("typo-and-paste/characters")}catch(u){console.error("Error loading characters:",u)}})(),{__sfc:!0,panel:t,dropdownTrigger:r,dropdownContent:a,characters:c,languageCode:l,closeDropdown:()=>{a.value.toggle()},DropdownContent:$}}};var P=function(){var t=this,r=t._self._c,a=t._self._setupProxy;return r("div",[r("k-button",{ref:"dropdownTrigger",attrs:{dropdown:!0,title:a.panel.t("philippoehrlein.typo-and-paste.buttonTitle"),variant:"filled",size:"sm",icon:"typo-and-paste"},on:{click:function(c){return a.dropdownContent.toggle()}}}),r("k-dropdown-content",{ref:"dropdownContent",attrs:{"align-x":"end"}},[r(a.DropdownContent,{attrs:{characters:a.characters,"language-code":a.languageCode},on:{close:a.closeDropdown}})],1)],1)},U=[],j=v(L,P,U,!1,null,null);const S=j.exports,K={components:{DropdownContent:$},props:{visible:{default:!1,type:Boolean}},emits:["cancel","close","input","submit","success"],data(){return{dropdownContent:void 0,characters:[]}},computed:{languageCode(){var o,t;return((o=this.$panel.language)==null?void 0:o.code)||((t=this.$panel.user)==null?void 0:t.language)||"en"}},async created(){try{this.characters=await this.$panel.api.get("typo-and-paste/characters")}catch(o){console.error("Error loading characters:",o)}},methods:{cancel(){this.$emit("cancel")},close(){this.$emit("close")},open(){this.$panel.dialog.open(this)},submit(){this.$emit("submit",this.value)},success(o){this.$emit("success",o)}}};var F=function(){var t=this,r=t._self._c;return r("k-dialog",{staticClass:"k-typo-and-paste-dialog",attrs:{"cancel-button":!1,"submit-button":!1,size:"medium",visible:t.visible},on:{cancel:function(a){return t.$emit("cancel")}}},[r("DropdownContent",{attrs:{characters:t.characters,"language-code":t.languageCode,type:"dialog"}})],1)},H=[],O=v(K,F,H,!1,null,null);const z=O.exports;function N(o,t,r,a){let c;const l=()=>{c==null||c(),c=void 0},_=(g,m,n,s)=>(g.addEventListener(m,n,s),()=>g.removeEventListener(m,n,s)),u=B(()=>G(o),g=>{l(),g&&(c=_(g,t,r,a))},{immediate:!0,flush:"post"}),i=()=>{u(),l()};return x()&&A(i),i}function G(o){const t=T(o);return(t==null?void 0:t.$el)??t}const W={"typo-and-paste":'<path d="M10.931 22C9.57512 22 8.37089 21.7948 7.31831 21.3845C6.28357 20.9563 5.47183 20.3498 4.8831 19.5648C4.29437 18.7798 4 17.8432 4 16.7549C4 15.5239 4.31221 14.5427 4.93662 13.8113C5.56103 13.062 6.33709 12.5446 7.26479 12.2592V12.1521C6.46197 11.7596 5.78404 11.2512 5.23099 10.6268C4.69577 9.98451 4.42817 9.11925 4.42817 8.03098C4.42817 6.94272 4.70469 6.02394 5.25775 5.27465C5.82864 4.52535 6.62254 3.96338 7.63944 3.58873C8.65634 3.19624 9.84272 3 11.1986 3C12.5188 3 13.6784 3.20516 14.6775 3.61549C15.6944 4.02582 16.4883 4.61455 17.0592 5.38169C17.63 6.13099 17.9155 7.01408 17.9155 8.03098V8.48591H15.5606V8.19155C15.5427 7.46009 15.3376 6.86244 14.9451 6.39859C14.5704 5.9169 14.0531 5.56901 13.393 5.35493C12.7507 5.123 12.0014 5.00704 11.1451 5.00704C10.5742 5.00704 10.03 5.06948 9.51268 5.19437C8.99531 5.30141 8.53146 5.47981 8.12113 5.72958C7.72864 5.97934 7.41643 6.30939 7.18451 6.71972C6.95258 7.11221 6.83662 7.5939 6.83662 8.16479C6.83662 8.89624 7.01502 9.50282 7.37183 9.98451C7.72864 10.4484 8.19249 10.7962 8.76338 11.0282C9.35211 11.2601 9.98545 11.3761 10.6634 11.3761H12.3225V13.3296H10.7169C10.0033 13.3296 9.31643 13.4188 8.65634 13.5972C7.99624 13.7756 7.46103 14.1056 7.0507 14.5873C6.65822 15.0512 6.46197 15.7202 6.46197 16.5944C6.46197 17.3972 6.6493 18.0484 7.02394 18.5479C7.41643 19.0474 7.96056 19.4131 8.65634 19.6451C9.36995 19.877 10.1906 19.993 11.1183 19.993C12.1174 19.993 12.9469 19.8681 13.607 19.6183C14.2671 19.3685 14.7577 18.985 15.0789 18.4676C15.4 17.9502 15.5606 17.3169 15.5606 16.5676V11.3761H20.1901V13.3563H17.9155V16.4873C17.9155 17.6648 17.6479 18.6639 17.1127 19.4845C16.5953 20.3052 15.8192 20.9296 14.7845 21.3577C13.7498 21.7859 12.4653 22 10.931 22Z"/>'},Z={"typo-and-paste":{get button(){return{icon:"typo-and-paste",label:"Special Characters"}},commands(){return()=>{window.panel.dialog.open({component:"k-typo-and-paste-dialog"})}},get name(){return"typo-and-paste"}}};function J(o){return o?function(){}:function(t){t.mixin({async mounted(){if(this.$options.name!=="k-header")return;const r=this.$children.find(c=>c.$options.name==="k-button-group");if(!r)return;const a=new t({render:c=>c(S)}).$mount();r.$el.prepend(a.$el),this.$forceUpdate()}})}}const D=window.panel.plugins.viewButtons!==void 0;window.panel.plugin("philippoehrlein/typo-and-paste",{icons:W,components:{"k-typo-and-paste-dialog":z},viewButtons:D?{"typo-and-paste":S}:void 0,writerMarks:Z,use:[function(){N(window,"keydown",o=>{!o.altKey||o.code!=="KeyT"||window.panel.dialog.open({component:"k-typo-and-paste-dialog"})})},J(D)]})})();

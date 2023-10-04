(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(o){if(o.ep)return;o.ep=!0;const e=s(o);fetch(o.href,e)}})();var N=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q={},ot={get exports(){return Q},set exports(p){Q=p}},H={},rt={get exports(){return H},set exports(p){H=p}},K={},it={get exports(){return K},set exports(p){K=p}};/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var W;function at(){return W||(W=1,function(p,E){(function(s,l){p.exports=l()})(N,function(){const s=new Map;return{set(o,e,n){s.has(o)||s.set(o,new Map);const a=s.get(o);if(!a.has(e)&&a.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(a.keys())[0]}.`);return}a.set(e,n)},get(o,e){return s.has(o)&&s.get(o).get(e)||null},remove(o,e){if(!s.has(o))return;const n=s.get(o);n.delete(e),n.size===0&&s.delete(o)}}})}(it)),K}var V={},lt={get exports(){return V},set exports(p){V=p}},B={},ct={get exports(){return B},set exports(p){B=p}};/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var J;function P(){return J||(J=1,function(p,E){(function(s,l){l(E)})(N,function(s){const e="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(i,r)=>`#${CSS.escape(r)}`)),t),a=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),y=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},g=t=>{if(!t)return 0;let{transitionDuration:i,transitionDelay:r}=window.getComputedStyle(t);const c=Number.parseFloat(i),m=Number.parseFloat(r);return!c&&!m?0:(i=i.split(",")[0],r=r.split(",")[0],(Number.parseFloat(i)+Number.parseFloat(r))*1e3)},_=t=>{t.dispatchEvent(new Event(e))},S=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),$=t=>S(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(n(t)):null,R=t=>{if(!S(t)||t.getClientRects().length===0)return!1;const i=getComputedStyle(t).getPropertyValue("visibility")==="visible",r=t.closest("details:not([open])");if(!r)return i;if(r!==t){const c=t.closest("summary");if(c&&c.parentNode!==r||c===null)return!1}return i},I=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",w=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const i=t.getRootNode();return i instanceof ShadowRoot?i:null}return t instanceof ShadowRoot?t:t.parentNode?w(t.parentNode):null},C=()=>{},x=t=>{t.offsetHeight},M=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,k=[],D=t=>{document.readyState==="loading"?(k.length||document.addEventListener("DOMContentLoaded",()=>{for(const i of k)i()}),k.push(t)):t()},O=()=>document.documentElement.dir==="rtl",d=t=>{D(()=>{const i=M();if(i){const r=t.NAME,c=i.fn[r];i.fn[r]=t.jQueryInterface,i.fn[r].Constructor=t,i.fn[r].noConflict=()=>(i.fn[r]=c,t.jQueryInterface)}})},u=(t,i=[],r=t)=>typeof t=="function"?t(...i):r,f=(t,i,r=!0)=>{if(!r){u(t);return}const c=5,m=g(i)+c;let h=!1;const v=({target:L})=>{L===i&&(h=!0,i.removeEventListener(e,v),u(t))};i.addEventListener(e,v),setTimeout(()=>{h||_(i)},m)},b=(t,i,r,c)=>{const m=t.length;let h=t.indexOf(i);return h===-1?!r&&c?t[m-1]:t[0]:(h+=r?1:-1,c&&(h=(h+m)%m),t[Math.max(0,Math.min(h,m-1))])};s.defineJQueryPlugin=d,s.execute=u,s.executeAfterTransition=f,s.findShadowRoot=w,s.getElement=$,s.getNextActiveElement=b,s.getTransitionDurationFromElement=g,s.getUID=y,s.getjQuery=M,s.isDisabled=I,s.isElement=S,s.isRTL=O,s.isVisible=R,s.noop=C,s.onDOMContentLoaded=D,s.parseSelector=n,s.reflow=x,s.toType=a,s.triggerTransitionEnd=_,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})})}(ct,B)),B}/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var G;function nt(){return G||(G=1,function(p,E){(function(s,l){p.exports=l(P())})(N,function(s){const l=/[^.]*(?=\..*)\.|.*/,o=/\..*/,e=/::\d+$/,n={};let a=1;const y={mouseenter:"mouseover",mouseleave:"mouseout"},g=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function _(d,u){return u&&`${u}::${a++}`||d.uidEvent||a++}function S(d){const u=_(d);return d.uidEvent=u,n[u]=n[u]||{},n[u]}function $(d,u){return function f(b){return O(b,{delegateTarget:d}),f.oneOff&&D.off(d,b.type,u),u.apply(d,[b])}}function R(d,u,f){return function b(t){const i=d.querySelectorAll(u);for(let{target:r}=t;r&&r!==this;r=r.parentNode)for(const c of i)if(c===r)return O(t,{delegateTarget:r}),b.oneOff&&D.off(d,t.type,u,f),f.apply(r,[t])}}function I(d,u,f=null){return Object.values(d).find(b=>b.callable===u&&b.delegationSelector===f)}function w(d,u,f){const b=typeof u=="string",t=b?f:u||f;let i=k(d);return g.has(i)||(i=d),[b,t,i]}function C(d,u,f,b,t){if(typeof u!="string"||!d)return;let[i,r,c]=w(u,f,b);u in y&&(r=(st=>function(q){if(!q.relatedTarget||q.relatedTarget!==q.delegateTarget&&!q.delegateTarget.contains(q.relatedTarget))return st.call(this,q)})(r));const m=S(d),h=m[c]||(m[c]={}),v=I(h,r,i?f:null);if(v){v.oneOff=v.oneOff&&t;return}const L=_(r,u.replace(l,"")),A=i?R(d,f,r):$(d,r);A.delegationSelector=i?f:null,A.callable=r,A.oneOff=t,A.uidEvent=L,h[L]=A,d.addEventListener(c,A,i)}function x(d,u,f,b,t){const i=I(u[f],b,t);i&&(d.removeEventListener(f,i,!!t),delete u[f][i.uidEvent])}function M(d,u,f,b){const t=u[f]||{};for(const[i,r]of Object.entries(t))i.includes(b)&&x(d,u,f,r.callable,r.delegationSelector)}function k(d){return d=d.replace(o,""),y[d]||d}const D={on(d,u,f,b){C(d,u,f,b,!1)},one(d,u,f,b){C(d,u,f,b,!0)},off(d,u,f,b){if(typeof u!="string"||!d)return;const[t,i,r]=w(u,f,b),c=r!==u,m=S(d),h=m[r]||{},v=u.startsWith(".");if(typeof i<"u"){if(!Object.keys(h).length)return;x(d,m,r,i,t?f:null);return}if(v)for(const L of Object.keys(m))M(d,m,L,u.slice(1));for(const[L,A]of Object.entries(h)){const T=L.replace(e,"");(!c||u.includes(T))&&x(d,m,r,A.callable,A.delegationSelector)}},trigger(d,u,f){if(typeof u!="string"||!d)return null;const b=s.getjQuery(),t=k(u),i=u!==t;let r=null,c=!0,m=!0,h=!1;i&&b&&(r=b.Event(u,f),b(d).trigger(r),c=!r.isPropagationStopped(),m=!r.isImmediatePropagationStopped(),h=r.isDefaultPrevented());const v=O(new Event(u,{bubbles:c,cancelable:!0}),f);return h&&v.preventDefault(),m&&d.dispatchEvent(v),v.defaultPrevented&&r&&r.preventDefault(),v}};function O(d,u={}){for(const[f,b]of Object.entries(u))try{d[f]=b}catch{Object.defineProperty(d,f,{configurable:!0,get(){return b}})}return d}return D})}(lt)),V}var U={},ut={get exports(){return U},set exports(p){U=p}},j={},dt={get exports(){return j},set exports(p){j=p}};/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var X;function ft(){return X||(X=1,function(p,E){(function(s,l){p.exports=l()})(N,function(){function s(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function l(e){return e.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(e,n,a){e.setAttribute(`data-bs-${l(n)}`,a)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${l(n)}`)},getDataAttributes(e){if(!e)return{};const n={},a=Object.keys(e.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(const y of a){let g=y.replace(/^bs/,"");g=g.charAt(0).toLowerCase()+g.slice(1,g.length),n[g]=s(e.dataset[y])}return n},getDataAttribute(e,n){return s(e.getAttribute(`data-bs-${l(n)}`))}}})}(dt)),j}/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Z;function pt(){return Z||(Z=1,function(p,E){(function(s,l){p.exports=l(ft(),P())})(N,function(s,l){class o{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,a){const y=l.isElement(a)?s.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...l.isElement(a)?s.getDataAttributes(a):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,a=this.constructor.DefaultType){for(const[y,g]of Object.entries(a)){const _=n[y],S=l.isElement(_)?"element":l.toType(_);if(!new RegExp(g).test(S))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${S}" but expected type "${g}".`)}}}return o})}(ut)),U}/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var tt;function gt(){return tt||(tt=1,function(p,E){(function(s,l){p.exports=l(at(),nt(),pt(),P())})(N,function(s,l,o,e){const n="5.3.2";class a extends o{constructor(g,_){super(),g=e.getElement(g),g&&(this._element=g,this._config=this._getConfig(_),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),l.off(this._element,this.constructor.EVENT_KEY);for(const g of Object.getOwnPropertyNames(this))this[g]=null}_queueCallback(g,_,S=!0){e.executeAfterTransition(g,_,S)}_getConfig(g){return g=this._mergeConfigObj(g,this._element),g=this._configAfterMerge(g),this._typeCheckConfig(g),g}static getInstance(g){return s.get(e.getElement(g),this.DATA_KEY)}static getOrCreateInstance(g,_={}){return this.getInstance(g)||new this(g,typeof _=="object"?_:null)}static get VERSION(){return n}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(g){return`${g}${this.EVENT_KEY}`}}return a})}(rt)),H}var Y={},mt={get exports(){return Y},set exports(p){Y=p}};/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var et;function ht(){return et||(et=1,function(p,E){(function(s,l){p.exports=l(P())})(N,function(s){const l=e=>{let n=e.getAttribute("data-bs-target");if(!n||n==="#"){let a=e.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),n=a&&a!=="#"?s.parseSelector(a.trim()):null}return n},o={find(e,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,e))},findOne(e,n=document.documentElement){return Element.prototype.querySelector.call(n,e)},children(e,n){return[].concat(...e.children).filter(a=>a.matches(n))},parents(e,n){const a=[];let y=e.parentNode.closest(n);for(;y;)a.push(y),y=y.parentNode.closest(n);return a},prev(e,n){let a=e.previousElementSibling;for(;a;){if(a.matches(n))return[a];a=a.previousElementSibling}return[]},next(e,n){let a=e.nextElementSibling;for(;a;){if(a.matches(n))return[a];a=a.nextElementSibling}return[]},focusableChildren(e){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(n,e).filter(a=>!s.isDisabled(a)&&s.isVisible(a))},getSelectorFromElement(e){const n=l(e);return n&&o.findOne(n)?n:null},getElementFromSelector(e){const n=l(e);return n?o.findOne(n):null},getMultipleElementsFromSelector(e){const n=l(e);return n?o.find(n):[]}};return o})}(mt)),Y}/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(p,E){(function(s,l){p.exports=l(gt(),nt(),ht(),P())})(N,function(s,l,o,e){const n="collapse",y=".bs.collapse",g=".data-api",_=`show${y}`,S=`shown${y}`,$=`hide${y}`,R=`hidden${y}`,I=`click${y}${g}`,w="show",C="collapse",x="collapsing",M="collapsed",k=`:scope .${C} .${C}`,D="collapse-horizontal",O="width",d="height",u=".collapse.show, .collapse.collapsing",f='[data-bs-toggle="collapse"]',b={parent:null,toggle:!0},t={parent:"(null|element)",toggle:"boolean"};class i extends s{constructor(c,m){super(c,m),this._isTransitioning=!1,this._triggerArray=[];const h=o.find(f);for(const v of h){const L=o.getSelectorFromElement(v),A=o.find(L).filter(T=>T===this._element);L!==null&&A.length&&this._triggerArray.push(v)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return b}static get DefaultType(){return t}static get NAME(){return n}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(u).filter(T=>T!==this._element).map(T=>i.getOrCreateInstance(T,{toggle:!1}))),c.length&&c[0]._isTransitioning||l.trigger(this._element,_).defaultPrevented)return;for(const T of c)T.hide();const h=this._getDimension();this._element.classList.remove(C),this._element.classList.add(x),this._element.style[h]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const v=()=>{this._isTransitioning=!1,this._element.classList.remove(x),this._element.classList.add(C,w),this._element.style[h]="",l.trigger(this._element,S)},A=`scroll${h[0].toUpperCase()+h.slice(1)}`;this._queueCallback(v,this._element,!0),this._element.style[h]=`${this._element[A]}px`}hide(){if(this._isTransitioning||!this._isShown()||l.trigger(this._element,$).defaultPrevented)return;const m=this._getDimension();this._element.style[m]=`${this._element.getBoundingClientRect()[m]}px`,e.reflow(this._element),this._element.classList.add(x),this._element.classList.remove(C,w);for(const v of this._triggerArray){const L=o.getElementFromSelector(v);L&&!this._isShown(L)&&this._addAriaAndCollapsedClass([v],!1)}this._isTransitioning=!0;const h=()=>{this._isTransitioning=!1,this._element.classList.remove(x),this._element.classList.add(C),l.trigger(this._element,R)};this._element.style[m]="",this._queueCallback(h,this._element,!0)}_isShown(c=this._element){return c.classList.contains(w)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=e.getElement(c.parent),c}_getDimension(){return this._element.classList.contains(D)?O:d}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(f);for(const m of c){const h=o.getElementFromSelector(m);h&&this._addAriaAndCollapsedClass([m],this._isShown(h))}}_getFirstLevelChildren(c){const m=o.find(k,this._config.parent);return o.find(c,this._config.parent).filter(h=>!m.includes(h))}_addAriaAndCollapsedClass(c,m){if(c.length)for(const h of c)h.classList.toggle(M,!m),h.setAttribute("aria-expanded",m)}static jQueryInterface(c){const m={};return typeof c=="string"&&/show|hide/.test(c)&&(m.toggle=!1),this.each(function(){const h=i.getOrCreateInstance(this,m);if(typeof c=="string"){if(typeof h[c]>"u")throw new TypeError(`No method named "${c}"`);h[c]()}})}}return l.on(document,I,f,function(r){(r.target.tagName==="A"||r.delegateTarget&&r.delegateTarget.tagName==="A")&&r.preventDefault();for(const c of o.getMultipleElementsFromSelector(this))i.getOrCreateInstance(c,{toggle:!1}).toggle()}),e.defineJQueryPlugin(i),i})})(ot);const bt=`<div
  class="d-flex align-items-start justify-content-between mb-8 pt-24 px-32"
  >
  <!-- 核取方塊 -->
  <input
    type="checkbox"
    name="taskFinshed"
    class="me-16 block-check"
  />
  <!-- block-header : 標題、星星、edit、deadline、file -->
  <div
    class="block-header w-100 d-flex flex-wrap justify-content-between align-items-center"
  >
    <div
      class="w-100 d-flex justify-content-between align-items-center"
    >
      <div class="d-flex align-items-center text-truncate">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Type Something Here..."
            class="block-title me-16 mb-8 cursor-pointer"
            readonly="readonly"
          />
        </div>
      </div>
      <div class="d-flex align-items-center">
        <span
          class="starIcon material-symbols-outlined fill text-helper-300 me-32 cursor-pointer"
        >
          star
        </span>
        <span
          class="editIcon material-symbols-outlined fill text-helper-300 cursor-pointer"
        >
          edit
        </span>
      </div>
    </div>
    <div>
      <ul>
        <li>
          <span class="material-symbols-outlined me-8 title-icon">
            calendar_month
          </span>
          <span
            class="material-symbols-outlined me-8 title-icon cursor-pointer"
          >
            draft
          </span>
        </li>
      </ul>
    </div>
  </div>
  </div>
  <!-- block-body--primary : comment -->
  <div id="" class="block-body--primary d-none px-32">
  <p class="p-12">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Laudantium corrupti temporibus cum? Odio animi doloribus ratione
    at ipsam voluptates dolorum obcaecati voluptatibus,
    consequuntur, quidem, facere inventore sunt minima alias.
    Provident.
  </p>
  </div>

  <!-- block-body--secondary : edit block  -->
  <div class="block-body--secondary d-none">
  <div class="block-body">
    <!-- Input : deadline -->
    <div class="mb-20">
      <div class="d-flex align-items-center body-title mb-8">
        <span class="material-symbols-outlined me-8 title-icon">
          calendar_month
        </span>
        <label for="">Deadline</label>
      </div>
      <div class="body-content d-flex flex-column flex-sm-row">
        <input
          id=""
          type="text"
          placeholder="yy/mm/dd"
          class="input-text text-dark me-8 mb-8 mb-sm-0"
        />
        <input
          type="text"
          placeholder="hh:mm"
          class="input-text text-dark"
        />
      </div>
    </div>

    <!-- taskBlock : file  -->
    <div class="mb-20">
      <div class="body-title d-flex align-items-center mb-8">
        <span class="material-symbols-outlined me-8 title-icon">
          draft
        </span>
        <label for="">File</label>
      </div>
      <div class="body-content">
        <div class="input-file position-relative">
          <span
            class="material-symbols-outlined transform-center-center"
          >
            add
          </span>
        </div>
      </div>
    </div>

    <!-- taskBlock : comment -->
    <div class="mb-20">
      <div class="d-flex align-items-center body-title mb-8">
        <span class="material-symbols-outlined me-8"> sms </span>
        <!-- 這裡試著新增UUID，並對應到下方textarea -->
        <label for="theIDOfThatTask">Comment</label>
      </div>
      <div class="body-content">
        <textarea
          name=""
          id="theIDOfThatTask"
          cols="30"
          rows="10"
          placeholder="Type your memo here..."
          class="w-100 input-text text-dark"
        ></textarea>
      </div>
    </div>
  </div>
  <div class="block-footer d-flex">
    <div class="w-50">
      <button
        type="button"
        class="footer-button footer-button--cancel d-flex align-items-center justify-content-center text-third bg-light py-16"
      >
        <!-- icon -->
        <span class="material-symbols-outlined me-16"> close </span>
        <!-- text -->
        <span class="footer-button-text--cancel">Cancel</span>
      </button>
    </div>
    <div class="w-50">
      <button
        type="button"
        class="footer-button footer-button--save d-flex align-items-center justify-content-center text-light bg-primary py-16"
      >
        <!-- icon -->
        <span class="material-symbols-outlined me-16"> save </span>
        <!-- text -->
        <span class="footer-button-text--save">Save Task</span>
      </button>
    </div>
  </div>
</div>`,F=document.querySelector("#addTaskButton"),z=document.querySelector("#mainTaskBlock"),yt=document.querySelector("#editBlockSaveButton"),Et=document.querySelector("#editBlockCancelButton"),vt=document.querySelector("#tasksSection");document.addEventListener("DOMContentLoaded",function(){F.addEventListener("click",function(){F.classList.add("d-none"),z.classList.remove("d-none")}),yt.addEventListener("click",function(){const p=document.createElement("li");p.className="mt-8 taskBlock",console.log(p),p.innerHTML=bt,vt.appendChild(p),z.classList.add("d-none"),F.classList.remove("d-none")}),Et.addEventListener("click",function(){F.classList.remove("d-none"),z.classList.add("d-none")})});document.addEventListener("DOMContentLoaded",function(){tasksSection.addEventListener("click",function(p){const E=p.target;console.log("目前target : ",E.className);let s=E;for(;s&&!s.classList.contains("taskBlock");)s=s.parentNode;const l=s;if(E.classList.contains("editIcon")){const o=E;l.querySelector(".block-body--secondary").classList.toggle("d-none"),o.classList.toggle("text-helper-300"),o.classList.toggle("text-primary")}else if(E.classList.contains("footer-button--cancel")||E.classList.contains("footer-button-text--cancel")){const o=l.querySelector(".editIcon");l.querySelector(".block-body--secondary").classList.add("d-none"),o.classList.toggle("text-helper-300"),o.classList.toggle("text-primary")}else if(E.classList.contains("footer-button--save")||E.classList.contains("footer-button-text--save")){const o=l.querySelector(".editIcon"),e=l.querySelector(".block-body--secondary");//! 資訊更新（尚未做）
e.classList.add("d-none"),o.classList.toggle("text-helper-300"),o.classList.toggle("text-primary")}else if(E.classList.contains("block-title"))l.querySelector(".block-body--primary").classList.toggle("d-none");else if(E.classList.contains("starIcon")){const o=l.querySelector(".starIcon");o.classList.toggle("text-helper-300"),o.classList.toggle("text-fourth")}else if(E.classList.contains("block-check")){const o=l.querySelector(".block-title"),e=l.querySelector(".editIcon"),n=l.querySelector(".starIcon");o.classList.toggle("line-through"),l.classList.toggle("bg-helper-300"),e.classList.toggle("d-none"),n.classList.toggle("d-none")}})});console.log("Hello world!");

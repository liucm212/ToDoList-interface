(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))f(u);new MutationObserver(u=>{for(const e of u)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&f(n)}).observe(document,{childList:!0,subtree:!0});function s(u){const e={};return u.integrity&&(e.integrity=u.integrity),u.referrerPolicy&&(e.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?e.credentials="include":u.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function f(u){if(u.ep)return;u.ep=!0;const e=s(u);fetch(u.href,e)}})();var O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Q={},ot={get exports(){return Q},set exports(d){Q=d}},H={},it={get exports(){return H},set exports(d){H=d}},K={},at={get exports(){return K},set exports(d){K=d}};/*!
  * Bootstrap data.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var W;function lt(){return W||(W=1,function(d,E){(function(s,f){d.exports=f()})(O,function(){const s=new Map;return{set(u,e,n){s.has(u)||s.set(u,new Map);const i=s.get(u);if(!i.has(e)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(e,n)},get(u,e){return s.has(u)&&s.get(u).get(e)||null},remove(u,e){if(!s.has(u))return;const n=s.get(u);n.delete(e),n.size===0&&s.delete(u)}}})}(at)),K}var V={},ct={get exports(){return V},set exports(d){V=d}},B={},ut={get exports(){return B},set exports(d){B=d}};/*!
  * Bootstrap index.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var J;function P(){return J||(J=1,function(d,E){(function(s,f){f(E)})(O,function(s){const e="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(o,r)=>`#${CSS.escape(r)}`)),t),i=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),b=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},p=t=>{if(!t)return 0;let{transitionDuration:o,transitionDelay:r}=window.getComputedStyle(t);const a=Number.parseFloat(o),m=Number.parseFloat(r);return!a&&!m?0:(o=o.split(",")[0],r=r.split(",")[0],(Number.parseFloat(o)+Number.parseFloat(r))*1e3)},_=t=>{t.dispatchEvent(new Event(e))},L=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),$=t=>L(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(n(t)):null,R=t=>{if(!L(t)||t.getClientRects().length===0)return!1;const o=getComputedStyle(t).getPropertyValue("visibility")==="visible",r=t.closest("details:not([open])");if(!r)return o;if(r!==t){const a=t.closest("summary");if(a&&a.parentNode!==r||a===null)return!1}return o},I=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",w=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const o=t.getRootNode();return o instanceof ShadowRoot?o:null}return t instanceof ShadowRoot?t:t.parentNode?w(t.parentNode):null},C=()=>{},T=t=>{t.offsetHeight},M=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,D=[],N=t=>{document.readyState==="loading"?(D.length||document.addEventListener("DOMContentLoaded",()=>{for(const o of D)o()}),D.push(t)):t()},k=()=>document.documentElement.dir==="rtl",c=t=>{N(()=>{const o=M();if(o){const r=t.NAME,a=o.fn[r];o.fn[r]=t.jQueryInterface,o.fn[r].Constructor=t,o.fn[r].noConflict=()=>(o.fn[r]=a,t.jQueryInterface)}})},l=(t,o=[],r=t)=>typeof t=="function"?t(...o):r,g=(t,o,r=!0)=>{if(!r){l(t);return}const a=5,m=p(o)+a;let h=!1;const v=({target:S})=>{S===o&&(h=!0,o.removeEventListener(e,v),l(t))};o.addEventListener(e,v),setTimeout(()=>{h||_(o)},m)},y=(t,o,r,a)=>{const m=t.length;let h=t.indexOf(o);return h===-1?!r&&a?t[m-1]:t[0]:(h+=r?1:-1,a&&(h=(h+m)%m),t[Math.max(0,Math.min(h,m-1))])};s.defineJQueryPlugin=c,s.execute=l,s.executeAfterTransition=g,s.findShadowRoot=w,s.getElement=$,s.getNextActiveElement=y,s.getTransitionDurationFromElement=p,s.getUID=b,s.getjQuery=M,s.isDisabled=I,s.isElement=L,s.isRTL=k,s.isVisible=R,s.noop=C,s.onDOMContentLoaded=N,s.parseSelector=n,s.reflow=T,s.toType=i,s.triggerTransitionEnd=_,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})})}(ut,B)),B}/*!
  * Bootstrap event-handler.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var G;function nt(){return G||(G=1,function(d,E){(function(s,f){d.exports=f(P())})(O,function(s){const f=/[^.]*(?=\..*)\.|.*/,u=/\..*/,e=/::\d+$/,n={};let i=1;const b={mouseenter:"mouseover",mouseleave:"mouseout"},p=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function _(c,l){return l&&`${l}::${i++}`||c.uidEvent||i++}function L(c){const l=_(c);return c.uidEvent=l,n[l]=n[l]||{},n[l]}function $(c,l){return function g(y){return k(y,{delegateTarget:c}),g.oneOff&&N.off(c,y.type,l),l.apply(c,[y])}}function R(c,l,g){return function y(t){const o=c.querySelectorAll(l);for(let{target:r}=t;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return k(t,{delegateTarget:r}),y.oneOff&&N.off(c,t.type,l,g),g.apply(r,[t])}}function I(c,l,g=null){return Object.values(c).find(y=>y.callable===l&&y.delegationSelector===g)}function w(c,l,g){const y=typeof l=="string",t=y?g:l||g;let o=D(c);return p.has(o)||(o=c),[y,t,o]}function C(c,l,g,y,t){if(typeof l!="string"||!c)return;let[o,r,a]=w(l,g,y);l in b&&(r=(rt=>function(q){if(!q.relatedTarget||q.relatedTarget!==q.delegateTarget&&!q.delegateTarget.contains(q.relatedTarget))return rt.call(this,q)})(r));const m=L(c),h=m[a]||(m[a]={}),v=I(h,r,o?g:null);if(v){v.oneOff=v.oneOff&&t;return}const S=_(r,l.replace(f,"")),A=o?R(c,g,r):$(c,r);A.delegationSelector=o?g:null,A.callable=r,A.oneOff=t,A.uidEvent=S,h[S]=A,c.addEventListener(a,A,o)}function T(c,l,g,y,t){const o=I(l[g],y,t);o&&(c.removeEventListener(g,o,!!t),delete l[g][o.uidEvent])}function M(c,l,g,y){const t=l[g]||{};for(const[o,r]of Object.entries(t))o.includes(y)&&T(c,l,g,r.callable,r.delegationSelector)}function D(c){return c=c.replace(u,""),b[c]||c}const N={on(c,l,g,y){C(c,l,g,y,!1)},one(c,l,g,y){C(c,l,g,y,!0)},off(c,l,g,y){if(typeof l!="string"||!c)return;const[t,o,r]=w(l,g,y),a=r!==l,m=L(c),h=m[r]||{},v=l.startsWith(".");if(typeof o<"u"){if(!Object.keys(h).length)return;T(c,m,r,o,t?g:null);return}if(v)for(const S of Object.keys(m))M(c,m,S,l.slice(1));for(const[S,A]of Object.entries(h)){const x=S.replace(e,"");(!a||l.includes(x))&&T(c,m,r,A.callable,A.delegationSelector)}},trigger(c,l,g){if(typeof l!="string"||!c)return null;const y=s.getjQuery(),t=D(l),o=l!==t;let r=null,a=!0,m=!0,h=!1;o&&y&&(r=y.Event(l,g),y(c).trigger(r),a=!r.isPropagationStopped(),m=!r.isImmediatePropagationStopped(),h=r.isDefaultPrevented());const v=k(new Event(l,{bubbles:a,cancelable:!0}),g);return h&&v.preventDefault(),m&&c.dispatchEvent(v),v.defaultPrevented&&r&&r.preventDefault(),v}};function k(c,l={}){for(const[g,y]of Object.entries(l))try{c[g]=y}catch{Object.defineProperty(c,g,{configurable:!0,get(){return y}})}return c}return N})}(ct)),V}var U={},dt={get exports(){return U},set exports(d){U=d}},j={},ft={get exports(){return j},set exports(d){j=d}};/*!
  * Bootstrap manipulator.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var X;function pt(){return X||(X=1,function(d,E){(function(s,f){d.exports=f()})(O,function(){function s(e){if(e==="true")return!0;if(e==="false")return!1;if(e===Number(e).toString())return Number(e);if(e===""||e==="null")return null;if(typeof e!="string")return e;try{return JSON.parse(decodeURIComponent(e))}catch{return e}}function f(e){return e.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(e,n,i){e.setAttribute(`data-bs-${f(n)}`,i)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${f(n)}`)},getDataAttributes(e){if(!e)return{};const n={},i=Object.keys(e.dataset).filter(b=>b.startsWith("bs")&&!b.startsWith("bsConfig"));for(const b of i){let p=b.replace(/^bs/,"");p=p.charAt(0).toLowerCase()+p.slice(1,p.length),n[p]=s(e.dataset[b])}return n},getDataAttribute(e,n){return s(e.getAttribute(`data-bs-${f(n)}`))}}})}(ft)),j}/*!
  * Bootstrap config.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Z;function gt(){return Z||(Z=1,function(d,E){(function(s,f){d.exports=f(pt(),P())})(O,function(s,f){class u{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,i){const b=f.isElement(i)?s.getDataAttribute(i,"config"):{};return{...this.constructor.Default,...typeof b=="object"?b:{},...f.isElement(i)?s.getDataAttributes(i):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,i=this.constructor.DefaultType){for(const[b,p]of Object.entries(i)){const _=n[b],L=f.isElement(_)?"element":f.toType(_);if(!new RegExp(p).test(L))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${b}" provided type "${L}" but expected type "${p}".`)}}}return u})}(dt)),U}/*!
  * Bootstrap base-component.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var tt;function mt(){return tt||(tt=1,function(d,E){(function(s,f){d.exports=f(lt(),nt(),gt(),P())})(O,function(s,f,u,e){const n="5.3.2";class i extends u{constructor(p,_){super(),p=e.getElement(p),p&&(this._element=p,this._config=this._getConfig(_),s.set(this._element,this.constructor.DATA_KEY,this))}dispose(){s.remove(this._element,this.constructor.DATA_KEY),f.off(this._element,this.constructor.EVENT_KEY);for(const p of Object.getOwnPropertyNames(this))this[p]=null}_queueCallback(p,_,L=!0){e.executeAfterTransition(p,_,L)}_getConfig(p){return p=this._mergeConfigObj(p,this._element),p=this._configAfterMerge(p),this._typeCheckConfig(p),p}static getInstance(p){return s.get(e.getElement(p),this.DATA_KEY)}static getOrCreateInstance(p,_={}){return this.getInstance(p)||new this(p,typeof _=="object"?_:null)}static get VERSION(){return n}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(p){return`${p}${this.EVENT_KEY}`}}return i})}(it)),H}var Y={},ht={get exports(){return Y},set exports(d){Y=d}};/*!
  * Bootstrap selector-engine.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var et;function yt(){return et||(et=1,function(d,E){(function(s,f){d.exports=f(P())})(O,function(s){const f=e=>{let n=e.getAttribute("data-bs-target");if(!n||n==="#"){let i=e.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),n=i&&i!=="#"?s.parseSelector(i.trim()):null}return n},u={find(e,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,e))},findOne(e,n=document.documentElement){return Element.prototype.querySelector.call(n,e)},children(e,n){return[].concat(...e.children).filter(i=>i.matches(n))},parents(e,n){const i=[];let b=e.parentNode.closest(n);for(;b;)i.push(b),b=b.parentNode.closest(n);return i},prev(e,n){let i=e.previousElementSibling;for(;i;){if(i.matches(n))return[i];i=i.previousElementSibling}return[]},next(e,n){let i=e.nextElementSibling;for(;i;){if(i.matches(n))return[i];i=i.nextElementSibling}return[]},focusableChildren(e){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(i=>`${i}:not([tabindex^="-"])`).join(",");return this.find(n,e).filter(i=>!s.isDisabled(i)&&s.isVisible(i))},getSelectorFromElement(e){const n=f(e);return n&&u.findOne(n)?n:null},getElementFromSelector(e){const n=f(e);return n?u.findOne(n):null},getMultipleElementsFromSelector(e){const n=f(e);return n?u.find(n):[]}};return u})}(ht)),Y}/*!
  * Bootstrap collapse.js v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(d,E){(function(s,f){d.exports=f(mt(),nt(),yt(),P())})(O,function(s,f,u,e){const n="collapse",b=".bs.collapse",p=".data-api",_=`show${b}`,L=`shown${b}`,$=`hide${b}`,R=`hidden${b}`,I=`click${b}${p}`,w="show",C="collapse",T="collapsing",M="collapsed",D=`:scope .${C} .${C}`,N="collapse-horizontal",k="width",c="height",l=".collapse.show, .collapse.collapsing",g='[data-bs-toggle="collapse"]',y={parent:null,toggle:!0},t={parent:"(null|element)",toggle:"boolean"};class o extends s{constructor(a,m){super(a,m),this._isTransitioning=!1,this._triggerArray=[];const h=u.find(g);for(const v of h){const S=u.getSelectorFromElement(v),A=u.find(S).filter(x=>x===this._element);S!==null&&A.length&&this._triggerArray.push(v)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return y}static get DefaultType(){return t}static get NAME(){return n}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(l).filter(x=>x!==this._element).map(x=>o.getOrCreateInstance(x,{toggle:!1}))),a.length&&a[0]._isTransitioning||f.trigger(this._element,_).defaultPrevented)return;for(const x of a)x.hide();const h=this._getDimension();this._element.classList.remove(C),this._element.classList.add(T),this._element.style[h]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const v=()=>{this._isTransitioning=!1,this._element.classList.remove(T),this._element.classList.add(C,w),this._element.style[h]="",f.trigger(this._element,L)},A=`scroll${h[0].toUpperCase()+h.slice(1)}`;this._queueCallback(v,this._element,!0),this._element.style[h]=`${this._element[A]}px`}hide(){if(this._isTransitioning||!this._isShown()||f.trigger(this._element,$).defaultPrevented)return;const m=this._getDimension();this._element.style[m]=`${this._element.getBoundingClientRect()[m]}px`,e.reflow(this._element),this._element.classList.add(T),this._element.classList.remove(C,w);for(const v of this._triggerArray){const S=u.getElementFromSelector(v);S&&!this._isShown(S)&&this._addAriaAndCollapsedClass([v],!1)}this._isTransitioning=!0;const h=()=>{this._isTransitioning=!1,this._element.classList.remove(T),this._element.classList.add(C),f.trigger(this._element,R)};this._element.style[m]="",this._queueCallback(h,this._element,!0)}_isShown(a=this._element){return a.classList.contains(w)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=e.getElement(a.parent),a}_getDimension(){return this._element.classList.contains(N)?k:c}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(g);for(const m of a){const h=u.getElementFromSelector(m);h&&this._addAriaAndCollapsedClass([m],this._isShown(h))}}_getFirstLevelChildren(a){const m=u.find(D,this._config.parent);return u.find(a,this._config.parent).filter(h=>!m.includes(h))}_addAriaAndCollapsedClass(a,m){if(a.length)for(const h of a)h.classList.toggle(M,!m),h.setAttribute("aria-expanded",m)}static jQueryInterface(a){const m={};return typeof a=="string"&&/show|hide/.test(a)&&(m.toggle=!1),this.each(function(){const h=o.getOrCreateInstance(this,m);if(typeof a=="string"){if(typeof h[a]>"u")throw new TypeError(`No method named "${a}"`);h[a]()}})}}return f.on(document,I,g,function(r){(r.target.tagName==="A"||r.delegateTarget&&r.delegateTarget.tagName==="A")&&r.preventDefault();for(const a of u.getMultipleElementsFromSelector(this))o.getOrCreateInstance(a,{toggle:!1}).toggle()}),e.defineJQueryPlugin(o),o})})(ot);const bt=`<div
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
        type="submit"
        class="footer-button footer-button--cancel d-flex align-items-center justify-content-center text-third bg-light py-16"
      >
        <!-- icon -->
        <span class="material-symbols-outlined me-16"> close </span>
        <!-- text -->
        <span>Cancel</span>
      </button>
    </div>
    <div class="w-50">
      <button
        type="submit"
        class="footer-button footer-button--save d-flex align-items-center justify-content-center text-light bg-primary py-16"
      >
        <!-- icon -->
        <span class="material-symbols-outlined me-16"> add </span>
        <!-- text -->
        <span>Add Task</span>
      </button>
    </div>
  </div>
</div>`,F=document.querySelector("#addTaskButton"),z=document.querySelector("#mainTaskBlock"),Et=document.querySelector("#editBlockSaveButton"),vt=document.querySelector("#editBlockCancelButton"),_t=document.querySelector("#tasksSection");document.addEventListener("DOMContentLoaded",function(){F.addEventListener("click",function(){F.classList.add("d-none"),z.classList.remove("d-none")}),Et.addEventListener("click",function(){const d=document.createElement("li");d.className="mt-8 taskBlock",console.log(d),d.innerHTML=bt,_t.appendChild(d),z.classList.add("d-none"),F.classList.remove("d-none")}),vt.addEventListener("click",function(){F.classList.remove("d-none"),z.classList.add("d-none")})});const st=document.querySelector("#tasksSection");let St=st.querySelectorAll(".taskBlock");document.addEventListener("DOMContentLoaded",function(){St.forEach(function(d){const E=d.querySelector(".editIcon"),s=d.querySelector(".starIcon"),f=d.querySelector(".block-title"),u=d.querySelector(".block-body--primary"),e=d.querySelector(".block-check"),n=d.querySelector(".block-body--secondary"),i=d.querySelector(".footer-button--cancel"),b=d.querySelector(".footer-button--save");st.addEventListener("click",function(p){console.log(p.target),p.target==E?(n.classList.toggle("d-none"),E.classList.toggle("text-helper-300"),E.classList.toggle("text-primary")):p.target==i||p.target==b?(n.classList.add("d-none"),E.classList.toggle("text-helper-300"),E.classList.toggle("text-primary")):p.target==f?u.classList.toggle("d-none"):p.target==s?(s.classList.toggle("text-helper-300"),s.classList.toggle("text-fourth")):p.target==e&&(f.classList.toggle("line-through"),d.classList.toggle("bg-helper-300"),E.classList.toggle("d-none"),s.classList.toggle("d-none"))})})});console.log("Hello world!");

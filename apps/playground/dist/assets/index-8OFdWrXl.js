(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();var u=class extends HTMLButtonElement{constructor(){super()}static get observedAttributes(){return["disabled","_type","style"]}attributeChangedCallback(i,s,r){i==="disabled"&&(r==="true"?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),i==="_type"&&(r==="toggle"&&(this.setAttribute("_","on click if @aria-pressed equals 'false' set @aria-pressed to 'true' else set @aria-pressed to 'false'"),this.setAttribute("aria-pressed","false")),r==="menu"&&this.setAttribute("aria-haspopup","menu"))}};function a(){window.customElements.define("ariabones-button",u,{extends:"button"})}a();

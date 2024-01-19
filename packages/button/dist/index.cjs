"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  registerButton: () => registerButton
});
module.exports = __toCommonJS(src_exports);
var Button = class extends HTMLButtonElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ["disabled", "_type", "style"];
  }
  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === "disabled") {
      if (newValue === "true") {
        this.setAttribute("aria-disabled", "true");
      } else {
        this.removeAttribute("aria-disabled");
      }
    }
    if (name === "_type") {
      if (newValue === "toggle") {
        this.setAttribute("_", "on click if @aria-pressed equals 'false' set @aria-pressed to 'true' else set @aria-pressed to 'false'");
        this.setAttribute("aria-pressed", "false");
      }
      if (newValue === "menu") {
        this.setAttribute("aria-haspopup", "menu");
      }
    }
  }
};
function registerButton() {
  window.customElements.define("ariabones-button", Button, { extends: "button" });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  registerButton
});

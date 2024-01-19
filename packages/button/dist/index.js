// src/index.ts
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
export {
  registerButton
};

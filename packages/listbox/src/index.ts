// specification
// https://www.w3.org/WAI/ARIA/apg/patterns/listbox/
class Listbox extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
      <div role="listbox" aria-label="List one">
        <slot name="selected"></slot>
      </div>
      <div role="listbox" aria-label="List two">
        <slot name="unselected"></slot>
      </div>
    `;
    }
  }

  static get observedAttributes(): string[] {
    return ["disabled", "data-type"]
  }

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    newValue: string | null,
  ): void {
    if (name === "disabled") {
      if (newValue === "true") {
        this.setAttribute("aria-disabled", "true")
      } else {
        this.removeAttribute("aria-disabled")
      }
    }
  }
}

export function registerListbox(): void {
  window.customElements.define("ariabones-listbox", Listbox)
}

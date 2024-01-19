// specification
// https://www.w3.org/WAI/ARIA/apg/patterns/button/
class Button extends HTMLButtonElement {
  constructor() {
    super()
  }

  static get observedAttributes(): string[] {
    return ["disabled", "_type", "style"]
  }

  attributeChangedCallback(
    name: string,
    _oldValue: string | null,
    newValue: string | null,
  ): void {
    // disabled
    if (name === "disabled") {
      if (newValue === "true") {
        this.setAttribute("aria-disabled", "true")
      } else {
        this.removeAttribute("aria-disabled")
      }
    }
    // menu

    // toggle
    if (name === "_type") {
      if (newValue === "toggle") {
        this.setAttribute("_", "on click if @aria-pressed equals 'false' set @aria-pressed to 'true' else set @aria-pressed to 'false'")
        this.setAttribute("aria-pressed", "false")
      }
    }
  }
}

export function registerButton(): void {
  window.customElements.define("ariabones-button", Button, { extends: "button" })
}

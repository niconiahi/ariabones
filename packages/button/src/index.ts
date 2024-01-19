// specification
// https://www.w3.org/WAI/ARIA/apg/patterns/button/
class Button extends HTMLButtonElement {
  constructor() {
    super()
  }

  static get observedAttributes(): string[] {
    return ["disabled", "data-type"]
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
    if (name === "data-type") {
      // toggle
      if (newValue === "toggle") {
        const pressed = this.getAttribute("data-pressed")
        this.setAttribute("aria-pressed", pressed ?? "false")
        this.setAttribute("_", `
        on click 
          if @aria-pressed equals 'true' 
            set @aria-pressed to 'false'
          else 
            set @aria-pressed to 'true'
        `)
      }

      // menu
      if (newValue === "menu") {
        this.setAttribute("aria-haspopup", "menu")
      }
    }
  }
}

export function registerButton(): void {
  window.customElements.define("ariabones-button", Button, { extends: "button" })
}

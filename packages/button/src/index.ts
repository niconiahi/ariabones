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
        this.addEventListener("click", () => {
          const ariaPressed = this.getAttribute("aria-pressed") ?? "false"
          if (ariaPressed === "true") {
            this.setAttribute("aria-pressed", "false")
          } else {
            this.setAttribute("aria-pressed", "true")
          }
        })
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

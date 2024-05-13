import { registerButton } from "@ariabones/button"

document.querySelector<HTMLDivElement>('#root')!.innerHTML = `
  <section style="display: grid; grid-template-columns: 1fr; row-gap: 8px">
    <h3>Make sure you have the Elements tab open so that you can see the changing HTML attributes</h3>
    <button is="ariabones-button" _="on click set @disabled to true">
      Disable button
    </button>
    <button is="ariabones-button" data-type="toggle" data-pressed="true">
      Toggle button
    </button>
  </section>
`

registerButton()


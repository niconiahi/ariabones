## toggle

### installation

```
npm install @ariabones/button
yarn add @ariabones/button
pnpm install @ariabones/button
```

### usage

```html
<button is="ariabones-button" data-type="toggle" data-pressed="true">
  Toggle button
</button>
```

### api

| property     | type              | default | description                                         |
| ------------ | ----------------- | ------- | --------------------------------------------------- |
| data-pressed | "true" or "false" | "false" | used to set up the initial value of aria-pressed    |
| aria-pressed | "true" or "false" | "false" | indicates if the button is currently pressed or not |

### keyboard interaction

| key   | description        |
| ----- | ------------------ |
| Space | toggles the button |
| Enter | toggles the button |

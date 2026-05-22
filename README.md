# MyAlert

> ⚠️ **Project Status: Work in Progress** — This library is under active development. Core features are functional but the API may change.

A lightweight, customizable **alert and toast notification library** built with **TypeScript**. MyAlert provides promise-based confirmation dialogs and toast notifications with smooth animations, flexible styling, and full type safety.

## ___Built to give you full control___

---

## Features

- 🎯 **Promise-Based API** — Async/await friendly `Alert` with `boolean` resolution
- 🍞 **Toast Notifications** — Lightweight toasts with 5 position options
- 🎨 **Fully Customizable** — Control colors, buttons, text, and animations
- ✨ **Built-in Animations** — `fade-in`, `pop-up`, `slide-in`, and `slide-in2`
- 🌙 **Dark Theme Default** — Sleek modern styling ready to use
- 📦 **Type Safe** — Full TypeScript support with exported interfaces

---

## Installation

### NPM
```bash
npm install @codexsavage6s/my_alert
```

### CDN
```html
<!-- CDN link coming soon -->

```

### Clone
```bash
git clone https://github.com/CodeXSavage6s/MyAlert.git
cd MyAlert
npm install
```

---

## Usage

### Alert

`Alert` is promise-based — it resolves `true` if the user confirms and `false` if they cancel.

```ts
import { Alert } from 'my-alert';

const confirmed = await Alert({
  icon: 'success',         // 'success' | 'error' | 'warning'  (required)
  title: 'Are you sure?',
  body: 'This action cannot be undone.',
  showCancelButton: true,
  confirmButtonText: 'Yes',
  cancelButtonText: 'No',
  animate: 'pop-up'        // 'default' | 'fade-in' | 'pop-up' | 'slide-in'
});

if (confirmed) {
  console.log('User confirmed');
}
```

#### Alert Options

| Option | Type | Default | Description |
|---|---|---|---|
| `icon` | `'success' \| 'error' \| 'warning'` | — | **Required.** Icon shown in the dialog |
| `title` | `string` | — | Dialog heading |
| `body` | `string` | — | Dialog body text |
| `background` | `string` | `'#2a223d'` | Dialog background color |
| `color` | `string` | `'white'` | Dialog text color |
| `showCancelButton` | `boolean` | `false` | Show a cancel button |
| `confirmButtonText` | `string` | `'OK'` | Confirm button label |
| `cancelButtonText` | `string` | `'Cancel'` | Cancel button label |
| `confirmButtonBackground` | `string` | — | Confirm button background |
| `confirmButtonColor` | `string` | — | Confirm button text color |
| `cancelButtonBackground` | `string` | — | Cancel button background |
| `cancelButtonColor` | `string` | — | Cancel button text color |
| `writeOut` | `boolean` | `false` | Typewriter effect on body text |
| `animate` | `Animations` | `'default'` | Entry animation |

---

### Toast

`Toast` displays a non-blocking notification that disappears automatically.

```ts
import { Toast } from 'my-alert';

Toast({
  text: 'Saved successfully!',   // required
  position: 'bottom-right',      // 'bottom-right' | 'top-right' | 'top-left' | 'bottom-left' | 'center'
  animate: 'slide-in2',          // 'default' | 'fade-in' | 'pop-up' | 'slide-in' | 'slide-in2'
  timer: 3000,                   // ms before auto-dismiss
  background: '#2a223d',
  color: 'white'
});
```

#### Toast Options

| Option | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | — | **Required.** Message to display |
| `position` | `Positions` | `'bottom-right'` | Where the toast appears on screen |
| `animate` | `Animations` | `'slide-in'` | Entry animation |
| `timer` | `number` | `2000` | Duration in ms before dismissing |
| `background` | `string` | `'#2a223d'` | Toast background color |
| `color` | `string` | `'white'` | Toast text color |

---

## License

MIT

---

> 📌 _Coming soon: CDN support and npm publish_

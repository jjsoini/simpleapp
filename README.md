# Simple App — a Vite starter for learning web basics

A tiny, heavily-commented starter project for learning the three core
languages of the web:

- **HTML** — the *structure* and content of a page
- **CSS** — how it *looks*
- **JavaScript** — how it *behaves* (interactivity)

It uses [Vite](https://vite.dev), a fast development tool that reloads the page
automatically whenever you save a file.

## Getting started

```bash
npm install   # download Vite (only needed once)
npm run dev   # start the dev server
```

Then open the printed URL (usually http://localhost:5173) in your browser.
Try editing a file and saving — the page updates instantly.

## How the app fits together

```
simpleapp/
├── index.html        ← entry point: the browser loads this first
├── package.json      ← project info + the npm commands above
└── src/
    ├── main.js        ← starts the app, builds the page, wires up the button
    ├── counter.js     ← a small, reusable piece of logic (the click counter)
    └── style.css      ← all the visual styling
```

**The flow:** `index.html` loads `style.css` (looks) and `main.js` (behavior).
`main.js` fills the empty `<div id="app">` with content, then imports
`setupCounter` from `counter.js` to make the button count clicks.

## Things to try

1. Change the heading text in `src/main.js`.
2. Change the `--brand` color at the top of `src/style.css`.
3. In `src/counter.js`, make the count go up by `2` instead of `1`.
4. Add a second button that resets the count back to `0`.

## Useful commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the live dev server while you work      |
| `npm run build`   | Bundle the app into `dist/` for publishing    |
| `npm run preview` | Preview the production build locally          |

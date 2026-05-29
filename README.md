# Simple App — learn to code with Claude Code

A tiny, heavily-commented starter project for learning the three core
languages of the web — **with Claude Code as your personal tutor**:

- **HTML** — the *structure* and content of a page
- **CSS** — how it *looks*
- **JavaScript** — how it *behaves* (interactivity)

It uses [Vite](https://vite.dev), a fast development tool that reloads the page
automatically whenever you save a file.

## Who this is for

Absolute beginners. You don't need any prior coding experience. You'll learn by
working through short lessons and asking Claude Code to explain things, check
your work, and walk you through each step.

## Getting started

```bash
npm install   # download Vite (only needed once)
npm run dev   # start the dev server
```

Then open the printed URL (usually http://localhost:5173) in your browser.
Try editing a file and saving — the page updates instantly.

## Learning with Claude Code

1. Open this project folder in **Claude Code** (the terminal CLI, IDE
   extension, or desktop app).
2. Start a session. Claude reads `CLAUDE.md` and your `progress.md`, then greets
   you and suggests what to learn next.
3. Work through `tutorials.md` — 16 bite-sized lessons (HTML, CSS, JS) plus a
   final mini-project. Each lesson has a concept, an example from this app, and
   a "Try it" task.
4. Ask Claude anything as you go, for example:
   - *"Explain lesson H2 to me."*
   - *"I tried the exercise but it didn't work — here's my code."*
   - *"What does this line in `main.js` do?"*
   - *"Mark H1 as done and tell me what's next."*

Your progress is tracked in `progress.md` (a simple checklist).

## How the app fits together

```
simpleapp/
├── index.html        ← entry point: the browser loads this first
├── package.json      ← project info + the npm commands above
├── tutorials.md      ← the beginner course (HTML, CSS, JS lessons)
├── progress.md       ← your lesson checklist / progress tracker
├── CLAUDE.md         ← tells Claude Code how to tutor you
└── src/
    ├── main.js        ← starts the app, builds the page, wires up the button
    ├── counter.js     ← a small, reusable piece of logic (the click counter)
    └── style.css      ← all the visual styling
```

**The flow:** `index.html` loads `style.css` (looks) and `main.js` (behavior).
`main.js` fills the empty `<div id="app">` with content, then imports
`setupCounter` from `counter.js` to make the button count clicks.

## Useful commands

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the live dev server while you work      |
| `npm run build`   | Bundle the app into `dist/` for publishing    |
| `npm run preview` | Preview the production build locally          |

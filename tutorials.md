# Tutorials — Learn to Code from Scratch

Welcome! 👋 This is a hands-on course for **absolute beginners**. You don't need
any prior experience. By the end you'll understand the three languages that
every website is built from:

- **HTML** — the **structure** (the words, buttons, and images)
- **CSS** — the **style** (colors, spacing, fonts, layout)
- **JavaScript** — the **behavior** (what happens when you click things)

A good way to remember it: HTML is the *skeleton*, CSS is the *clothes*, and
JavaScript is the *muscles* that make things move.

## How to use this course

1. Open a terminal in this project and run:
   ```bash
   npm install    # only the first time
   npm run dev
   ```
2. Open the link it prints (usually http://localhost:5173) in your browser.
3. Work through the lessons below **in order**. Each one has a concept, a small
   example, and a **"Try it"** task.
4. **Ask Claude Code for help anytime.** Good things to say:
   - *"Explain H2 to me."*
   - *"I tried the exercise but it didn't work — here's my code."*
   - *"What does this line in `main.js` do?"*
   - *"Mark H1 as done and tell me what's next."*
5. When you finish a lesson, tick it off in `progress.md`.

> **The magic of `npm run dev`:** while it's running, every time you save a file
> the browser updates automatically. Keep it open beside your editor.

---

# 🧱 HTML — the structure of a page

HTML is made of **elements**, written with **tags**. A tag is a keyword in angle
brackets, like `<p>`. Most tags come in pairs — an opening tag and a closing
tag (with a `/`) — wrapping some content:

```html
<p>Hello world</p>
```

Here `<p>` means "paragraph", `Hello world` is the content, and `</p>` ends it.

## H1 — Page structure & elements

Every HTML page has the same basic skeleton. Open `index.html` in this project
and you'll see it:

```html
<!doctype html>      <!-- tells the browser "this is HTML" -->
<html>
  <head>             <!-- info ABOUT the page (not shown on screen) -->
    <title>Simple App</title>
  </head>
  <body>             <!-- everything VISIBLE goes in here -->
    <h1>Hello!</h1>
  </body>
</html>
```

- `<head>` holds behind-the-scenes info (the page title, links to CSS).
- `<body>` holds everything you actually see.
- Text between `<!--` and `-->` is a **comment** — a note for humans that the
  browser ignores.

**Try it:** Find the `<title>` in `index.html` and change it to your name. Save,
then look at the browser tab — it changed!

## H2 — Text: headings, paragraphs & emphasis

The most common elements are for text:

```html
<h1>Biggest heading</h1>
<h2>Smaller heading</h2>
<h3>Even smaller</h3>
<p>A normal paragraph of text.</p>
<p>You can make a word <strong>bold</strong> or <em>italic</em>.</p>
```

There are six heading levels, `<h1>` (biggest) down to `<h6>`. Use one `<h1>` as
the main title, then `<h2>`/`<h3>` for sub-sections.

**Try it:** In `src/main.js`, find the line with `<h1>Hello! 👋</h1>` and add a
`<p>` below it with a sentence about yourself. Save and look at the page.

## H3 — Links & images

A **link** (anchor) sends you to another page. An **image** shows a picture.

```html
<a href="https://developer.mozilla.org">Visit MDN</a>

<img src="https://picsum.photos/200" alt="A random photo" />
```

- `href` is the address the link points to.
- `src` is the image's address; `alt` is text describing it (for screen readers
  and if the image fails to load).
- Notice `<img>` has no closing tag — a few elements are "self-closing".

These are **attributes**: extra settings written inside the opening tag as
`name="value"`.

**Try it:** Add a link to your favorite website somewhere inside the card in
`src/main.js`.

## H4 — Lists

Two kinds of lists. Each item goes in an `<li>` ("list item"):

```html
<ul>                 <!-- unordered: bullet points -->
  <li>Bread</li>
  <li>Milk</li>
</ul>

<ol>                 <!-- ordered: numbered -->
  <li>Wake up</li>
  <li>Coffee</li>
</ol>
```

**Try it:** Add an unordered list of three things you want to learn to the page.

## H5 — Containers & grouping

A `<div>` is a generic box used to **group** other elements so you can position
or style them together. You've already met one: `<div id="app">` in
`index.html` is the box our whole app lives in.

```html
<div class="card">
  <h1>Title</h1>
  <p>Some text grouped with the title.</p>
</div>
```

- `id="app"` is a **unique** name (only one element should have it).
- `class="card"` is a **reusable** label (many elements can share a class).

You'll use `id` and `class` constantly in CSS and JavaScript to target specific
elements. That's the bridge to the next track!

**Try it:** Look at `src/main.js`. Can you find the `<div class="card">`? What's
inside it?

---

# 🎨 CSS — how a page looks

HTML alone looks plain. CSS adds color, spacing, fonts, and layout. All the CSS
in this project lives in `src/style.css`.

A CSS **rule** looks like this:

```css
selector {
  property: value;
}
```

- The **selector** picks which elements to style.
- Inside the braces, each line sets one **property** to a **value**.

## C1 — How CSS connects to HTML (selectors)

CSS finds elements using selectors that match what you saw in HTML:

```css
p        { color: blue; }   /* every <p> element        */
.card    { padding: 20px; } /* every element class="card" (note the dot) */
#app     { width: 400px; }  /* the element id="app"      (note the hash) */
```

So: **tag name** = just the word, **class** = `.name`, **id** = `#name`.

The browser connects `style.css` to the page because `index.html` has this line
in its `<head>`:

```html
<link rel="stylesheet" href="/src/style.css" />
```

**Try it:** Open `src/style.css`, find the `.card` rule, and skim what it sets.

## C2 — Colors, fonts & text styling

```css
.card h1 {
  color: #646cff;        /* text color (a hex code) */
  font-size: 1.8rem;     /* how big the text is */
  font-weight: 700;      /* boldness: 400 = normal, 700 = bold */
  text-align: center;    /* center the text */
}
```

Colors can be names (`red`), hex codes (`#646cff`), or `rgb(100, 108, 255)`.

**Try it:** In `src/style.css`, change the `--brand` color near the top to
`#e91e63` (a pink) and save. Lots of things turn pink — that's a **CSS
variable** in action (more in C5).

## C3 — The box model (margin, padding, border)

Every element is a box with three layers of spacing:

```
  margin   ← space OUTSIDE the box (pushes other elements away)
 ┌─────────────────────┐
 │  border  ← the edge  │
 │ ┌─────────────────┐ │
 │ │ padding ← inside │ │
 │ │  ┌───────────┐  │ │
 │ │  │  content  │  │ │
 │ │  └───────────┘  │ │
 │ └─────────────────┘ │
 └─────────────────────┘
```

```css
.card {
  padding: 2.5rem;        /* space between the border and the content */
  margin: 1rem;           /* space outside, separating it from siblings */
  border-radius: 16px;    /* rounds the corners */
}
```

**Try it:** Change the `.card` `padding` to `1rem` and then `4rem`. Watch how the
breathing room inside the card shrinks and grows.

## C4 — Layout with Flexbox

Flexbox arranges elements in a row or column and aligns them. This project uses
it to center the card in the middle of the screen:

```css
body {
  display: flex;            /* turn on flexbox */
  justify-content: center;  /* center horizontally */
  align-items: center;      /* center vertically */
  min-height: 100vh;        /* make body as tall as the screen */
}
```

**Try it:** Temporarily change `justify-content: center;` to `flex-start` and
save — the card jumps to the left. Change it back when you're done.

## C5 — Variables & hover effects

**Variables** let you name a value once and reuse it. They're defined in
`:root` and used with `var()`:

```css
:root {
  --brand: #646cff;       /* define it */
}
button {
  background-color: var(--brand);  /* use it */
}
```

**Pseudo-classes** style elements in a particular state. `:hover` applies only
while the mouse is over the element:

```css
button:hover {
  background-color: var(--brand-dark);  /* darker while hovered */
}
```

**Try it:** Add a `:hover` rule that makes the `.card` change its background
color when you hover over it.

---

# ⚡ JavaScript — making a page interactive

HTML and CSS make a page that just sits there. JavaScript makes it **respond**:
count clicks, show messages, change content. The app's JS lives in `src/main.js`
and `src/counter.js`.

## J1 — Variables & values

A **variable** is a named container for a value. You make one with `let`
(can change) or `const` (cannot change):

```js
let score = 0;          // a number, can change later
const name = "Sam";     // text (a "string"), stays the same
let isReady = true;     // a true/false value (a "boolean")

score = score + 1;      // now score is 1
```

**Try it:** In `src/counter.js`, find `let count = 0;`. What do you think `let`
(vs `const`) tells us about whether `count` will change? (Hint: it counts up!)

## J2 — Functions

A **function** is a reusable block of code with a name. You **define** it once
and **call** it whenever you need it:

```js
function greet(personName) {
  return "Hello, " + personName + "!";
}

greet("Sam");   // produces "Hello, Sam!"
```

`personName` is a **parameter** — an input you hand to the function.

**Try it:** In `src/counter.js`, find `function setupCounter(button)` and
`function handleClick()`. One is called from `main.js`; the other runs on each
click. Can you spot where each gets called?

## J3 — Finding elements (the DOM)

The browser turns your HTML into objects JavaScript can grab. This is the
**DOM** (Document Object Model). You find an element with `querySelector`, using
the same selectors you learned in CSS:

```js
const title = document.querySelector("h1");      // first <h1>
const app   = document.querySelector("#app");    // id="app"
const card  = document.querySelector(".card");   // class="card"
```

**Try it:** Look at the top of `src/main.js`. Find the line that grabs
`#app`. That's how JS gets a handle on the page to change it.

## J4 — Events (responding to clicks)

An **event** is something the user does — a click, a key press, a mouse move.
You react with `addEventListener`: "when this happens, run this function."

```js
const button = document.querySelector("button");

button.addEventListener("click", function () {
  alert("You clicked me!");
});
```

**Try it:** In `src/counter.js`, find the `addEventListener` line. What event is
it listening for, and what function does it run?

## J5 — Changing the page

JavaScript can rewrite what's on the page. Two common ways:

```js
const display = document.querySelector("#count");

display.textContent = "42";          // change the TEXT inside an element
display.style.color = "red";          // change a CSS property
```

In `src/counter.js`, this exact technique updates the number every click:

```js
count = count + 1;
display.textContent = count;   // show the new number on the page
```

**Try it:** In `handleClick`, add a line that also changes the display color,
e.g. `display.style.color = "green";`. Click the button and watch.

---

# 🚀 Putting it together

## P1 — Extend the counter app (your first mini-project)

Now combine everything. Pick one (or all!) and ask Claude for help when stuck:

1. **A reset button.** Add a second `<button>` in `src/main.js` (HTML), give it
   an id, then in `src/counter.js` add an event listener that sets `count = 0`
   and updates the display (JS). Style it a different color (CSS).
2. **Count by 2.** Change `count = count + 1` to add 2 each click.
3. **A milestone message.** When `count` reaches 10, change the heading text to
   "🎉 You reached 10!".

When you finish, you'll have used HTML, CSS, and JavaScript together — exactly
how real web apps are built. Congratulations! 🥳

---

## Where to go next

- **MDN Web Docs** (https://developer.mozilla.org) — the best free reference.
- Try building a small page from scratch: a personal profile card.
- Ask Claude: *"What's a good next topic after this course?"*

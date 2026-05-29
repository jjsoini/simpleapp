/*
  main.js — the starting point for our JavaScript.

  This file runs as soon as the page loads. Its job here is to build the
  contents of the page and wire up interactivity.

  KEY IDEA: The browser exposes the page to JavaScript as the "DOM"
  (Document Object Model) — a live representation of the HTML that we can
  read and change with code.
*/

// "import" pulls in code from another file so we can reuse it.
// Here we grab the setupCounter function from counter.js.
import { setupCounter } from "./counter.js";

// Find the empty <div id="app"> from index.html.
// document.querySelector takes a CSS selector (here "#app" = the id "app").
const app = document.querySelector("#app");

// Set the HTML inside that div. The backtick string (`...`) is a
// "template literal" — it can span multiple lines.
app.innerHTML = `
  <div class="card">
    <h1>Hello! 👋</h1>
    <p>Edit <code>src/main.js</code> and save to see changes instantly.</p>

    <!-- This number will be updated by JavaScript when the button is clicked. -->
    <span class="count" id="count">0</span>

    <button id="counter-button">Click me</button>
  </div>
`;

// Grab the button we just created and connect the counter logic to it.
const button = document.querySelector("#counter-button");
setupCounter(button);

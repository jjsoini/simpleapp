/*
  counter.js — a small, self-contained piece of logic.

  Splitting code into focused files (called "modules") is how real apps stay
  organized. This module knows how to make a button count clicks, and nothing
  else.

  We "export" setupCounter so other files (like main.js) can import and use it.
*/

export function setupCounter(button) {
  // A variable to remember how many times the button was clicked.
  // It "lives" inside this function and keeps its value between clicks.
  let count = 0;

  // Find the <span> that displays the number.
  const display = document.querySelector("#count");

  // Define what happens on each click.
  function handleClick() {
    count = count + 1; // add 1
    display.textContent = count; // show the new number on the page
  }

  // "addEventListener" tells the browser: when this button is "click"ed,
  // run handleClick. This is the heart of interactivity.
  button.addEventListener("click", handleClick);
}

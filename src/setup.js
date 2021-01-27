//const layout = require("./views/layout");
import layout from "./views/layout";
import spinner from "./views/loader";
import fetchsong from "./data";
import createsong from "./views/songs";

function render(markup, parent) {
  parent.innerHTML = markup;
}

function setup() {
  console.log("layout", layout);
  const layoutContainer = document.getElementById("app");

  //layoutContainer.innerHTML = layout;
  render(layout, layoutContainer);

  const searchInput = document.getElementById("search");
  const appContainer = document.getElementById("content");

  searchInput.addEventListener("keydown", (event) => {
    const enteredText = event.target.value.trim();
    console.log("enteredText", enteredText);
    if (!enteredText || enteredText.length < 2) {
      return;
    }

    render(spinner, appContainer);
    fetchsong(enteredText).then(function (songArray) {
      console.log("*****", songArray);
      const songlist = createsong(songArray);
      render(songlist, appContainer);
    });
  });
}

export default setup;

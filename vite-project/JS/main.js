import "../CSS/style.css";
import { people } from "./people.js";
import { DOMSelectors } from "./dom.js";

/* const asianbtn = document.querySelector(".Asian-btn");

function allcards() {
  people.forEach((person) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      ` 
          <div class="card">
          <h2>${person.name}</h2>
          <h4>${person.age}, ${person.race}</h4>
          <h4>${person.gender} | exes: ${person.exes}</h4>
          <img class="imagesize" src="${person.image}" alt="e" />
          </div>     `
    );
  });
}
 function asian() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();

    people.forEach((person) => {
      if (person.race === "White") {
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `
            <div class="card">
            <h2>${person.name}</h2>
            <h4>${person.age}, ${person.race}</h4>
            <h4>${person.gender}| exes: ${person.exes}</h4>
            <img class="imagesize" src="${person.image}" alt="e" />
            </div>

            `
        );
      }
    });
  });
} 

function reset() {
  document.querySelector(".container").innerHTML = "";
}

function main() {
  allcards();
  asianbtn.addEventListener("click", (event) => {
    event.preventDefault();
    reset();
    asian();
  });
}
 */

const asianbtn = document.querySelector(".Asian-btn");

function allcards() {
  people.forEach((person) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      ` 
          <div class="card">
          <h2>${person.name}</h2>
          <h4>${person.age}, ${person.race}</h4>
          <h4>${person.gender} | exes: ${person.exes}</h4>
          <img class="imagesize" src="${person.image}" alt="e" />
          </div>     
      `
    );
  });
}

function asian() {
  people.forEach((person) => {
    if (person.race === "Asian") {
      DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
        `
            <div class="card">
            <h2>${person.name}</h2>
            <h4>${person.age}, ${person.race}</h4>
            <h4>${person.gender} | exes: ${person.exes}</h4>
            <img class="imagesize" src="${person.image}" alt="e" />
            </div>
        `
      );
    }
  });
}

function reset() {
  DOMSelectors.container.innerHTML = "";
}

function main() {
  allcards();
  asianbtn.addEventListener("click", (event) => {
    event.preventDefault();
    reset();
    asian();
  });
}

main();

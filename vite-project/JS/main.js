import "../CSS/style.css";
import { people } from "./people.js";
import { DOMSelectors } from "./dom.js";

const asianbtn = document.querySelector(".Asian-btn");
const malebtn = DOMSelectors.malebutton;
const femalebtn = DOMSelectors.femalebutton;

function injectHTML(person) {
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

function displayPeople(filteredPeople) {
  reset();
  filteredPeople.forEach((person) => injectHTML(person));
}
function hightolowex() {}

function reset() {
  DOMSelectors.container.innerHTML = "";
}

function main() {
  displayPeople(people);

  asianbtn.addEventListener("click", (event) => {
    event.preventDefault();
    const asians = people.filter((person) => person.race === "Asian");
    displayPeople(asians);
  });

  malebtn.addEventListener("click", (event) => {
    event.preventDefault();
    const males = people.filter((person) => person.gender === "Male");
    displayPeople(males);
  });
  femalebtn.addEventListener("click", (event) => {
    event.preventDefault();
    const female = people.filter((person) => person.gender === "Female");
    displayPeople(female);
  });
}

main();

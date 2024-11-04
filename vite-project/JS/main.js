import "../CSS/style.css";
import { people } from "./people.js";
import { DOMSelectors } from "./dom.js";

function white() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    people.forEach((person) => {
      if (person.race == "White") {
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `
            <div class="card">
                <h1>${person.name}</h1>
                <img><img>
                <h1>${person.race}</h1>
                <h1>${person.age}</h1>
                <h1>${person.gender}</h1>
                <h1>${person.exes}</h1>
                <img src="${person.image}"></img>
            </div>
            `
        );
      }
    });
  });
}

white();

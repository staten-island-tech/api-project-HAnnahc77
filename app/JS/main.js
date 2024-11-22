import "../CSS/style.css";
import "../CSS/tailwind.css";
import { DOMSelectors } from "./selectors.js";

const URL = "https://api.disneyapi.dev/character";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    if (response.status !== 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
      data.data.forEach((character) => {
        insertCards(character);
      });
    }
  } catch (error) {
    alert("Unable to find all information.");
  }
}

function insertCards(character) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="character-card">
        <h2>${character.name}</h2>
        <img src="${character.imageUrl}" alt="Image of ${character.name}" />
      </div>
    `
  );
}

getData(URL);

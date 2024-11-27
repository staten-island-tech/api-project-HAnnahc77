import "/tailwind.css";
import { DOMSelectors } from "./selectors.js";

const URL = "https://api.disneyapi.dev/character";
let currentPage = 1;

async function getData(page) {
  try {
    const response = await fetch(`${URL}?page=${page}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
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
    `<div class="character-card border-[5px] border-black p-4">
        <h2>${character.name}</h2>
        <img src="${character.imageUrl}" alt="Image of ${character.name}" />
      </div>`
  );
}

function increasePageCount() {
  DOMSelectors.button2.addEventListener("click", function () {
    currentPage++;
    DOMSelectors.container.innerHTML = "";
    getData(currentPage);
  });
}

function decreasePageCount() {
  DOMSelectors.button1.addEventListener("click", function () {
    currentPage--;
    DOMSelectors.container.innerHTML = "";
    getData(currentPage);
  });
}

getData(currentPage);
increasePageCount();
decreasePageCount();

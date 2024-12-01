import "/tailwind.css";
import { DOMSelectors } from "./selectors.js";

const URL = "https://api.disneyapi.dev/character";
let currentPage = 1;


async function getFirstPage() {
  try {
    const response = await fetch(`${URL}?page=1`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch first page data");
    }
    const data = await response.json();
    data.data.forEach((character) => {
      insertCards(character);
    });
  } catch (error) {
    alert("Unable to fetch the first page.");
  }
}


async function getNextPage(page) {
  try {
    const response = await fetch(`${URL}?page=${page}`);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data for the selected page");
    }
    const data = await response.json();
    data.data.forEach((character) => {
      insertCards(character);
    });
  } catch (error) {
    alert("Unable to fetch the selected page.");
  }
}


function insertCards(character) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `<div class="characterCard border-2 border-black">
        <h2>${character.name}</h2>
        <img src="${character.imageUrl}" alt="Image of ${character.name}" />
      </div>`
  );
}


function increasePageCount() {
  DOMSelectors.button2.addEventListener("click", function () {
    currentPage++;
    DOMSelectors.container.innerHTML = ""; 
    getNextPage(currentPage);
  });
}

function decreasePageCount() {
  DOMSelectors.button1.addEventListener("click", function () {
    currentPage--;
    DOMSelectors.container.innerHTML = "";
    getNextPage(currentPage); 
  });
}


getFirstPage();
increasePageCount();
decreasePageCount();

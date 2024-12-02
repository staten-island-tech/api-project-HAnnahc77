import "/tailwind.css";
import { DOMSelectors } from "./selectors.js";

const URL = "https://api.disneyapi.dev/character";
let currentPage = 10;

async function getFirstPage() {
  try {
    const response = await fetch(`${URL}`);
    if (response.status !== 200) {
      throw new Error(response);
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
      throw new Error(response);
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
    `<div class="p-[5px] w-80 border-2 border-[#2d6d71]">
        <h2 class="text-[20px]">${character.name}</h2>
        <div class="flex justify-center">
          <img class="w-64 h-80 object-cover" src="${character.imageUrl}" alt="Image of ${character.name}" onerror="this.onerror=null;this.src='https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1649876370.png?crop=1.00xw:0.501xh;0,0.239xh&resize=980:*';" />
        </div>
        <p class="text-[10px]">${character.tvShows}${character.films}</p>
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

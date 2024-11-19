import "./style.css";

DOMSelectors;

async function getData() {
  try {
    const response = await fetch("https://api.disneyapi.dev/character");
    if (response.status !== 200) {
      throw new Error("Failed to fetch data.");
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

function createCards() {}

getData();
createCards();

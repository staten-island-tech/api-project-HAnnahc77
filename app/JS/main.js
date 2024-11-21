import "./style.css";

const URL = "https://api.disneyapi.dev/character";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.data);
  } catch (error) {}
}

getData(URL);

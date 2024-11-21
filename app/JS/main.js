import "../CSS/style.css";

const URL = "https://api.disneyapi.dev/character";

async function getData(URL){
  try {
    const response = await fetch(URL);
    if (response.status !== 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data);
    }
  } catch (error) {
    alert("Unable to find all information.");
  }
}

getData(URL);

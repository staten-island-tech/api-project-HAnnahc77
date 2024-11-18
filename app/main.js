import "./style.css";

async function getData() {
  try {
    const response = await fetch("https://api.disneyapi.dev/character");
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data.data);
    }
  } catch (error) {
    alert("hey i cant find that");
  }
}

getData();

// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, image, files)
//         Simplifies asynchronous data fetching in JS and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!res.ok) {
      throw new Error("Could not fetch resource");
    } else {
      const data = await res.json();
      const pokemonSprite = data.sprites.front_default;
      const imageElement = document.getElementById("pokemonSprite");
      imageElement.src = pokemonSprite;
      imageElement.style.display = "block";
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();

const characterContainer = document.getElementById("characters");
const houseSelect = document.getElementById("house-select");
const genderSelect = document.getElementById("gender-select");

async function fetchCharacters(house, gender) {
  const url = `https://hp-api.onrender.com/api/characters`;
  let filterUrl = url;
  const filterParams = [];
  if (house && house !== "all") {
    filterParams.push(`house=${house}`);
  }
  if (gender && gender !== "all") {
    filterParams.push(`gender=${gender}`);
  }

  if (filterParams.length > 0) {
    filterUrl += `?${filterParams.join("&")}`;
  }

  try {
    const response = await fetch(filterUrl);
    const data = await response.json();
    console.log(data); // View data in console for debugging

    characterContainer.innerHTML = ""; // Clear previous content

    data.forEach(character => {
      const characterElement = document.createElement("div");
      characterElement.classList.add("character");
      characterElement.innerHTML = `
        <img src="${character.image}" alt="${character.name} image">
        <h2>${character.name}</h2>
        <p>House: ${character.house}</p>
        <p>Gender: ${character.gender}</p>
        <p>Actor: ${character.actor}</p>
        <p>Date of Birth: ${character.dateOfBirth}</p>
      `;
      characterContainer.appendChild(characterElement);
    });
  } catch (error) {
    console.error("Error fetching characters:", error);
    characterContainer.textContent = "Error: Could not retrieve characters.";
  }
}

houseSelect.addEventListener("change", (event) => {
  const selectedHouse = event.target.value;
  const selectedGender = genderSelect.value;
  fetchCharacters(selectedHouse, selectedGender);
});

genderSelect.addEventListener("change", (event) => {
  const selectedHouse = houseSelect.value;
  const selectedGender = event.target.value;
  fetchCharacters(selectedHouse, selectedGender);
});

fetchCharacters(); // Fetch all characters on page load

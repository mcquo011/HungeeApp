const search = document.querySelector("#search");
let searchQuery = "";
const calories = document.querySelector(".calories");
const ingredients = document.querySelector(".ingredients");
const image = document.querySelector(".image");
const title = document.querySelector("#title");
const nutrition = document.querySelector(".nutrition");
const API_id = "cf07f1f8";
const API_key = "27e126a985485dda204f30a5e04158f8";

function getRecipe() {
  let APIurl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_id}&app_key=${API_key}&to=10`;

fetch(APIurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const recipes = data.hits;
    for (let i = 0; i < recipes.length; i++) {
      const cardTitle = document.querySelectorAll(".title")[i];
      const cardCalories = document.querySelectorAll(".calories")[i];
      const cardNutrition = document.querySelectorAll(".nutrition")[i]; 
      const cardImage = document.querySelectorAll(".image img")[i];
      const ingredientsList = data.hits[i].recipe.ingredientLines;
      const select = document.querySelectorAll(".select")[i];
      cardTitle.innerHTML = recipes[i].recipe.label;
      cardCalories.innerHTML =
     "Calories: " + Math.round(recipes[i].recipe.calories);
        if (recipes[i].recipe.dietLabels.length > 0) {
          cardNutrition.innerHTML =
            "Diet Label: " + recipes[i].recipe.dietLabels;
        } else {
          cardNutrition.innerHTML = "Diet Label: No Data Found";
        }
      cardImage.src = recipes[i].recipe.image;
      
      while (select.firstChild) {
        select.removeChild(select.firstChild);
      }
      for (let j = 0; j < ingredientsList.length; j++) {
        const option = document.createElement("option");
        option.innerHTML = ingredientsList[j];
        select.appendChild(option);
      }
    }
  })
  .catch((error) => console.log(error));
}

// Hide all recipe-cards by default 
const cards = document.querySelectorAll(".recipe-card");
cards.forEach((card) => card.classList.add("hidden"));

search.addEventListener("click", function (event) {
  event.preventDefault();
  // Hide all cards
  cards.forEach((card) => card.classList.add("hidden"));
  searchQuery = document.querySelector("input").value;
  getRecipe();
});

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
      const recipe = data.hits;
      calories.innerHTML = "Calories: " + data.hits[0].recipe.calories;
      title.innerHTML = data.hits[0].recipe.label;
      nutrition.innerHTML = "Diet Label: " + data.hits[0].recipe.dietLabels;

      document.querySelector(".image img").src = data.hits[0].recipe.image;

      const ingredientsList = data.hits[0].recipe.ingredientLines;
      const select = document.querySelector("select");


      while (select.firstChild) {
        select.removeChild(select.firstChild);
      }

      for (let i = 0; i < ingredientsList.length; i++) {
        const option = document.createElement("option");
        option.innerHTML = ingredientsList[i];
        select.appendChild(option);
      }
    })
    .catch((error) => console.log(error));
}

search.addEventListener("click", function (event) {
  event.preventDefault();
  searchQuery = document.querySelector("input").value;
  getRecipe();
});

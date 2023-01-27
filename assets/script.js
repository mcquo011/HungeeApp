const search = document.querySelector("#search");
let searchQuery = "";
const calories = document.querySelector(".calories");
const ingredients = document.querySelector(".ingredients");
const image = document.querySelector(".image");
const title = document.querySelector("#title");
const nutrition = document.querySelector(".nutrition");
const historyList = document.querySelector("#historyContainer");
const API_id = "cf07f1f8";
const API_key = "27e126a985485dda204f30a5e04158f8";

let history = JSON.parse(localStorage.getItem("history")) || [];

function getRecipe() {
  let APIurl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${API_id}&app_key=${API_key}&to=10`;

fetch(APIurl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.hits)
    const recipes = data.hits;
    for (let i = 0; i < recipes.length; i++) {
      const cardTitle = document.querySelectorAll("#title")[i];
      const cardCalories = document.querySelectorAll(".calories")[i];
      const cardNutrition = document.querySelectorAll(".nutrition")[i]; 
      const cardImage = document.querySelectorAll(".image img")[i];
      const ingredientsList = data.hits[i].recipe.ingredientLines;
      const select = document.querySelectorAll(".select")[i];
      cardTitle.innerHTML = recipes[i].recipe.label;
      cardCalories.innerHTML =
     "<b>Calories: </b>" + Math.round(recipes[i].recipe.calories);
        if (recipes[i].recipe.dietLabels.length > 0) {
          cardNutrition.innerHTML =
            "<b>Diet Label: </b>" + recipes[i].recipe.dietLabels;
        } else {
          cardNutrition.innerHTML = "<b>Diet Label: </b>No Data Found";
        }
        const cardLink = document.querySelectorAll(".card-link")[i];
        cardLink.setAttribute("href", recipes[i].recipe.url);
        cardLink.setAttribute("target", "_blank");
      cardImage.src = recipes[i].recipe.image;
      cardImage.setAttribute("class", "img-border")
      cardLink.appendChild(cardImage);
      
      while (select.firstChild) {
        select.removeChild(select.firstChild);
      }
      for (let j = 0; j < ingredientsList.length; j++) {
        const option = document.createElement("option");
        option.innerHTML = ingredientsList[j];
        select.appendChild(option);
      }
        
    }
        const cards = document.querySelectorAll(".card");
        for (let i = 0; i < data.hits.length; i++) {
          cards[i].classList.remove("hidden");
        }
        for (let i = data.hits.length; i < cards.length; i++) {
          cards[i].classList.add("hidden");
        }
  })
  .catch((error) => console.log(error));
}

search.addEventListener("click", function (event) {
  event.preventDefault();
  // Hide all cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.classList.remove("hidden"));
  searchQuery = document.querySelector("input").value;
  getRecipe();
  //save search to localstorage
  history.push(searchQuery);
  localStorage.setItem("history", JSON.stringify(history));
});

function renderHistory(){
     history = JSON.parse(localStorage.getItem("history")) || []; 
    historyList.innerHTML = "";
    for (let i = 0; i < history.length; i++) {
        const historyBtn = document.createElement("button");
        historyBtn.innerHTML = history[i]
         historyBtn.setAttribute("type", "text");
         historyBtn.setAttribute("value", searchHistory[i]);
    }

    historyList.appendChild(historyBtn);
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  renderHistory();
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  
}
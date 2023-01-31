const search = document.querySelector("#search");
let searchQuery = "";
const calories = document.querySelector(".calories");
const ingredients = document.querySelector(".ingredients");
const image = document.querySelector(".image");
const title = document.querySelector("#title");
const nutrition = document.querySelector(".nutrition");
const clearHistory = document.querySelector(".clearHistory")
const clearSeach = document.querySelector(".link")
const searchInput = document.querySelector("#search-input")
const modal = document.querySelector(".modal")
const link = document.querySelector(".link")
const instruction = document.querySelector(".instructions");
const API_id = "cf07f1f8";
const API_key = "27e126a985485dda204f30a5e04158f8";

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

 if (!searchInput.value) {
   modal.classList.add("is-active");
   const closeButton = document.querySelector(".delete");
   closeButton.addEventListener("click", () => {
     modal.classList.remove("is-active");
   });
 }
   instruction.classList.add("hidden");

  const historyBtn = document.querySelector(".openbtn");
  historyBtn.classList.remove("hidden");
  clearHistory.classList.remove("hidden")

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.classList.remove("hidden"));
  searchQuery = document.querySelector("input").value;
  getRecipe();
});


const images = document.querySelectorAll(".image img");
images.forEach((image) => {
  image.addEventListener("click", (event) => {
    const url = event.target.parentElement.href;

    let urls = localStorage.getItem("urls");
    if (urls) {
      urls = JSON.parse(urls);
    } else {
      urls = [];
    }

    if (!urls.includes(url)) {
    urls.push(url);

    localStorage.setItem("urls", JSON.stringify(urls));

    addUrlsToSidebar(); 
    }

    
  });
});


function addUrlsToSidebar() {
  const sidebar = document.querySelector("#mySidebar");


  let urls = localStorage.getItem("urls");
  if (urls) {
    urls = JSON.parse(urls);
    
 sidebar.textContent = "";
   
    urls.forEach((url) => {
      const link = document.createElement("a");
      link.href = url;
      link.innerHTML = url; 
      link.classList.add("link")
      sidebar.appendChild(link);
    });
   
  }
}

addUrlsToSidebar();


clearHistory.addEventListener("click", function(){
      localStorage.clear(); 
        location.reload()
})

link.addEventListener("click", function(){
    window.location.assign("map.html")
})

function toggleNav() {
  let sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "275px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "275px";
  }
}

      let data,
        newArray = [];
  const params = new URLSearchParams(window.location.search);
  const targetUrl = params.get("target");
  if (!targetUrl) window.location.href = "/";
  const gameName = document.getElementById("game-name");
  const gameCategory = document.getElementById("game-category");
  const gameRelease = document.getElementById("game-release");
  const gameDeveloper = document.getElementById("game-developer");
  const gamePopularity = document.getElementById("game-popularity");
  const gameGenre = document.getElementById("game-genre");
  const gameBuild = document.getElementById("game-build");
  const gameThumb = document.getElementById("game-thumb");
  const gameDescription = document.getElementById("game-description");
  const gameControls = document.getElementById("game-controls");
  fetch("games.json")
        .then((response) => response.json())
        .then((dataa) =>  {
  data = dataa.games;
  for (var i = 0;
  i < data.length;
  i++)  {
  newArray.push(data[i]);
  
}

newArray.forEach((game) =>  {
  if (game.id === parseInt(targetUrl))  {
  document.getElementById("game-frame").src = game.link;
  const titleFromStorage = localStorage.getItem("title");
  if (titleFromStorage && titleFromStorage.trim() !== "")  {
  const pageTitle = document.getElementsByTagName("title")[0];
  const [title, image] = titleFromStorage.split(",");
  if (title && image)  {
  pageTitle.innerHTML = title;
  let favicon = document.querySelector(".favicon");
  favicon.href = image;
  
}


}

else  {
  document.getElementsByTagName("title")[0].innerHTML =
                  game.name + " ";
  
}

gameName.innerHTML = game.name;
  gameRelease.innerHTML = game.releaseDate;
  gameDeveloper.innerHTML = game.dev;
  gameGenre.innerHTML = game.genre;
  gameGenre.setAttribute("href",`/tag.html?tag=$ {
  game.genre.replace(/ /g,"-")
}

`);
  gameBuild.innerHTML = game.build;
  if (game.about.includes("Oops, you caught us"))  {
  gameDescription.parentElement.style.display = "none";
  
}

if (game.controls.includes("Still working on this one O_O"))  {
  gameControls.parentElement.style.display = "none";
  
}

gameDescription.innerHTML = game.about;
  gamePopularity.innerHTML = game.popularity;
  gameThumb.src = game.link + game.thumb;
  game.controls.forEach((control) =>  {
  const li = document.createElement("li");
  li.innerHTML = control;
  gameControls.appendChild(li);
  
}

);
  console.log(game.catagory);
  switch (game.catagory)  {
  case "strategy":
                  gameCategory.innerHTML = "Strategy and Puzzle";
  break;
  case "action":
                  gameCategory.innerHTML = "Action and Adventure";
  break;
  case "casual":
                  gameCategory.innerHTML = "Casual";
  break;
  case "driving":
                  gameCategory.innerHTML = "Driving and Sports";
  break;
  default:
                  gameCategory.innerHTML = "Other";
  
}


}


}

);
  
}

)
        .catch((error) => console.error("Error fetching data:", error));
  
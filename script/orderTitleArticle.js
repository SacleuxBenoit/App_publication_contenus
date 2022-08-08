let containerArticle = document.getElementById('containerArticle');

let displayTitle = function () {
    fetch("https://127.0.0.1:8000/api/articles", { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then((responseJSON) => {
        responseJSON["hydra:member"].forEach((article) => {
            let divArticle = document.createElement('div');
            divArticle.innerHTML += article["title"];
            containerArticle.appendChild(divArticle);
        });
      });
  };

  document.addEventListener("DOMContentLoaded", displayTitle);
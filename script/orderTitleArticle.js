let containerArticle = document.getElementById('containerArticle');

let displayTitle = function () {
    fetch("https://127.0.0.1:8000/api/articles", { method: "GET" })
      .then(function (response) {
        return response.json();
      })
      .then((responseJSON) => {
        responseJSON["hydra:member"].reverse().forEach((article) => {
            let divArticle = document.createElement('div');
            divArticle.innerHTML += article["title"];
            containerArticle.appendChild(divArticle);
            console.log(article)
        });
      });
  };

  document.addEventListener("DOMContentLoaded", displayTitle);
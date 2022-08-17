const selectArticle = document.querySelector("#select");
fetch("https://127.0.0.1:8000/api/categories", { method: "GET" })
.then(function (response) {
  return response.json();
})
.then((responseJSON) => {
  responseJSON["hydra:member"].forEach((category) => {
    let categoryOption = document.createElement("option");
    categoryOption.innerHTML = category["name"];
    categoryOption.value = category["id"];
    categoryOption.id = "option-" + category["id"];
    selectArticle.appendChild(categoryOption);
  });
});
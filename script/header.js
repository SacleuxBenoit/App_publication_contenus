// display categories on a dropdown
const selectCategories = document.getElementById("selectCategories");

fetch("https://127.0.0.1:8000/api/categories", { method: "GET" })
.then(function (response) {
  return response.json();
})
.then((responseJSON) => {
  responseJSON["hydra:member"].forEach((category) => {
    let categoryOption = document.createElement("option");
    categoryOption.innerHTML = category["name"];
    categoryOption.value = category["id"];
    categoryOption.id = "option" + category["id"];
    selectCategories.appendChild(categoryOption);
  });
});

// display tags on a dropdown
const selectTags = document.getElementById("selectTags");

fetch("https://127.0.0.1:8000/api/tags", { method: "GET" })
.then(function (response) {
  return response.json();
})
.then((responseJSON) => {
  responseJSON["hydra:member"].forEach((tag) => {
    let tagOption = document.createElement("option");
    tagOption.innerHTML = tag["name"];
    tagOption.value = tag["id"];
    tagOption.id = "option" + tag["id"];
    selectTags.appendChild(tagOption);
  });
});
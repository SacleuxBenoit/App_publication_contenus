// fetch api Tags

fetch("https://127.0.0.1:8000/api/tags", {
    method: "GET"
})
    .then(response => response.json())
    .then(function (tags){
        var tagsList = tags["hydra:member"];
        tagsList.forEach(tag => {
            var addTag = document.createElement("option");
            addTag.value = `${tag.id}`
            addTag.innerHTML = `${tag.id}: ${tag.name}`;
            document.querySelector('#tagsListe').appendChild(addTag);
        })
    });

var modification = document.querySelector("#modifTag");
var modificationText = document.querySelector("#modifText");

modification.addEventListener("click", () => {
    var modifTag = parseInt(selectedTag.value);
    var requestName = {
        "name": modifText.value
    };
    fetch(`https://127.0.0.1:8000/api/tags/${modifTag}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(requestName)
    });
})
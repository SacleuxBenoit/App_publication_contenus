// call id
var selectedTag = document.querySelector("#tagsListe");
var deleteThisTag = document.querySelector("#deleteTag");

// get api for select
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
    
// delete tag in select
deleteThisTag.addEventListener("click", () =>{
    var deleteTag = parseInt(selectedTag.value);
    fetch(`https://127.0.0.1:8000/api/tags/${deleteTag}`, {
        method: "DELETE"
    });
});
// fetch categories for cloud_word

fetch("https://127.0.0.1:8000/api/categories", {
    method: "GET"
})
    .then(response => response.json())
    .then(function (categories){
        let categoryList = categories["hydra:member"];
        categoryList.forEach(category => {
            let articleAssigned = category.articles.length;
            if (articleAssigned == 1) {
                var rand = 1;
            } else if (articleAssigned == 2){
                var rand = 2;
            } else if (articleAssigned == 3){
                var rand = 3;
            }else if (articleAssigned >= 4){
                var rand = 5;
            } else{
                var rand = 0;
            }
            var addCategory = document.createElement("li");
            addCategory.innerHTML = `<a href="${category.name}" data-weight="${rand}" >${category.name}</a>`;
            document.querySelector("#listeCategories").appendChild(addCategory);
        })
    });

// fetch tags for cloud_word

fetch("https://127.0.0.1:8000/api/tags", {
    method: "GET"
})
    .then(response => response.json())
    .then(function (tags){
        let tagsList = tags["hydra:member"];
        tagsList.forEach(tag => {
            let tagAssigned = tag.articles.length;
            if (tagAssigned == 1) {
                var rand = 1;
            } else if (tagAssigned == 2){
                var rand = 2;
            } else if (tagAssigned >= 4){
                var rand = 3;
            }else if (tagAssigned == 6){
                var rand = 4;
            }else if (tagAssigned >= 8){
                var rand = 5;
            } else{
                var rand = 0;
            }
            let addTag = document.createElement("li");
            addTag.innerHTML = `<a href="${tag.name}" data-weight="${rand}" >${tag.name}</a>` ;
            document.querySelector("#listeTag").appendChild(addTag);
        })
    });

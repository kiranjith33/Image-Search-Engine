

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")

 const accessKey = "eTa7lxSfOyIya7jjZDixTf5K3BHTnt5qsba86uxnC5I";

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.ariaValueMax;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
     const response = await fetch(url);
     const data = await response.json();

     const results = data.results;
     results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
        console.log(searchResult);
     })


}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();

})
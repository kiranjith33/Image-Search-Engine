
     // Creating the Variables

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")

        //    Unsplash API Key

 const accessKey = "vuxWfvG_NrEc1bdYMnJmPNzmiCx-4CKLz1jNZvRpn8s";

let keyword = "";
let page = 1;

    // Async Function For Calling the API

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=30`;
     const response = await fetch(url);
     const data = await response.json();
      


      if(page === 1){
        searchResult.innerHTML = "";
      }

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
        //  For Show More Button
    
        showMoreBtn.style.display = "block";


}
          // Adding the Click Function
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();

})
    showMoreBtn.addEventListener("click",() =>{
        page++;
        searchImages();

    })
    


// `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
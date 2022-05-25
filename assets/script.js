// personal-access token: rtZFkbTuxtASTDgIPiCnrQApzZQfZflVQXSnoZkb
// create variables to store DOM elements below.
let resultsContainerEl = document.getElementById("results-container");
let searchBarEl = document.getElementById("search");
let searchFieldEl = document.getElementById("search-field");
let submitBtnEl = document.getElementById("submit-btn");
let clearBtnEl = document.getElementById("clear-results");

// discogs data.results[].title = title
// discogs data.results[].id = id
// discogs data.results[].label = label
// discogs data.results[].genre = genre
// discogs data.results[].format = formats
// discogs data.results[].thumb = thumbnail image
// discogs data.results[].year = year of release

 

// upon click, function to render render fetched music data to results-containerEl, display function
var displaySearchResults = function (data) {
    resultsContainerEl.setAttribute("style", "width: 500px;");         
    resultsContainerEl.setAttribute("style", "height: 700px;");
    resultsContainerEl.setAttribute("style", "display: flex;");
    resultsContainerEl.setAttribute("style", "flex-direction: column;");

    
    for (let i = 0; i < data.length; i++) {
        if (data.results > 0) {
            // id
            let id = data.results[i].id;
            let resultsCard = document.createElement('div');
            resultsCard.setAttribute("style", "border: solid black 2px;");
        // artist
            let type = data.results[i].type;
            let typeHeading = document.createElement("h4");
            typeHeading.innerHTML = "type: " + type;
            typeHeading.setAttribute("style", "font-weight: bold;");

            resultsContainerEl.appendChild(resultsCard);
            resultsCard.appendChild(typeHeading);
        }
    }
    // create new document.create elements such as headings, cards, imgs, etc. that will all be appended by the results container el and by their parents.

};


var getMusicData = function (music) {
    // "music is a parameter that will be replaced when called with argument in the submit button eventhandler."
    var discogsUrl = "https://api.discogs.com/database/search?q="+ music +"&page=1&per_page=10&type=artist&token=rtZFkbTuxtASTDgIPiCnrQApzZQfZflVQXSnoZkb";
    fetch(discogsUrl).then(function (response) {
        if (!response.ok) {
            throw Error("ERROR");
        }
      response.json().then(function(data) {
      console.log(data);
      displaySearchResults(data);  
      })
      .catch(function (error) {
          console.log(error)
      
     // if (data.results.length === 0) {
        //     alert(error); 

        // }
                   
            
        });
    });
};
    
// function to clear previous searches

// Add eventListener or handler for search button, call top two functions
submitBtnEl.addEventListener("click", function(e) {
    e.preventDefault();
    console.log('button was clicked');
    var music = searchFieldEl.value;
    console.log(music);
    getMusicData(music);
})
// Add eventListener or handler for  the clear searches button

// set previous searches to localStorage

// code to append and display previous searches to page






// get localStorage on page load


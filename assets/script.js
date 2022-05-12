// personal-access token: rtZFkbTuxtASTDgIPiCnrQApzZQfZflVQXSnoZkb
// create variables to store DOM elements below.
 let resultsContainerEl = document.getElementById("results-container");
 let searchBarEl = document.getElementById("search");
 let submitBtnEl = document.getElementById("submit-btn");
 let clearBtnEl = document.getElementById("clear-results");



 

// upon click, function to render render fetched music data to results-containerEl, display function


// fetch api data based on search input, use api key with appropriate query and pagination parameters, etc.
    var getMusicData = function (music) {
        // "music is a parameter that will be replaced when called in the submit button eventhandler."
        var discogsUrl = "https://api.discogs.com/database/search?q=Nirvana&token=rtZFkbTuxtASTDgIPiCnrQApzZQfZflVQXSnoZkb";
        fetch(discogsUrl).then(function (response) {
            response.json().then(function(data) {
                console.log(data);
            })
        })
    }
    // error handling to be added above or below, not sure.
// function to clear previous searches

// Add eventListener or handler for search button, call top two functions

// Add eventListener or handler for  the clear searches button

// set previous searches to localStorage

// code to append and display previous searches to page






// get localStorage on page load
getMusicData();
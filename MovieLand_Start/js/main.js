const APIKey = 'b0aaca8a'
const APIUrl = `http://www.omdbapi.com/?apikey=${APIKey}&`
const searchBox = document.getElementById('searchBox')
const searchButton = document.getElementById('searchButton')
const card = document.querySelector('.card')
 
card.style.display = 'none'

searchButton.addEventListener('click', search)

function search(){
loadData(searchBox.value)

}

 async function loadData(query){
    card.style.display = 'block'
    try{


        const response =  await fetch(APIUrl + 't='+query)
        const json = await response.json()
        displayData(json)
        console.log(json);
        
        } catch(error) {

            console.log(error);
        }


    }
    function displayData(json){

        const movieTitle = document.querySelector('.card-title')
        movieTitle.innerText=json.Title
        const movieData = document.querySelector('.card-text')
        movieData.innerText=json.Plot
        const image = document.querySelector('.card-img-top')
        const moviePoster = json.Poster
        if(json.Poster == "N/A"){
            image.src = './img/imagenotfound.jpg'
            
        } else{
            image.src = moviePoster

        }
        const movieRating = document.querySelector('.card-rating')
        movieRating.innerText = json.imdbRating
        const movieRated = document.querySelector('.card-rated')
        movieRated.innerText = "Rated: "+ json.Rated
        const movieRelease = document.querySelector ('.card-year')
        movieRelease.innerText = "Released in " + json.Year
        const movieId = json.imdbID
        const buttonSearch = document.querySelector('#link')
        buttonSearch.setAttribute('href', `https://www.imdb.com/title/${movieId}`)
        buttonSearch.href = `https://www.imdb.com/title/${movieId}`


    

    }
  

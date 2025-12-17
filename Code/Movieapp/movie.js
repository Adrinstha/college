let searchBox=document.getElementById("searchBox")
let title= document.getElementById("title");
let year= document.getElementById("year");
let rating=document.getElementById("rating");
let duration=document.getElementById("duration");
let genre=document.getElementById("genre");
let director=document.getElementById("director");
let stars=document.getElementById("stars");
let poster=document.getElementById("poster");
async function getMovieData(movieName) {
    try{
        let response=await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=da3f2b5d`);
        console.log(response);
        let data = await response.json();//converting my json data into js
        console.log(data);
        title.innerText=`${data.Title}`
        year.innerText=`${data.Year}`
        rating.innerText=`${data.Rated}`
        duration.innerText=`${data.Runtime}`
        genre.innerText=`Genre: ${data.Genre}`
        director.innerText=`Directed by: ${data.Director}`
        stars.innerText=`Starring: ${data.Actors}`
        poster.src=`${data.Poster}`

    }
    catch(error){
        console.log(error);
    }
    
}
getMovieData("Black Widow")
searchBox.addEventListener("click", function(){
    let searchInput=document.getElementById("searchBox").value;
    getMovieData(searchInput);
})
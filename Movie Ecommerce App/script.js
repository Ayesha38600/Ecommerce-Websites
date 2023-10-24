// 

let ApiKey = "45583419";
let searchInput = document.getElementById("searchInput")
let searchBtn = document.getElementById("searchBtn")

let getData = async(movie)=>{
try{
    let fetchData = await fetch(`https://www.omdbapi.com/?apikey=${ApiKey}&t=${movie}`);

    // console.log(fetchData);
    // console.log("ay");
    let jsonData = await fetchData.json();
    console.log(jsonData);
    document.querySelector(".card").innerHTML = ""
    searchInput.value =""
    

    let div = document.createElement("div");
    div.classList.add("movieCard");
    div.innerHTML = `
    <img src="${jsonData.Poster}" alt="" />
        <div class="cardText">
          <h1 class="david">${jsonData.Title}</h1>
          <p>Ratings : <span>${jsonData.Ratings[0].Value}</span></p>
          <a href="">${jsonData.Genre}</a>
          <p>Release : <span>${jsonData.Released}</span></p>
          <p>Duration : <span>${jsonData.Runtime}</span></p>
          <p>Description : <span>${jsonData.Plot}</span></p>
        
        </div>
    
    
    
    `

document.querySelector(".card").appendChild(div)

}
   catch(error){
    document.querySelector(".card").innerHTML ="<h1>Enter Valid Name</h1>"
   } 

}
searchBtn.addEventListener("click" , function name(params) {
    let movieName = searchInput.value ;
    if (movieName !="") {
        getData(movieName)
        
    }
    else{
        alert("Please Enter Movie Name")
    }
})
// getData()
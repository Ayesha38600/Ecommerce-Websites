let card = document.querySelectorAll(".card");
let num = 0;
document.querySelector(".cardItems").style.display = "none" 
card.forEach(function (cards) {
    cards.addEventListener("click" , function (params) {
        console.log(cards);

        document.querySelector(".cardItems").style.display = "block" 
        
num ++;
document.querySelector("#cartNum").innerHTML = num; 
        let div = document.createElement("div");
        div.classList.add("cardList");
        
        
        div.innerHTML = `
        <i class="fa-solid fa-xmark" onclick= "remove()"></i>
        <img src="${cards.firstElementChild.src}" alt="">
        <p>$199</p>
        
        
        
        
        
        
        
        
        
        `

        document.querySelector(".cardItems").appendChild(div)
    })
    
})


function remove(){
    num--;
    let cartList = document.querySelectorAll(".cardList");
    cartList.forEach(function (currentItem) {
        currentItem.addEventListener("click" , function (params) {
            if (num == 0) {
                document.querySelector(".cardItems").style.display = "none" 
                
            }
            currentItem.style.display = "none" ;
            document.querySelector("#cartNum").innerHTML = num; 
        })
        
    })
}
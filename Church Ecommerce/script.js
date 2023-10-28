let slide = document.querySelectorAll(".rcard")
let card = document.querySelectorAll(".card");
let closeBtn = document.getElementById("closeBtn");
let connectBtn = document.getElementById("connectBtn");
let count = 0;

slide.forEach(function (slides , index) {
    slides.style.left = `${index * 100}%`
    
})

function myFun(params) {
    slide.forEach(function (currentValue) {
        currentValue.style.transform= `translateX(-${count *100}%)`
        
    })
    
}

setInterval(() => {
    count++;
    if (count==slide.length) {
        count =0;
        
    }
    myFun()
    
}, 2000);





card.forEach(function name(cards) {
    cards.addEventListener("click" , function name(params) {
        console.log(cards);
        document.querySelector(".detail").style.display = "block"


        document.querySelector(".content").innerHTML = `
        <img src="${cards.firstElementChild.src}" alt="">
        
        <div class="contentText">
        <h1>Alexa Zoan</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, ipsam?</p>
      </div>
    </div>
        
        
        
        `
        

        closeBtn.addEventListener("click" , function name(params) {
            document.querySelector(".detail").style.display = "none"
            
        })
    })
    
})


connectBtn.addEventListener("click" , function name(params) {
    let email = document.getElementById("email")
    let pass = document.getElementById("pass")

    if(email.value == "" && pass.value == ""){
        alert("please enter credentials")
    }

    else{
        alert("you logged in!")
    }
    
})











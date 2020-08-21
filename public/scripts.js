const modalOverlay = document.querySelector('.modalOverlay')

const imageModal = document.querySelector('.image-modal')

const cards = document.querySelectorAll('.card')


for (let i = 0; i < cards.length; i++) {
    const card = cards[i]

    card.addEventListener("click", function(){   

        const imgElement = card.querySelector(".card-img img").src
        const titleElement = card.querySelector(".title-hover").innerHTML
        const byElement = card.querySelector(".by-card").innerHTML
        
        
        modalOverlay.classList.add("active")
        modalOverlay.querySelector(".mTitle").innerHTML= `${titleElement}`
        modalOverlay.querySelector(".by").innerHTML= `${byElement}`
        modalOverlay.querySelector("#mImg").src=`${imgElement}`
           

    }) 
    
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    
})



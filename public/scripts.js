const img = document.querySelector('.img-logo img')

const cards = document.querySelectorAll('.card')

const ocultButton = document.querySelector('.ocult-ul')

const ocultButton2 = document.querySelector('.ocult-prepare')

const ocultButton3 = document.querySelector('.ocult-information')

const listIngredients = document.querySelector('.list-ingredients')

const howPrepare = document.querySelector('.how-prepare')

const information = document.querySelector('.information')

for (let i = 0; i < cards.length; i++) {
    const card = cards[i]

    card.addEventListener("click", function(){   
        const cardId = i

        window.location.href=`/recipes/${cardId}`
     }) 
    
}

img.addEventListener("click", function(){

    window.location.href = `/`

})



ocultButton.addEventListener("click", function () {
    if (listIngredients.classList.contains('active')) {
        listIngredients.classList.remove('active')
    } else {
        listIngredients.classList.add('active')
    }
})  
  
ocultButton2.addEventListener("click", function () {
    if (howPrepare.classList.contains('active')) {
        howPrepare.classList.remove('active')
    } else {
        howPrepare.classList.add('active')
    }
})  
  
ocultButton3.addEventListener("click", function () {
    if (information.classList.contains('active')) {
        information.classList.remove('active')
    } else {
        information.classList.add('active')
    }
})  





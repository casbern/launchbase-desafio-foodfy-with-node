function getModalOverlay() {
  return document.querySelector('.modal-overlay')
}

function getCards() {
  return document.querySelectorAll('.card')

}

if (getModalOverlay()) {
  displayModal()
  addCloseModalHandler()
}

function displayModal() {

  let modalOverlay = getModalOverlay()
  let cards = getCards()

  for (let card of cards) {
    card.addEventListener("click", function () {
      modalOverlay.classList.add('active')

      let imgSrc = card.querySelector(".card__image-container img").src
      let recipeName = card.querySelector(".card__recipe-name").textContent
      let authorName = card.querySelector(".card__author").textContent

      modalOverlay.querySelector(".modal-content img").src = imgSrc
      modalOverlay.querySelector(".modal__recipe-name").innerHTML = recipeName
      modalOverlay.querySelector(".modal__author").innerHTML = authorName
    })
  }
}

function addCloseModalHandler() {
  let modalOverlay = getModalOverlay()

  document.querySelector(".modal__close").addEventListener(
    "click",
    function () {
      modalOverlay.classList.remove("active")
    }
  )
}

/* ==== Links ==== */

function linkActive(id, pathname) {
  //console.log(`linkActive(id=${id}, pathname=${pathname}) was called`)
  
  const link = document.querySelector(id)

  if (document.location.pathname.includes(pathname)) {
    //console.log(`if was executed for id ${id} and pathname ${pathname}`)
    link.classList.add("active")
    
  }
}

linkActive('#about', "about.html")
linkActive('#recipes', "recipes.html")
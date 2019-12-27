const showHide = document.querySelectorAll('h4')

console.log(showHide)

for(showHide of showHides) {

  let selector = document.querySelector('.topic-content')

  showHide.addEventListener('click', function() {

    console.log(showHide.innerHTML)

    if (showHide.innerHTML === 'MOSTRAR') {
      //add class

      alert('cliquei no mostrar')

      //style

    } else if (showHide.innerHTML === 'ESCONDER') {
      //add class

      //style

      alert('cliquei no esconder')

    }
  })
 }

/* ==== Links ==== */

function linkActive(id, pathname) {
 //console.log(`linkActive(id=${id}, pathname=${pathname}) was called`)

  const link = document.querySelector(id)

  //console.log(link)

  if (document.location.pathname.includes(pathname)) {
    //console.log(`if was executed for id ${id} and pathname ${pathname}`)
    link.classList.add("active")
    
  }
}

linkActive('#about', "/about")
linkActive('#recipes', "/recipes")
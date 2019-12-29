let showHides = document.querySelectorAll('h4')

for (showHide of showHides) {


  showHide.addEventListener('click', function () {


    console.log(`this is the h4 I clicked`)

    console.log(showHide.innerHTML)

    if (showHide.innerHTML === 'MOSTRAR') {
      //add class

      //let selector = document.querySelector('.topic-content')

      alert('cliquei no mostrar')

      //   //       //style

    } else {
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
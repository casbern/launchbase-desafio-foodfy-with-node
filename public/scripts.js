let showHides = document.querySelectorAll('h4')

// some test comment

for (showHide of showHides) {

  console.log('showHide outside the addEventListener is')
  console.log(showHide)

  showHide.addEventListener('click', function (event) {


    console.log(`this is the h4 I clicked`)
    console.log(event.target)

      console.log(`this is the h4 innerHTML`)
      console.log(event.target.innerHTML)


    if (event.target.innerHTML === 'MOSTRAR') {
      //add class

      //let selector = document.querySelector('.topic-content')

      console.log('cliquei no mostrar')

      //   //       //style

    } else {
      //add class

      //style

      console.log('cliquei no esconder')

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

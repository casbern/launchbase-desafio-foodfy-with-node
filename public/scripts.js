let showHides = document.querySelectorAll('h4')

function showTopic(h4IdName) {

  let id = '#topic-' + h4IdName

  let idDom = document.querySelector(id)

  idDom.classList.remove("hide")
}

function hideTopic(h4IdName) {

  let id = '#topic-' + h4IdName

  let idDom = document.querySelector(id)

  idDom.classList.add("hide")
}

for (showHide of showHides) {

  showHide.addEventListener('click', function (event) {

    let h4Id = event.target.id
    let h4IdArray = h4Id.split('-')
    let h4IdName = h4IdArray[h4IdArray.length - 1]


    if (event.target.innerHTML === "MOSTRAR") {

      event.target.innerHTML = "ESCONDER"

      showTopic(h4IdName);

    } else {

      event.target.innerHTML = "MOSTRAR"

      hideTopic(h4IdName);

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
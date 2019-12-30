let showHides = document.querySelectorAll('h4')

function showTopic() {

  let topicId = document.querySelector("#topic-content")

  topicId.classList.remove("topic-content")
}

function hideTopic() {

  let topicId = document.querySelector("#topic-content")

  topicId.classList.add("topic-content")
}

for (showHide of showHides) {

  showHide.addEventListener('click', function (event) {

    if (event.target.innerHTML === 'MOSTRAR') {

      event.target.innerHTML = "ESCONDER"

      showTopic();

    } else {

      event.target.innerHTML = "MOSTRAR"

      hideTopic();

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
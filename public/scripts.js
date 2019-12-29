let showHides = document.querySelectorAll('h4')
let sectionName; // this will be set as either ingredients, preparation or information


function showTheTopic(sectionName) {

  let topicId = 'topic-content-' + sectionName
  console.log(topicId)
}

function hideTheTopic(sectionName) {

  let topicId = 'topic-content-' + sectionName
  console.log(topicId)
}

for (showHide of showHides) {

  showHide.addEventListener('click', function (event) {

    let h4Id = event.target.id

    let h4IdArray = h4Id.split('-')
    sectionName = h4IdArray[h4IdArray.length - 1]

    if (event.target.innerHTML === 'MOSTRAR') {

      console.log('cliquei no mostrar')

      showTheTopic(sectionName);

    } else {
      console.log('cliquei no esconder')

      hideTheTopic(sectionName);

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
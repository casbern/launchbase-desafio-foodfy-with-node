let showHides = document.querySelectorAll('h4')
let sectionName; // this will be set as either ingredients, preparation or information


function showTheTopic(sectionName) {

  let topicId = 'topic-content-' + sectionName

}


function hideTheTopic(sectionName) {

  let topicId = 'topic-content-' + sectionName

}

for (showHide of showHides) {

  showHide.addEventListener('click', function (event) {

    let h4Id = event.target.id

    /*
      The idea is like this. We make a convention. We give these ids to h4:
      show-hide-ingredients
      show-hide-preparation
      show-hide-information

      We call his last bit of each id: sectionName

      Why? So we identify each of these sections/topics in a unique way.
      So the sectionNames will be:
      - ingredients
      - preparation
      - information

      And then, we add ids to the topic-content div like:
      topic-content-ingredients
      topic-content-preparation
      topic-content-information

      The idea is, when you click on on h4, you split that id (show-hide-ingredients)
      and you take the last element: ingredients

      Then you pass this to the showTheTopic(sectionName) so sectionName becomes ingredients.
      Then we know we need to show (add css class to show) the div id id topic-content-ingredients

      So we use a naming convention to make the onnection between the h4 with id="show-hide-ingredients"
      and the div with id="topic-content-ingredients"

      */

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
let showHides = document.querySelectorAll('h4')

function showTheTopic(sectionName) {
    console.log(`function showTheTopic(${sectionName}) has just been called`)

    let topicId = 'topic-content-' + sectionName

    console.log('the div we need to show has id: ' + topicId)
    console.log('***********')

}


function hideTheTopic(sectionName) {
    console.log(`function hideTheTopic(${sectionName}) has just been called`)

    let topicId = 'topic-content-' + sectionName

    console.log('the div we need to hide has id: ' + topicId)
    console.log('***********')

}


// some test comment
let sectionName; // this will be set as either ingredients, preparation or information


for (showHide of showHides) {

  console.log('showHide outside the addEventListener is')
  console.log(showHide)

  showHide.addEventListener('click', function (event) {


    console.log(`this is the h4 I clicked`)
    console.log(event.target)

      console.log(`this is the h4 innerHTML`)
      console.log(event.target.innerHTML)

      console.log('this is the id of the h4')
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

      console.log(h4Id)

      h4IdArray = h4Id.split('-')
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

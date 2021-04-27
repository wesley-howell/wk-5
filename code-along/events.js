// Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// Get a reference to the bulleted list of movies
let movieList = document.querySelector(`.movies-to-watch`)

// Add an new list item to the bulleted list of movies
movieList.insertAdjacentHTML(`beforeend`, `
  <li>Spaceballs</li>
`)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

// => START WH CLASS NOTES / CODE

// get a reference to the click me button in memory
let ClickMeButton = document.querySelector(`.click-me`)

// event listener for the click me button
ClickMeButton.addEventListener(`click`, async function(event) {
  alert(`the button was clicked`)
  // Get a reference to the page title element from the DOM
  let pageTitleElement = document.querySelector(`.page-title`)

  // Modify the page title element's contents
  pageTitleElement.innerHTML = `Movies to watch!`
})
  // `click` tells what event we are listening for --- 99% of time the event will be 'click'
  // curly braces contain the function you want to run

  
// get a reference to the add movie link
let addMovieLink = document.querySelector(`.add-movie`)

// build an event listener for add movie link
addMovieLink.addEventListener(`click`, async function(event) {
  // prevent default behavior of add a movie button (prevent going to google when button clicked)
  event.preventDefault() 
  
  // Get a reference to the bulleted list of movies
  let movieList = document.querySelector(`.movies-to-watch`)

  // Add an new list item to the bulleted list of movies
  movieList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
  `)
})
// get a reference to the 'zoom image' button
let zoomImageButton = document.querySelector(`.zoom-image`)

// event listener for zoom image button
zoomImageButton.addEventListener(`click`, async function(event) {
  // Get a reference to the image
  let image = document.querySelector(`img`)

  // Add the `border-pink-500` class to the image element
  image.classList.add(`border-pink-500`)

  // make the image larger
  image.classList.remove(`w-96`)
  image.classList.add(`w-full`)
})

// get referene to the change image button
let changeImageButton = document.querySelector(`.change-image`)

// event listener for change image button
changeImageButton.addEventListener(`click`, async function(event) {
  // get a reference to the image
  let image = document.querySelector(`img`)

  // change the image (changing attributes contained in <img src="....")
  image.setAttribute(`src`, `../images/grogu2.jpg`)
})

// grab a reference to say hi button 
let sayHiButton = document.querySelector(`.say-hi`)

// event listener for say hi button
sayHiButton.addEventListener(`click`, async function(event) {
  // prevent the default behavior
  event.preventDefault()

  // get a reference to the input field that holds the first name
  let nameInput = document.querySelector(`#first-name`)

  // get the value from the input field
  let firstName = nameInput.value 

  // get a reference to the greet element
  let greetElement = document.querySelector(`.greet`)

  // first name should have value in order to generate 'hi, [name]' response
  if (firstName.length > 0) {
    // create a sentence to put in the 'greet' element
    let sentence = `Hi, ${firstName}!`

    // set the 'greet' element's HTML to the sentence
    greetElement.innerHTML = sentence
  } else {
    greetElement.innerHTML = ``
  }
   
})

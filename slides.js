//Pic all of the images and layer them based on z-index
const slideArea = document.querySelector('div.slides')
const images = slideArea.querySelectorAll('img')

//keep track of two things; which slider are we on, and what is the z-index
let currentSlide = 0
let z = 1

//when i click the slide area change the slide via z-index
slideArea.addEventListener('click', function() {
  currentSlide = currentSlide + 1
  //Loops the imaages if the current slide is grater then the number of images
  if (currentSlide > images.length -1){
      	currentSlide = 0
      }
  z = z + 1
  // Remove animation from the syle for all images after they have been apllied so thay can be aplied again 
  images.forEach(image => {
    image.style.animation = ""
  })
  //pic the right image
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fadein 0.5s" 
})



//When I mouse over - randomize image placement
slideArea.addEventListener('mouseover', function () {
  images.forEach(image => {
    // How to get a random number that is based on a "grid"
    //random(.0 to .99) * 5 = a number between 0 and 5. Floor Rounds down to the nearest intager. 0, 1, 2, 3, 4. This gives us 5 numbers to play with. Maltiply them by 25 gives us 0, 25, 50, 75, 100. Subtract 50 gives us even negative and posative random numbers. -50, -25, 0, 25, 50.  
    const x = 25 * (Math.floor(Math.random() * 5 )) - 50
    const y = 25 * (Math.floor(Math.random() * 5 )) - 50
    image.style.transform = `translate(${x}px, ${y}px)`
  })
})
//Random Number between -50 and 50
// const x = 100 * Math.random() - 50
//const y = 100 * Math.random() - 50

//When mouse out - go back to original location
slideArea.addEventListener('mouseout', function () {
  images.forEach(image => {
    image.style.transform = ""
  })
})
const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")


//when the togle tag is clicked, togle a class of open on the main tag
//if its open make the menu say closed
//if closed say open
toggleTag.addEventListener("click", function (){
	mainTag.classList.toggle("open")
  if (mainTag.classList.contains("open")){
    toggleTag.innerHTML = '<img src="close.svg"> Close'
  }
  else {
    toggleTag.innerHTML = '<img src="menu.svg"> Menue'
  }
})
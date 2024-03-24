/** creating eventlistener for button to show and hide navbar **/
let togglebtn=document.querySelector(".togglebtn");
let nav=document.querySelector(".navlinks");
let links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})


let typed=new Typed(".input",{
    strings:["Coder","Student"],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
})


/* creating eventlistener for button to show and hide navbar */
let aboutMeBtn = document.getElementById("aboutMeBtn")
aboutMeBtn.addEventListener("click", function(event) {
  let textContainer = document.getElementById("aboutMe");

  /*
  if (textContainer.style.display === "none")
    textContainer.style.display = "block";
  else
    textContainer.style.display = "none";
  */

  if (textContainer.style.color == "rgb(229, 229, 229)")
    textContainer.style.color = "#222";
  else
    textContainer.style.color = "#e5e5e5";
});

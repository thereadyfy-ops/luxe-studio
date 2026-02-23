window.addEventListener("scroll", function(){

let header = document.getElementById("header");

header.classList.toggle("scrolled", window.scrollY > 50);

});

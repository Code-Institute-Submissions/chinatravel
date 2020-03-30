$(document).ready(function() {
//For navbar toggler icon
   

//For scroll to top 
  mybutton = document.getElementById("toTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTopBtn").style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  
  }
}
});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; //Safari browser
  document.documentElement.scrollTop = 0;  //Chrome, Firefox, IE browsers
}





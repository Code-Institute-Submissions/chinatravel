
//For scroll to top 
$ ( document ).ready(function() {
  mybutton = document.getElementById("toTopBtn");


//For scroll to top ::::Get the button:
$( document ).ready(function() {
mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // document.getElementById("toTopBtn").style.display = "block";
  } else {
    // toTopBtn.style.display = "none";
  
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; //Safari browser
  document.documentElement.scrollTop = 0;  //Chrome, Firefox, IE browsers
}
});
}

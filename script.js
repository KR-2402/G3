window.addEventListener('scroll',reveal);
function reveal()
{
  var reveals=document.querySelectorAll('.reveal');

for ( var i=0;i< reveals.length;i++)
  {
    var windowheight=window.innerHeight; 
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;
    if(revealtop< windowheight-revealtop)
      {
        reveals[i].classList.add('active');
      }
  }
}
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}
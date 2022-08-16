<!-- JAVASCRIPT -->
<!-- Finalized javascript -->

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  alert("Offer : Free boxing gear if you signup before December 2022!!");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
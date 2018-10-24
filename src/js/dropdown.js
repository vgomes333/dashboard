var btnDropdown = document.querySelector("#dropdownBtn");
var body = document.querySelector(".principal-content");

btnDropdown.addEventListener("click", function(){
  document.getElementById("dropdown-items").classList.toggle("showDropdown");
});

body.addEventListener("click", function(){
  document.getElementById("dropdown-items").classList.remove("showDropdown");
});
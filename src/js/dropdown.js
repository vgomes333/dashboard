var btnOpenMenu = document.querySelector(".header-hamburger");
var btnCloseMenu = document.querySelector(".header-close");
var openSubMenu = document.querySelector(".menu-dropdown");
var dropdownClosed = document.querySelector(".expand-more");
var dropdownOpened = document.querySelector(".expand-less");
var body = document.querySelector(".principal-content");

// Open Menu Mobile
btnOpenMenu.addEventListener("click", function(){
  document.getElementById("menu").style.display = "flex";
  btnOpenMenu.style.display = "none";
  btnCloseMenu.style.display = "flex";
});

// Close Menu Mobile
btnCloseMenu.addEventListener("click", function(){
  document.getElementById("menu").style.display = "none";
  document.getElementById('submenu').style.display = "none";
  btnOpenMenu.style.display = "flex";
  btnCloseMenu.style.display = "none";
  dropdownClosed.style.display = "inline";
  dropdownOpened.style.display = "none";
  
  body.addEventListener("click", function(){
    document.getElementById("menu").style.display = "none";
    document.getElementById('submenu').style.display = "none";
    btnOpenMenu.style.display = "flex";
    btnCloseMenu.style.display = "none";
    dropdownClosed.style.display = "inline";
    dropdownOpened.style.display = "none";
  });
});

// Show Subitem Menu
openSubMenu.addEventListener("click", function(){
  document.getElementById('submenu').style.display = "block";
  document.getElementById('submenu').classList.add("submenu-active");
  document.getElementById('submenu').classList.remove("menu-dropdown");
  
  // Altera o icone de seta
  dropdownClosed.style.display = "none";
  dropdownOpened.style.display = "inline";
});
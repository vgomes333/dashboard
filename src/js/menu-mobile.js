var hamburger = document.querySelector(".header-hamburger"); 
var close = document.querySelector(".header-close");
var menuMobile = document.querySelector(".header-menu");

hamburger.addEventListener("click", function(){
    hamburger.style.display = "none";
    close.style.display = "block";
    menuMobile.style.display = "flex";
});

close.addEventListener("click", function(){
    hamburger.style.display = "block";
    close.style.display = "none";
    menuMobile.style.display = "none";
});
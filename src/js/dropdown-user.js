var user = document.querySelector(".header-user");
var submenuUser = document.querySelector("#user-submenu");
var icoExpandLessUser = document.querySelector(".expand-less-user");
var icoExpandMoreUser = document.querySelector(".expand-more-user");

function showSubmenuUser() {
    if(submenuUser.classList.contains("showOptions")){
        submenuUser.style.display = "none";
        submenuUser.classList.remove("showOptions");
        icoExpandLessUser.style.display = "none";
        icoExpandMoreUser.style.display = "inline"; 
    } else{
        submenuUser.style.display = "flex";
        submenuUser.classList.add("showOptions");   
        icoExpandLessUser.style.display = "inline";
        icoExpandMoreUser.style.display = "none";
        
        body.addEventListener("click", function(){
            submenuUser.style.display = "none";
            submenuUser.classList.remove("showOptions");
            icoExpandLessUser.style.display = "none";
            icoExpandMoreUser.style.display = "inline";         
        });
    }
}

user.addEventListener("click", showSubmenuUser)
const button=document.getElementById("button");
const footer=button.parentElement;
const mobileShare = footer.querySelector(".mobile-share");  
const desktopShare = footer.querySelector(".desktop-share"); 
const userInfo = footer.querySelector(".user-info");

button.addEventListener("click",displayProfileLinks);
let isActive=false;

function displayProfileLinks(){
    if(!isActive){
        button.classList.replace("bg-LightGrayishBlue","bg-desaturatedDarkBlue");
        button.firstElementChild.setAttribute("src","./images/icon-share-white.svg");
        footer.classList.add("bg-veryDarkGrayishBlue","md:bg-white");
        userInfo.classList.add("hidden","md:flex");
        desktopShare.classList.add("md:flex");
        mobileShare.classList.remove("hidden");
        mobileShare.classList.add("md:hidden");
        isActive=true;
    }
    else{
        button.classList.replace("bg-desaturatedDarkBlue","bg-LightGrayishBlue");
        button.firstElementChild.setAttribute("src","./images/icon-share.svg");
        footer.classList.remove("bg-veryDarkGrayishBlue","md:bg-white");
        userInfo.classList.remove("hidden","md:flex");
        desktopShare.classList.remove("md:flex");
        mobileShare.classList.remove("md:hidden");
        mobileShare.classList.add("hidden");
        isActive=false;
    }
}
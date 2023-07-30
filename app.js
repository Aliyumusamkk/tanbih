var showNave = document.getElementById("showNave");
var hideNav = document.getElementById("hideNav");
var navlink = document.getElementById("navlink");
let loader = document.querySelector(".loader")

window.addEventListener("load", () =>{
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend,", () => {
        document.body.removeChild("loader");
    })
})



showNave.onclick = () => {
    navlink.style.right = "0";
}

hideNav.onclick = () => {
    navlink.style.right = "-200px";
}


$(document).ready(function(){

    $(".one").click(function(){

        $(this).addcClass("active").siblings().removeClass("active");
    });
});

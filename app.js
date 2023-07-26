var showNave = document.getElementById("showNave");
var hideNav = document.getElementById("hideNav");
var navlink = document.getElementById("navlink")


showNave.onclick = () => {
    navlink.style.right = "0";
}

hideNav.onclick = () => {
    navlink.style.right = "-200px";
}

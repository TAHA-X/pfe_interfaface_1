// header
var list_icon = document.getElementById("list_icon");
var ul_navbar = document.getElementById('ul_navbar');
var close_icon = document.getElementById('close_icon');
list_icon.addEventListener("click",()=>{
    ul_navbar.style.transform = "translateX(0px)";
    close_icon.style.display="block";
    list_icon.style.display="none";
})
close_icon.addEventListener("click",()=>{
    ul_navbar.style.transform = "translateX(-100%)";
    close_icon.style.display="none";
    list_icon.style.display="block";
})
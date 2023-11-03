const bars = document.querySelector(".fa-bars");
const nav = document.querySelector("nav");
const closeBtn =  document.querySelector(".fa-x");

bars.onclick = function(){
    nav.style.left = "0";
}

closeBtn.onclick = function(){
    nav.style.left = "-200px";
}

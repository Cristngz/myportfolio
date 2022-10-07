window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("navscroll",window.scrollY>0);
})
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 1475) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
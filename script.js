// nav berger
var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

// slide
let scrollContainer = document.querySelector(".slides");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft += 1200;
});
backBtn.addEventListener("click", ()=> {
    scrollContainer.scrollLeft -= 1200;
});

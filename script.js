const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () =>{
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("crolling-active", windowPosition);
});
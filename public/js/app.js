const toggleBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("is-active");
    mobileNav.classList.toggle("is-active");
});


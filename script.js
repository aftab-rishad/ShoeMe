function theme() {
  let moon = document.getElementById("moon");
  let sun = document.getElementById("sun");
  let html = document.getElementById("html");
  let userTheme = localStorage.getItem("theme");

  if (userTheme === "dark") {
    html.classList.add("dark");
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
  } else if (userTheme === "light") {
    html.classList.remove("dark");
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
  }

  moon.addEventListener("click", () => {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
  });

  sun.addEventListener("click", () => {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    moon.classList.remove("hidden");
    sun.classList.add("hidden");
  });
}
function smoothScroll() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  ScrollTrigger.normalizeScroll(true);

  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    normalizeScroll: true,
  });
}
function fixedNavbar() {
  let nav = document.getElementById("nav");
  window.addEventListener("scroll", () => {
    if (pageYOffset > 70) {
      nav.classList.add("md:backdrop-blur-2xl");
      nav.classList.add("md:bg-transparent");
      nav.classList.add("md:dark:bg-transparent");
    } else {
      nav.classList.remove("md:bg-transparent");
      nav.classList.remove("md:dark:bg-transparent");
      nav.classList.remove("md:backdrop-blur-2xl");
    }
  });
}
function manu() {
  let manuOpen = document.getElementById("manu-open");
  let manuClose = document.getElementById("manu-close");
  let navLink = document.getElementById("nav-link");

  manuOpen.addEventListener("click", () => {
    navLink.style.display = "flex";
    navLink.style.transition = "0.5s";
  });
  manuClose.addEventListener("click", () => {
    navLink.style.display = "none";
    navLink.style.transition = "0.5s";
  });
}

//Function Call - Start.
theme();
smoothScroll();
fixedNavbar();
manu();
//Function Call - End.

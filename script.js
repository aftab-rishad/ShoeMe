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
  const lenis = new Lenis({
    lerp: 0.05,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
function gsapAnimation() {
  let tl = gsap.timeline();
  gsap.from(".header-left-gsap", {
    x: -700,
    delay: 0.2,
    duration: 1.5,
    stagger: 0.2,
  });
  gsap.from(".header-right-gsap", {
    x: 700,
    delay: 0.2,
    duration: 1.5,
    stagger: 0.2,
  });
  tl.from("#header-shoe", {
    y: 25,
    duration: 1.5,
    yoyo: true,
    repeat: -1,
  });
  gsap.from(".blog-row .card", {
    y: -50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".blog-row .card",
      scroller: "body",
      // markers: true,
      start: "top 55%",
      end: "top 0%",
      scrub: 2,
    },
  });
  gsap.from(".new-arr-content", {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#new-arrivals",
      scroller: "body",
      // markers: true,
      start: "top 50%",
      end: "top 0%",
      scrub: 2,
    },
  });
  gsap.from("#new-arrival1", {
    y: 120,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#new-arrivals",
      scroller: "body",
      // markers: true,
      start: "top 55%",
      end: "top 10%",
      scrub: 2,
    },
  });
  gsap.from("#new-arrival3", {
    y: -120,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#new-arrivals",
      scroller: "body",
      // markers: true,
      start: "top 55%",
      end: "top 10%",
      scrub: 2,
    },
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
gsapAnimation();
fixedNavbar();
manu();
//Function Call - End.

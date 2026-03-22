const navLinks = document.querySelectorAll(".navbar ul li a");
const scrollSections = document.querySelectorAll(
  "#home, #services, #about, #contact",
);

window.onscroll = () => {
  let current = "";

  scrollSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 70) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
};

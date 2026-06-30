const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

const closeMenu = () => {
    navToggle?.setAttribute("aria-expanded", "false");
    navMenu?.classList.remove("open");
    document.body.classList.remove("menu-open");
};

navToggle?.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu?.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

const sections = [...document.querySelectorAll("main section[id]")];

const updateActiveLink = () => {
    let current = null;

    sections.forEach((section) => {
        const top = section.offsetTop - 110;
        if (window.scrollY >= top) {
            current = section;
        }
    });

    navLinks.forEach((link) => {
        link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`);
    });
};

window.addEventListener("scroll", updateActiveLink, { passive: true });
window.addEventListener("resize", updateActiveLink);
updateActiveLink();

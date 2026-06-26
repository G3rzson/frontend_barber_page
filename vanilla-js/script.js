import { NAVLINKS } from "./data.js";
import {
  generateNavLinks,
  generateMobileNavLinks,
} from "./generateNavLinks.js";

generateNavLinks(NAVLINKS);

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavClose = document.getElementById("mobile-nav-close");
const mobileNavLinks = document.getElementById("mobile-nav-links");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  document.body.style.overflow = mobileNav.classList.contains("hidden")
    ? ""
    : "hidden";
});

generateMobileNavLinks(NAVLINKS);

mobileNavClose.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
  document.body.style.overflow = "";
});

mobileNavLinks.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") {
    return;
  }

  mobileNav.classList.add("hidden");
  document.body.style.overflow = "";
});

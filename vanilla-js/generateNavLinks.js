export function generateNavLinks(navLinks) {
  const navContainer = document.querySelector("#nav-links");

  navLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = link.href;
    a.textContent = link.name;
    a.classList.add("nav-link");

    li.appendChild(a);
    navContainer.appendChild(li);
  });
}

export function generateMobileNavLinks(navLinks) {
  const mobileNavContainer = document.querySelector("#mobile-nav-links");

  navLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = link.href;
    a.textContent = link.name;
    a.classList.add("nav-link");

    li.appendChild(a);
    mobileNavContainer.appendChild(li);
  });
}

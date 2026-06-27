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

export function generateServicesCard(services) {
  const servicesContainer = document.querySelector("#services-container");

  services.forEach((service) => {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const price = document.createElement("p");
    const time = document.createElement("p");
    const button = document.createElement("button");

    li.classList.add("service-list-item");
    h3.classList.add("service-title");
    h3.textContent = service.title;
    price.textContent = "Ár: " + service.price + " Ft";
    price.classList.add("price", "service-price");
    time.textContent = "Időtartam: " + service.time;
    time.classList.add("service-time");
    button.type = "button";
    button.classList.add("service-book-btn");
    button.dataset.appointmentOpen = "true";
    button.dataset.serviceId = String(service.id);
    button.textContent = "Foglalj időpontot";

    li.appendChild(h3);
    li.appendChild(price);
    li.appendChild(time);
    li.appendChild(button);
    servicesContainer.appendChild(li);
  });
}

export function generateBarbersCard(barbers) {
  const barbersContainer = document.querySelector("#barbers-container");

  barbers.forEach((barber) => {
    const li = document.createElement("li");
    const imageWrap = document.createElement("div");
    const img = document.createElement("img");
    const body = document.createElement("div");
    const title = document.createElement("h3");

    const imageSrc = barber.imageUrl.startsWith("/")
      ? `public${barber.imageUrl}`
      : barber.imageUrl;

    li.classList.add("barbers-list-item");
    imageWrap.classList.add("barber-image-wrap");
    img.classList.add("barber-image");
    body.classList.add("barber-body");
    title.classList.add("barber-name");

    img.src = imageSrc;
    img.alt = barber.name;
    title.textContent = barber.name;

    imageWrap.appendChild(img);
    body.appendChild(title);
    li.appendChild(imageWrap);
    li.appendChild(body);
    barbersContainer.appendChild(li);
  });
}

export function generateWorksCarousel(galleryImages) {
  const worksTrack = document.querySelector("#works-track");
  const worksIndicators = document.querySelector("#works-indicators");

  galleryImages.forEach((image, index) => {
    const slide = document.createElement("div");
    const img = document.createElement("img");
    const indicator = document.createElement("button");

    const imageSrc = image.imageUrl.startsWith("/")
      ? `public${image.imageUrl}`
      : image.imageUrl;

    slide.classList.add("works-slide");
    if (index === 0) {
      slide.classList.add("active");
    }

    img.src = imageSrc;
    img.alt = `Gallery image ${image.id}`;
    img.classList.add("works-image");

    indicator.type = "button";
    indicator.classList.add("works-indicator");
    if (index === 0) {
      indicator.classList.add("active");
      indicator.setAttribute("aria-current", "true");
    }
    indicator.setAttribute("aria-label", `${index + 1}. kép`);
    indicator.dataset.slideIndex = String(index);

    slide.appendChild(img);
    worksTrack.appendChild(slide);
    worksIndicators.appendChild(indicator);
  });
}

export function generateInfoCard(infos) {
  const infoContainer = document.querySelector("#info-container");

  infos.forEach((info) => {
    const li = document.createElement("li");
    const heading = document.createElement("h3");
    const button = document.createElement("button");
    const answer = document.createElement("div");
    const answerText = document.createElement("p");
    const headingId = `faq-heading-${info.id}`;
    const answerId = `faq-answer-${info.id}`;

    li.classList.add("info-list-item");
    heading.classList.add("info-heading");
    heading.id = headingId;

    button.type = "button";
    button.classList.add("info-question");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", answerId);
    button.dataset.accordionTrigger = "true";
    button.textContent = info.question;

    answer.id = answerId;
    answer.classList.add("info-answer", "hidden");
    answer.setAttribute("role", "region");
    answer.setAttribute("aria-labelledby", headingId);

    answerText.classList.add("info-answer-text");
    answerText.textContent = info.answer;

    heading.appendChild(button);
    answer.appendChild(answerText);
    li.appendChild(heading);
    li.appendChild(answer);
    infoContainer.appendChild(li);
  });
}

export function generateOpeningHours(openingHours) {
  const openingHoursContainer = document.querySelector(
    "#opening-hours-container",
  );

  openingHours.forEach((entry, index) => {
    const row = document.createElement("tr");
    const day = document.createElement("th");
    const hours = document.createElement("td");

    row.classList.add("opening-row");
    if (index === openingHours.length - 1) {
      row.classList.add("opening-row-last");
    }

    day.textContent = entry.day;
    day.scope = "row";
    day.classList.add("opening-day");

    hours.textContent = entry.hours;
    hours.classList.add("opening-hours-value");

    row.appendChild(day);
    row.appendChild(hours);
    openingHoursContainer.appendChild(row);
  });
}

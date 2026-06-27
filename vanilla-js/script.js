import {
  BARBERS,
  NAVLINKS,
  SERVICES,
  INFOS,
  OPENING_HOURS,
  GALLERY_IMAGES,
} from "./data.js";
import {
  generateNavLinks,
  generateMobileNavLinks,
  generateServicesCard,
  generateBarbersCard,
  generateInfoCard,
  generateOpeningHours,
  generateWorksCarousel,
} from "./generateElements.js";

generateNavLinks(NAVLINKS);
generateMobileNavLinks(NAVLINKS);
generateServicesCard(SERVICES);
generateBarbersCard(BARBERS);
generateWorksCarousel(GALLERY_IMAGES);
generateInfoCard(INFOS);
generateOpeningHours(OPENING_HOURS);

function generateTimeSlots(start, end, stepMinutes) {
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  const startTotal = startHour * 60 + startMinute;
  const endTotal = endHour * 60 + endMinute;

  const slots = [];
  for (let minutes = startTotal; minutes <= endTotal; minutes += stepMinutes) {
    const hour = Math.floor(minutes / 60)
      .toString()
      .padStart(2, "0");
    const minute = (minutes % 60).toString().padStart(2, "0");
    slots.push(`${hour}:${minute}`);
  }

  return slots;
}

const TIME_STEP = 60;
const TIME_SLOTS = generateTimeSlots("10:00", "18:00", TIME_STEP);
const BOOKED_SLOTS = ["12:00", "14:00", "16:00"];

function normalizeImagePath(path) {
  return path.startsWith("/") ? `public${path}` : path;
}

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavClose = document.getElementById("mobile-nav-close");
const mobileNavLinks = document.getElementById("mobile-nav-links");
const contactsModal = document.getElementById("contacts-modal");
const appointmentModal = document.getElementById("appointment-modal");

function createModalController(modal, closeButton) {
  let lastFocusedElement = null;

  function isOpen() {
    return Boolean(modal && modal.classList.contains("is-open"));
  }

  function open() {
    if (!modal) {
      return;
    }

    lastFocusedElement = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    syncBodyOverflow();

    if (closeButton) {
      closeButton.focus();
    }
  }

  function close() {
    if (!modal) {
      return;
    }

    if (
      lastFocusedElement instanceof HTMLElement &&
      modal.contains(document.activeElement)
    ) {
      lastFocusedElement.focus();
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    syncBodyOverflow();
  }

  if (closeButton) {
    closeButton.addEventListener("click", close);
  }

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        close();
      }
    });
  }

  return { open, close, isOpen };
}

function syncBodyOverflow() {
  const isMobileNavOpen = mobileNav.classList.contains("is-open");
  const isContactsModalOpen = contactsModal
    ? contactsModal.classList.contains("is-open")
    : false;
  const isAppointmentModalOpen = appointmentModal
    ? appointmentModal.classList.contains("is-open")
    : false;

  document.body.style.overflow =
    isMobileNavOpen || isContactsModalOpen || isAppointmentModalOpen
      ? "hidden"
      : "";
}

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("is-open");
  menuToggle.setAttribute(
    "aria-expanded",
    mobileNav.classList.contains("is-open") ? "true" : "false",
  );
  syncBodyOverflow();
});

mobileNavClose.addEventListener("click", () => {
  mobileNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  syncBodyOverflow();
});

mobileNavLinks.addEventListener("click", (event) => {
  if (event.target.tagName !== "A") {
    return;
  }

  mobileNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  syncBodyOverflow();
});

const backToTopButton = document.getElementById("back-to-top");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

const contactsForm = document.getElementById("contacts-form");
const contactsSendBtn = document.getElementById("contacts-send-btn");
const contactsModalClose = document.getElementById("contacts-modal-close");
const contactsModalController = createModalController(
  contactsModal,
  contactsModalClose,
);

function openContactsModal() {
  contactsModalController.open();
}

function closeContactsModal() {
  contactsModalController.close();
}

if (contactsForm && contactsSendBtn) {
  contactsSendBtn.addEventListener("click", () => {
    contactsForm.reset();
    openContactsModal();
  });
}

const worksTrack = document.getElementById("works-track");
const worksPrev = document.getElementById("works-prev");
const worksNext = document.getElementById("works-next");
const worksIndicators = document.getElementById("works-indicators");

if (worksTrack && worksPrev && worksNext && worksIndicators) {
  let currentSlideIndex = 0;

  const slides = Array.from(worksTrack.querySelectorAll(".works-slide"));
  const indicators = Array.from(
    worksIndicators.querySelectorAll(".works-indicator"),
  );

  const setActiveSlide = (newIndex) => {
    const totalSlides = slides.length;

    if (!totalSlides) {
      return;
    }

    currentSlideIndex = (newIndex + totalSlides) % totalSlides;

    worksTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlideIndex);
    });

    indicators.forEach((indicator, index) => {
      const isActive = index === currentSlideIndex;
      indicator.classList.toggle("active", isActive);
      if (isActive) {
        indicator.setAttribute("aria-current", "true");
      } else {
        indicator.removeAttribute("aria-current");
      }
    });
  };

  worksPrev.addEventListener("click", () => {
    setActiveSlide(currentSlideIndex - 1);
  });

  worksNext.addEventListener("click", () => {
    setActiveSlide(currentSlideIndex + 1);
  });

  worksIndicators.addEventListener("click", (event) => {
    const clickedIndicator = event.target.closest(".works-indicator");

    if (!clickedIndicator) {
      return;
    }

    const nextIndex = Number(clickedIndicator.dataset.slideIndex);
    if (!Number.isNaN(nextIndex)) {
      setActiveSlide(nextIndex);
    }
  });

  setActiveSlide(0);
}

const infoContainer = document.getElementById("info-container");

if (infoContainer) {
  infoContainer.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-accordion-trigger='true']");

    if (!trigger) {
      return;
    }

    const answerId = trigger.getAttribute("aria-controls");
    const targetAnswer = answerId ? document.getElementById(answerId) : null;

    if (!targetAnswer) {
      return;
    }

    const isExpanded = trigger.getAttribute("aria-expanded") === "true";

    const allTriggers = infoContainer.querySelectorAll(
      "[data-accordion-trigger='true']",
    );
    allTriggers.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
      const controlledId = button.getAttribute("aria-controls");
      const controlledAnswer = controlledId
        ? document.getElementById(controlledId)
        : null;
      if (controlledAnswer) {
        controlledAnswer.classList.add("hidden");
      }
    });

    if (!isExpanded) {
      trigger.setAttribute("aria-expanded", "true");
      targetAnswer.classList.remove("hidden");
    }
  });
}

const appointmentModalClose = document.getElementById(
  "appointment-modal-close",
);
const appointmentServicesGrid = document.getElementById(
  "appointment-services-grid",
);
const appointmentBarbersGrid = document.getElementById(
  "appointment-barbers-grid",
);
const appointmentSlotsGrid = document.getElementById("appointment-slots-grid");
const appointmentSubmit = document.getElementById("appointment-submit");
const appointmentToast = document.getElementById("appointment-toast");
let selectedServiceId = null;
let selectedBarberId = null;
let selectedTime = null;
let toastTimeoutId = null;
const appointmentModalController = createModalController(
  appointmentModal,
  appointmentModalClose,
);

function updateAppointmentSubmitState() {
  if (!appointmentSubmit) {
    return;
  }

  appointmentSubmit.disabled =
    !selectedServiceId || !selectedBarberId || !selectedTime;
}

function renderAppointmentServices() {
  if (!appointmentServicesGrid) {
    return;
  }

  appointmentServicesGrid.innerHTML = "";

  SERVICES.forEach((service) => {
    const button = document.createElement("button");
    const isSelected = selectedServiceId === service.id;

    button.type = "button";
    button.classList.add("appointment-option-button");
    if (isSelected) {
      button.classList.add("is-selected");
    }
    button.setAttribute("aria-pressed", isSelected ? "true" : "false");
    button.textContent = service.title;

    button.addEventListener("click", () => {
      selectedServiceId = service.id;
      renderAppointmentServices();
      updateAppointmentSubmitState();
    });

    appointmentServicesGrid.appendChild(button);
  });
}

function renderAppointmentBarbers() {
  if (!appointmentBarbersGrid) {
    return;
  }

  appointmentBarbersGrid.innerHTML = "";

  BARBERS.forEach((barber) => {
    const button = document.createElement("button");
    const imageWrap = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("span");
    const isSelected = selectedBarberId === barber.id;

    button.type = "button";
    button.classList.add("appointment-barber-button");
    if (isSelected) {
      button.classList.add("is-selected");
    }
    button.setAttribute("aria-pressed", isSelected ? "true" : "false");

    imageWrap.classList.add("appointment-barber-image-wrap");
    image.classList.add("appointment-barber-image");
    image.src = normalizeImagePath(barber.imageUrl);
    image.alt = barber.name;

    name.classList.add("appointment-barber-name");
    name.textContent = barber.name;

    button.addEventListener("click", () => {
      selectedBarberId = barber.id;
      renderAppointmentBarbers();
      updateAppointmentSubmitState();
    });

    imageWrap.appendChild(image);
    button.appendChild(imageWrap);
    button.appendChild(name);
    appointmentBarbersGrid.appendChild(button);
  });
}

function renderAppointmentSlots() {
  if (!appointmentSlotsGrid) {
    return;
  }

  appointmentSlotsGrid.innerHTML = "";

  TIME_SLOTS.forEach((slot) => {
    const button = document.createElement("button");
    const isBooked = BOOKED_SLOTS.includes(slot);
    const isSelected = selectedTime === slot;

    button.type = "button";
    button.classList.add("appointment-slot-button");
    if (isSelected) {
      button.classList.add("is-selected");
    }
    if (isBooked) {
      button.classList.add("is-booked");
      button.disabled = true;
    }
    button.textContent = slot;

    if (!isBooked) {
      button.addEventListener("click", () => {
        selectedTime = slot;
        renderAppointmentSlots();
        updateAppointmentSubmitState();
      });
    }

    appointmentSlotsGrid.appendChild(button);
  });
}

function openAppointmentModal(initialServiceId) {
  selectedServiceId =
    typeof initialServiceId === "number" ? initialServiceId : null;
  selectedBarberId = null;
  selectedTime = null;

  renderAppointmentServices();
  renderAppointmentBarbers();
  renderAppointmentSlots();
  updateAppointmentSubmitState();

  appointmentModalController.open();
}

function closeAppointmentModal() {
  appointmentModalController.close();
}

function showAppointmentToast() {
  if (!appointmentToast) {
    return;
  }

  if (toastTimeoutId) {
    window.clearTimeout(toastTimeoutId);
  }

  appointmentToast.classList.remove("hidden");

  toastTimeoutId = window.setTimeout(() => {
    appointmentToast.classList.add("hidden");
    toastTimeoutId = null;
  }, 3000);
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-appointment-open='true']");
  if (!trigger) {
    return;
  }

  const initialServiceId = Number(trigger.dataset.serviceId);
  openAppointmentModal(
    Number.isNaN(initialServiceId) ? undefined : initialServiceId,
  );
});

const heroAppointmentButton = document.querySelector(".apointment-btn");
if (heroAppointmentButton) {
  heroAppointmentButton.dataset.appointmentOpen = "true";
}

if (appointmentSubmit) {
  appointmentSubmit.addEventListener("click", () => {
    if (!selectedServiceId || !selectedBarberId || !selectedTime) {
      return;
    }

    closeAppointmentModal();
    showAppointmentToast();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (appointmentModalController.isOpen()) {
    closeAppointmentModal();
    return;
  }

  if (contactsModalController.isOpen()) {
    closeContactsModal();
  }
});

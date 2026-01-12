(() => {
  const init = () => {
    const form = document.getElementById("contactForm");
    const contactModalEl = document.getElementById("contactModal");

    const modalState = new WeakMap();
    const getState = (el) => {
      if (!modalState.has(el)) modalState.set(el, { returnFocusEl: null });
      return modalState.get(el);
    };

    const wireModalFocus = (el) => {
      if (!el) return;

      el.addEventListener("show.bs.modal", (event) => {
        const state = getState(el);
        // For data-bs-toggle triggers, Bootstrap supplies relatedTarget.
        // If we didn't already set a return focus element, use it.
        state.returnFocusEl ||= event.relatedTarget || document.activeElement;
      });

      el.addEventListener("hide.bs.modal", () => {
        const active = document.activeElement;
        if (
          active &&
          el.contains(active) &&
          typeof active.blur === "function"
        ) {
          active.blur();
        }
      });

      el.addEventListener("hidden.bs.modal", () => {
        const { returnFocusEl } = getState(el);

        if (returnFocusEl && document.contains(returnFocusEl)) {
          try {
            returnFocusEl.focus();
          } catch {
            // Ignore focus errors (e.g. element became disabled/hidden)
          }
        }

        getState(el).returnFocusEl = null;
      });
    };

    // Apply focus fix to all modals (bookingModal + contactModal).
    document.querySelectorAll(".modal").forEach(wireModalFocus);

    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (!form.checkValidity()) {
          form.classList.add("was-validated");
          return;
        }

        form.classList.add("was-validated");

        const bs = globalThis.bootstrap;
        if (bs?.Modal && contactModalEl) {
          // Remember the element that initiated submit so we can restore focus.
          getState(contactModalEl).returnFocusEl =
            event.submitter || document.activeElement;

          const modal = bs.Modal.getOrCreateInstance(contactModalEl);
          modal.show();
        } else {
          // Graceful fallback if Bootstrap JS isn't available for some reason.
          alert(
            "Köszönjük! Az üzenet elküldése jelenleg fejlesztés alatt áll."
          );
        }

        form.reset();
        form.classList.remove("was-validated");
      });
    }

    // Close mobile navbar after clicking a link.
    const navbarCollapseEl = document.getElementById("navbarNav");
    const navbarTogglerEl = document.querySelector(".navbar .navbar-toggler");

    if (navbarCollapseEl && navbarTogglerEl) {
      const closeNavbarIfMobile = () => {
        const togglerVisible =
          window.getComputedStyle(navbarTogglerEl).display !== "none";
        if (!togglerVisible) return;
        if (!navbarCollapseEl.classList.contains("show")) return;

        const bs = globalThis.bootstrap;
        if (!bs?.Collapse) return;

        const collapse = bs.Collapse.getOrCreateInstance(navbarCollapseEl, {
          toggle: false,
        });
        collapse.hide();
      };

      navbarCollapseEl.querySelectorAll("a.nav-link").forEach((link) => {
        link.addEventListener("click", closeNavbarIfMobile);
      });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

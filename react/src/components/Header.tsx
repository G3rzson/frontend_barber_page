import { AnimatePresence, motion, type Variants } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAVLINKS } from "../constants/data";

const mobileNavVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 28 },
  },
  exit: { opacity: 0, y: 10, transition: { duration: 0.15 } },
};

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  return (
    <header className="fixed-top bg-black z-3">
      <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
        {/* Logo */}
        <a href="/">
          <img
            src="/logo.png"
            alt="Logo"
            width={75}
            height={75}
            style={{ objectFit: "cover" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="d-none d-sm-flex gap-4 align-items-center">
          {NAVLINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-decoration-none fs-5 nav-link-custom"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="btn d-sm-none btn-warning"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav"
          aria-label={
            isMobileNavOpen ? "Mobil menü bezárása" : "Mobil menü nyitása"
          }
        >
          {isMobileNavOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile nav (overlay) */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.nav
            id="mobile-nav"
            className="position-fixed top-0 start-0 w-100 vh-100 z-3 bg-black d-flex flex-column align-items-center justify-content-center gap-4"
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-hidden={!isMobileNavOpen}
            style={{ zIndex: 1050 }}
          >
            {/* close button */}
            <motion.button
              className="btn btn-warning position-absolute top-0 end-0 m-3"
              onClick={() => setIsMobileNavOpen(false)}
              aria-label="Mobil menü bezárása"
              variants={mobileItemVariants}
            >
              <X />
            </motion.button>

            {NAVLINKS.map((link) => (
              <motion.div key={link.href} variants={mobileItemVariants}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileNavOpen(false)}
                  className="text-decoration-none fs-5 nav-link-custom"
                >
                  {link.name}
                </a>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

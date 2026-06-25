"use client";

import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAVLINKS } from "@/constants/data";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

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

  useLockBodyScroll(isMobileNavOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 flex flex-col items-center justify-between">
      {/* Logo */}
      <section className="flex items-center justify-between w-full px-4 py-2">
        <a href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            priority
            width={75}
            height={75}
            style={{ objectFit: "cover" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-4">
          {NAVLINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-500 transition-colors duration-300 text-xl"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="sm:hidden cursor-pointer"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-nav"
          aria-label={
            isMobileNavOpen ? "Mobil menü bezárása" : "Mobil menü nyitása"
          }
        >
          {isMobileNavOpen ? null : <Menu />}
        </button>

        {/* Mobile nav */}
        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.nav
              id="mobile-nav"
              className="sm:hidden fixed inset-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center gap-8 z-50"
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              aria-hidden={!isMobileNavOpen}
            >
              {/* close button */}
              <motion.button
                className="absolute top-4 right-4 cursor-pointer"
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
                    className="hover:text-amber-500 transition-colors duration-300 text-2xl"
                  >
                    {link.name}
                  </a>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </section>
    </header>
  );
}

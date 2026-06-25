"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({
  isModalOpen,
  onClose,
  children,
}: {
  isModalOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative max-h-[calc(100vh-2rem)] w-full max-w-2xl overflow-y-auto rounded-lg border border-amber-400 bg-zinc-950 p-4 text-center"
          >
            {children}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 cursor-pointer rounded-full p-1 text-amber-400 transition hover:text-amber-500"
            >
              <X />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

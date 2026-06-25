"use client";

import { INFO } from "@/constants/data";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Info() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="section" id="info">
      <h2 className="section-title">Gyakori kérdések</h2>

      <div className="mx-auto w-full">
        {INFO.map((item) => (
          <div
            key={item.id}
            className="mb-4 rounded-lg border border-amber-400 bg-black/50"
          >
            <button
              type="button"
              onClick={() =>
                setOpenId((prev) => (prev === item.id ? null : item.id))
              }
              className="flex w-full cursor-pointer items-center justify-between gap-3 p-4 text-left"
              aria-expanded={openId === item.id}
              aria-controls={`faq-answer-${item.id}`}
            >
              <h3 className="text-lg font-semibold text-amber-400">
                {item.question}
              </h3>
              <motion.span
                animate={{ rotate: openId === item.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0 text-amber-400"
              >
                <ChevronDown size={20} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openId === item.id && (
                <motion.div
                  id={`faq-answer-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 text-green-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

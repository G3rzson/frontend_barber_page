"use client";

import { useEffect, useState } from "react";
import Modal from "./Modal";
import { BARBERS, SERVICES } from "@/constants/data";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

function generateTimeSlots(start: string, end: string, stepMinutes: number) {
  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  const startTotal = startHour * 60 + startMinute;
  const endTotal = endHour * 60 + endMinute;

  const slots: string[] = [];
  for (let minutes = startTotal; minutes <= endTotal; minutes += stepMinutes) {
    const hour = Math.floor(minutes / 60)
      .toString()
      .padStart(2, "0");
    const minute = (minutes % 60).toString().padStart(2, "0");
    slots.push(`${hour}:${minute}`);
  }

  return slots;
}

const TIME_STEP = 60; // 60 minutes
const TIME_SLOTS = generateTimeSlots("10:00", "18:00", TIME_STEP);
const BOOKED_SLOTS = ["12:00", "14:00", "16:00"];

type Props = {
  initialServiceId?: number;
};

export default function AppointmentBtn({ initialServiceId }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
    initialServiceId ?? null,
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedBarberId, setSelectedBarberId] = useState<number | null>(null);

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleOpen() {
    setIsModalOpen(true);
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }

  function handleBooking() {
    setSelectedServiceId(null);
    setSelectedTime(null);
    setSelectedBarberId(null);
    setIsModalOpen(false);
    setShowToast(true);
  }

  useEffect(() => {
    if (!showToast) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [showToast]);

  useLockBodyScroll(isModalOpen);

  return (
    <>
      <button
        className="bg-amber-500 text-black px-4 py-2 rounded cursor-pointer transition hover:bg-amber-400"
        onClick={handleOpen}
      >
        Foglalj időpontot
      </button>

      <Modal isModalOpen={isModalOpen} onClose={handleClose}>
        <p className="text-sm text-zinc-400">Válassz szolgáltatást:</p>

        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {SERVICES.map((service) => {
            const isSelected = selectedServiceId === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedServiceId(service.id)}
                aria-pressed={isSelected}
                className={`rounded-md border px-3 py-2 text-sm transition ${
                  isSelected
                    ? "border-amber-400 bg-amber-500 text-black"
                    : "cursor-pointer border-zinc-700 bg-black text-amber-300 hover:border-amber-400"
                }`}
              >
                {service.title}
              </button>
            );
          })}
        </div>

        <p className="mt-2 text-sm text-zinc-400">Válassz borbélyt:</p>

        <div className="mt-3 flex gap-2 items-center justify-center ">
          {BARBERS.map((barber) => {
            const isSelected = selectedBarberId === barber.id;

            return (
              <button
                key={barber.id}
                type="button"
                onClick={() => setSelectedBarberId(barber.id)}
                aria-pressed={isSelected}
                className={`w-20 sm:w-full rounded-lg border p-1 cursor-pointer text-center transition ${
                  isSelected
                    ? "border-amber-400 bg-amber-500/15"
                    : "border-zinc-700 bg-black/60 hover:border-amber-400"
                }`}
              >
                <div className="relative w-full aspect-square overflow-hidden rounded-sm border border-zinc-700">
                  <Image
                    src={barber.imageUrl}
                    alt={barber.name}
                    fill
                    sizes="(min-width: 640px) 180px, 45vw"
                    className="object-cover"
                  />
                </div>
                <span className="mt-1 block truncate text-xs text-zinc-200">
                  {barber.name}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-2 text-sm text-zinc-400">Válassz szabad időpontot:</p>

        <div className="mt-4 grid grid-cols-3 sm:grid-cols-9 gap-2">
          {TIME_SLOTS.map((slot) => {
            const isBooked = BOOKED_SLOTS.includes(slot);
            const isSelected = selectedTime === slot;

            return (
              <button
                key={slot}
                type="button"
                disabled={isBooked}
                onClick={() => setSelectedTime(slot)}
                className={`rounded-md border px-3 py-2 text-sm transition ${
                  isBooked
                    ? "cursor-not-allowed border-zinc-800 bg-zinc-900 text-zinc-600"
                    : isSelected
                      ? "border-amber-400 bg-amber-500 text-black"
                      : "cursor-pointer border-zinc-700 bg-black text-amber-300 hover:border-amber-400"
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>

        <form className="mt-4 flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className=" w-full rounded-md border border-zinc-700 bg-black px-3 py-2 text-amber-300 outline-none focus:border-amber-400"
          />
          <button
            type="button"
            onClick={handleBooking}
            disabled={!selectedServiceId || !selectedTime || !selectedBarberId}
            className="w-full sm:w-fit cursor-pointer rounded-md bg-amber-500 px-5 py-2 font-semibold text-black transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
          >
            Foglalás
          </button>
        </form>
      </Modal>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-4 left-1/2 z-110 -translate-x-1/2 rounded-md border border-amber-400 bg-black px-4 py-3 text-sm text-amber-300 shadow-lg"
          >
            A kiválasztott adatok nem kerültek feldolgozásra!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

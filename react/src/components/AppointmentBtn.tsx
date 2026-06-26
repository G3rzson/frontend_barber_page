import { useEffect, useState } from "react";
import Modal from "./Modal";
import { AnimatePresence, motion } from "motion/react";
import { BARBERS, SERVICES } from "../constants/data";

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

  return (
    <>
      <button className="btn btn-warning" onClick={handleOpen}>
        Foglalj időpontot
      </button>

      <Modal isModalOpen={isModalOpen} onClose={handleClose}>
        <p className="small text-secondary mb-2">Válassz szolgáltatást:</p>

        <div className="row g-2 mt-1">
          {SERVICES.map((service) => {
            const isSelected = selectedServiceId === service.id;

            return (
              <div key={service.id} className="col-12 col-sm-4">
                <button
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  aria-pressed={isSelected}
                  className={`btn w-100 ${
                    isSelected ? "btn-warning text-dark" : "btn-outline-warning"
                  }`}
                >
                  {service.title}
                </button>
              </div>
            );
          })}
        </div>

        <p className="small text-secondary mt-3 mb-2">Válassz borbélyt:</p>

        <div className="row g-2 mt-1 justify-content-center">
          {BARBERS.map((barber) => {
            const isSelected = selectedBarberId === barber.id;

            return (
              <div key={barber.id} className="col-4 col-sm-3 col-md-2">
                <button
                  type="button"
                  onClick={() => setSelectedBarberId(barber.id)}
                  aria-pressed={isSelected}
                  className={`w-100 border rounded p-1 text-center bg-dark text-light ${
                    isSelected ? "border-warning" : "border-secondary"
                  }`}
                >
                  <div className="ratio ratio-1x1 overflow-hidden rounded border border-secondary">
                    <img
                      src={barber.imageUrl}
                      alt={barber.name}
                      width={180}
                      height={180}
                      className="w-100 h-100 object-fit-cover"
                    />
                  </div>
                  <span className="d-block mt-1 small text-truncate">
                    {barber.name}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <p className="small text-secondary mt-3 mb-2">
          Válassz szabad időpontot:
        </p>

        <div className="row g-2 mt-1">
          {TIME_SLOTS.map((slot) => {
            const isBooked = BOOKED_SLOTS.includes(slot);
            const isSelected = selectedTime === slot;

            return (
              <div key={slot} className="col-4 col-sm-3 col-md-2">
                <button
                  type="button"
                  disabled={isBooked}
                  onClick={() => setSelectedTime(slot)}
                  className={`btn w-100 ${
                    isBooked
                      ? "btn-secondary disabled"
                      : isSelected
                        ? "btn-warning text-dark"
                        : "btn-outline-warning"
                  }`}
                >
                  {slot}
                </button>
              </div>
            );
          })}
        </div>

        <form className="mt-4 d-flex flex-column flex-sm-row gap-2">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            className="form-control bg-dark text-warning border-secondary appointment-email-input"
          />
          <button
            type="button"
            onClick={handleBooking}
            disabled={!selectedServiceId || !selectedTime || !selectedBarberId}
            className="btn btn-warning fw-semibold"
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
            className="position-fixed bottom-0 start-50 translate-middle-x mb-4 rounded border border-warning bg-dark px-4 py-3 small text-warning shadow"
            style={{ zIndex: 1060 }}
          >
            A kiválasztott adatok nem kerültek feldolgozásra!
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

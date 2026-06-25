import { SERVICES } from "@/constants/data";
import AppointmentBtn from "./AppointmentBtn";

export default function Services() {
  return (
    <section className="section" id="services">
      <h2 className="section-title">Szolgáltatások</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="bg-black/50 p-6 rounded-lg border border-amber-400 flex flex-col gap-4 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="border-y-2 border-amber-400 py-4">
              Ár: {service.price} Ft
            </p>
            <p>Időtartam: {service.time}</p>
            <AppointmentBtn initialServiceId={service.id} />
          </div>
        ))}
      </div>
    </section>
  );
}

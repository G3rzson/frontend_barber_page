import { SERVICES } from "../constants/data";
import AppointmentBtn from "./AppointmentBtn";

export default function Services() {
  return (
    <section className="section" id="services">
      <h2 className="section-title">Szolgáltatások</h2>

      <div className="row g-4">
        {SERVICES.map((service) => (
          <div key={service.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 border border-warning bg-dark bg-opacity-50 text-center text-warning">
              <div className="card-body d-flex flex-column gap-3">
                <h3 className="card-title h5 fw-semibold mb-0">
                  {service.title}
                </h3>

                <p className="card-text border-top border-bottom border-warning py-3 m-0">
                  Ár: {service.price} Ft
                </p>

                <p className="card-text m-0">Időtartam: {service.time}</p>

                <AppointmentBtn initialServiceId={service.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

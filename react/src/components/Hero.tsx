import { Phone } from "lucide-react";
import AppointmentBtn from "./AppointmentBtn";

export default function Hero() {
  return (
    <section className="position-relative vh-100">
      <img
        src="/hero-img.jpg"
        alt="Hero image"
        className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />

      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-75" />

      <div className="position-relative z-1 d-flex flex-column align-items-center justify-content-center gap-4 text-center px-4 h-100">
        <h1 className="display-1 fw-bold">BARBERS & HAIR CUTTING</h1>
        <h3 className="fs-3">
          Látogass el hozzánk, profi borbélyaink állnak szolgálatodra!
        </h3>

        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-sm-5 gap-4 w-100">
          <p className="d-flex align-items-center justify-content-center m-0 gap-3">
            <Phone />
            Hívj minket: +36 30 123 4567
          </p>
          <AppointmentBtn />
        </div>
      </div>
    </section>
  );
}

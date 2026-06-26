import { BARBERS } from "../constants/data";

export default function Barbers() {
  return (
    <section className="section" id="barbers">
      <h2 className="section-title">Borbélyok</h2>

      <div className="row g-4">
        {BARBERS.map((barber) => (
          <div key={barber.id} className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 border border-warning bg-dark bg-opacity-50 text-center text-warning overflow-hidden">
              <div className="ratio ratio-1x1 overflow-hidden">
                <img
                  src={barber.imageUrl}
                  alt={barber.name}
                  className="card-img-top w-100 h-100 object-fit-cover"
                />
              </div>

              <div className="card-body d-flex flex-column gap-3">
                <h3 className="card-title h5 fw-semibold mb-0">
                  {barber.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

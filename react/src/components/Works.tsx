import { GALLERY_IMAGES } from "../constants/data";

export default function Works() {
  const carouselId = "worksCarousel";

  return (
    <section className="section" id="works">
      <h2 className="section-title">Munkáink</h2>

      <div className="mx-auto w-100" style={{ maxWidth: "56rem" }}>
        <div
          id={carouselId}
          className="carousel slide overflow-hidden rounded border border-warning bg-dark bg-opacity-50"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={image.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="position-relative w-100 overflow-hidden"
                  style={{ height: "clamp(450px, 42vh, 420px)" }}
                >
                  <img
                    src={image.imageUrl}
                    alt={`Gallery image ${image.id}`}
                    className="d-block w-100 h-100 object-fit-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
            aria-label="Előző kép"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
            aria-label="Következő kép"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>

          <div className="carousel-indicators">
            {GALLERY_IMAGES.map((image, index) => (
              <button
                key={image.id}
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`${index + 1}. kép`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

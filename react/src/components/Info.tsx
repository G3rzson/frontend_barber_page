import { INFO } from "../constants/data";

export default function Info() {
  const accordionId = "faqAccordion";

  return (
    <section className="section" id="info">
      <h2 className="section-title">Gyakori kérdések</h2>

      <div className="container px-0">
        <div className="accordion faq-accordion" id={accordionId}>
          {INFO.map((item) => (
            <div
              key={item.id}
              className="accordion-item mb-3 border border-warning rounded overflow-hidden"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              <h3 className="accordion-header" id={`faq-heading-${item.id}`}>
                <button
                  className="accordion-button collapsed bg-transparent text-warning fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-answer-${item.id}`}
                  aria-expanded="false"
                  aria-controls={`faq-answer-${item.id}`}
                >
                  {item.question}
                </button>
              </h3>

              <div
                id={`faq-answer-${item.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={`faq-heading-${item.id}`}
                data-bs-parent={`#${accordionId}`}
              >
                <div className="accordion-body text-success">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

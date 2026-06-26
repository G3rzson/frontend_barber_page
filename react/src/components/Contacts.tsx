import { useRef, useState } from "react";
import Modal from "./Modal";

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleClose() {
    setIsModalOpen(false);
  }

  function handleSendClick() {
    formRef.current?.reset();
    setIsModalOpen(true);
  }

  return (
    <section className="section" id="contacts">
      <h2 className="section-title">Vedd fel velünk a kapcsolatot</h2>

      <form
        ref={formRef}
        className="contacts-form mx-auto p-4 rounded border border-warning bg-dark bg-opacity-50"
        style={{ maxWidth: "400px" }}
      >
        <div className="form-floating mb-3">
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Név"
            required
            className="form-control bg-dark text-warning border-secondary"
          />
          <label htmlFor="name" className="text-warning">
            Név
          </label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="E-mail"
            required
            className="form-control bg-dark text-warning border-secondary"
          />
          <label htmlFor="email" className="text-warning">
            E-mail
          </label>
        </div>

        <div className="form-floating mb-3">
          <textarea
            id="textarea"
            name="message"
            placeholder="Üzenet"
            required
            className="form-control bg-dark text-warning border-secondary"
            style={{ height: "120px" }}
          />
          <label htmlFor="textarea" className="text-warning">
            Üzenet
          </label>
        </div>

        <button
          type="button"
          onClick={handleSendClick}
          className="btn btn-warning w-100 fw-semibold"
        >
          Küldés
        </button>
      </form>

      <Modal isModalOpen={isModalOpen} onClose={handleClose}>
        <h2 className="h4 mt-4 fw-bold text-warning">
          A megadott adatok nem kerültek feldolgozásra!
        </h2>

        <p className="mt-3 mb-0 text-warning">
          Ez a funkció még nincs implementálva.
        </p>
      </Modal>
    </section>
  );
}

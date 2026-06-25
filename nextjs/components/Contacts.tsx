"use client";

import { useRef, useState } from "react";
import Modal from "./Modal";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

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

  useLockBodyScroll(isModalOpen);

  return (
    <section className="section" id="contacts">
      <h2 className="section-title">Vedd fel velünk a kapcsolatot</h2>

      <form
        ref={formRef}
        className="flex flex-col gap-4 w-96 mx-auto bg-black/50 p-4 rounded-xl text-start border border-amber-400"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-amber-400">
            Név
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            placeholder="Név"
            required
            className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2 text-amber-300 outline-none focus:border-amber-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-amber-400">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="E-mail"
            required
            className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2 text-amber-300 outline-none focus:border-amber-400"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="textarea" className="text-amber-400">
            Üzenet
          </label>
          <textarea
            id="textarea"
            name="message"
            placeholder="Üzenet"
            required
            rows={5}
            className="w-full rounded-md border border-zinc-700 bg-black px-3 py-2 text-amber-300 outline-none focus:border-amber-400"
          />
        </div>

        <button
          type="button"
          onClick={handleSendClick}
          className="cursor-pointer rounded-md bg-amber-500 px-5 py-2 font-semibold text-black transition hover:bg-amber-400"
        >
          Küldés
        </button>
      </form>

      <Modal isModalOpen={isModalOpen} onClose={handleClose}>
        <h2 className="text-xl mt-8 font-bold">
          A megadott adatok nem kerültek feldolgozásra !
        </h2>
        <p className="mt-2">Ez a funkció még nincs implementálva.</p>
      </Modal>
    </section>
  );
}

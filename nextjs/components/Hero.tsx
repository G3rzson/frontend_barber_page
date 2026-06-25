import Image from "next/image";
import AppointmentBtn from "./AppointmentBtn";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen">
      {/* Háttérkép */}
      <Image
        src="/hero-img.jpg"
        alt="Hero image"
        fill
        priority
        style={{ objectFit: "cover" }}
      />

      {/* Sötét overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Tartalom */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center gap-8 text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-bold">
          BARBERS & HAIR CUTTING
        </h1>
        <h3 className="text-2xl">
          Látogass el hozzánk, profi borbélyaink állnak szolgálatodra!
        </h3>

        <section className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full px-4 py-2">
          <p className="flex items-center mt-2 sm:mt-0 gap-2">
            <Phone />
            Hívj minket: +36 30 123 4567
          </p>
          <AppointmentBtn />
        </section>
      </div>
    </section>
  );
}

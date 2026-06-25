import { BARBERS } from "@/constants/data";
import Image from "next/image";

export default function Barbers() {
  return (
    <section className="section" id="barbers">
      <h2 className="section-title">Borbélyok</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BARBERS.map((barber) => (
          <div
            key={barber.id}
            className="bg-black/50  rounded-lg overflow-hidden border border-amber-400 flex flex-col text-center"
          >
            <h3 className="text-xl font-semibold my-2">{barber.name}</h3>
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={barber.imageUrl}
                alt={barber.name}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

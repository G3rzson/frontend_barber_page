import { OPENING_HOURS } from "@/constants/data";

export default function Opening() {
  return (
    <section className="section" id="opening-hours">
      <h2 className="section-title">Nyitvatartás</h2>

      <div className="w-96 mx-auto bg-black/50 px-4 py-2 rounded-xl border border-amber-400">
        <table className="w-full border-collapse">
          <caption className="sr-only">Heti nyitvatartás</caption>
          <tbody>
            {OPENING_HOURS.map((entry) => (
              <tr
                key={entry.id}
                className="border-b border-zinc-800 last:border-b-0"
              >
                <th
                  scope="row"
                  className="py-2 text-left font-medium text-amber-400"
                >
                  {entry.day}
                </th>
                <td className="py-2 text-right">{entry.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

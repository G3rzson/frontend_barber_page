import { OPENING_HOURS } from "../constants/data";

export default function Opening() {
  return (
    <section className="section" id="opening-hours">
      <h2 className="section-title">Nyitvatartás</h2>

      <div
        className="card mx-auto border border-warning bg-dark bg-opacity-50 text-warning"
        style={{ maxWidth: "24rem" }}
      >
        <div className="card-body py-2 px-3">
          <table className="table table-borderless align-middle mb-0 opening-table">
            <caption className="visually-hidden">Heti nyitvatartás</caption>
            <tbody>
              {OPENING_HOURS.map((entry, index) => (
                <tr
                  key={entry.id}
                  className={
                    index === OPENING_HOURS.length - 1
                      ? ""
                      : "border-bottom border-secondary-subtle"
                  }
                >
                  <th
                    scope="row"
                    className="py-2 text-start fw-medium text-warning"
                  >
                    {entry.day}
                  </th>
                  <td className="py-2 text-end">{entry.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

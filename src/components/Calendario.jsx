import "./Calendario.css";

const imgLeft =
  "https://www.figma.com/api/mcp/asset/ba080159-d0c1-45c0-9743-63dae121359b";
const imgRight =
  "https://www.figma.com/api/mcp/asset/ea9a5995-4ee0-42dd-9861-6980b35ac25f";
const imgLeftDark =
  "https://www.figma.com/api/mcp/asset/88d829fa-a42a-4076-bed8-97ff5d61cf09";
const imgRightDark =
  "https://www.figma.com/api/mcp/asset/6ea50196-b626-4364-af64-206a5774c19b";

function Calendario({ modo = "light" }) {
  const esDark = modo === "dark";

  const dayLabels = ["SAN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const dateRows = chunkArray(dates, 7);

  // Renderiza UI
  return (
    <div
      className={`calendario-contenedor ${esDark ? "calendario-dark" : "calendario-light"}`}
    >
      <div className="calendario-header">
        <button className="calendario-nav-btn">
          <img
            src={esDark ? imgLeftDark : imgLeft}
            alt="Anterior"
            className="calendario-nav-icon"
          />
        </button>
        <h5 className="calendario-titulo">September 2021</h5>
        <button className="calendario-nav-btn">
          <img
            src={esDark ? imgRightDark : imgRight}
            alt="Siguiente"
            className="calendario-nav-icon"
          />
        </button>
      </div>

      <div className="calendario-day-labels">
        {dayLabels.map((day) => (
          <div key={day} className="calendario-day-label">
            <span>{day}</span>
          </div>
        ))}
      </div>

      <div className="calendario-grid">
        {dateRows.map((row, rowIndex) => (
          <div key={rowIndex} className="calendario-row">
            {row.map((date) => (
              <div
                key={date}
                className={`calendario-date ${date === 19 ? "calendario-date-active" : ""}`}
              >
                <span>{date}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendario;

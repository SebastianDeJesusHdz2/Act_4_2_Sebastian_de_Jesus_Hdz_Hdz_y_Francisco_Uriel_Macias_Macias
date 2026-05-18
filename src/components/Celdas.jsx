import "./Celdas.css";
import Icon from "../icons/icon";
function Celdas({
  property1 = "Table",
  property2 = "White",
  txt,
  checkbox,
  toggle,
}) {
  const isDates = property1 === "Dates";
  const isDeleteModify = property1 === "DeleteModify";
  const isTable = property1 === "Table";
  const isTexto = property1 === "Texto";
  const isBlack = property2 === "Black";
  const isGray = property2 === "Gray";
  const isWhite = property2 === "White";
  let className = "celdas-cell";
  if (isDeleteModify) {
    className += isBlack
      ? " celdas-delete-black"
      : isGray
        ? " celdas-delete-gray"
        : " celdas-delete-white";
  } else if (isDates) {
    className += isBlack
      ? " celdas-dates-black"
      : isGray
        ? " celdas-dates-gray"
        : " celdas-dates-white";
  } else if (isTexto) {
    className += isBlack
      ? " celdas-texto-black"
      : isGray
        ? " celdas-texto-gray"
        : " celdas-texto-white";
  } else if (isTable) {
    className += isBlack
      ? " celdas-table-black"
      : isGray
        ? " celdas-table-gray"
        : " celdas-table-white";
  }
  const defaultText =
    isTexto && isBlack
      ? "Administrador"
      : isTexto
        ? "Administrator"
        : "Titulo de columna";
  const displayText = txt !== undefined ? txt : defaultText;
  const showCheckbox =
    checkbox !== undefined ? checkbox : isDeleteModify || isDates;
  const showToggle = toggle !== undefined ? toggle : false;
  // Renderiza UI
  return (
    <div className={className}>
      {showCheckbox && <input type="checkbox" className="celdas-checkbox" />}
      {isTable && showToggle && (
        <label className="celdas-toggle-label">
          <input type="checkbox" className="celdas-toggle" defaultChecked />
          <span className="celdas-toggle-slider"></span>
        </label>
      )}
      {(isTable || isTexto) && (
        <p
          className={`celdas-text ${isTexto ? "celdas-text-texto" : "celdas-text-table"} ${isTexto && isBlack ? "celdas-text-black" : isTable && isBlack ? "celdas-text-table-black" : ""}`}
        >
          {displayText}
        </p>
      )}
      {isTable && (
        <div
          className={`celdas-icon ${isDeleteModify ? "celdas-icon-small" : isDates ? "celdas-icon-medium" : "celdas-icon-normal"}`}
        >
          <Icon name="filter" />
        </div>
      )}
      {isDates && (
        <div
          className={`celdas-icon ${isDates ? "celdas-icon-medium" : "celdas-icon-normal"} ${isBlack ? "celdas-icon-black" : ""}`}
        >
          <Icon name="calendar" />
        </div>
      )}
      {isDates && (
        <p
          className={`celdas-date-text ${isBlack ? "celdas-date-text-black" : ""}`}
        >
          23/12/2025
        </p>
      )}
      {isDeleteModify && (
        <>
          <div
            className={`celdas-icon celdas-icon-small ${isBlack ? "celdas-icon-black" : ""}`}
          >
            <Icon name="trash" />
          </div>
          <div
            className={`celdas-icon celdas-icon-small ${isBlack ? "celdas-icon-black" : ""}`}
          >
            <Icon name="pencil" />
          </div>
          <div
            className={`celdas-icon celdas-icon-small ${isBlack ? "celdas-icon-black" : ""}`}
          >
            <Icon name="treePoints" />
          </div>
        </>
      )}
    </div>
  );
}
export default Celdas;

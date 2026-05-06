import './Celdas.css';
import Icon from '../icons/icon';

function Celdas({ property1 = "Table", property2 = "White" }) {
  const isDates = property1 === "Dates";
  const isDeleteModify = property1 === "DeleteModify";
  const isTable = property1 === "Table";
  const isTexto = property1 === "Texto";

  const isBlack = property2 === "Black";
  const isGray = property2 === "Gray";
  const isWhite = property2 === "White";

  let className = 'celdas-cell';

  if (isDeleteModify) {
    className += isBlack ? ' celdas-delete-black' : isGray ? ' celdas-delete-gray' : ' celdas-delete-white';
  } else if (isDates) {
    className += isBlack ? ' celdas-dates-black' : isGray ? ' celdas-dates-gray' : ' celdas-dates-white';
  } else if (isTexto) {
    className += isBlack ? ' celdas-texto-black' : isGray ? ' celdas-texto-gray' : ' celdas-texto-white';
  } else if (isTable) {
    className += isBlack ? ' celdas-table-black' : isGray ? ' celdas-table-gray' : ' celdas-table-white';
  }

  return (
    <div className={className}>
      {(isTable || isTexto) && (
        <p className={`celdas-text ${isTexto ? 'celdas-text-texto' : 'celdas-text-table'} ${isTexto && isBlack ? 'celdas-text-black' : isTable && isBlack ? 'celdas-text-table-black' : ''}`}>
          {isTexto && isBlack ? "Administrador" : isTexto ? "Administrator" : "Titulo de columna"}
        </p>
      )}
      {(isTable) && (
        <div className={`celdas-icon ${isDeleteModify ? 'celdas-icon-small' : isDates ? 'celdas-icon-medium' : 'celdas-icon-normal'}`}>
          <Icon name="filter" />
        </div>
      )}
      {isDates && (
        <div className={`celdas-icon ${isDeleteModify ? 'celdas-icon-small' : isDates ? 'celdas-icon-medium' : 'celdas-icon-normal'}`}>
          <Icon name="calendar" />
        </div>
      )}
      {isDates && (
        <p className={`celdas-date-text ${isBlack ? 'celdas-date-text-black' : ''}`}>
          23/12/2025
        </p>
      )}
      {isDeleteModify && (
        <>
          <div className="celdas-icon celdas-icon-small">
            <Icon name="trash" />
          </div>
          <div className="celdas-icon celdas-icon-small">
            <Icon name="pencil" />
          </div>
          <div className="celdas-icon celdas-icon-small">
            <Icon name="treePoints" />
          </div>
        </>
      )}
    </div>
  );
}

export default Celdas;
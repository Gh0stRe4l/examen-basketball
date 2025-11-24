import React from "react";
import "../styles/bem/stats.css";

const Stats = ({ totalItems, filteredItems, lastSearch }) => {
  return (
    <div className="stats">
      <h2 className="stats__title">Estadísticas</h2>

      <div className="stats__grid">
        <div className="stats__card">
          <p className="stats__label">Total de registros</p>
          <p className="stats__value">{totalItems}</p>
        </div>

        <div className="stats__card">
          <p className="stats__label">Resultados filtrados</p>
          <p className="stats__value">{filteredItems}</p>
        </div>

        <div className="stats__card">
          <p className="stats__label">Última búsqueda</p>
          <p className="stats__value stats__value--small">
            {lastSearch || "—"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;

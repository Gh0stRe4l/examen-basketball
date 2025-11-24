// src/components/SearchBar/SearchBar.jsx

import React from "react";
import "../../styles/bem/searchbar.css";

export default function SearchBar({
  value,
  onChange,
  onClear,
  resultsCount
}) {
  return (
    <div className="searchbar">
      <input
        className="searchbar__input"
        type="text"
        placeholder="Buscar jugador..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {value.length > 0 && (
        <button className="searchbar__clear" onClick={onClear}>
          ✖
        </button>
      )}

      <p className="searchbar__results">
        Resultados: {resultsCount}
      </p>
    </div>
  );
}

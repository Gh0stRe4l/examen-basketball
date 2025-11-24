// src/components/SearchHistory/SearchHistory.jsx

import React from "react";
import "../../styles/bem/searchbar.css";

export default function SearchHistory({ history, onSelect }) {
  if (history.length === 0) return null;

  return (
    <div className="searchbar__history">
      <h4 className="searchbar__history-title">Historial:</h4>

      <div className="searchbar__history-list">
        {history.map((item, index) => (
          <button
            key={index}
            className="searchbar__history-item"
            onClick={() => onSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}


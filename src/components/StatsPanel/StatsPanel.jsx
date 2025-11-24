// src/components/StatsPanel/StatsPanel.jsx

import React, { useMemo } from "react";
import "../../styles/bem/stats.css";

export default function StatsPanel({ players }) {
  const stats = useMemo(() => {
    if (players.length === 0) return null;

    const avg = (key) =>
      (players.reduce((sum, p) => sum + p[key], 0) / players.length).toFixed(1);

    return {
      count: players.length,
      avgPoints: avg("points"),
      avgAssists: avg("assists"),
      avgRebounds: avg("rebounds"),
    };
  }, [players]);

  if (!stats) return null;

  return (
    <div className="stats">
      <div className="stats__card">
        <h3 className="stats__title">Estadísticas Generales</h3>

        <div className="stats__grid">
          <div className="stats__item">
            <span className="stats__label">Jugadores:</span>
            <span className="stats__value">{stats.count}</span>
          </div>

          <div className="stats__item">
            <span className="stats__label">Promedio PTS:</span>
            <span className="stats__value">{stats.avgPoints}</span>
          </div>

          <div className="stats__item">
            <span className="stats__label">Promedio AST:</span>
            <span className="stats__value">{stats.avgAssists}</span>
          </div>

          <div className="stats__item">
            <span className="stats__label">Promedio REB:</span>
            <span className="stats__value">{stats.avgRebounds}</span>
          </div>
        </div>
      </div>
    </div>
  );
}



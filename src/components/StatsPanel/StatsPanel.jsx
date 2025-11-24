// src/components/StatsPanel/StatsPanel.jsx

import React from "react";
import "../../styles/global.css";

export default function StatsPanel({ players }) {
  if (!players || players.length === 0) return null;

  const totalPlayers = players.length;
  const avgPoints = (players.reduce((a, b) => a + b.points, 0) / totalPlayers).toFixed(1);
  const avgAssists = (players.reduce((a, b) => a + b.assists, 0) / totalPlayers).toFixed(1);
  const avgRebounds = (players.reduce((a, b) => a + b.rebounds, 0) / totalPlayers).toFixed(1);

  return (
    <div className="stats-panel">
      <h2 className="stats-panel__title">📊 Estadísticas Globales</h2>

      <div className="stats-panel__grid">
        <div className="stats-panel__card">
          <h3>{totalPlayers}</h3>
          <p>Jugadores Totales</p>
        </div>

        <div className="stats-panel__card">
          <h3>{avgPoints}</h3>
          <p>Promedio de Puntos</p>
        </div>

        <div className="stats-panel__card">
          <h3>{avgAssists}</h3>
          <p>Promedio de Asistencias</p>
        </div>

        <div className="stats-panel__card">
          <h3>{avgRebounds}</h3>
          <p>Promedio de Rebotes</p>
        </div>
      </div>
    </div>
  );
}


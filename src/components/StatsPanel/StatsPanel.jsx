import React from "react";

export default function StatsPanel({ players }) {
  if (players.length === 0) return null;

  const avgPoints = (players.reduce((a, b) => a + b.points, 0) / players.length).toFixed(1);
  const avgAssists = (players.reduce((a, b) => a + b.assists, 0) / players.length).toFixed(1);
  const avgRebounds = (players.reduce((a, b) => a + b.rebounds, 0) / players.length).toFixed(1);

  return (
    <div className="stats">
      <p><b>Promedio PTS:</b> {avgPoints}</p>
      <p><b>Promedio AST:</b> {avgAssists}</p>
      <p><b>Promedio REB:</b> {avgRebounds}</p>
    </div>
  );
}

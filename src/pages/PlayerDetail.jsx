// src/pages/PlayerDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { players } from "../data/players";
import "../styles/playerDetail.css"; // crea este archivo para estilos opcionales

export default function PlayerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const player = players.find((p) => p.id === parseInt(id));

  if (!player) {
    return (
      <div className="player-detail not-found">
        <h2>Jugador no encontrado</h2>
        <button onClick={() => navigate("/")} className="btn">
          Volver a Home
        </button>
      </div>
    );
  }

  return (
    <div className="player-detail">
      <h1>{player.name}</h1>
      <div className="player-info">
        <p><strong>Equipo:</strong> {player.team}</p>
        <p><strong>Posición:</strong> {player.position}</p>
        <p><strong>Edad:</strong> {player.age}</p>
        <p><strong>PTS:</strong> {player.pts}</p>
        <p><strong>AST:</strong> {player.ast}</p>
        <p><strong>REB:</strong> {player.reb}</p>
      </div>
      <button onClick={() => navigate(-1)} className="btn">
        Volver
      </button>
    </div>
  );
}

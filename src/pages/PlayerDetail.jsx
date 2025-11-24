// src/pages/PlayerDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { players } from "../data/players";

export default function PlayerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const player = players.find((p) => p.id === parseInt(id));

  if (!player) {
    return (
      <div>
        <h2>Jugador no encontrado</h2>
        <button onClick={() => navigate("/")}>Volver a Home</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{player.name}</h1>
      <p>Equipo: {player.team}</p>
      <p>Posición: {player.position}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
}

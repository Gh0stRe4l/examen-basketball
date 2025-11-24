// src/components/Modal/Modal.jsx
import React from "react";
import "../../styles/global.css";

export default function Modal({ player, onClose }) {
  if (!player) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h2>{player.name}</h2>
          <button className="modal__close" onClick={onClose}>X</button>
        </div>
        <img
          src={player.img || "https://via.placeholder.com/300x400?text=No+Image"}
          alt={player.name}
          className="modal__img"
        />
        <ul className="modal__stats">
          <li><strong>Edad:</strong> {player.age}</li>
          <li><strong>Equipo:</strong> {player.team}</li>
          <li><strong>Posición:</strong> {player.position}</li>
          <li><strong>Altura:</strong> {player.height} cm</li>
          <li><strong>Puntos:</strong> {player.points}</li>
          <li><strong>Asistencias:</strong> {player.assists}</li>
          <li><strong>Rebotes:</strong> {player.rebounds}</li>
        </ul>
      </div>
    </div>
  );
}



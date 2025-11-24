// src/components/Modal/Modal.jsx

import React from "react";
import "../../styles/bem/modal.css";

export default function Modal({ isOpen, onClose, player, darkMode }) {
  if (!isOpen || !player) return null;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()} // evita cerrar al hacer click dentro
      >
        {/* HEADER */}
        <div className="modal__header">
          <h2>{player.name}</h2>
          <button className="modal__close" onClick={onClose}>X</button>
        </div>

        {/* IMAGEN */}
        <img className="modal__img" src={player.img} alt={player.name} />

        {/* INFO */}
        <ul className="modal__stats">
          <li><strong>Edad:</strong> {player.age}</li>
          <li><strong>Equipo:</strong> {player.team}</li>
          <li><strong>Posición:</strong> {player.position}</li>
          <li><strong>Altura:</strong> {player.height} cm</li>
          <li><strong>Puntos por juego:</strong> {player.points}</li>
          <li><strong>Asistencias:</strong> {player.assists}</li>
          <li><strong>Rebotes:</strong> {player.rebounds}</li>
        </ul>
      </div>
    </div>
  );
}


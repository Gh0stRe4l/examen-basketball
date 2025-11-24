import React from "react";
import "../../styles/bem/modal.css";

export default function Modal({ player, onClose }) {
  if (!player) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close" onClick={onClose}>✖</button>

        <img className="modal__img" src={player.img} alt={player.name} />

        <h2 className="modal__title">{player.name}</h2>

        <p className="modal__text"><b>Equipo:</b> {player.team}</p>
        <p className="modal__text"><b>Edad:</b> {player.age}</p>
        <p className="modal__text"><b>Posición:</b> {player.position}</p>
        <p className="modal__text"><b>Altura:</b> {player.height} cm</p>

        <h3>Stats</h3>
        <p className="modal__text"><b>PTS:</b> {player.points}</p>
        <p className="modal__text"><b>AST:</b> {player.assists}</p>
        <p className="modal__text"><b>REB:</b> {player.rebounds}</p>
      </div>
    </div>
  );
}

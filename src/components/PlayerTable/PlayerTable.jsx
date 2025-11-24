// src/components/PlayerTable/PlayerTable.jsx
import React from "react";

export default function PlayerTable({ players, onSelect }) {
  return (
    <table className="player-table">
      <thead className="player-table__head">
        <tr>
          <th className="player-table__header">Foto</th>
          <th className="player-table__header">Nombre</th>
          <th className="player-table__header">Edad</th>
          <th className="player-table__header">Equipo</th>
          <th className="player-table__header">Posición</th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => (
          <tr
            key={player.id}
            className="player-table__row"
            onClick={() => onSelect(player)}
            style={{ cursor: "pointer" }}
          >
            <td className="player-table__cell">
              <img
                src={player.img}
                alt={player.name}
                className="player-table__img"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "50%"
                }}
              />
            </td>
            <td className="player-table__cell">{player.name}</td>
            <td className="player-table__cell">{player.age}</td>
            <td className="player-table__cell">{player.team}</td>
            <td className="player-table__cell">{player.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}




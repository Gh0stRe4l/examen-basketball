// src/components/PlayerTable/PlayerTable.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/bem/table.css";

export default function PlayerTable({ players }) {
  const navigate = useNavigate();

  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__row table__row--head">
          <th className="table__cell table__cell--head">Nombre</th>
          <th className="table__cell table__cell--head">Equipo</th>
          <th className="table__cell table__cell--head">Edad</th>
          <th className="table__cell table__cell--head">PTS</th>
          <th className="table__cell table__cell--head">AST</th>
          <th className="table__cell table__cell--head">REB</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {players.map((player) => (
          <tr
            key={player.id}
            onClick={() => navigate(`/players/${player.id}`)}
            style={{ cursor: "pointer" }}
            className="table__row"
          >
            <td className="table__cell">{player.name}</td>
            <td className="table__cell">{player.team}</td>
            <td className="table__cell">{player.age}</td>
            <td className="table__cell">{player.pts}</td>
            <td className="table__cell">{player.ast}</td>
            <td className="table__cell">{player.reb}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

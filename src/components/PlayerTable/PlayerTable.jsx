import React from "react";
import PlayerRow from "../PlayerRow/PlayerRow";
import "../../styles/bem/table.css";

export default function PlayerTable({ players, onSelect }) {
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
          <PlayerRow key={player.id} player={player} onSelect={onSelect} />
        ))}
      </tbody>
    </table>
  );
}

import React from "react";

export default function PlayerRow({ player, onSelect }) {
  return (
    <tr
      className="table__row"
      onClick={() => onSelect(player)}
      style={{ cursor: "pointer" }}
    >
      <td className="table__cell">{player.name}</td>
      <td className="table__cell">{player.team}</td>
      <td className="table__cell">{player.age}</td>
      <td className="table__cell">{player.points}</td>
      <td className="table__cell">{player.assists}</td>
      <td className="table__cell">{player.rebounds}</td>
    </tr>
  );
}

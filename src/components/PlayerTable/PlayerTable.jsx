// src/components/PlayerTable/PlayerTable.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function PlayerTable({ players }) {
  const navigate = useNavigate();

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Equipo</th>
        </tr>
      </thead>
      <tbody>
        {players.map((p) => (
          <tr
            key={p.id}
            onClick={() => navigate(`/players/${p.id}`)}
            style={{ cursor: "pointer" }}
          >
            <td>{p.name}</td>
            <td>{p.team}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

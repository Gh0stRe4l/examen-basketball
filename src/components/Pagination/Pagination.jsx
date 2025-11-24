// src/components/Pagination/Pagination.jsx
import React from "react";
import "../../styles/global.css"; // o la ruta correcta según tu proyecto

export default function Pagination({ currentPage, total, perPage, onChange }) {
  const totalPages = Math.ceil(total / perPage);

  if (totalPages <= 1) return null; // no mostramos si hay 1 página

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((num) => (
        <button
          key={num}
          className={`pagination__btn ${currentPage === num ? "pagination__btn--active" : ""}`}
          onClick={() => onChange(num)}
        >
          {num}
        </button>
      ))}
    </div>
  );
}



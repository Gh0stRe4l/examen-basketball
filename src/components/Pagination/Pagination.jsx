import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  onNext,
  onPrev
}) {
  return (
    <div className="pagination">
      <button
        className="pagination__btn"
        onClick={onPrev}
        disabled={currentPage === 1}
      >
        ◀
      </button>

      <span className="pagination__info">
        Página {currentPage} de {totalPages}
      </span>

      <button
        className="pagination__btn"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        ▶
      </button>
    </div>
  );
}


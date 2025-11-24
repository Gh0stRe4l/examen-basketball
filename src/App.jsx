import React, { useState, useEffect, useMemo } from "react";
import { players } from "./data/players";
import { useDebounce } from "./hooks/useDebounce";

import SearchBar from "./components/SearchBar/SearchBar";
import PlayerTable from "./components/PlayerTable/PlayerTable";
import Pagination from "./components/Pagination/Pagination";
import StatsPanel from "./components/StatsPanel/StatsPanel";
import Modal from "./components/Modal/Modal";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import SearchHistory from "./components/SearchHistory/SearchHistory";

import "./styles/global.css";

export default function App() {
  // 🔎 Buscador
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  // ⭐ Favoritos
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // 🕶️ Dark Mode
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  // 📝 Historial de Búsqueda
  const [searchHistory, setSearchHistory] = useState(() => {
    const saved = localStorage.getItem("searchHistory");
    return saved ? JSON.parse(saved) : [];
  });

  // 📄 Modal
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 📄 Paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 🔃 Ordenamiento
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  // ----------------------------------------------------
  // ⭐ Persistencia de favoritos
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // 🕶️ Persistencia Dark Mode
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // 📝 Guardar historial
  useEffect(() => {
    if (debouncedSearch.trim().length < 2) return;

    setSearchHistory((prev) => {
      const updated = [debouncedSearch, ...prev.filter((s) => s !== debouncedSearch)];
      const limited = updated.slice(0, 5);

      localStorage.setItem("searchHistory", JSON.stringify(limited));
      return limited;
    });
  }, [debouncedSearch]);

  // ----------------------------------------------------
  // 📌 Función de filtrado
  const filteredPlayers = useMemo(() => {
    let filtered = [...players];

    if (debouncedSearch.trim().length > 0) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    // Ordenamiento
    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];

        if (valA < valB) return sortConfig.direction === "asc" ? -1 : 1;
        if (valA > valB) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [debouncedSearch, sortConfig]);

  // ----------------------------------------------------
  // 📊 Estadísticas con useMemo
  const stats = useMemo(() => {
    if (filteredPlayers.length === 0) return { avgAge: 0, avgPoints: 0, total: 0 };

    const avgAge =
      filteredPlayers.reduce((sum, p) => sum + p.age, 0) / filteredPlayers.length;

    const avgPoints =
      filteredPlayers.reduce((sum, p) => sum + p.points, 0) / filteredPlayers.length;

    return {
      avgAge: avgAge.toFixed(1),
      avgPoints: avgPoints.toFixed(1),
      total: filteredPlayers.length,
    };
  }, [filteredPlayers]);

  // ----------------------------------------------------
  // 🧮 Paginación
  const start = (currentPage - 1) * itemsPerPage;
  const paginatedPlayers = filteredPlayers.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(filteredPlayers.length / itemsPerPage);

  // ----------------------------------------------------
  // ⭐ Favoritos handler
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // ----------------------------------------------------
  // 🔽 Abrir modal
  const openModal = (player) => {
    setSelectedPlayer(player);
    setIsModalOpen(true);
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <h1 className="title">🏀 Basketball Dashboard</h1>

      <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
        resultsCount={filteredPlayers.length}
      />

      <SearchHistory
        history={searchHistory}
        onSelectSearch={(value) => setSearchTerm(value)}
        onClearHistory={() => setSearchHistory([])}
      />

      <StatsPanel stats={stats} darkMode={darkMode} />

      <PlayerTable
        players={paginatedPlayers}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onRowClick={openModal}
        sortConfig={sortConfig}
        onSort={setSortConfig}
        darkMode={darkMode}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(p) => setCurrentPage(p)}
      />

      <Modal
        isOpen={isModalOpen}
        player={selectedPlayer}
        onClose={() => setIsModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}


// src/pages/Home.jsx
import React, { useState } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import PlayerTable from "../components/PlayerTable/PlayerTable";
import Stats from "../components/Stats/Stats";
import Modal from "../components/Modal/Modal";
import Pagination from "../components/Pagination/Pagination";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import SearchHistory from "../components/SearchHistory/SearchHistory";
import { players as playersData } from "../data/players";
import useDebounce from "../hooks/useDebounce";
import "../styles/global.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 4;

  const [history, setHistory] = useState([]);

  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Filtrado de jugadores según búsqueda
  const filteredPlayers = playersData.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // Paginación
  const indexOfLast = currentPage * playersPerPage;
  const indexOfFirst = indexOfLast - playersPerPage;
  const currentPlayers = filteredPlayers.slice(indexOfFirst, indexOfLast);

  // Manejo de búsqueda
  const handleSearchChange = (value) => {
    setSearch(value);

    if (value.trim() !== "" && !history.includes(value)) {
      setHistory([value, ...history.slice(0, 4)]);
    }

    setCurrentPage(1);
  };

  const clearSearch = () => setSearch("");

  const openPlayerModal = (player) => setSelectedPlayer(player);
  const closePlayerModal = () => setSelectedPlayer(null);

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      {/* Toggle de tema */}
      <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} />

      {/* Estadísticas */}
      <Stats
        totalItems={playersData.length}
        filteredItems={filteredPlayers.length}
        lastSearch={debouncedSearch}
      />

      {/* Barra de búsqueda */}
      <SearchBar
        value={search}
        onChange={handleSearchChange}
        onClear={clearSearch}
        resultsCount={filteredPlayers.length}
      />

      {/* Historial de búsqueda */}
      <SearchHistory history={history} onSelect={(v) => setSearch(v)} />

      {/* Tabla de jugadores */}
      <PlayerTable players={currentPlayers} onSelect={openPlayerModal} />

      {/* Paginación */}
      <Pagination
        currentPage={currentPage}
        total={filteredPlayers.length}
        perPage={playersPerPage}
        onChange={(page) => setCurrentPage(page)}
      />

      {/* Modal de jugador seleccionado */}
      {selectedPlayer && (
        <Modal player={selectedPlayer} onClose={closePlayerModal} />
      )}
    </div>
  );
}

// src/App.jsx

import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PlayerTable from "./components/PlayerTable/PlayerTable";
import StatsPanel from "./components/StatsPanel/StatsPanel";
import Modal from "./components/Modal/Modal";
import Pagination from "./components/Pagination/Pagination";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import SearchHistory from "./components/SearchHistory/SearchHistory";
import { players as playersData } from "./data/players";
import useDebounce from "./hooks/useDebounce";
import "./styles/global.css";

export default function App() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 4;

  const [history, setHistory] = useState([]);

  // 🌙 Estado del tema (modo claro/oscuro)
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  // 🌙 Aplicar el tema al <body> + guardar en localStorage
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const filteredPlayers = playersData.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const indexOfLast = currentPage * playersPerPage;
  const indexOfFirst = indexOfLast - playersPerPage;
  const currentPlayers = filteredPlayers.slice(indexOfFirst, indexOfLast);

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
    <div className="container">

      {/* 🌙 Botón de tema con props */}
      <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} />

      <StatsPanel players={filteredPlayers} />

      <SearchBar
        value={search}
        onChange={handleSearchChange}
        onClear={clearSearch}
        resultsCount={filteredPlayers.length}
      />

      <SearchHistory history={history} onSelect={(v) => setSearch(v)} />

      <PlayerTable players={currentPlayers} onSelect={openPlayerModal} />

      <Pagination
        currentPage={currentPage}
        total={filteredPlayers.length}
        perPage={playersPerPage}
        onChange={(page) => setCurrentPage(page)}
      />

      {selectedPlayer && (
        <Modal player={selectedPlayer} onClose={closePlayerModal} />
      )}
    </div>
  );
}


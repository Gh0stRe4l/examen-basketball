// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import SearchBar from "../components/SearchBar/SearchBar";
import PlayerTable from "../components/PlayerTable/PlayerTable";
import Stats from "../components/Stats/Stats";
import Modal from "../components/Modal/Modal";
import Pagination from "../components/Pagination/Pagination";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle";
import SearchHistory from "../components/SearchHistory/SearchHistory";
import { players as playersData } from "../data/players";
import "../styles/global.css";

export default function Home() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const playersPerPage = 4;
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  const filteredPlayers = playersData.filter(p =>
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
      <ThemeToggle darkMode={darkMode} onToggle={toggleTheme} />
      <Stats
        totalItems={playersData.length}
        filteredItems={filteredPlayers.length}
        lastSearch={debouncedSearch}
      />
      <SearchBar
        value={search}
        onChange={handleSearchChange}
        onClear={clearSearch}
        resultsCount={filteredPlayers.length}
      />
      <SearchHistory history={history} onSelect={v => setSearch(v)} />
      <PlayerTable players={currentPlayers} onSelect={openPlayerModal} />
      <Pagination
        currentPage={currentPage}
        total={filteredPlayers.length}
        perPage={playersPerPage}
        onChange={page => setCurrentPage(page)}
      />
      {selectedPlayer && <Modal player={selectedPlayer} onClose={closePlayerModal} />}
    </div>
  );
}



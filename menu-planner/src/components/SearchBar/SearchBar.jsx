import React, { useState } from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInputChange = (ev) => {
    setSearchTerm(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <div>
      <form className="s-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

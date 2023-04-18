import React, { useState, useEffect } from "react";
import jsonData from "../api.json";
import "./SearchBar.css";

function Search() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleReset = () => {
    setSearchTerm("");
    setFilteredData([]);
  };

  return (
    <div className="Searchbar">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="검색"
        />
        <button type="submit">검색</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {filteredData.length > 0 ? (
        <div>
          {filteredData.map((item) => (
            <div className="Searchcard" key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.year}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}

export default Search;

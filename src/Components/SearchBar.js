import React, { useState, useEffect } from "react";
import jsonData from "../api.json";
import "./SearchBar.css";
import { FiRotateCcw, FiSearch } from "react-icons/fi";

function Search() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searched, setSearched] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  //자동검색을 위한 useEffect
  useEffect(() => {
    if (searchTerm === "") {
      setSuggestions([]);
    } else {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [searchTerm, data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (searchTerm === "") {
      setFilteredData([]);
    } else {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
    setSearched(true);
  }; //검색어가 없을 때는 값을 출력하지 않음.

  const handleReset = () => {
    setSearchTerm("");
    setFilteredData([]);
    setSearched(false);
  };

  const handleSuggestionClick = (suggestions) => {
    setSearchTerm(suggestions.title);
    setFilteredData([suggestions]);
    setSearched(true);
  }; //자동완성 로직을 수행하여 검색어에 맞는 결과를 계산

  return (
    <div className="Searchbar">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="검색"
        />
        {searchTerm && (
          <button onClick={handleReset}>
            <i aria-hidden="true">
              <FiRotateCcw />
            </i>
          </button>
        )}
        <button type="submit">
          <FiSearch />
        </button>
      </form>

      {searched && filteredData.length === 0 ? (
        <div>검색 결과가 없습니다.</div>
      ) : filteredData.length > 0 ? (
        <div>
          {filteredData.map((item) => (
            <div className="Searchcard" key={item.id}>
              <h4>{item.title}</h4>
              <h5>{item.year}</h5>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      ) : (
        //자동검색
        <ul>
          {suggestions.map((suggestions) => (
            <li
              key={suggestions.id}
              onClick={() => handleSuggestionClick(suggestions)}
            >
              {suggestions.title}
            </li>
          ))}
        </ul>
      )}
    </div> //검색 결과값이 없을 때는 출력하지 않는다.
  );
}

export default Search;

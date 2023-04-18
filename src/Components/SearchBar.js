import React, { useState, useEffect } from "react";
import jsonData from "../api.json";
import "./SearchBar.css";

function Search() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    setData(jsonData);
  }, []);

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
  }; //검색어가 없을 때는 값을 출력하지 않음.

  const handleReset = () => {
    setSearchTerm("");
    setFilteredData([]);
    setSearched(false);
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

      {searched && filteredData.length === 0 ? (
        <div>검색 결과가 없습니다.</div>
      ) : filteredData.length > 0 ? (
        <div>
          {filteredData.map((item) => (
            <div className="Searchcard" key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.year}</p>
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div> //검색 결과값이 없을 때는 출력하지 않는다.
  );
}

export default Search;

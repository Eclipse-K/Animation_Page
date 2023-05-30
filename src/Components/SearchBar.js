import React, { useState, useEffect, useRef } from "react";
import jsonData from "../api.json";
import "./SearchBar.css";
import { FiRotateCcw, FiSearch } from "react-icons/fi";

function Search() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searched, setSearched] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const suggestionRef = useRef();

  useEffect(() => {
    setData(jsonData); //초기 데이터를 설정합니다.
  }, []);

  //자동검색을 위한 useEffect
  useEffect(() => {
    if (searchTerm === "") {
      setSuggestions([]); // 검색어가 없을 경우 자동완성 목록을 빈 배열로 설정합니다.
    } else {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      ); // 검색어와 일치하는 항목을 필터링하여 배열을 생성합니다.
      setSuggestions(filtered); // 생성된 배열을 자동완성 목록으로 설정합니다.
    }
  }, [searchTerm, data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // 검색어 입력값을 업데이트합니다.
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
    setSuggestions([]);
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
    setSuggestions([]);
  }; // 자동완성 항목을 클릭했을 때 검색어와 결과를 업데이트 합니다.

  const handleOutsideClick = (event) => {
    if (
      suggestionRef.current &&
      !suggestionRef.current.contains(event.target)
    ) {
      setSuggestions([]); // 자동완성 목록 외에 영역을 클릭한 경우 자동완성 목록을 닫습니다.
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (filteredData.length > 0) {
      setSuggestions([]); // 검색 결과가 있을 때 자동완성 목록을 닫습니다.
    }
  }, [filteredData]);

  return (
    <div className="Searchbar">
      <form onSubmit={handleFormSubmit}>
        <div className="Search-container">
          <div className="Search-input-container">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="검색"
              inputMode="text"
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
          </div>
          {suggestions.length > 0 && (
            <ul className="Suggestion_title" ref={suggestionRef}>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.title}
                </li>
              ))}
            </ul> //자동완성 기능
          )}
        </div>
      </form>

      {searched && filteredData.length === 0 && suggestions.length === 0 ? (
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
      ) : searched ? (
        <div>검색 결과가 없습니다.</div>
      ) : null}
    </div> //검색 결과값이 없을 때는 출력하지 않는다.
  );
}

export default Search;

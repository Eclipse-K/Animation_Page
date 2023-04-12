import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={query} onChange={handleQueryChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;

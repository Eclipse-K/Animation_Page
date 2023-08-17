import NavDrop from "./NavDrop";
import "./App.css";
import Search from "./SearchBar";
import Copyright from "./Copyright";
import { Route, Routes } from "react-router-dom";
import List from "./List";

function App() {
  return (
    <div className="App-container">
      <div>
        <NavDrop />
      </div>

      <Search />

      <Copyright />

      <Routes>
        <Route path="/List" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;

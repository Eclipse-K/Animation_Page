import NavDrop from "./NavDrop";
import "./App.css";
import Search from "./SearchBar";
import Copyright from "./Copyright";
import { Route, Routes } from "react-router-dom";
import List from "./List";
import Since1970 from "./Since1970";
import Since1980 from "./Since1980";
import Since1990 from "./Since1990";
import Since2000 from "./Since2000";

function App() {
  return (
    <div className="App-container">
      <div>
        <NavDrop />
      </div>

      <Search />

      <Copyright />

      <Routes>
        <Route path="/" />
        <Route path="/List" element={<List />} />
        <Route path="/Since1970" element={<Since1970 />} />
        <Route path="/Since1980" element={<Since1980 />} />
        <Route path="/Since1990" element={<Since1990 />} />
        <Route path="/Since2000" element={<Since2000 />} />
      </Routes>
    </div>
  );
}

export default App;

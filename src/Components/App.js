import { Route, Routes } from "react-router-dom";
import "./App.css";
import Since1970 from "./Since/Since1970";
import Since1980 from "./Since/Since1980";
import Since1990 from "./Since/Since1990";
import Since2000 from "./Since/Since2000";
import Home from "./Home";
import SearchBar from "./SearchBar";
import Copyright from "./Copyright";
import NavDrop from "./NavDrop";
import Since2010 from "./Since/Since2010";
import Since2020 from "./Since/Since2020";

function App() {
  return (
    <div className="App-container">
      <div className="App-box">
        <NavDrop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Since1970" element={<Since1970 />} />
          <Route path="/Since1980" element={<Since1980 />} />
          <Route path="/Since1990" element={<Since1990 />} />
          <Route path="/Since2000" element={<Since2000 />} />
          <Route path="/Since2010" element={<Since2010 />} />
          <Route path="/Since2020" element={<Since2020 />} />
          <Route path="/SearchBar" element={<SearchBar />} />
        </Routes>

        <Copyright />
      </div>
    </div>
  );
}

export default App;

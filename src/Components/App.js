import { Route, Routes } from "react-router-dom";
import "./App.css";
import Since1970 from "./Since/Since1970";
import Since1980 from "./Since/Since1980";
import Since1990 from "./Since/Since1990";
import Since2000 from "./Since/Since2000";
import Home from "./Home";
import SearchBar from "./SearchBar";

function App() {
  return (
    <div className="App-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Since1970" element={<Since1970 />} />
        <Route path="/Since1980" element={<Since1980 />} />
        <Route path="/Since1990" element={<Since1990 />} />
        <Route path="/Since2000" element={<Since2000 />} />
        <Route path="/SearchBar" element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;

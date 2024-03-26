import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Since1970 from "./Since/Since1970";
import Since1980 from "./Since/Since1980";
import Since1990 from "./Since/Since1990";
import Since2000 from "./Since/Since2000";
import Home from "./Home";
import SearchBar from "./SearchBar";
import Copyright from "./Copyright";
import NavDrop from "./NavDrop";

function App() {
  const [modeChange, setModeChange] = useState(false);
  //시스템 설정에 따라 테마 색상이 변함.

  useEffect(() => {
    const prefersModeChange = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setModeChange(prefersModeChange);
  }, []);

  return (
    <div className={modeChange ? "dark-mode" : "light-mode"}>
      <NavDrop />
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
      <Copyright />
    </div>
  );
}

export default App;

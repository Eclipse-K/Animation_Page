import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NavDrop from "./NavDrop";
import "./App.css";
import Search from "./SearchBar";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="enter">
      <div>
        <BrowserRouter>
          <NavDrop />
        </BrowserRouter>
      </div>
      <Search />
      <div className="carbutton">
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "숨기기" : "흰둥이"}
        </button>
      </div>
      {show && <Home />}
    </div>
  );
}

export default App;

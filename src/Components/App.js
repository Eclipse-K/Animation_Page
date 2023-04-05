import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import NavDrop from "./NavDrop";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <BrowserRouter>
          <NavDrop />
        </BrowserRouter>
      </div>
      <div>
        <button
          className="cbutton"
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "숨기기" : "보이기"}
        </button>
      </div>
      {show && <Home />}
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Career from "./Career";
import NavDrop from "./NavDrop";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <NavDrop />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

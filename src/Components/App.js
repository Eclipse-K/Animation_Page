import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import NavDrop from "./NavDrop";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </div>
      <NavDrop />
    </div>
  );
}

export default App;

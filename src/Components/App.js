import { BrowserRouter } from "react-router-dom";
import NavDrop from "./NavDrop";
import "./App.css";
import Search from "./SearchBar";
import Copyright from "./Copyright";

function App() {
  return (
    <div className="enter">
      <div>
        <BrowserRouter>
          <NavDrop />
        </BrowserRouter>
      </div>

      <Search />

      <Copyright />
    </div>
  );
}

export default App;

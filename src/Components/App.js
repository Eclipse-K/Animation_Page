import { BrowserRouter } from "react-router-dom";
import NavDrop from "./NavDrop";
import "./App.css";
import Search from "./SearchBar";
import Copyright from "./Copyright";
import ScrollTopButton from "./ScrollTopButton";

function App() {
  return (
    <div className="enter">
      <div>
        <BrowserRouter>
          <NavDrop />
        </BrowserRouter>
      </div>

      <Search />
      <ScrollTopButton />

      <Copyright />
    </div>
  );
}

export default App;

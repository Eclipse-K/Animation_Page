import NavDrop from "./NavDrop";
import "./App.css";
import Search from "./SearchBar";
import Copyright from "./Copyright";

function App() {
  return (
    <div className="App-container">
      <div>
        <NavDrop />
      </div>

      <Search />

      <Copyright />
    </div>
  );
}

export default App;

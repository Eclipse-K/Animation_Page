import AniList from "./AniList";
import NavbarDrop from "./Navbar";
import item from "../Animation.json";

function App() {
  return (
    <div>
      <NavbarDrop />
      <AniList item={item} />
    </div>
  );
}

export default App;

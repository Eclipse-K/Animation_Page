import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

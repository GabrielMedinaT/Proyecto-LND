import "./App.css";
import Earth from "./Components/Earth";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import { useState } from "react";

function App() {
  const [render, setRender] = useState("home");
  console.log(render);
  return (
    <div className="App">
      <NavBar render={render} setRender={setRender} />
      {render === "Home" && <Earth />}
      {render === "About" && <About />}
    </div>
  );
}

export default App;

import "./App.css";
import Earth from "./Components/Earth";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import { useState } from "react";
import Left from "./Components/Left";
import ISS from "./Components/ISS";

function App() {
  const [render, setRender] = useState("home");
  console.log(render);
  return (
    <div className="App">
      <NavBar render={render} setRender={setRender} />
      <Left render={render} setRender={setRender} />
      {render === "Home" && <Earth />}
      {render === "About" && <About />}
      {render === "iss" && <ISS />}
    </div>
  );
}

export default App;

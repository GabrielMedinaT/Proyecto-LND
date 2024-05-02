import "./App.css";
import Earth from "./Components/Earth";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import { useState } from "react";
import Left from "./Components/Left";
import ISS from "./Components/ISS";
import Mas from "./Components/Mas";
import Footer from "./Components/Footer";
import SolarSystem from "./Components/SolarSystem";
import Registro from "./Components/Registro";
function App() {
  const [render, setRender] = useState("home");

  console.log(render);
  return (
    <>
      <NavBar render={render} setRender={setRender} />
      <div className="App">
        <Left render={render} setRender={setRender} />
        {render === "Home" && <SolarSystem />}
        {render === "About" && <About />}
        {render === "iss" && <ISS />}
        {render === "mas" && <Mas />}
        {render === "registro" && <Registro />}
      </div>
      <Footer />
    </>
  );
}

export default App;

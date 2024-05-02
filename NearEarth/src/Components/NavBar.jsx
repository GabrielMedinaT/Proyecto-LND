import "./NavBar.css";

const NavBar = ({ setRender }) => {
  const changeRender = (value) => {
    setRender(value);
  };
  return (
    <div className="NavBar">
      <div className="logo"></div>
      <div className="menu">
        <ul className="menulist">
          <li onClick={() => changeRender("Home")}>Home</li>
          <li onClick={() => changeRender("About")}>About</li>
          <li onClick={() => changeRender("Contact")}>Contact</li>
          <li onClick={() => changeRender("registro")}>Registro</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default NavBar;

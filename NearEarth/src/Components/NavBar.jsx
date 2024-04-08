import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="logo"></div>
      <div className="menu">
        <ul className="menulist">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

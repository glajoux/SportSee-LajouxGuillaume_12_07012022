import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./header.css";

function Header(props) {
  return (
    <header>
      <NavLink exact to="/">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
      </NavLink>
      <Navigation />
    </header>
  );
}

export default Header;

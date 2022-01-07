import logo from "../../img/logo.svg";
import { NavLink } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import "./header.css";

/**
 * React Component displaying header
 * @returns {ReactElement}
 */

function Header() {
  return (
    <header>
      <NavLink exact to="/">
        <h1 className="logo-container">
          <img src={logo} alt="logo" />
        </h1>
      </NavLink>
      <Navigation />
    </header>
  );
}

export default Header;

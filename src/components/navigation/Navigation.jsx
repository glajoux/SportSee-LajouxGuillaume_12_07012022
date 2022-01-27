import React from "react";
import { NavLink } from "react-router-dom";

/**
 * React Component displaying the navigation
 * @returns {ReactComponent}
 */
function Navigation() {
  return (
    <nav>
      <ul className="header-ul">
        <li className="header-li">
          <NavLink exact="true" to="/">
            Accueil
          </NavLink>
        </li>
        <li className="header-li">Profil</li>
        <li className="header-li">Réglage</li>
        <li className="header-li">Communauté</li>
      </ul>
    </nav>
  );
}

export default Navigation;

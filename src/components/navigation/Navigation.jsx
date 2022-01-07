import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Accueil
          </NavLink>
        </li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  );
}

export default Navigation;

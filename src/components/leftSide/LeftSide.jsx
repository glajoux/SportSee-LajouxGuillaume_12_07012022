import React from "react";
import meditation from "../../img/meditation.svg";
import natation from "../../img/natation.svg";
import velo from "../../img/velo.svg";
import haltere from "../../img/haltere.svg";
import "./leftSide.css";

/**
 * React Component displaying the left side bar
 * @returns {ReactElement}
 */

function LeftSide() {
  return (
    <aside>
      <ul className="aside-ul">
        <li className="icone-bar">
          <img src={meditation} alt="meditation" />
        </li>
        <li className="icone-bar">
          <img src={natation} alt="natation" />
        </li>
        <li className="icone-bar">
          <img src={velo} alt="velo" />
        </li>
        <li className="icone-bar">
          <img src={haltere} alt="haltere" />
        </li>
      </ul>
      <div>
        <span className="copiryght">Copiryght, SportSee 2020</span>
      </div>
    </aside>
  );
}

export default LeftSide;

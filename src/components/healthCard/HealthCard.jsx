import React, { useState, useEffect } from "react";
import calories from "../../img/calories.svg";
import glucides from "../../img/glucides.svg";
import prot from "../../img/prot.svg";
import lipides from "../../img/lipides.svg";
import "./healthCard.css";

/**
 * React Component dsiplaying the ritgh side bar with info of health
 * @param {*} props
 * @returns {ReactElement}
 */
function HealthCard(props) {
  const healthCardFabrique = () => {
    if (props.calorie) {
      function makeFloatNumber(nbr) {
        return Number.parseFloat(nbr).toFixed(3);
      }
      let calorieNumber = makeFloatNumber(props.calorie.calorieCount / 1000);
      return (
        <div className="nutri-card">
          <div className="calorie">
            <img src={calories} alt="calorie" />
          </div>
          <div>
            <h3>{calorieNumber}kcal</h3>
            <p>Calories</p>
          </div>
        </div>
      );
    }
    if (props.prot) {
      return (
        <div className="nutri-card">
          <div className="proteine">
            <img src={prot} alt="protéine" />
          </div>
          <div>
            <h3>{props.prot.proteinCount}g</h3>
            <p>Protéines</p>
          </div>
        </div>
      );
    }
    if (props.glucide) {
      return (
        <div className="nutri-card">
          <div className="glucide">
            <img src={glucides} alt="glucide" />
          </div>
          <div>
            <h3>{props.glucide.carbohydrateCount}g</h3>
            <p>Glucides</p>
          </div>
        </div>
      );
    }
    if (props.lipide) {
      return (
        <div className="nutri-card">
          <div className="lipide">
            <img src={lipides} alt="lipide" />
          </div>
          <div>
            <h3>{props.lipide.lipidCount}g</h3>
            <p>Lipides</p>
          </div>
        </div>
      );
    }
  };

  return <div>{healthCardFabrique()}</div>;
}

export default HealthCard;

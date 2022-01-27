import React from "react";
import "./helloUser.css";
import PropTypes from "prop-types";

/**
 * React component displaying teh section HelloUser
 * @param {string} prenom name of the user
 * @returns {ReactElement}
 */
function HelloUser({ prenom }) {
  console.log(prenom);
  return (
    <section>
      <h2 className="hello-titre">
        Bonjour <span className="firstname">{prenom}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

HelloUser.propTypes = {
  prenom: PropTypes.string,
};

export default HelloUser;

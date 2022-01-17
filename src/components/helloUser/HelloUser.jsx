import React from "react";
import "./helloUser.css";

function HelloUser(props) {
  console.log(props.prenom);
  return (
    <section>
      <h2 className="hello-titre">
        Bonjour <span className="firstname">{props.prenom}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </section>
  );
}

export default HelloUser;

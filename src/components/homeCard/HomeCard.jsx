import React from "react";
import { Link } from "react-router-dom";
import { usersList } from "../../utils/usersList";
import userFace from "../../img/userFace.svg";
import "./homeCard.css";

/**
 * React Component displaying list of users on Home page
 * @returns { ReactElement}
 */
function HomeCard() {
  return (
    <div className="userList">
      {usersList.map((user) => (
        <Link to={`/dashboard/${user.id}`} key={user.id}>
          <div className="user">
            <img src={userFace} alt="icone d'utilisateur" />
            <h2>{user.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomeCard;

import React from "react";
import Header from "../../components/header/Header";
import LeftSide from "../../components/leftSide/LeftSide";
import { useParams } from "react-router";
import HelloUser from "../../components/helloUser/HelloUser";
import HealthCard from "../../components/healthCard/HealthCard";
import { path } from "../../utils/path";
import { useFetch } from "../../utils/hooks/useFetch";
import UserMapper from "../../mapper/UserMapper";
import "./dashboard.css";

function Dashboard() {
  const idUrl = useParams();
  console.log(idUrl);

  const data = useFetch(`${path}${idUrl.userId}`, UserMapper);
  const firstName = data.data.firstName;
  const keyData = data.data.keyData;
  console.log(keyData);

  // const nutritionArray = ["calorie", "proteine", "glucide", "lipide"];
  // const keyOfKeyData = Object.keys(keyData);
  // console.log(keyOfKeyData);

  return (
    <>
      <Header />
      <main>
        <LeftSide />
        <div className="dashboard">
          <HelloUser prenom={firstName} />
          <section>
            <div className="graph">
              <article className="activite-quot"></article>
              <article className="duree-moy"></article>
              <article className="radar"></article>
              <article className="score"></article>
            </div>
            <article className="sante">
              <HealthCard calorie={keyData} />
              <HealthCard prot={keyData} />
              <HealthCard glucide={keyData} />
              <HealthCard lipide={keyData} />
            </article>
          </section>
        </div>
      </main>
    </>
  );
}

export default Dashboard;

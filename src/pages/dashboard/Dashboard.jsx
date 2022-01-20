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
import ActivityMapper from "../../mapper/ActivityMapper";
import AverageSessionsMapper from "../../mapper/AverageSessionsMapper";
import PerformanceMapper from "../../mapper/PerformanceMapper";
import ActiviteQuot from "../../components/actviviteQuot/ActiviteQuot";
import AverageSessions from "../../components/averageSession/AverageSessions";
import RadarPerf from "../../components/radarPerf/RadarPerf";
import Score from "../../components/score/Score";

function Dashboard() {
  const idUrl = useParams();
  console.log(idUrl);

  const data = useFetch(`${path}${idUrl.userId}`, UserMapper);
  const firstName = data.data.firstName;
  const keyData = data.data.keyData;
  const score = data.data.score;
  console.log(data);

  const activity = useFetch(`${path}${idUrl.userId}/activity`, ActivityMapper);
  console.log(activity);

  const averageSessions = useFetch(
    `${path}${idUrl.userId}/average-sessions`,
    AverageSessionsMapper
  );
  console.log(averageSessions);

  const performance = useFetch(
    `${path}${idUrl.userId}/performance`,
    PerformanceMapper
  );
  console.log(performance.data);

  return (
    <>
      <Header />
      <main>
        <LeftSide />
        <div className="dashboard">
          <HelloUser prenom={firstName} />
          <section className="graph-section">
            <div className="graph">
              <article className="graph-bar-activity">
                <ActiviteQuot activite={activity.data} />
              </article>
              <div className="min-graph-card">
                <article className="duree-moy">
                  <AverageSessions average={averageSessions.data} />
                </article>
                <article className="radar">
                  <RadarPerf perf={performance.data} />
                </article>
                <article className="score">
                  <Score score={data.data.score} />
                </article>
              </div>
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

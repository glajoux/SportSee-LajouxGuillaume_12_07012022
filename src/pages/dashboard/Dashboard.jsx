import React from "react";
import Header from "../../components/header/Header";
import LeftSide from "../../components/leftSide/LeftSide";
import { useParams } from "react-router";
import HelloUser from "../../components/helloUser/HelloUser";
import HealthCard from "../../components/healthCard/HealthCard";
import "./dashboard.css";
import ActiviteQuot from "../../components/actviviteQuot/ActiviteQuot";
import AverageSessions from "../../components/averageSession/AverageSessions";
import RadarPerf from "../../components/radarPerf/RadarPerf";
import Score from "../../components/score/Score";
import { getUserInfo } from "../../utils/hooks/getUserInfo";
import { getActivity } from "../../utils/hooks/getActivity";
import { getPerformance } from "../../utils/hooks/getPerformance";
import { getAverageSession } from "../../utils/hooks/getAverageSession";
import Error from "../error/Error";

/**
 * React component displaying the dashboard page
 * @returns {ReactElement}
 */
function Dashboard() {
  const idUrl = useParams();
  console.log(idUrl);

  const data = getUserInfo(idUrl.userId);
  console.log(data);

  const firstName = data.data.firstName;
  const keyData = data.data.keyData;

  console.log(firstName);

  const activity = getActivity(idUrl.userId);
  console.log(activity);

  const averageSessions = getAverageSession(idUrl.userId);
  console.log(averageSessions);

  const performance = getPerformance(idUrl.userId);
  console.log(performance);

  if (
    data.error ||
    activity.error ||
    averageSessions.error ||
    performance.error
  ) {
    return <Error />;
  } else {
    return (
      <>
        <Header />
        <main>
          <LeftSide />
          <div className="dashboard">
            {firstName && <HelloUser prenom={firstName} />}
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
}

export default Dashboard;

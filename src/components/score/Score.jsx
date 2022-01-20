import React from "react";
import "./score.css";
import { RadialBarChart, RadialBar, Legend } from "recharts";

function Score({ score }) {
  console.log(score);

  const scoreLegendRender = () => {
    return (
      <div className="legendScore">
        <h3 className="titreLegendScore">Score</h3>
        <div className="textScoreLegend">
          {score && (
            <span className="pourcentage">{score[0].score * 100}%</span>
          )}
          <br />
          <span className="objectifScore">
            de votre <br />
            objectif
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      {score && (
        <RadialBarChart
          width={260}
          height={270}
          data={score}
          innerRadius="80%"
          outerRadius="92%"
          startAngle={225}
          endAngle={225 - (score[0].score * 100 * 360) / 100} // Allows to make dynamic display of the bar which starts at the angle 225
        >
          <Legend content={scoreLegendRender} verticalAlign="top" />
          <RadialBar dataKey={"score"} fill="#FF0000" cornerRadius={10} />
        </RadialBarChart>
      )}
    </div>
  );
}

export default Score;

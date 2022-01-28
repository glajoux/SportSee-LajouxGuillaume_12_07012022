import React from "react";
import "./score.css";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 * React Comoponent displaying the chart bar of daily activity
 * @param {{score: number, firstName: string}}
 * @returns {ReactElement}
 */
function Score({ score }) {
  console.log(score);

  /**
   * Custom legend to display on chart
   * @returns {HTMLElement} text
   */
  const scoreLegendRender = () => {
    return <h3 className="titreLegendScore">Score</h3>;
  };

  return (
    <div className="graph-score">
      {score && (
        <ResponsiveContainer width={"100%"} minHeight={270}>
          <RadialBarChart
            data={score}
            innerRadius="80%"
            outerRadius="92%"
            startAngle={225}
            endAngle={225 - (score[0].score * 100 * 360) / 100} // Allows to make dynamic display of the bar which starts at the angle 225
          >
            <circle cx="50%" cy="50%" fill="white" r="90"></circle>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
              <tspan dy="-20" fill="#282D30" className="pourcentage">
                {score[0].score * 100}%
              </tspan>
              <tspan x="50%" dy="26" fill="#74798C" className="objectifScore">
                de votre
              </tspan>
              <tspan x="50%" dy="26" fill="#74798C" className="objectifScore">
                objectif
              </tspan>
            </text>
            <Legend content={scoreLegendRender} verticalAlign="top" />
            <RadialBar dataKey={"score"} fill="#FF0000" cornerRadius={10} />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number,
      firstName: PropTypes.string,
    })
  ),
};

export default Score;

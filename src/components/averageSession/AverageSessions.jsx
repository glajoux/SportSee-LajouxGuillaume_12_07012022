import React from "react";
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./averageSession.css";
import PropTypes from "prop-types";

function AverageSessions({ average }) {
  console.log(average);
  const averageTooltipRender = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="average-tooltip">
          <span>{payload[0].value}min</span>
        </div>
      );
    }
    return null;
  };

  const averageLegend = () => {
    return <h3 className="average-legend-title">Durée moyenne des sessions</h3>;
  };

  return (
    <div className="average">
      <ResponsiveContainer width="100%" aspect={0.7}>
        <LineChart data={average.sessions}>
          <XAxis
            dataKey={"day"}
            axisLine={false}
            tickLine={false}
            stroke="rgba(255, 255, 255, 0.5)"
          />
          <YAxis hide={true} />
          <Tooltip
            content={averageTooltipRender}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 50,
              strokeHeight: 270,
            }}
          />
          <Legend content={averageLegend} verticalAlign="top" />
          <Line
            dataKey={"sessionLength"}
            type={"monotone"}
            stroke="#fff"
            dot={false}
            activeDot={{
              stroke: "#fff",
              strokeWidth: 10,
              strokeOpacity: 0.2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessions.propTypes = {
  average: PropTypes.shape({
    userId: PropTypes.number,
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
        day: PropTypes.string,
        sessionLength: PropTypes.number,
      })
    ),
  }),
};

export default AverageSessions;

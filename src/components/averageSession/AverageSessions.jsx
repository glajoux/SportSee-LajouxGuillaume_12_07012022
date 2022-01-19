import React from "react";
import { LineChart, XAxis, YAxis, Tooltip, Line, Legend } from "recharts";
import "./averageSession.css";

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
      <LineChart width={240} height={260} data={average.sessions}>
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
    </div>
  );
}

export default AverageSessions;

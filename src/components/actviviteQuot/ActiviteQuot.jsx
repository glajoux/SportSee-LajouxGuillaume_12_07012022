import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import "./activiteQuot.css";

function ActiviteQuot({ activite }) {
  console.log(activite);

  const activityLegendRender = ({ payload }) => {
    return (
      <div className="activite-quot-legend">
        <h3>Activité quotidienne</h3>
        <ul>
          <li className="poids">
            <span>{payload[0].value}</span>
          </li>
          <li className="calorie">
            {" "}
            <span>{payload[1].value}</span>
          </li>
        </ul>
      </div>
    );
  };

  const activityTooltipRender = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="activite-quot-tooltip">
          <span>{payload[0].value}kg</span>

          <span>{payload[1].value}kCal</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="activite-quot">
      <span></span>
      <BarChart
        width={800}
        height={450}
        data={activite.sessions}
        margin={{ top: 20, right: 0, bottom: 20, left: 20 }}
      >
        <CartesianGrid strokeDasharray={"3"} vertical={false} />
        <XAxis dataKey="day" />
        <YAxis
          dataKey={"kilogram"}
          orientation="right"
          axisLine={false}
          tickLine={false}
          yAxisId={"kilogram"}
          tickCount={3}
          domain={["dataMax - 3", "dataMax"]}
        />
        <YAxis hide={true} />
        <Tooltip content={activityTooltipRender} />
        <Legend
          align="right"
          verticalAlign="top"
          iconType={"circle"}
          iconSize={8}
          height={70}
          content={activityLegendRender}
        />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[3, 3, 0, 0]}
          name="Poids(kg)"
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[3, 3, 0, 0]}
          name="Calories brûlées (kCal)"
        />
      </BarChart>
    </div>
  );
}

export default ActiviteQuot;

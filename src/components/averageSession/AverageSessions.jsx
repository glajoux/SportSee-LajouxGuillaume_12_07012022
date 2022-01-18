import React from "react";
import { LineChart, XAxis, YAxis, Tooltip, Line } from "recharts";
import "./averageSession.css";

function AverageSessions(props) {
  console.log(props.average);
  return (
    <div className="average">
      <LineChart width={260} height={270} data={props.average.data.sessions}>
        <XAxis dataKey={"day"} axisLine={false} tickLine={false} />
        <YAxis hide={true} />
        <Tooltip />
        <Line
          dataKey={"sessionLength"}
          type={"monotone"}
          stroke="#fff"
          dot={false}
        />
      </LineChart>
    </div>
  );
}

export default AverageSessions;

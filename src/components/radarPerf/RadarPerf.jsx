import React from "react";
import {
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import "./radarPerf.css";

function RadarPerf({ perf }) {
  console.log(perf);

  return (
    <div className="radar-graph">
      <ResponsiveContainer width={"100%"} aspect={0.7}>
        <RadarChart data={perf.data} outerRadius={"70%"}>
          <PolarAngleAxis
            dataKey={"kind"}
            tick={{ fill: "#fff", fontSize: "0.7rem" }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, "auto"]}
            tick={false}
            axisLine={false}
          />
          <PolarGrid />
          <Radar dataKey={"value"} fill="rgba(255, 1, 1, 0.7)" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarPerf;

import React from "react";
import {
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadarChart,
} from "recharts";
import "./radarPerf.css";

function RadarPerf({ perf }) {
  console.log(perf);
  return (
    <div>
      <RadarChart outerRadius={90} width={260} height={270} data={perf.data}>
        <PolarAngleAxis dataKey={"kind"} />
        <PolarRadiusAxis
          angle={30}
          domain={[0, "auto"]}
          tick={false}
          axisLine={false}
        />
        <PolarGrid />
        <Radar dataKey={"value"} fill="rgba(255, 1, 1, 0.7)" />
      </RadarChart>
    </div>
  );
}

export default RadarPerf;

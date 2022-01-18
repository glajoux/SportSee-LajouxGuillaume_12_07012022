import React from "react";
import {
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  RadarChart,
} from "recharts";
import "./radarPerf.css";

function RadarPerf(props) {
  console.log(props.perf);
  return (
    <div>
      <RadarChart
        outerRadius={90}
        width={260}
        height={270}
        data={props.perf.data}
      >
        <PolarAngleAxis dataKey={"kind"} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
      </RadarChart>
    </div>
  );
}

export default RadarPerf;

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
import PropTypes from "prop-types";

/**
 * React Comoponent displaying the radar chart
 * @param {{userId : number, kind : array, data: array}}
 * @param {array} kind : array of object that are not use
 * @param {array} data : array of object with data for the radar chart
 * @returns {ReactElement}
 */
function RadarPerf({ perf }) {
  console.log(perf);

  return (
    <div className="radar-graph">
      <ResponsiveContainer width={"100%"} minHeight={270}>
        <RadarChart data={perf.data} margin={{ left: 40, right: 40 }}>
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

RadarPerf.propTypes = {
  userId: PropTypes.number,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string,
      value: PropTypes.number,
    })
  ),
  kind: PropTypes.objectOf(PropTypes.number),
};

export default RadarPerf;

import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import "./activiteQuot.css";
import PropTypes from "prop-types";

/**
 * React Comoponent displaying the chart bar of daily activity
 * @param {{userId : number, sessions : array}}
 * @param {array} sessions : array of object with data for the chart bar
 * @returns {ReactElement}
 */
function ActiviteQuot({ activite }) {
  console.log(activite);

  /**
   * Custom legend to display on chart
   * @param {object}  payload data of the content to be displayed in the legend
   * @returns {HTMLElement} text
   */
  const activityLegendRender = ({ payload }) => {
    console.log(payload);
    return (
      <div className="activite-quot-legend">
        <h3>Activité quotidienne</h3>
        <ul>
          <li className="poids">
            <span>{payload[0].value}</span>
          </li>
          <li className="calorie-legend">
            <span>{payload[1].value}</span>
          </li>
        </ul>
      </div>
    );
  };

  /**
   * Custom tooltip to display on chart on hover
   * @param {boolean} active boolean to control if tooltip is visible or not
   * @param {object}  payload data of the content to be displayed in the legend
   * @returns {HTMLElement} text
   */
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
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          data={activite.sessions}
          margin={{ top: 20, right: 0, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray={"3"} vertical={false} />
          <XAxis dataKey="day" tickLine={false} />
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
      </ResponsiveContainer>
    </div>
  );
}

ActiviteQuot.propTypes = {
  activite: PropTypes.shape({
    userId: PropTypes.number,
    session: PropTypes.shape({
      day: PropTypes.number,
      kilogram: PropTypes.number,
      calories: PropTypes.number,
    }),
  }),
};

export default ActiviteQuot;

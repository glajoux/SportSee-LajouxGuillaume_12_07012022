import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ActiviteQuot(props) {
  console.log(props.activite);

  return (
    <div>
      <BarChart width={800} height={450} data={props.activite.data.sessions}>
        <XAxis dataKey="day" />
        <YAxis
          dataKey={"kilogram"}
          orientation="right"
          axisLine={false}
          tickLine={false}
          yAxisId={"kilogram"}
          tickCount={3}
        />
        <YAxis hide={true} />
        <Tooltip />
        <Bar
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </div>
  );
}

export default ActiviteQuot;

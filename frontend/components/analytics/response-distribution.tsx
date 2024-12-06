"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { hour: "12am", responses: 15 },
  { hour: "3am", responses: 5 },
  { hour: "6am", responses: 12 },
  { hour: "9am", responses: 45 },
  { hour: "12pm", responses: 76 },
  { hour: "3pm", responses: 64 },
  { hour: "6pm", responses: 52 },
  { hour: "9pm", responses: 34 },
];

export function ResponseDistribution() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="hour"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Bar
          dataKey="responses"
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
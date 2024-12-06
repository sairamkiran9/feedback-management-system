"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { week: "Week 1", rate: 85 },
  { week: "Week 2", rate: 82 },
  { week: "Week 3", rate: 87 },
  { week: "Week 4", rate: 84 },
  { week: "Week 5", rate: 88 },
  { week: "Week 6", rate: 85 },
  { week: "Week 7", rate: 89 },
  { week: "Week 8", rate: 92 },
];

export function CompletionRate() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="week"
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
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="rate"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
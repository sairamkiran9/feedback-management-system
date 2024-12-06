"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "Jan 01", responses: 157 },
  { date: "Jan 02", responses: 165 },
  { date: "Jan 03", responses: 180 },
  { date: "Jan 04", responses: 158 },
  { date: "Jan 05", responses: 192 },
  { date: "Jan 06", responses: 145 },
  { date: "Jan 07", responses: 138 },
  { date: "Jan 08", responses: 152 },
  { date: "Jan 09", responses: 187 },
  { date: "Jan 10", responses: 199 },
  { date: "Jan 11", responses: 175 },
  { date: "Jan 12", responses: 162 },
  { date: "Jan 13", responses: 155 },
  { date: "Jan 14", responses: 142 },
].map((item) => ({
  ...item,
  responses: item.responses + Math.floor(Math.random() * 30),
}));

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
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
        <Line
          type="monotone"
          dataKey="responses"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
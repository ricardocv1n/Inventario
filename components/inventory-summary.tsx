"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Panela",
    total: 580,
  },
  {
    name: "Huevos",
    total: 350,
  },
  {
    name: "Arroz",
    total: 620,
  },
  {
    name: "Frijoles",
    total: 250,
  },
  {
    name: "Carne",
    total: 400,
  },
  {
    name: "Pollo",
    total: 380,
  },
  {
    name: "Aceite",
    total: 200,
  },
]

export function InventorySummary() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}g`}
        />
        <Tooltip />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}


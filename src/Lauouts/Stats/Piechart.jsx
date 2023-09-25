import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

 
const data = [
  { name: 'Donated', value: 4 },
  { name: 'Remaining', value: 8 - 4 },
];

const COLORS = ['#0088FE', '#FFBB28'];

const Piechart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Piechart;

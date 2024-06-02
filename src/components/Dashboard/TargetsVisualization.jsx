import React from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { getTargetsData } from '../../utils/data';

const TargetsVisualization = () => {
    const data = getTargetsData();

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

    return (
      <div className=" mb-4 sm:mb-0">
        <h2 className="mb-4 ml-12 text-2xl font-bold mt-4 text-gray-400 dark:text-gray-500">
          Targets Visualization
        </h2>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    );
};

export default TargetsVisualization
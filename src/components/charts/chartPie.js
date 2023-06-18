import { Box, Typography } from '@mui/material';
import React from 'react';
import { PieChart, Cell, Pie, Sector } from 'recharts';

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={fill}
        fontSize={'40px'}
        fontWeight={'bold'}
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export default function ChartPie({
  title,
  text,
  minValue = 0.1,
  maxValue = 1,
  value = 0.9,
}) {
  const normalizedValue = () =>
    ((value - minValue) / (maxValue - minValue)) * (1 - 0.01) + 0.01;

  const data = [
    { name: '', value: 1 - normalizedValue(), color: '#ccc' },
    { name: text, value: normalizedValue(), color: '#3053E4' },
  ];

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <Typography variant="inherit" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          startAngle={90}
          endAngle={450}
          activeIndex={1}
          activeShape={renderActiveShape}
          cx={150}
          cy={150}
          innerRadius={70}
          outerRadius={100}
          fill="#3384d3"
          dataKey="value"
        >
          {data.map((item, index) => (
            <Cell key={`cell-${index}`} fill={item.color} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
}

import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Text,
} from 'recharts';

const data = [
  {
    name: 'Январь 2023',
    value: 3.5,
  },
  {
    name: 'Февраль 2023',
    value: 3.8,
  },
  {
    name: 'Март 2023',
    value: 4,
  },
  {
    name: 'Апрель 2023',
    value: 3.7,
  },
  {
    name: 'Май 2023',
    value: 4.9,
  },
];

const CustomXAxisTick = ({ x, y, payload }) => {
  if (payload && payload.value) {
    return (
      <Text
        fontSize={'14px'}
        width={'14px'}
        x={x}
        y={y}
        textAnchor="middle"
        verticalAnchor="start"
        fill="#fff"
      >
        {payload.value}
      </Text>
    );
  }
  return null;
};

const CustomYAxisTick = ({ x, y, payload }) => {
  if (payload && payload.value) {
    return (
      <Text x={x} y={y} textAnchor="middle" verticalAnchor="start" fill="#fff">
        {payload.value}
      </Text>
    );
  }
  return null;
};

export function ChartGrade() {
  return (
    <Box
      sx={{
        mt: '45px',
        width: '575px',
        borderRadius: '5px',
        backgroundColor: '#3053E4',
        padding: '20px',
        color: '#fff',
      }}
    >
      <Typography variant="inherit" sx={{ mb: '20px' }}>
        График успеваемости
      </Typography>

      <LineChart width={560} height={200} data={data}>
        <CartesianGrid strokeDasharray="3 3" fill="#3053E4" fillOpacity={1} />
        <XAxis
          dataKey="name"
          padding={{ left: 50, right: 50 }}
          tick={<CustomXAxisTick />}
        />
        <YAxis domain={[1, 5]} tick={<CustomYAxisTick />} />
        <Tooltip
          dataKey="value"
          wrapperStyle={{ color: '#000' }}
          labelFormatter={function (_, data) {
            if (data[0]) {
              const { name, value } = data[0]?.payload;
              return (
                name &&
                value && (
                  <>
                    <Box sx={{ color: '#000' }}>{name}</Box>
                    <Box sx={{ color: '#000', textAlign: 'center', mt: '5px' }}>
                      {value}
                    </Box>
                  </>
                )
              );
            }
          }}
        />
        <Legend
          formatter={() => <Box sx={{ color: '#3053E4' }}> </Box>}
          iconSize="0"
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#fff"
          activeDot={{ r: 6 }}
        />
      </LineChart>
      <Box display="flex" justifyContent="flex-end" sx={{ mt: '20px' }}>
        <Button
          sx={{
            color: '#000',
            backgroundColor: '#FFFDFD',
            padding: '0 5px',
            textTransform: 'none',
          }}
          variant="contained"
        >
          Подробнее
        </Button>
      </Box>
    </Box>
  );
}

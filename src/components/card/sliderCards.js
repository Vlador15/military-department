import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@mui/material';
import StatsCard from './stats';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

export function SliderCards({ cards }) {
  return (
    <Carousel responsive={responsive}>
      {cards.map((card, index) => (
        <Box sx={{ mr: '5px' }} key={index}>
          <StatsCard card={card} />
        </Box>
      ))}
    </Carousel>
  );
}

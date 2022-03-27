import React from 'react';
import { Box, Typography } from '../mui';

function Faq() {
  return (
    <Box sx={{
      m: 1,
    }}
    >
      <Typography variant="body1">
        What are the blue, green and red lines?
      </Typography>
      <Typography variant="body2">
        These represent the relative (number of) features, mileage and power
        respectively among the displayed cars. So if among the displayed cars,
        the one with highest power has 180 bhp, a car with 60 bhp will have only
        one-third of the red line filled. If the user changes his options so that
        the most powered one is now 120 bhp, the car with 60 bhp will have the red
        line half-filled.

      </Typography>
    </Box>
  );
}

export default Faq;

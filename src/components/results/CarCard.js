import React from 'react';
import { Grid, Box, Typography } from '../mui';
import '../../globals/Styles.css';
import './CarCard.css';

function CarCard({ car }) {
  return (
    <Grid item xs={3}>
      <Box sx={{
        p: 1, border: 1, borderColor: 'grey.400', borderRadius: 1,
      }}
      >
        <Typography variant="caption">{car.Make}</Typography>
        <Typography variant="subtitle2">
          {car.Model}
          {' '}
          {car.Variant}
        </Typography>
        <Typography variant="caption">
          {' '}
          {car.Fuel === 'P' ? 'Petrol' : 'Diesel'}
          {' '}
          {car.Transmission[0] === 'M' ? 'Manual' : 'Automatic'}
        </Typography>
        <Typography variant="body2">
          {' '}
          {car.Price}
          {' '}
          Lakhs
        </Typography>
      </Box>
    </Grid>
  );
}

export default CarCard;

import React from 'react';
import {
  Grid, Box, Typography, LinearProgress,
} from '../mui';
import { COL } from '../../globals/Constants';
import '../../globals/Styles.css';
import './CarCard.css';

function CarCard({ car, maxValues }) {
  const mileagePct = Math.floor((car.Mileage * 100) / maxValues[COL.mileage]);
  const featurePct = Math.floor((car.Points * 100) / maxValues[COL.points]);
  const powerPct = Math.floor((car.Power * 100) / maxValues[COL.power]);
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
        <LinearProgress color="info" variant="determinate" value={featurePct} sx={{ mb: 1 }} />
        <LinearProgress color="success" variant="determinate" value={mileagePct} sx={{ mb: 1 }} />
        <LinearProgress color="error" variant="determinate" value={powerPct} sx={{ }} />
      </Box>
    </Grid>
  );
}

export default CarCard;

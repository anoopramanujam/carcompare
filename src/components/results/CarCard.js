import React, { useState } from 'react';
import {
  Grid, Box, Typography, LinearProgress,
} from '../mui';
import * as COL from '../../globals/ColConstants';
import '../../globals/styles.css';
import './CarCard.css';

function CarCard({ car, maxValues, onSelect }) {
  const [selected, setSelected] = useState(false);
  const mileagePct = Math.floor((car.Mileage * 100) / maxValues[COL.mileage]);
  const featurePct = Math.floor((car.Points * 100) / maxValues[COL.points]);
  const powerPct = Math.floor((car.Power * 100) / maxValues[COL.power]);

  // select/unselect a card
  const select = () => {
    setSelected(!selected);
    onSelect({ selectedCar: car, selected: !selected });
  };

  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={2}
      onClick={() => { select(); }}
    >
      <Box sx={{
        p: 1,
        border: selected ? 2 : 1,
        borderColor: selected ? 'primary.light' : 'grey.400',
        backgroundColor: selected ? 'grey.200' : 'common.white',
        borderRadius: 1,
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

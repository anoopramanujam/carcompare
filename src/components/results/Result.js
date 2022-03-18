import React from 'react';
import { Grid, Box } from '../mui';
import carData from '../../data/carData';
import CarCard from './CarCard';

function Result() {
  console.log(carData);
  return (
    <Box sx={{ p: 1, mt: 1, boxShadow: 1 }}>
      <Grid container spacing={2}>
        { carData.map((car) => (
          <React.Fragment key={`${car.Make}-${car.Model}-${car.Variant}`}>
            <CarCard car={car} />
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}

export default Result;

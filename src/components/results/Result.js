import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Grid, Box, Typography, Button, Stack,
} from '../mui';
import carData from '../../data/carData';
import CarCard from './CarCard';

const findCars = ({ specFilters }) => {
  console.log(specFilters);

  const price = parseFloat(specFilters.price) || 1000;
  const {
    petrol, diesel, manual, auto,
  } = specFilters;

  const results = carData.filter((x) => (x.Price <= price)
    && ((x.Fuel === 'P' && petrol) || (x.Fuel === 'D' && diesel))
    && ((x.Transmission[0] === 'M' && manual) || (x.Transmission[0] === 'A')));
  return results;
};

function Result(props) {
  // console.log(carData);
  const [showAll, setShowAll] = useState(false);
  let resultData = findCars({ specFilters: props.specFilters });
  const totalCount = resultData.length;
  const makeCount = [...new Set(resultData.map((item) => item.Make))].length;
  const modelCount = [...new Set(resultData.map((item) => item.Model))].length;
  if (!showAll) {
    resultData = resultData.slice(0, 8);
  }
  const appendS = (count) => (count !== 1 ? 's' : '');
  const countLabel = `${makeCount} Make${appendS(makeCount)}, 
                        ${modelCount} Model${appendS(modelCount)}, 
                        ${totalCount} Car${appendS(totalCount)}`;

  return (
    <Box sx={{ p: 1, mt: 1, boxShadow: 1 }}>
      <Typography variant="subtitle2">
        {countLabel}
      </Typography>
      <Grid container spacing={2}>
        { resultData.map((car) => (
          <React.Fragment key={`${car.Make}-${car.Model}-${car.Variant}-${car.Price}`}>
            <CarCard car={car} />
          </React.Fragment>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="end">
        <Button onClick={() => { console.log(showAll); setShowAll(!showAll); }}>
          Show
          {' '}
          {showAll ? 'Top 8' : 'All'}
        </Button>
      </Stack>
    </Box>
  );
}

const mapStateToProps = (state) => ({ specFilters: state.specFilters });

export default connect(mapStateToProps)(Result);

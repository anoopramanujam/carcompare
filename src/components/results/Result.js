import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Grid, Box, Typography, Button, Stack,
} from '../mui';
import { COL } from '../../globals/Constants';

import CarCard from './CarCard';
import findCars from './FilterLogic';

function Result(props) {
  console.log('Render', props);
  const { cars } = props.globalData;
  if (!cars) return null;
  if (props.prefFilters.makes === null) return null;
  // console.log('NO NULL');
  const [showAll, setShowAll] = useState(false);
  let resultData = findCars(cars, {
    specFilters: props.specFilters,
    featureFilters: props.featureFilters,
    prefFilters: props.prefFilters,
  });
  // resultData.map((car) => console.log(car.Variant, car.Points));
  const totalCount = resultData.length;
  if (totalCount === 0) {
    return (
      <Typography variant="h6" sx={{ m: 2 }}>
        No cars found
      </Typography>
    );
  }
  const makeCount = [...new Set(resultData.map((item) => item.Make))].length;
  const modelCount = [...new Set(resultData.map((item) => item.Model))].length;

  // get max value
  const max = {};
  for (let j = 0; j < resultData.length; j += 1) {
    const cols = [COL.mileage, COL.points, COL.power];
    const car = resultData[j];
    for (let k = 0; k < cols.length; k += 1) {
      const col = cols[k];
      max[col] = Math.max(max[col] || 0, car[col]);
    }
  }
  console.log(max);

  if (!showAll) {
    resultData = resultData.slice(0, 8);
  }
  const appendS = (count) => (count !== 1 ? 's' : '');
  const countLabel = `${makeCount} Make${appendS(makeCount)}, 
                        ${modelCount} Model${appendS(modelCount)}, 
                        ${totalCount} Variant${appendS(totalCount)}`;
  // const legend = 'Lines represent relative ,  and ';

  return (
    <Box sx={{ p: 1, mt: 1, boxShadow: 1 }}>
      <Typography variant="subtitle2">
        {countLabel}
      </Typography>
      <Typography variant="caption" display="inline">
        Lines represent relative
      </Typography>
      <Typography variant="caption" display="inline" color="error.main">
        {' '}
        Power (Red)
      </Typography>
      <Typography variant="caption" display="inline" color="success.main">
        {' '}
        Mileage (Green)
      </Typography>
      <Typography variant="caption" display="inline">
        {' and '}
      </Typography>
      <Typography variant="caption" display="inline" color="info.main">
        {' '}
        Features (Blue)
      </Typography>
      <Grid container spacing={2}>
        { resultData.map((car) => (
          <React.Fragment key={`${car.Id}`}>
            <CarCard car={car} maxValues={max} />
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

const mapStateToProps = (state) => ({
  specFilters: state.specFilters,
  featureFilters: state.featureFilters,
  prefFilters: state.prefFilters,
  globalData: state.globalData,
});

export default connect(mapStateToProps)(Result);

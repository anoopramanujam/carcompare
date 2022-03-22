import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Grid, Box, Typography, Button, Stack,
} from '../mui';

import CarCard from './CarCard';
import findCars from './FilterLogic';

function Result(props) {
  // console.log(props);
  const [showAll, setShowAll] = useState(false);
  let resultData = findCars({
    specFilters: props.specFilters,
    featureFilters: props.featureFilters,
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
  if (!showAll) {
    resultData = resultData.slice(0, 8);
  }
  const appendS = (count) => (count !== 1 ? 's' : '');
  const countLabel = `${makeCount} Make${appendS(makeCount)}, 
                        ${modelCount} Model${appendS(modelCount)}, 
                        ${totalCount} Variant${appendS(totalCount)}`;

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

const mapStateToProps = (state) => ({
  specFilters: state.specFilters,
  featureFilters: state.featureFilters,
});

export default connect(mapStateToProps)(Result);

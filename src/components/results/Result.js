import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Grid, Box, Typography, Button, Stack, Modal,
} from '../mui';
import * as COL from '../../globals/ColConstants';
import { RESULTSIZE } from '../../globals/Constants';

import CarCard from './CarCard';
import findCars from './FilterLogic';
import ComparisonGrid from './ComparisonGrid';

function Result(props) {
  console.log('Render', props);
  const { cars } = props.globalData;
  // console.log('Cars', cars);
  // Need this only for ajax car load
  if (!cars) return null;
  if (props.prefFilters.makes === null) return null;

  const [showAll, setShowAll] = useState(false);
  const [showComparison, setComparison] = useState(false);
  const [selectedCars, setSelectedCars] = useState([]);
  let resultData = findCars(cars, {
    specFilters: props.specFilters,
    featureFilters: props.featureFilters,
    prefFilters: props.prefFilters,
  });
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

  // get max values to calculate the color lines renders
  const max = {};
  for (let j = 0; j < resultData.length; j += 1) {
    const cols = [COL.mileage, COL.points, COL.power];
    const car = resultData[j];
    for (let k = 0; k < cols.length; k += 1) {
      const col = cols[k];
      max[col] = Math.max(max[col] || 0, car[col]);
    }
  }

  if (!showAll) {
    resultData = resultData.slice(0, RESULTSIZE);
  }
  const appendS = (count) => (count !== 1 ? 's' : '');
  const countLabel = `${makeCount} Make${appendS(makeCount)}, 
                        ${modelCount} Model${appendS(modelCount)}, 
                        ${totalCount} Variant${appendS(totalCount)}`;

  function selectCar({ selectedCar, selected }) {
    let sel;
    if (selected) {
      sel = [...selectedCars];
      sel.push(selectedCar);
    } else {
      sel = selectedCars.filter((car) => car.Id !== selectedCar.Id);
    }
    setSelectedCars(sel);
  }

  return (
    <Box sx={{ p: 1, mt: 1, boxShadow: 1 }}>
      <Modal open={showComparison} onClose={() => setComparison(false)}>
        <Box sx={{
          bgcolor: 'background.paper',
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          width: '90%',
          height: '90%',
          p: 1,
          border: 1,
        }}
        >
          <ComparisonGrid cars={selectedCars} />
        </Box>
      </Modal>
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
      <Typography variant="caption" display="inline">. Click on items below and</Typography>
      <Button
        onClick={() => setComparison(true)}
        disabled={selectedCars.length === 0}
      >
        Compare

      </Button>
      <Grid container spacing={2}>
        { resultData.map((car) => (
          <React.Fragment key={`${car.Id}`}>
            <CarCard
              car={car}
              maxValues={max}
              onSelect={({ selectedCar, selected }) => selectCar({ selectedCar, selected })}
            />
          </React.Fragment>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="end">
        <Button onClick={() => { console.log(showAll); setShowAll(!showAll); }}>
          Show
          {' '}
          {showAll ? 'Less' : 'All'}
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

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Grid, Box, Typography, Button, Stack, Modal,
} from '../mui';
import * as COL from '../../globals/ColConstants';
import { RESULTSIZE } from '../../globals/Constants';

import CarCard from './CarCard';
import { findCars, searchCars } from './FilterLogic';
import ComparisonGrid from './ComparisonGrid';

function Result() {
  const specFilters = useSelector((state) => state.specFilters);
  const featureFilters = useSelector((state) => state.featureFilters);
  const prefFilters = useSelector((state) => state.prefFilters);
  const globalData = useSelector((state) => state.globalData);
  const { cars, searchTerm } = globalData;
  if (!cars) return null;
  if (prefFilters.makes === null) return null;

  const [showAll, setShowAll] = useState(false);
  const [showComparison, setComparison] = useState(false);
  const [selectedCars, setSelectedCars] = useState([]);
  const itemsSelected = selectedCars.length;
  const searchMode = !!(searchTerm && searchTerm.length > 0);

  let resultData;

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

  function renderSearchLegend() {
    return (
      <>
        <Typography variant="caption" sx={{ }}>
          Searching for
          {' '}
          <strong>{searchTerm}</strong>
        </Typography>
        <br />
      </>
    );
  }
  function renderResultLegend() {
    return (
      <>
        <Typography variant="caption" display="inline">
          Colored lines represent relative
        </Typography>
        <Typography variant="caption" display="inline" color="info.main">
          {' '}
          Features (Blue)
        </Typography>
        <Typography variant="caption" display="inline" color="success.main">
          {' '}
          Mileage (Green)
        </Typography>
        <Typography variant="caption" display="inline">
          {' and '}
        </Typography>
        <Typography variant="caption" display="inline" color="error.main">
          {' '}
          Power (Red)
        </Typography>

      </>
    );
  }

  if (searchMode) {
    resultData = searchCars(cars, searchTerm);
    resultData = findCars([...resultData], {
      specFilters,
      featureFilters,
      prefFilters,
    });
  } else {
    resultData = findCars(cars, {
      specFilters,
      featureFilters,
      prefFilters,
    });
  }
  const totalCount = resultData.length;
  if (totalCount === 0) {
    return (
      <>
        {searchMode && renderSearchLegend()}
        <Typography variant="h6" sx={{ m: 2 }}>
          No cars found
        </Typography>
      </>
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
          {/* <Button onClick={() => setComparison(false)}>Close</Button> */}
          <ComparisonGrid cars={selectedCars} onClose={() => setComparison(false)} />
        </Box>
      </Modal>
      <Box
        display="flex"
        flexDirection="column"
        // alignItems="flex-end"
        // justifyContent="space-between"
      >
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle2">
            {searchMode && renderSearchLegend()}
            {countLabel}
          </Typography>

          <Typography variant="caption" display="inline" sx={{ }}>Click on items below and </Typography>
          <Button
            onClick={() => setComparison(true)}
            disabled={itemsSelected === 0}
            variant={itemsSelected === 0 ? 'outlined' : 'contained'}
            size="small"
            sx={{ pb: 1 }}
          >
            Compare
          </Button>

          {
        itemsSelected > 0
        && (
          <>
            <Typography variant="caption">
              {' '}
              <strong>{itemsSelected}</strong>
              {' '}
              car
              {itemsSelected > 1 ? 's' : ''}
              {' '}
              selected.
            </Typography>
            <Button
              onClick={() => setSelectedCars([])}
              // display="inline"
            >
              Unselect All
            </Button>

          </>
        )
      }
        </Box>
        <Box sx={{ mb: 0 }}>
          {renderResultLegend()}

        </Box>
      </Box>
      <Grid container spacing={2}>
        { resultData.map((car) => (
          <React.Fragment key={`${car.Id}`}>
            <CarCard
              car={car}
              maxValues={max}
              onSelect={({ selectedCar, selected }) => selectCar({ selectedCar, selected })}
              isSelected={selectedCars.some((c) => c.Id === car.Id)}
            />
          </React.Fragment>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="end">
        <Button onClick={() => { setShowAll(!showAll); }}>
          Show
          {' '}
          {showAll ? 'Less' : 'All'}
        </Button>
      </Stack>
    </Box>
  );
}

export default Result;

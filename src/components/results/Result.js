import React from 'react';
import { connect } from 'react-redux';
import { Grid, Box, Typography } from '../mui';
import carData from '../../data/carData';
import CarCard from './CarCard';

const findCars = ({ specFilters }) => {
  console.log(specFilters);
  const price = parseFloat(specFilters.price) || 1000;
  const results = carData.filter((x) => (x.Price <= price));
  return results;
};

function Result(props) {
  console.log(carData);
  const resultData = findCars({ specFilters: props.specFilters });
  const totalCount = resultData.length;
  const makeCount = [...new Set(resultData.map((item) => item.Make))].length;
  const modelCount = [...new Set(resultData.map((item) => item.Model))].length;

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
          <React.Fragment key={`${car.Make}-${car.Model}-${car.Variant}`}>
            <CarCard car={car} />
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => ({ specFilters: state.specFilters });

export default connect(mapStateToProps)(Result);

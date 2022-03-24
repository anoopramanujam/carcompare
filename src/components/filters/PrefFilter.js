import React from 'react';
import { connect } from 'react-redux';
import {
  Box, Typography, FormGroup, FormLabel, FormControlLabel, Radio, RadioGroup, Checkbox,
} from '../mui';
import { COL } from '../../globals/Constants';
import { setPrefFilters } from '../../actions/index';
import carData from '../../data/carData';

function PrefFilter(props) {
  const options = [COL.price, COL.power];
  const filters = props.prefFilters;

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    props.setPrefFilters({ ...props.prefFilters, [name]: value });
  };

  const handleMakes = (event) => {
    const { target } = event;
    const { name } = target;
    let makeFilters = filters.makes;
    console.log(makeFilters);
    if (target.checked && !makeFilters.includes(name)) {
      makeFilters.push(name);
    } else if (!target.checked && makeFilters.includes(name)) {
      makeFilters = makeFilters.filter((make) => make !== name);
    }
    console.log(makeFilters);
    props.setPrefFilters({ ...props.prefFilters, makes: makeFilters });
  };

  const availableMakes = [...new Set(carData.map((item) => item.Make))];

  return (
    <Box sx={{
      m: 1, p: 1, border: 1, borderColor: 'grey.400',
    }}
    >
      <FormLabel component="legend" justify="center" sx={{ pt: 1 }}>Sort By</FormLabel>
      <RadioGroup
        row
        name="sortBy"
        value={filters.sortBy}
        onChange={handleChange}
      >
        {' '}
        {
          options.map((option) => (
            <React.Fragment key={option}>
              <FormControlLabel value={option} control={<Radio />} label={option} />
            </React.Fragment>
          ))

        }
      </RadioGroup>
      {' '}

      <FormLabel component="legend" justify="center" sx={{ pt: 1 }}>Show only </FormLabel>
      <FormGroup row>
        {
          availableMakes.map((make) => (
            <FormControlLabel
              key={make}
              control={(
                <Checkbox
                  checked={filters.makes.includes(make)}
                  onChange={handleMakes}
                  name={make}
                />
              )}
              label={make}
            />
          ))

        }
      </FormGroup>

    </Box>
  );
}

const mapStateToProps = (state) => ({ prefFilters: state.prefFilters });

export default connect(mapStateToProps, { setPrefFilters })(PrefFilter);

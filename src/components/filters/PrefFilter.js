import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Typography, FormGroup, FormLabel, FormControlLabel, Radio, RadioGroup, Checkbox,
} from '../mui';
import * as COL from '../../globals/ColConstants';
import { setPrefFilters, setWizardMode } from '../../actions/index';

function PrefFilter() {
  const options = [COL.price, COL.power, COL.mileage, COL.vfm];
  const filters = useSelector((state) => state.prefFilters);
  const globals = useSelector((state) => state.globalData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (globals.wizardMode) { dispatch(setWizardMode(false)); }
  }, []);

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    dispatch(setPrefFilters({ ...filters, [name]: value }));
  };

  const handleMakes = (event) => {
    const { target } = event;
    const { name } = target;
    let makeFilters = filters.makes;
    if (target.checked && !makeFilters.includes(name)) {
      makeFilters.push(name);
    } else if (!target.checked && makeFilters.includes(name)) {
      makeFilters = makeFilters.filter((make) => make !== name);
    }
    dispatch(setPrefFilters({ ...filters, makes: makeFilters }));
  };

  // just in case someone whiz past the wizard, wait till ajax load
  if (globals.cars === null || globals.cars.length === 0) return null;

  // select distinct makes
  const availableMakes = [...new Set(globals.cars.map((item) => item.Make))].sort();

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

export default PrefFilter;

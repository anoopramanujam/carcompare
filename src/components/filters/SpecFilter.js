import React from 'react';
import { connect } from 'react-redux';
import {
  Box, Typography, TextField, InputAdornment, Checkbox,
  FormControl, FormLabel, FormGroup, FormControlLabel, Stack, Grid,
} from '../mui';
import { setSpecFilters } from '../../actions';

function SpecFilter(props) {
  const filters = props.specFilters;

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    props.setSpecFilters({ ...props.specFilters, [name]: value });
  };

  function renderCheckboxes(title, options) {
    return (

      <Grid item xs={12} sm={6} md={4}>
        <FormLabel component="legend" justify="center" sx={{ pt: 1 }}>{title}</FormLabel>
        <FormGroup row>
          {
          options.map((option) => (
            <FormControlLabel
              key={option.name}
              control={(
                <Checkbox
                  checked={filters[option.name]}
                  onChange={handleChange}
                  name={option.name}
                />
              )}
              label={option.label}
            />
          ))

        }
        </FormGroup>
      </Grid>
    );
  }

  return (
    <Box sx={{
      m: 1, p: 1, border: 1, borderColor: 'grey.400',
    }}
    >

      <Grid
        container
        direction="row"
        justifyContent="between"
        spacing={1}
      >
        <Grid item xs={12} sm={6} md={4}>
          <FormLabel component="legend" htmlFor="spec-price" sx={{ pt: 1 }}>Maximum Price</FormLabel>
          <TextField
            required
            id="spec-price"
            name="price"
            size="small"
            sx={{ width: '20ch' }}
            value={filters.price}
            type="number"
            onChange={handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">lakhs</InputAdornment>,
              startAdornment: <InputAdornment position="start">&#8377;</InputAdornment>,
            }}
          />
        </Grid>
        {renderCheckboxes('Fuel', [
          { name: 'petrol', label: 'Petrol' },
          { name: 'diesel', label: 'Diesel' }])}

        {renderCheckboxes('Transmission', [
          { name: 'manual', label: 'Manual' },
          { name: 'auto', label: 'Automatic' }])}

      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => ({ specFilters: state.specFilters });

export default connect(mapStateToProps, { setSpecFilters })(SpecFilter);

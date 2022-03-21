import React from 'react';
import { connect } from 'react-redux';
import {
  Box, Typography, TextField, InputAdornment, Checkbox,
  FormControl, FormLabel, FormGroup, FormControlLabel, Stack, Grid,
} from '../mui';
import { setSpecFilters } from '../../actions';

function SpecFilter(props) {
  const {
    price, petrol, diesel, manual, auto,
  } = props.specFilters;

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    props.setSpecFilters({ ...props.specFilters, [name]: value });
  };

  return (
    <Box sx={{
      m: 1, p: 1, border: 1, borderColor: 'grey.400',
    }}
    >

      {/* <FormControl sx={{ m: 3 }} component="fieldset" variant="standard"> */}
      {/* <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        > */}
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
            value={price}
            type="number"
            onChange={handleChange}
            InputProps={{
              endAdornment: <InputAdornment position="end">lakhs</InputAdornment>,
              startAdornment: <InputAdornment position="start">&#8377;</InputAdornment>,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormLabel component="legend" justify="center" sx={{ pt: 1 }}>Fuel</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={petrol} onChange={handleChange} name="petrol" />
            }
              label="Petrol"
            />
            <FormControlLabel
              control={
                <Checkbox checked={diesel} onChange={handleChange} name="diesel" />
            }
              label="Diesel"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormLabel component="legend" justify="center" sx={{ pt: 1 }}>Transmission</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox checked={manual} onChange={handleChange} name="manual" />
            }
              label="Manual"
            />
            <FormControlLabel
              control={
                <Checkbox checked={auto} onChange={handleChange} name="auto" />
            }
              label="Automatic"
            />
          </FormGroup>
        </Grid>
      </Grid>
      {/* </Stack> */}
      {/* </FormControl> */}
    </Box>
  );
}

const mapStateToProps = (state) => ({ specFilters: state.specFilters });

export default connect(mapStateToProps, { setSpecFilters })(SpecFilter);

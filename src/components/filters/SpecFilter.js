import React from 'react';
import { connect } from 'react-redux';
import {
  Box, Typography, TextField, InputAdornment,
} from '../mui';
import { setSpecFilters } from '../../actions';

function SpecFilter(props) {
  const handleInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    const currFilters = props.specFilters;
    props.setSpecFilters({ ...currFilters, [name]: value });
  };

  return (
    <Box sx={{
      m: 1, p: 1, border: 1, borderColor: 'grey.400',
    }}
    >

      <TextField
        required
        id="spec-price"
        name="price"
        size="small"
        label="Max. Price"
        sx={{ m: 1, width: '20ch' }}
        value={props.specFilters.price}
        type="number"
        onChange={handleInputChange}
        InputProps={{
          endAdornment: <InputAdornment position="end">lakhs</InputAdornment>,
          startAdornment: <InputAdornment position="start">&#8377;</InputAdornment>,
        }}
      />
    </Box>
  );
}

const mapStateToProps = (state) => ({ specFilters: state.specFilters });

export default connect(mapStateToProps, { setSpecFilters })(SpecFilter);

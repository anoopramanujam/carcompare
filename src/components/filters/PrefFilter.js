import React from 'react';
import { connect } from 'react-redux';
import {
  Box, Typography, FormGroup, FormLabel, FormControlLabel, Radio, RadioGroup,
} from '../mui';
import { COL } from '../../globals/Constants';
import { setPrefFilters } from '../../actions/index';

function PrefFilter(props) {
  const options = [COL.price, COL.power];
  const filters = props.prefFilters;

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    props.setPrefFilters({ ...props.prefFilters, [name]: value });
  };

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

    </Box>
  );
}

const mapStateToProps = (state) => ({ prefFilters: state.prefFilters });

export default connect(mapStateToProps, { setPrefFilters })(PrefFilter);

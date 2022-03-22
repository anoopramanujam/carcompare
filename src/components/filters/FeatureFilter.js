import React from 'react';
import { connect } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  Box, Typography, Accordion, AccordionDetails, AccordionSummary,
  Radio, RadioGroup, FormControl, FormControlLabel, FormLabel,
} from '../mui';
import { REQUIRED, IGNORE, PREFERRED } from '../../globals/Constants';
import { setFeatureFilters } from '../../actions';

function FeatureFilter(props) {
  const filters = props.featureFilters;
  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    props.setFeatureFilters({ ...props.specFilters, [name]: value });
  };
  function renderAccordion(parts) {
    const [expanded, setExpanded] = React.useState(false);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
      <div>
        {parts.map((part) => (
          <Accordion
            key={part.label}
            expanded={expanded === part.label}
            onChange={handleAccordionChange(part.label)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                {part.label}
              </Typography>
              {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              {part.options.map((option) => (
                <FormControl key={option.name}>
                  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    name={option.name}
                    value={filters[option.name]}
                    onChange={handleChange}
                  >
                    <FormControlLabel value={REQUIRED} control={<Radio />} label="Required" />
                    <FormControlLabel value={PREFERRED} control={<Radio />} label="Nice to Have" />
                    <FormControlLabel value={IGNORE} control={<Radio />} label="Not Needed" />
                  </RadioGroup>
                </FormControl>
              ))}

            </AccordionDetails>
          </Accordion>
        ))}

      </div>
    );
  }

  console.log(props);
  return (
    <Box sx={{
      m: 1, p: 1, border: 1, borderColor: 'grey.400',
    }}
    >
      <Typography>Feature Filter</Typography>
      {renderAccordion([
        { label: 'Interior', options: [{ label: 'Alloy Wheels', name: 'alloy' }] },
        { label: 'Exterior', options: [] },
        { label: 'Comfort', options: [] }])}
    </Box>
  );
}

const mapStateToProps = (state) => ({ featureFilters: state.featureFilters });

export default connect(mapStateToProps, { setFeatureFilters })(FeatureFilter);

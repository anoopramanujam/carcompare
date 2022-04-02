import React from 'react';
import { connect } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box, Typography, Accordion, AccordionDetails, AccordionSummary,
  Radio, RadioGroup, FormControlLabel, FormLabel, Grid, FormHelperText,
} from '../mui';
import {
  REQUIRED, IGNORE, PREFERRED,
} from '../../globals/Constants';
import * as COL from '../../globals/ColConstants';
import { setFeatureFilters } from '../../actions';

// All the features to be shwon
const filterLabels = [
  {
    label: 'Exterior',
    description: 'Headlamps, Wheels...',
    options: [
      { label: 'Daytime Running Lamps', name: COL.daytimeRunningLamps },
      { label: 'Projector Headlamps', name: COL.projectorHeadLamps, helper: 'More brighter, and low glare to others' },
      { label: 'Automatic Headlight Control', name: COL.automaticHeadlightControl, helper: 'Switches on automatically when ambient light is low' },
      { label: 'Foglamps', name: COL.fogLamps },
      { label: 'Rain-sensing Wipers', name: COL.rainSensingWipers, helper: 'Switches on automatically when it rains' },
      { label: 'Alloy Wheels', name: COL.alloyWheels },
    ],
  },
  {
    label: 'Interior',
    description: 'Seats, Windows...',
    options: [
      { label: 'Power Windows', name: COL.powerWindows },
      { label: 'Driver Height Adjust', name: COL.driverSeatAdjust, helper: 'Adjust driver seat height' },
      { label: 'Electically Foldable ORVMs', name: COL.electFoldableMirrors },
      { label: 'Electrically Adjustable ORVMs', name: COL.electAdjustableMirrors },
      { label: 'Auto-dimming IRVM', name: COL.autoDimmingIrvm, helper: 'Reduce glare on rear view mirrors at night' },
      { label: 'Tilt Steering Adjust', name: COL.tiltSteeringAdjust, helper: 'Adjust steering up/down for maximum driver comfort' },
      { label: 'Front Armrest', name: COL.frontArmrest },
      { label: 'Rear Armrest', name: COL.rearArmrest },
      { label: 'Sun Roof', name: COL.sunRoof },
      { label: 'Rear AC Vents', name: COL.rearAcVents },
      { label: 'Rear Defogger', name: COL.rearDefogger },
      { label: 'Rear Seat-split', name: COL.rearSeatSplit },
      { label: 'Trunk Light', name: COL.trunkLight },
    ],
  },
  {
    label: 'Comfort',
    description: 'AC, Audio...',
    options: [
      { label: 'Android Auto / Apple CarPlay', name: COL.androidPlay },
      { label: 'Steering Mounted Controls', name: COL.steeringMountedControl },
      { label: 'Heads-up Display', name: COL.headsUpDisplay, helper: 'Display basic information in front windshield' },
      { label: 'One-Touch Power Windows', name: COL.powerWindowsOneTouch, helper: 'Single touch to open/close driver windows' },
      { label: 'Power Windows Remote', name: COL.powerWindowsRemote, helper: 'Open/close windows by key' },
      { label: 'Rear Sunshade', name: COL.rearSunshade },
      { label: 'Follow-Me Headlamps', name: COL.followMeHomeLights, helper: 'Headlamps stay on for a few minutes more' },
      { label: 'Wireless Charging', name: COL.wirelessCharging },
      { label: 'Cooled Glove Box', name: COL.cooledGloveBox },
      { label: 'Climate Control', name: COL.climateControl },
      { label: 'Remote Keyless Entry', name: COL.remoteKeylessEntry },
      { label: 'Push Start', name: COL.pushStart },
      { label: 'Cruise Control', name: COL.cruiseControl },
      { label: 'Ventilated Front Seats', name: COL.ventilatedFrontSeats },

    ],
  },
  { label: 'Safety', description: 'Airbags, Sensors...', options: [] },

];

function FeatureFilter(props) {
  const filters = props.featureFilters;

  const handleChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    props.setFeatureFilters({ ...props.featureFilters, [name]: value });
  };

  function renderAccordion(parts) {
    const [expanded, setExpanded] = React.useState('Comfort');

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
              <Typography sx={{ color: 'text.secondary' }}>{part.description}</Typography>

            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                direction="row"
                justifyContent="between"
                spacing={1}
              >
                {part.options.map((option) => (
                  <Grid item xs={12} sm={6} md={4} key={option.name}>
                    {/* <FormControl> */}
                    <FormLabel id="demo-radio-buttons-group-label">{option.label}</FormLabel>
                    <RadioGroup
                      row
                      name={option.name}
                      value={filters[option.name]}
                      onChange={handleChange}
                    >
                      <FormControlLabel value={REQUIRED} control={<Radio />} label="Required" />
                      <FormControlLabel value={PREFERRED} control={<Radio />} label="Nice to Have" />
                      <FormControlLabel value={IGNORE} control={<Radio />} label="Not Concerned" />
                    </RadioGroup>
                    {option.helper && <FormHelperText>{option.helper}</FormHelperText>}
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}

      </div>
    );
  }

  return (
    <Box sx={{
      m: 1, p: 1, border: 1, borderColor: 'grey.400',
    }}
    >
      <Typography>Feature Filter</Typography>
      {renderAccordion(filterLabels)}
    </Box>
  );
}

const mapStateToProps = (state) => ({ featureFilters: state.featureFilters });

export default connect(mapStateToProps, { setFeatureFilters })(FeatureFilter);

import React from 'react';
import { styled } from '@mui/material/styles';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import {
  Box, Stepper, Step, StepLabel, Button, StepButton,
} from '../mui';
import FeatureFilter from './FeatureFilter';
import SpecFilter from './SpecFilter';
import PrefFilter from './PrefFilter';

const steps = ['Specifications', 'Features', 'Preferences'];

const FilterStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.primary.light,
  border: 1,
  zIndex: 1,
  color: '#fff',
  width: 30,
  height: 30,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.dark,
    backgroundImage:
      `linear-gradient( 136deg, ${theme.palette.primary.light} 0%,  ${theme.palette.primary.dark} 100%)`,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.5)',
  }),
}));

function FilterStepIcon(props) {
  const {
    active, completed, className, icon,
  } = props;

  const icons = {
    1: <EventNoteOutlinedIcon />,
    2: <SettingsOutlinedIcon />,
    3: <TuneOutlinedIcon />,
  };

  return (
    <FilterStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(icon)]}
    </FilterStepIconRoot>
  );
}

function Filters() {
  const [activeStep, setActiveStep] = React.useState(2);

  const totalSteps = () => steps.length;
  const isLastStep = () => activeStep === totalSteps() - 1;

  const handleNext = () => {
    const newActiveStep = isLastStep() ? 0 : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const renderFilter = () => {
    if (activeStep === 0) {
      return <SpecFilter />;
    } if (activeStep === 1) {
      return <FeatureFilter />;
    }
    return <PrefFilter />;
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep === 0 ? totalSteps() - 1 : prevActiveStep - 1),
    );
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{
      mt: 1,
      p: 1,
      boxShadow: 1,
    }}
    >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>

            <StepButton color="inherit" onClick={handleStep(index)}>
              <StepLabel StepIconComponent={FilterStepIcon}>{label}</StepLabel>
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {renderFilter()}
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            // color="inherit"
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext} sx={{ mr: 1 }}>
            Next
          </Button>
        </Box>
      </div>
    </Box>
  );
}

export default Filters;

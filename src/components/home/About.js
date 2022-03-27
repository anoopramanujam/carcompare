import React from 'react';
import { Box, Typography } from '../mui';

function About() {
  return (
    <Box sx={{
      m: 1,
    }}
    >
      <Typography>
        This is an open source project hosted at
        {' '}
        <a href="https://github.com/anoopramanujam/carcompare"> Github</a>
      </Typography>
    </Box>
  );
}

export default About;

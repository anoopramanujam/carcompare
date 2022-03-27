import React, { useState } from 'react';
import {
  AppBar, Box, Toolbar, Stack, Divider, Link, Button,
} from '../mui';
import Home from './Home';
import Faq from './Faq';
import About from './About';

function Main() {
  const HOME = 'Home';
  const ABOUT = 'About';
  const FAQ = 'FAQ';
  const [selected, setSelected] = useState(HOME);

  function renderPage() {
    switch (selected) {
      case HOME: return <Home />;
      case ABOUT: return <About />;
      case FAQ: return <Faq />;
      default: return <Home />;
    }
  }

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Button onClick={() => setSelected(HOME)}> Home </Button>
              <Button onClick={() => setSelected(FAQ)}> FAQ </Button>
              <Button onClick={() => setSelected(ABOUT)}> About </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        {renderPage()}
      </Box>
    </Box>
  );
}

export default Main;

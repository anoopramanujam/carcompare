import React from 'react';
import {
  AppBar, Box, Toolbar, Stack, Divider, Link,
} from '../mui';

function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <Link href="/" underline="hover" variant="subtitle1"> Home </Link>
            <Link href="/works" underline="hover" variant="subtitle1"> How it Works </Link>
            <Link href="/about" underline="hover" variant="subtitle1"> About </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu;

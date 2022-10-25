import React from 'react';
import { AppBar, BottomNavigation, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const navBarBackground = grey[900];

export default function Footer() {
  return (
    <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
      <BottomNavigation sx={{ backgroundColor: `${navBarBackground}`, height: '10vh' }}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Typography variant='subtitle2'>
            © 2022 LTP - LOS TRES PRIMOS GAME STUDIO
            </Typography>
        </Stack>
      </BottomNavigation>
    </AppBar>
  );
}

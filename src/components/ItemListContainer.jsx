import { Paper, Grid, Typography } from '@mui/material';
import React from 'react';

export default function ItemListContainer({ greeting }) {
  return (
    <Grid container spacing={2} justifyContent="center" my={2}>
      <Grid item xs={10} md={8}>
        <Paper elevation={4} sx={{bgcolor: 'whitesmoke'}}>
          <Typography variant="h4" color="initial" p={4} align='center'>
            {greeting}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

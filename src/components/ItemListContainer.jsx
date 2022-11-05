import { Paper, Grid, Typography } from '@mui/material';
import React from 'react';
import ItemCount from './ItemCount';

export default function ItemListContainer({ greeting }) {
  return (
    <Grid container spacing={2} justifyContent="center" my={2} alignItems="center">
      <Grid item xs={10} md={8}>
        <Paper elevation={4} sx={{bgcolor: 'whitesmoke'}}>
          <Typography variant="h4" color="initial" p={4} align='center'>
            {greeting}
          </Typography>
          <ItemCount/>
        </Paper>
      </Grid>
    </Grid>
  );
}

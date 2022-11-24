import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Item from "./Item";

export default function ItemList({ products, titlePage }) {
  return (
    <Paper elevation={4} sx={{ bgcolor: "whitesmoke", padding: "16px" }}>
      <Typography variant="h1" color="initial" align="center" sx={{ fontWeight: "bold", fontSize: "2.5rem" }}>
        {titlePage}
      </Typography>
      <Grid container spacing={3} justifyContent="center" my={2} alignItems="stretch">
        {products.map((product) => (
          <Grid key={product.isbn} item xs={12} sm={6} md={6} lg={4}>
            <Item product={product} />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

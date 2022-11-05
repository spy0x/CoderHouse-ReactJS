import { Grid } from "@mui/material";
import React from "react";
import Item from "./Item";

export default function ItemList({ products }) {
  return (
    <Grid container spacing={3} justifyContent="center" my={2} alignItems="stretch">
      {products.map((product) => (
        <Grid key={product.isbn} item xs={12} sm={6} md={6} lg={4}>
          <Item product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

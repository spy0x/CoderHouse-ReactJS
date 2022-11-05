import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ItemList from "./ItemList";

const products = [
  {
    id: 1,
    name: "Tijera",
    description: "Ideal para cortar cualquier cosa.",
    price: 5,
    img: "../assets/img/products/img_1.png",
    stock: 3
  },
  {
    id: 2,
    name: "Casco",
    description: "Excelente artículo para tu protección",
    price: 10,
    img: "../assets/img/products/img_2.png",
    stock: 5
  },
  {
    id: 3,
    name: "Bicicleta",
    description: "La mejor bicicleta del mundo",
    price: 50,
    img: "../assets/img/products/img_3.png",
    stock: 10
  }
];

export default function ItemListContainer({ greeting }) {
  return (
    <Grid container spacing={2} justifyContent="center" my={2} alignItems="center">
      <Grid item xs={10} md={8}>
        <Paper elevation={4} sx={{ bgcolor: "whitesmoke" }}>
          <ItemList products={products}/>
          <Typography variant="h4" color="initial" p={4} align="center">
            {greeting}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

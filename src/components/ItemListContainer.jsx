import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ItemList from "./ItemList";

const products = [
  {
    isbn: 9789569673245,
    title: "Decadencia de Tokio",
    author: "Ryu Murakami",
    price: 18,
    specifications: {
      paperType: "Paperback",
      dimensions: "12.5 x 18 cm.",
      pages: 294,
    },
    img: "/static/images/products/9789569673245.webp",
    stock: 3,
  },
  {
    isbn: 9789569673252,
    title: "El paisaje del país de las cenizas",
    author: "Juza Unno",
    price: 11,
    specifications: {
      paperType: "Paperback",
      dimensions: "12.5 x 18 cm.",
      pages: 164,
    },
    img: "/static/images/products/9789569673252.webp",
    stock: 10,
  },
  {
    isbn: 9789569673221,
    title: "Compartir un marido",
    author: "Ho Xuan Huong",
    price: 13,
    specifications: {
      paperType: "Paperback",
      dimensions: "12.5 x 18 cm.",
      pages: 112,
    },
    img: "/static/images/products/9789569673221.webp",
    stock: 5,
  },
];

export default function ItemListContainer({ greeting }) {
  return (
    <Grid container spacing={2} justifyContent="center" my={2} alignItems="center" mb={10}>
      <Grid item xs={11} xl={10}>
        <Paper elevation={4} sx={{ bgcolor: "whitesmoke", padding: "16px" }}>
          <Typography variant="h1" color="initial" align='center' sx={{fontWeight: 'bold', fontSize: "2.5rem"}}>
            Our Bookstore
          </Typography>
          <ItemList products={products} />
        </Paper>
      </Grid>
    </Grid>
  );
}

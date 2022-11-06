import { Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "./Loader";

const productsDB = [
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
  const [products, setProducts] = useState([]);

  //Simulating Server Delay Loading
  useEffect(() => {
    async function delayTest() {
      const productsDelay = await new Promise((res, rej) => {
        setTimeout(() => {
          res(productsDB);
        }, 2000);
      });
      setProducts(productsDelay);
    }
    delayTest();
  }, []);

  return (
    <Grid container spacing={2} justifyContent="center" my={2} alignItems="center" mb={10}>
      <Grid item xs={11} xl={10}>
        <Paper elevation={4} sx={{ bgcolor: "whitesmoke", padding: "16px" }}>
          <Typography variant="h1" color="initial" align="center" sx={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            {greeting}
          </Typography>
          {!products.length && (
            <Loader/>
          )}
          <ItemList products={products} />
        </Paper>
      </Grid>
    </Grid>
  );
}

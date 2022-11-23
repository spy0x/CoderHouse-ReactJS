import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

export default function ItemListContainer({ greeting, category, productsDB }) {
  const [products, setProducts] = useState([]);
  const { author } = useParams();
  const titlePage = author ? `${author.replace('_', ' ')}'s books` : greeting;
  //Simulating Server Delay Loading
  useEffect(() => {
    async function delayTest() {
      setProducts([]);
      const productsDelay = await new Promise((res, rej) => {
        setTimeout(() => {
          res(productsDB);
        }, 1000);
      });
      if (author) {
        setProducts(productsDelay.filter((item) => item.author === author.replace('_', ' ')));
      } else if (category === "new")
      {
        setProducts(productsDelay.filter((item) => item.new === true));
      } else if (category === "top")
      {
        setProducts(productsDelay.filter((item) => item.top === true));
      } else {
        setProducts(productsDelay);
      }
    }
    delayTest();
  }, [author, category, productsDB]);
  if (author && !productsDB.some(element => element.author === author.replace('_', ' '))){
    return <ErrorPage/>
  }

  return (
    <Grid container spacing={2} justifyContent="center" my={2} alignItems="center" mb={10}>
      <Grid item xs={11} xl={10}>
        <Paper elevation={4} sx={{ bgcolor: "whitesmoke", padding: "16px" }}>
          <Typography variant="h1" color="initial" align="center" sx={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            {titlePage}
          </Typography>
          {!products.length && <Loader />}
          <ItemList products={products} />
        </Paper>
      </Grid>
    </Grid>
  );
}

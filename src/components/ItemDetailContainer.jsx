import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

export default function ItemDetailContainer({ productsDB }) {
  const { isbn } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function delayTest() {
      setProducts([]);
      const productsDelay = await new Promise((res, rej) => {
        setTimeout(() => {
          res(productsDB);
        }, 1000);
      });
      setProducts(productsDelay);
    }
    delayTest();
  }, [productsDB]);

  if (isbn && !productsDB.some((item) => item.isbn === isbn)) {
    return <ErrorPage />;
  }
  return (
    <Grid container justifyContent="center" my={2} alignItems="center">
      {products.length ? <ItemDetail item={products.find((item) => item.isbn === isbn)} /> : <Loader />}
    </Grid>
  );
}

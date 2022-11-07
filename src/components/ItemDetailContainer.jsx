import { Grid } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

export default function ItemDetailContainer({productsDB}) {
  const { isbn } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function delayTest() {
      setProducts([]);
      const productsDelay = await new Promise(
        (res, rej) => {
          setTimeout(() => {
            res(productsDB);
          }, 2000);
        }
      );
      setProducts(productsDelay);
      // if (!isbn || !productsDelay.some(element => element.isbn === isbn)) {
      //   return <p>No existe el producto</p>
      // }
    }
    delayTest();
  }, [isbn, productsDB]);

  return (
    <Grid container justifyContent="center" my={2} alignItems="center">
      {products.length ? <ItemDetail item={products.find((item) => item.isbn === isbn)} /> : <Loader />}
    </Grid>
  );
}

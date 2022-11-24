import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default function ItemDetailContainer() {
  const { isbn } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "product"), where("isbn", "==", isbn));
    async function loadDB() {
      setProducts([]);
      const result = await getDocs(q);
      if(result.size === 0){
        return <ErrorPage />;
      }
      const productsDB = result.docs.map((element) => element.data())
      setProducts(productsDB);
    }
    loadDB();
  }, [isbn]);


  return (
    <Grid container justifyContent="center" my={2} alignItems="center">
      {products.length ? <ItemDetail item={products[0]} /> : <Loader />}
    </Grid>
  );
}

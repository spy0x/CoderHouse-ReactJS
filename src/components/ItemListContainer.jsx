import { Grid } from "@mui/material";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import ItemList from "./ItemList";
import Loader from "./Loader";

let notValid;

export default function ItemListContainer({ greeting, category }) {
  
  const [products, setProducts] = useState([]);
  const { author } = useParams();
  const titlePage = author ? `${author.replace('_', ' ')}'s books` : greeting;
  //Simulating Server Delay Loading
  useEffect(() => {
    const db = getFirestore();
    const getCollection = collection(db, "product");
    async function loadDB() {
      setProducts([]);
      const result = await getDocs(getCollection);
      const productsDB = result.docs.map((element) => element.data())
      if (author) {
        setProducts(productsDB.filter((item) => item.author === author.replace('_', ' ')));
      } else if (category === "new")
      {
        setProducts(productsDB.filter((item) => item.new === true));
      } else if (category === "top")
      {
        setProducts(productsDB.filter((item) => item.top === true));
      } else {
        setProducts(productsDB);
      }
      if (author && !productsDB.some(element => element.author === author.replace('_', ' '))){
        notValid = true;
      }
      else {
        notValid = false;
      }
    }
    loadDB();
  }, [author, category]);
  if (notValid) {
    return <ErrorPage />;
  }
  return (
    <Grid container spacing={2} justifyContent="center" my={2} alignItems="center" mb={10}>
      <Grid item xs={11} xl={10}>
          {products.length ? <ItemList products={products} titlePage={titlePage} /> : <Loader />}
      </Grid>
    </Grid>
  );
}

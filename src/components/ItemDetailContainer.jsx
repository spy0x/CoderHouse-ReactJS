import { Grid } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
const productsDB = [
  {
    isbn: "9789569673245",
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
    new: true,
    top: false,
  },
  {
    isbn: "9789569673252",
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
    new: false,
    top: true,
  },
  {
    isbn: "9789569673221",
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
    new: true,
    top: false,
  },
];
export default function ItemDetailContainer() {
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
  }, [isbn]);

  return (
    <Grid container justifyContent="center" my={2} alignItems="center">
      {products.length ? <ItemDetail item={products.find((item) => item.isbn === isbn)} /> : <Loader />}
    </Grid>
  );
}

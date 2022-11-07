import { Box, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import TableItemSpecs from "./TableItemSpecs";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "60%", md: "25%" },
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ItemDetail({ item }) {
  console.log(item)
  return (
    <>
    <CardMedia
      component="img"
      sx={{
        width: "100%",
        maxHeight: "70%",
        objectFit: "contain",
      }}
      src={item.img}
    />
    {/* <TableItemSpecs itemSpecs={item.specifications} /> */}
    </>
  );
}

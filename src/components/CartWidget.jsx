import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { context } from "../context/CartContext";

export default function CartWidget() {
  const { itemsAmount } = useContext(context);
  // console.log(itemsAmount);
  return (
    <Badge badgeContent={itemsAmount} invisible={itemsAmount < 1} color="primary">
      <IconButton color="inherit">
        <ShoppingCartOutlined />
      </IconButton>
    </Badge>
  );
}

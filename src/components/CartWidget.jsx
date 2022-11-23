import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { context } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { itemsAmount } = useContext(context);
  return (
    <Link to="/cart" style={{ textDecoration: "inherit", color: "inherit" }}>
      <Badge badgeContent={itemsAmount} invisible={itemsAmount < 1} color="primary">
        <IconButton color="inherit">
          <ShoppingCartOutlined />
        </IconButton>
      </Badge>
    </Link>
  );
}

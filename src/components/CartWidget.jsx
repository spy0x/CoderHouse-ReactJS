import { ShoppingCartOutlined } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import React, { useContext } from "react";
import { context } from "./CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { itemsAmount } = useContext(context);
  return (
    <Tooltip title="View Cart" placement="bottom">
    <Link to="/cart" style={{ textDecoration: "inherit", color: "inherit" }}>
      <Badge badgeContent={itemsAmount} invisible={itemsAmount < 1} color="primary">
        <IconButton color="inherit">
          <ShoppingCartOutlined />
        </IconButton>
      </Badge>
    </Link>
    </Tooltip>
  );
}

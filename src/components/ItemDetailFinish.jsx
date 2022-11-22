import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";

export default function ItemDetailFinish() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={10}>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="error"
          size="medium"
          startIcon={<ShoppingCartRoundedIcon />}
          sx={{ textAlign: "center" }}
        >
          View Cart
        </Button>
      </Link>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="error"
          size="medium"
          startIcon={<StoreRoundedIcon />}
          sx={{ textAlign: "center" }}
        >
          Continue Shopping
        </Button>
      </Link>
    </Stack>
  );
}

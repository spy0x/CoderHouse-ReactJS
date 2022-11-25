import React from "react";
import { Typography } from "@mui/material";

export default function CheckoutBrief({ cart }) {
  return (
    <>
      <Typography align="center" variant="h5" color="initial" sx={{fontWeight: 'bold'}}>
        Summary
      </Typography>
      {cart.map(({ title, quantity, price, isbn }) => (
        <Typography key={isbn} variant="body1" marginRight={{xs:5, md:0}} align="right" color="initial">
          {title}(x{quantity}) ............... ${price * quantity}
        </Typography>
      ))}
      <Typography align="right" variant="h6" color="initial" marginRight={{xs:5, md:0}}>
        Total: ${cart.reduce((acc, {price, quantity})=> acc + price * quantity, 0)}
      </Typography>
    </>
  );
}

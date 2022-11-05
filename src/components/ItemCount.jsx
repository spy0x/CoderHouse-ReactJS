import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function ItemCount() {
  const stock = 25;
  function changeQuantity(e){
    if(e.target.value > stock) 
    e.target.value = stock;
    else if(e.target.value < 0)
    e.target.value = 0;
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        textAlign: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-number"
          label="Quantity"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: {
              max: stock,
              min: 0,
            },
          }}
          onChange={(e) => changeQuantity(e)}
        />
      </div>
    </Box>
  );
}

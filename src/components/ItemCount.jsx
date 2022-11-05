import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";

export default function ItemCount() {
  const stock = 25;
  function validateQuantity({ target }) {
    if (target.value > stock) target.value = stock;
    else if (target.value < 0) target.value = 0;
  }
  return (
    <Box
      // component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "8ch" },
        textAlign: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="select_quantity"
          label="Quantity"
          type="number"
          defaultValue={0}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            inputProps: {
              max: stock,
              min: 0,
              style: { textAlign: 'center' }
            },
          }}
          onChange={(e) => validateQuantity(e)}
        />
      </div>
    </Box>
  );
}

import { Box, Button, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

export default function ItemCount({ stock }) {
  function validateQuantity({ target }) {
    if (target.value > stock) target.value = stock;
    else if (target.value < 0) target.value = 1;
  }
  return (
    <Stack direction="row" justifyContent="space-between" mx={4} my={1} alignItems="center" spacing={2}>
      <Box
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
            defaultValue={1}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              inputProps: {
                max: stock,
                min: 1,
                style: { textAlign: "center" },
              },
            }}
            onChange={(e) => validateQuantity(e)}
          />
        </div>
      </Box>
      <Button size="small" sx={{ padding: "1rem" }}>
        Add to Cart
      </Button>
    </Stack>
  );
}

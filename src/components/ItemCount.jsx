import { Box, Button, Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';


export default function ItemCount({ stock, onClickAddToCart }) {
  function validateQuantity({ target }) {
    if (target.value > stock) target.value = stock;
    else if (target.value < 0) target.value = 1;
    setQuantity(target.value)
  }
  const [quantity, setQuantity] = useState(1);
  
  return (
    <>
      <Stack direction="row" justifyContent="space-between" mx={4} mt={1} alignItems="center" spacing={2}>
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
        <Button size="small" sx={{ padding: "1rem" }} onClick={() => onClickAddToCart(parseInt(quantity))} startIcon={<AddShoppingCartRoundedIcon />}>
          Add to Cart
        </Button>
      </Stack>
      <Typography variant="caption" color="initial" align="center" mb={1}>
        {stock} units available.
      </Typography>
    </>
  );
}

import { Box, CardMedia, Divider, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import ItemCount from "./ItemCount";
import TableItemSpecs from "./TableItemSpecs";

const boxStyle = {
  width: "90%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  mb: 7,
};

export default function ItemDetail({ item }) {
  const { img, title, author, specifications, price, stock, isbn } = item;
  const handleAddToCart = (quantity) => {
    console.log(`Agregaste ${quantity} al carrito`);
    setShowItemCount(false);
  };
  const [showItemCount, setShowItemCount] = useState(true);
  return (
    <Box sx={boxStyle}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="top"
        alignContent="center"
        wrap="wrap"
      >
        <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            sx={{
              height: "70vh",
              objectFit: "contain",
            }}
            src={img}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3}>
            <Box>
              <Typography variant="h6" color="initial" textAlign="center">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                {author}
              </Typography>
            </Box>
            <TableItemSpecs itemSpecs={specifications} isbn={isbn} />
            <Typography mt={2} display="block" variant="h6" color="text.secondary" align="center" gutterBottom>
              ${price} USD
            </Typography>
            <Divider />
            {showItemCount ? <ItemCount stock={stock} onClickAddToCart={handleAddToCart} /> : <>Nada</>}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

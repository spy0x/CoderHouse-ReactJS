import { Box, CardMedia, Grid, Typography, Stack, Button, Divider } from "@mui/material";
import React from "react";
import TableItemSpecs from "./TableItemSpecs";
import ItemCount from "./ItemCount";

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
            <Stack direction="row" justifyContent="space-between" mx={4} my={1} alignItems="center" spacing={2}>
              <ItemCount stock={stock} />
              <Button size="small" sx={{ padding: "1rem" }}>
                Add to Cart
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

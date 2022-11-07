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
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            sx={{
              height: "70vh",
              objectFit: "contain",
            }}
            src={item.img}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3}>
            <Typography variant="h6" color="initial" textAlign="center">
              {item.title}
            </Typography>
            <TableItemSpecs itemSpecs={item.specifications} />
            <Divider/>
            <Stack direction="row" justifyContent="space-between" mx={4} my={1} alignItems="center" spacing={2}>
              <ItemCount stock={item.stock} />
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

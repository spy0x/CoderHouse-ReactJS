import { Divider, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import ItemCount from "./ItemCount";

export default function Item({ product }) {
  return (
    <Card sx={{ height: "100%" }}>
      <Stack direction="column" justifyContent="space-between" alignItems="stretch" spacing={0} sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          alt={product.title}
          height="350px"
          image={product.img}
          sx={{ objectFit: "contain", paddingTop: "1rem" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {product.author}
          </Typography>
        </CardContent>
        <Stack direction="column">
          <Button
            variant="contained"
            color="error"
            size="medium"
            href="#contained-buttons"
            sx={{ marginX: "4rem", marginBottom: "1rem", textAlign: "center" }}
          >
            View Details
          </Button>
          <Divider variant="middle" />
          <Stack direction="row" justifyContent="space-between" mx={4} my={1} alignItems="center" spacing={2}>
            <ItemCount stock={product.stock} />
            <Button size="small" sx={{ padding: "1rem" }}>
              Add to Cart
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

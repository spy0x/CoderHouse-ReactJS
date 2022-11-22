import { Divider, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

export default function Item({ product }) {
  const { author, img, title, price, isbn, stock } = product;
  return (
    <Card sx={{ height: "100%" }}>
      <Stack direction="column" justifyContent="space-between" alignItems="stretch" spacing={0} sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          alt={title}
          height="350px"
          image={img}
          sx={{ objectFit: "contain", paddingTop: "1rem" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {title}
          </Typography>
        </CardContent>
        <Stack direction="column">
          <Typography variant="body2" color="text.secondary" align="center">
            {author}
          </Typography>
          <Typography mt={2} display="block" variant="h6" color="text.secondary" align="center" gutterBottom>
            ${price} USD
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={0}>
            <Link to={`/books/isbn/${isbn}`} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="error"
                size="medium"
                sx={{ marginBottom: "1rem", textAlign: "center" }}
              >
                View Details
              </Button>
            </Link>
          </Stack>
          <Divider variant="middle" />
          <ItemCount item={stock} />
        </Stack>
      </Stack>
    </Card>
  );
}

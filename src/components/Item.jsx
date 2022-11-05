import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import ItemCount from './ItemCount';

export default function Item({product}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={product.name}
            height="140"
            image={product.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <ItemCount stock={product.stock}/>
            <Button size="small">Add to Cart</Button>
          </CardActions>
        </Card>
      );
}

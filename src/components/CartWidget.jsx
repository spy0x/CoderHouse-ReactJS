import React from 'react';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function CartWidget() {
  return (
    <IconButton color='inherit'>
      <ShoppingCartOutlined />
    </IconButton>
  );
}

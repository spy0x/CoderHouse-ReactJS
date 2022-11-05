import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ItemCount() {
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            textAlign: 'center' 
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-number"
              label="Quantity"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange= {() => { console.log("funciona")}}
            />
          </div>
        </Box>
      );
}

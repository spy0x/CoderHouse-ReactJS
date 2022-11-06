import { Grid, Button, Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import React, { useState } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({ product }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container justifyContent="center" my={2} alignItems="center">
      <Button
        variant="contained"
        color="error"
        size="medium"
        onClick={handleOpen}
        sx={{ mx:8, marginBottom: "1rem", textAlign: "center" }}
      >
        View Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
        <ItemDetail product={product} />
        </Box>
      </Modal>
    </Grid> 
  );
}

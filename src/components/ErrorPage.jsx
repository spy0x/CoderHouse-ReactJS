import { Box, Typography, Stack } from "@mui/material";
import React from "react";

const boxStyle = {
  width: "90%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  mb: 7,
};

export default function ErrorPage() {
  return (
    <Box sx={{height:"75vh"}}>
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} height="100%">
      <Box sx={boxStyle}>
        <Typography variant="body1" color="initial" textAlign="center">
          This page doesn't exist!
        </Typography>
      </Box>
    </Stack>
    </Box>
  );
}

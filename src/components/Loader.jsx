import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import { Stack } from "@mui/material";

import React from 'react'

export default function Loader() {
  return (
    <Stack direction="row" my={5} justifyContent="center">
        <LoadingButton
          loading
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="text"
          sx={{ textAlign: "center" }}
        >
          Loading...
        </LoadingButton>
      </Stack>
  )
}

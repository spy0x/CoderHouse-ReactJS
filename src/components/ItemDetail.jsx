import { Box, Typography, Stack } from "@mui/material";
import React, {useState, useEffect} from "react";
import Loader from "./Loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ItemDetail(product) {
  const [item, setItem] = useState([]);

  //Simulating Server Delay Loading
  useEffect(() => {
    async function delayTest() {
      const itemDelay = await new Promise((res, rej) => {
        setTimeout(() => {
          res(product);
        }, 2000);
      });
      setItem(itemDelay);
    }
    delayTest();
  }, []);

  return (
    <Box sx={style}>
      {item.length < 1 ? (
        <Loader/>
      ) : (
        <>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </>
      )}
    </Box>
  );
}

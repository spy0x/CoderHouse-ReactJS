import { Box, Typography, CardMedia } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import TableItemSpecs from "./TableItemSpecs";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs:"50%", sm:"25%"},
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ItemDetail({ product }) {
  const [item, setItem] = useState([]);
  const [content, setContent] = useState([]);

  //Simulating Server Delay Loading
  useEffect(() => {
    async function delayTest() {
      const itemDelay = await new Promise((res, rej) => {
        setTimeout(() => {
          res(product);
        }, 2000);
      });
      setItem(itemDelay);
      for (const key in itemDelay.specifications) {
        content.push(
          <Typography key={key} id="modal-modal-description" sx={{ mt: 2 }}>
            {itemDelay.specifications[key]}
          </Typography>
        );
      }
      setContent(content);
    }
    delayTest();
  }, []);

  return (
    <Box sx={boxStyle}>
      {item.length < 1 ? (
        <Loader />
      ) : (
        <>
          <CardMedia
            component="img"
            sx={{
              width: "100%",
              maxHeight: "75%",
              objectFit: "contain",
            //   maxHeight: { xs: 233, md: 167 },
            //   maxWidth: { xs: 350, md: 250 },
            }}
            src={item.img}
          />
          {/* {content} */}
          <TableItemSpecs/>
        </>
      )}
    </Box>
  );
}

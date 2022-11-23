import { TableHead, Box, Grid, IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Image } from "mui-image";
import React, { useContext } from "react";
import { context } from "../context/CartContext";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const boxStyle = {
  width: { xs: "100%", sm: "90%" },
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: { xs: 0, md: 4 },
  mb: 7,
};

export default function Cart() {
  const { cart, removeItem } = useContext(context);
  return (
    <Grid container justifyContent="center" my={2}>
      <Box sx={boxStyle}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="center">Product</StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map(({ isbn, img, title, price, quantity }) => (
                <StyledTableRow key={isbn}>
                  <StyledTableCell component="th" scope="row" align="left">
                    <Image
                      src={img}
                      height="190px"
                      width="100%"
                      fit="contain"
                      bgColor="inherit"
                      sx={{ minWidth: "25px"}}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="left">{title}</StyledTableCell>
                  <StyledTableCell align="right">x{quantity}</StyledTableCell>
                  <StyledTableCell align="right">${price * quantity}</StyledTableCell>
                  <StyledTableCell  padding="checkbox" align="center">
                    <IconButton color="primary" component="label" onClick={() => removeItem(isbn)}>
                      <DeleteForeverRoundedIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="h6" align="right" color="initial">TOTAL TO PAY: ${cart.reduce((acc, {price, quantity}) => acc + price * quantity, 0)}</Typography>
      </Box>
    </Grid>
  );
}

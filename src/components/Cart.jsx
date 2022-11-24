import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import StoreRoundedIcon from '@mui/icons-material/LocalAtmOutlined';
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { Image } from "mui-image";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "../context/CartContext";

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
  px: { xs: 0, md: 4 },
  pt: { xs: 0, md: 4 },
  pb: 3,
  mb: 7,
};

export default function Cart() {
  const { cart, removeItem } = useContext(context);
  if (cart.length < 1) {
    return (
      <Grid container justifyContent="center" my={2}>
        <Box sx={boxStyle}>
          <Typography align="center" component="div" variant="body1" color="initial">
            Your cart is empty!
          </Typography>
          <Divider component="div" variant="middle" sx={{ m: 2 }} />
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={10}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="error"
                size="medium"
                startIcon={<StoreRoundedIcon />}
                sx={{ textAlign: "center" }}
              >
                Continue Shopping
              </Button>
            </Link>
          </Stack>
        </Box>
      </Grid>
    );
  }
  return (
    <Grid container justifyContent="center" my={2}>
      <Box sx={boxStyle}>
        <Typography variant="h1" mb={2} color="initial" align="center" sx={{ fontWeight: "bold", fontSize: "2.5rem" }}>
          My Cart
        </Typography>
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
                      sx={{ minWidth: "25px" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="left">{title}</StyledTableCell>
                  <StyledTableCell align="right">x{quantity}</StyledTableCell>
                  <StyledTableCell align="right">${price * quantity}</StyledTableCell>
                  <StyledTableCell padding="checkbox" align="center">
                    <IconButton color="primary" component="label" onClick={() => removeItem(isbn)}>
                      <DeleteForeverRoundedIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Divider component="div" variant="middle" sx={{ mt: 4 }} />
        <Stack direction="column" justifyContent="flex-start" alignItems="flex-end" spacing={2}>
          <Typography letterSpacing={0.8} variant="h6" mx={2} mt={2} align="right" color="initial">
            TOTAL TO PAY (USD): ${cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0)}
          </Typography>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="error"
              size="medium"
              startIcon={<LocalAtmOutlinedIcon/>}
              sx={{ textAlign: "center" }}
            >
              CHECKOUT
            </Button>
          </Link>
        </Stack>
      </Box>
    </Grid>
  );
}

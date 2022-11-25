import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useContext } from "react";
import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import { context } from "./CartContext";
import Swal from "sweetalert2";
import CheckoutSuccess from "./CheckoutSuccess";
import CheckoutBrief from "./CheckoutBrief";

const boxStyle = {
  width: { xs: "100%", sm: "90%" },
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  px: { xs: 0, md: 4 },
  pt: { xs: 2, md: 4 },
  pb: 3,
  mb: 7,
};

function handleTextVerification(event) {
  const includedChars = /^[a-z A-Z]+$/;
  if (!includedChars.test(event.key)) {
    event.preventDefault();
  }
}
function handleNumberVerification(event) {
  if((event.keyCode > 31 && event.keyCode < 48) || event.keyCode > 57) {
    event.preventDefault();
  }
}

export default function Checkout() {
  const { cart, clearCart } = useContext(context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [phone, setPhone] = useState("");
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [orderID, setOrderID] = useState("");
  const [emailError, setEmailError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!cart.length) {
      Swal.fire({
        title: "Error!",
        text: "Your cart is empty!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    if(email !== email2){
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }
    setOpenBackdrop(true);
    createOrder();
  }
  async function createOrder() {
    const order = {
      buyer: { name, email, phone},
      cart,
      total: cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0),
      date: serverTimestamp()
    };
    const db = getFirestore();
    const ordersCollections = collection(db, "orders");
    const result = await addDoc(ordersCollections, order);
    setOrderID(result.id);
    setOpenBackdrop(false);
    clearInfo();
  }
  function clearInfo() {
    setName("");
    setEmail("");
    setEmail2("");
    setPhone("");
    setEmailError(false);
    clearCart();
  }
  if (orderID !== "") {
    return <CheckoutSuccess orderID={orderID} />;
  }
  return (
    <Grid container justifyContent="center" mt={2}>
      <Box sx={boxStyle}>
        <Typography variant="h1" mb={2} color="initial" align="center" sx={{ fontWeight: "bold", fontSize: "2.5rem" }}>
          Checkout
        </Typography>
        <Grid container direction="row" rowSpacing={3} justifyContent="center" alignItems="flex-start">
          <Grid item xs={10} md={5}>
            <Typography mb={4} align="center" variant="h6" color="initial" sx={{ fontWeight: "bold" }}>
              Your Information
            </Typography>
            <form action="/checkout" onSubmit={handleSubmit}>
              <FormControl fullWidth>
                <Box
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "35ch" },
                  }}
                  autoComplete="off"
                >
                  <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
                    <TextField
                      required
                      id="fullname-input"
                      label="Fullname"
                      name="fullname"
                      placeholder="Your Fullname"
                      margin="normal"
                      onKeyDown={handleTextVerification}
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      required
                      id="email-input"
                      label="Email"
                      name="email"
                      placeholder="mail@domain.com"
                      margin="normal"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      required
                      error={emailError}
                      helperText={emailError && "Email does not match!"}
                      id="confirm-email-input"
                      label="Confirm Email"
                      name="confirm email"
                      placeholder="confirm@email.com"
                      margin="normal"
                      type="email"
                      onChange={(e) => setEmail2(e.target.value)}
                      value={email2}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <TextField
                      required
                      type="tel"
                      id="phone-input"
                      label="Phone"
                      name="phone"
                      placeholder="123456789"
                      margin="normal"
                      onKeyDown={handleNumberVerification}
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <Button type="submit" variant="contained" color="error">
                      Confirm Purchase
                    </Button>
                  </Stack>
                </Box>
              </FormControl>
            </form>
          </Grid>
          {cart.length > 0 && (
            <Grid item xs={10} md={5}>
              <CheckoutBrief cart={cart} />
            </Grid>
          )}
        </Grid>
      </Box>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Grid>
  );
}

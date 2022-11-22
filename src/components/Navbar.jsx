import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { grey } from "@mui/material/colors";
import logo from "../assets/img/navbar_logo.png";
import CartWidget from "./CartWidget";

const navBarBackground = grey[900];
const pages = [
  { name: "Store", url: "/" },
  { name: "NEW", url: "/books/category/new" },
  { name: "TOP", url: "/books/category/top" },
  { name: "Sample Author", url: "/books/author/Juza_Unno" },
  { name: "Sample Book", url: "/books/isbn/9789569673245" },
];

function MyNavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: `${navBarBackground}`, padding: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 5 }}>
            <Link to="/">
              <img src={logo} alt="Logo" height="50" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, id) => (
                <MenuItem key={id}>
                  <Link to={page.url} style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
            <a href="./">
              <img src={logo} alt="Logo" height="50" />
            </a>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, id) => (
              <Button key={id} sx={{ my: 2, color: "white", display: "block" }}>
                <Link to={page.url} style={{ textDecoration: "none", color: "whitesmoke" }}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <CartWidget />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyNavBar;

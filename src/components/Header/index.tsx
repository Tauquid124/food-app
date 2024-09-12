import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from "next/link";


export const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#9553a0",
        boxShadow: "0 4px 4px 0 #9553a0",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1.25rem",
        position: "static",
        top: 0,
        zIndex: 100,
      }}
    >
      <Typography
        sx={{
          color: "#f1f1f1",
          fontFamily: "Open Sans",
          fontSize: "3.00rem",
          fontWeight: 700,
          _hover: "[object Object]",
        }}
      >
        GoFOOd
      </Typography>
      <Link href={"/"}>
        {" "}
        <Typography
          sx={{
            color: "#ffffffcc",
            fontFamily: "Open Sans",
            fontSize: "2.00rem",
            fontWeight: 400,
            _hover: "[object Object]",
          }}
        >
          Home
        </Typography>
      </Link>

      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
      >
        <IconButton sx={{ p: "10px" }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search here..."
          inputProps={{ "aria-label": "Search here..." }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
      <Stack direction={"row"} spacing={2} sx={{ paddingRight: "1rem" }}>
      <Link href={"/Cart"}>
        <Button variant="contained" startIcon={<ShoppingCartIcon />}>
        <Typography  sx={{color:"white",fontSize:"1rem"}}>0</Typography>
            Cart
          </Button>
        </Link>  
        <Link href={"/Login"}>
        <Button variant="contained" startIcon={<LoginIcon />}>
            Login
          </Button>
        </Link>  
       
          <Button variant="contained" startIcon={<VpnKeyIcon />}>
          <Link href={"/Signup"}>SignUp</Link>
          </Button>
        
      </Stack>
    </Box>
  );
};

import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( <
        AppBar position = "static" >
        <
        Toolbar >
        <
        Typography variant = "h6"
        component = "div"
        sx = {
            { flexGrow: 1 }
        } >
        Hotel Management System <
        /Typography> <
        Button color = "inherit"
        component = { Link }
        to = "/rooms" > Rooms < /Button> <
        Button color = "inherit"
        component = { Link }
        to = "/items" > Items < /Button> <
        Button color = "inherit"
        component = { Link }
        to = "/customers" > Customers < /Button> < /
        Toolbar > <
        /AppBar>
    );
};

export default Navbar;
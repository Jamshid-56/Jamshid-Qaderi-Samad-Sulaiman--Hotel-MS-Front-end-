import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoomsPage from "./pages/RoomsPage";
import ItemsPage from "./pages/ItemsPage";
import CustomersPage from "./pages/CustomersPage";

const App = () => {
    return ( <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/rooms"
        element = { < RoomsPage / > }
        /> <
        Route path = "/items"
        element = { < ItemsPage / > }
        /> <
        Route path = "/customers"
        element = { < CustomersPage / > }
        /> < /
        Routes > <
        /Router>
    );
};

export default App;
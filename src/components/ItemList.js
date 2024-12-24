import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import axios from "../api";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("/items")
            .then((response) => setItems(response.data))
            .catch((error) => console.error(error));
    }, []);

    return ( <
        TableContainer component = { Paper } >
        <
        Table >
        <
        TableHead >
        <
        TableRow >
        <
        TableCell > Item Name < /TableCell> <
        TableCell > Price < /TableCell> <
        TableCell > Quantity < /TableCell> <
        /TableRow> <
        /TableHead> <
        TableBody > {
            items.map((item) => ( <
                TableRow key = { item.id } >
                <
                TableCell > { item.name } < /TableCell> <
                TableCell > { item.price } < /TableCell> <
                TableCell > { item.quantity } < /TableCell> <
                /TableRow>
            ))
        } <
        /TableBody> <
        /Table> <
        /TableContainer>
    );
};

export default ItemList;
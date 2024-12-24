import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import axios from "../api";

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        axios
            .get("/customers")
            .then((response) => setCustomers(response.data))
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
        TableCell > Customer Name < /TableCell> <
        TableCell > Email < /TableCell> <
        TableCell > Phone < /TableCell> <
        /TableRow> <
        /TableHead> <
        TableBody > {
            customers.map((customer) => ( <
                TableRow key = { customer.id } >
                <
                TableCell > { customer.name } < /TableCell> <
                TableCell > { customer.email } < /TableCell> <
                TableCell > { customer.phone } < /TableCell> <
                /TableRow>
            ))
        } <
        /TableBody> <
        /Table> <
        /TableContainer>
    );
};

export default CustomerList;
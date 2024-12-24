import React, { useState } from "react";
import CustomerList from "../components/CustomerList";
import CustomerForm from "../components/CustomerForm";
import { Container, Typography } from "@mui/material";

const CustomersPage = () => {
    const [refresh, setRefresh] = useState(false);

    const handleCustomerAdded = () => {
        setRefresh(!refresh);
    };

    return ( <
        Container >
        <
        Typography variant = "h4"
        gutterBottom >
        Manage Customers <
        /Typography> <
        CustomerForm onCustomerAdded = { handleCustomerAdded }
        /> <
        CustomerList key = { refresh }
        /> <
        /Container>
    );
};

export default CustomersPage;
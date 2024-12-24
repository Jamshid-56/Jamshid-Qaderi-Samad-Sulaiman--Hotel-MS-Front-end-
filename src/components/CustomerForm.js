import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "../api";

const CustomerForm = ({ onCustomerAdded }) => {
    const [form, setForm] = useState({ name: "", email: "", phone: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/customers", form)
            .then((response) => {
                onCustomerAdded(response.data);
                setForm({ name: "", email: "", phone: "" });
            })
            .catch((error) => console.error(error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({...prev, [name]: value }));
    };

    return ( <
        Box component = "form"
        onSubmit = { handleSubmit }
        sx = {
            { display: "flex", flexDirection: "column", gap: 2 } } >
        <
        TextField label = "Customer Name"
        name = "name"
        value = { form.name }
        onChange = { handleChange }
        required / >
        <
        TextField label = "Email"
        name = "email"
        value = { form.email }
        onChange = { handleChange }
        required / >
        <
        TextField label = "Phone"
        name = "phone"
        value = { form.phone }
        onChange = { handleChange }
        required / >
        <
        Button variant = "contained"
        type = "submit" >
        Add Customer <
        /Button> <
        /Box>
    );
};

export default CustomerForm;
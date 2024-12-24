import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "../api";

const ItemForm = ({ onItemAdded }) => {
    const [form, setForm] = useState({ name: "", price: "", quantity: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/items", form)
            .then((response) => {
                onItemAdded(response.data);
                setForm({ name: "", price: "", quantity: "" });
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
        TextField label = "Item Name"
        name = "name"
        value = { form.name }
        onChange = { handleChange }
        required / >
        <
        TextField label = "Price"
        name = "price"
        value = { form.price }
        onChange = { handleChange }
        required / >
        <
        TextField label = "Quantity"
        name = "quantity"
        value = { form.quantity }
        onChange = { handleChange }
        required / >
        <
        Button variant = "contained"
        type = "submit" >
        Add Item <
        /Button> <
        /Box>
    );
};

export default ItemForm;
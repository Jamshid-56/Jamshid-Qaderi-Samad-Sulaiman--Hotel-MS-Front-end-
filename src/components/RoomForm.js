import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axios from "../api";

const RoomForm = ({ onRoomAdded }) => {
    const [form, setForm] = useState({ number: "", type: "", price: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/rooms", {...form, status: "available" })
            .then((response) => {
                onRoomAdded(response.data);
                setForm({ number: "", type: "", price: "" });
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
            { display: "flex", flexDirection: "column", gap: 2 }
        } >
        <
        TextField label = "Room Number"
        name = "number"
        value = { form.number }
        onChange = { handleChange }
        required / >
        <
        TextField label = "Type"
        name = "type"
        value = { form.type }
        onChange = { handleChange }
        required / >
        <
        TextField label = "Price"
        name = "price"
        value = { form.price }
        onChange = { handleChange }
        required / >
        <
        Button variant = "contained"
        type = "submit" > Add Room < /Button> < /
        Box >
    );
};

export default RoomForm;
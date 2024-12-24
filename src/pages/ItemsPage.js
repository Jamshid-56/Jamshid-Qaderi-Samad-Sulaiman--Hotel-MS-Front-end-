import React, { useState } from "react";
import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";
import { Container, Typography } from "@mui/material";

const ItemsPage = () => {
    const [refresh, setRefresh] = useState(false);

    const handleItemAdded = () => {
        setRefresh(!refresh);
    };

    return ( <
        Container >
        <
        Typography variant = "h4"
        gutterBottom >
        Manage Items <
        /Typography> <
        ItemForm onItemAdded = { handleItemAdded }
        /> <
        ItemList key = { refresh }
        /> <
        /Container>
    );
};

export default ItemsPage;
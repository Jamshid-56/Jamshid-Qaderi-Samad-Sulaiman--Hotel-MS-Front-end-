import React, { useState } from "react";
import RoomList from "../components/RoomList";
import RoomForm from "../components/RoomForm";
import { Container, Typography } from "@mui/material";

const RoomsPage = () => {
    const [refresh, setRefresh] = useState(false);

    const handleRoomAdded = () => {
        setRefresh(!refresh);
    };

    return ( <
        Container >
        <
        Typography variant = "h4"
        gutterBottom > Manage Rooms < /Typography> <
        RoomForm onRoomAdded = { handleRoomAdded }
        /> <
        RoomList key = { refresh }
        /> < /
        Container >
    );
};

export default RoomsPage;
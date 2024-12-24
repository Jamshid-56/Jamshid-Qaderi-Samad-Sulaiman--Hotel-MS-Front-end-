import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import api from "../api";


const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    // Fetch rooms from backend
    useEffect(() => {
        api.get("/rooms")
            .then((response) => setRooms(response.data)) // Populate state with data
            .catch((error) => console.error("Error fetching rooms:", error));
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
        TableCell > Room Number < /TableCell> <
        TableCell > Type < /TableCell> <
        TableCell > Price < /TableCell> <
        TableCell > Status < /TableCell> < /
        TableRow > <
        /TableHead> <
        TableBody > {
            rooms.map((room) => ( <
                TableRow key = { room.id } >
                <
                TableCell > { room.number } < /TableCell> <
                TableCell > { room.type } < /TableCell> <
                TableCell > { room.price } < /TableCell> <
                TableCell > { room.status } < /TableCell> < /
                TableRow >
            ))
        } <
        /TableBody> < /
        Table > <
        /TableContainer>
    );
};

export default RoomList; 
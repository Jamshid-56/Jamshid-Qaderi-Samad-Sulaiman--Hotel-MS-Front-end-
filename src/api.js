// src/api.js
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000", // Backend server URL
});

export default axiosInstance;
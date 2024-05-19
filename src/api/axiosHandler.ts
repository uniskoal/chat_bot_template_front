import axios, { AxiosInstance } from "axios";

const axiosHandler: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 0,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "*"
    },
});

export default axiosHandler
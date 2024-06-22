import axios, { AxiosInstance } from "axios";

const axiosHandler: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 0,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosHandler
import axios, { AxiosInstance } from "axios";

const axiosHandler: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 0,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosHandler
import axios, { AxiosInstance } from "axios";

const axiosHandler: AxiosInstance = axios.create({
    baseURL: 'https://d85f2f3c-ed02-49f1-9874-cceba75d7796.mock.pstmn.io',
    timeout: 0,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosHandler
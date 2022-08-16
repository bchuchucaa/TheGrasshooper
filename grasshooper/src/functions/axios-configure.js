import axios from 'axios';

const app = axios.create({
    baseURL: 'localhost:8080',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default app;

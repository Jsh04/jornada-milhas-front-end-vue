import axios from "axios";
import { store } from "@/store";

const HttpClient = axios.create({
    baseURL: "http://localhost:5045",
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': "*"
    }
});

HttpClient.interceptors.request.use(config => {
    const token: string = store.state.loginStateModule.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
}, (error) => {
    Promise.reject(error)
})

export default HttpClient;
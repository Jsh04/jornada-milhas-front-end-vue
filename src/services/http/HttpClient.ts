import axios from "axios";
import { store } from "@/store";

const isElasticSearch = true;
const urlApi: string = isElasticSearch ? 'http://localhost:5045' : "http://localhost:3000";

const HttpClient = axios.create({
    baseURL: urlApi,
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
import axios, { AxiosHeaders } from "axios"

const HttpClient = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': "*"
    }
});

export default HttpClient;
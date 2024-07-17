import axios from "axios";

const urlApi = process.env.VUE_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: urlApi,
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': "*"
    }
});

axiosInstance.interceptors.request.use(config => {
    const token: string | null = localStorage.getItem('token')
    if (token) 
        config.headers.Authorization = `Bearer ${token}`
    
    return config;
}, (error) => {
    Promise.reject(error)
})

export default axiosInstance;
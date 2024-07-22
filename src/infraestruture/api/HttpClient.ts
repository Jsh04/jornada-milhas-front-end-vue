import axios, { AxiosInstance } from "axios";
import { singleton } from "tsyringe";

const urlApi = process.env.VUE_APP_API_URL;

@singleton()
class AxiosClient{

    private instanceAxios: AxiosInstance

    constructor(){
        this.instanceAxios = this.createInstanceAxios();
        this.configTokenIntecept();
    }

    getInstance(): AxiosInstance {
        return this.instanceAxios;
    }

    private createInstanceAxios(): AxiosInstance{
        return axios.create({
            baseURL: urlApi,
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': "*"
            }
        });
    }

    private configTokenIntecept(): void{
        this.instanceAxios.interceptors.request.use(config => {
            const token: string | null = localStorage.getItem('token')
            if (token) 
                config.headers.Authorization = `Bearer ${token}`
            return config;
        }, (error) => {
            Promise.reject(error)
        })
    }

}

export default AxiosClient;
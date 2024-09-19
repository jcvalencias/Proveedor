import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_UTL
})

api.interceptors.request.use(
    (config) => {
        const toke = localStorage.getItem(ACCESS_TOKEN);
        if (toke) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api
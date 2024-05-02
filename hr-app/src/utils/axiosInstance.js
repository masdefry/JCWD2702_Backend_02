import axios from 'axios';
import { getCookie } from './cookiesHelper';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5001'
})

axiosInstance.interceptors.request.use(
    async request => {
        const cookie = await getCookie()

        if(cookie){
            request.headers['accesstoken'] = cookie.value
        }

        return request
    }, 
    error => {
        console.log('>>>ERROR')
        console.log(error)
    } 
)

export {axiosInstance}
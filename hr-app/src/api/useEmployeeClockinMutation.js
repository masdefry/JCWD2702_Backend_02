import { useMutation } from '@tanstack/react-query';
import {axiosInstance} from '../utils/axiosInstance';
import { getCookie } from '../utils/cookiesHelper';

export const useEmployeeClockinMutation = ({onSuccess, onError}) => {
    const {mutate} = useMutation({
        mutationFn: async() => {
            return await axiosInstance.post('/employee/clockin')
        }, 
        onSuccess, 
        onError
    })

    return {
        mutate
    }
}
import { useMutation } from '@tanstack/react-query';
import {axiosInstance} from '../utils/axiosInstance';

export const useEmployeeClockoutMutation = ({onSuccess, onError}) => {
    const {mutate} = useMutation({
        mutationFn: async() => {
            return await axiosInstance.put('/employee/clockout/19', {})
        }, 
        onSuccess, 
        onError
    })

    return {
        mutate
    }
}
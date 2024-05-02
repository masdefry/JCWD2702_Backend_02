import {useMutation} from '@tanstack/react-query';
import {axiosInstance} from '../utils/axiosInstance';

export const useCreateEmployeeProfileMutation = ({onSuccess, onError}) => {
    const {mutate} = useMutation({
        mutationFn: async(fd) => {
       
            return await axiosInstance.post('/employee/profile', fd)
        }, 
        onSuccess, 
        onError 
    })

    return {
        mutate
    }
}
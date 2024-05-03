'use client';
import { useMutation } from '@tanstack/react-query';
export const useVerificationEmployeeMutation = ({onSuccess, onError}) => {
    const {mutate} = useMutation({
        mutationFn: async(token) => {
            axiosInstance.post('...', {}, {
                headers: {
                    'accesstoken': token
                }
            })
        },
        onSuccess, 
        onError
    })

    return {
        mutate
    }
}
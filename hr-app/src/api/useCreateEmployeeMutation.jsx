import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useCreateEmployeeMutation = ({onSuccess, onError}) => {
    const {mutate} = useMutation({
        mutationFn: async({email, fullname, password, positionId, shiftId, address}) => {
            return await axios.post('http://localhost:5001/hr/employee', {
                email, 
                fullname, 
                password, 
                positionId, 
                shiftId, 
                address
            })
        }, 
        onSuccess, 
        onError
    })

    return{
        mutate
    }
}
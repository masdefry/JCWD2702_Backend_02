import { useCreateEmployeeMutation } from './../../api/useCreateEmployeeMutation';

export const useCreateEmployee = () => {
    const {mutate: mutationCreateEmployee} = useCreateEmployeeMutation({
        onSuccess: (res) => {
            console.log(res)
        }, 
        onError: (err) => {
            console.log(err)
        }
    })

    return {
        mutationCreateEmployee
    }
}
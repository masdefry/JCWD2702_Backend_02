import { useVerificationEmployeeMutation } from "../api/useVerificationEmployeeMutation"
import {useEffect} from 'react';
export const useVerificationEmployee = () => {
    const {mutate: mutationVerificationEmployee} = useVerificationEmployeeMutation({
        onSuccess: (res) => {
            console.log(res)
        },
        onError: (err) => {
            console.log(err)
        }
    })

    useEffect(() => {
        console.log('USEEFFECT TRIGGERED')
        mutationVerificationEmployee()
    }, [])
}
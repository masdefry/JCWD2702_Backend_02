import { useCreateEmployeeProfileMutation } from "../../api/useCreateEmployeeProfileMutation"

export const useCreateEmployeeProfile = () => {
    console.log('Hooks')
    const {mutate: mutationCreateEmployeeProfile} = useCreateEmployeeProfileMutation({
        onSuccess: () => {
            alert('Success')
        }, 
        onError: () => {
            alert('Error')
        }
    })
    
    return {
        mutationCreateEmployeeProfile
    }
}
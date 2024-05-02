import { useEmployeeClockoutMutation } from './../../api/useEmployeeClockoutMutation';

export const useEmployeeClockin = () => {
    const {mutate: mutationEmployeeClockout} = useEmployeeClockoutMutation({
        onSuccess: (res) => {
            console.log(res)
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return {
        mutationEmployeeClockout
    }
}
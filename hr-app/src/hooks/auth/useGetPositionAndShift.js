import { useGetPositionAndShiftQuery } from "../../api/useGetPositionAndShiftQuery"

export const useGetPositionAndShift = () => {
    const {positionQuery, shiftQuery} = useGetPositionAndShiftQuery()

    return {
        dataPosition: positionQuery?.data?.data?.data, 
        dataShift: shiftQuery?.data?.data?.data
    }
}
import {useQueries} from '@tanstack/react-query';
import axios from 'axios';

export const useGetPositionAndShiftQuery = () => {
    const [positionQuery, shiftQuery] = useQueries(
        {
            queries: [
                {
                    queryKey: ['position'],
                    queryFn: async() => {
                        return await axios.get('http://localhost:5001/employee/position')
                    }
                },
                {
                    queryKey: ['shift'],
                    queryFn: async() => {
                        return await axios.get('http://localhost:5001/employee/shift')
                    }
                }  
            ]
        }
    )
    
    return {
        positionQuery,
        shiftQuery
    }
}
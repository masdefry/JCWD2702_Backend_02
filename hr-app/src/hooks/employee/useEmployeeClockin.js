'use client';
import { useEmployeeClockinMutation } from "../../api/useEmployeeClockinMutation"
import {useState} from 'react';

export const useEmployeeClockin = () => {
    const [attendanceLog, setAttendanceLog] = useState(null)

    const {mutate: mutationEmployeeClockin} = useEmployeeClockinMutation({
        onSuccess: (res) => {
            setAttendanceLog(res.data.data)
        },
        onError: (err) => {
            console.log(err)
        }
    })

    return {
        mutationEmployeeClockin, 
        attendanceLog
    }
}
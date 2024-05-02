'use client';
import { format } from 'date-fns';
import { useEmployeeClockin } from './../../hooks/employee/useEmployeeClockin';

export default function AttendancePage(){
    const currentDate = new Date();
    const formattedTime = format(currentDate, 'h:mm a');
    const formattedDate = format(currentDate, 'MMMM dd, yyyy')
    const {mutationEmployeeClockin, attendanceLog} = useEmployeeClockin()
    console.log(attendanceLog)
    return(
        <div className='bg-indigo-500 h-[100vh]'>
            <div className='flex flex-col justify-center items-center gap-3 py-3 text-white'>
                <h1 className='text-xl font-bold'>
                    Live Attendance
                </h1>
                <div className='text-center'>
                    <h1 className='text-5xl'>
                        {formattedTime}
                    </h1>
                    <h1 className='text-lg'>
                        {formattedDate}
                    </h1>
                </div>
            </div>
            <div className='py-3 px-5'>
                <div className='bg-gray-100 rounded-lg px-5 py-5 flex flex-col gap-3'>
                    <div className='flex flex-col items-center'>
                        <h1 className='text-gray-500'>
                            Shift-01
                        </h1>
                        <h1 className='text-3xl font-bold'>
                            09:00 - 18:00
                        </h1>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <button onClick={mutationEmployeeClockin} className='bg-indigo-500 text-white rounded-lg w-full py-3'>
                            Clock-In 
                        </button>
                        <button className='bg-indigo-500 text-white rounded-lg w-full py-3'>
                            Clock-Out
                        </button>
                    </div>
                    {
                        attendanceLog?
                            <div className='py-5'>
                                <div className='flex justify-between items-center border-b-2'>
                                    <h1 className='text-lg font-bold text-gray-500'>
                                        Clock-In 
                                    </h1>
                                    <h1 className='text-lg text-gray-500'>
                                        {attendanceLog?.clockin}
                                    </h1>
                                </div>
                                <div className='flex justify-between items-center border-b-2'>
                                    <h1 className='text-lg font-bold text-gray-500'>
                                        Clock-Out 
                                    </h1>
                                    <h1 className='text-lg text-gray-500'>
                                        {attendanceLog?.clockout}
                                    </h1>
                                </div>
                            </div>
                        :
                            'OPSIE!'
                    }
                </div>
            </div>
        </div>
    )
}
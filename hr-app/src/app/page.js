'use client';
import { BsFillClockFill } from "react-icons/bs";
import { RiFileList3Fill } from "react-icons/ri";
import { BsCalendarWeekFill, BsFillPersonFill } from "react-icons/bs";
import { FaVirusCovid } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Image from 'next/image';

export default function Home() {
  const stateUser = useSelector((state) => state.user)
  console.log(stateUser)
  return (
    <>
      <div
        className='bg-indigo-500 px-10 rounded-es-lg rounded-ee-lg'
      >
        <div className='py-5 flex justify-between'>
          <div>
            <h1 className='text-xl text-white'>
              Welcome, 
            </h1>
            <h1 className='text-xl text-white font-bold'>
            {stateUser.fullname? stateUser.fullname : 'User'}
            </h1>
          </div>
          <div>
            <div className='w-[70px] h-[70px] bg-indigo-600 rounded-full text-white text-sm flex justify-center items-center'>
              {stateUser.imageUrl? 
                <Image 
                  src={`http://localhost:5001/${stateUser.imageUrl}`}
                  width={100}
                  height={100}
                  alt='Image Profile'  
                />
              : 
                'Image'
              }
            </div>
          </div>
        </div>
        <div className='pb-5'>
          <div className='grid grid-cols-12 gap-3 bg-gray-100 rounded-lg py-5'>
            <div className='col-span-4 flex flex-col justify-center items-center'>
              <BsFillClockFill className='text-xl text-yellow-500' />
              <h1 className='font-bold text-black'>
                Live Attendance
              </h1> 
            </div>
            <div className='col-span-4 flex flex-col justify-center items-center'>
              <RiFileList3Fill className='text-xl text-green-500' />
              <h1 className='font-bold text-black'>
                Reimbursement
              </h1> 
            </div>
            <div className='col-span-4 flex flex-col justify-center items-center'>
              <BsCalendarWeekFill className='text-xl text-red-500' />
              <h1 className='font-bold text-black'>
                Deduction Log
              </h1> 
            </div>
          </div>
        </div>
      </div>
      <div className='px-10 py-5'>
        <div className='bg-indigo-400 px-10 py-10 rounded-lg mt-0 mb-5 flex justify-between items-center'>
          <h1 className='text-xl text-white font-bold'>
            Monitoring Gejala Covid
          </h1>
          <FaVirusCovid className='text-5xl text-indigo-500' />
        </div>
        <h1 className='text-xl font-bold'>
          Announcements
        </h1>
        <div className='flex flex-col items-between gap-5'>
          <div className='py-5 border-b-2 flex justify-between'>
            <h1>
              Info Cuti Lebaran Th. 2024
            </h1>
            <h1 className='text-gray-300'>
              29 April 2024
            </h1>
          </div>
          <div className='py-5 border-b-2 flex justify-between'>
            <h1>
              Ketentuan Clock-in & Clock-out
            </h1>
            <h1 className='text-gray-300'>
              29 April 2024
            </h1>
          </div>
          <div className='py-5 border-b-2 flex justify-between'>
            <h1>
              Syarat Pengajuan Reimburse
            </h1>
            <h1 className='text-gray-300'>
              29 April 2024
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

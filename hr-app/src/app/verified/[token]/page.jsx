'use client'

import { useVerificationEmployee } from './../../../hooks/useVerificationEmployee';

export default function VerifiedPage({params}){

    useVerificationEmployee()

    return(
        <div className='py-10'>
            <h1 className='text-5xl font-bold text-indigo-500 text-center'>
                Welcome!
            </h1>
            <p className='text-center text-xl'>
                New Employee
            </p>
            <p className='text-center py-10'>
                You already activate your account. 
                You can completing your profile data by
                clicked button below:
            </p>
            <button className='btn bg-indigo-500 text-white w-full'>
                My Profile
            </button>
        </div>
    )
}
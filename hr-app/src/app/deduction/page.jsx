export default function DeductionPage(){
    return(
        <>
            <div
                className='bg-indigo-500 px-10 rounded-es-lg rounded-ee-lg'
            >
                <div className='py-5 flex justify-between'>
                    <div>
                        <h1 className='text-xl text-white font-bold'>
                            Muhammad Defryan Tridya Isfandy
                        </h1>
                        <h1 className='text-xl text-white'>
                            Lecturer (Rp. 8.000.000, 00.-)
                        </h1>
                    </div>
                    <div>
                        <div className='w-[70px] h-[70px] bg-indigo-600 rounded-full text-white text-sm flex justify-center items-center'>
                        Image
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 px-10 py-5'>
                <div>
                    <h1 className='text-xl font-bold'>
                        Deduction Log
                    </h1>
                    <div className='w-full'>
                        <h1 className='text-sm text-gray-500'>
                            29 April 2024
                        </h1>
                        <div className='flex justify-between bg-gray-100 rounded-lg px-5 py-5'>
                            <h1 className='text-xl text-gray-500'>
                                09:30 - 18:00
                            </h1>
                            <h1 className='bg-red-500 text-white px-3 py-1 rounded-md'>
                                - Rp. 50.000, 00.-
                            </h1>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-sm text-gray-500'>
                            29 April 2024
                        </h1>
                        <div className='flex justify-between bg-gray-100 rounded-lg px-5 py-5'>
                            <h1 className='text-xl text-gray-500'>
                                09:30 - 18:00
                            </h1>
                            <h1 className='bg-red-500 text-white px-3 py-1 rounded-md'>
                                - Rp. 50.000, 00.-
                            </h1>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h1 className='text-sm text-gray-500'>
                            29 April 2024
                        </h1>
                        <div className='flex justify-between bg-gray-100 rounded-lg px-5 py-5'>
                            <h1 className='text-xl text-gray-500'>
                                09:30 - 18:00
                            </h1>
                            <h1 className='bg-red-500 text-white px-3 py-1 rounded-md'>
                                - Rp. 50.000, 00.-
                            </h1>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <div className='flex justify-between bg-indigo-500 rounded-lg px-5 py-5'>
                        <h1 className='text-xl text-white'>
                            Total Deduction
                        </h1>
                        <h1 className='font-bold text-white'>
                            Rp. 50.000, 00.-
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}
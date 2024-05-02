import { AiFillHome } from "react-icons/ai";
import { BiSolidContact, BiSolidMessageDetail  } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
export default function BottomNavigator(){
    return(
        <>
            <div className='flex justify-between items-center px-10 fixed bottom-0 w-[500px] h-[60px] bg-gray-200 rounded-ss-lg rounded-se-lg'>
                <div className='flex flex-col items-center'>
                    <AiFillHome className='text-gray-400 text-xl' />
                    <h1 className='text-gray-400'>
                        Home
                    </h1>
                </div>
                <div className='flex flex-col items-center'>
                    <BiSolidContact  className='text-gray-400 text-xl' />
                    <h1 className='text-gray-400'>
                        Contact
                    </h1>
                </div>
                <div className='flex flex-col items-center'>
                    <BiSolidMessageDetail   className='text-gray-400 text-xl' />
                    <h1 className='text-gray-400'>
                        Message
                    </h1>
                </div>
                <div className='flex flex-col items-center'>
                    <IoPerson    className='text-gray-400 text-xl' />
                    <h1 className='text-gray-400'>
                        Profile
                    </h1>
                </div>
            </div>
        </>
    )
}
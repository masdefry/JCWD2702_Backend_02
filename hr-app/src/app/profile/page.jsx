'use client';
import { Formik, Form, Field } from 'formik';
import {useState} from 'react';
import { useCreateEmployeeProfile } from './../../hooks/employee/useCreateEmployeeProfile';

export default function LoginPage(){
    const [selectedFiles, setSelectedFiles] = useState([])
    const {mutationCreateEmployeeProfile} = useCreateEmployeeProfile()

    const onSetFiles = (event) => {
        try{
            const acceptedFormat = ['jpg', 'jpeg', 'webp', 'png']
            const files = [...event.target.files]
            
            files.forEach(file => {
              if(!acceptedFormat.includes(file.name.split('.')[file.name.split('.').length-1])){
                throw {message: `${file.name} Format Not Acceptable`}
              }
              if(file.size > 1000000000000000){
                throw {message: `${file.name} is too Large! Maximum Filesize is 1Kb`}
              }  
            })

            if(files.length > 3) throw {message: `Selected File More Than 3`}

            setSelectedFiles(files) // Array of Object
        }catch(error){
            alert(error.message)
        }
    }

    return(
        <>
            <Formik
                initialValues={{
                    birthDate: '', 
                    address: ''
                }}
                onSubmit={(values) => {
                    const fd = new FormData() // Empty
                    fd.append('bebas', JSON.stringify({birthDate: values.birthDate, address: values.address}))
                    selectedFiles.forEach(file => {
                        fd.append('images', file)
                    })
        
                    mutationCreateEmployeeProfile(fd)
                }}
            >
                <Form>
                    <div className='flex flex-col items-center px-5 py-10 gap-3'>
                        <div className='w-full'>
                            <label className='form-control w-full'>
                                <div className='label'>
                                    <span className='label-text'>Your Birthdate</span>
                                </div>
                                <Field type='text' name='birthDate' placeholder='Type birthDate' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className='form-control w-full'>
                                <div className='label'>
                                    <span className='label-text'>Your Address</span>
                                </div>
                                <Field type='text' name='address' placeholder='Type Address' className='input input-bordered w-full' />
                            </label>
                        </div>
                        <div className='w-full'>
                            <label className='form-control w-full'>
                                <div className='label'>
                                    <span className='label-text'>Select Images Profile</span>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange = {(event) => onSetFiles(event)}
                                    placeholder="Enter Product Stock" 
                                    className="input input-bordered rounded-md w-full px-2 py-2" 
                                />
                            </label>
                        </div>
                        <button className='btn bg-indigo-500 text-white w-full'>
                            Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </>
    )
}
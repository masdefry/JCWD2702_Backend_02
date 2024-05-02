'use client';
import { Formik, Form, Field } from 'formik';

export default function LoginPage(){
    return(
        <>
                <Formik
                    initialValues={{
                        birthDate: '', 
                        address: ''
                    }}
                    onSubmit={(values) => {
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
'use client';
import { Formik, Form, Field } from 'formik';
import { useAuthLogin } from './../../../hooks/auth/useAuthLogin';

export default function LoginPage(){

    const {mutationAuth} = useAuthLogin()

    return(
        <>
                <Formik
                    initialValues={{
                        email: '', 
                        password: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        mutationAuth({
                            email: values.email, 
                            password: values.password
                        })
                    }}
                >
                    <Form>
                        <div className='flex flex-col items-center px-5 py-10 gap-3'>
                            <div className='w-full'>
                                <label className='form-control w-full'>
                                    <div className='label'>
                                        <span className='label-text'>Email Account</span>
                                    </div>
                                    <Field type='text' name='email' placeholder='Type Email' className='input input-bordered w-full' />
                                </label>
                            </div>
                            <div className='w-full'>
                                <label className='form-control w-full'>
                                    <div className='label'>
                                        <span className='label-text'>Password Account</span>
                                    </div>
                                    <Field type='text' name='password' placeholder='Type Password' className='input input-bordered w-full' />
                                </label>
                            </div>
                            <button className='btn bg-indigo-500 text-white w-full'>
                                Signin
                            </button>
                        </div>
                    </Form>
                </Formik>
        </>
    )
}
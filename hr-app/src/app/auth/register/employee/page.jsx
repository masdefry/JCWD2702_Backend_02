'use client';
import { Formik, Form, Field } from 'formik';
import { useCreateEmployee } from '../../../../hooks/auth/useCreateEmployee';
import { useGetPositionAndShift } from '../../../../hooks/auth/useGetPositionAndShift';

export default function RegisterEmployeePage(){

    const {mutationCreateEmployee} = useCreateEmployee()
    const {dataPosition, dataShift} =  useGetPositionAndShift()
    console.log(dataPosition)
    console.log(dataShift)
    // console.log(dataShift)
    if(dataPosition === undefined || dataShift === undefined) return <div>Loading...</div>

    return(
        <>
                <Formik
                    initialValues={{
                        email: '', 
                        fullname: '',
                        password: '', 
                        address: '', 
                        positionId: null, 
                        shiftId: null
                    }}

                    onSubmit={(values) => {
                        console.log('onSubmit')
                        mutationCreateEmployee({
                            email: values.email, 
                            fullname: values.fullname, 
                            password: values.password, 
                            positionId: parseInt(values.positionId), 
                            shiftId: parseInt(values.shiftId), 
                            address: values.address
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
                                        <span className='label-text'>Employee Name</span>
                                    </div>
                                    <Field type='text' name='fullname' placeholder='Type Fullname' className='input input-bordered w-full' />
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
                            <div className='w-full'>
                                <label className='form-control w-full'>
                                    <div className='label'>
                                        <span className='label-text'>Employee Address</span>
                                    </div>
                                    <Field type='text' name='address' placeholder='Type Address' className='input input-bordered w-full' />
                                </label>
                            </div>
                            <div className='w-full'>
                                <label className='form-control w-full'>
                                    <div className='label'>
                                        <span className='label-text'>Employee Position</span>
                                    </div>
                                    <Field component='select' id='positionId' name='positionId' className='select select-bordered w-full'>
                                        {
                                            dataPosition?.map((position, index) => {
                                                return(
                                                    <option value={position.id} key={index}>{position.name}</option>
                                                )
                                            })
                                        }
                                    </Field>
                                </label>
                            </div>
                            <div className='w-full py-30 bg-indigo-100'>
                                <label className='form-control w-full'>
                                    <div className='label'>
                                        <span className='label-text'>Employee Shift</span>
                                    </div>
                                    <Field component='select' id='shiftId' name='shiftId' className='select select-bordered w-full'>
                                        {
                                            dataShift?.map((shift, index) => {
                                                return(
                                                    <option key={index} value={shift.id}>{shift.start}-{shift.end}</option> 
                                                )
                                            })
                                        }
                                    </Field>
                                </label>
                            </div>
                            <button className='btn bg-indigo-500 text-white w-full'>
                                Create Employee
                            </button>
                        </div>
                    </Form>
                </Formik>
        </>
    )
}
import { NextFunction, Request, Response } from 'express';

import { 
    createAttendanceClockin, 
    createAttendanceClockout, 
    createLeaveRequest, 
    createProfileAndImagesProfile, 
    findPosition, 
    findShift, 
    updateProfileAndImagesProfile
} from '../services/EmployeeService';

import { IReqAccessToken } from '../helpers/Token';
import { DeletedUploadedFiles } from '../helpers/DeletedUploadedFiles';

export const clockin = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
        const reqToken = req as IReqAccessToken
        const {uid} = reqToken.payload
        
        const {createdAttendance} = await createAttendanceClockin({uid})
        
        res.status(201).send({
            error: false,
            message: 'Clockin Success!', 
            data: createdAttendance
        })
   } catch (error: any) {
        next(error)
   }
}

export const clockout = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {attendanceId} = req.params
        const {employeeid} = req.headers

        await createAttendanceClockout({attendanceId: parseInt(attendanceId), employeeid})

        res.status(201).send({
            error: false, 
            message: 'Clockout Success!',
            data: null
        })
    } catch (error) {
        next(error)
    }
}

export const leaveRequest = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {startDate, endDate} = req.body 
        const {employeeid} = req.headers 

        await createLeaveRequest({startDate, endDate, employeeid})

        res.status(201).send({
            error: false, 
            message: 'Leave Request Success!',
            data: null
        })
    } catch (error) {
        next(error)
    }
}

export const employeePosition = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const findEmployeePosition = await findPosition()

        res.status(200).send({
            error: false, 
            message: 'Get Employee Position Success!', 
            data: findEmployeePosition
        })
    } catch (error) {
        next(error)
    }
}

export const employeeShift = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const findEmployeeShift = await findShift()

        res.status(200).send({
            error: false, 
            message: 'Get Employee Position Success!', 
            data: findEmployeeShift
        })
    } catch (error) {
        next(error)
    }
}

export const createProfile = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const data = JSON.parse(req.body.bebas) // {address, birthdate}
        const reqPayload = req as IReqAccessToken
        const {uid} = reqPayload.payload

        if(req.files){
            const uploadedFiles = Array.isArray(req.files) ? req.files : req.files['images'];

            await createProfileAndImagesProfile(data, uploadedFiles, uid)
        }

        res.status(201).send({
            error: false, 
            message: 'Create Profile Success', 
            data: null
        })
    } catch (error) {
        DeletedUploadedFiles(req.files)
        
        next(error)
    }
}

export const updateProfile = async(req: Request, res: Response, next: NextFunction) => {
    try {
        // accesstoken, new data(address, birthDate, new image)
        const {payload} = req as IReqAccessToken
        const data = JSON.parse(req.body.bebas)
        let uploadedFiles
        if(req.files){
            uploadedFiles = Array.isArray(req.files) ? req.files : req.files['images'];
        }

        const employeeImagesProfileToDelete = await updateProfileAndImagesProfile(data, uploadedFiles, payload.uid)
   
        DeletedUploadedFiles({images: employeeImagesProfileToDelete})

        res.status(201).send({
            error: false, 
            message: 'Update Profile Success!', 
            data: null
        })
    } catch (error) {
        next(error)
        console.log(error)
    }
}
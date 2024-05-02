import { NextFunction, Request, Response } from 'express';
import { updateLeaveRequest, createEmployee } from '../services/HRService';
import { HashPassword } from '../helpers/Hashing';

export const approvalLeaveRequest = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
    const {id} = req.params 

    await updateLeaveRequest({id: parseInt(id)})

    res.status(201).send({
        error: false, 
        message: 'Approval Leave Request Success!',
        data: null
    })
   } catch (error: any) {
    next(error)
   }
}

export const createEmployeeAccount = async(req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {email, fullname, password, positionId, shiftId, address} = req.body
        
        const hashedPassword = await HashPassword({password})
        
        await createEmployee({
            email, 
            fullname, 
            password: hashedPassword, 
            positionId, 
            shiftId, 
            address
        })

        res.status(201).send({
            error: false, 
            message: 'Create Employee Success!', 
            data: null
        })
    } catch (error: any) {
        next(error)
    }
}
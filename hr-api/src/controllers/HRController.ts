import { NextFunction, Request, Response } from 'express';
import { updateLeaveRequest, createEmployee } from '../services/HRService';
import { HashPassword } from '../helpers/Hashing';
import { TransporterMailer } from "../helpers/TransporterMailer";
import fs from 'fs';
import Handlebars from 'handlebars';
import { createToken } from '../helpers/Token';

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
        
        const createdEmployee = await createEmployee({
            email, 
            fullname, 
            password: hashedPassword, 
            positionId, 
            shiftId, 
            address
        })

        const token = createToken({uid: createdEmployee.uid})
        
        const verificationHTML = fs.readFileSync('src/public/template/Verification.html', 'utf-8')
        let verificationHTMLCompiled: any = await Handlebars.compile(verificationHTML)
        verificationHTMLCompiled = verificationHTMLCompiled({username: email, link: `http://localhost:3000/verified/${token}`})
        
        TransporterMailer.sendMail({
            from: 'HR-APP', 
            to: email, 
            subject: 'Activate Your Account', 
            html: verificationHTMLCompiled
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
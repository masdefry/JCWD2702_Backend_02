import { NextFunction, Request, Response } from "express";
import { findEmployeeByEmail } from "../services/AuthService";
import { ComparePassword } from "../helpers/Hashing";
import { createToken } from "../helpers/Token";
import { TransporterMailer } from "../helpers/TransporterMailer";

export const login = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email, password} = req.body 

        const findEmployeeByEmailResult = await findEmployeeByEmail({email})
        
        const comparePasswordResult = await ComparePassword({
            passwordFromClient: password, 
            passwordFromDatabase: findEmployeeByEmailResult.password
        })
    
        if(!comparePasswordResult) throw new Error('Password Doesnt Match')

        const accessToken = await createToken({uid: findEmployeeByEmailResult.uid})
        
        res.status(200).send({
            error: false, 
            message: 'Login Success', 
            data: {
                accessToken, 
                fullname: findEmployeeByEmailResult.fullname, 
                imageUrl: findEmployeeByEmailResult.employeeprofile?.employeeimagesprofile[0].url
            }
        })
    } catch (error) {
        next(error)
    }
}

export const sendMail = async(req: Request, res: Response, next: NextFunction) => {
    try {
        await TransporterMailer.sendMail({
            from: 'HR-APP', 
            to: 'ditonatael@gmail.com', 
            subject: 'Welcome', 
            html: '<h1>Welcome</h1>'
        })
    } catch (error) {
        next(error)
    }
}



/*
    HR Create Employee
    v
    Ketika HR create akun employee, status akun masih belum aktif
    v
    Employee harus melakukan email verification yang terkirim saat HR create akun
    v
    Ketika klik link email verification, status akun akan ter-aktivasi
*/
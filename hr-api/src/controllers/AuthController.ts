import { NextFunction, Request, Response } from "express";
import { findEmployeeByEmail } from "../services/AuthService";
import { ComparePassword } from "../helpers/Hashing";
import { createToken } from "../helpers/Token";

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
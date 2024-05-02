import { prisma } from "../../connection"
import { isBefore, isWeekend, addDays, format } from "date-fns"
import { ICreateEmployeeParams } from "./types"

export const updateLeaveRequest = async({id}: {id: number}) => {
    return await prisma.$transaction(async (tx) => {
        const updateLeaveRequest = await tx.leaveRequest.update({
            data: {
                status: 'APPROVED'
            }, 
            where: {
                id
            }
        })
    
        const findEmployee = await tx.employee.findUnique({
            where: {
                uid: updateLeaveRequest.employeeId
            }, 
            include: {
                shift: true 
            }
        })
      
        if(!findEmployee) throw new Error('Employee Not Found!')
        
        let startLeaveDate = updateLeaveRequest.stardDate
        const endLeaveDate = updateLeaveRequest.endDate
    
        const dates = [
            {
                date: new Date(endLeaveDate), 
                clockin: new Date(findEmployee?.shift.start), 
                clockout: new Date(findEmployee?.shift.start), 
                employeeId: updateLeaveRequest.employeeId, 
                deduction: 0
            }
        ]
    
        while(isBefore(startLeaveDate, endLeaveDate)){
            if(!isWeekend(startLeaveDate)){
                dates.unshift({
                    date: new Date(startLeaveDate), 
                    clockin: new Date(findEmployee?.shift.start), 
                    clockout: new Date(findEmployee?.shift.start), 
                    employeeId: updateLeaveRequest.employeeId, 
                    deduction: 0
                })
            }
            
            startLeaveDate = addDays(startLeaveDate, 1)
        }
    
        await tx.attendance.createMany({
            data: [...dates]
        })
    
        await tx.employee.update({
            data: {
                leaveBalance: findEmployee?.leaveBalance - dates.length
            },
            where: {
                uid: updateLeaveRequest.employeeId
            }
        })
    })
}

export const createEmployee = async({email, fullname, password, positionId, shiftId, address}: ICreateEmployeeParams) => {
    await prisma.employee.create({
        data: {
            email, fullname, password, positionId, shiftId, address
        }
    })
}
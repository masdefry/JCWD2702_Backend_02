import {prisma} from './../connection';
import {differenceInMinutes} from 'date-fns';

export const createAttendanceClockin = async({uid}: {uid: any}) => {
    const createdAttendance = await prisma.attendance.create({
        data: {
            date: new Date(), 
            clockin: new Date(), 
            deduction: 0, 
            employeeId: uid
        }
    })
    
    return {createdAttendance}
}

export const createAttendanceClockout = async({attendanceId, employeeid}: {attendanceId: number, employeeid: any}) => {
    const findAttendanceAndEmployee = await prisma.attendance.findUnique({
        where: {
            id: attendanceId, 
            employeeId: employeeid
        },
        include: {
            employee: {
                include: {
                    shift: true, 
                    position: true
                }
            }
        }
    })
    
    if(!findAttendanceAndEmployee) return null

    const attendanceUpdate = await prisma.attendance.update({
        data: {
            clockout: new Date()
        }, 
        where: {
            id: attendanceId, 
            employeeId: employeeid
        }
    })
    
    const differentInMinutesClockIn = differenceInMinutes(
        findAttendanceAndEmployee.clockin,
        findAttendanceAndEmployee.employee.shift.start, 
    )
    if(attendanceUpdate.clockout){
        const differentInMinutesClockOut = differenceInMinutes(
            attendanceUpdate.clockout, 
            findAttendanceAndEmployee.employee.shift.end
        )
        const totalMinutes = Math.floor((differentInMinutesClockIn + Math.abs(differentInMinutesClockOut)) / 30) 
        const deduction = totalMinutes * (findAttendanceAndEmployee.employee.position.salary * 0.001)
        
        await prisma.attendance.update({
            data: {
                deduction
            }, 
            where: {
                employeeId: employeeid, 
                id: attendanceId
            }
        })
    }
}

export const createLeaveRequest = async({
    startDate, 
    endDate, 
    employeeid
}: {startDate: any, endDate: any, employeeid: any}) => {
    await prisma.leaveRequest.create({
        data: {
            stardDate: new Date(startDate), 
            endDate: new Date(endDate), 
            employeeId: employeeid
        }
    })
}

export const findPosition = async() => {
   return await prisma.position.findMany()
}

export const findShift = async() => {
    return await prisma.shift.findMany()
}

export const createProfileAndImagesProfile = async(data: any, images: any, uid: any) => {
    return await prisma.$transaction(async (tx) => {
        const createdEmployeeProfile = await tx.employeeProfile.create({
            data: {
                birthDate: new Date(data.birthDate), 
                address: data.address, 
                employeeId: uid
            }
        })
    
        const imagesToCreate: any = []
        images.forEach((item: any) => {
            imagesToCreate.push({
                url: item.path, 
                employeeProfileId: createdEmployeeProfile.id 
            })
        })
        
        await tx.employeeImagesProfile.createMany({
            data: [...imagesToCreate]
        })
    })
}
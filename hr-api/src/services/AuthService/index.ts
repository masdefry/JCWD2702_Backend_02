import { prisma } from "../../connection"
import { IFindEmployeeByEmailParams } from "./types"

export const findEmployeeByEmail = async({email}: IFindEmployeeByEmailParams) => {
    const findEmployee = await prisma.employee.findFirst({
        where: {
            email
        }
    })

    if(!findEmployee) throw new Error('User Not Found!')

    return findEmployee
}

export const findEmployeeByUid = async({uid}: {uid: string}) => {
    return await prisma.employee.findUnique({
        where: {
            uid
        },
        include: {
            position: true
        }
    })
}
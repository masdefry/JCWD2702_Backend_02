const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const dataPosition = [
    {
        name: 'Manager', 
        salary: 25000000
    },
    {
        name: 'PM',
        salary: 17500000
    },
    {
        name: 'Programmer',
        salary: 15000000
    }, 
    {
        name: 'HR', 
        salary: 15000000
    }
]

const dataShift = [
    {
        start: '2024-04-22T09:00:00.000Z', 
        end: '2024-04-22T18:00:00.000Z'
    },
    {
        start: '2024-04-22T13:00:00.000Z', 
        end: '2024-04-22T22:00:00.000Z'
    }
]

const dataEmployee = [
    {
        email: 'ryan@gmail.com',
        fullname: 'Ryan Defryan',
        password: 'abc12345',
        positionId: 4, 
        shiftId: 1, 
        address: 'Malang'
    },
    {
        email: 'kevin@gmail.com',
        fullname: 'Kevin Alam',
        password: 'abc12345',
        positionId: 2, 
        shiftId: 1, 
        address: 'Malang'
    }
]

async function main(){
    for(let item of dataPosition){
        await prisma.position.create({
            data: item
        })
    }

    for(let item of dataShift){
        await prisma.shift.create({
            data: item
        })
    }

    for(let item of dataEmployee){
        await prisma.employee.create({
            data: item
        })
    }
}

main().catch(error => {
    console.log(error)
    process.exit(1)
}).finally(async() => {
    await prisma.$disconnect();
})
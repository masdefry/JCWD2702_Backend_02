import bcrypt from 'bcrypt';
const saltRounds = 10;

interface IHashPasswordParams{
    password: string
}

interface IComparePasswordParams{
    passwordFromClient: string, 
    passwordFromDatabase: string
}

export const HashPassword = async({password}: IHashPasswordParams) => {
    return await bcrypt.hash(password, saltRounds)
}

export const ComparePassword = async({passwordFromClient, passwordFromDatabase}: IComparePasswordParams) => {
    return await bcrypt.compare(passwordFromClient, passwordFromDatabase)
}
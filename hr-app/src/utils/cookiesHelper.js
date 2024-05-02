'use server';
import {cookies} from 'next/headers';

export const setCookie = (accesstoken) => {
    cookies().set('acctkn', accesstoken)    
}

export const getCookie = async() => {
    return await cookies().get('acctkn')
}
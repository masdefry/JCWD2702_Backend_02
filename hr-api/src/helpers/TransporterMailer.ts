import nodemailer from 'nodemailer'; // npm i nodemailer @types/nodemailer

export const TransporterMailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'masdefry20@gmail.com', // Email Sender
        pass: 'qvdiygtbydlxvjmy' // App Password
    },
    tls: {
        rejectUnauthorized: false
    }
})
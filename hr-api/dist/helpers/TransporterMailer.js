"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransporterMailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer")); // npm i nodemailer @types/nodemailer
exports.TransporterMailer = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'masdefry20@gmail.com', // Email Sender
        pass: 'qvdiygtbydlxvjmy' // App Password
    },
    tls: {
        rejectUnauthorized: false
    }
});

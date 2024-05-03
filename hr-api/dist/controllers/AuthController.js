"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = exports.login = void 0;
const AuthService_1 = require("../services/AuthService");
const Hashing_1 = require("../helpers/Hashing");
const Token_1 = require("../helpers/Token");
const TransporterMailer_1 = require("../helpers/TransporterMailer");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { email, password } = req.body;
        const findEmployeeByEmailResult = yield (0, AuthService_1.findEmployeeByEmail)({ email });
        const comparePasswordResult = yield (0, Hashing_1.ComparePassword)({
            passwordFromClient: password,
            passwordFromDatabase: findEmployeeByEmailResult.password
        });
        if (!comparePasswordResult)
            throw new Error('Password Doesnt Match');
        const accessToken = yield (0, Token_1.createToken)({ uid: findEmployeeByEmailResult.uid });
        res.status(200).send({
            error: false,
            message: 'Login Success',
            data: {
                accessToken,
                fullname: findEmployeeByEmailResult.fullname,
                imageUrl: (_a = findEmployeeByEmailResult.employeeprofile) === null || _a === void 0 ? void 0 : _a.employeeimagesprofile[0].url
            }
        });
    }
    catch (error) {
        next(error);
    }
});
exports.login = login;
const sendMail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield TransporterMailer_1.TransporterMailer.sendMail({
            from: 'HR-APP',
            to: 'ditonatael@gmail.com',
            subject: 'Welcome',
            html: '<h1>Welcome</h1>'
        });
    }
    catch (error) {
        next(error);
    }
});
exports.sendMail = sendMail;
/*
    HR Create Employee
    v
    Ketika HR create akun employee, status akun masih belum aktif
    v
    Employee harus melakukan email verification yang terkirim saat HR create akun
    v
    Ketika klik link email verification, status akun akan ter-aktivasi
*/ 

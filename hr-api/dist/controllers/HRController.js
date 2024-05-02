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
exports.createEmployeeAccount = exports.approvalLeaveRequest = void 0;
const HRService_1 = require("../services/HRService");
const Hashing_1 = require("../helpers/Hashing");
const approvalLeaveRequest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield (0, HRService_1.updateLeaveRequest)({ id: parseInt(id) });
        res.status(201).send({
            error: false,
            message: 'Approval Leave Request Success!',
            data: null
        });
    }
    catch (error) {
        next(error);
    }
});
exports.approvalLeaveRequest = approvalLeaveRequest;
const createEmployeeAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, fullname, password, positionId, shiftId, address } = req.body;
        const hashedPassword = yield (0, Hashing_1.HashPassword)({ password });
        yield (0, HRService_1.createEmployee)({
            email,
            fullname,
            password: hashedPassword,
            positionId,
            shiftId,
            address
        });
        res.status(201).send({
            error: false,
            message: 'Create Employee Success!',
            data: null
        });
    }
    catch (error) {
        next(error);
    }
});
exports.createEmployeeAccount = createEmployeeAccount;

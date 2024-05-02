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
exports.createProfile = exports.employeeShift = exports.employeePosition = exports.leaveRequest = exports.clockout = exports.clockin = void 0;
const EmployeeService_1 = require("../services/EmployeeService");
const DeletedUploadedFiles_1 = require("../helpers/DeletedUploadedFiles");
const clockin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reqToken = req;
        const { uid } = reqToken.payload;
        const { createdAttendance } = yield (0, EmployeeService_1.createAttendanceClockin)({ uid });
        res.status(201).send({
            error: false,
            message: 'Clockin Success!',
            data: createdAttendance
        });
    }
    catch (error) {
        next(error);
    }
});
exports.clockin = clockin;
const clockout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { attendanceId } = req.params;
        const { employeeid } = req.headers;
        yield (0, EmployeeService_1.createAttendanceClockout)({ attendanceId: parseInt(attendanceId), employeeid });
        res.status(201).send({
            error: false,
            message: 'Clockout Success!',
            data: null
        });
    }
    catch (error) {
        next(error);
    }
});
exports.clockout = clockout;
const leaveRequest = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { startDate, endDate } = req.body;
        const { employeeid } = req.headers;
        yield (0, EmployeeService_1.createLeaveRequest)({ startDate, endDate, employeeid });
        res.status(201).send({
            error: false,
            message: 'Leave Request Success!',
            data: null
        });
    }
    catch (error) {
        next(error);
    }
});
exports.leaveRequest = leaveRequest;
const employeePosition = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findEmployeePosition = yield (0, EmployeeService_1.findPosition)();
        res.status(200).send({
            error: false,
            message: 'Get Employee Position Success!',
            data: findEmployeePosition
        });
    }
    catch (error) {
        next(error);
    }
});
exports.employeePosition = employeePosition;
const employeeShift = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findEmployeeShift = yield (0, EmployeeService_1.findShift)();
        res.status(200).send({
            error: false,
            message: 'Get Employee Position Success!',
            data: findEmployeeShift
        });
    }
    catch (error) {
        next(error);
    }
});
exports.employeeShift = employeeShift;
const createProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = JSON.parse(req.body.bebas); // {address, birthdate}
        const reqToken = req;
        const { uid } = reqToken.payload;
        if (req.files) {
            const uploadedFiles = Array.isArray(req.files) ? req.files : req.files['images'];
            yield (0, EmployeeService_1.createProfileAndImagesProfile)(data, uploadedFiles, uid);
        }
        res.status(201).send({
            error: false,
            message: 'Create Profile Success',
            data: null
        });
    }
    catch (error) {
        (0, DeletedUploadedFiles_1.DeletedUploadedFiles)(req.files);
        next(error);
    }
});
exports.createProfile = createProfile;

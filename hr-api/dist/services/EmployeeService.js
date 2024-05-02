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
exports.createProfileAndImagesProfile = exports.findShift = exports.findPosition = exports.createLeaveRequest = exports.createAttendanceClockout = exports.createAttendanceClockin = void 0;
const connection_1 = require("./../connection");
const date_fns_1 = require("date-fns");
const createAttendanceClockin = ({ uid }) => __awaiter(void 0, void 0, void 0, function* () {
    const createdAttendance = yield connection_1.prisma.attendance.create({
        data: {
            date: new Date(),
            clockin: new Date(),
            deduction: 0,
            employeeId: uid
        }
    });
    return { createdAttendance };
});
exports.createAttendanceClockin = createAttendanceClockin;
const createAttendanceClockout = ({ attendanceId, employeeid }) => __awaiter(void 0, void 0, void 0, function* () {
    const findAttendanceAndEmployee = yield connection_1.prisma.attendance.findUnique({
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
    });
    if (!findAttendanceAndEmployee)
        return null;
    const attendanceUpdate = yield connection_1.prisma.attendance.update({
        data: {
            clockout: new Date()
        },
        where: {
            id: attendanceId,
            employeeId: employeeid
        }
    });
    const differentInMinutesClockIn = (0, date_fns_1.differenceInMinutes)(findAttendanceAndEmployee.clockin, findAttendanceAndEmployee.employee.shift.start);
    if (attendanceUpdate.clockout) {
        const differentInMinutesClockOut = (0, date_fns_1.differenceInMinutes)(attendanceUpdate.clockout, findAttendanceAndEmployee.employee.shift.end);
        const totalMinutes = Math.floor((differentInMinutesClockIn + Math.abs(differentInMinutesClockOut)) / 30);
        const deduction = totalMinutes * (findAttendanceAndEmployee.employee.position.salary * 0.001);
        yield connection_1.prisma.attendance.update({
            data: {
                deduction
            },
            where: {
                employeeId: employeeid,
                id: attendanceId
            }
        });
    }
});
exports.createAttendanceClockout = createAttendanceClockout;
const createLeaveRequest = ({ startDate, endDate, employeeid }) => __awaiter(void 0, void 0, void 0, function* () {
    yield connection_1.prisma.leaveRequest.create({
        data: {
            stardDate: new Date(startDate),
            endDate: new Date(endDate),
            employeeId: employeeid
        }
    });
});
exports.createLeaveRequest = createLeaveRequest;
const findPosition = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection_1.prisma.position.findMany();
});
exports.findPosition = findPosition;
const findShift = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection_1.prisma.shift.findMany();
});
exports.findShift = findShift;
const createProfileAndImagesProfile = (data, images, uid) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection_1.prisma.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const createdEmployeeProfile = yield tx.employeeProfile.create({
            data: {
                birthDate: new Date(data.birthDate),
                address: data.address,
                employeeId: uid
            }
        });
        const imagesToCreate = [];
        images.forEach((item) => {
            imagesToCreate.push({
                url: item.path,
                employeeProfileId: createdEmployeeProfile.id
            });
        });
        yield tx.employeeImagesProfile.createMany({
            data: [...imagesToCreate]
        });
    }));
});
exports.createProfileAndImagesProfile = createProfileAndImagesProfile;

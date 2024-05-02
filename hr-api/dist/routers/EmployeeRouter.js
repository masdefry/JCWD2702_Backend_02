"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Define Router
const router = (0, express_1.Router)();
// Import Controller
const EmployeeController_1 = require("../controllers/EmployeeController");
const Token_1 = require("../helpers/Token");
const Uploader_1 = require("../middleware/Uploader");
router.post('/clockin', Token_1.tokenVerify, EmployeeController_1.clockin);
router.put('/clockout/:attendanceId', Token_1.tokenVerify, EmployeeController_1.clockout);
router.post('/leave-request', Token_1.tokenVerify, EmployeeController_1.leaveRequest);
router.get('/position', EmployeeController_1.employeePosition);
router.get('/shift', EmployeeController_1.employeeShift);
router.post('/profile', Token_1.tokenVerify, Uploader_1.uploader, EmployeeController_1.createProfile);
exports.default = router;

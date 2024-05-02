"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Define Router
const router = (0, express_1.Router)();
// Import Controller
const HRController_1 = require("../controllers/HRController");
const HRValidator_1 = require("../middleware/HRValidator");
const HandleErrorExpressValidator_1 = require("../middleware/HandleErrorExpressValidator");
const Token_1 = require("../helpers/Token");
const RoleVerify_1 = require("../middleware/RoleVerify");
router.put('/approval/leave-request/:id', Token_1.tokenVerify, RoleVerify_1.roleVerifyHRAndManager, HRController_1.approvalLeaveRequest);
router.post('/employee', Token_1.tokenVerify, RoleVerify_1.roleVerifyHRAndManager, HRValidator_1.validatorCreateEmployee, HandleErrorExpressValidator_1.handleErrorExpressValidator, HRController_1.createEmployeeAccount);
exports.default = router;

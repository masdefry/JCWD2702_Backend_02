"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorCreateEmployee = void 0;
const express_validator_1 = require("express-validator");
exports.validatorCreateEmployee = [
    (0, express_validator_1.body)(['email', 'fullname', 'password', 'positionId', 'shiftId', 'address']).notEmpty().withMessage('Data Must Completed!'),
    (0, express_validator_1.body)('email').isString().isEmail().withMessage('Email Must Valid!'),
    (0, express_validator_1.body)('password').isString().isLength({ min: 5, max: 15 }).withMessage('Password Have Minimum Lengh 5 Characters and Maximum Length 15 Characters'),
    (0, express_validator_1.body)(['positionId', 'shiftId']).not().isString().withMessage('Position Id or Shift Id Type is Number'),
];

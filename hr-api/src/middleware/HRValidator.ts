import { body } from 'express-validator';

export const validatorCreateEmployee = [
    body(['email','fullname','password','positionId','shiftId','address']).notEmpty().withMessage('Data Must Completed!'),
    body('email').isString().isEmail().withMessage('Email Must Valid!'),
    body('password').isString().isLength({min: 5, max: 15}).withMessage('Password Have Minimum Lengh 5 Characters and Maximum Length 15 Characters'),
    body(['positionId','shiftId']).not().isString().withMessage('Position Id or Shift Id Type is Number'),
]
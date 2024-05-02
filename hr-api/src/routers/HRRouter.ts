import { Router } from 'express';

// Define Router
const router = Router()

// Import Controller
import {approvalLeaveRequest, createEmployeeAccount} from '../controllers/HRController';

// Import Middleware
import { exampleMiddleware } from '../middleware/example';
import { validatorCreateEmployee } from '../middleware/HRValidator';
import { handleErrorExpressValidator } from '../middleware/HandleErrorExpressValidator';
import { tokenVerify } from '../helpers/Token';
import { roleVerifyHRAndManager } from '../middleware/RoleVerify';

router.put('/approval/leave-request/:id', tokenVerify, roleVerifyHRAndManager, approvalLeaveRequest)
router.post('/employee', tokenVerify, roleVerifyHRAndManager, validatorCreateEmployee, handleErrorExpressValidator, createEmployeeAccount)

export default router
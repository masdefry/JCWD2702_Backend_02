import { Router } from 'express';

// Define Router
const router = Router()

// Import Controller
import {clockin, clockout, employeePosition, employeeShift, leaveRequest, createProfile, updateProfile} from '../controllers/EmployeeController';
import { tokenVerify } from '../helpers/Token';

import { uploader } from '../middleware/Uploader';

router.post('/clockin', tokenVerify, clockin)
router.put('/clockout/:attendanceId', tokenVerify, clockout)
router.post('/leave-request', tokenVerify, leaveRequest)
router.get('/position', employeePosition)
router.get('/shift', employeeShift)
router.post('/profile', tokenVerify, uploader, createProfile)
router.put('/profile', tokenVerify, uploader, updateProfile)

export default router
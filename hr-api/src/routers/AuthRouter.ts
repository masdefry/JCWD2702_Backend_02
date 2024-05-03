import { Router } from 'express';

// Define Router
const router = Router()

// Import Controller
import {login, sendMail} from '../controllers/AuthController';

router.post('/login', login)
router.post('/send-mail', sendMail)

export default router
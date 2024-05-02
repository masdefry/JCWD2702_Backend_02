import { Router } from 'express';

// Define Router
const router = Router()

// Import Controller
import {login} from '../controllers/AuthController';

router.post('/login', login)

export default router
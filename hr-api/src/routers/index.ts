import express, {Router} from 'express';

// Define Router
const router = Router()
router.use(express.json()) // Body Parser

router.use('*/image',express.static('src/public/image'))

// Import Admin Router
import EmployeeRouter from './EmployeeRouter';
import HRRouter from './HRRouter';
import AuthRouter from './AuthRouter';

router.use('/employee', EmployeeRouter)
router.use('/hr', HRRouter)
router.use('/auth', AuthRouter)

export default router

import { Router } from 'express';
import authController from '../controller/authController.js';




const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/user/all', authController.getLoginUser);
router.put('/user_update/:email', authController.updateUser);


export default router;


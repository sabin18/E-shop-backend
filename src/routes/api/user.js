import express from 'express';
import AdminController from '../../controllers/admin';
import AuthController from '../../controllers/auth/login'
import InPutValidation from '../../validation/inPutValidation'
const {
 GetAllusers
} = AdminController;

const { validateLogin } = InPutValidation;

const { Login } = AuthController;
const router = express.Router();
router.get('/users', GetAllusers);
router.post ('/login',validateLogin, Login);

export default router;

import express from 'express';
import AdminController from '../../controllers/admin';
import AuthController from '../../controllers/auth/login'
import InPutValidation from '../../validation/inPutValidation'
import admiRole from '../../middlewares/checkRole'
import checkToken from '../../middlewares/checkToken'
const {
 GetAllusers
} = AdminController;

const { validateLogin } = InPutValidation;

const { Login } = AuthController;
const router = express.Router();
router.get('/users', checkToken ,admiRole, GetAllusers);
router.post ('/login',validateLogin, Login);

export default router;

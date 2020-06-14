import express from 'express';
import AuthController from '../../controllers/auth/login'
import InPutValidation from '../../validation/inPutValidation'


const { validateLogin } = InPutValidation;

const { Login } = AuthController;
const router = express.Router();
router.post ('/login',validateLogin, Login);


export default router;

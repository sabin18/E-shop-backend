import express from 'express';
import RolesController from '../../controllers/roles/roles';
import AdminController from '../../controllers/admin/admin';
import checkToken from '../../middlewares/checkToken'
import adminRole from '../../middlewares/checkRole'
import InPutValidation from '../../validation/inPutValidation'


const { validateAddUser } = InPutValidation;

const {
    GetAllusers,AddUser
   } = AdminController;

const { GetRoles } = RolesController;
const router = express.Router();
router.get('/roles', checkToken ,GetRoles);
router.get('/users', checkToken ,adminRole,GetAllusers);
router.post('/users', checkToken ,validateAddUser,adminRole,AddUser);

export default router;

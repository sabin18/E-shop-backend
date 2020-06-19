import express from 'express';
import RolesController from '../../controllers/roles/roles';
import AdminController from '../../controllers/admin/admin';
import BusinessController from '../../controllers/business/business';
import checkToken from '../../middlewares/checkToken'
import adminRole from '../../middlewares/checkRole'
import InPutValidation from '../../validation/inPutValidation'


const { validateAddUser,validateCreateBusiness } = InPutValidation;

const {
    GetAllusers,AddUser
   } = AdminController;
   const {
    createBusiness
   } = BusinessController;

const { GetRoles } = RolesController;
const router = express.Router();
router.get('/roles', checkToken ,GetRoles);
router.get('/users', checkToken ,adminRole,GetAllusers);
router.post('/users', checkToken ,adminRole,validateAddUser,AddUser);
router.post('/business', checkToken ,adminRole,validateCreateBusiness,createBusiness);

export default router;

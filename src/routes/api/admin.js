import express from 'express';
import RolesController from '../../controllers/roles/roles';
import AdminController from '../../controllers/admin/admin';
import BusinessController from '../../controllers/business/business';
import PaymentController from '../../controllers/payments/payment'
import checkToken from '../../middlewares/checkToken'
import checkRole from '../../middlewares/checkRole'
import InPutValidation from '../../validation/inPutValidation'
import checkId from '../../helpers/checkId'


const { validateAddUser,validateCreateBusiness,validateAddPayment } = InPutValidation;

const {
    GetAllusers,AddUser,
   } = AdminController;
   const {
    createBusiness,GetAllBusiness,GetOneBusiness
   } = BusinessController;

   const {
    addPayment,
   } =PaymentController

const { GetRoles } = RolesController;
const router = express.Router();
router.get('/roles', checkToken ,GetRoles);
router.get('/users', checkToken ,checkRole.adminRole,GetAllusers);
router.post('/users', checkToken ,checkRole.adminRole,validateAddUser,AddUser);
router.post('/business', checkToken ,checkRole.adminRole,validateCreateBusiness,createBusiness);
router.post('/payment/:businessID', checkToken,checkId ,checkRole.adminRole,validateAddPayment,addPayment);
router.get('/business',checkToken ,checkRole.adminRole,GetAllBusiness);
router.get('/business/:businessID',checkToken,checkId,checkRole.adminRole,GetOneBusiness)

export default router;

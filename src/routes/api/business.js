import express from 'express';
import BusinessController from '../../controllers/business/business';
import checkToken from '../../middlewares/checkToken'
import checkId from '../../helpers/checkId'

   const {
    GetAllMyBusiness,GetOneMyBusiness
   } = BusinessController;

const router = express.Router();
router.get('/',checkToken,GetAllMyBusiness);
router.get('/:businessID',checkToken,checkId,GetOneMyBusiness)

export default router;

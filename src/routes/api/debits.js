import express from 'express';
import DebitsController from '../../controllers/sales/debits';
import checkToken from '../../middlewares/checkToken'
import checkRole from '../../middlewares/checkRole'
import InPutValidation from '../../validation/inPutValidation'
import checkId from '../../helpers/checkId'


const { validateCredits } = InPutValidation;

   const {
    AddDebits,GetAllDebits,GetOneDebits
   } = DebitsController;  
   
const router = express.Router();
router.post('/:businessID', checkToken,checkId,checkRole.managerRole,validateCredits,AddDebits);
router.get('/:businessID', checkToken ,checkId,checkRole.managerRole,GetAllDebits);
router.get('/:businessID/:id', checkToken ,checkId,checkRole.managerRole,GetOneDebits);

export default router;

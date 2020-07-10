import express from 'express';
import CreditsController from '../../controllers/sales/credits';
import checkToken from '../../middlewares/checkToken'
import checkRole from '../../middlewares/checkRole'
import InPutValidation from '../../validation/inPutValidation'
import checkId from '../../helpers/checkId'


const { validateCredits } = InPutValidation;

   const {
    AddCredits,GetAllCredits,GetOneCredits
   } = CreditsController;  
   
const router = express.Router();
router.post('/:businessID', checkToken,checkId,checkRole.managerRole,validateCredits,AddCredits);
router.get('/:businessID', checkToken ,checkId,checkRole.managerRole,GetAllCredits);
router.get('/:businessID/:id', checkToken ,checkId,checkRole.managerRole,GetOneCredits);

export default router;

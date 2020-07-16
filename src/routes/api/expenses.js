import express from 'express';
import ExpensesController from '../../controllers/sales/expenses';
import checkToken from '../../middlewares/checkToken'
import checkRole from '../../middlewares/checkRole'
import InPutValidation from '../../validation/inPutValidation'
import checkId from '../../helpers/checkId'


const { validateCredits } = InPutValidation;

   const {
    AddExpenses,GetAllExpenses,GetOneExpenses
   } = ExpensesController;  
   
const router = express.Router();
router.post('/:businessID', checkToken,checkId,checkRole.managerRole,validateCredits,AddExpenses);
router.get('/:businessID', checkToken ,checkId,checkRole.managerRole,GetAllExpenses);
router.get('/:businessID/:id', checkToken ,checkId,checkRole.managerRole,GetOneExpenses);

export default router;

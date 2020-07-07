import express from 'express';
import SalesController from '../../controllers/sales/sales'
import checkToken from '../../middlewares/checkToken'
import InPutValidation from '../../validation/inPutValidation'
import checkId from '../../helpers/checkId'


const {  validateAddSales } = InPutValidation;

const { addSales,addCart } = SalesController;
const router = express.Router();
router.post ('/:businessID',checkToken,checkId,validateAddSales,addSales);
router.post ('/list/:businessID',checkToken,checkId,validateAddSales,addCart);

export default router;
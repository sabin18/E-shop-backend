import express from 'express';
import SalesController from '../../controllers/sales/sales'
import checkToken from '../../middlewares/checkToken'
import InPutValidation from '../../validation/inPutValidation'


const {  validateAddSales } = InPutValidation;

const { addSales,addCart } = SalesController;
const router = express.Router();
router.post ('/:businessID',checkToken,validateAddSales,addSales);
router.post ('/list/:businessID',checkToken,validateAddSales,addCart);

export default router;
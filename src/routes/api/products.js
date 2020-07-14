import express from 'express';
import ProductController from '../../controllers/products/product'
import checkToken from '../../middlewares/checkToken'
import checkRole from '../../middlewares/checkRole'
import InPutValidation from '../../validation/inPutValidation'
import checkId from '../../helpers/checkId'


const { validateAddProduct } = InPutValidation;

const { addProduct,getAllProduct,getOneProduct } = ProductController;
const router = express.Router();
router.post ('/:businessID',checkToken,checkId,validateAddProduct,checkRole.managerRole,addProduct);
router.get ('/:businessID',checkToken,checkId,checkRole.managerRole,getAllProduct);
router.get ('/:businessID/:id',checkToken,checkId,checkRole.managerRole,getOneProduct);


export default router;
import models from '../../database/models'
import responseUtil from '../../Utils/responseUtil'
import strings from '../../Utils/strings'
import isMyBusiness from '../../helpers/checkBusiness'
import { Op } from 'sequelize';


const { ErrorResponse, response } = responseUtil;


class ProductController {

static async addProduct(req,res) {
const {name,price,isQuantitify,quantity,expiryDate}=req.body;
const Quantity=isQuantitify==='false'?0:quantity
const  { businessID } = req.params;

await isMyBusiness(req,res);

const checkProduct = await models.products.findOne({ where:{ [Op.and]: [{name}, {business:businessID}]}});

if (checkProduct){
   return  ErrorResponse(res,409,strings.product.error.PRODUCT_EXIT)
}
const newProduct = await models.products.create({
    name:name,
    price:price,
    business:businessID,
    isQuantitify:isQuantitify,
    quantity:Quantity,
    expiryDate:expiryDate

 })
 return response (res,200,strings.product.success.PRODUCT_CREATED,newProduct);
}
    
}

export default ProductController
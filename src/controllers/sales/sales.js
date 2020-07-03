import models from '../../database/models'
import responseUtil from '../../Utils/responseUtil'
import strings from '../../Utils/strings'
import isMyBusiness from '../../helpers/checkBusiness'
import { Op } from 'sequelize';
import ip from 'ip';
import moment from 'moment';


const { ErrorResponse, response } = responseUtil;
const MyIp=ip.address();

class SalesController {

    static async addCart(req,res) {
        const {product,quantity}=req.body;
        const  { businessID } = req.params;
        const cartData=[{
                productId:product,
                quantity:quantity,
                ip:MyIp,
                user:req.user.payload.id,
                business:businessID 
            }];
        await isMyBusiness(req,res);
        
        const checkProduct = await models.products.findOne({ where:{ [Op.and]: [{id:product}, {business:businessID}]}});
        const cart= await models.cart.findOne({ where:{ [Op.and]: [{productId:product}, {business:businessID},{ip:MyIp},{user:req.user.payload.id}]}});
        
        if (!checkProduct){
           return  ErrorResponse(res,404,strings.product.error.PRODUCT_NOT_FOUND)
        }
        if (cart){
            return  ErrorResponse(res,409,strings.sales.error.CART_ARLEARDY_EXIST)
         }
        if(checkProduct.quantity<quantity){
            return  ErrorResponse(res,400,strings.sales.error.QUANTITY_ERROR)
        }
        const newCart = await models.cart.bulkCreate(cartData);
         return response (res,201,strings.sales.success.SALES_CREATED,newCart);
    }

static async addSales(req,res) {
const {product,quantity}=req.body;
const  { businessID } = req.params;

await isMyBusiness(req,res);

const checkProduct = await models.products.findOne({ where:{ [Op.and]: [{id:product}, {business:businessID}]}});

if (!checkProduct){
   return  ErrorResponse(res,404,strings.product.error.PRODUCT_NOT_FOUND)
}

const salesData=[{
    productId:product,
    quantity:quantity,
    price:quantity*checkProduct.price,
    date:moment().format('YYYY-MM-DD HH:mm:ss'),
    user:req.user.payload.id,
    business:businessID 
}];

if(checkProduct.quantity<quantity){
    return  ErrorResponse(res,400,strings.sales.error.QUANTITY_ERROR)
}
const newQuantiy =checkProduct.quantity-quantity;
await models.products.update({ quantity: newQuantiy },{where:{id:product}});
await models.cart.destroy({ where:{ [Op.and]: [{productId:product}, {business:businessID},{ip:MyIp},{user:req.user.payload.id}]}});
const newSales = await models.sales.bulkCreate(salesData);
return response (res,201,strings.sales.success.SALES_CREATED,newSales);
}
    
}

export default SalesController
import models from '../database/models'
import responseUtil from '../Utils/responseUtil'
import strings from '../Utils/strings'
import moment from 'moment';
import { Op } from 'sequelize';
import notifSender from './sendNotification';


const saveSales = async (res,req,{product,quantity},businessID,id) =>{

const { ErrorResponse, response } = responseUtil;

const APP_URL = `${req.protocol}://${req.headers.host}`;
const checkProduct = await models.products.findOne({ where:{ [Op.and]: [{id:product}]}});
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
    return  ErrorResponse(res,400,`on ${checkProduct.name},${strings.sales.error.QUANTITY_ERROR}`)
}
const newQuantiy =checkProduct.quantity-quantity;
await models.products.update({ quantity: newQuantiy },{where:{id:product}});
// await models.cart.destroy({ where:{ [Op.and]: [{productId:product}, {business:businessID},{ip:MyIp},{user:req.user.payload.id}]}});
if(newQuantiy<=10){
await  notifSender('reduced in stock of the product',product,businessID,id,APP_URL,`there is ${newQuantiy} ${checkProduct.name} remaing in stock`,'product','App','Email');
}
const newSales = await models.sales.bulkCreate(salesData);
return response (res,201,strings.sales.success.SALES_CREATED);
}
export default saveSales
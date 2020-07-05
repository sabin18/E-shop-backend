import models from '../database/models'
import responseUtil from '../Utils/responseUtil'
import strings from '../Utils/strings'
import { Op } from 'sequelize';

const { ErrorResponse } = responseUtil;

const isMyBusiness = async (req,res)  =>{
const { id } = req.user.payload;
const { businessID } = req.params;

const business = await models.business.findOne({where:{id:businessID}});
const employee = await models.employees.findOne({ where:{ [Op.and]: [{userId:id}, {businessId:businessID}]}});

 if(!business){
   return  ErrorResponse(res,404,strings.business.error.BUSINESS_NOT_EXIST);
 }

 if (business.owner != id && !employee){
  return  ErrorResponse(res,403,strings.business.error.NO_ACCESS);
 }

 if (business.isPaid===false){
  return  ErrorResponse(res,403,strings.payment.error.NO_SUBCRIPTION);
 }
 
}

export default isMyBusiness;


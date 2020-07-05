import models from '../database/models'
import responseUtil from '../Utils/responseUtil'
import strings from '../Utils/strings'
import moment from 'moment';

const { ErrorResponse } = responseUtil;

const isPayed = async (req,res)  =>{
const { businessID } = req.params;
const business = await models.business.findOne({where:{id:businessID},
    attributes: { exclude: ['payment'] },
    include: [{ association: 'payments', attributes: ['expiryDate'] }],
     });
const expiryDate= business.payments.expiryDate;
const nowDate=moment().format('YYYY-MM-DD HH:mm:ss')

 if(!business){
   return  ErrorResponse(res,404,strings.business.error.BUSINESS_NOT_EXIST);
 }

 if(expiryDate===nowDate){
    await  models.business.update({ isPaid:false},{where:{id:businessID}});
 }
 
}

export default isPayed



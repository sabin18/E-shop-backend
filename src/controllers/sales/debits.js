import models from '../../database/models'
import responseUtil from '../../Utils/responseUtil'
import strings from '../../Utils/strings'
import isMyBusiness from '../../helpers/checkBusiness'
import { Op } from 'sequelize';


const { ErrorResponse, response } = responseUtil;
class DebitsController {
static  async GetAllDebits(req,res){
    const  { businessID } = req.params;
    await isMyBusiness(req,res);
    const debits = await models.debits.findAll({ where:{business:businessID},
    attributes: {exclude: ['user', 'business',]},
    include: [{ association: 'users',attributes: { exclude: ['password','role','createdAt','updatedAt'] },include: [{ association: 'roles', attributes: ['name'] }] },{ association: 'businesses', attributes: ['name'] }],
    })
   return response (res,200,'',debits)
}

static async GetOneDebits(req,res){
    const  { businessID,id} = req.params;
    await isMyBusiness(req,res);
    const debit = await models.debits.findOne({ where:{[Op.and]:[{business:businessID},{id}]},
    attributes: {exclude: ['user', 'business',]},
    include: [{ association: 'users',attributes: { exclude: ['password','role','createdAt','updatedAt'] },include: [{ association: 'roles', attributes: ['name'] }] },{ association: 'businesses', attributes: ['name'] }],
    })

    if(!debit){
      return  ErrorResponse(res,404,strings.debits.error.DEBIT_NOT_FOUND);
    }
   return response (res,200,'',debit)
}

static async AddDebits(req,res) {
  const { businessID } = req.params;
  const {id}=req.user.payload;
  const  {name,amount,reason} = req.body;
  
  await isMyBusiness(req,res);

   const newdebit = await models.debits.create ({
      name:name,
      amount:amount,
      reason:reason,
      user:id,
      business:businessID,
   })
   return response (res,201,strings.debits.success.DEBIT_CREATED,newdebit)
}
}

export default DebitsController;
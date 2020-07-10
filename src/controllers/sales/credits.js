import models from '../../database/models'
import responseUtil from '../../Utils/responseUtil'
import strings from '../../Utils/strings'
import isMyBusiness from '../../helpers/checkBusiness'
import { Op } from 'sequelize';


const { ErrorResponse, response } = responseUtil;
class CreditsController {
static  async GetAllCredits(req,res){
    const  { businessID } = req.params;
    await isMyBusiness(req,res);
    const credits = await models.credits.findAll({ where:{business:businessID},
    attributes: {exclude: ['user', 'business',]},
    include: [{ association: 'users',attributes: { exclude: ['password','role','createdAt','updatedAt'] },include: [{ association: 'roles', attributes: ['name'] }] },{ association: 'businesses', attributes: ['name'] }],
    })
   return response (res,200,'',credits)
}

static async GetOneCredits(req,res){
    const  { businessID,id} = req.params;
    await isMyBusiness(req,res);
    const credit = await models.credits.findOne({ where:{[Op.and]:[{business:businessID},{id}]},
    attributes: {exclude: ['user', 'business',]},
    include: [{ association: 'users',attributes: { exclude: ['password','role','createdAt','updatedAt'] },include: [{ association: 'roles', attributes: ['name'] }] },{ association: 'businesses', attributes: ['name'] }],
    })

    if(!credit){
      return  ErrorResponse(res,404,strings.credit.error.CREDIT_NOT_FOUND);
    }
   return response (res,200,'',credit)
}

static async AddCredits(req,res) {
  const { businessID } = req.params;
  const {id}=req.user.payload;
  const  {name,amount,reason} = req.body;
  
  await isMyBusiness(req,res);

   const newCredit = await models.credits.create ({
      name:name,
      amount:amount,
      reason:reason,
      user:id,
      business:businessID,
   })
   return response (res,201,strings.credit.success.CREDIT_CREATED,newCredit)
}
}

export default CreditsController;
import models from '../../database/models'
import responseUtil from '../../Utils/responseUtil'
import strings from '../../Utils/strings'
import isMyBusiness from '../../helpers/checkBusiness'
import { Op } from 'sequelize';


const { ErrorResponse, response } = responseUtil;
class ExpensesController {
static  async GetAllExpenses(req,res){
    const  { businessID } = req.params;
    await isMyBusiness(req,res);
    const expenses = await models.expenses.findAll({ where:{business:businessID},
    attributes: {exclude: ['user', 'business',]},
    include: [{ association: 'users',attributes: { exclude: ['password','role','createdAt','updatedAt'] },include: [{ association: 'roles', attributes: ['name'] }] },{ association: 'businesses', attributes: ['name'] }],
    })
   return response (res,200,'',expenses)
}

static async GetOneExpenses(req,res){
    const  { businessID,id} = req.params;
    await isMyBusiness(req,res);
    const expense = await models.expenses.findOne({ where:{[Op.and]:[{business:businessID},{id}]},
    attributes: {exclude: ['user', 'business',]},
    include: [{ association: 'users',attributes: { exclude: ['password','role','createdAt','updatedAt'] },include: [{ association: 'roles', attributes: ['name'] }] },{ association: 'businesses', attributes: ['name'] }],
    })

    if(!expense){
      return  ErrorResponse(res,404,strings.expenses.error.EXPENSE_NOT_FOUND);
    }
   return response (res,200,'',expense)
}

static async AddExpenses(req,res) {
  const { businessID } = req.params;
  const {id}=req.user.payload;
  const  {name,amount,reason} = req.body;
  
  await isMyBusiness(req,res);

   const newExpense = await models.expenses.create ({
      name:name,
      amount:amount,
      reason:reason,
      user:id,
      business:businessID,
   })
   return response (res,201,strings.expenses.success.EXPENSE_CREATED,newExpense)
}
}

export default ExpensesController;
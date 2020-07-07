import models from '../../database/models'
import responseUtil from '../../Utils/responseUtil'
import strings from '../../Utils/strings'
import hashPassword from '../../utils/hashPassword';
import isMyBusiness from '../../helpers/checkBusiness'
import { Op } from 'sequelize';


const { ErrorResponse, response } = responseUtil;
class EmployeeController {
static  async GetAllEmployees(req,res){
    const  { businessID } = req.params;
    await isMyBusiness(req,res);
    const users = await models.employees.findAll({ where:{businessId:businessID},
    attributes: {exclude: ['userId', 'businessId',]},
    include: [{ association: 'user',attributes: { exclude: ['password','role','createdAt','updatedAt'] },include: [{ association: 'roles', attributes: ['name'] }] },{ association: 'business', attributes: ['name'] }],
    })
   return response (res,200,'',users)
}

static  async GetOneEmployee(req,res){
    const  { businessID} = req.params;
    const  {user} =req.body;
    await isMyBusiness(req,res);
    const users = await models.employees.findOne({ where:{[Op.or]:[{businessId:businessID},{userId:user}]},
    attributes: {exclude: ['userId', 'businessId',]},
    include: [{ association: 'user',attributes: { exclude: ['password','role','createdAt','updatedAt'] },include: [{ association: 'roles', attributes: ['name'] }] },{ association: 'business', attributes: ['name'] }],
    })
   return response (res,200,'',users)
}

static async AddEmployee(req,res) {
const  { businessID } = req.params;
  const  {firstName,lastName,email,password,role,phoneNumber,ID} = req.body;
  const user = await models.Users.findOne({ where:{ [Op.or]: [{email}, {ID}]}});

  await isMyBusiness(req,res);

    if (user) {
    return  ErrorResponse (res,409,strings.users.error.USER_ALREADY_FOUND)

    }
   const newUser = await models.Users.create ({
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:hashPassword(password),
      role:role,
      isActive:true,
      isVerified:false,
      phoneNumber:phoneNumber,
      ID:ID,
      image:'',
      
   })
    await models.employees.create({
        userId:newUser.id,
        businessId: businessID,
        isActive:true
     });
   return response (res,200,strings.users.success.USER_ADDED,newUser)
}
}

export default EmployeeController;
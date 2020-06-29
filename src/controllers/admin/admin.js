import models from '../../database/models'
import responseUtil from '../../Utils/responseUtil'
import strings from '../../Utils/strings'
import hashPassword from '../../utils/hashPassword';
import { Op } from 'sequelize';


const { ErrorResponse, response } = responseUtil;
class AdminController {
static  async GetAllusers(req,res){
   const users = await models.Users.findAll({ 
    attributes: { exclude: ['password', 'role'] },
    include: [{ association: 'roles', attributes: ['id', 'name'] }],
    })
   return response (res,200,'',users)
}

static async AddUser(req,res) {
  const  {firstName,lastName,email,password,role,phoneNumber,ID} = req.body;
  const user = await models.Users.findOne({ where:{ [Op.or]: [{email}, {ID}]}});
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
   return response (res,200,strings.users.success.USER_ADDED,newUser)
}
}

export default AdminController;
import models from '../database/models'
import responseUtil from '../Utils/responseUtil'


const { ErrorResponse, response } = responseUtil;
class AdminController {
static  async GetAllusers(req,res){
   const users = await models.Users.findAll({ 
    attributes: { exclude: ['password', 'role'] },
    include: [{ association: 'roles', attributes: ['id', 'name'] }],
    })
   return response (res,200,'',users)
}
}

export default AdminController;
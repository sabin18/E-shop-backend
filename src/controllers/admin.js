import models from '../database/models'
import responseUtil from '../Utils/responseUtil'


const { ErrorResponse, response } = responseUtil;
class AdminController {
static  async GetAllusers(req,res){
   const users = await models.Users.findAll({ 
    })
   return response (res,200,'',users)
}
}

export default AdminController;
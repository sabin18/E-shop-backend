import models from '../../database/models'
import responseUtil from '../../Utils/responseUtil'
import strings from '../../Utils/strings'


const { ErrorResponse, response } = responseUtil;


class BusinessController {

static async createBusiness(req,res) {
const {name,businessType,ownerEmail}=req.body;

const business = await models.business.findOne({where:{name}});
const user = await models.Users.findOne({ where:{email:ownerEmail}});

if (!user){
   return  ErrorResponse(res,404,strings.users.error.USER_NOT_FOUND)
}

if (business){
   return  ErrorResponse(res,409,strings.business.error.BUSINESS_EXIT)
}
const businessTypes = await models.businessType.findOne({where:{name:businessType}})

const newBusiness = await models.business.create({
    name:name,
    businessTypes:businessTypes.id,
    owner:user.id,
    isPaid:false,
 })
 return response (res,200,strings.business.success.BUSINESS_ADDED,newBusiness)
}

static  async GetAllBusiness(req,res){
   const business = await models.business.findAll({
   attributes: { exclude: ['payment'] },
   include: [{ association: 'payments', attributes: ['amount','payDate','expiryDate','period'] }],
    })
   return response (res,200,'',business)
}
    
}

export default BusinessController
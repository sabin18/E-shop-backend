import models from '../../database/models'
import responseUtil from '../../Utils/responseUtil'
import strings from '../../Utils/strings'
import isMyBusiness from '../../helpers/checkBusiness'
import AllMyBusiness from '../../helpers/AllMyBusiness'


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
   attributes: { exclude: ['payment','owner'] },
   include: [{ association: 'user',attributes: { exclude: ['password','role','createdAt','updatedAt'] }},{ association: 'payments', attributes: ['amount','payDate','expiryDate','period'] }],
    })
   return response (res,200,'',business)
}

static  async GetOneBusiness(req,res){
   const { businessID }= req.params;
   const business = await models.business.findOne({where:{id:businessID},
   attributes: { exclude: ['payment'] },
   include: [{ association: 'user',attributes: { exclude: ['password','role','createdAt','updatedAt'] }},{ association: 'payments', attributes: ['amount','payDate','expiryDate','period'] }],
    })
   if(!business) {
      return  ErrorResponse(res,404,strings.business.error.BUSINESS_NOT_EXIST);  
   }
   return response (res,200,'',business)
}
static  async GetAllMyBusiness(req,res){
   await AllMyBusiness(req,res);
}

static  async GetOneMyBusiness(req,res){
   const { businessID }= req.params;
   await isMyBusiness(req,res);
   const business = await models.business.findOne({where:{id:businessID},
   attributes: { exclude: ['payment'] },
   include: [{ association: 'user',attributes: { exclude: ['password','role','createdAt','updatedAt'] }},{ association: 'payments', attributes: ['amount','payDate','expiryDate','period'] }],
    })
   return response (res,200,'',business)
}
    
}

export default BusinessController
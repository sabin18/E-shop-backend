import models from '../database/models'
import responseUtil from '../Utils/responseUtil'
import strings from '../Utils/strings'

const { ErrorResponse,response } = responseUtil;

const AllMyBusiness = async (req,res)  =>{
const { id } = req.user.payload;
const business = await models.business.findAll({where:{owner:id}});
const employee = await models.employees.findOne({ where:{userId:id}});

const allEmployeeBusiness =!employee ? employee: await models.business.findAll({where:{id:employee.businessId},
    attributes: { exclude: ['payment'] },
    include: [{ association: 'user',attributes: { exclude: ['password','role','createdAt','updatedAt'] }},{ association: 'payments', attributes: ['amount','payDate','expiryDate','period'] }],
     })

 if(business.lenght===0 && allEmployeeBusiness.lenght===0){
   return  ErrorResponse(res,404,strings.business.error.BUSINESS_NOT_EXIST);
 }

if(!business.lenght===0){
 return response(res,200,'',business);
}
else{
return response(res,200,allEmployeeBusiness);  
}
}

export default AllMyBusiness;


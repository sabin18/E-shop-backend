import models from '../database/models'
import responseUtil from '../Utils/responseUtil'
import strings from '../Utils/strings'

const { ErrorResponse,response } = responseUtil;

const findOwner = async (businessId)  =>{
const business = await models.business.findOne({where:{id:businessId}});
const ownerData = await models.Users.findOne({ where:{id:business.owner}});

return ownerData;
}
export default findOwner;

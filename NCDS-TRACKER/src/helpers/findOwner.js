import models from '../database/models'
import responseUtil from '../Utils/responseUtil'
import strings from '../Utils/strings'

// const { ErrorResponse,response } = responseUtil;

const findOwner = async (businessId)  =>{
const paharmacy = await models.paharmacy.findOne({where:{id:businessId}});
const ownerData = await models.Users.findOne({ where:{id:paharmacy.owner}});

return ownerData;
}
export default findOwner;

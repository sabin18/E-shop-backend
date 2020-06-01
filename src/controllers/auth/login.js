import models from '../../database/models'
import responseUtil from '../../Utils/responseUtil'
import strings from '../../Utils/strings'
import generateToken from '../../helpers/generateToken';
import bcrypt from 'bcrypt';

const { ErrorResponse, response } = responseUtil;
class AuthController {

static async Login (req, res) {

    const {email, password} = req.body;
    const user = await models.Users.findOne({ where: {email}});
    if (!user) {
    return  ErrorResponse (res,400,strings.users.error.USER_NOT_FOUND)

    }
    if (user.isVerified === false) {
      return responseError(res, 400, strings.users.error.UNVERIFIED);
    }

    const checkpassword = bcrypt.compareSync(password, user.password);
    if(!checkpassword){
       return ErrorResponse(res,400,strings.users.error.INCORRECT_PASSWORD);
    }
  const userToken = generateToken(user)
  const LoginedUser={
      userId:user.id,
      FirstName:user.FirstName,
      email:user.email,
      business: user.businessId,
      role:user.role,
      token:userToken
  };
  return response (res,200,strings.users.success.LOGIN_SUCCESS, LoginedUser);
}

}

export default AuthController;
import jwt from 'jsonwebtoken';
import responseUtil from '../Utils/responseUtil'
import strings from '../Utils/strings'
import isPayed from '../helpers/checkPayement'


const { ErrorResponse } = responseUtil;

export default async (req, res, next) => {
  const header = req.headers.authorization;
  if (typeof header === 'undefined') return ErrorResponse(res,401 ,strings.users.error.SIGN_IN_FIRST);

  const bearer = header.split(' ');
  const token = bearer[1];

  try {
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifiedUser;
    isPayed(req,res)
    return next();
  } catch (error) {
    return ErrorResponse(
        res,401 ,strings.users.error.UNABLE_TO_PROCESS,
    );
  }
};

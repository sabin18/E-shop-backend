import idValidator from '../validation/idValidator';
import responseUtil from '../Utils/responseUtil'
// import strings from '../utils/stringsUtil';

const { ErrorResponse } = responseUtil;
// const { validateId } = InPutValidation;
const checkId = (req, res, next) => {
  const {businessID} = req.params;
  const { error } = idValidator({ businessID })
  if (error) {
    return ErrorResponse(res, 400, error.details[0].message );
  }
  return next();
};

export default checkId;

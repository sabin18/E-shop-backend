import Joi from '@hapi/joi';
import responseUtil from '../utils/responseUtil';

const { ErrorResponse } = responseUtil;

const validation = (req, res, schema, next) => {
  const { error } = schema.validate(req.body, req.params, { abortEarly: false });
  if (error) {
    const errorMessages = [];
    error.details.forEach(detail => {
      errorMessages.push(detail.message.split('"').join(''));
    });
    return ErrorResponse(res,400,errorMessages);
  }
  return next();
};

class Inputvalidation {
static validateLogin(req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email({ minDomainSegments: 2 }).message('email field should be a valid email address. e.g: johndoe@gmail.com.').required(),
      password: Joi.required(),
    });
    validation(req, res, schema, next);
  }
}

export default Inputvalidation
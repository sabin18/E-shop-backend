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
  static validateAddUser(req, res, next) {
    const schema = Joi.object({
      firstName: Joi.string().trim().min(3).max(50)
        .message('Name should be at least 3 character and not more than 50 characters!')
        .required(),
      lastName: Joi.string().trim().min(3).max(50)
        .message('Name should be at least 3 character and not more than 50 characters!')
        .required(),
      email: Joi.string().email({ minDomainSegments: 2 }).message('email field should be a valid email address. e.g: johndoe@gmail.com.').required(),
      password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/).message('password field should contain at least 6 characters, at least 1 lowercase, 1 uppercase and 1 number and a special character.').required(),
      ID: Joi.string().regex(/^\s*-?[0-9]{16,16}\s*$/).message('ID should be 16 numbers!').required(),
      phoneNumber:Joi.string().regex(/^\s*-?[0-9]{10,10}\s*$/).message('phoneNumber should be 10 numbers').required(),
      role: Joi.number().integer().required(),     
    });

    validation(req, res, schema, next);
  }

  static validateCreateBusiness(req, res, next) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(250).message('username field should be at least 3 alphanumeric characters long.')
      .required(),
      businessType: Joi.string().required().valid('ownerBusiness', 'Small Shop', 'Big shop', 'Restaurant', 'Hotel'),
      ownerEmail: Joi.string().email({ minDomainSegments: 2 }).message('email field should be a valid email address. e.g: johndoe@gmail.com.').required(),     
    });

    validation(req, res, schema, next);
  }
}

export default Inputvalidation
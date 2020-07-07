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
      name: Joi.string().min(3).max(30).message('username field should be at least 3 alphanumeric characters long.')
      .required(),
      businessType: Joi.string().required().valid('ownerBusiness', 'Small Shop', 'Big shop', 'Restaurant', 'Hotel'),
      ownerEmail: Joi.string().email({ minDomainSegments: 2 }).message('email field should be a valid email address. e.g: johndoe@gmail.com.').required(),     
    });
    validation(req, res, schema, next);
  }
    static validateAddProduct(req, res, next) {
      const schema = Joi.object({
        name: Joi.string().min(3).max(250).message('name field should be at least 3 alphanumeric characters long.')
        .required(),
        price: Joi.number().integer().min(1).required(),
        isQuantitify: Joi.boolean().required(), 
        quantity:Joi.number().integer().min(0).required(),
        expiryDate: Joi.string().regex(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/).message('expiryDate format must be YYYY-MM-DD'),    
      });
      validation(req, res, schema, next);
   
  }
  static validateAddSales(req, res, next) {
    const schema = Joi.object({
      product: Joi.number().integer().min(1).required(),
      quantity:Joi.number().integer().min(1).required(),
    });
    validation(req, res, schema, next);
 
}
static validateAddPayment(req, res, next) {
  const schema = Joi.object({
    period: Joi.number().integer().min(1).required(),
    price:Joi.number().integer().min(1).required(),
  });
  validation(req, res, schema, next);
  
}

// static validateId(req, res, next) {
//   const schema = Joi.object({
//     businessID: Joi.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i).message('You are using invalid id'),
//   });
//   validation(req, res, schema, next);
  
// }

}

export default Inputvalidation
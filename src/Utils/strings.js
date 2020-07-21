const strings ={
    users:{
        success:{
            LOGIN_SUCCESS:'succesfully login',
            USER_ADDED:'user created successfully',
            SUCCESS_VERIFIED:'You have been verifiyed',
            SEND_EMAIL: 'please check your email to see the link for reseting password',
            PASSWORD_CHANGED: 'password changed successfully',
            },

        error:{
        USER_NOT_FOUND:'can not find user with that email',
        USER_NOT_EXIST:'user not found',  
        INCORRECT_PASSWORD:'incorrect password',
        UNVERIFIED: 'You are not verified ,verify first!',
        AUTHORIZED:`You don't have access to this page`,
        UNABLE_TO_PROCESS: 'Invalid token please sign again',
        SIGN_IN_FIRST: 'Please sign into the application first',
        USER_ALREADY_FOUND:'user with that ID or email already exist',
        VERIFIED:'user already verified',
        PASSWORD_NOT_MATCH: 'Password and Confirm Password do not match',
        PASSWORD_ALREADY_EXISTS: 'you can not change password with old password',
        INVALID_TOKEN: 'Invalid token',
        EXPERED: 'Link expired request a new one',
        }
    },


    business:{
        success:{
            BUSINESS_ADDED:'business created successfully',

        },
        error:{
            BUSINESS_EXIT:'business with this name already exist',
            NO_ACCESS:"you don't have access to this business",
            BUSINESS_NOT_EXIST:"Business doesn't exist",
        }
    },

    product:{
        success:{
         PRODUCT_CREATED:'product created succefully',
        },
        error:{
            PRODUCT_EXIT:'product with this name already exist',
            PRODUCT_NOT_FOUND:"product not found",
        }
    },

    sales:{
        success:{
         SALES_CREATED:'sales saved succefully',
        },
        error:{
            SALES_NOT_FOUND:'sales not found',
            QUANTITY_ERROR:"the quantity is greater than the one in stock",
            CART_ARLEARDY_EXIST:'you have already added this product on the list'
        }
    },

    payment:{
            success:{
             PAYMENT_CREATED:'payment saved succefully',
            },
            error:{
            NO_SUBSCRIPTION:"Your subscription has ended,Please contact service provider to renew your subscription"
            }  
    },
    credit:{
        success:{
         CREDIT_CREATED:'credit saved succefully',
        },
        error:{
         CREDIT_NOT_FOUND:'can not find  that credit',
        }  
   },
   debits:{
    success:{
     DEBIT_CREATED:'debit saved succefully',
    },
    error:{
     DEBIT_NOT_FOUND:'can not find  that debit',
    }
},  
    expenses:{
        success:{
         EXPENSE_CREATED:'expense saved succefully',
        },
        error:{
         EXPENSE_NOT_FOUND:'can not find  that exepense',
        }  
},
notifications:{
    error:{
     NOTIFICATION_NOT_FOUND:'notification not found',
    }  
}
}

export default strings
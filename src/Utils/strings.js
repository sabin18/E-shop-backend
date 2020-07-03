const strings ={
    users:{
        success:{
            LOGIN_SUCCESS:'succesfully login',
            USER_ADDED:'user created successfully',
            },

        error:{
        USER_NOT_FOUND:'can not find user with that email',  
        INCORRECT_PASSWORD:'incorrect password',
        UNVERIFIED: 'You are not verified ,verify first!',
        AUTHORIZED:`You don't have access to this page`,
        UNABLE_TO_PROCESS: 'Invalid token please sign again',
        SIGN_IN_FIRST: 'Please sign into the application first',
        USER_ALREADY_FOUND:'user with that ID or email already exist',
        }
    },


    business:{
        success:{
            BUSINESS_ADDED:'business created successfully',

        },
        error:{
            BUSINESS_EXIT:'business with this name already exist',
            NO_ACCESS:"you don't have access to this business",
            BUSINESS_NOT_EXIST:"Business doesn't exist"
        }
    },

    product:{
        success:{
         PRODUCT_CREATED:'product created succefully',
        },
        error:{
            PRODUCT_EXIT:'product with this name already exist',
            PRODUCT_NOT_FOUND:"product doesn't exist",
            QUANTITY_ERROR:"the quantity is greater than the one in stock",
            CART_ARLEARDY_EXIST:'you have already added this product on the list'
        }
    },

    sales:{
        success:{
         SALES_CREATED:'sales saved succefully',
        },
        error:{
            // PRODUCT_EXIT:'product with this name already exist',
            // PRODUCT_NOT_FOUND:"product doesn't exist",
        }
    }
}

export default strings
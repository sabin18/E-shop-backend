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

        },
        error:{
            BUSINESS_EXIT:'business with this name already exist',
        }
    }
}

export default strings
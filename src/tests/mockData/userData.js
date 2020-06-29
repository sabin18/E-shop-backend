const userData={

  adminData:{
    id :'b936e941-0647-4a2d-ab61-ec470e86227c',
    firstName: 'John',
    lastName: 'Doe',
    email: 'admin@gmail.com',
    password:'$2b$10$VyldWKIyiuVSqZYjmz4u8OepsFJFKzQipOQzhrhQKthgn8a9OI2Au',
    role:1,
    isActive:true,
    isVerified: true,
    image:'',
    createdAt: '2020-06-03T11:29:03.411Z',
    updatedAt: '2020-06-03T11:29:03.411Z'
  }, 

  validUser:{
    firstName: 'John',
    lastName: 'Doe',
    email: 'user1@gmail.com',
    password:'Umy@45',
    role:2,
    phoneNumber:'1234567897',
    ID:'1234567897456794',
  },
  
  User1:{
    lastName: 'Doe',
    email: 'user1@gmail.com',
    password:'Umy@45',
    role:2,
    phoneNumber:'1234567897',
    ID:'1234567897456794',
  }, 
 userData1:{
        id:'6d4a21d6-f16b-4c26-9db0-acd29bdd4d20',
        firstName: 'John',
        lastName: 'Doe',
        email: 'user10@gmail.com',
        password:'Umy@45',
        role:2,
        phoneNumber:'1234567897',
        ID:'1234567897456797',
    },

  login:{
    email:'admin@gmail.com',
    password:'Pa55w0rd'
  },
  invaliLogin:{
    email: 'user1@gmail.com',
    password:'Umy@45',
  },

  missingField:{
    password:'Pa$5w0rd'
   
  }

}

export default userData;
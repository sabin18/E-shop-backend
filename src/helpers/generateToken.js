import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = user => {
  const token = JWT.sign(
    {
      payload: {
        id: user.id,
        isVerified: user.isVerified,
        email: user.email,
        role: user.role,
        business:user.businessId
      },
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '12h',
    }
  );
  return token;
};

export default generateToken;
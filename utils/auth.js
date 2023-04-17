import * as dotenv from "dotenv"
dotenv.config()
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash);
  };
  
  export const hashPassword = (password) => {
    return bcrypt.hash(password, 5);
  };
  
  export const createJWT = (id) => {
    const token = jwt.sign(
      { id: id},
      process.env.JWT_SECRET
    );
    return token;
  };
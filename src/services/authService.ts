import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as authRepository from "../repositories/authRepository"

export async function signup(email: string, password: string) {
  const SALT = 10;
  const encryptedPassword = bcrypt.hashSync(password, SALT);

  const emailExists = await authRepository.checkEmail(email);
  console.log(emailExists);
  if (emailExists) throw { type: 'conflict' };

  await authRepository.createUser({ email, password: encryptedPassword });
};

export async function login(userEmail: string, userPassword: string) {
  const userData: any = await authRepository.checkEmail(userEmail);
  const checkpassword = bcrypt.compareSync(userPassword, userData.password);

  if(!checkpassword) throw { type: 'unauthorized' };
  
  return 'token';
};
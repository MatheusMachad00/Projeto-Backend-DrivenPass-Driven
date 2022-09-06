import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function signup(email: string, password: string) {
  const SALT = 10;
  const encryptedPassword = bcrypt.hashSync(password, SALT);

//enviar pro db o usuário e senha criptografada
}

export async function login(email: string, password: string) {
  //pegar senha criptografada e email do db
  
  /* const checkpassword = bcrypt.compareSync(password, passwordDB); */
}
import bcrypt from 'bcrypt';
import * as credentialRepository from '../repositories/credentialRepository'
import { TypeNewCredentialData } from '../types/credentialTypes';
import Cryptr from 'cryptr';


export async function createCredential(credential: TypeNewCredentialData) {
  const titleExists = await credentialRepository.checkTitle(credential.title);
  if (titleExists) throw { type: 'conflict' };

  const CRYPTR_KEY = String(process.env.CRYPTR_SECRET)
  const cryptr = new Cryptr(CRYPTR_KEY);

  const { userId, url, username, password, title } = credential;

/*  const SALT = 10;
  const encryptedPassword = bcrypt.hashSync(password, SALT); */
  const encryptedPassword = cryptr.encrypt(password);

  let objectData = {
    userId,
    url,
    username,
    password: encryptedPassword,
    title
  };

  await credentialRepository.createCredencial(objectData);
};

export async function getAllUserCredentials(userId: number) {
  const result = await credentialRepository.getAllCredentials(userId);
  const CRYPTR_KEY = String(process.env.CRYPTR_SECRET)
  const cryptr = new Cryptr(CRYPTR_KEY);

  /* let decryptedData = result.map((r) => {
    const { id, userId, url, username, password, title } = r;
    const decryptedPassword = cryptr.decrypt(password);
    {
      id
      userId
      url
      username
      decryptedPassword
    }
  }); */

  return result;
};
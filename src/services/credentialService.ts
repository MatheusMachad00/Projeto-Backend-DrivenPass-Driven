import bcrypt from 'bcrypt';
import * as credentialRepository from '../repositories/credentialRepository'
import { TypeNewCredentialData } from '../types/credentialTypes';

export async function createCredential(credential: TypeNewCredentialData) {
  const titleExists = await credentialRepository.checkTitle(credential.title);
  if (titleExists) throw { type: 'conflict' };

  /* await credentialRepository.createCredencial(); */
};

/* export async function  */
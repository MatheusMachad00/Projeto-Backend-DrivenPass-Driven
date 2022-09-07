import { prisma } from "../dbStrategy/postgres";
import { TypeNewCredentialData } from "../types/credentialTypes";

export async function createCredencial(credential: TypeNewCredentialData) {
  await prisma.credentials.create({ data: credential });
};

export async function checkTitle(title: string) {
  const result = await prisma.credentials.findFirst({ where: { title } });
  return result;
};
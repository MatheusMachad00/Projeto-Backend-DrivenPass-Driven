import { prisma } from "../dbStrategy/postgres";
import { TypeNewUserData } from "../types/userTypes";

export async function checkEmail(email: string) {
  const result = await prisma.users.findFirst({ where: { email } });
  return result;
};

export async function createUser(user: TypeNewUserData) {
  await prisma.users.create({ data: user });
};
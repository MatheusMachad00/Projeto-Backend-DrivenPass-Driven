/* import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const databaseConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const connection = new Pool(databaseConfig);

export default connection; */

import pkg from '@prisma/client';

const { PrismaClient } = pkg;

export const prisma = new PrismaClient();
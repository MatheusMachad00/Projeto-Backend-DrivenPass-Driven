"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = __importDefault(require("@prisma/client"));
const { PrismaClient } = client_1.default;
exports.prisma = new PrismaClient();

import express from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { loginSchema, signupSchema } from "../schemas/authSchema";


const router = express.Router();

router.post(
  "/login", 
  validateSchemaMiddleware(loginSchema),
  );

router.post(
  "/signup", 
  validateSchemaMiddleware(signupSchema),
  );

export default router;
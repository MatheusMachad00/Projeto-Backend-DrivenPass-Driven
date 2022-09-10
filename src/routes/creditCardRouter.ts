import express from "express";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { validateToken } from "../middlewares/validateToken";
import { createCreditCardSchema } from "../schemas/creditCardSchema";

const router = express.Router();

router.post(
  "/credentials/create",
  validateToken,
  validateSchemaMiddleware(createCreditCardSchema),
  
);

export default router;